
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, World!</h1>');
});

server.listen(3000, () => {
  console.log('Server started on port 3000\n\nhttp://localhost:3000/');
}); 
// http://localhost:3000/