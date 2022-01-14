const router = require(`express`).Router();
const Werkout = require(`../models/workout`);


//  Create workout
router.post(`/api/workouts`, ({body}, res) => {
    Werkout.create(body).then(dbWerk => {
                                    res.json(dbWerk);
                                }).catch(err =>{
                                    res.status(400).json(err)
                                })
})

//  Add workout
router.put(`/api/workouts/:id`, (req, res) => {
    console.log(`\n\n\tAPI:\t\tadd workout\n`)
    console.log(req.body)
    console.log(req.params.id)
    Werkout.findByIdAndUpdate(
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

//  Previous workouts

//  Previous workout{Prop}

//  Multiple exercises one workout
// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
module.exports = router