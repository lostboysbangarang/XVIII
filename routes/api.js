const router = require(`express`).Router();
const Werkout = require(`../models/workout`);


//  Create workout
router.post(`/api/workouts`, ({body}, res) => {
    Werkout.create(body).then(dbWerk => {
                                    console.log(dbWerk)
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
    const Dayo = new Date
    console.log(Dayo.getFullYear())
    Werkout.findByIdAndUpdate(
                                    req.params.id,
                                    {$push:{sweetMoves: req.body, date:{year:Dayo.getFullYear(), month:Dayo.getMonth(), day:Dayo.getDate(), hour:Dayo.getUTCHours()}}},
                                    {new : true, runValidators: true}
            ).then(dbWerk => {
                console.log(dbWerk);
                res.json(dbWerk)
            }).catch(err => {
                res.json(err)
            })
})

//  Previous workouts
router.get(`/api/workouts`, (req, res) => {
    Werkout.find({}, (err, werks) => {
        console.log(werks.json);
        res.json(werks);
    })
})
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