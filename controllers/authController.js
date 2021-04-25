const { Router } = require('express');
const authService = require('../services/authService');

const router = Router();

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let token = await authService.login({ username, password });
        console.log(token);
        res.redirect('/products')
    } catch (error) {
        res.render('login', {error})
    }
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    //validate:
    if (password !== repeatPassword) {
        return res.render('register', { message: 'Passwords dont match!!!' });
    }

    try {
        let result = await authService.register({ username, password });
        console.log(result);
        res.redirect('/auth/login');
    } catch (error) {
        res.render('register', { error });
    }
})

module.exports = router;