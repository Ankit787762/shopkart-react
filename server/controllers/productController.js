const Product = require("../data/product");

// GET all products
const getProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// GET single product
const getsingleProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: "product is not found"
        });
    }

    res.json(product);
};

// ADD product
const addProduct = async (req, res) => {
    const { image, name, title, price } = req.body;

    if (!image || !name || !title || !price) {
        return res.status(400).json({
            message: "all fields are required"
        });
    }

    const newProduct = await Product.create({
        image,
        name,
        title,
        price
    });

    res.status(201).json({
        success: true,
        message: "product added successfully",
        product: newProduct
    });
};

// UPDATE product
const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: "product is not found"
        });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json({
        success: true,
        message: "product updated successfully",
        product: updatedProduct
    });
};

// DELETE product
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: "product is not found"
        });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({
        success: true,
        message: "product deleted successfully"
    });
};

module.exports = {
    getProduct,
    getsingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
};