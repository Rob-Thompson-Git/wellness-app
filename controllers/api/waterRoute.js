// This code was left in for future development. We hope to be able to link tables and refer to user input to offer suggestions for goals.
const router = require('express').Router();
const { User } = require('../../models');
// const sequelize = require('../../config/connection');
const { Water } = require('../../models');

// The api/water endpoint
router.get('/water/:id', async (req, res) => {
  try {
    const waterData = await Water.findOne({ where: { id: req.params.id} });
        res.status(200).json(waterData)
  }
  catch (err){
  res.status(400).json(err)
  }
})


router.get('/all', async (req, res) => {
  try {
    const waterData = await Water.findAll();
        res.status(200).json(waterData)
  }
  catch (err){
  res.status(400).json(err)
  }
})


router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const waterData = await Water.create(req.body);

    req.session.save(() => {
      req.session.user_id = waterData.id;
      req.session.logged_in = true;

      res.status(200).json({success: true, "result": waterData});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/water/:id', async (req, res) => {
  try {
    const waterData = await Water.destroy({
      where: {
        id: req.params.id
        // user_id: req.session.user_id,
      },
    });

    res.status(200).json(waterData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
