const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var werkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: {
            type: String,
            
        },
        name: {
            type: String,
            trim: true,
            
        },
        distance: {
            type: Number,
            
        },
        duration: {
            type: Number,
            
        },
        sets: {
            type: Number,
            
        },
        reps: {
            type: Number,
            
        },
        weight: {
            type: Number,
            
        },
    },
    date: {
        year: {
            type: Number,
            default: (new Date).getFullYear()
        },
        month: {
            type: Number,
            default: (new Date).getMonth()
        },
        day: {
            type: Number,
            default: (new Date).getDate()
        },
        hour: {
            type: Number,
            default: (new Date).getUTCHours()
        },
    },
    totals: {
        duration: {type: Number},
        weight: {type: Number},
        distance: {type: Number}
    }
});
// werkoutSchema.index({idz: 1});
//Export the model
console.log(werkoutSchema.tree)
module.exports = mongoose.model('Workout', werkoutSchema);
