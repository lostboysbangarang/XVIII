const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
// Dayo = new Date().now()
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
        }
    ],
    date:[
        {
        year:{ type:Number,  default:Date.prototype.getFullYear},
        month:{ type:Number, default:Date.prototype.getMonth},
        day:{ type:Number, default:Date.prototype.getDate},
        hour:{ type:Number, default:Date.prototype.getUTCHours},
        
    }]
});

//Export the model
module.exports = mongoose.model('Werkout', workoutSchema);