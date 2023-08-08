require("dotenv").config()
const mysql = require('mysql');

const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to database:', error);
        return;
    }
    console.log('Connected to database');
});

module.exports = connection;
