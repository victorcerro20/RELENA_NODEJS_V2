const mysql = require('mysql2');

const dbConfig = {
    host: '184.175.93.196', //  host de la base de datos MySQL
    port: 3306, // El puerto de la datos 
    user: 'relenac2_rootmy', // El usuario de la datos 
    password: 'jardincentral.2342', 
    database: 'relenac2_desmy' // El nombre de la base de datos MySQL
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
