const express = require('express');
const router = express.Router();
const passport = require('passport');

const { getHashedPassword, randomText } = require('../services/function');
const { verificar_nome, add_usuario } = require('./db');
const { notAuthenticated } = require('../services/auth');

router.get('/', notAuthenticated, (req, res) => {
    res.render('login', {
        layout: 'layouts/main'
    });
});

router.get('/entrar', notAuthenticated, (req, res) => {
    res.render('login', {
        layout: 'layouts/main'
    });
});

router.post('/entrar', async(req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/docs',
        failureRedirect: '/usuario/entrar',
        failureFlash: true,
    })(req, res, next);
});

router.get('/registrar', notAuthenticated, (req, res) => {
    res.render('register', {
        layout: 'layouts/main'
    });
});

router.post('/registrar', async (req, res) => {
    try {
        let {username, password, confirmPassword } = req.body;
        if (password.length < 6 || confirmPassword < 6) {
            req.flash('error_msg', 'Senha precisa ter no mínimo 6 letras');
            return res.redirect('/usuario/registrar');
        }
        if (password === confirmPassword) {
            let checking = await verificar_nome(username);
            if(checking) {
                req.flash('error_msg', 'Este nome que você inseriu ja tem uma pessoa usando');
                return res.redirect('/usuario/registrar');
            } else {
                let hashedPassword = getHashedPassword(password);
                let apikey = randomText(8);
                add_usuario(username, hashedPassword, apikey);
                req.flash('success_msg', 'Você se registrou, agora você pode fazer o login');
                return res.redirect('/usuario/entrar');
            }
        } else {
            req.flash('error_msg', 'Senha não corresponde.');
            return res.redirect('/usuario/registrar');
        }
    } catch(err) {
        console.log(err);
    }
})

router.get('/sair', (req,res) => {
    req.logout();
    req.flash('success_msg', 'sucesso ao sair');
    res.redirect('/usuario/entrar');
});

module.exports = router;
