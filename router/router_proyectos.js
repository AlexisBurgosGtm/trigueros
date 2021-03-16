const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.post("/listaproyectos", async (req, res) => {

    const { activo } = req.body;

    let qry = `SELECT IDPROYECTO, PROYECTO, DIRECCION, FECHAINICIO, FECHAFIN, CONTACTO, TELEFONO, PRIORIDAD, ISNULL(PRESUPUESTO,0) AS PRESUPUESTO, ISNULL(EJECUTADO,0) AS EJECUTADO, ISNULL(RECIBIDO,0) AS RECIBIDO
               FROM CONST_PROYECTOS
                WHERE FINALIZADO='${activo}' `;

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {

    const { proyecto, direccion, inicio, final, contacto, telefono, prioridad, presupuesto } = req.body;

    let qry = `INSERT INTO CONST_PROYECTOS (PROYECTO, DIRECCION, FECHAINICIO, FECHAFIN, CONTACTO, TELEFONO, PRIORIDAD, PRESUPUESTO, EJECUTADO, RECIBIDO, FINALIZADO)
                    VALUES ('${proyecto}', '${direccion}', '${inicio}', '${final}', '${contacto}', '${telefono}', '${prioridad}', ${presupuesto}, 0, 0, 'NO');`;

    execute.Query(res, qry);

});

router.post("/eliminar", async (req, res) => {

    const { codigo } = req.body;

    let qry = `DELETE FROM CONST_PROYECTOS WHERE IDPROYECTO=${codigo};`;

    execute.Query(res, qry);

});





module.exports = router;