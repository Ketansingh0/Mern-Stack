
const fs = require('fs');

const userRequestHandler= (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Enter Your Details:</h1></body>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" />');
    res.write('<br><button type="submit">Submit</button>');
    res.write('</form>');
    return res.end();
  }else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
    const body = [];              // Buffering Chunks and Parsing Request
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);    // Parsing Request
      const bodyObject = Object.fromEntries(params);  // 2nd way to convert URLSearchParams to Object
      console.log(bodyObject);
      fs.writeFile('userDetails.txt', JSON.stringify(bodyObject), error => {   // We made the operation async to handle the blocking code. Because Writing to a file is a blocking operation. So, we are using callback function to handle the error. 
        console.log('Data written succesfully');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
    
    
    // res.statusCode = 302;
    // res.setHeader('Location', '/');
  } else {                                            // Default Response , we have put it in else block because we want to execute this block only when the above conditions are not met. And here we are seeing how the control flow works.
    res.setHeader('Content-Type', 'text/html');  
    res.write('<html>');  
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }
};

module.exports = userRequestHandler;