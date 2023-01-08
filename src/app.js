import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/tweets", (req, res) => {
    res.send("Start tweteroo")
})

app.post("/sign-up", (req, res) => {
    const dados = req.body
    console.log(dados)
    res.send("chamado via post")
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})