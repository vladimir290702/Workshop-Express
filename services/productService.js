const Cube = require('../models/cube');
const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

let productsData = require('../config/products.json');

function getAll() {
    return productsData;
}

function create(data, callback) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );
    productsData.push(cube);

    fs.writeFile(
        path.join(__dirname, '/../config/products.json'),
        JSON.stringify(productsData),
        callback()
    );

}

function getOne(id) {
    return productsData.find(x => x.id == id);
}



module.exports = {
    create, getAll, getOne,
}