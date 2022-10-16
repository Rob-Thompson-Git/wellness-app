const sequelize = require('../config/connection');
const User = require('../models/User');
const userData = require('./seed.json');
const moodData = require('./moodSeeds');
const activityData = require('./activitySeeds');
const sleepData = require('./sleepSeeds');
const waterData = require('./waterSeeds');
const { Mood, Activity, Sleep, Water } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync ({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Mood.bulkCreate(moodData, {
      individualHooks: true,
      returning: true,
  });
  
  await Activity.bulkCreate(activityData, {
    individualHooks: true,
    returning: true,
  })

  await Sleep.bulkCreate(sleepData, {
    individualHooks: true,
    returning: true, 
  })

  await Water.bulkCreate(waterData, {
    individualHooks: true,
    returning: true, 
  })
    process.exit(0);
};
seedDatabase();



