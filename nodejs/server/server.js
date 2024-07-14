const http = require("http");
const fs = require("fs");
const { URL } = require("url");

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const myUrl = new URL(`http://localhost:${req.url}`);
    console.log("============ ", myUrl);

    const log = `${Date.now()}: , ${req.url} New Request Received\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                res.end("HomePage");
                break;

            case '/about':
                const username = myUrl.searchParams.get('myname');
                res.end(`Hi, ${username ? username : 'Anonymous'}`);
                break;

            case '/search':
                const search = myUrl.searchParams.get('search_query');
                res.end("Here are Your results for " + search);
                break;

            default:
                res.end("404 Not Found");
        }
    });
});

server.listen(7000, () => {
    console.log("server started at http://localhost:7000/");
});
