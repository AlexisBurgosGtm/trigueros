let root = document.getElementById('root');
let rootModal= document.getElementById('rootModal');
let rootMenuPrincipal = document.getElementById('rootMenuPrincipal');

let menuPrincipal = document.getElementById('footerNav');
let btnSalir = document.getElementById('btnSalir');

let lbTituloVista = document.getElementById('lbTituloVista');




rootMenuPrincipal.innerHTML = `
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuProyectos">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-tasks negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Proyectos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuCheques">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-address-card negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Cheques</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4"> 
            <div class="card card-rounded border-owner shadow hand" id="btnMenuContratos">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-list negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">SubContratos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br />

    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuCaja">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-box negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Caja</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuCotizaciones">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-shopping-cart negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Cotizaciones</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuAcreedores">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-user negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Acreedores (Prov/Sub)</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br />

    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuReportes">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-chart-line negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Reporte Pagos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuReporteCuentas">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-dollar-sign negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Reporte Cuentas</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuMantenimientos">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-cog negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Configuraciones</h5>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    <br />

    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuReportesRubros">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-list negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Reporte Rubros</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuReporteProveedores">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-warehouse negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Reporte Proveedores</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card card-rounded border-owner shadow hand" id="btnMenuReportesSubcontratistas">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-2">
                            <i class="fal fa-list negrita text-owner" style="font-size:150%"></i>
                        </div>
                        <div class="col-10">
                            <h5 class="negrita text-owner">Reporte Subcontratistas</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`



let btnMenuProyectos = document.getElementById('btnMenuProyectos');
let btnMenuCheques = document.getElementById('btnMenuCheques');
let btnMenuContratos = document.getElementById('btnMenuContratos');
let btnMenuAcreedores = document.getElementById('btnMenuAcreedores');
let btnMenuReportes = document.getElementById('btnMenuReportes');
let btnMenuMantenimientos = document.getElementById('btnMenuMantenimientos');
let btnMenuCaja = document.getElementById('btnMenuCaja');
let btnMenuCotizaciones = document.getElementById('btnMenuCotizaciones');
let btnMenuReportesSubcontratistas = document.getElementById('btnMenuReportesSubcontratistas');
let btnMenuReportesRubros = document.getElementById('btnMenuReportesRubros');
let btnMenuReporteCuentas = document.getElementById('btnMenuReporteCuentas');
let btnMenuReporteProveedores = document.getElementById('btnMenuReporteProveedores');

Mousetrap.bind('ctrl+m', function(e) {
    document.getElementById('btnMenuPrincipal').click();
    return false;
});

Mousetrap.bind('ctrl+up', function(e) {
    document.getElementById('btnArriba').click();
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

btnMenuAcreedores.addEventListener('click',()=>{
    classNavegar.acreedores();
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

btnMenuReporteProveedores.addEventListener('click',()=>{
    classNavegar.reportesProveedores();
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

function InicializarServiceWorkerNotif(){
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () =>
     navigator.serviceWorker.register('./sw.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'SW registration failed'));
    };
  
   
    requestPermission();
  }
  
  if ('Notification' in window) {};
  
  function requestPermission() {
    if (!('Notification' in window)) {
      //alert('Notification API not supported!');
      return;
    }
    
    Notification.requestPermission(function (result) {
      //$status.innerText = result;
    });
  }
  
  
  InicializarServiceWorkerNotif();
  

  

funciones.instalationHandlers('btnInstalarApp');



$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}




window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    console.log('Y:');
    console.log(scrollY);
    console.log('X:')
    console.log(scrollX);
  
});
