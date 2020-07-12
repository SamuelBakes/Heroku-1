//const Product = require('../../../models/Weeks/Week4/product');
const Assignment = require('../models/teacher');
exports.presentAssignment = (req, res, next) => {
        res.render('pages/Proj/assignments.ejs',{
            title: "Assignment",
            path: "/assignments", 
        });
}
