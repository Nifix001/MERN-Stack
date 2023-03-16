const express = require('express')

// express app
const app  = express()

// routes
app.get('/', (req, res) =>{
    res.json({mssg: 'SOPE OTILOR'})
})

// listen to requests
app.listen(4000, () => {
    console.log('listening to port 4000');
})