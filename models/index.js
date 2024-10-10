const mongoose = require('mongoose')

const actorSchema = require('./actor')
const reviewSchema = require('./review')
const movieSchema = require('./movie')

const Actor = mongoose.model('Actor', actorSchema)
const Review = mongoose.model('Review', reviewSchema)
const Movie = mongoose.model('Movie', movieSchema)

module.exports = {
  Actor,
  Review,
  Movie
}