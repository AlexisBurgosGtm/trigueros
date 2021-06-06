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

    let qry = `INSERT INTO CONST_PRODUCTOS_COTIZACION (CODPROVEEDOR,IDPROD,PRECIO,FECHA,USUARIO) 
        VALUES (${proveedor},'${producto}',${precio},'${fecha}','${usuario}'); `

    execute.Query(res, qry);

});


router.post("/deletecotiz", async (req, res) => {
    
    const {id} = req.body;

    let qry = `DELETE FROM CONST_PRODUCTOS_COTIZACION WHERE ID=${id};`
    execute.Query(res, qry);

});

router.post("/historialproducto", async (req, res) => {

    const {producto} = req.body;

    let qry = `
            SELECT CONST_PRODUCTOS_COTIZACION.ID, CONST_PROVEEDORES.PROVEEDOR, CONST_PRODUCTOS.DESPROD, 
                    CONST_PRODUCTOS_COTIZACION.PRECIO, CONST_PRODUCTOS_COTIZACION.FECHA, CONST_PRODUCTOS_COTIZACION.USUARIO
                FROM CONST_PRODUCTOS_COTIZACION LEFT OUTER JOIN CONST_PRODUCTOS ON CONST_PRODUCTOS_COTIZACION.IDPROD = CONST_PRODUCTOS.IDPROD LEFT OUTER JOIN
                    CONST_PROVEEDORES ON CONST_PRODUCTOS_COTIZACION.CODPROVEEDOR = CONST_PROVEEDORES.CODPROVEEDOR
                WHERE (CONST_PRODUCTOS_COTIZACION.IDPROD = ${producto})
            `

    execute.Query(res, qry);

});

module.exports = router;