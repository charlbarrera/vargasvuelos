const express = require('express');

const router = express.Router();
const reservation = require('../models/reservaSchema');


router.get('/list', function(req, res){
    reservation.find({}, (err, reservations)=>{
        err ? res.status(500).json({errmsg: err}) : res.status(200).json({msg:reservations })
    })
})

router.post('/create', function(req, res){

    reservation.findById(req.body.cedula, function(err, existente){
        if(err){
            console.log(err)
        }if( existente ) {
            res.status(200).json({msg: 'ya existe el usuario'})
            console.log('ya existe');
        }
        else {

            let newReservation = new reservation();
            newReservation._id = req.body.cedula;
            newReservation.dateRegister = new Date().getTime() / 86400000;
            newReservation.dateBorn = req.body.dateBorn;
            newReservation.name = req.body.name;
            newReservation.reservation = req.body.reservation;
            newReservation.save((err, reservation)=>{
                if(err){
                    res.status(500).json({errmsg: err});
                }else{
                    res.status(200).json({msg: reservation})
                }
            })
        }
    });
        

})

module.exports = router;