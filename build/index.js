let root = document.getElementById('root');
let rootModal= document.getElementById('rootModal');
let menuPrincipal = document.getElementById('footerNav');
let btnSalir = document.getElementById('btnSalir');

let lbTituloVista = document.getElementById('lbTituloVista');

const socket = io();


let btnMenuProyectos = document.getElementById('btnMenuProyectos');
let btnMenuCheques = document.getElementById('btnMenuCheques');
let btnMenuContratos = document.getElementById('btnMenuContratos');
let btnMenuReportes = document.getElementById('btnMenuReportes');
let btnMenuMantenimientos = document.getElementById('btnMenuMantenimientos');
let btnMenuCaja = document.getElementById('btnMenuCaja');
let btnMenuCotizaciones = document.getElementById('btnMenuCotizaciones');


btnMenuProyectos.addEventListener('click',()=>{
    classNavegar.proyectos();
});

btnMenuCheques.addEventListener('click',()=>{
    classNavegar.cheques();
});

btnMenuContratos.addEventListener('click',()=>{
    classNavegar.contratos();
});

btnMenuReportes.addEventListener('click',()=>{
    classNavegar.reportes();
});

btnMenuMantenimientos.addEventListener('click',()=>{
    classNavegar.mantenimientos();
});

btnMenuCaja.addEventListener('click',()=>{
    classNavegar.caja();
});

btnMenuCotizaciones.addEventListener('click',()=>{
    classNavegar.cotizaciones();
});



btnSalir.addEventListener('click',()=>{
    funciones.Confirmacion('¿Está seguro que desea salir?')
    .then((value)=>{
        if(value==true){
            classNavegar.login();    
        }
    })
    
});

classNavegar.login();


funciones.instalationHandlers('btnInstalarApp');

