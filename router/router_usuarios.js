const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/claveverificacion", async(req,res)=>{
    
        
    let qry =''; 

    qry = `SELECT VALOR FROM CONST_CONFIG WHERE ID=1;`;     
    
    execute.Query(res, qry);

});



router.post("/bitacora", async(req,res)=>{
    
    const {fecha,hora,descripcion,usuario} = req.body;
    
    let qry ='';
    
    qry = `INSERT INTO CONST_BITACORA(FECHA,HORA,DESCRIPCION,USUARIO) 
            VALUES ('${fecha}','${hora}','${descripcion}','${usuario}')`;     
    
    execute.Query(res,qry);

});

router.post("/listabitacora", async(req,res)=>{
    
    const {mes,anio} = req.body;
    
    let qry ='';
    
    qry = `SELECT FECHA,HORA,DESCRIPCION,USUARIO FROM CONST_BITACORA
            WHERE MONTH()=${mes} AND YEAR()=${anio}`;     
    
    execute.Query(res,qry);

});


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
        qry = `SELECT ISNULL(CODUSUARIO,0) AS CODIGO, 
                ISNULL(USUARIO,'SN') AS USUARIO, ISNULL(PASS,'SN') AS PASS, 
                ISNULL(NIVEL,0) AS NIVEL
            FROM CONST_USUARIOS`;  

            execute.Query(res,qry);
    }else{
        res.send('No hay datos')
    }
        
    

});


// ELIMINA UN USUARIOS
router.post("/eliminar", async(req,res)=>{
    
    const {codigo} = req.body;
        
    let qry =''; 

    qry = `DELETE FROM CONST_USUARIOS WHERE CODUSUARIO=${codigo};`;     
    
    execute.Query(res, qry);

});

// NUEVO USUARIO
router.post("/nuevo", async(req,res)=>{
    
    const {u,p,n} = req.body;
        
    let qry ='';

    qry = `INSERT INTO CONST_USUARIOS (USUARIO,PASS,NIVEL) 
            VALUES ('${u}','${p}',${n})`;     

    execute.Query(res, qry);

});


// EDITA EL USUARIO
router.post("/editar", async(req,res)=>{
    
const {u,p,n,c} = req.body;
        
    let qry ='';

    qry = `UPDATE CONST_USUARIOS SET 
            USUARIO='${u}',
            PASS='${p}',
            NIVEL=${n}
            WHERE CODUSUARIO=${c}
            `;     

    execute.Query(res, qry);

});


module.exports = router;