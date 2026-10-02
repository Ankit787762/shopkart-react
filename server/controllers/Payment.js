const Razorpay = require("razorpay");

const createOrder = async (req, res) => {
  try {
    const amount = Number(req.body.amount);
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return res.status(503).json({
        success: false,
        message: "Payment is not configured. Set the Razorpay keys on the server."
      });
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "A valid order amount is required."
      });
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret
    });

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: "order_" + Date.now()
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order
    });

  } catch (error) {
    const gatewayMessage = error.error?.description;
    console.error("Razorpay order creation failed:", gatewayMessage || error.message);

    res.status(502).json({
      success: false,
      message: gatewayMessage || "Razorpay could not create the order. Check the server Razorpay credentials."
    });
  }
};

module.exports = {
  createOrder
};