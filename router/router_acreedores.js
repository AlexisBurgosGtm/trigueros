const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    const tipo = req.body.tipo;
    let qry = '';

    if(tipo=='TODOS'){
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION, TIPO
        FROM CONST_ACREEDORES
        ORDER BY TIPO, CODACREEDOR`
    }else{
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION
        FROM CONST_ACREEDORES WHERE TIPO='${tipo}' `
    }
    

    execute.Query(res, qry);

});


module.exports = router;