const express =require('express');
const { addtocart, getcart, updatecart, removecart } = require('../controllers/Cartcontroller');

const router = express.Router();
router.post('/addtocart',addtocart);
router.get('/getcart',getcart);
router.put('/updatecart',updatecart);
router.delete('/removecart',removecart);

module.exports =router;
