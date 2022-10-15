const router = require('express').Router();
const { User } = require('../../models');
// const sequelize = require('../../config/connection');
const { Mood } = require('../../models');

// The api/mood endpoint
router.get('/mood/:id', async (req, res) => {
  try {
    const moodData = await Mood.findOne({ where: { id: req.params.id} });
        res.status(200).json(moodData)
  }
  catch (err){
  res.status(400).json(err)
  }
})


router.get('/all', async (req, res) => {
  try {
    const moodData = await Mood.findAll();
        res.status(200).json(moodData)
  }
  catch (err){
  res.status(400).json(err)
  }
})


router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const moodData = await Mood.create(req.body);

    req.session.save(() => {
      req.session.user_id = moodData.id;
      req.session.logged_in = true;

      res.status(200).json({success: true, "result": moodData});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/mood/:id', async (req, res) => {
  try {
    const moodData = await Mood.destroy({
      where: {
        id: req.params.id
        // user_id: req.session.user_id,
      },
    });

    res.status(200).json(moodData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
