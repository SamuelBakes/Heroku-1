//const Product = require('../../../models/Weeks/Week4/product');
const Assignment = require('../models/teacher');
exports.getHome = (req, res, next) => {
        res.render('pages/Proj/home.ejs',{
            title: "Home",
            path: "/home", 
        });
}
exports.addAssignment = (req,res,next) => {
        const name = req.body.name;
        const dueDate = req.body.dueDate;
        const points = req.body.points;
        const description = req.body.description;
        const pdf = req.file;

        if (!pdf) {
            return res.status(422).render('/home')
        }
        const pdfPath = pdf.path;
        console.log("The PDF path is:",pdfPath);
        const assignment = new Assignment(name, dueDate, points, pdfPath, description);
        assignment.save()
        .then(result => {
            console.log('Created Assignment');
            res.render('/assignments')
            //res.redirect('/home');
        })
        .catch(
                error => {
                   console.log(error);
        });
       // const name = req.fields.name;
       // const dueDate = req.fields.dueDate;
        //const points = req.fields.points;
      //  const pdf = req.files[0];
       // console.log(pdf);
      //  const description = req.fields.description;
}
