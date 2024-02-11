const button = document.getElementById("post");

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
            })/*
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })*/
});