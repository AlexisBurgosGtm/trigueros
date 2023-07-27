
function getView(){

    let view = {
        encabezado: ()=>{
            return `


                <div class="row">
                    <div class="col-5">
                        <div class="form-group">
                            <label>Del</label>
                            <input type="date" class="form-control" id="txtFechaInicial">
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="form-group">
                            <label>Al</label>
                            <input type="date" class="form-control" id="txtFechaFinal">
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">

                    <div class="col-3">
                        <button class="btn btn-outline-info btn-sm shadow" id="btnEmitidos">
                            <i class="fal fa-double-check"></i>
                            Pagos Emitidos
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="${get_permiso_visible()} btn btn-outline-success btn-sm shadow" id="btnRecibidos">
                            <i class="fal fa-double-check"></i>
                            Pagos Recibidos
                        </button> 
                    </div>

                    <div class="col-3">
                        <button class="btn btn-outline-warning btn-sm shadow hidden" id="btnRubros">
                            <i class="fal fa-double-check"></i>
                            Pagos Rubros
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="btn btn-secondary btn-sm shadow hidden" id="btnCheques">
                            <i class="fal fa-search"></i>
                        </button>
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

    root.innerHTML = view.encabezado() + view.detalle();

};


function addListeners(){


    let txtFechaInicial = document.getElementById('txtFechaInicial');
    let txtFechaFinal = document.getElementById('txtFechaFinal');

    txtFechaInicial.value = funciones.getFecha();
    txtFechaFinal.value = funciones.getFecha();

    
    let btnEmitidos = document.getElementById('btnEmitidos');
    btnEmitidos.addEventListener('click',()=>{
        getReportEmitidos()
    })

    let btnRecibidos = document.getElementById('btnRecibidos');
    btnRecibidos.addEventListener('click',()=>{
        getReportRecibidos()
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


function getReportEmitidos(){
    let container = document.getElementById('rootList');
    container.innerHTML = `
                        <div class="card-body">
                        
                            <div class="row" id="permisoLb1">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Recibido</label>
                                        <h3 class="text-info" id="lbPresupuesto"></h3>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Ejecutado</label>
                                        <h3 class="text-success" id="lbSaldo"></h3>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Diferencia</label>
                                        <h3 id="lbDiferencia"></h3>
                                    </div>
                                </div>
                            </div>

                            <hr class="solid">
                        
                        </div> 
                        
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-success hand shadow" onclick="funciones.exportTableToExcel('tblRep1','ReportePagosEmitidos')">
                                    <i class="fal fa-file-excel"></i>Exportar Excel
                                </button>
                            </div>
                            <div class="col-4">
                                <button class="hidden btn btn-danger hand shadow" onclick="funciones.exportarPDF('#divTable1','ReportePagosEmitidos')">
                                    <i class="fal fa-file-pdf"></i>Exportar PDF
                                </button>
                            </div>
                            
                        </div>

                        <div class="table-responsive" id="divTable1">
                            <table class="table table-responsive table-striped table-hover table-bordered" id="tblRep1">
                                <thead class="bg-info text-white">
                                    <tr>
                                        <td>FECHA</td>
                                        <td>CUENTA</td>
                                        <td>ACREEDOR</td>
                                        <td>VALOR</td>
                                    </tr>
                                </thead>
                                <tbody id="tblCheques">
                                
                                </tbody>
                            </table>
                        </div>`


    api.reportes_pagosmes('tblCheques',"lbPresupuesto","lbSaldo","lbDiferencia",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'))

};

function getReportRecibidos(){
    
        let container = document.getElementById('rootList');
        container.innerHTML = `
                            <div class="card-body">
                                <div class="row" id="permisoLb1">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label>Recibido</label>
                                            <h1 class="text-info" id="lbRecibido"></h1>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-success hand shadow" onclick="funciones.exportTableToExcel('tblRep2','ReportePagosRecibidos')">
                                        <i class="fal fa-file-excel"></i>Exportar Excel
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-danger hand shadow" onclick="funciones.exportarPDF('#divTable2','ReportePagosRecibidos')">
                                        <i class="fal fa-file-pdf"></i>Exportar PDF
                                    </button>
                                </div>
                                
                            </div>
                            
                            <div class="table-responsive" id="divTable2">
                                <table class="table table-responsive table-striped table-hover table-bordered" id="tblRep2">
                                    <thead class="bg-success text-white">
                                        <tr>
                                            <td>FECHA</td>
                                            <td>CUENTA</td>
                                            <td>ACREEDOR</td>
                                            <td>VALOR</td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblCheques">
                                    
                                    </tbody>
                                </table>
                            </div>`
    
    
        api.reportes_recibidosmes('tblCheques',"lbRecibido",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'))
    
    
};

function getMenuRubros(){

};

function getMenuBusqueda(){

};


function getReporteSubcontratistas(){

    

};

