let table = document.querySelector("tbody");
setInterval(() => {
    let location = document.querySelector("select").value;
    fetch("http://localhost:8080/order", {
            mode: "cors",
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            table.innerHTML = "";

            if (data[location] != undefined) {
                for (const order of data[location].orders) {
                    table.innerHTML += `<tr class="${order.state}" >
                    <th>${order.id}</th>
                    <th>${order.text}</th>
                    <th>${order.state}</th>
                    </tr>`
                }
            }

        })
  }, "1000");