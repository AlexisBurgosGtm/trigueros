const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    let qry = '';

    qry = `SELECT CODCUENTA, DESCRIPCION, BANCO, NUMERO, ISNULL(SALDO,0) AS SALDO 
            FROM CONST_CUENTAS`

    execute.Query(res, qry);

});


module.exports = router;