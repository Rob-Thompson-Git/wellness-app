const sequelize = require('../config/connection');
const User = require('../models/User');
const userData = require('./seed.json');
const moodData = require('./moodSeeds');
const { Mood } = require('../models');

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
    

    process.exit(0);
};
seedDatabase();



