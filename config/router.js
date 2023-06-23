const auth = require("../routes/users");
const user = require("../routes/profile");
const source = require("../routes/source");

module.exports = (app) => {
    app.use('/auth', auth);
    app.use('/user', user);
    app.use('/source', source);
}