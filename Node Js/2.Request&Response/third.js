const http = require('http');

const server = http.createServer((req , res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node</title></head>');
    res.write('<body><h1>Welcome to Home</h1></body>');
    res.write('<html>');
    return res.end();
  }else if (req.url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to Users</h1></body>');
    res.write('<html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('<html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});