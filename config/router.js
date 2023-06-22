const users = require("../routes/users");
const profile = require("../routes/profile");
const source = require("../routes/source");

module.exports = (app) => {
    app.use('/auth', users);
    app.use('/user', profile);
    app.use('/source', source);
}