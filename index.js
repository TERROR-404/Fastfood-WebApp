import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import orderRouter from "./endpoints/orders.js";
const app = express();

app.use(cors({
    origin: "*"
}));
app.post("/order",(req,res)=> res.send(req.body));
app.use("/", express.static("public"));
app.use("/order", orderRouter);

app.listen(8080);