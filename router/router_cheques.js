const execute = require('./connection');
const express = require('express');
const router = express.Router();



router.post("/listado_cuenta", async (req, res) => {
    
    const {idcuenta, finicial, ffinal} = req.body;


    let qry = `SELECT CONST_CHEQUES.ID, 
                CONST_CHEQUES.FECHA, 
                CONST_CHEQUES.NOCONTRATO, 
                ISNULL(CONST_CUENTAS.BANCO, 
                CONST_CHEQUES.BANCO) AS BANCO, 
                ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
                CONST_CHEQUES.NUMERO AS NOCHEQUE, 
                CONST_CHEQUES.CANTIDAD AS IMPORTE, 
                CONST_CHEQUES.RECIBE, 
                CONST_CHEQUES.OBS, 
                CONST_CHEQUES.RUBRO, 
                ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, 
                CASE WHEN CONST_CHEQUES.TIPOCHEQUE='SUBCONTRATISTA' THEN CONST_ACREEDORES.DESACREEDOR ELSE ISNULL(CONST_ACREEDORES_1.DESACREEDOR, CONST_CONTRATANTES.DESCONTRATANTE) END AS DESACREEDOR,  
                ISNULL(CONST_ACREEDORES_1.TIPO, 'CONTRATANTE') AS TIPO, 
                CONST_PROYECTOS.PROYECTO, 
                CONST_CHEQUES.TIPOCHEQUE, 
                ISNULL(CONST_CHEQUES.USUARIO, '--') AS USUARIO, 
                ISNULL(CONST_CHEQUES.CONCEPTO,'--') AS CONCEPTO,
                ISNULL(CONST_CHEQUES.NOFACTURA,'SN') AS NOFACTURA
        FROM CONST_ACREEDORES INNER JOIN
             CONST_CONTRATISTAS_PROYECTO ON CONST_ACREEDORES.CODACREEDOR = CONST_CONTRATISTAS_PROYECTO.CODACREEDOR RIGHT OUTER JOIN
             CONST_ACREEDORES AS CONST_ACREEDORES_1 RIGHT OUTER JOIN
             CONST_CHEQUES LEFT OUTER JOIN
             CONST_CONTRATANTES ON CONST_CHEQUES.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE ON CONST_ACREEDORES_1.CODACREEDOR = CONST_CHEQUES.CODACREEDOR LEFT OUTER JOIN
             CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO LEFT OUTER JOIN
             CONST_CUENTAS ON CONST_CHEQUES.CODCUENTA = CONST_CUENTAS.CODCUENTA ON CONST_CONTRATISTAS_PROYECTO.NOCONTRATO = CONST_CHEQUES.NOCONTRATO
        WHERE (CONST_CHEQUES.CODCUENTA = ${idcuenta}) AND
        CONST_CHEQUES.FECHA BETWEEN '${finicial}' AND '${ffinal}'
        ORDER BY CONST_CHEQUES.FECHA`
    
        execute.Query(res, qry);

});


router.post("/verificarcheque", async (req, res) => {

    const {codcuenta,numero} = req.body;
    
    let qry ='';

    qry = `SELECT NUMERO FROM CONST_CHEQUES
        WHERE CODCUENTA=${codcuenta} AND NUMERO='${numero}' ` 

    execute.Query(res, qry);

});

router.post("/nuevochequecontratante", async (req, res) => {

    const {idproyecto,fecha,codcontratante,banco,numero,cantidad,recibe,obs,tipo,concepto,usuario} = req.body;

    let qry = '';

    qry = `INSERT INTO CONST_CHEQUES (IDPROYECTO,FECHA,NOCONTRATO,CODACREEDOR,CODCONTRATANTE,CODCUENTA,BANCO,NUMERO,CANTIDAD,RECIBE,OBS,RUBRO,TIPOCHEQUE,CONCEPTO,USUARIO) 
        VALUES (${idproyecto},'${fecha}',0,0,${codcontratante},0,'${banco}','${numero}',${cantidad},'${recibe}','${obs}','OTROS','${tipo}','${concepto}','${usuario}')`

    console.log(qry);

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {
    
    const {idproyecto,fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo,concepto,usuario,nofactura} = req.body;

    let qry = '';

    qry = ` 
        INSERT INTO CONST_CHEQUES (
        IDPROYECTO,FECHA,NOCONTRATO,
        CODACREEDOR,CODCONTRATANTE,CODCUENTA,
        BANCO,NUMERO,CANTIDAD,
        RECIBE,OBS,RUBRO,
        TIPOCHEQUE,CONCEPTO,USUARIO,NOFACTURA) 
        VALUES 
        (${idproyecto},'${fecha}',${nocontrato},
        ${codacreedor},0,${codcuenta},
        'SN','${numero}', ${(cantidad*-1)},
        '${recibe}','${obs}','${rubro}',
        '${tipo}','${concepto}','${usuario}','${nofactura}')`

    execute.Query(res, qry);

});

router.post("/nuevo_eventual", async (req, res) => {
    
    const {idproyecto,fecha,nocontrato,codacreedor,desacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo,concepto,usuario,nofactura} = req.body;

    let qry = '';

    qry = ` 
        INSERT INTO CONST_CHEQUES (
        IDPROYECTO,FECHA,NOCONTRATO,
        CODACREEDOR,CODCONTRATANTE,CODCUENTA,
        BANCO,NUMERO,CANTIDAD,
        RECIBE,OBS,RUBRO,
        TIPOCHEQUE,CONCEPTO,USUARIO,NOFACTURA,DESACREEDOR) 
        VALUES 
        (${idproyecto},'${fecha}',${nocontrato},
        ${codacreedor},0,${codcuenta},
        'SN','${numero}', ${(cantidad*-1)},
        '${recibe}','${obs}','${rubro}',
        '${tipo}','${concepto}','${usuario}','${nofactura}','${desacreedor}')`

    execute.Query(res, qry);

});

router.post("/BACKUP_listadoproyecto", async (req, res) => {
    
    const {idproyecto} = req.body;

    let qryX = '';
        
    qryX = `SELECT        CONST_CHEQUES.ID, CONST_CHEQUES.FECHA, CONST_CHEQUES.NOCONTRATO, ISNULL(CONST_CUENTAS.BANCO, CONST_CHEQUES.BANCO) AS BANCO, ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
    CONST_CHEQUES.NUMERO AS NOCHEQUE, CONST_CHEQUES.CANTIDAD AS IMPORTE, CONST_CHEQUES.RECIBE, CONST_CHEQUES.OBS, CONST_CHEQUES.RUBRO, 
    ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, ISNULL(CONST_ACREEDORES.DESACREEDOR, CONST_CONTRATANTES.DESCONTRATANTE) AS DESACREEDOR, 
    ISNULL(CONST_ACREEDORES.TIPO, 'CONTRATANTE') AS TIPO, CONST_PROYECTOS.PROYECTO, CONST_CHEQUES.TIPOCHEQUE, ISNULL(CONST_CHEQUES.USUARIO, '--') AS USUARIO, 
    CONST_CHEQUES.CONCEPTO
FROM            CONST_ACREEDORES RIGHT OUTER JOIN
    CONST_CHEQUES LEFT OUTER JOIN
    CONST_CONTRATANTES ON CONST_CHEQUES.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE ON CONST_ACREEDORES.CODACREEDOR = CONST_CHEQUES.CODACREEDOR LEFT OUTER JOIN
    CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO LEFT OUTER JOIN
    CONST_CUENTAS ON CONST_CHEQUES.CODCUENTA = CONST_CUENTAS.CODCUENTA LEFT OUTER JOIN
    CONST_CONTRATISTAS_PROYECTO ON CONST_CHEQUES.NOCONTRATO = CONST_CONTRATISTAS_PROYECTO.NOCONTRATO
WHERE (CONST_CHEQUES.IDPROYECTO = ${idproyecto})`;
        

    let qry = `SELECT CONST_CHEQUES.ID, 
                CONST_CHEQUES.FECHA, 
                CONST_CHEQUES.NOCONTRATO, 
                ISNULL(CONST_CUENTAS.BANCO, 
                CONST_CHEQUES.BANCO) AS BANCO, 
                ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
                CONST_CHEQUES.NUMERO AS NOCHEQUE, 
                CONST_CHEQUES.CANTIDAD AS IMPORTE, 
                CONST_CHEQUES.RECIBE, 
                CONST_CHEQUES.OBS, 
                CONST_CHEQUES.RUBRO, 
                ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, 
                CASE WHEN CONST_CHEQUES.TIPOCHEQUE='SUBCONTRATISTA' THEN CONST_ACREEDORES.DESACREEDOR ELSE ISNULL(CONST_ACREEDORES_1.DESACREEDOR, CONST_CONTRATANTES.DESCONTRATANTE) END AS DESACREEDOR,  
                ISNULL(CONST_ACREEDORES_1.TIPO, 'CONTRATANTE') AS TIPO, 
                CONST_PROYECTOS.PROYECTO, 
                CONST_CHEQUES.TIPOCHEQUE, 
                ISNULL(CONST_CHEQUES.USUARIO, '--') AS USUARIO, 
                ISNULL(CONST_CHEQUES.CONCEPTO,'--') AS CONCEPTO,
                ISNULL(CONST_CHEQUES.NOFACTURA,'SN') AS NOFACTURA
        FROM CONST_ACREEDORES INNER JOIN
             CONST_CONTRATISTAS_PROYECTO ON CONST_ACREEDORES.CODACREEDOR = CONST_CONTRATISTAS_PROYECTO.CODACREEDOR RIGHT OUTER JOIN
             CONST_ACREEDORES AS CONST_ACREEDORES_1 RIGHT OUTER JOIN
             CONST_CHEQUES LEFT OUTER JOIN
             CONST_CONTRATANTES ON CONST_CHEQUES.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE ON CONST_ACREEDORES_1.CODACREEDOR = CONST_CHEQUES.CODACREEDOR LEFT OUTER JOIN
             CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO LEFT OUTER JOIN
             CONST_CUENTAS ON CONST_CHEQUES.CODCUENTA = CONST_CUENTAS.CODCUENTA ON CONST_CONTRATISTAS_PROYECTO.NOCONTRATO = CONST_CHEQUES.NOCONTRATO
        WHERE (CONST_CHEQUES.IDPROYECTO = ${idproyecto})`
    
        execute.Query(res, qry);

});

router.post("/listadoproyecto", async (req, res) => {
    
    const {idproyecto} = req.body;

    let qry = `SELECT CONST_CHEQUES.ID, 
                    CONST_CHEQUES.FECHA, 
                    CONST_CHEQUES.NOCONTRATO, 
                    ISNULL(CONST_CUENTAS.BANCO, 
                    CONST_CHEQUES.BANCO) AS BANCO, 
                    ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
                    CONST_CHEQUES.NUMERO AS NOCHEQUE, 
                    CONST_CHEQUES.CANTIDAD AS IMPORTE, 
                    CONST_CHEQUES.RECIBE, 
                    CONST_CHEQUES.OBS, 
                    CONST_CHEQUES.RUBRO, 
                    ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, 
                    ISNULL(CONST_CHEQUES.DESACREEDOR,CASE WHEN CONST_CHEQUES.TIPOCHEQUE='SUBCONTRATISTA' THEN CONST_ACREEDORES.DESACREEDOR ELSE ISNULL(CONST_ACREEDORES_1.DESACREEDOR, CONST_CONTRATANTES.DESCONTRATANTE) END) AS DESACREEDOR,  
                    ISNULL(CONST_ACREEDORES_1.TIPO, 'CONTRATANTE') AS TIPO, 
                    CONST_PROYECTOS.PROYECTO, 
                    CONST_CHEQUES.TIPOCHEQUE, 
                    ISNULL(CONST_CHEQUES.USUARIO, '--') AS USUARIO, 
                    ISNULL(CONST_CHEQUES.CONCEPTO,'--') AS CONCEPTO,
                    ISNULL(CONST_CHEQUES.NOFACTURA,'SN') AS NOFACTURA
        FROM CONST_ACREEDORES INNER JOIN
             CONST_CONTRATISTAS_PROYECTO ON CONST_ACREEDORES.CODACREEDOR = CONST_CONTRATISTAS_PROYECTO.CODACREEDOR RIGHT OUTER JOIN
             CONST_ACREEDORES AS CONST_ACREEDORES_1 RIGHT OUTER JOIN
             CONST_CHEQUES LEFT OUTER JOIN
             CONST_CONTRATANTES ON CONST_CHEQUES.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE ON CONST_ACREEDORES_1.CODACREEDOR = CONST_CHEQUES.CODACREEDOR LEFT OUTER JOIN
             CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO LEFT OUTER JOIN
             CONST_CUENTAS ON CONST_CHEQUES.CODCUENTA = CONST_CUENTAS.CODCUENTA ON CONST_CONTRATISTAS_PROYECTO.NOCONTRATO = CONST_CHEQUES.NOCONTRATO
        WHERE (CONST_CHEQUES.IDPROYECTO = ${idproyecto})`
    
        execute.Query(res, qry);

});

router.post("/listadoproyectocaja", async (req, res) => {
    
    const {idproyecto} = req.body;

    let qry = '';
        
    qry = `SELECT  CONST_CAJA_MOVIMIENTOS.NOCORTE, 
                        CONST_CAJA_MOVIMIENTOS.FECHA, 
                        CONST_PROYECTOS.PROYECTO, 
                        CONST_CAJA_MOVIMIENTOS.ACREEDOR, 
                        CONST_CAJA_MOVIMIENTOS.DESCRIPCION, 
                        CONST_CAJA_MOVIMIENTOS.RUBRO, 
                        CONST_CAJA_MOVIMIENTOS.NOFACTURA, 
                        CONST_CAJA_MOVIMIENTOS.IMPORTE, 
                        CONST_CAJA_MOVIMIENTOS.USUARIO
                FROM CONST_CAJA_MOVIMIENTOS LEFT OUTER JOIN
                    CONST_PROYECTOS ON CONST_CAJA_MOVIMIENTOS.PROYECTO = CONST_PROYECTOS.IDPROYECTO
                WHERE (CONST_CAJA_MOVIMIENTOS.PROYECTO = ${idproyecto}) `;
            
    execute.Query(res, qry);

});

router.post("/listadoproyecto_rubros", async (req, res) => {
    
    const {idproyecto} = req.body;

    let qry = '';
        
    qry = `SELECT        RUBRO, SUM(CANTIDAD) AS IMPORTE
    FROM            CONST_CHEQUES
    WHERE        (IDPROYECTO = ${idproyecto}) AND (TIPOCHEQUE <> 'CONTRATANTE')
    GROUP BY RUBRO
    ORDER BY RUBRO`;
            
    execute.Query(res, qry);

});

router.post("/listadoproyecto_rubro_detalle", async (req, res) => {
    
    const {idproyecto,rubro} = req.body;

    let qry = '';
        
    qry = `SELECT CONST_CHEQUES.FECHA, CONST_CHEQUES.IDPROYECTO, CONST_PROYECTOS.PROYECTO, CONST_CHEQUES.CODACREEDOR, CONST_ACREEDORES.DESACREEDOR, CONST_CHEQUES.TIPOCHEQUE, 
    CONST_CHEQUES.CODCUENTA, CONST_CUENTAS.DESCRIPCION, CONST_CUENTAS.BANCO, CONST_CUENTAS.NUMERO, CONST_CHEQUES.NUMERO AS NOCHEQUE, CONST_CHEQUES.CANTIDAD, 
    CONST_CHEQUES.RECIBE, CONST_CHEQUES.OBS, CONST_CHEQUES.RUBRO, CONST_CHEQUES.CONCEPTO
FROM            CONST_CHEQUES LEFT OUTER JOIN
    CONST_CUENTAS ON CONST_CHEQUES.CODCUENTA = CONST_CUENTAS.CODCUENTA LEFT OUTER JOIN
    CONST_PROYECTOS ON CONST_CHEQUES.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO LEFT OUTER JOIN
    CONST_ACREEDORES ON CONST_CHEQUES.CODACREEDOR = CONST_ACREEDORES.CODACREEDOR
WHERE        (CONST_CHEQUES.IDPROYECTO = ${idproyecto}) AND (CONST_CHEQUES.RUBRO = '${rubro}') AND (CONST_CHEQUES.TIPOCHEQUE <> 'CONTRATANTE')
`;
            
    execute.Query(res, qry);

});


router.post("/listadocontrato", async (req, res) => {
    
    const {nocontrato} = req.body;

    let qry = '';
        
    qry = `SELECT CONST_CHEQUES.ID, CONST_CHEQUES.FECHA, CONST_CHEQUES.NOCONTRATO, ISNULL(CONST_CUENTAS.BANCO, CONST_CHEQUES.BANCO) AS BANCO, ISNULL(CONST_CUENTAS.NUMERO, 0) AS NOCUENTA, 
            CONST_CHEQUES.NUMERO AS NOCHEQUE, (isnull(CONST_CHEQUES.CANTIDAD,0)  * -1) AS IMPORTE, CONST_CHEQUES.RECIBE, CONST_CHEQUES.OBS, CONST_CHEQUES.RUBRO, 
            ISNULL(CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 'SN') AS ASIGNACION, ISNULL(CONST_ACREEDORES.DESACREEDOR, 'A FAVOR') AS DESACREEDOR, ISNULL(CONST_ACREEDORES.TIPO, 'CONTRATANTE') AS TIPO, 
            CONST_PROYECTOS.PROYECTO, CONST_CHEQUES.TIPOCHEQUE, ISNULL(CONST_CHEQUES.USUARIO,'--') AS USUARIO
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