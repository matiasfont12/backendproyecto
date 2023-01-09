// const express = require("express")
// const { Router } = express
// const app = express()

// app.use(express.json())

// const routerPrueba = Router()
// const routerAlternativo = Router()

// const persona = []
// const mascota = []


// routerPrueba.get("/", (req, res) => {
//     res.json({ persona })
// })

// routerPrueba.post("/", (req, res) => {
//     const personaAñadir = req.body
//     persona.push(personaAñadir)

//     res.status(200).json({ persona })
// })

// routerAlternativo.get("/", (req, res) => {
//     res.json({ mascota})
// })

// routerAlternativo.post("/", (req, res) => {
//     const mascotaAñadir = req.body
//     mascota.push(mascotaAñadir)

//     res.status(200).send({ mascota})
// })

// app.use("/personas", routerPrueba)
// app.use("/mascotas", routerAlternativo)

// const PORT = 8080

// app.listen(PORT, () => {
//     console.log(`Escuchando en el puerto ${PORT}`)
// })