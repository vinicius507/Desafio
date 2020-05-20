const mongoose = require('mongoose');

const DocSchema = new mongoose.Schema({
    state: {
        type: Number,
        required: true,
        default: 1,
    },
    dateCreated:{
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Doc", DocSchema);