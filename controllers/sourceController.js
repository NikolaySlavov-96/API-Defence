const { validationResult } = require('express-validator');

// create get by id and return only owner id, not other

const { getAll, getById, create, updateById, deleteById } = require("../services/sourceService");
const { errorParser } = require('../util/parser');

const getAllSource = async (req, res) => {
    const source = await getAll();

    res.json(source);
};

const getSourceById = async (req, res) => {
    const product = await getById(req.params.idSource)
    res.json(product);
};

const createSource = async (req, res) => {

    try {
        const { errors } = validationResult(req);
        if (errors.length > 0) {
            throw errors;
        };
        const { articul, mark, model, release, description, owner, isDelete } = Object.assign({ owner: req.user._id }, req.body);

        res.json(await create({ articul, mark, model, release, description, owner, isDelete }));
    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
};

const updateSource = async (req, res) => {
    const sourceInfo = await getById(req.params.idSource);

    if (sourceInfo.owner.toString() !== req.user._id) {
        return res.status(403).json({ message: 'You canno\'t modify this sources' });
    }

    try {
        const { errors } = validationResult(req);

        if (errors.length > 0) {
            throw errors;
        }
        const { articul, mark, model, release, description, owner, isDelete } = await updateById(req.params.idSource, req.body);
        res.json({ articul, mark, model, release, description, owner, isDelete });
    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
};

const deleteSource = async (req, res) => {
    const souseInfo = await getById(req.params.idSource);

    if (souseInfo.owner.toString() !== req.user._id) {
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
    getSourceById,
    createSource,
    updateSource,
    deleteSource,
}