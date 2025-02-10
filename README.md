# Node.js Server Closes Before setTimeout Callback Executes

This repository demonstrates a common issue in Node.js where a server might close before a `setTimeout` callback has a chance to execute.  This can lead to unexpected behavior and make debugging challenging.

## The Problem

The `bug.js` file contains a simple Express.js server.  A `setTimeout` function is used to log a message after 5 seconds.  However, if the server is shut down before the 5 seconds elapse, the `setTimeout` callback will never execute.

## The Solution

The `bugSolution.js` file provides a corrected approach using the `process.on('beforeExit')` event.  This ensures the callback will execute before the server process completely exits.