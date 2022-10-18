// This code was left in for future development. We hope to be able to link tables and refer to user input to offer suggestions for goals.
const router = require('express').Router();
const { User } = require('../../models');
// const sequelize = require('../../config/connection');
const { Sleep } = require('../../models');

// The api/sleep endpoint
router.get('/sleep/:id', async (req, res) => {
  try {
    const sleepData = await Sleep.findOne({ where: { id: req.params.id} });
        res.status(200).json(sleepData)
  }
  catch (err){
  res.status(400).json(err)
  }
})


router.get('/all', async (req, res) => {
  try {
    const sleepData = await Sleep.findAll();
        res.status(200).json(sleepData)
  }
  catch (err){
  res.status(400).json(err)
  }
})


router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const sleepData = await Sleep.create(req.body);

    req.session.save(() => {
      req.session.user_id = sleepData.id;
      req.session.logged_in = true;

      res.status(200).json({success: true, "result": sleepData});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/sleep/:id', async (req, res) => {
  try {
    const sleepData = await Sleep.destroy({
      where: {
        id: req.params.id
        // user_id: req.session.user_id,
      },
    });

    res.status(200).json(sleepData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
