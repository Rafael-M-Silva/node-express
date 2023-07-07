const express = require("express")
const app = express()

const port = 8081
const hostName = "http://localhost"

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/public/sobre.html")
})

app.listen(port, ()=> console.log(`Server running at ${hostName}:${port}`))