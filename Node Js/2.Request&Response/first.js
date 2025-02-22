// process.exit() stops the event loop and the server stops listening to requests
const http = require('http');

const server = http.createServer((req , res) => {
  console.log(req);
  process.exit();  // Stops event loop
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});