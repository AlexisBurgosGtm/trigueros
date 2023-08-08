function getView(){
    let view = {
        body: ()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-4">
                    <h5 class="text-danger">Historial de Cheques por Cuenta</h5>
                    <div class="row">
                        <div class="form-group col-4">
                            <label>Seleccione una cuenta</label>
                            <select class="form-control" id="cmbCuentas">
                            </select>
                        </div>
                        <div class="form-group col-2">
                            <label>Del</label>
                            <input type="date" class="form-control" id="txtFechaInicial">
                        </div>
                        <div class="form-group col-2">
                            <label>Al</label>
                            <input type="date" class="form-control" id="txtFechaFinal">
                        </div>
                        <div class="form-group col-4">
                            <label>Total</label>
                            <h1 class="negrita text-danger" id="lbTotal">0</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <br>

            <div class="card card-rounded shadow">
                <div class="card-body p-4">

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
            
            <button class="btn btn-exportar btn-success btn-circle btn-xl hand shadow" onclick="funciones.exportTableToExcel('tblChequesCuenta','ReporteCuentas')">
                <i class="fal fa-file-excel"></i>
            </button>

            <button class="btn btn-imprimir btn-primary btn-circle hand shadow btn-xl" onclick="window.print()">
                <i class="fal fa-print"></i>
            </button>
            
            `
        }
    }

    root.innerHTML = view.body();
};


function addListeners(){

    let txtFechaInicial = document.getElementById('txtFechaInicial');
    let txtFechaFinal = document.getElementById('txtFechaFinal');

    txtFechaInicial.value = funciones.getFecha();
    txtFechaFinal.value = funciones.getFecha();
    

    document.getElementById('txtFechaInicial').addEventListener('change',()=>{
        getTblCheques();
    })

    document.getElementById('txtFechaFinal').addEventListener('change',()=>{
        getTblCheques();
    })

    document.getElementById('cmbCuentas').addEventListener('click',()=>{
        getTblCheques();
    })

    
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
    
    let txtFechaInicial = funciones.devuelveFecha('txtFechaInicial');
    let txtFechaFinal = funciones.devuelveFecha('txtFechaFinal');

    let container = document.getElementById('tblDataCheques');
    container.innerHTML = GlobalLoader;
    
    let lbTotal = document.getElementById('lbTotal');
    lbTotal.innerText = '---';

    let newrow = '';
    let varTotal = 0;
   
            axios.post('/cheques/listado_cuenta', {
                        idcuenta:idcuenta,
                        finicial:txtFechaInicial,
                        ffinal:txtFechaFinal
                        })
            .then((response) => {
                const data = response.data.recordset;
                data.map((rows) => {
                    varTotal += Number(rows.IMPORTE);
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
                lbTotal.innerText = funciones.setMoneda(varTotal,'Q');
             }, (error) => {
                console.log(error);
                container.innerHTML = 'Agregue un cheque a la cuenta...';
                lbTotal.innerText = '---'
         });


};