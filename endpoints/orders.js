import express from "express";

const router = express.Router();

let orders = {
    
    "prague":{
        "greatestId": 2,
        "orders":[
            {
                "id": 1,
                "text": "chocolate",
                "state": "preparing"
            },
            {
                "id": 2,
                "text": "love",
                "state": "ready"
            }
        ]
    },
    "london":{
    }
}

router.get("/", (req, res) => {
    console.log(orders);
    res.send(orders);
});

router.post("/", (req, res) => {
    console.log(req.body.location);
    console.log(req.body.text);
    if (orders[req.body.location] != undefined) {
        orders[req.body.location].greatestId++;
        orders[req.body.location].orders.push(
            {
                "id": orders[req.body.location].greatestId,
                "text": req.body.text,
                "state": "preparing"
            }
            );
        }
        else{
            orders[req.body.location] ={
                "greatestId": 1,
                "orders": [
                    {
                        "id": 1,
                        "text": req.body.text,
                        "state": "preparing"
                    }
                ]
            };
        }

});
router.patch("/", (req, res) => {
    for (const order of orders[req.body.location].orders) {
        if (order.id == req.body.id) {
            switch (order.state) {
                case "preparing":
                    order.state = "ready"
                    break;
                case "ready":
                    order.state = "completed"
                    break;
                case "completed":
                    fetch("http://localhost:8080/order", {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        mode: "cors",
                        method: "DELETE",
                        body: JSON.stringify(req.body)
                    })
                    break;
            }
            break;
        }
    }
    res.send(req.body)
});
router.delete("/", (req, res) => {
    for (const order in orders[req.body.location].orders) {
        if (orders[req.body.location].orders[order].id == req.body.id) {
            orders[req.body.location].orders.splice(order, 1);
        }
    }
});


router.post("/location", (req, res) => {
    orders[req.body.location] = {
        "greatestId": 0,
        "orders": []
    };
    res.send(req.body)
});
router.delete("/location", (req, res) => {
    delete orders[req.body.location]
    res.send(req.body);
});

export default router;