const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Sleep } = require('../../models');
const { Mood } = require('../../models/mood');

// The api/sleep endpoint

router.get('/.id', (req,res) => {
  // get mood for user
  Mood.findOne({
    attributes: [
     "mood_overall",
    ],
    where: {
      id: req.params.id
    },
   })
})