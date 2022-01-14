const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post(`/api/workouts`, ({body}, res) => {
    Workout.create({}).then(dbWerk => {
                                    res.json(dbWerk);
                                }).catch(err =>{
                                    res.status(400).json(err)
                                })
})

router.put(`/api/workouts/:id`, (req, res) => {
    console.log(`\n\n\tAPI:\t\tadd workout\n`)
    console.log(req.body)
    console.log(req.params.id)
    Workout.findByIdAndUpdate(
                                    req.params.id,
                                    {$push:{sweetMoves: req.body}},
                                    {new : true, runValidators: true}
            ).then(dbWerk => {
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



module.exports = router; 