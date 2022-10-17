const router = require('express').Router();
const { Activity, Mood, Sleep, User, Water } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req,res) => {
    res.render('landing-page', {
        logged_in: req.session.logged_in,
        layout: 'no-header' // telling hndlbars t
    })
})

router.get('/login', (req,res) => {
    if(req.session.logged_in) {
        res.redirect('/homepage', {layout: 'main'});
        return;
    }
    res.render('login-page');
})

router.get('/homepage', withAuth, async (req, res) => {
    res.render('homepage', {
        logged_in: req.session.logged_in,
        style: 'style.css',
        layout: 'main' // this is the default
    });

    router.get('/sleep/:id', async (req, res) => {
      try {
        const sleepData = await Project.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['name'],
            },
          ],
        });
    
        const project = sleepData.get({ plain: true });
    
        res.render('sleep', {
          ...project,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

    //  try {
    //      const userData = await User.findByPk(req.session.user_id, {
    //          attributes: { exclude: ['password'] },
    //          include: [{ model: Mood }],
    //      });

// <<<<<<< HEAD
//         res.render('/homepage', {
//             ...user,
//             logged_in: true,
//         });
// =======
    //      const user = userData.get({ plain: true });

    //      res.render('homepage', {
    //          ...user,
    //          logged_in: true,
    //      });
// >>>>>>> main
            
        
    //  } catch (err) {
    //      res.status(500).json(err);
    //  }
});

module.exports = router;