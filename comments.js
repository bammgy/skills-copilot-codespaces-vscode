// Create web server
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', (err, data) => {
    if (err) {
      return err;
    }
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// });
// 
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
// 
// // Path: index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Document</title>
// </head>
// <body>
//   <h1>Node.js</h1>
// </body>
// </html>
// 
// // Path: package.json
// {
//   "name": "nodejs",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "start": "node comment.js"
//   },
//   "author": "",
//   "license": "ISC"
// }
// 
// // run server
// npm start
// //   });
// // });
// 
// // server.listen(port, () => {
// //   console.log(`Server running at http://localhost:${port}/`);
// // });
// 
// // Path: index.html
// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //   <meta charset="UTF-8">
// //   <title>Document</title>
// // </head>
// // <body>
// //   <h1>Node.js</h1>
// // </body>
// // </html>
// 
// // Path: package.json
// // {
// //   "name": "nodejs",
// //   "version": "1.0.0",
// //   "description": "",
// //   "main": "index.js",
// //   "scripts": {
// //     "start": "node comment.js"
// //   },
// //   "author
 