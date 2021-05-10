const { addListener } = require("nodemon");

function getView(){

    let view = {
        encabezado: ()=>{
            return `
                <div class="row">

                    <div class="col-3">
                        <button class="btn btn-outline-info btn-sm shadow" id="btnEmitidos">
                            <i class="fal fa-double-check"></i>
                            Pagos Emitidos
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="btn btn-outline-success btn-sm shadow" id="btnRecibidos">
                            <i class="fal fa-double-check"></i>
                            Pagos Recibidos
                        </button> 
                    </div>

                    <div class="col-3">
                        <button class="btn btn-outline-warning btn-sm shadow" id="btnRubros">
                            <i class="fal fa-double-check"></i>
                            Pagos Rubros
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="btn btn-secondary btn-sm shadow" id="btnCheques">
                            <i class="fal fa-search"></i>
                        </button>
                    </div>

                </div>

                <div class="row">
                    <div class="col-5">
                        <div class="form-group">
                            <label>Mes</label>
                            <select class="form-control" id="cmbMes"></select>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="form-group">
                            <label>Año</label>
                            <select class="form-control" id="cmbAnio"></select>
                        </div>
                    </div>
                </div>
            `
        },
        detalle : ()=>{
            return `
                <hr class="solid">

                <div class="row" id="rootList"></div>
            `
        }
    }

    root.innerHTML = view.encabezado()

};


function addListeners(){
    let cmbMes = document.getElementById('cmbMes');
    let cmbAnio =document.getElementById('cmbAnio');

    document.getElementById('cmbMes').innerHTML = funciones.ComboMeses();
    document.getElementById('cmbAnio').innerHTML = funciones.ComboAnio();
    
    let f = new Date();
    document.getElementById('cmbMes').value = f.getUTCMonth() + 1;
    document.getElementById('cmbAnio').value = f.getFullYear();

    let btnEmitidos = document.getElementById('btnEmitidos');
    btnEmitidos.addEventListener('click',()=>{
        getReportEmitidos(cmbMes.value,cmbAnio.value)
    })

    let btnRecibidos = document.getElementById('btnRecibidos');
    btnRecibidos.addEventListener('click',()=>{
        getReportRecibidos(cmbMes.value,cmbAnio.value)
    })

    let btnRubros = document.getElementById('btnRubros');
    btnRubros.addEventListener('click',()=>{
        getMenuRubros();
    })
    
    let btnCheques = document.getElementById('btnCheques');
    btnCheques.addEventListener('click',()=>{
        getMenuBusqueda();  
    })

};


function initView(){
    getView();
    addListeners();
};


function getReportEmitidos(mes,anio){

};

function getReportRecibidos(mes,anio){

};

function getMenuRubros(){

};

function getMenuBusqueda(){

};

