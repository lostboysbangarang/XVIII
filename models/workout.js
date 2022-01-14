const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var werkoutSchema = new mongoose.Schema({
    exercises: {
        name: {
            type: String,
            trim: true,
            required: "Enter a workout name"
        },
        type: {
            type: String,
            required: "Enter workout type"
        },
        duration: {
            type: Number,
            required: "Enter workout duration"
        },
        distance: {
            tytpe: Number,
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        weights: {
            type: Number
        },
        year: {
            type: Date,
            default: Date.prototype.getFullYear
        },
        month: {
            type: Date,
            default: Date.prototype.getMonth
        },
        day: {
            type: Date,
            default: Date.prototype.getDate
        },
        hour: {
            type: Date,
            default: Date.prototype.getUTCHours
        },
    }
});

//Export the model
module.exports = mongoose.model('Workout', werkoutSchema);
