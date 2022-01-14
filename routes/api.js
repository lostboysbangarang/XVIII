const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post(`/api/workouts`, (res) => {
    console.log(`\n\n\tCreation:\n\t\tBody:\n`);
    Workout.create({}).then(dbWerk => {
                                    console.log(`\t\tdbWerk:\n`, JSON.stringify(JSON.parse(dbWerk)))
                                    res.json(dbWerk);
                                }).catch(err =>{
                                    // res.status(400).json(err)
                                })
})

router.put(`/api/workouts/:id`, (req, res) => {
    console.log(`\n\n\tAPI:\t\tadd workout\n`)
    console.log(req.body)
    console.log(req.body.duration)
    const Dayo = new Date
    Workout.findOneAndUpdate(
                                    {_id: req.params.id},
                                    {
                                        $push:{
                                            exercises: req.body,
                                            date:{
                                                    year:Dayo.getFullYear(),
                                                    month:Dayo.getMonth(),
                                                    day:Dayo.getDate(),
                                                    hour:Dayo.getUTCHours()},
                                            totals: {
                                                    // duration: $sum
                                            }
                                        }
                                    },
                                    {new : true, runValidators: true}
            ).then(Workout.findOneAndUpdate(
                                            {_id: req.params.id},
                                            {$push: 
                                                {totals: 
                                                    {   duration: {$sum: '$exercises.duration'}, 
                                                        weight: {$sum: '$exercises.weight'}
                                                    }
                                                }
                                            }
                                            )).then(dbWerk => {
                                                console.log(dbWerk);
                                                res.json(dbWerk)
                                            }).catch(err => {
                                                res.json(err)
                                            })
})

router.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({ date: -1 })
                    .then(dbWorkout => {
                        res.json(dbWorkout);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({ date: -1 })
                    .then(dbWorkout => {
                        res.json(dbWorkout);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
});

module.exports = router; 