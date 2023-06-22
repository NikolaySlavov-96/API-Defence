const { validationResult } = require('express-validator');

// create get by id and return only owner id, not other

const { getAll, create, updateById, deleteById } = require("../services/sourceService");
const { errorParser } = require('../util/parser');

const getAllSource = async (req, res) => {
    const source = await getAll();

    res.json(source);
};

const getById = async (req, res) => {
    res.json(await getById(req.params.idSource));
};

const createSource = async (req, res) => {

    try {
        const { errors } = validationResult(req);
        if (errors.length > 0) {
            throw errors;
        };
        const addInfo = Object.assign({ owner: req.user._id }, req.body);

        res.json(await create(addInfo));
    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
};

const updateSource = async (req, res) => {
    const sourceInfo = await getById(req.params.idSource);

    if (sourceInfo.owner !== req.user._id) {
        return res.status(403).json({ message: 'You canno\'t modify this sources' });
    }

    try {
        const { errors } = validationResult(req);

        if (errors.length > 0) {
            throw errors;
        }
        const update = await updateById(sourceInfo, req.body); //check result
        // const update = await updateById(req.params.idSource, req.body);
        res.json(update);
    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
};

const deleteSource = async (req, res) => {
    const souseInfo = await getById(req.params.idSource);

    if (souseInfo.owner !== req.user._id) {
        return res.status(403).json({ message: 'You canno\'t modify this sources' });
    };

    try {
        await deleteById(req.params.idSource);
        res.status(204).end();
    } catch (err) {
        const messge = errorParser(err);
        res.status(400).json({ messge });
    }
}


module.exports = {
    getAllSource,
    getById,
    createSource,
    updateSource,
    deleteSource,
}