const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    // useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const db = require(`./models/workout.js`);
// await db();

db.deleteMany({}, (err) => {
    console.log(`Error: ` + err)    
});