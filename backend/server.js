require('dotenv').config()

const express = require('express')

// express app
const app  = express()

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.get('/', (req, res) =>{
    res.json({mssg: 'SOPE OTILOR'})
})

// listen to requests
app.listen(process.env.PORT, () => {
    console.log('listening to port 4000', process.env.PORT);
})

process.env