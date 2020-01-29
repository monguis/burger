const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    password: "password",
    database: "burgers_db",
    port: 3306,
    user: "root"
})

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;