const products = require("../data/product");

// GET all products
const getProduct = (req, res) => {
    res.json(products);
};

// GET single product
const getsingleProduct = (req, res) => {
    const product_id = Number(req.params.id);

    const product = products.find(p => p.id === product_id);

    if (!product) {
        return res.status(404).json({
            message: "product is not found"
        });
    }

    res.json(product);
};

// ADD product
const addProduct = (req, res) => {
    const { title, price } = req.body;

    if (!title || !price) {
        return res.status(400).json({
            message: "title and price are required"
        });
    }

    const newproduct = {
        id: products.length + 1,
        title,
        price
    };

    products.push(newproduct);

    res.status(201).json({
        success: true,
        message: "product added successfully",
        product: newproduct
    });
};

// UPDATE product
const updateProduct = (req, res) => {
    const product_id = Number(req.params.id);

    const product = products.find(p => p.id === product_id);

    if (!product) {
        return res.status(404).json({
            message: "product is not found"
        });
    }

    const { title, price } = req.body;

    product.title = title;
    product.price = price;

    res.json({
        success: true,
        message: "product updated successfully",
        product
    });
};

// DELETE product
const deleteProduct = (req, res) => {
    const product_id = Number(req.params.id);

    const product = products.find(p => p.id === product_id);

    if (!product) {
        return res.status(404).json({
            message: "product is not found"
        });
    }

    const index = products.findIndex(p => p.id === product_id);

    products.splice(index, 1);

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