import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import orderRouter from "./endpoints/orders.js";
const app = express();

app.use(cors({
    origin: "*"
}));
app.use("/", express.static("public"));
app.use(bodyParser.json())
app.use("/order", orderRouter);

app.listen(8080, () => {
    console.log("Server loaded.");
})