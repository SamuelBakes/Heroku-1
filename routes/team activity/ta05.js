const express = require('express');
const router = express.Router();
//const session = require('express-session');
//router.use(session({secret:'Walrus'}));
var sess;
router.get('/',(req, res, next) => {
    sess = req.session;
    if(sess.username) {
        console.log("The User name is:", sess.username);
    }
    if(!sess.username) {
        console.log("There is no known User name");
    }
    res.render('pages/TA5/home.ejs', { 
        title: 'Team Activity 04', 
        path: '/ta05', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});
router.post('/login', (req, res, next) => {
    sess = req.session;
    sess.username = req.body.username;
    sess.password = req.body.password;
});
module.exports = router;