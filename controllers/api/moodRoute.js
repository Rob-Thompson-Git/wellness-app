const router = require('express').Router();
const { User } = require('../../models');
const sequelize = require('../../config/connection');
const { Mood } = require('../../models/mood');

// The api/mood endpoint

router.get('/mood/:id', async (req, res) => {
  // get mood for user
try {
  const moodData = await Mood.findByPK(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  const mood = moodData.get({plain: true});
  res.render('mood', {
    ...mood, 
    logged_in: req.session.logged_in
  });

} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async (req,res) => {
  try {
    const moodData = await Mood.create({
      mood_overall: req.body.mood_overall,
      anxiety: req.body.anxiety,
      happiness: req.body.happiness,
      chill: req.body.chill,
    });
    res.status(200).json(moodData)
  } catch (err) {
    res.status(400).json (err);
  }
});
module.exports = router;