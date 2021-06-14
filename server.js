const express = require("express")
const morgan = require("morgan")
const votingRouter = require('./routes/voting')

const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.use('/voting', votingRouter)

// app.use(express.urlencoded());

// const bodyParser  = require('body-parser');
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.get("/", async (req, res, next) => {
  res.status(200).json({ping: "pong"})
})

const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})

