const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/eliminar", async (req, res) => {
    
    const {codcontratante} = req.body;

    let qry = '';

    qry = `DELETE FROM CONST_CONTRATANTES
            WHERE CODCONTRATANTE=${codcontratante}`

    execute.Query(res, qry);

});

router.post("/editar", async (req, res) => {
    
    const {codigo,descripcion,telefono} = req.body;

    let qry = '';

    qry = `UPDATE CONST_CONTRATANTES
            SET DESCONTRATANTE= '${descripcion}',
                TELEFONO='${telefono}'
            WHERE CODCONTRATANTE=${codigo}`

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {
    
    const {descripcion,telefono} = req.body;

    let qry = '';

    qry = `INSERT INTO CONST_CONTRATANTES (DESCONTRATANTE,TELEFONO,ACTIVO)
            VALUES ('${descripcion}','${telefono}','SI') `

    execute.Query(res, qry);

});


router.post("/listado", async (req, res) => {
    
    let qry = '';

    qry = `SELECT CODCONTRATANTE AS CODIGO, DESCONTRATANTE AS DESCRIPCION, TELEFONO
            FROM CONST_CONTRATANTES ORDER BY DESCONTRATANTE`

    execute.Query(res, qry);

});


router.post("/listadoproyectos", async (req, res) => {
    
    const {codcontratante} = req.body;

    let qry = '';

    qry = `SELECT IDPROYECTO AS CODIGO, PROYECTO AS DESCRIPCION, DIRECCION, FECHAINICIO, FECHAFIN, RECIBIDO, EJECUTADO, PRESUPUESTO, (PRESUPUESTO-EJECUTADO) AS SALDO
            FROM CONST_PROYECTOS
            WHERE (CODCONTRATANTE = ${codcontratante}) AND (FINALIZADO = 'NO') 
            ORDER BY PROYECTO`

    execute.Query(res, qry);

});


module.exports = router;