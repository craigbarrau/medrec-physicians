 'use strict';
    // Include our "db"
    var db = require('../../config/db')();
    // Exports all the functions to perform on the db
    module.exports = {getAll, save, getOne, update, delPhysician};

    //GET /physician operationId
    function getAll(req, res, next) {
      res.json({ physicians: db.find()});
    }
    //POST /physician operationId
    function save(req, res, next) {
        res.json({success: db.save(req.body), description: "physician added to the list!"});
    }
    //GET /physician/{id} operationId
    function getOne(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        var physician = db.find(id);
        if(physician) {
            res.json(physician);
        }else {
            res.status(204).send();
        }       
    }
    //PUT /physician/{id} operationId
    function update(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        var physician = req.body;
        if(db.update(id, physician)){
            res.json({success: 1, description: "physician updated!"});
        }else{
            res.status(204).send();
        }

    }
    //DELETE /physician/{id} operationId
    function delPhysician(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        if(db.remove(id)){
            res.json({success: 1, description: "physician deleted!"});
        }else{
            res.status(204).send();
        }

    }