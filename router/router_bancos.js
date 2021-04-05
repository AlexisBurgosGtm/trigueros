const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    let qry = '';

    qry = `SELECT CODCUENTA, DESCRIPCION, BANCO, NUMERO, ISNULL(SALDO,0) AS SALDO 
            FROM CONST_CUENTAS`

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {
    const {descripcion,bancos,numero} = req.body;
    let qry = '';

    qry = `INSERT INTO CONST_CUENTAS (DESCRIPCION, BANCO, NUMERO, SALDO )
    VALUES ('${descripcion}','${bancos}','${numero}',0); `

    execute.Query(res, qry);

});

router.post("/editar", async (req, res) => {
    
    const {codcuenta,descripcion,bancos,numero} = req.body;

    let qry = '';

    qry = `UPDATE CONST_CUENTAS SET 
                DESCRIPCION='${descripcion}', BANCO='${bancos}', 
                NUMERO='${numero}'
            WHERE CODCUENTA=${codcuenta};`

    execute.Query(res, qry);

});

router.post("/eliminar", async (req, res) => {
    const {codcuenta} = req.body;
    let qry = '';

    qry = `DELETE FROM CONST_CUENTAS WHERE CODCUENTA=${codcuenta}; `

    execute.Query(res, qry);

});


module.exports = router;