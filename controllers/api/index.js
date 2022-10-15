const router = require('express').Router();
const userRoutes = require('./userRoutes');
const moodRoutes = require('./moodRoute');
const activityRoutes = require('./activityRoute');

router.use('/users', userRoutes);
router.use('/moods', moodRoutes);
router.use('/activity', activityRoutes);

module.exports = router;
