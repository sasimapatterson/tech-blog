const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

    // This is the addon for Heroku 
    if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // coming from the .env file
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        { //Database location
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}



module.exports = sequelize;