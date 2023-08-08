
function getView(){

    let view = {
        encabezado: ()=>{
            return `
                <h5 class="negrita text-danger" id="lbTituloRep">Cargue un Reporte</h5>

                <div class="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label>Del</label>
                            <input type="date" class="form-control" id="txtFechaInicial">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label>Al</label>
                            <input type="date" class="form-control" id="txtFechaFinal">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label>Total</label>
                            <h1 class="text-danger" id="lbTotal">0</h1>
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

                </div>
            `
        },
        detalle : ()=>{
            return `
                <hr class="solid">

                <div class="row" id="rootList"></div>
                
                <button class="btn btn-imprimir btn-primary btn-circle hand shadow btn-xl" onclick="window.print()">
                    <i class="fal fa-print"></i>
                </button>
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
        document.getElementById('lbTituloRep').innerText = "Reporte de Pagos Emitidos";
        getReportEmitidos()
    })

    let btnRecibidos = document.getElementById('btnRecibidos');
    btnRecibidos.addEventListener('click',()=>{
        
        document.getElementById('lbTituloRep').innerText = "Reporte de Pagos Recibidos";

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
                        </div>
                        <button class="btn btn-exportar btn-success btn-circle btn-xl hand shadow" onclick="funciones.exportTableToExcel('tblRep1','Reporte_pagos_emitidos')">
                            <i class="fal fa-file-excel"></i>
                        </button>
                        `


    //api.reportes_pagosmes('tblCheques',"lbPresupuesto","lbSaldo","lbDiferencia",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'))
    api.reportes_pagosmes_total('tblCheques',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'))


};

function getReportRecibidos(){
    
        let container = document.getElementById('rootList');
        container.innerHTML = `
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
                            </div>
                            <button class="btn btn-exportar btn-circle btn-success btn-xl hand shadow" onclick="funciones.exportTableToExcel('tblRep2','ReportePagosRecibidos')">
                                <i class="fal fa-file-excel"></i>
                            </button>`
    
    
        api.reportes_recibidosmes_tipo('tblCheques',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),'CONTRATANTE')
    
    
};



