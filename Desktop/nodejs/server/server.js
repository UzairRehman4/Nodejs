const http = require("http");


const server = http.createServer((req, res) => {
    // res.end("<h1>Nodejs</h1>")
    if (req.url === "/about") {
        res.end("<h1>About Rendered</h1>")

    }
    else if (req.url === "/contact") {
        res.end("<h1>contact Rendered</h1>")
    }
    else if (req.url === "/nodejs") {
        res.end("<h1>nodejs Rendered</h1>")
    }
    else {
        res.end("<h1>Server Crash</h1>")
    }
});

server.listen(6000, () => {
    console.log("server down");
})
