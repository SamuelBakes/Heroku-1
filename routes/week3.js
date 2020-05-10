//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const productsController = require('../controllers/Week/Week3/products')
router.get('/add', productsController.getAddProductPage);
router.post('/add', productsController.postAddProductPage);
router.use('/', productsController.getProducts);
module.exports = router;