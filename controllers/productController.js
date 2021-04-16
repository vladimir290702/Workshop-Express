const { Router } = require('express');
const productSefvice = require('../services/productService')
const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Browse' });
})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

router.post('/create', (req, res) => {
    // Validate inputs:
    productSefvice.create(req.body);

    res.redirect('/products')
})

router.get('/details/:id', (req, res) => {
    console.log(req.params.id);
    res.render('details', { title: 'Details' });
})

module.exports = router;
