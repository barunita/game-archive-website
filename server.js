const express = require('express');
const path = require('path');
const app = express();
const port = 3001; // Use a different port to avoid conflicts with the game

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Set EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define website routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/archive', (req, res) => {
  res.render('archive');
});

app.get('/game', (req, res) => {
  res.render('game');
});

app.listen(port, () => {
  console.log(`Website listening at http://localhost:${port}`);
});