const express = require("express")
const app = express()
const {engine} = require("express-handlebars")


app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")


app.get("/", (req, res) => {
    res.render("datos", { nombre: "Matias Emanuel", apellido: "Font", edad: 20})
})

app.listen(8080, () => {
    console.log("Escuchando el puerto 8080")
})  

