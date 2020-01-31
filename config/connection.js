const mysql = require("mysql");
// var connection = mysql.createConnection({
//     host: "localhost",
//     password: "password",
//     database: "burgers_db",
//     port: 3306,
//     user: "root"
// })


if (process.env.JAWSDB_URL) {
   const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
            host: "localhost",
            password: "password",
            database: "burgers_db",
            port: 3306,
            user: "root"
        })
}
    connection.connect((err) => {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
    })

module.exports = connection;