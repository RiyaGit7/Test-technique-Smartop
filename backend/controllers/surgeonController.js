const Surgeon = require('../models/surgeonModel');

exports.getSurgeons = async (req, res) => {
    try {
        const surgeons = await Surgeon.find();
        res.json(surgeons);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
