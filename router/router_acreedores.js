const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado_activos", async (req, res) => {
    
    const tipo = req.body.tipo;
    let qry = '';

    if(tipo=='TODOS'){
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION, 
        TIPO, ACTIVO, CONTACTO, TELEFONO, NIT, NOMBRE AS CHEQUE
        FROM CONST_ACREEDORES WHERE ACTIVO='SI'
        ORDER BY TIPO, DESACREEDOR`
    }else{
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION, ACTIVO, CONTACTO, TELEFONO, NIT, NOMBRE AS CHEQUE
        FROM CONST_ACREEDORES WHERE TIPO='${tipo}' AND ACTIVO='SI' ORDER BY DESACREEDOR`
    }
    

    execute.Query(res, qry);

});


router.post("/listado", async (req, res) => {
    
    const tipo = req.body.tipo;
    let qry = '';

    if(tipo=='TODOS'){
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION, TIPO, ACTIVO, CONTACTO, TELEFONO, NIT, NOMBRE AS CHEQUE
        FROM CONST_ACREEDORES
        ORDER BY TIPO, DESACREEDOR`
    }else{
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION, ACTIVO, CONTACTO, TELEFONO, NIT, NOMBRE AS CHEQUE
        FROM CONST_ACREEDORES WHERE TIPO='${tipo}' ORDER BY DESACREEDOR`
    }
    

    execute.Query(res, qry);

});


router.post("/insert", async (req, res) => {

    const {descripcion, tipo, contacto, telefono, nit, cheque} = req.body;

    let qry = `INSERT INTO CONST_ACREEDORES (DESACREEDOR, TIPO, ACTIVO, CONTACTO, TELEFONO, NIT, NOMBRE)
            VALUES ('${descripcion}','${tipo}','SI','${contacto}','${telefono}','${nit}','${cheque}')`

    execute.Query(res, qry);

});

router.post("/edit", async (req, res) => {

    const {codigo, descripcion, contacto, telefono, nit, cheque} = req.body;

    let qry = `UPDATE CONST_ACREEDORES 
            SET DESACREEDOR='${descripcion}', 
                CONTACTO='${contacto}', 
                TELEFONO='${telefono}',
                NIT='${nit}', NOMBRE='${cheque}'
                WHERE CODACREEDOR=${codigo} `

    execute.Query(res, qry);

});

router.post("/delete", async (req, res) => {

    const {codigo} = req.body;

    let qry = `DELETE FROM CONST_ACREEDORES 
                WHERE CODACREEDOR=${codigo} `

    execute.Query(res, qry);

});


router.post("/desactivar", async (req, res) => {

    const {codigo,activo} = req.body;

    let qry = `UPDATE CONST_ACREEDORES SET ACTIVO='${activo}'
                WHERE CODACREEDOR=${codigo} `

    execute.Query(res, qry);

});


module.exports = router;