require('dotenv').config();
const express = require('express');

const database = require('./config/database');
const expres = require('./config/expres');
const router = require('./config/router');
const PORT = process.env.PORT;


start();

async function start() {
    const app = express();

    await database(app);
    expres(app, express);
    router(app);

    app.listen(PORT, () => console.log('Server work on port ' + PORT));
}