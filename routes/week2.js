//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
router.get('/BookSub',(req, res, next) => {
    res.render('pages/Book-Sub', { 
        title: 'Book Submit', 
        path: '/week2', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});
router.post('/BookSub',(req, res, next) => {
    console.log(req.body);
    const pdf = req.body.pdf;
    fs.appendFile(path.join(__dirname, '..', 'Docs', 'test.pdf'),pdf, (err) =>{
        if (err) throw err;
    });
    res.render('pages/Book-Pres', { 
        title: 'Book Present', 
        path: '/week2', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        book: req.body.book,
        description: req.body.description
    });
});
router.use('/',(req, res, next) => {
    res.render('pages/Book-Sub', { 
        title: 'Book Submit', 
        path: '/week2', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});
module.exports = router;