const express = require('express');
const router = express.Router();
const User = require("../models/addUser");

// const commonFn = require('../utils/commonFn');

sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}

router.post('/', (req, res) => {
    User.addUser(req.body, (err, user) => {
        if (err) sendRes(res, false, "User can't be created"+user);
        if (user) sendRes(res, true,
            "User Created " + user);
    })
});

router.post('/authenticate', (req, res) => {
    User.authenticate(req.body,(err,user)=>{
        if(err || !user){
            sendRes(res,false,"user not found")
        }

        else{
            sendRes(res,true,user)
        }
    })
});

// router.get('/', (req, res) => {
//     response= { data:"You have sent"+JSON.stringify(req.body) }
//     console.log(res.body);   
//      res.json(response);
// });

router.post('/userDetails', (req, res) => {
  User.showuser(req.body,(err,user)=>{
        if (err) sendRes(res, false, "Cannot display");
        if (user) sendRes(res, true,
            user);
    })
});

module.exports = router;