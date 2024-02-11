const button = document.getElementById("post");

button.addEventListener("click", () => {
    let location = document.querySelector("select").value;
    let text = document.querySelector("textarea").value;

    let send = {
        "location": location,
        "text": text
    }
    fetch("http://localhost:8080/order", {
                headers: {
                    "Content-Type": "text/plain"
                },
                mode: "cors",
                method: "POST",
                body: JSON.stringify(send)
            })/*
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })*/
});