const { checkLikeProduct, likeDislickeProduct } = require("../services/likeService");
const { validationResult } = require('express-validator');
const { errorParser } = require('../util/parser');

const checkLike = async (req, res) => {
    try {
        const productId = req.params.productId
        const likes = await checkLikeProduct(productId, req.user._id);
        res.json({ likes });
    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
}

const likeDislicke = async (req, res) => {
    try {
        const productId = req.params.productId
        const likes = await likeDislickeProduct(productId, req.user._id);
        res.json({ likes });
    } catch (err) {
        const message = errorParser(err);
        res.status(400).json({ message });
    }
}

module.exports = {
    checkLike,
    likeDislicke,
}