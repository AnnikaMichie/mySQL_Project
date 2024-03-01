const router = require('express').Router();
const { app } = require('apico/server.js');
/** Declare routes for Router */


router.post('/all', function( req, res )=>{
    res.json({"message": "OK"});
});

app.use( '/custoemrs', router );