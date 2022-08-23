function getView(){
    let view = {
        body: ()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-4">
                    <h5 class="text-danger">Historial de Cheques por Cuenta</h5>
                    <div class="row">
                        <div class="form-group col-6">
                            <label>Seleccione una cuenta</label>
                            <select class="form-control" id="cmbCuentas">
                            </select>
                        </div>
                        <div class="form-group col-4">
                            <label>Mes</label>
                            <select class="form-control" id="cmbMes">
                            </select>
                        </div>
                        <div class="form-group col-2">
                            <label>Año</label>
                            <select class="form-control" id="cmbAnio">
                            </select>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <br>

            <div class="card card-rounded shadow">
                <div class="card-body p-4">

                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-success hand shadow" onclick="funciones.exportTableToExcel('tblChequesCuenta','ReporteCuentas')">
                                <i class="fal fa-file-excel"></i>Exportar Excel
                            </button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-danger hand shadow" onclick="funciones.exportarPDF('#divTable1','ReporteCuentas')">
                                <i class="fal fa-file-pdf"></i>Exportar PDF
                            </button>
                        </div>
                        
                    </div>

                    <div class="table-responsive" id="divTable1">
                        <table class="table table-responsive col-12" id="tblChequesCuenta">
                            <thead class="bg-info text-white">
                                <tr>    
                                    <th>Fecha</th>
                                    <th>NoCheque</th>
                                    <th>Concepto</th>
                                    <th>Importe</th>
                                </tr>
                            </thead>

                            <tbody id="tblDataCheques"></tbody>
                        </table>
                    </div>
                  


                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.body;
};


function addListeners(){

    let cmbMes =document.getElementById('cmbMes');
    let cmbAnio = document.getElementById('cmbAnio');
    
    cmbMes.innerHTML = funciones.ComboMeses();
    cmbAnio.innerHTML = funciones.ComboAnio();

    document.getElementById('cmbMes').addEventListener('click',()=>{
        getTblCheques();
    })

    document.getElementById('cmbAnio').addEventListener('click',()=>{
        getTblCheques();
    })

    document.getElementById('cmbCuentas').addEventListener('click',()=>{
        getTblCheques();
    })

    let fecha = new Date();
    cmbMes.value = fecha.getUTCMonth()+1;
    cmbAnio.value = fecha.getFullYear();

    api.cuentas_combo_promise('cmbCuentas')
    .then(()=>{
        getTblCheques();
    })

    

}


function initView(){

    getView();
    addListeners();

};


function getTblCheques(){

    let idcuenta = document.getElementById('cmbCuentas').value;
    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;

    let container = document.getElementById('tblDataCheques');
    container.innerHTML = GlobalLoader;

    let newrow = '';

   
            axios.post('/cheques/listado_cuenta', {
                        idcuenta:idcuenta,
                        anio:anio,
                        mes:mes
                        })
            .then((response) => {
                const data = response.data.recordset;
                data.map((rows) => {
                    newrow += `<tr class="border-bottom border-info">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}</td>
                                <td>${rows.NOCHEQUE}</td>
                                <td>${rows.DESACREEDOR}
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION}</small>
                                        <br>
                                        <small class="negrita">Concepto:${rows.CONCEPTO}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                </td>
                                <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                            </tr>`
                })
                console.log(newrow);
                container.innerHTML = newrow;
             }, (error) => {
                console.log(error);
                container.innerHTML = 'Agregue un cheque a la cuenta...';
         });


};