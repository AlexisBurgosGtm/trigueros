const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/nuevochequecontratante", async (req, res) => {

    const {idproyecto,fecha,codcontratante,banco,numero,cantidad,recibe,obs,tipo} = req.body;

    let qry = '';

    qry = `INSERT INTO CONST_CHEQUES (IDPROYECTO,FECHA,NOCONTRATO,CODACREEDOR,CODCONTRATANTE,CODCUENTA,BANCO,NUMERO,CANTIDAD,RECIBE,OBS,RUBRO,TIPOCHEQUE) 
        VALUES (${idproyecto},'${fecha}',0,0,${codcontratante},0,'${banco}','${numero}',${cantidad},'${recibe}','${obs}','OTROS','${tipo}')`

    console.log(qry);

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {
    
    const {idproyecto,fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo} = req.body;

    let qry = '';

    qry = ` 
        INSERT INTO CONST_CHEQUES (
        IDPROYECTO,FECHA,NOCONTRATO,
        CODACREEDOR,CODCONTRATANTE,CODCUENTA,
        BANCO,NUMERO,CANTIDAD,
        RECIBE,OBS,RUBRO,
        TIPOCHEQUE) 
        VALUES 
        (${idproyecto},'${fecha}',${nocontrato},
        ${codacreedor},0,${codcuenta},
        'SN','${numero}', ${(cantidad*-1)},
        '${recibe}','${obs}','${rubro}',
        '${tipo}')`

    execute.Query(res, qry);

});


router.post("/listadoproyecto", async (req, res) => {
    
    const {idproyecto} = req.body;

    let qry = '';
        
    qry = `SELECT CONST_CHEQUES.ID, CONST_CHEQUES.FECHA, CONST_CHEQUES.NOCONTRATO, ISNULL(CONST_CUENTAS.BANCO, CONST_CHEQUES.BANCO) AS BANCO, ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
                CONST_CHEQUES.NUMERO AS NOCHEQUE, CONST_CHEQUES.CANTIDAD AS IMPORTE, CONST_CHEQUES.RECIBE, CONST_CHEQUES.OBS, CONST_CHEQUES.RUBRO, 
                ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, ISNULL(CONST_ACREEDORES.DESACREEDOR, 'A FAVOR') AS DESACREEDOR, ISNULL(CONST_ACREEDORES.TIPO, 'CONTRATANTE') AS TIPO, 
                CONST_PROYECTOS.PROYECTO, CONST_CHEQUES.TIPOCHEQUE
            FROM CONST_ACREEDORES RIGHT OUTER JOIN
                CONST_CONTRATISTAS_PROYECTO ON CONST_ACREEDORES.CODACREEDOR = CONST_CONTRATISTAS_PROYECTO.CODACREEDOR FULL OUTER JOIN
                CONST_CUENTAS RIGHT OUTER JOIN
                CONST_CHEQUES LEFT OUTER JOIN
                CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO ON CONST_CUENTAS.CODCUENTA = CONST_CHEQUES.CODCUENTA ON 
                CONST_CONTRATISTAS_PROYECTO.NOCONTRATO = CONST_CHEQUES.NOCONTRATO
            WHERE (CONST_CHEQUES.IDPROYECTO = ${idproyecto})`;
            
    execute.Query(res, qry);

});

router.post("/listadocontrato", async (req, res) => {
    
    const {nocontrato} = req.body;

    let qry = '';
        
    qry = `SELECT CONST_CHEQUES.ID, CONST_CHEQUES.FECHA, CONST_CHEQUES.NOCONTRATO, ISNULL(CONST_CUENTAS.BANCO, CONST_CHEQUES.BANCO) AS BANCO, ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
            CONST_CHEQUES.NUMERO AS NOCHEQUE, (isnull(CONST_CHEQUES.CANTIDAD,0)  * -1) AS IMPORTE, CONST_CHEQUES.RECIBE, CONST_CHEQUES.OBS, CONST_CHEQUES.RUBRO, 
            ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, ISNULL(CONST_ACREEDORES.DESACREEDOR, 'A FAVOR') AS DESACREEDOR, ISNULL(CONST_ACREEDORES.TIPO, 'CONTRATANTE') AS TIPO, 
            CONST_PROYECTOS.PROYECTO, CONST_CHEQUES.TIPOCHEQUE
        FROM CONST_ACREEDORES RIGHT OUTER JOIN
            CONST_CONTRATISTAS_PROYECTO ON CONST_ACREEDORES.CODACREEDOR = CONST_CONTRATISTAS_PROYECTO.CODACREEDOR FULL OUTER JOIN
            CONST_CUENTAS RIGHT OUTER JOIN
            CONST_CHEQUES LEFT OUTER JOIN
            CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO ON CONST_CUENTAS.CODCUENTA = CONST_CHEQUES.CODCUENTA ON 
            CONST_CONTRATISTAS_PROYECTO.NOCONTRATO = CONST_CHEQUES.NOCONTRATO
        WHERE (CONST_CHEQUES.NOCONTRATO = ${nocontrato})`;
            
    execute.Query(res, qry);

});

router.post("/eliminar", async (req, res) => {
    
    const { id } = req.body;

    let qry = '';
    qry = `DELETE FROM  CONST_CHEQUES WHERE ID=${id} `
        
    execute.Query(res, qry);

});

module.exports = router;