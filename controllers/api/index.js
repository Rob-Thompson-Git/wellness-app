const router = require('express').Router();
const userRoutes = require('./userRoutes');
const moodRoutes = require('./moodRoute');

router.use('/users', userRoutes);
router.use('/moods', moodRoutes);

module.exports = router;
