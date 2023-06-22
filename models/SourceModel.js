const { model, Schema, Types: { ObjectId } } = require('mongoose');

const sourceSchema = new Schema({
    articul: { type: String, required: true, },
    mark: { type: String, required: true, },
    model: { type: String, required: true, },
    release: { type: String, required: true, },
    description: { type: String, required: true, },
    createAt: { type: new Date, required: true },
    owner: { type: ObjectId, required: true },
    isDelete: { type: Boolean, default: false }
});

const Source = model('Source', sourceSchema);

module.exports = Source;