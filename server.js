const app = require("./controllers/burgers_controller.js");
const burgermaster = require("./models/burger.js");

const PORT = process.env.PORT || 8080;
// console.log("before the server run")
app.listen(PORT,(err)=>{
    if(err) throw err;
    
    console.log("jalando")
    burgermaster.lookforburguers;
});