const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//This is the problematic code
setTimeout(() => {
  console.log('This will be logged after 5 seconds');
}, 5000);

// This code is not reachable because the server is already closed at this point, creating an unexpected behavior that can be difficult to debug.