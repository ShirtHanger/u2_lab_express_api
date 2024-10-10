const { Schema } = require('mongoose')

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    runtime_minutes: { type: Number, required: true, min: 0 },
    genre: { type: String, required: true },
    medium: { type: String, required: true },
    rating: { type: String, required: true },
    rotten_tomatoes_rating: { type: Number, required: true, min: 0, max: 100 }, /* https://mongoosejs.com/docs/schematypes.html */
    year_released: { type: Number, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = movieSchema