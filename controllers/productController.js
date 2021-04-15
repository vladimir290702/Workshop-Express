const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

router.post('/create', (req, res) => {
    console.log('created');
    console.log(req.body);

    res.send('created!');
})

router.get('/details/:id', (req, res) => {
    console.log(req.params.id);
    res.render('details', {title: 'Details'});
})

module.exports = router;
