const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var workoutSchema = new mongoose.Schema({
    sweetMoves: [
        {
            // id: {
            //     type: Number,
            //     autoIncrement: true,
            //     index: true,
            //     loggedIn: {
            //         type: Date,
            //         default: new Date
            //     }
            // },
            type:{
                type:String,
            },
            name:{
                type:String,
            },
            durration:{
                type:Number,
            },
            weight:{
                type:Number,
            },
            reps:{
                type:Number,
            },
            distance:{
                type:Number,
            },
            sets:{
                type:Number,
            },
            date: {
                type:Date,
                default:Date.now()
            }
        }
    ]
});

//Export the model
module.exports = mongoose.model('Werkout', workoutSchema);