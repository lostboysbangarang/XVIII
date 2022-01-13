const express = require(`express`);
const mango = require(`mongojs`);
const logs = require(`morgan`);

const dbUrl = `fergie`;
const collections = `werkinOnHerFitness`;
const witness = mango(dbUrl, collections);

const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public/js/app.js`));

witness.on(`error`, error => {
    console.log(`Ooooooooo-Wheeeeee\n\tError:\t${error}`);
})

// app.listen(3000, () => {
//     console.log("App running on port 3000!");
// });
