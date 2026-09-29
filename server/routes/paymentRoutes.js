const express = require("express");

const router = express.Router();

const { createOrder } = require("../controllers/Payment");

router.post("/create-order", createOrder);

module.exports = router;