const router = require('express').Router();
const workout = require('../models/workout');

router.get('/workouts', async (req, res) => {
  try {
    const recent = await workout.find();
    res.status(200).send(recent);
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
