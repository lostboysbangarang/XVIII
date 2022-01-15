const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post(`/api/workouts`, ({body}, res) => {
    console.log(`\n\n\tCreation:\n\t\tBody:\n`, body);
    if(body.exercises){
        // console.log(Workout.create(body));
        Workout.create(body).then((dbWerk => {
                                        console.log(`\t\tdbWerk:\n`)
                                        res.json(dbWerk);
                                    })).catch(err =>{
                                        // res.status(400).json(err)
                                    })
    } else {
        // console.log(Workout.create());
        Workout.create({}).then((dbWerk => {
                                        console.log(`\t\tdbWerk:\n`)
                                        res.json(dbWerk);
                                    })).catch(err =>{
                                        // res.status(400).json(err)
                                    })
    }
    // Console.log(JSON.parse(res))
})

router.put(`/api/workouts/:id`, async (req, res) => {
    // let props = router.get(`/api/workouts/`+)
    console.log(`\n\n\tAPI:\t\tadd workout\n`)
    console.log(req.params.id)
    console.log(req.body.type,
        req.body.name,
        req.body.distance,
        req.body.duration,
        req.body.weight,
        req.body.sets,
        req.body.reps)
    const Dayo = new Date
    await Workout.findByIdAndUpdate(
                                    {_id: req.params.id},
                                    {
                                        $inc:{
                                            $push: {
                                                totals:{
                                                    duration: { $sum: "$exercises.duration" }, 
                                                    // $each:[{
                                                    //     // weight: { $sum: '$exercises.weight'}
                                                    // }]
                                                }

                                            }
                                        }
                                        // $push:{
                                        //     exercises:{
                                        //         $each:[{
                                        //             type:req.body.type,
                                        //             name:req.body.name,
                                        //             distance:req.body.distance,
                                        //             duration:req.body.duration,
                                        //             weight:req.body.weight,
                                        //             sets:req.body.sets,
                                        //             reps:req.body.reps
                                        //         }]
                                        //     }
                                        // }
                                        // $push:{
                                            
                                            // }
                                        },
                                        {new : false}
                                        )
                                        .then(async () =>{
                                            // console.log(`Response`, response)
                                            await Workout.aggregate([{
                                                $addFeilds:{
                                                    totals: {
                                                        duration: {$sum: "$exercises.duration"}
                                                    }
                                                }
                                            }]).then((db) =>{
                                                res.json(db);
                                            })})
                                        //                                 {_id: req.params.id},
                                        //                                 {
                                        //                                     // $push:{
                                        //                                     //     totals:{
                                        //                                     //         $each:{
                                        //                                     //             duration: 666, 
                                        //                                     //             weight: {$sum: '$exercises.weight'}
                                        //                                     //         }
                                        //                                     //     }
                                        //                                     // }
                                        //                                     $push:{
                                        //                                         exercises:{
                                        //                                             $each:[{
                                        //                                                 type:req.body.type,
                                        //                                                 name:req.body.name,
                                        //                                                 distance:req.body.distance,
                                        //                                                 duration:req.body.duration,
                                        //                                                 weight:req.body.weight,
                                        //                                                 sets:req.body.sets,
                                        //                                                 reps:req.body.reps
                                        //                                             }]
                                        //                                         }
                                        //                                     }
                                        //                                 },
                                        //                                 {new : true}
                                        //                             ).then(dbWerk => {
                                        //                                 console.log(dbWerk);
                                        //                                 res.json(dbWerk)
                                        //                             }).catch(err => {
                                        //                                 res.json(err)
                                        //                             })
                                        // })
                                            // fetchTotals()
                                    // ))
                                    .then(dbWerk => {
                                        console.log(dbWerk);
                                        res.json(dbWerk)
                                    }).catch(err => {
                                        res.json(err)
                                    })
})
// function fetchTotals() {
//     return fetch(`/api/workouts/totals/`+req.params.id, {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },

//                 })
// }
router.post(`/api/workouts/totals`, (req, res) =>{
    Workout.findByIdAndUpdate(
                                {_id: req.params.id},
                                {
                                    $push:{
                                        totals:{
                                            $each:{
                                                duration: {$sum: '$exercises.duration'}, 
                                                weight: {$sum: '$exercises.weight'}
                                            }
                                        }
                                    }
                                },
                                {new : true}
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