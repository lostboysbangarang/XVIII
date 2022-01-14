const mongoose = require('mongoose');
const express = require('express');

mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 6969;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/workouts', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

app.use(require('./routes/api.js'));
app.use(require('./routes/views.js'));

app.listen(PORT, () => {    
    console.log(`App running on port http://127.0.0.1:${PORT} !`);
});