setInterval(() => {
    fetch("http://localhost:8080/order", {
            headers: {
                "Content-Type": "text/plain"
            },
            mode: "cors",
            method: "GET"
        })
  }, "5000");