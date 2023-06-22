const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    year: { type: Number, required: true },
    creadAt: { type: new Date, required: true }, // check after edit user what show
    lastUpdate: { type: Date, required: true },
    isDelete: { type: Boolean, default: false },
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const UserMode = model('User', userSchema);


module.exports = UserMode;