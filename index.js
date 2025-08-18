const express = require("express")
const app = express
const port = 3000  

app.request(express.json())

app.listen(port,() => {
    console.log("Servidor de API funcionando")
})