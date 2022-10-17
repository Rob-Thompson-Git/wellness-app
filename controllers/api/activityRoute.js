const router = require('express').Router();
const { User } = require('../../models');
// const sequelize = require('../../config/connection');
const { Activity } = require('../../models');

// The api/activity endpoint
// router.get('/activity/:id', async (req, res) => {
//   try {
//     const activityData = await Activity.findOne({ where: { id: req.params.id} });
//         res.status(200).json(activityData)
//   }
//   catch (err){
//   res.status(400).json(err)
//   }
// })


// router.get('/all', async (req, res) => {
//   try {
//     const activityData = await Activity.findAll();
//         res.status(200).json(activityData)
//   }
//   catch (err){
//   res.status(400).json(err)
//   }
// })


router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const activityData = await Activity.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(activityData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const activityData = await Activity.destroy({
      where: {
        id: req.params.id
        // user_id: req.session.user_id,
      },
    });

    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
