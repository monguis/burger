var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")


router.get("/", (req, res) => {
    burger.lookforburgers((data) => {
        res.render("index", { burgers: data })
    })
})

router.put("/api/burger/:id", (req, res) => {
    devourId = req.params.id;
    burger.eatBurger({ id: devourId }, (data) => {
        if (data.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id",(req,res)=>{
    deleteId = req.params.id;
    burger.deleteBurger({id : deleteId},(data)=>{
        if(data.affectedRows === 0){
            return res.status(404).end();
        }
            res.json(data);
            res.status(200).end();
    })
});

router.post("/api/burger",(req,res)=>{
    const newBurger = req.body;
    burger.abbBurger(newBurger,(data)=>{
        res.json({ id: data.insertId });
    })
})


module.exports = router;
