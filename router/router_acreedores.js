const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async (req, res) => {
    
    const tipo = req.body.tipo;
    let qry = '';

    if(tipo=='TODOS'){
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION, TIPO
        FROM CONST_ACREEDORES
        ORDER BY TIPO, CODACREEDOR`
    }else{
        qry = `SELECT CODACREEDOR AS CODIGO, DESACREEDOR AS DESCRIPCION
        FROM CONST_ACREEDORES WHERE TIPO='${tipo}' `
    }
    

    execute.Query(res, qry);

});


router.post("/insert", async (req, res) => {

    const {descripcion, tipo} = req.body;

    let qry = `INSERT INTO CONST_ACREEDORES (DESACREEDOR, TIPO )
            VALUES ('${descripcion}','${tipo}')`

    execute.Query(res, qry);

});

router.post("/edit", async (req, res) => {

    const {codigo, descripcion} = req.body;

    let qry = `UPDATE CONST_ACREEDORES 
            SET DESACREEDOR='${descripcion}'
                WHERE CODACREEDOR=${codigo} `

    execute.Query(res, qry);

});

router.post("/delete", async (req, res) => {

    const {codigo} = req.body;

    let qry = `DELETE FROM CONST_ACREEDORES 
                WHERE CODACREEDOR=${codigo} `

    execute.Query(res, qry);

});

module.exports = router;