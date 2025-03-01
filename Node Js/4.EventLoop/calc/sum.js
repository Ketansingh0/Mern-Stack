const sumRequestHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  return req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    // const num1 = parsedBody.split("=")[1].split("&")[0];
    // const num2 = parsedBody.split("=")[2];
    // const result = +num1 + +num2;
    const params = new URLSearchParams(parsedBody);
    const bodyData = Object.fromEntries(params);
    const result = Number(bodyData.num1) + Number(bodyData.num2);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/">Go to Home Page</a>
        </body>
      </html>
    `);
    return res.end();
  });
}

exports.sumRequestHandler = sumRequestHandler; 