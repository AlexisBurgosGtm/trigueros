const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/nuevochequecontratante", async (req, res) => {
    
    const {fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo} = req.body;

    let qry = '';

    qry = `INSERT INTO CONST_CHEQUES (FECHA,NOCONTRATO,CODACREEDOR,CODCUENTA,NUMERO,CANTIDAD,RECIBE,OBS,RUBRO,TIPOCHEQUE) 
        VALUES ('${fecha}',${nocontrato},${codacreedor},${codcuenta},'${numero}',${cantidad},'${recibe}','${obs}','${rubro}','${tipo}')`

        
    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {
    
    const {fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo} = req.body;

    let qry = '';

    qry = `INSERT INTO CONST_CHEQUES (FECHA,NOCONTRATO,CODACREEDOR,CODCUENTA,NUMERO,CANTIDAD,RECIBE,OBS,RUBRO,TIPOCHEQUE) 
        VALUES ('${fecha}',${nocontrato},${codacreedor},${codcuenta},'${numero}',${(cantidad*-1)},'${recibe}','${obs}','${rubro}','${tipo}')`

        
    execute.Query(res, qry);

});


router.post("/listadoproyecto", async (req, res) => {
    
    const {idproyecto} = req.body;

    let qry = '';

    qry  = `SELECT CONST_CHEQUES.ID, CONST_CHEQUES.FECHA, CONST_CHEQUES.NOCONTRATO, 
            CONST_CUENTAS.BANCO, CONST_CUENTAS.NUMERO AS NOCUENTA, CONST_CHEQUES.NUMERO AS NOCHEQUE, 
            CONST_CHEQUES.CANTIDAD AS IMPORTE, CONST_CHEQUES.RECIBE, CONST_CHEQUES.OBS, 
            CONST_CHEQUES.RUBRO, CONST_CONTRATISTAS_PROYECTO.ASIGNACION, CONST_ACREEDORES.DESACREEDOR, 
            CONST_ACREEDORES.TIPO, CONST_PROYECTOS.PROYECTO, CONST_CHEQUES.TIPOCHEQUE
                FROM CONST_ACREEDORES RIGHT OUTER JOIN
                    CONST_CONTRATISTAS_PROYECTO ON CONST_ACREEDORES.CODACREEDOR = CONST_CONTRATISTAS_PROYECTO.CODACREEDOR LEFT OUTER JOIN
                    CONST_PROYECTOS ON CONST_CONTRATISTAS_PROYECTO.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO RIGHT OUTER JOIN
                    CONST_CHEQUES LEFT OUTER JOIN
                    CONST_CUENTAS ON CONST_CHEQUES.CODCUENTA = CONST_CUENTAS.CODCUENTA ON CONST_CONTRATISTAS_PROYECTO.NOCONTRATO = CONST_CHEQUES.NOCONTRATO
                WHERE (CONST_CONTRATISTAS_PROYECTO.IDPROYECTO = ${idproyecto})`
        
        
    execute.Query(res, qry);

});

router.post("/eliminar", async (req, res) => {
    
    const { id } = req.body;

    let qry = '';
    qry = `DELETE FROM  CONST_CHEQUES WHERE ID=${id} `
        
    execute.Query(res, qry);

});

module.exports = router;