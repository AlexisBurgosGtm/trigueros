const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    let qry = '';

    qry = `SELECT IDCONTRATISTA AS CODIGO, DESCONTRATISTA AS DESCRIPCION, ISNULL(TIPO,'VARIOS') AS TIPO
             FROM CONST_CONTRATISTAS`

    execute.Query(res, qry);

});


module.exports = router;