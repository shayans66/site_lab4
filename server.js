const express = require("express")
const morgan = require("morgan")
const giftexchangeRouter = require('./routes/gift-exchange')
const { NotFoundError } = require("./utils/errors")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.use('/gift-exchange', giftexchangeRouter)


app.get("/", async (req, res, next) => {
  res.status(200).json({ping: "pong"})
})

// error
app.use(  (req,res,next)=>{
  console.log('hi');
  return next(new NotFoundError())
})
app.use((error, req, res, next)=>{
  console.log('hiii');

  const status = error.status || 500;
  return res.status(status).json({
    error: {message: error.message, status}
  })
})


const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})

