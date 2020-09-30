const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000

const bodyParser = require('body-parser')

//routes
const userRoute = require('./routes/user')
const recipeRouter = require('./routes/recipe')

//middlewares
app.use('/user',userRoute)
app.use('/recipes',recipeRouter)
app.use(bodyParser.json())
app.use(cors())

//mongoDB connect
const uri = process.env.DB_CONNECT
mongoose.connect(uri,{ useNewUrlParser: true,
                        useUnifiedTopology: true },()=>{
    
        console.log('Connected To MongoDB')
})


app.listen(port,()=>{
    console.log('Connected to port')
})