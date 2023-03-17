require('dotenv').config()

const express = require('express')

const workoutRoutes = require('./routes/workouts')

// express app
const app  = express()

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// listen to requests
app.listen(process.env.PORT, () => {
    console.log('listening to port 4000', process.env.PORT);
})

process.env