
const getDb = require('../util/database').getDb;
class Assignment {
    constructor(name, dueDate, points, pdf, description) {
        this.name = name;
        this.dueDate = dueDate;
        this.points = points;
        this.pdf = pdf;
        this.description = description;
    }
    save() {
        const db = getDb();
        return db
        .collection('assignments')
        .insertOne(this)
        .then(result => {
            console.log(result);
        })
        .catch(
            err => {console.log(err);
         });
    }
}
module.exports = Assignment;