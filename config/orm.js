connection = require("./connection.js");

const orm = {

    selectAll: function (colToSearch,cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, colToSearch, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }, insertOne: function (colToInsert, dataEntry,cb) {
        // INSERT INTO burgers SET burger_name = "Chimiburger";
        var queryString = "INSERT INTO ?? SET ?;";
        connection.query(queryString, [colToInsert, dataEntry], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (colToUpdate, newData, desiredId,cb) {
        var queryString = `UPDATE ?? SET ? WHERE ? LIMIT 1`
        connection.query(queryString, [colToUpdate, newData, desiredId], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function (colToUpdate, desiredId,cb) {
        var queryString = `DELETE FROM ?? WHERE ?`
        connection.query(queryString, [colToUpdate, desiredId], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;