//const Product = require('../../../models/Weeks/Week4/product');
const Assignment = require('../models/teacher');
const formidable = require('formidable');
exports.getHome = (req, res, next) => {
        res.render('pages/Proj/home.ejs',{
            title: "Home",
            path: "/home", 
        });
}
exports.addAssignment = (req,res,next) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
        }
        const name = fields.name;
        const dueDate = fields.dueDate;
        const points = fields.points;
        const description = fields.description;
        const pdf = files.PDF;
        const assignment = new Assignment(name, dueDate, points, pdf, description);
        assignment.save()
        .then(result => {
            console.log('Created Assignment');
            res.redirect('/home');
        })
        .catch(
                error => {
                   console.log(error);
        });
    })
       // const name = req.fields.name;
       // const dueDate = req.fields.dueDate;
        //const points = req.fields.points;
      //  const pdf = req.files[0];
       // console.log(pdf);
      //  const description = req.fields.description;
}
