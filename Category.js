const express = require('express');
const db = require('./db');
const util = require('./utils');

const router = express.Router();

router.get('/category',(request,response) => {
    const connection = db.MyConnect();

    const statement = 'select * from Category';

    connection.query(statement,(error,result) => {
        connection.end();
        response.send(util.createResponse(error,result));
    });
});

module.exports=router;