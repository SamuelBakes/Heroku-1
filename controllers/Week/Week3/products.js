const Product = require('../../../models/Weeks/Week3/product')

exports.getAddProductPage = (req, res, next) => {
    res.render('pages/Week3/add.ejs', {//'pages/addproduct' or something like that.
        title: 'Add a Product',
        path: '/week3'
    });
}

exports.postAddProductPage = (req, res, next) => {
    const product = new Product(req.body.book, req.body.description);
    product.save();
    res.redirect('/week3')
    
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('pages/Week3/disp.ejs', { 
            title: 'Home', 
            prods: products,
            hasProds: products.length > 0,
            path: '/week3', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
    });  
});
}