const { model, Schema, Types: { ObjectId } } = require('mongoose');

const commentarSchema = new Schema({
    productId: { type: ObjectId, ref: 'User', required: true },
    ownerId: { type: ObjectId, ref: 'User', require: true },
    name: { type: String, required: true },
    commentar: { type: String, required: true },
    createAt: { type: Date, required: true },
    lastUpdate: { type: Date, required: true },
    isDelete: { type: Boolean, default: false },
});

const Comment = model('Comment', commentarSchema);

module.exports = Comment;