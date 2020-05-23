const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
    state: {
        type: String,
    },
    dateCreated:{
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Doc", DocSchema);