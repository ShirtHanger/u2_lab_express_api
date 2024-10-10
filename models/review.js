const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    reviewer: { type: String, required: true },
    score: { type: Number, required: true, min: 0, max: 100 },
    comment: { type: String, required: true },
    reviewerIsbanned: { type: Boolean, required: true },
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' }
  },
  { timestamps: true }
)

module.exports = reviewSchema