const router = require('express').Router();
const userRoutes = require('./userRoutes');
const moodRoutes = require('./moodRoute');
const activityRoutes = require('./activityRoute');
const sleepRoutes = require('./sleepRoute');
const waterRoutes = require('./waterRoute')

router.use('/users', userRoutes);
router.use('/moods', moodRoutes);
router.use('/activity', activityRoutes);
router.use('/sleep', sleepRoutes);
router.use('/water', waterRoutes);

module.exports = router;
