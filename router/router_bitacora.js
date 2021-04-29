const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    let qry = '';

    qry = `SELECT FECHA, HORA, DESCRIPCION, USUARIO 
            FROM CONST_BITACORA`

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {

   const {fecha,hora,descripcion,usuario} = req.body;
   
    let qry ='';

   qry = `INSERT INTO CONST_BITACORA (FECHA,HORA,DESCRIPCION,USUARIO)
   VALUES ('${fecha}','${hora}','${descripcion}','${usuario}')`

   execute.Query(res, qry);

});



module.exports = router;