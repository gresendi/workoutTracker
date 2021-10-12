const router = require('express').Router();
const Workout = require('../models/workout.js');


router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((error) => {
      res.json(error)
    })
})

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout)
    })
    .catch((err) => {
      res.json(err)
    })
})


router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err)
    })
})


router.get("/api/workouts/range", (req, res) => {

  Workout.find({}).sort({ x: -1 }).then(workout => {
    let workouts = []
   for(let i = 0; i <7;i++){
     workouts.push(workout[i])
     console.log(workout[i])
   }

    res.json(workouts)
  }).catch(err => {
    res.json(err)
  })

})

router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByUpIdAndDelete(body.id)
    .then(() => {
      res.json(true)
    })
    .catch((error) => {
      res.json(error)
    })
})

module.exports = router