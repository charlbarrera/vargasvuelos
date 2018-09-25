const express = require('express');

const router = express.Router();
const reservation = require('../models/reservaSchema');


router.get('/list', function(req, res){
    reservation.find({}, (err, reservations)=>{
        err ? res.status(500).json({errmsg: err}) : res.status(200).json({msg:reservations })
    })
})

router.post('/create', function(req, res){
    let newReservation = new reservation({
        name: req.body.name
    });
    newReservation.save((err, reservation)=>{
        if(err){
            res.status(500).json({errmsg: err});
        }else{
            res.status(200).json({msg: reservation})
        }
    })
})

module.exports = router;