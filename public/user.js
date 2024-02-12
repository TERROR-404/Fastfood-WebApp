let table = document.querySelector("tbody");
let locationSelect = document.querySelector("select");


function refreshFunction() {
    let location = locationSelect.value;
    let locationsOptions = document.getElementsByTagName("option");
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
            let serLocs = [];
            for (const [key, value] of Object.entries(data)) {
                serLocs.push(key);
            }
            optLocs = [];
            for (const locHere of locationsOptions) {
                optLocs.push(locHere.value);
            }
            console.log(serLocs);
            console.log(optLocs);
            if (serLocs.length != optLocs.length) {
                locationSelect.innerHTML = "";
                for (const loc of serLocs) {
                    locationSelect.innerHTML += `<option value="${loc}">${loc}</option>`
                }
            }

        })
}
refreshFunction();
setInterval(() => {refreshFunction()}, "1000");