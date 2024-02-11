setInterval(() => {
    fetch("http://localhost:8080/order", {
            mode: "cors",
            method: "GET"
        })
  }, "5000");