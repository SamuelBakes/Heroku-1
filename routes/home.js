const path = require('path');

const express = require('express');
const multer = require('multer');
const teacherController = require('../controllers/teacher');

const router = express.Router();
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assignments');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + '-' + file.originalname)
    }
})
var upload = multer({ storage: fileStorage})
//fileFilter: filefilter
router.post('/add', upload.single('PDF'), teacherController.addAssignment);
router.get('/', teacherController.getHome);
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