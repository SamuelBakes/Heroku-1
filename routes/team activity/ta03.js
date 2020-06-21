//TA03 PLACEHOLDER
//const express = require('express');
//const router = express.Router();
//const https = require('https');
//router.get('/',(req, res, next) => {
    //https.get('https://byui-cse.github.io/cse341-course/lesson03/items.json', (ress) => {
      //  console.log(ress);
        //ress.on('data'){}
    //});
 //   res.render('pages/ta03', { 
   //     title: 'Team Activity 03', 
     //   path: '/ta04', // For pug, EJS 
       // activeTA03: true, // For HBS
        //contentCSS: true, // For HBS
        //data: true // change later.
    //});
//});

//module.exports = router;
//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;



