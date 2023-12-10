const Like = require("../models/likeModel");

const checkLikeProduct = async (productId, userId) => {
    const res = await Like.findOne({ productId });
    const message = {
        likesCount: 0,
        message: '',
    }

    if(res.likes.includes(userId)) {
        message.message = 'Subscribe'
    } else {
        message.message = 'UnSubscribe'
    }

    message.likesCount = res.likes.length;
    return message;
}

const likeDislickeProduct = async (productId, userId) => {
    const lik = await Like.findOne({ productId });
    const message = {
        likesCount: 0,
        message: '',
    }

    if (lik === null) {
        const res = await Like.create({
            productId,
            likes: userId
        })
        message.message = 'Subscribe'
        message.likesCount = res.likes.length;
        return message;
    }

    if (lik.likes.includes(userId)) {
        const res = lik.likes.filter((e) => e.toString() !== userId);
        lik.likes = res;
        message.message = 'UnSubscribe';
    } else {
        lik.likes.push(userId);
        message.message = 'Subscribe';
    }
    const saveLike = await lik.save();
    message.likesCount = saveLike.likes.length;
    return message;
}

module.exports = {
    checkLikeProduct,
    likeDislickeProduct,
}