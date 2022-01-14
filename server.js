const express = require(`express`);
const mongoose = require(`mongoose`);
const logs = require(`morgan`);

// const dbUrl = `fergie`;
// const collections = `werkinOnHerFitness`;
// const witness = mango(dbUrl, collections);
mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/fergie`, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logs(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// witness.on(`error`, error => {
//     console.log(`Ooooooooo-Wheeeeee\n\tError:\t${error}`);
// })

// const mongoose = require('mongoose');



app.use(require(`./routes/api`))
app.use(require(`./routes/views`))

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT} !`);
});