const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("server created");
  res.setHeader("Content-Type", "text/html");
  // res.write('thanks');
  let path='';
  switch (req.url) {
    case '/':
      path+='./index.html';
      res.statusCode=200
      break;
    case '/about':
      path+='./about.html'
      res.statusCode=200
      break;
    case '/contact':
      path+='./contact.html'
      res.statusCode=200
      break;
    default:
      path+='./4o4.html'
      res.statusCode=404;
      break;
  };
  fs.readFile(path, (err, fileData) => {
    console.log(path);
    if (err) {
      console.log(err);
    } else {
      res.write(fileData);
      res.end();
      }
  });
  // res.write('<h1>hello this is ankit from this side </h1>');
  
});
server.listen(3000, "localhost", () => {
  console.log("server listen on the port: 3000");
});
