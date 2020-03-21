const express = require('express');
const mongoose = require('mongoose');
const Contacts = require('../model/schema');
const router = express.Router();

router.get('/contacts',(req, res, next)=>{
    Contacts.find((err ,contacts)=>{
        if(err){
            res.json({Error :"error has occured at finding the data"});
        }
        else{
            res.json(contacts);
        }
    })
});


router.post('/contacts',(req, res)=>{
    Contacts.create(function(err, contacts){
        let saveContacts = new Contacts({
            first_name : req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            city: req.body.city,
            state : req.body.city
        });

        saveContacts.save((err, contacts)=>{
            if(err){
                res.json({error :"could not store the data"});
            }
            else{
                res.json(contacts);
            }
        })
    });
});



router.put('/contacts/:id',(req, res)=>{
    var _id=req.params.id;
    Contacts.findByIdAndUpdate(_id,{address :'banglore'},(err, result)=>{
        if(err){
            res.json({error:'error'});
        }
        else{
            res.json(result);
        }

    })
});



router.delete('/contacts/:id',(req, res)=>{
    Contact.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;