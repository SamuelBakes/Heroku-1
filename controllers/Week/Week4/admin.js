const Product = require('../../../models/Weeks/Week4/product');
exports.getAdminPage = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('pages/Week4/adminhome.ejs',{
            title: "Reading Records Admin",
            path: "/week4", 
            prods: products,
            hasProds: products.length > 0
        });
    });
}
exports.getAddProductPage = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('pages/Week4/AddProduct.ejs',{
            title: "Add a Producut",
            path: "/week4",
        });
    });
}
exports.confirmAddProductPage = (req,res,next) => {
    Product.fetchAll((products) => {
        console.log(res);
        res.render('pages/Week4/ConfirmAdd.ejs',{
            title: "Confirm Product",
            name: req.body.productName,
            description: req.body.description,
            points: req.body.points,
            id: req.body.id,
            path: "/week4"
        });
    });
}
exports.saveProd = (req,res,next) => {
    Product.fetchAll((products) => {
        const product = new Product(req.body.productName, req.body.description, req.body.points, req.body.id);
        product.save();
        res.redirect('/week4')
    });
}
exports.getDeleteProductPage = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('pages/Week4/DeleteProduct.ejs',{
            title: "Delete a Product",
            path: "/week4"
        });
    });
}
exports.confirmDeleteProductPage = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('pages/Week4/ConfirmDelete.ejs',{
            title: "Delete Product",
            name: req.body.productName,
            id: req.body.id,
            path: "/week4"
        });
    });
}
//
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
//
exports.deleteProd = (req,res,next) => {
    let index;
    Product.fetchAll((products) => {
        products.filter((product) => {
            if ((req.body.productName == product.title) && (req.body.id == product.id)){
                index = products.indexOf(product);
                console.log(index);
                Product.delete(index);
            }
        });
        res.redirect('/week4');
    });
}