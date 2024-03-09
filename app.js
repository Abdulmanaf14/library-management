const express = require("express");
const mongoose = require("mongoose");
const circulatioRout = require('./routes/circulationRoutes')

const app = express();
const PORT = process.env.PORT || 3500;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('connect to mongodb');
});

app.use('/api', circulatioRout);

app.listen(PORT, () => console.log("gg server is running"));
