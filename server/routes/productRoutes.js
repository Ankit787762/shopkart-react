const express = require('express');
const {getProduct,getsingleProduct} = require('../controllers/productController');
const { addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

// get all products 
router.get('/',getProduct)

//get single product
router.get('/:id',getsingleProduct)

// add product
router.post('/',addProduct)


// update product
router.put('/:id',updateProduct)

// delete product
router.delete('/:id',deleteProduct)


module.exports = router;