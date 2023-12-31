const auth = require("../routes/users");
const user = require("../routes/profile");
const source = require("../routes/source");
const search = require("../routes/search");
const like = require("../routes/like");

module.exports = (app) => {
    app.use('/auth', auth);
    app.use('/user', user);
    app.use('/source', source);
    app.use('/search', search);
    app.use('/like', like);
}