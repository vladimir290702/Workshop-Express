const Cube = require('../models/cube');
const uniqid = require('uniqid');
const productData = require('../data/productData');

function getAll(query) {
    let products = productData.getAll();

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search))
    }

    if (query.from) {
        products = products.filter(x => Number(x.level) >= Number(query.from));
    }

    if (query.to) {
        products = products.filter(x => Number(x.level) <= Number(query.to));
    }

    return products;
}

function create(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );
 
    return productData.create(cube);
}

function getOne(id) {
    return productData.getOne(id);
}

module.exports = {
    create, getAll, getOne,
}