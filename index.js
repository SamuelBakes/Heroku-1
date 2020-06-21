/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
//const formidablMiddleware = require('express-formidable');
//const formidable = require('formidable');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const mongoConnect = require('./util/database').mongoConnect;
const corsOptions = {
  origin: "https://rocky-cliffs-12951.herokuapp.com/",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

                      
// Route setup. You can implement more in the future!
//const ta01Routes = require('./routes/ta01');
//const ta02Routes = require('./routes/ta02');
//const ta03Routes = require('./routes/ta03'); 
//const ta04Routes = require('./routes/ta04'); 
//const ta05Routes = require('./routes/ta05');
//const week2Routes = require('./routes/week2');
//const week3Routes = require('./routes/week3');
//const week4Routes = require('./routes/week4');
//const week5Routes = require('./routes/week5/shop');
//const week5RoutesAdmin = require('./routes/week5/admin')

// The following Routes are specific to Project 2. The above will be commented out as necessary
const homeRoutes = require('./routes/home')
app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   // For view engine as Pug
   //.set('view engine', 'pug') // For view engine as PUG. 
   // For view engine as hbs (Handlebars)
   //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
   //.set('view engine', 'hbs')

  // .use(formidablMiddleware({
   //  multiples: true
  // }))
   //.use(bodyParser({extended: false})) // For parsing the body of a POST
     

   //.use('/ta01', ta01Routes)
   //.use('/ta02', ta02Routes) 
   //.use('/ta03', ta03Routes) 
   //.use('/ta04', ta04Routes)
   //.use('/ta05', ta05Routes)
   
   //.use('/week2', week2Routes)
   //.use('/week3', week3Routes)
   //.use('/week4', week4Routes)
   //.use('/week5/shop', week5Routes)
   //.use('/week5/admin', week5RoutesAdmin)
   
   .use('/home', homeRoutes)

   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   });
   mongoConnect(() => {
    app.listen(PORT);
  });
  
  // .then(result => {
      // This should be your user handling code implement following the course videos
  //   app.listen(PORT);
  // })
  // .catch(err => {
    // console.log(err);
  // });
  
 