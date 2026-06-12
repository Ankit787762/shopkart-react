const express = require('express');
const {getProduct,getsingleProduct} = require('../controllers/productController');
const { addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const upload = require('../middleware/multer');
const router = express.Router();

// get all products 
router.get('/',getProduct)

//get single product
router.get('/:id',getsingleProduct)

// add product
router.post("/upload", upload.single("image"), addProduct);


// update product
router.put('/:id',updateProduct)

// delete product
router.delete('/:id',deleteProduct)




module.exports = router;