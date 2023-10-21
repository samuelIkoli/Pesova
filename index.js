const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/pesova';
const pesovaRoutes = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', pesovaRoutes);

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "correction error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.listen(port, (err) => {
    if (err) console.log("Error in server setup")
    console.log('Serving on port 3000')
});