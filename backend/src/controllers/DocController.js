const Doc = require("../models/Doc");

const store = async (req, res) => {
    const document = new Doc();

    try {
        await document.save();
        res.send(document);
    } catch (err) {
        res.status(400).send(err);
    }
};

const update = async (req, res) => {
    const document = req.body;
    const id = req.headers.id;

    const updatedDocument = await Doc.updateOne({ _id: id }, {$set: document});

    res.send(updatedDocument);
};

const index = async (req, res) => {
    const id = req.headers.id;
    const document = await Doc.findById(id);

    res.send(document);
};

module.exports.store = store;
module.exports.update = update;
module.exports.index = index;