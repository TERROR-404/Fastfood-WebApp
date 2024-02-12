const button = document.getElementById("post");
let table = document.querySelector("tbody");
const addLocation = document.getElementById("add");
const deleteLocation = document.getElementById("delete");
let locationTextbox = document.getElementsByName("locationTextbox")[0];
const locationsSelect = document.getElementsByTagName("select")[0];

button.addEventListener("click", () => {
    let location = document.querySelector("select").value;
    let text = document.querySelector("textarea").value;
    
    let data = {
        "location": location,
        "text": text
    }
    fetch("http://localhost:8080/order", {
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        method: "POST",
        body: JSON.stringify(data)
    })
});

addLocation.addEventListener("click", () =>{
    let data = {"location": locationTextbox.value};
    console.log(data);
    fetch("http://localhost:8080/order/location", {
        headers: {
            "Content-Type": "application/json"
        },
            mode: "cors",
            method: "POST",
            body: JSON.stringify(data)
    })
});

deleteLocation.addEventListener("click", () =>{
    let data = {"location": locationTextbox.value};
    fetch("http://localhost:8080/order/location", {
        headers: {
            "Content-Type": "application/json"
        },
            mode: "cors",
            method: "DELETE",
            body: JSON.stringify(data)
    })
});

function refreshFunction() {
    let location = document.querySelector("select").value;
    fetch("http://localhost:8080/order", {
        mode: "cors",
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {

        /*locationsSelect.innerHTML = "";
        for (const loc of Object.keys(data)) {
            console.log(loc);
            locationsSelect.innerHTML += `<option value="${loc}">${loc}</option>`
        }*/

        table.innerHTML = "";
    
        if (data[location] != undefined) {
            for (const order of data[location].orders) {
                table.innerHTML += `<tr class="${order.state}" >
                <th>${order.id}</th>
                <th>${order.text}</th>
                <th>${order.state}</th>
                <th><input id="${order.id}" class="next" type="button" value="next"></th>
                </tr>`
            }
        }

        let next = document.getElementsByClassName("next");
        for (const n of next) {
            n.addEventListener("click", () => {
                let data = {
                    "id": n.id,
                    "location": location
                }
                fetch("http://localhost:8080/order", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            mode: "cors",
                            method: "PATCH",
                            body: JSON.stringify(data)
                        })
            });
        }
    })
};

refreshFunction();
setInterval(() => {refreshFunction()}, "1000");