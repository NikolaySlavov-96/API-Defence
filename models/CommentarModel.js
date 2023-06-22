const { model, Schema, Types: { ObjectId } } = require('mongoose');

const commentarSchema = new Schema({
    productId: { type: ObjectId, ref: 'User', required: true },
    ownerId: { type: ObjectId, ref: 'User', require: true },
    commentar: { type: String, required: true },
    createAt: { type: new Date, required: true },
    isDelete: { type: Boolean, default: false },
});