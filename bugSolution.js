const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

setTimeout(() => {
  console.log('This will be logged after 5 seconds');
}, 5000);

// Use process.on('beforeExit') to handle the callback before the process exits
process.on('beforeExit', (code) => {
  console.log('Process exiting with code:', code);
  server.close(() => {
    console.log('Server closed gracefully');
  });
});