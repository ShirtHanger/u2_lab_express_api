const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3002
const db = require('./db')

// Insert your database schema files here
const { Review, Actor, Movie } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

/* =========================================== */

app.get('/', (req, res) => {
    res.send('Welcome to the movie database!!')
})

/* =========================================== */


// Movie index route

app.get('/movies', async (req, res) => {
  const movies = await Movie.find({})
  // Sends response as a json object
  res.json(movies)
})

//Movie show route

app.get('/movies/:id', async (req, res) => {
  // try catch is simular to an if else, catch shows you the error
  // Safe, reduces vulnerbilities
  try {
      const { id } = req.params
      const movie = await Movie.findById(id)
      // Gives error if the ID is falsey
      if (!movie) 
          throw Error('404 - Movie not found')
      res.json(movie)
  } catch (error) {
      console.log(error)
      res.send('Movie not found')
  }
})

/* =========================================== */

// Actor index route

app.get('/actors', async (req, res) => {
  const actors = await Actor.find({})
  // Sends response as a json object
  res.json(actors)
})

//Actor show route

app.get('/actors/:id', async (req, res) => {
  // try catch is simular to an if else, catch shows you the error
  // Safe, reduces vulnerbilities
  try {
      const { id } = req.params
      const actor = await Actor.findById(id)
      // Gives error if the ID is falsey
      if (!actor) 
          throw Error('404 - Actor not found')
      res.json(actor)
  } catch (error) {
      console.log(error)
      res.send('Actor not found')
  }
})

/* =========================================== */

// Review index route

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find({})
  // Sends response as a json object
  res.json(reviews)
})

//Review show route

app.get('/reviews/:id', async (req, res) => {
  // try catch is simular to an if else, catch shows you the error
  // Safe, reduces vulnerbilities
  try {
      const { id } = req.params
      const review = await Review.findById(id)
      // Gives error if the ID is falsey
      if (!review) 
          throw Error('404 - Review not found')
      res.json(review)
  } catch (error) {
      console.log(error)
      res.send('Review not found')
  }
})

/* =========================================== */

app.get('/', (req, res) => {
  res.send('404 - This is error!')
})