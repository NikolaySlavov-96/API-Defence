const https = require('https');
const fs = require('fs');

const express = require('express');

const { PORT } = require('./env');

const database = require('./config/database');
const expres = require('./config/expres');
const router = require('./config/router');

/*
const options = {
    key: fs.readFileSync('../key-PRK.pem'),
    cert: fs.readFileSync('../cert-CRT.pem')
}
*/

start();

async function start() {
    const app = express();
    // https.createServer(options, app).listen(PORT, () => console.log('Server work on port ' + PORT));

    await database(app);
    expres(app, express);
    router(app);

    app.listen(PORT, () => console.log('Server work on port ' + PORT));
}