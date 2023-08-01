
function getView(){

    let view = {
        encabezado: ()=>{
            return `
                <div class="row">
                    <div class="col-8">
                        <div class="form-group">
                            <label class="negrita">Seleccione un Proveedor</label>
                            <select class="form-control shadow" id="cmbProveedores"></select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label>Total:</label>
                            <h3 class="negrita text-danger" id="lbTotal">--</h3>
                        </div>
                    </div>
                </div>

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
         
                </div>

        
            `
        },
        detalle : ()=>{
            return `
                <hr class="solid">

                <div class="row">
                    <div class="col-4">
                        <button class="btn btn-success hand shadow" onclick="funciones.exportTableToExcel('tblRep1','ReportePagoSubcontratista')">
                            <i class="fal fa-file-excel"></i>Exportar Excel
                        </button>
                    </div>
                    <div class="col-4">
                        <button class="hidden btn btn-danger hand shadow" onclick="funciones.exportarPDF('#divTable1','ReportePagoSubcontratista')">
                            <i class="fal fa-file-pdf"></i>Exportar PDF
                        </button>
                    </div>
                    
                </div>

                
                <div class="row" id="divTable1">
                    <div class="table-responsive">
                        <table class="table table-responsive table-striped table-hover table-bordered" id="tblRep1">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>BANCO</td>
                                    <td>DESCRIPCIÓN</td>
                                    <td>IMPORTE</td>
                                </tr>
                            </thead>
                            <tbody id="tblPagos">
                                    
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        }
    }

    root.innerHTML = view.encabezado() + view.detalle();

};


function addListeners(){

    let cmbProveedores = document.getElementById('cmbProveedores');
    let txtFechaInicial = document.getElementById('txtFechaInicial');
    let txtFechaFinal =document.getElementById('txtFechaFinal');

    txtFechaInicial.value = funciones.getFecha();
    txtFechaFinal.value = funciones.getFecha();
    
  
    txtFechaInicial.addEventListener('change',()=>{
        api.reportes_proveedores_fechas('tblPagos',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),cmbProveedores.value)
    });

    txtFechaFinal.addEventListener('change',()=>{
        api.reportes_proveedores_fechas('tblPagos',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),cmbProveedores.value)
    });

    cmbProveedores.addEventListener('change',()=>{
        api.reportes_proveedores_fechas('tblPagos',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),cmbProveedores.value)
    })

    api.proveedores_combo_promise('cmbProveedores')
    .then(()=>{
        console.log('cargando reporte..')
        api.reportes_proveedores_fechas('tblPagos',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),cmbProveedores.value)
    })
    .catch(()=>{
        funciones.AvisoError('No se pu0do cargar la lista de Subcontratistas')
    })

};


function initView(){
    getView();
    addListeners();
};


