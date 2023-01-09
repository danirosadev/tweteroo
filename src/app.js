import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const users = []
const tweets = []

app.get("/tweets", (req, res) => {
    const {limite} = req.query
    
    const tweetsReverse = [{...tweets}]
    const ultimosTweets = tweetsReverse.reverse().slice(-10)

    const resposta = []
    ultimosTweets.map(t => {
        resposta.push({
            username: t.user.username,
            avatar: t.user.avatar,
            tweet: t.tweet
        })
    })
    res.send(resposta)

})

app.post("/sign-up", (req, res) => {
    const dados = req.body
    console.log(dados)

    if(dados.username === "" || dados.avatar === ""){
        console.log("Preencha todos os dados")
        return
    }
        
    users.push(dados)
    res.send("Ok")
})

app.post("/tweets", (req, res) => {
    const dados = req.body
    
    console.log(dados)
    const unloggedUser = tweets.find(t => t.username === dados.username)

    if (!unloggedUser){
        res.send("UNAUTHORIZED")
        return
    }
    

    tweets.push(dados)
    res.send("Ok")
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})