const { model, Schema, Types: { ObjectId } } = require('mongoose');

const likeSchema = new Schema({
    likes: { type: [ObjectId] },
    productId: { type: ObjectId, ref: 'Source' },
});


const likeMode = model('Like', likeSchema);


module.exports = likeMode;