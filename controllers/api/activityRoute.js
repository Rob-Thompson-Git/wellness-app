const router = require('express').Router();

const { Activity } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      where:{
        user_id: req.session.user_id
      }
    });
    const activities = activityData.map(act => act.get({plain:true}))
        res.status(200).json(activities)
  }
  catch (err){
  res.status(400).json(err)
  }
})

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newActivity = await Activity.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newActivity);
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
