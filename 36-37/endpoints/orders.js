import express from "express";

import getOrder from "./orders/getOrder.js";

const router = express.Router();

router.get("/", getOrder);
router.post("/", (req, res) => res.send("/orderB"));
router.get("/:id", (req, res) => res.send("/orderC"));
router.delete("/:id", (req, res) => res.send("/orderD"));
router.patch("/:id", (req, res) => res.send("/orderE"));

export default router;