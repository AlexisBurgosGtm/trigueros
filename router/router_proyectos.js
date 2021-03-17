const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.post("/listaproyectos", async (req, res) => {

    const { activo } = req.body;

    let qry = `SELECT CONST_PROYECTOS.IDPROYECTO, CONST_PROYECTOS.PROYECTO, CONST_PROYECTOS.DIRECCION, CONST_PROYECTOS.FECHAINICIO, CONST_PROYECTOS.FECHAFIN, CONST_PROYECTOS.CONTACTO, 
                    CONST_PROYECTOS.TELEFONO, CONST_PROYECTOS.PRESUPUESTO, ISNULL(CONST_PROYECTOS.RECIBIDO,0) AS RECIBIDO, ISNULL(CONST_PROYECTOS.EJECUTADO,0) AS EJECUTADO, CONST_PROYECTOS.CODCONTRATANTE, 
                    CONST_CONTRATANTES.DESCONTRATANTE
            FROM CONST_PROYECTOS LEFT OUTER JOIN
                CONST_CONTRATANTES ON CONST_PROYECTOS.CODCONTRATANTE = CONST_CONTRATANTES.CODCONTRATANTE
                WHERE (CONST_PROYECTOS.FINALIZADO = '${activo}')`;

    execute.Query(res, qry);

});


router.post("/nuevo", async (req, res) => {

    const { proyecto, direccion, inicio, final, contacto, telefono, contratante, presupuesto } = req.body;

    let qry = `INSERT INTO CONST_PROYECTOS (PROYECTO, DIRECCION, FECHAINICIO, FECHAFIN, CONTACTO, TELEFONO, CODCONTRATANTE, PRESUPUESTO, EJECUTADO, RECIBIDO, FINALIZADO)
                    VALUES ('${proyecto}', '${direccion}', '${inicio}', '${final}', '${contacto}', '${telefono}', ${contratante}, ${presupuesto}, 0, 0, 'NO');`;

    execute.Query(res, qry);

});

router.post("/eliminar", async (req, res) => {

    const { codigo } = req.body;

    let qry = `DELETE FROM CONST_PROYECTOS WHERE IDPROYECTO=${codigo};`;

    execute.Query(res, qry);

});





module.exports = router;