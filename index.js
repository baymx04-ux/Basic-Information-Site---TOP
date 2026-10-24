const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

// Map each URL path to its HTML file
const routes = {
    "/": "index.html",
    "/about": "about.html",
    "/contact-me": "contact-me.html",
};

const server = http.createServer((req, res) => {
    // Parse the URL so query strings (e.g. /about?x=1) don't break routing
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);

    // Remove a trailing slash (so /about/ works like /about), but keep "/"
    const cleanPath =
        pathname.length > 1 && pathname.endsWith("/")
            ? pathname.slice(0, -1)
            : pathname;

    const file = routes[cleanPath];
    const statusCode = file ? 200 : 404;
    const filePath = path.join(__dirname, file || "404.html");

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 - Internal Server Error");
            return;
        }
        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});