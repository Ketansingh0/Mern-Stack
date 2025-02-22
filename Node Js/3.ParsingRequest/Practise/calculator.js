const {sumRequestHandler} = require("./sum");

const calculatorRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Welcome to Home Page</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="number" name="num1" placeholder="Enter First Number" /> <br>
            <input type="number" name="num2" placeholder="Enter Second Number" /> <br>
            <button type="submit">Calculate</button>
          </form>
        </body>
      </html>
    `);
    return res.end();

  } else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>Error</title></head>
      <body>
        <h1>404 Page Does not Exist</h1>
        <a href="/">Go to Home Page</a>
      </body>
    </html>
  `);
  return res.end();
};

module.exports = calculatorRequestHandler;