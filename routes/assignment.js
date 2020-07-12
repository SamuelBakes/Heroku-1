const path = require('path');
const express = require('express');
const multer = require('multer');
const assignmentController = require('../controllers/assignment');

const router = express.Router();


//fileFilter: filefilter
router.get('/', assignmentController.presentAssignment);
//router.post('/add-file', teacherController.addFile);
// /admin/add-product => GET
//router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
//router.get('/products', adminController.getProducts);

// /admin/add-product => POST
//router.post('/add-product', adminController.postAddProduct);

//router.get('/edit-product/:productId', adminController.getEditProduct);

//router.post('/edit-product', adminController.postEditProduct);

//router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;