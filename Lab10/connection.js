var mysql = require('mysql2')

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"2809",
    database : "pankajdb"
})
connection.connect((err) => {
    if (err) throw err;
    console.log("Connection created..!!");
});

module.exports.con = connection;