const http = require('http');
const url = require('url');

const rootMessage = require('./modules/root_module');
const aboutMessage = require('./modules/about_module');
const contactMessage = require('./modules/contact_module');
const galleryMessage = require('./modules/gallery_module');
const footerInfo = require('./modules/footer_module');
const notFoundMessage = require('./modules/not_found_module'); 

const name = "Katherine";

const server = http.createServer((req, res) => {
const path = url.parse(req.url, true).pathname;

res.writeHead(200, { 'Content-Type': 'text/html' });

if (path === '/') {
res.write("<h1>Welcome to my Node.js Application</h1>");
res.write(`<p>${rootMessage(name)}</p>`);
} else if (path === '/about') {
res.write("<h1>This is the About Page</h1>");
res.write(`<p>${aboutMessage(name)}</p>`);
} else if (path === '/contact') {
res.write("<h1>This is the Contact Page</h1>");
res.write(`<p>${contactMessage(name)}</p>`);
} else if (path === '/gallery') {
res.write(`<h1>${galleryMessage()}</h1>`);
} else {
res.write(`<h1>${notFoundMessage()}</h1>`); 
res.write(`<hr><p>${footerInfo()}</p>`);
}

res.end();
});

server.listen(5000, () => {
console.log("Server running at http://localhost:5000");
console.log(aboutMessage(name)); 
});