const express = require('express');
const mongoose = require('mongoose');
const api = require('./routes/api.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  // useFindAndModify: false,
});

// routes
app.use(require('./routes/api.js'));
app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/exercise', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/exercise.html'))
);

app.get('/stats', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/stats.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
