//const Product = require('../../../models/Weeks/Week4/product')
exports.getHomePage = (req, res, next) => {
    res.render('pages/Week4/home.ejs',{
        title: "Reading Records",
        path: "/week4" 
    });
}
