const execute = require('./connection');
const express = require('express');
const router = express.Router();



router.post("/contratante", async (req, res) => {
    
    const {idproyecto} = req.body;

    let qry = '';

    qry = `SELECT CONST_PROYECTOS.CODCONTRATANTE, CONST_CONTRATANTES.DESCONTRATANTE
                FROM  CONST_PROYECTOS LEFT OUTER JOIN CONST_CONTRATANTES ON CONST_PROYECTOS.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE
                WHERE (CONST_PROYECTOS.IDPROYECTO = ${idproyecto})`;

    execute.Query(res, qry);

});


router.post("/subcontratos", async (req, res) => {

    const { idproyecto } = req.body;

    let qryx = `SELECT CONST_CONTRATISTAS_PROYECTO.NOCONTRATO, CONST_CONTRATISTAS_PROYECTO.IDPROYECTO, CONST_PROYECTOS.PROYECTO, CONST_CONTRATISTAS_PROYECTO.CODACREEDOR, 
    CONST_ACREEDORES.DESACREEDOR, CONST_CONTRATISTAS_PROYECTO.ASIGNACION, CONST_CONTRATISTAS_PROYECTO.FECHAENTREGA, CONST_CONTRATISTAS_PROYECTO.IMPORTE, 
    ISNULL(CONST_CONTRATISTAS_PROYECTO.ENTREGADO,0) AS ENTREGADO, ISNULL(CONST_CONTRATISTAS_PROYECTO.SALDO,0) AS SALDO
        FROM CONST_CONTRATISTAS_PROYECTO LEFT OUTER JOIN
    CONST_ACREEDORES ON CONST_CONTRATISTAS_PROYECTO.CODACREEDOR = CONST_ACREEDORES.CODACREEDOR LEFT OUTER JOIN
    CONST_PROYECTOS ON CONST_CONTRATISTAS_PROYECTO.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO
    WHERE CONST_CONTRATISTAS_PROYECTO.IDPROYECTO=${idproyecto}`;

    let qry = `SELECT  CONST_CONTRATISTAS_PROYECTO.NOCONTRATO, 
                CONST_CONTRATISTAS_PROYECTO.IDPROYECTO, 
                CONST_PROYECTOS.PROYECTO, 
                CONST_CONTRATISTAS_PROYECTO.CODACREEDOR, 
                CONST_ACREEDORES.DESACREEDOR, 
                CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 
                CONST_CONTRATISTAS_PROYECTO.FECHAENTREGA, 
                CONST_CONTRATISTAS_PROYECTO.IMPORTE, 
                (ISNULL((SELECT SUM(CANTIDAD) FROM CONST_CHEQUES WHERE TIPOCHEQUE='SUBCONTRATISTA' AND NOCONTRATO= CONST_CONTRATISTAS_PROYECTO.NOCONTRATO),0) * -1) AS ENTREGADO,
                ISNULL(CONST_CONTRATISTAS_PROYECTO.SALDO,0) AS SALDO,
                CONST_CONTRATISTAS_PROYECTO.FECHA
                FROM CONST_CONTRATISTAS_PROYECTO LEFT OUTER JOIN
            CONST_ACREEDORES ON CONST_CONTRATISTAS_PROYECTO.CODACREEDOR = CONST_ACREEDORES.CODACREEDOR LEFT OUTER JOIN
            CONST_PROYECTOS ON CONST_CONTRATISTAS_PROYECTO.IDPROYECTO = CONST_PROYECTOS.IDPROYECTO
            WHERE CONST_CONTRATISTAS_PROYECTO.IDPROYECTO=${idproyecto}`;

    execute.Query(res, qry);

});

router.post("/nuevocontrato", async (req, res) => {

    const { idproyecto, idsubcontratista, fechainicio,fecha, asignacion, importe } = req.body;

    let qry = `INSERT INTO CONST_CONTRATISTAS_PROYECTO (IDPROYECTO,CODACREEDOR,ASIGNACION, FECHA,FECHAENTREGA,IMPORTE,ENTREGADO,SALDO) 
    values (${idproyecto},${idsubcontratista},'${asignacion}','${fechainicio}', '${fecha}',${importe},0,${importe})`;

    execute.Query(res, qry);

});

router.post("/editarcontrato", async (req, res) => {

    const { nocontrato, idsubcontratista, fechainicio,fecha, asignacion, importe } = req.body;
    let qry = `
        UPDATE CONST_CONTRATISTAS_PROYECTO SET CODACREEDOR=${idsubcontratista}, 
                        ASIGNACION='${asignacion}',FECHA='${fechainicio}',FECHAENTREGA='${fecha}',IMPORTE=${importe}
        WHERE NOCONTRATO=${nocontrato};
    `
    
    execute.Query(res, qry);

});

router.post("/eliminarcontrato", async (req, res) => {

    const { nocontrato } = req.body;
    let qry = `DELETE FROM CONST_CONTRATISTAS_PROYECTO WHERE NOCONTRATO=${nocontrato};
               DELETE FROM CONST_CHEQUES WHERE NOCONTRATO=${nocontrato};
                `
    
    execute.Query(res, qry);

});


router.post("/subcontratistas", async (req, res) => {

    const { idproyecto } = req.body;

    let qry2 = `SELECT CONST_CONTRATISTAS_PROYECTO.NOCONTRATO, 
                CONST_CONTRATISTAS_PROYECTO.CODACREEDOR, CONST_ACREEDORES.DESACREEDOR, CONST_CONTRATISTAS_PROYECTO.ASIGNACION, CONST_CONTRATISTAS_PROYECTO.FECHAENTREGA, 
                CONST_CONTRATISTAS_PROYECTO.IMPORTE, CONST_CONTRATISTAS_PROYECTO.ENTREGADO, CONST_CONTRATISTAS_PROYECTO.SALDO
        FROM CONST_CONTRATISTAS_PROYECTO INNER JOIN
            CONST_ACREEDORES ON CONST_CONTRATISTAS_PROYECTO.CODACREEDOR = CONST_ACREEDORES.CODACREEDOR
        WHERE (CONST_CONTRATISTAS_PROYECTO.IDPROYECTO = ${idproyecto})`;

    let qry = `SELECT CONST_CONTRATISTAS_PROYECTO.NOCONTRATO, 
                CONST_CONTRATISTAS_PROYECTO.CODACREEDOR, 
                CONST_ACREEDORES.DESACREEDOR, 
                CONST_CONTRATISTAS_PROYECTO.ASIGNACION, 
                isnull(CONST_CONTRATISTAS_PROYECTO.FECHA,'00/00/00') AS FECHA,
                CONST_CONTRATISTAS_PROYECTO.FECHAENTREGA, 
                CONST_CONTRATISTAS_PROYECTO.IMPORTE, 
                (ISNULL((SELECT SUM(CANTIDAD) FROM CONST_CHEQUES WHERE TIPOCHEQUE='SUBCONTRATISTA' AND NOCONTRATO= CONST_CONTRATISTAS_PROYECTO.NOCONTRATO),0) * -1) AS ENTREGADO, 
                CONST_CONTRATISTAS_PROYECTO.SALDO
            FROM CONST_CONTRATISTAS_PROYECTO INNER JOIN
            CONST_ACREEDORES ON CONST_CONTRATISTAS_PROYECTO.CODACREEDOR = CONST_ACREEDORES.CODACREEDOR
            WHERE (CONST_CONTRATISTAS_PROYECTO.IDPROYECTO = ${idproyecto})`

    execute.Query(res, qry);

});


router.post("/listaproyectos", async (req, res) => {

    const { activo, mes, anio } = req.body;

    let qryactivos = `SELECT CONST_PROYECTOS.IDPROYECTO, 
    CONST_PROYECTOS.PROYECTO, 
    CONST_PROYECTOS.DIRECCION, 
    CONST_PROYECTOS.FECHAINICIO, 
    CONST_PROYECTOS.FECHAFIN, 
    CONST_PROYECTOS.CONTACTO, 
    CONST_PROYECTOS.TELEFONO, 
    CONST_PROYECTOS.PRESUPUESTO, 
    isnull((SELECT SUM(CANTIDAD) FROM CONST_CHEQUES WHERE TIPOCHEQUE='CONTRATANTE' AND IDPROYECTO= CONST_PROYECTOS.IDPROYECTO),0) AS RECIBIDO,
    isnull((SELECT SUM(CANTIDAD) FROM CONST_CHEQUES WHERE TIPOCHEQUE<>'CONTRATANTE' AND IDPROYECTO= CONST_PROYECTOS.IDPROYECTO),0) * -1 AS EJECUTADO, 
    CONST_PROYECTOS.CODCONTRATANTE, 
    CONST_CONTRATANTES.DESCONTRATANTE, ISNULL(CONST_PROYECTOS.USUARIO,'--') AS USUARIO
        FROM CONST_PROYECTOS LEFT OUTER JOIN
            CONST_CONTRATANTES ON CONST_PROYECTOS.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE
            WHERE (CONST_PROYECTOS.FINALIZADO = 'NO') `

    let qryfinalizados = `SELECT CONST_PROYECTOS.IDPROYECTO, 
    CONST_PROYECTOS.PROYECTO, 
    CONST_PROYECTOS.DIRECCION, 
    CONST_PROYECTOS.FECHAINICIO, 
    CONST_PROYECTOS.FECHAFIN, 
    CONST_PROYECTOS.CONTACTO, 
    CONST_PROYECTOS.TELEFONO, 
    CONST_PROYECTOS.PRESUPUESTO, 
    isnull((SELECT SUM(CANTIDAD) FROM CONST_CHEQUES WHERE TIPOCHEQUE='CONTRATANTE' AND IDPROYECTO= CONST_PROYECTOS.IDPROYECTO),0) AS RECIBIDO,
    isnull((SELECT SUM(CANTIDAD) FROM CONST_CHEQUES WHERE TIPOCHEQUE<>'CONTRATANTE' AND IDPROYECTO= CONST_PROYECTOS.IDPROYECTO),0) * -1 AS EJECUTADO, 
    CONST_PROYECTOS.CODCONTRATANTE, 
    CONST_CONTRATANTES.DESCONTRATANTE, ISNULL(CONST_PROYECTOS.USUARIO,'--') AS USUARIO
        FROM CONST_PROYECTOS LEFT OUTER JOIN
            CONST_CONTRATANTES ON CONST_PROYECTOS.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE
            WHERE (CONST_PROYECTOS.FINALIZADO = 'SI') AND
            (YEAR(CONST_PROYECTOS.FECHAINICIO)=${anio}) AND 
            (MONTH(CONST_PROYECTOS.FECHAINICIO)=${mes})`        

            if(activo=='NO'){
                execute.Query(res, qryactivos);
            }else{
                execute.Query(res, qryfinalizados);
            }

});

router.post("/listaproyectoscombo", async (req, res) => {

    const { activo } = req.body;

    let qry = `SELECT CONST_PROYECTOS.IDPROYECTO, CONST_PROYECTOS.PROYECTO, CONST_PROYECTOS.DIRECCION, CONST_PROYECTOS.FECHAINICIO, CONST_PROYECTOS.FECHAFIN, CONST_PROYECTOS.CONTACTO, 
                    CONST_PROYECTOS.TELEFONO, CONST_PROYECTOS.PRESUPUESTO, ISNULL(CONST_PROYECTOS.RECIBIDO,0) AS RECIBIDO, ISNULL(CONST_PROYECTOS.EJECUTADO,0) AS EJECUTADO, CONST_PROYECTOS.CODCONTRATANTE, 
                    CONST_CONTRATANTES.DESCONTRATANTE
            FROM CONST_PROYECTOS LEFT OUTER JOIN
                CONST_CONTRATANTES ON CONST_PROYECTOS.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE
                WHERE (CONST_PROYECTOS.FINALIZADO = '${activo}') `;

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {

    const { proyecto, direccion, inicio, final, contacto, telefono, contratante, presupuesto, usuario } = req.body;

    let qry = `INSERT INTO CONST_PROYECTOS (PROYECTO, DIRECCION, FECHAINICIO, FECHAFIN, CONTACTO, TELEFONO, CODCONTRATANTE, PRESUPUESTO, EJECUTADO, RECIBIDO, FINALIZADO,USUARIO)
                    VALUES ('${proyecto}', '${direccion}', '${inicio}', '${final}', '${contacto}', '${telefono}', ${contratante}, ${presupuesto}, 0, 0, 'NO', '${usuario}');`;

    execute.Query(res, qry);

});

router.post("/eliminar", async (req, res) => {

    const { codigo } = req.body;

    let qry = `DELETE FROM CONST_PROYECTOS WHERE IDPROYECTO=${codigo};
               DELETE FROM CONST_CONTRATISTAS_PROYECTO WHERE IDPROYECTO=${codigo};
               DELETE FROM CONST_CHEQUES WHERE IDPROYECTO=${codigo};
               DELETE FROM CONST_PROYECTOS_PRODUCTOS WHERE IDPROYECTO=${codigo};`;

    execute.Query(res, qry);

});

router.post("/finalizar", async (req, res) => {

    const { codigo } = req.body;

    let qry = `UPDATE CONST_PROYECTOS 
                SET FINALIZADO='SI'
                WHERE IDPROYECTO=${codigo};`;

    execute.Query(res, qry);

});


router.post("/listarubros", async (req, res) => {


    let qry = `SELECT ID, RUBRO FROM CONST_RUBROS`;

    execute.Query(res, qry);

});

router.post("/insertrubro", async (req, res) => {

    const {descripcion} = req.body;

    let qry = `INSERT INTO CONST_RUBROS (RUBRO ) VALUES ('${descripcion}')`;

    execute.Query(res, qry);

});

router.post("/updaterubro", async (req, res) => {

    const {id,descripcion} = req.body;

    let qry = `UPDATE CONST_RUBROS SET RUBRO='${descripcion}'
                WHERE ID=${id}`;

    execute.Query(res, qry);

});

router.post("/deleterubro", async (req, res) => {

    const {id} = req.body;

    let qry = `DELETE FROM CONST_RUBROS
                WHERE ID=${id}`;

    execute.Query(res, qry);

});


module.exports = router;