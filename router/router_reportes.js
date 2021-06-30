const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/pagosmes", async (req, res) => {

    const { mes, anio } = req.body;

    let qry = '';

    qry = `SELECT        CONST_CHEQUES.ID, CONST_CHEQUES.FECHA, CONST_CHEQUES.NOCONTRATO, ISNULL(CONST_CUENTAS.BANCO, CONST_CHEQUES.BANCO) AS BANCO, ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
    CONST_CHEQUES.NUMERO AS NOCHEQUE, CONST_CHEQUES.CANTIDAD AS IMPORTE, CONST_CHEQUES.RECIBE, CONST_CHEQUES.OBS, CONST_CHEQUES.RUBRO, 
    ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, ISNULL(CONST_ACREEDORES.DESACREEDOR, 'A FAVOR') AS DESACREEDOR, ISNULL(CONST_ACREEDORES.TIPO, 'CONTRATANTE') AS TIPO, 
    CONST_PROYECTOS.PROYECTO, CONST_CHEQUES.TIPOCHEQUE, ISNULL(CONST_CHEQUES.USUARIO, '--') AS USUARIO
FROM            CONST_ACREEDORES RIGHT OUTER JOIN
    CONST_CONTRATISTAS_PROYECTO ON CONST_ACREEDORES.CODACREEDOR = CONST_CONTRATISTAS_PROYECTO.CODACREEDOR RIGHT OUTER JOIN
    CONST_CUENTAS RIGHT OUTER JOIN
    CONST_CHEQUES LEFT OUTER JOIN
    CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO ON CONST_CUENTAS.CODCUENTA = CONST_CHEQUES.CODCUENTA ON 
    CONST_CONTRATISTAS_PROYECTO.NOCONTRATO = CONST_CHEQUES.NOCONTRATO
            WHERE (MONTH(CONST_CHEQUES.FECHA) = ${mes}) AND (YEAR(CONST_CHEQUES.FECHA) = ${anio})  AND CONST_CHEQUES.TIPOCHEQUE<>'CONTRATANTE'`;

    execute.Query(res, qry);

});



router.post("/pagosacreedor", async (req, res) => {

    const { mes, anio, codacreedor } = req.body;

    let qry = '';

    qry = ` `

    execute.Query(res, qry);

});


module.exports = router;