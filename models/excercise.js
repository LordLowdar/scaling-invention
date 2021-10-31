const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    enum: ['cardio', 'resistance'],
  },
  name: {
    type: String,
    allownull: false,
  },
  duration: {
    type: Number,
    allownull: false,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
