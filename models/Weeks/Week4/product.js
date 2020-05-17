const fs = require('fs');
const path = require('path');

//const products = [];
module.exports = class Product {
    constructor(title, description, points, id){
        this.title = title;
        this.description = description;
        this.points = points;
        this.id = id;
    }
save() {
    const p = path.join(path.dirname(process.mainModule.filename), 'Docs', 'products.json');
    fs.readFile(p, (err, fileContent) =>{
        let products = [];
        if (!err) {
            products = JSON.parse(fileContent);
        }
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) =>{
            console.log(err);
        });
    });
}

static fetchAll(cb){
    const p = path.join(path.dirname(process.mainModule.filename), 'Docs', 'products.json');
fs.readFile(p, (err, fileContent) => {
    if (err) {
        cb([]);
    }
    else {
    cb(JSON.parse(fileContent));
    }
});
}
}