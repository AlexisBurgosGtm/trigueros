const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {

    const { finalizado } = req.body;
    
    let qry = '';

    qry = `SELECT CONST_CAJA.NOCORTE, CONST_CAJA.CODCUENTA, CONST_CUENTAS.BANCO, CONST_CUENTAS.NUMERO, CONST_CAJA.NOCHEQUE, 
            CONST_CAJA.FECHA, CONST_CAJA.IMPORTE, CONST_CAJA.RECIBIDO, CONST_CAJA.USUARIO
            FROM CONST_CAJA LEFT OUTER JOIN  CONST_CUENTAS ON CONST_CAJA.CODCUENTA = CONST_CUENTAS.CODCUENTA
            WHERE (CONST_CAJA.FINALIZADO = '${finalizado}');`

    execute.Query(res, qry);

});

router.post("/insertcorte", async (req, res) => {

    const { codcuenta,nocheque,fecha,importe,recibido,usuario } = req.body;

    let qry = '';

    qry = `INSERT INTO CONST_CAJA (CODCUENTA, NOCHEQUE, FECHA, IMPORTE, RECIBIDO, USUARIO, FINALIZADO)
    VALUES (${codcuenta}, '${nocheque}', '${fecha}', ${importe}, '${recibido}', '${usuario}', 'NO'); `

    execute.Query(res, qry);

});

router.post("/deletecorte", async (req, res) => {

    const { nocorte } = req.body;

    let qry = '';

    qry = `DELETE FROM CONST_CAJA WHERE NOCORTE=${nocorte};
            DELETE FROM CONST_CAJA_MOVIMIENTOS WHERE NOCORTE=${nocorte};`

    execute.Query(res, qry);

});


router.post("/listadomovimientos", async (req, res) => {

    const { nocorte } = req.body;

    let qry = '';

    qry = `SELECT CONST_CAJA_MOVIMIENTOS.ID, CONST_CAJA_MOVIMIENTOS.NOCORTE, CONST_CAJA_MOVIMIENTOS.FECHA, 
                CONST_CAJA_MOVIMIENTOS.PROYECTO, CONST_CAJA_MOVIMIENTOS.ACREEDOR, 
                CONST_CAJA_MOVIMIENTOS.DESCRIPCION, CONST_CAJA_MOVIMIENTOS.RUBRO, 
                CONST_CAJA_MOVIMIENTOS.NOFACTURA, CONST_CAJA_MOVIMIENTOS.IMPORTE, 
                CONST_CAJA_MOVIMIENTOS.USUARIO, CONST_CAJA.FINALIZADO
            FROM CONST_CAJA_MOVIMIENTOS LEFT OUTER JOIN CONST_CAJA ON CONST_CAJA_MOVIMIENTOS.NOCORTE = CONST_CAJA.NOCORTE
            WHERE (CONST_CAJA_MOVIMIENTOS.NOCORTE = ${nocorte})`

    execute.Query(res, qry);

});

router.post("/insertmovimiento", async (req, res) => {

    const { nocorte, fecha, proyecto, acreedor, descripcion, rubro, nofactura, importe, usuario } = req.body;

    let qry = '';

    qry = `INSERT INTO CONST_CAJA_MOVIMIENTOS (NOCORTE,FECHA,PROYECTO,ACREEDOR,DESCRIPCION,RUBRO,NOFACTURA,IMPORTE,USUARIO)
    VALUES (${nocorte},'${fecha}','${proyecto}','${acreedor}','${descripcion}','${rubro}','${nofactura}',${(importe * -1)},'${usuario}'); `

    execute.Query(res, qry);

});

router.post("/deletemovimiento", async (req, res) => {

    const { id } = req.body;

    let qry = '';

    qry = `DELETE FROM CONST_CAJA_MOVIMIENTOS WHERE ID=${id};`

    execute.Query(res, qry);

});


module.exports = router;