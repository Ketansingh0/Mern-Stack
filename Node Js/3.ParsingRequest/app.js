const http = require('http');
const requestHandler = require('./user');   // Importing userRequestHandler from user.js

const server = http.createServer(requestHandler);  // We can pass with any name but it should be a functions which takes req and res as arguments.

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});