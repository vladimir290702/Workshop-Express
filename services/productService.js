const Cube = require('../models/cube');
const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

let productsData = require('../config/products.json');

function getAll() {
    return productsData;
}

function create(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );
    productsData.push(cube);

    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
        if (err) {
            return err;
        }
    })
}

module.exports = {
    create
}