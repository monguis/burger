const burgermaster = require("./models/burger.js");
const exphbs = require("express-handlebars");
const express = require("express");
const PORT = process.env.PORT || 8080;
const routes = require("./controllers/burgers_controller.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// console.log("before the server run")
app.listen(PORT, (err) => {
    if (err) throw err;
    
console.log("WORKING ON PORT " + PORT)

});