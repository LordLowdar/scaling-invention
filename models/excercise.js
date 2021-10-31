const {} = require('sequelize');

Excercise.init({
  //   type: 'resistance',
  name: {
    type: DataType.STRING,
    allownull: false,
  },
  duration: {
    type: DataType.INTEGER,
    allownull: false,
  },
  weight: {
    type: DataType.INTEGER,
    allownull: false,
  },
  reps: {
    type: DataType.INTEGER,
    allownull: false,
  },
  sets: {
    type: DataType.INTEGER,
    allownull: false,
  },
});
