require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()

const { SERVER_PORT } = process.env

app.use(express.json())
app.use(cors())



app.get("/api/availableConsultDates", (req, res) => {
    const availableConsultDates = ["December 4, 2021", "December 11, 2021", "December 18, 2021"]
    let reply = availableConsultDates.join('\r\n')
    res.status(200).send(reply)
})


app.post("/api/dateRequest", (req, res) => {
    console.log(req.body)
    let {post} = req.body
    res.status(200).send(`Thank you! Your date selection of, ${post} has been scheduled.`)
})

const port = process.env.PORT || 4747
app.listen(port, () =>  console.log(`Server is running on port: ${port}`))












  

