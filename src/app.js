import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const users = [
    {
        username: "Raquel",
        avatar: "https://image.cachorrogato.com.br/textimages/fotos-gatinhos-rindo.jpg"
    },
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
]
const tweets = [
    {
        username: "Raquel",
        tweet: "Oi"
    }, 
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
]

app.get("/tweets", (req, res) => {
    res.send(tweets)
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