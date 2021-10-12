const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter the exercise you did'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter the name of the exercise'
      },
      duration: {
        type: Number,
        required: 'Enter an exercise duration in minutes'
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
})

module.exports = model('Workout', Workout)