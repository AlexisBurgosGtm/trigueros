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
let btnMenuReportesSubcontratistas = document.getElementById('btnMenuReportesSubcontratistas');
let btnMenuReportesRubros = document.getElementById('btnMenuReportesRubros');
let btnMenuReporteCuentas = document.getElementById('btnMenuReporteCuentas');


Mousetrap.bind('ctrl+m', function(e) {
    document.getElementById('btnMenuPrincipal').click();
    return false;
});

document.getElementById('btnMenuPrincipal').addEventListener('click',()=>{
    $("#ModalMenuPrincipal").modal('show');
})
document.getElementById('btnMenuPrincipal').style = "visibility:hidden";

btnMenuProyectos.addEventListener('click',()=>{
    classNavegar.proyectos();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuCheques.addEventListener('click',()=>{
    classNavegar.cheques();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuContratos.addEventListener('click',()=>{
    classNavegar.contratos();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuMantenimientos.addEventListener('click',()=>{
    classNavegar.mantenimientos();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuCaja.addEventListener('click',()=>{
    classNavegar.caja();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuCotizaciones.addEventListener('click',()=>{
    classNavegar.cotizaciones();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuReportes.addEventListener('click',()=>{
    classNavegar.reportes();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuReportesSubcontratistas.addEventListener('click',()=>{
    classNavegar.reportesSubcontratistas();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuReportesRubros.addEventListener('click',()=>{
    classNavegar.reportesRubros();
    $("#ModalMenuPrincipal").modal('hide');
});

btnMenuReporteCuentas.addEventListener('click',()=>{
    classNavegar.cuentas();
    $("#ModalMenuPrincipal").modal('hide');
})



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

