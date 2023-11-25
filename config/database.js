require('dotenv').config();
const DB = require('mongoose');


module.exports = async (app) => {
    try {
        await DB.connect(process.env.DB_ADDRESS, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME,
        })

        console.log('Successful connect with DB ');
    } catch (err) {
        console.error('Unsuccessful connet with DB ', err.message);
        // process.exit(1);
    }
}

//mongodb+srv://db_user:B91aP29zEUi5E4fl@cluster0.veydorh.mongodb.net/?retryWrites=true&w=majority