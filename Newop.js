const express = require('express');
const app = express();

// Home
app.get('/', (req, res) => {
  res.send('EXPRESS APP RUNNING');
});

// Addition
app.get('/add/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.send('Add = ' + (a + b));
});

// Subtraction
app.get('/sub/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.send('Sub = ' + (a - b));
});

// Multiplication
app.get('/mul/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.send('Mul = ' + (a * b));
});

// Division
app.get('/div/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.send('Div = ' + (a / b));
});

// Server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});