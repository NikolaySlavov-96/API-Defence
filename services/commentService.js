const Comment = require("../models/CommentarModel");

const getAllComment = (idProduct) => {
    return Comment.find({ productId: idProduct });
}

const getCommentById = (idComment) => {
    return Comment.findById(idComment);
}

const createCommentForProduct = async (idProduct, owner, dataComment) => {
    const date = new Date();
    const createComment = await Comment.create({
        productId: idProduct,
        ownerId: owner,
        name: dataComment.name,
        commentar: dataComment.commentar,
        createAt: date,
        lastUpdate: date,
    })
    return createComment;
}

const editCommentById = async (idComment, newDate) => {
    const commentInfo = await Comment.findById(idComment);

    commentInfo.name = newDate.name;
    commentInfo.commentar = newDate.commentar;
    commentInfo.lastUpdate = new Date();

    return await commentInfo.save();
}

const deleteCommentById = async (idComment) => {
    const commentInfor = await Comment.findById(idComment);
    const date = new Date();

    commentInfor.lastUpdate = date;
    commentInfor.isDelete = !commentInfor.isDelete;

    return await commentInfor.save();
}

module.exports = {
    getAllComment,
    getCommentById,
    createCommentForProduct,
    editCommentById,
    deleteCommentById,
}

