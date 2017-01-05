const http = require('http');
const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  let method = req.method;
  let url = req.url;
  
  console.log(`${method} | ${url}`)
  if(url === "/") {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('<h1>Hello World</h1>');   
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end('<h1 style="color:red">Page not found</h1>');
  }
});


server.listen(PORT, () => console.log(`Go to http://localhost:${PORT}`));