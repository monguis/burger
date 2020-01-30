var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")


router.get("/", (req, res) => {
    burger.lookforburgers((data) => {
        res.render("index", { burgers: data })
    })
})

router.post("/api/burger/:id", (req, res) => {
    devourId = req.params.id;
    burger.eatBurger({ id: devourId }, (data) => {
        if (data.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

router.delete("/api/burger/:id",(req,res)=>{
    deleteId = req.params.id;
    console.log(deleteId);
    burger.deleteBurger({id : deleteId},(data)=>{
        if(data.affectedRows === 0){
            return res.status(404).end();
        }
            res.json(data);
            res.status(200).end();
    })
})



// burgermaster.lookforburgers((res) => {
//     console.log(res)
// });


// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//     cat.all(function (data) {
//         var hbsObject = {
//             cats: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/api/cats", function (req, res) {
//     cat.create([
//         "name", "sleepy"
//     ], [
//         req.body.name, req.body.sleepy
//     ], function (result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });

// router.put("/api/cats/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     cat.update({
//         sleepy: req.body.sleepy
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// router.delete("/api/cats/:id", (req, res) => {
//     const condition = `id = ${req.params.id}`
//     cat.delete(condition, (result) => {
//         if (!result.affectedRows) {
//             return res.status(404).end();
//         }

//         res.status(200).end();
//     });
// });
// // Export routes for server.js to use.













module.exports = router;
