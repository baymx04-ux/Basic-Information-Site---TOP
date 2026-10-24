# Basic Informational Site (The Odin Project: Node.js Certificate)

A simple multi-page website served by a Node.js HTTP server built with only the core `http`, `fs`, and `path` modules (no frameworks). This project was built for **The Odin Project Node.js certificate** as the "Basic Informational Site" assignment.

## Features

- Serves static HTML pages based on the requested URL
- Custom 404 page for any route that doesn't exist
- Returns a proper `404` HTTP status code for unknown routes
- Handles query strings and trailing slashes (e.g. `/about?ref=test` and `/about/` both work)
- Non-blocking file reads using asynchronous `fs.readFile`
- Zero dependencies

## Routes

| URL            | Page              | Status |
| -------------- | ----------------- | ------ |
| `/`            | `index.html`      | 200    |
| `/about`       | `about.html`      | 200    |
| `/contact-me`  | `contact-me.html` | 200    |
| anything else  | `404.html`        | 404    |

## Tech Stack

- Node.js (core modules: `http`, `fs`, `path`)
- HTML5 and CSS3

## Project Structure

```
Basic-Information-Site---TOP/
├── 404.html
├── about.html
├── contact-me.html
├── index.html
├── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS recommended)

### Installation and Usage

```bash
# Clone the repository
git clone https://github.com/baymx04-ux/Basic-Information-Site---TOP.git

# Move into the project folder
cd Basic-Information-Site---TOP

# Start the server
node index.js
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## How It Works

The server in `index.js` creates an HTTP server with `http.createServer()`. For each request it parses the URL, looks the path up in a routes object, reads the matching HTML file with `fs.readFile`, and sends it back with the correct status code and `Content-Type` header. If the path isn't in the routes object, it serves `404.html` with a `404` status.

## What I Learned

- Creating a server with Node's built-in `http` module
- Routing requests manually based on the URL
- Reading and serving files with the `fs` module
- Setting HTTP status codes and headers
- Handling errors gracefully (404 and 500 responses)

## Assignment

This project fulfills the [Node.js Basic Informational Site](https://www.theodinproject.com/lessons/nodejs-basic-informational-site#assignment) assignment from The Odin Project's Node.js course, part of earning the Node.js certificate.

## Author

**Junaid Kanwar**

- GitHub: [@baymx04-ux](https://github.com/baymx04-ux)
- LinkedIn: [junaid-kanwar](https://linkedin.com/in/junaid-kanwar-0725b6315)
