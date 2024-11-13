

const http = require("http");
// const { resolve } = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Our Home Page.");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is our about page.");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" }); // Set status to 404
    res.end("<h1>Page Not Found</h1>"); // Send 404 page content
  }
});

console.log("Hello, World!");

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});




// const os = require('os');

// // Info about current user
// console.log(os.userInfo());








// const { rejects } = require("assert");
// const { readFile, read } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile("./content/first.txt", "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(error));

// readFile('./content/first.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return
//     } else {
//         console.log(data);
//     }
// })