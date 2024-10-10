const { Schema } = require('mongoose')

const actorSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: {type: String, required: true},
    country: {type: String, required: true},
    year_born: { type: Number, required: true },
    isAlive: { type: Boolean, required: true },
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' },
    image_url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = actorSchema