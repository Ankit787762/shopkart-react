const express =require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addtocart, getcart, updatecart, removecart, getProductById } = require('../controllers/Cartcontroller');
const { getProductCount } = require('../controllers/productController');

const router = express.Router();
router.post('/addtocart', authMiddleware, addtocart);
router.get('/getcart', authMiddleware, getcart);
router.put('/updatecart', authMiddleware, updatecart);
router.delete('/removecart', authMiddleware, removecart);
router.get('/getproduct/:id', authMiddleware, getProductById);
router.get('/getproductcount', authMiddleware, getProductCount);

module.exports =router;
