require("dotenv").config()  //Needed for when the database is incorporated

const express = require("express") //Framework imported for server setup to respond to HTTP request
const cors = require("cors")

const app = express() //Needed for setting up the server 

const { SERVER_PORT } = process.env  //Needed for setting up the port using a .env file

app.use(express.json()) //Needed to be able to accept JSON
app.use(cors())


//Using the GET API, endpoint sends back the index of the requested Available Consultation Dates to the frontl-end.
app.get("/api/availableConsultDates", (req, res) => {
    const availableConsultDates = ["December 4, 2021", "December 11, 2021", "December 18, 2021"]
    let reply = availableConsultDates.join('\r\n')
    res.status(200).send(reply)
})

//Using the POST API, endpoint sends back the confirmation message that includes the date requested using a template literal string
app.post("/api/dateRequest", (req, res) => {
   // console.log(req.body)
    let {post} = req.body
    res.status(200).send(`Thank you! Your date selection of, ${post} has been scheduled.`)
})

//Defining the port that the server will use to run
const port = process.env.PORT || 4747
app.listen(port, () =>  console.log(`Server is running on port: ${port}`))












  

