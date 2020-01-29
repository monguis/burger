const orm = require("../config/orm.js");

orm.selectAll("burgers");

const burger = {
    lookforburguers: orm.selectAll("burgers")
}

module.exports = burger;