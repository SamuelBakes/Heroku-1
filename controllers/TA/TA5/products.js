const Product = require('../../../models/Weeks/Week4/product')

exports.getAddProductPage = (req, res, next) => {
    res.render('pages/Week4/add.ejs', {//'pages/addproduct' or something like that.
        title: 'Add a Product',
        path: '/week4'
    });
}

exports.postAddProductPage = (req, res, next) => {
    const product = new Product(req.body.book, req.body.description);
    product.save();
    res.redirect('/week4')
    
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('pages/Week4/adminhome.ejs', { 
            title: 'Admin', 
            prods: products,
            hasProds: products.length > 0,
            path: '/week4', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
    });  
});
}