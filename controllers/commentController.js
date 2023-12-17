const { validationResult } = require('express-validator');

const { getAllComment, createCommentForProduct, editCommentById, deleteCommentById, getCommentById } = require("../services/commentService");
const { errorParser } = require('../util/parser');
const { getById } = require('../services/sourceService');


const getCommentarsByIdProduct = async (req, res) => {
    const idSource = req.params.idSource;

    const comments = await getAllComment(idSource);

    // const result = source.map(e => ({ ...e, comment: comments }))

    res.json(comments);
}

const getCommentByIdComment = async (req, res) => {
    const idComment = req.params.idComment;

    const result = await getCommentById(idComment);

    res.json(result);
}

const createComments = async (req, res) => {

    try {
        const { errors } = validationResult(req);

        if (errors.length > 0) {
            throw errors;
        }

        const result = await createCommentForProduct(req.params.idSource, req.user._id, req.body);
        res.json(result);

    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
}

const editCommentByIdComment = async (req, res) => {

    try {
        const { errors } = validationResult(req);

        if (errors.length > 0) {
            throw errors;
        }

        const idComment = req.params.idComment;

        const result = await editCommentById(idComment, req.body);
        res.json(result);
    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
}

const deleteCommentByIdComment = async (req, res) => {
    const idComment = req.params.idComment;

    await deleteCommentById(idComment);

    res.status(204).end();
}

module.exports = {
    getCommentarsByIdProduct,
    getCommentByIdComment,
    createComments,
    editCommentByIdComment,
    deleteCommentByIdComment,
}