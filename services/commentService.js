const Comment = require("../models/CommentarModel");
const { createNewDate } = require("../util/parser");

const getAllComment = (idProduct) => {
    return Comment.find({ productId: idProduct, isDelete: false });
}

const getCommentById = (idComment) => {
    return Comment.findById(idComment);
}

const getCommentsByUserId = (ownerId) => {
    return Comment.find({ ownerId, isDelete: false })
}

const createCommentForProduct = async (idProduct, owner, dataComment) => {
    const createComment = await Comment.create({
        productId: idProduct,
        ownerId: owner,
        name: dataComment.name,
        commentar: dataComment.commentar,
        createAt: createNewDate(),
        lastUpdate: createNewDate(),
    })
    return createComment;
}

const editCommentById = async (idComment, newDate) => {
    const commentInfo = await Comment.findById(idComment);

    commentInfo.name = newDate.name;
    commentInfo.commentar = newDate.commentar;
    commentInfo.lastUpdate = createNewDate();

    return await commentInfo.save();
}

const deleteCommentById = async (idComment) => {
    const commentInfor = await Comment.findById(idComment);

    commentInfor.lastUpdate = createNewDate();
    commentInfor.isDelete = !commentInfor.isDelete;

    return await commentInfor.save();
}

module.exports = {
    getAllComment,
    getCommentById,
    getCommentsByUserId,
    createCommentForProduct,
    editCommentById,
    deleteCommentById,
}

