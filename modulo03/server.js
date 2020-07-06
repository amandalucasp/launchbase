const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public')) /*observa a pasta public*/

// configuração da template engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    // return res.send("hola")
    return res.render("about")
})

server.get("/portfolio", function(req, res) {
    // return res.send("hola")
    return res.render("portfolio")
})


server.listen(5000, function() {
    console.log("server is running")
})