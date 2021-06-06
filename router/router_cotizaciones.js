const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.post("/insertproducto", async (req, res) => {
    
    const {codigo,descripcion,medida} = req.body;

    let qry = `INSERT INTO CONST_PRODUCTOS (CODPROD,DESPROD,MEDIDA) 
        VALUES ('${codigo}','${descripcion}','${medida}'); `

        execute.Query(res, qry);

});

router.post("/listadoproductos", async (req, res) => {
    
    
    let qry = `SELECT  IDPROD AS ID, CODPROD, DESPROD, MEDIDA FROM CONST_PRODUCTOS`

        execute.Query(res, qry);

});

router.post("/deleteprod", async (req, res) => {
    
    const {id} = req.body;

    let qry = `DELETE FROM CONST_PRODUCTOS IDPROD=${id}`

        execute.Query(res, qry);

});

router.post("/insertcotiz", async (req, res) => {
    
    const {proveedor,producto,precio,fecha,usuario} = req.body;

    let qry = `INSERT INTO CONST_PRODUCTOS_COTIZACION (CODPROVEEDOR,CODPROD,PRECIO,FECHA,USUARIO) 
        VALUES (${proveedor},'${producto}',${precio},'${fecha}','${usuario}'); `

    execute.Query(res, qry);

});


router.post("/delete", async (req, res) => {
    
    const {id} = req.body;

    let qry = `DELETE FROM CONST_PRODUCTOS_COTIZACION WHERE ID=${id};`
    execute.Query(res, qry);

});

router.post("/listado", async (req, res) => {
    let qry = ``
    execute.Query(res, qry);
});

module.exports = router;