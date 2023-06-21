const DB = require('mongoose');
const { DB_ADDRESS, DB_NAME } = require('../env');

module.exports = async (app) => {
    try {
        await DB.connect(DB_ADDRESS + DB_NAME, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log('Successful connect with DB ' + DB_NAME);
    } catch (err) {
        console.error('Unsuccessful connet with DB ' + DB_NAME, err.message);
        // process.exit(1);
    }
}