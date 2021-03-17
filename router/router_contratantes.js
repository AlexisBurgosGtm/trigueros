const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    let qry = '';

    qry = `SELECT CODCONTRATANTE AS CODIGO, DESCONTRATANTE AS DESCRIPCION
            FROM CONST_CONTRATANTES`

    execute.Query(res, qry);

});


module.exports = router;