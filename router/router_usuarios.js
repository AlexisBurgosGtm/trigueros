const execute = require('./connection');
const express = require('express');
const router = express.Router();



router.post("/login", async (req, res) => {

    const { usuario, pass} = req.body;

    let qry = '';

    qry = `SELECT ISNULL(CODUSUARIO,0) AS CODIGO, ISNULL(USUARIO,'SN') AS USUARIO, ISNULL(NIVEL,0) AS NIVEL
            FROM CONST_USUARIOS 
            WHERE USUARIO='${usuario}' AND PASS='${pass}'`

    execute.Query(res, qry);

});

router.post("/listado", async(req,res)=>{
    
    const {nivel} = req.body;
    
    let qry ='';

    if(Number(nivel)==1){
        qry = `SELECT ISNULL(CODUSUARIO,0) AS CODIGO, ISNULL(USUARIO,'SN') AS USUARIO, ISNULL(PASS,'SN') AS PASS ISNULL(NIVEL,0) AS NIVEL
            FROM CONST_USUARIOS`;     
    };
        
    execute.Query(res,qry);

});


// ELIMINA UN USUARIOS
router.post("/eliminar", async(req,res)=>{
    
    const {codigo} = req.body;
        
    let qry =''; let qryVendedor = '';

    qry = `DELETE FROM CONST_USUARIOS WHERE CODUSUARIO=${codigo};`;     
    
    execute.Query(res, qry + qryVendedor);

});

// NUEVO USUARIO
router.post("/nuevo", async(req,res)=>{
    
    const {sucursal,tipo,codusuario,usuario,clave,coddoc,telefono} = req.body;
        
    let qry ='';let qryV ='';

    qry = `INSERT INTO ME_USUARIOS 
        (CODUSUARIO,NOMBRE,PASS,TIPO,TELEFONO,CODDOC,CODSUCURSAL) VALUES
        (${codusuario},'${usuario}','${clave}','${tipo}','${telefono}','${coddoc}','${sucursal}');`;     
        


    execute.Query(res, qry);

});

// EDITA EL USUARIO
router.post("/editar", async(req,res)=>{
    
    const {id,sucursal,tipo,codusuario,usuario,clave,coddoc,telefono} = req.body;
        
    let qry =''; let qryV ='';

    qry = `UPDATE ME_USUARIOS SET 
            CODUSUARIO=${codusuario},
            NOMBRE='${usuario}',
            PASS='${clave}',
            TIPO='${tipo}',
            TELEFONO='${telefono}',
            CODDOC='${coddoc}'
            WHERE ID=${id} AND CODSUCURSAL='${sucursal}';`;     

      
    execute.Query(res, qry);

});


module.exports = router;