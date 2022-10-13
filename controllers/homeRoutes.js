const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('homepage')
})
router.get('/login', (req,res) => {
    res.render('login-signup')
})

module.exports = router;