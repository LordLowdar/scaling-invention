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

router.post('/workouts', async (req, res) => {
  try {
    const newWorkout = await workout.create();
    res.status(200).send(newWorkout);
  } catch (err) {
    res.status(500);
  }
});

router.put('/workouts/:id', async (req, res) => {
  try {
    const addExercise = await workout.createIndexes(excercises);
    res.status(200).send(addExercise);
  } catch (err) {
    res.status(500);
  }
});
module.exports = router;
