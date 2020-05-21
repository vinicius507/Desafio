const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const routes = require("./routes");

mongoose.connect("mongodb+srv://desafio:desafio@cluster0-e6pgk.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

app.listen(3333);