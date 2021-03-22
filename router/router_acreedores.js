const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    const tipo = req.body.tipo;

    let qry = '';

    qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION
             FROM CONST_ACREEDORES WHERE TIPO='${tipo}' `

    execute.Query(res, qry);

});


module.exports = router;