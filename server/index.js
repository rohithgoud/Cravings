const express = require('express');
const app = express();
const  cors = require('cors')
const dotenv  = require('dotenv')
const userRouter = require('./routes/auth')
const bodyParser = require('body-parser')


const port = 4000


// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
dotenv.config({path:'./.env'});


require('./connect/connection')

app.use('/auth',userRouter)



app.listen(port, ()=>{
    console.log(`App is listening on ${port}`)
})