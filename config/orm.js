connection = require("./connection.js");

const orm = {

    selectAll: function (colToSearch) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, colToSearch, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}
orm.selectAll("burgers");
module.exports = orm;




 // insertOne: function (colToInsert, dataEntry) {
    //     // INSERT INTO burgers SET burger_name = "Chimiburger";
    //     var queryString = "INSERT INTO ?? SET ?";
    //     connection.query(queryString, [colToInsert, dataEntry], function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // },

    // updateOne: function (colToUpdate, newData, desiredId) {
    //     var queryString = `UPDATE ?? SET ? WHERE ?`
    //     connection.query(queryString, [colToUpdate, newData, desiredId], (err, res) => {
    //         if (err) throw err;
    //         this.selectAll(colToUpdate);
    //     });
    // }
   











    // // orm.selectAndOrder("animal_name", "pets", "price");
    // selectAndOrder: function (whatToSelect, table, orderCol) {
    //     var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    //     console.log(queryString);
    //     connection.query(queryString, [whatToSelect, table, orderCol], function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // },
    // // orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
    // findWhoHasMost: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //     var queryString =
    //         "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    //     //SELECT buyer_name, COUNT(buyer_name) 
    //     //AS count FROM buyers 
    //     //LEFT JOIN pets 
    //     //ON pets.buyer_id = buyers.id 
    //     //GROUP BY buyer_name DESC LIMIT 1;
    //     connection.query(
    //         queryString,
    //         [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //         function (err, result) {
    //             if (err) throw err;
    //             console.log(result);
    //         }
    //     );
    // }

