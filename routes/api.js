const router = require('express').Router();
const workout = require('../models/workout');

router.get('/workouts', async (req, res) => {
  try {
    const recent = await workout.aggregate([
      { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
    ]);
    console.log(workout);
    res.status(200).send(recent);
  } catch (err) {
    res.status(500);
  }
});

router.post('/workouts', async (req, res) => {
  try {
    const newWorkout = await workout.create(req.body);
    res.status(200).json(newWorkout);
    console.log(workout);
  } catch (err) {
    res.status(500);
  }
});

router.put('/workouts/:id', async (req, res) => {
  try {
    var id = req.params.id;
    await workout.findOneAndUpdate(
      { _id: id },
      { $push: { exercises: req.body } }
    );
    res.status(200).send('sent');
    console.log(req.body);
  } catch (err) {
    res.status(500);
  }
});

router.get('/workouts/range', async (req, res) => {
  try {
    const range = await workout.aggregate([
      { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
    ]);
    res.status(200).send(range);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
