//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const productsController = require('../controllers/Week/Week4/products');
const adminController = require('../controllers/Week/Week4/admin');
const homeController = require('../controllers/Week/Week4/home');
router.use('/home', homeController.getHomePage);
router.use('/admin', adminController.getAdminPage);
router.get('/add', adminController.getAddProductPage);
router.post('/confirmAdd', adminController.confirmAddProductPage);
router.post('/saveProd', adminController.saveProd);
router.get('/delete', adminController.getDeleteProductPage);
router.post('/confirmDelete', adminController.confirmDeleteProductPage);
router.post('/deleteProd', adminController.deleteProd);
router.use('/', homeController.getHomePage);
module.exports = router;