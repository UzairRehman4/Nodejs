const express = require("express")
const app = express();
const path = require("path")
const bodyParser = require("body-parser")
const router = require("./userRoutes")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
const PORT = 4000;
app.use("/api/v1", router)
// app.get("/api/v1/register", (req, res) => {
//     // console.log(path.join(__dirname + "/index.html"));
//     // res.sendFile(path.join(__dirname + "/index.html"))
//     res.json({
//         name: "uzair",
//         email: "rehmanuzair43@gmail.com",
//         password: "hacked"

//     })
// })


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})









// app.post("/api/v1/register", (req, res) => {
//     res.send(`<H1>Done , Mr ${req.body.name}</H1> <h2>Your email: ${req.body.email}</h2> <h3>your password : ${req.body.password}</h3>`)
//     console.log("name");
//     console.log(req.body);
//     // const userName = req.body.name
// })

app.listen(PORT, () => {
    console.log(`Server is Working ${PORT}`);
})