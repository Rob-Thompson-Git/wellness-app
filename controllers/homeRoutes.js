const router = require('express').Router();
const { Activity, Mood, Sleep, User, Water } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req,res) => {
    res.render('landing-page', {
        logged_in: req.session.logged_in
    })
})

router.get('/login', (req,res) => {
    if(req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }
    res.render('login-page');
})

router.get('/homepage', withAuth, async (req, res) => {
    res.render('homepage', {
        logged_in: req.session.logged_in
    });

    //  try {
    //      const userData = await User.findByPk(req.session.user_id, {
    //          attributes: { exclude: ['password'] },
    //          include: [{ model: Mood }],
    //      });

    //      const user = userData.get({ plain: true });

    //      res.render('homepage', {
    //          ...user,
    //          logged_in: true,
    //      });
            
        
    //  } catch (err) {
    //      res.status(500).json(err);
    //  }
});

module.exports = router;