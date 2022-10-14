const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('homepage')
})
router.get('/login', (req,res) => {
    if(req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }
    res.render('login-page');
})

module.exports = router;