const router = require("express").Router();


router.get("/usertest", (req,res)=>{
    res.send("user test is sucessfull")
});

router.post("/userposttest", (req,res)=>{
    const username = req.body.username;
    console.log("Your username is:" +username);
})
module.exports = router ;