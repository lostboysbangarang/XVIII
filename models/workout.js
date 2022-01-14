const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var werkoutSchema = new mongoose.Schema({
    // idz: {type:  Number, required: true, index: true},
    exercises: {
        name: {
            type: String,
            trim: true,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        duration: {
            type: Number,
            default: null
        },
        distance: {
            type: Number,
            default: null
        },
        sets: {
            type: Number,
            default: null
        },
        reps: {
            type: Number,
            default: null
        },
        weights: {
            type: Number,
            default: null
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
        duration: {type: Number, default: null},
        weight: {type: Number, default: null},
        distance: {type: Number, default: null}
    }
});
// werkoutSchema.index({idz: 1});
//Export the model
console.log(werkoutSchema.tree)
module.exports = mongoose.model('Workout', werkoutSchema);
