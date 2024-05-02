const http = require("http");
const fs = require("fs")


const server = http.createServer((req, res) => {
    const log = `${Date.now()}: , ${req.url} New Request Recieved\n`;
    fs.appendFile('log.txt', log, (err, data) => {

        switch (req.url) {
            case '/': res.end("HomePage")
                break;
            case '/about': res.end("About")
                break;
            default:
                res.end("404 Not Found")
        }


    })

});

server.listen(7000, () => {
    return console.log("server started");
})
