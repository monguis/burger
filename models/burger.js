const orm = require("../config/orm.js");

const burger = {
    lookforburgers: function (cb) {
        orm.selectAll("burgers", (data) => {
            cb(data)
        });
    },
    abbBurger: function (burgerName, cb) {
        orm.insertOne("burgers", {burger_name:burgerName,devoured:false}, (x) => {
            cb(x);
        })
    },
    eatBurger: function (burgertoEat, cb) {
        orm.updateOne('burgers', { devoured: true }, burgertoEat, (x) => {
            cb(x);
        })
    },
    deleteBurger: function (burgertoDelete, cb) {
        orm.deleteOne("burgers",burgertoDelete,(x)=>{
            cb(x);
        })
    }
}


// deleteOne: function (colToUpdate, desiredId, cb) {
//     var queryString = `DELETE FROM ?? WHERE ?`
//     connection.query(queryString, [colToUpdate, desiredId], (err, result) => {
//         if (err) throw err;
//         cb(result);
//     });
// }

module.exports = burger;

// updateOne: function (colToUpdate, newData, desiredId,cb) {
//     var queryString = `UPDATE ?? SET ? WHERE ? LIMIT 1`
//     connection.query(queryString, [colToUpdate, newData, desiredId], (err, res) => {
//         if (err) throw err;
//         cb(result);
//     });