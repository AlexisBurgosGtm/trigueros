const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    let qry = '';

    qry = `SELECT CODCONTRATANTE AS CODIGO, DESCONTRATANTE AS DESCRIPCION
            FROM CONST_CONTRATANTES`

    execute.Query(res, qry);

});


router.post("/listadoproyectos", async (req, res) => {
    
    const {codcontratante} = req.body;

    let qry = '';

    qry = `SELECT IDPROYECTO AS CODIGO, PROYECTO AS DESCRIPCION, DIRECCION, FECHAINICIO, FECHAFIN, RECIBIDO, EJECUTADO, PRESUPUESTO, (PRESUPUESTO-EJECUTADO) AS SALDO
            FROM CONST_PROYECTOS
            WHERE (CODCONTRATANTE = ${codcontratante}) AND (FINALIZADO = 'NO')`

    execute.Query(res, qry);

});


module.exports = router;