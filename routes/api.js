const express = require ('express');
const router = express.Router();
const NewInfo = require('../models/newInfo');

router.get('/newInfos', (req, res, next) => {
    
    //this will return all the data, exposing only the id and information field to the client
    NewInfo.find({})
    .then(data => res.json(data))
    .catch(next)

});

router.post('/newInfos', (req, res, next) => {
    
    if(req.body.information){
        NewInfo.create(req.body)
        .then(data => res.json(data))
        .catch(next)
        
    }else {
    res.json({
        error: "The input field is empty"
    })
    }

});

router.delete('/newInfos/:id', (req, res, next) => {
    
    NewInfo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})

module.exports = router;