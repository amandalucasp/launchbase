const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public')) /*observa a pasta public*/

// configuração da template engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    // return res.send("hola")
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/67033667?s=460&u=e1cd212cd3fc9cdbae7e986c097a3a6dfe164136&v=4",
        name: "Amanda Lucas",
        role: "Instrutora - Rocketseat",
        description: 'Programadora full-stack, focada em trazer o melhor ensino na <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>. Formada pelo Ifes da Serra/ES.',
        links: [
            {name: "Github", url:"https://github.com/amandalucs"},
            {name: "Linkedin", url:"https://www.linkedin.com/in/amandalpereira/"},
            {name: "Instagram", url:"https://www.instagram.com/amandalucasp/"}
        ]
    }

    return res.render("about", { about: about })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id /* se achar, é true */
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function() {
    console.log("server is running")
})