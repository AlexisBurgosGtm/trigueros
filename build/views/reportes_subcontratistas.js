
function getView(){

    let view = {
        encabezado: ()=>{
            return `
                <div class="row">
                    <div class="col-8">
                        <div class="form-group">
                            <label class="negrita">Seleccione un Subcontratista</label>
                            <select class="form-control shadow" id="cmbSubcontratistas"></select>
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
                            <label>Mes</label>
                            <select class="form-control" id="cmbMes"></select>
                        </div>
                    </div>
                    <div class="col-4">
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

                <div class="row">
                    <div class="col-4">
                        <button class="btn btn-success hand shadow" onclick="funciones.exportTableToExcel('tblRep1','ReportePagoSubcontratista')">
                            <i class="fal fa-file-excel"></i>Exportar Excel
                        </button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-danger hand shadow" onclick="funciones.exportarPDF('#divTable1','ReportePagoSubcontratista')">
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

    let cmbSubcontratistas = document.getElementById('cmbSubcontratistas');
    let cmbMes = document.getElementById('cmbMes');
    let cmbAnio =document.getElementById('cmbAnio');

    document.getElementById('cmbMes').innerHTML = funciones.ComboMeses();
    document.getElementById('cmbAnio').innerHTML = funciones.ComboAnio();
    
    let f = new Date();
    document.getElementById('cmbMes').value = f.getUTCMonth() + 1;
    document.getElementById('cmbAnio').value = f.getFullYear();

    cmbMes.addEventListener('change',()=>{
        api.reportes_pagoscontratista('tblPagos',"lbTotal",cmbMes.value,cmbAnio.value,cmbSubcontratistas.value)
    });

    cmbAnio.addEventListener('change',()=>{
        api.reportes_pagoscontratista('tblPagos',"lbTotal",cmbMes.value,cmbAnio.value,cmbSubcontratistas.value)
    });

    cmbSubcontratistas.addEventListener('change',()=>{
        api.reportes_pagoscontratista('tblPagos',"lbTotal",cmbMes.value,cmbAnio.value,cmbSubcontratistas.value)
    })

    api.subcontratistas_combo_promise('cmbSubcontratistas')
    .then(()=>{
        api.reportes_pagoscontratista('tblPagos',"lbTotal",cmbMes.value,cmbAnio.value,cmbSubcontratistas.value)
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo cargar la lista de Subcontratistas')
    })
};


function initView(){
    getView();
    addListeners();
};


