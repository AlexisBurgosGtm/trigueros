let root = document.getElementById('root');
let rootModal= document.getElementById('rootModal');
let menuPrincipal = document.getElementById('footerNav');
let btnSalir = document.getElementById('btnSalir');

//menuPrincipal.style = "visibility : hidden";

let btnMenuProyectos = document.getElementById('btnMenuProyectos');
let btnMenuCheques = document.getElementById('btnMenuCheques');
let btnMenuSubcontratistas = document.getElementById('btnMenuSubcontratistas');
let btnMenuReportes = document.getElementById('btnMenuReportes');

btnMenuProyectos.addEventListener('click',()=>{
    classNavegar.proyectos();
});

btnMenuCheques.addEventListener('click',()=>{
    classNavegar.cheques();
});

btnMenuSubcontratistas.addEventListener('click',()=>{
    classNavegar.subcontratistas();
});

btnMenuReportes.addEventListener('click',()=>{
    classNavegar.reportes();
});




btnSalir.addEventListener('click',()=>{
    classNavegar.login();    
    document.getElementById('goHomeBtn').click();
});

classNavegar.login();


funciones.instalationHandlers('btnInstalarApp');