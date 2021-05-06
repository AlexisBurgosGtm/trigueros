function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <h3>Listado de Cortes de Caja</h3>
                    </div>
                </div>
            </div>
            `;
        },
        listado: ()=>{
            return `
            <div class="row">
                <div class="card col-12">
                    <div class="form-group">
                        <label>Estado</label>
                        <select class="form-control col-6" id="cmbStatus">
                            <option value="NO">ACTIVOS</option>
                            <option value="SI">FINALIZADOS</option>
                        </select>
                    </div>

                    <table class="table table-responsive table-hover table-striped" id="tblListado">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>No.</td>
                                <td>Fecha</td>
                                <td>Importe</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblCortes"></tbody>
                    </table>
                
                </div>
            </div>`;
        },
        modalNuevoIngreso: ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalNuevoIngreso">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title" id="">Datos de la Entrada</h5>
                        </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label class="negrita">Fecha</label>
                            <input type="date" class="form-control" id="txtEntFecha">
                        </div>
                        <div class="form-group">
                            <label class="negrita">Cuenta</label>
                            <select class="form-control" id="cmbEntCuenta"></select>
                        </div>
                        <div class="form-group">
                            <label class="negrita">Número de Cheque</label>
                            <input type="text" class="form-control" id="txtEntNocheque" value='0'>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Cantidad</label>
                            <input type="number" class="form-control col-4 bg-amarillo text-danger negrita" id="txtEntImporte" value=0>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Recibe</label>
                            <input type="text" class="form-control" id="txtEntRecibido" value='SN'>
                        </div>

                        
                        <hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary btn-xl" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    Cancelar
                                </button>    
                            </div>
                            <div class="col-6">
                                <button class="btn btn-primary btn-xl" id="btnEntGuardar">
                                    <i class="fal fa-save"></i>
                                    Guardar
                                </button>    
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                    </div>

                    </div>
                </div>
            </div>
            `;
        },
        modalNuevoSalida: ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalNuevoSalida">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title" id="">Datos de la Salida</h5>
                        </div>
                    <div class="modal-body">

                        
                        <hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary btn-xl" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    Cancelar
                                </button>    
                            </div>
                            <div class="col-6">
                                <button class="btn btn-primary btn-xl" id="btnGuardarChequeC">
                                    <i class="fal fa-save"></i>
                                    Guardar
                                </button>    
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                    </div>

                    </div>
                </div>
            </div>
            `;
        },
        modalDetalle: ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalDetalle">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info text-white">
                            <h5 class="modal-title" id="">Movimientos del Corte</h5>
                            <div class="form-group">
                                <label>Creado el:</label>
                                <h4 id="lbFechaCorte">0</h4>
                            </div>
                            <div class="form-group">
                                <label>Monto:</label>
                                <h4 id="lbImporteCorte">0</h4>
                            </div>
                        </div>
                    <div class="modal-body">
                        <table class="table table-responsive table-hover table-striped table-bordered">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>PROYECTO/DESCRIPCION</td>
                                    <td>RUBRO/ACREEDOR</td>
                                    <td>IMPORTE</td>
                                </tr>
                            </thead>
                            <tbody id="tblHistorial"></tbody>
                        </table>
           
                        <hr class="solid">             

                    </div>

                    <div class="modal-footer">
                    </div>

                    </div>
                </div>

                <div class="" id="btnFlotanteDerecha">
                    <button class="btn btn-danger btn-circle btn-xl shadow" id="btnNuevoSalida">
                        -                       
                    </button>
                </div>

            </div>
            `;
        },
        btnNuevo : ()=>{
            return `
                <div class="" id="btnFlotanteDerecha">
                    <button class="btn btn-success btn-circle btn-xl shadow" id="btnNuevoIngreso">
                        +                        
                    </button>
                </div>           
            `

        }
    };

    root.innerHTML = view.encabezado() + view.listado() + view.btnNuevo() + view.modalNuevoIngreso() + view.modalDetalle() + view.modalNuevoSalida();

};

async function addListeners(){

    //PRINCIPAL
    let cmbStatus = document.getElementById('cmbStatus');
    cmbStatus.addEventListener('change',()=>{
        api.caja_lista('tblCortes',cmbStatus.value);
    });
    

    //*********************************************/
    //********  INGRESO DE CORTES DE CAJA  ********/
    //*********************************************/
    
    api.cuentas_combo('cmbEntCuenta');


    let btnNuevoIngreso = document.getElementById('btnNuevoIngreso');
    btnNuevoIngreso.addEventListener('click',()=>{
        
        document.getElementById('txtEntFecha').value = funciones.getFecha();

        $('#modalNuevoIngreso').modal('show');
    });

    //LISTADO DE CORTES
    await api.caja_lista('tblCortes','NO');

    //modal nuevo corte caja
    let btnEntGuardar = document.getElementById('btnEntGuardar');
    btnEntGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardarte este nuevo cheque de Ingreso de Efectivo?')
        .then((value)=>{
            if(value==true){
                
                let txtEntFecha = funciones.devuelveFecha('txtEntFecha');
                let cmbEntCuenta = document.getElementById('cmbEntCuenta');
                let txtEntNocheque = document.getElementById('txtEntNocheque').value || '0';
                let txtEntImporte = document.getElementById('txtEntImporte');
                let txtEntRecibido = document.getElementById('txtEntRecibido').value || 'SN'                

                if(Number(txtEntImporte.value)<0.01){
                    funciones.AvisoError('Indique el monto del ingreso');
                    return;
                }else{
                    btnEntGuardar.innerHTML = GlobalMiniLoader;
                    btnEntGuardar.enabled = false;

                    api.caja_insertar(cmbEntCuenta.value,txtEntNocheque,txtEntFecha,txtEntImporte.value,txtEntRecibido)
                    .then(()=>{
                        btnEntGuardar.innerHTML =  '<i class="fal fa-save"></i>Guardar';
                        btnEntGuardar.enabled = true;
                        funciones.Aviso('Ingreso registrado exitosamente!!')
                        api.caja_lista('tblCortes',cmbStatus.value);
                        $('#modalNuevoIngreso').modal('hide');
                    })
                    .catch(()=>{
                        btnEntGuardar.innerHTML =  '<i class="fal fa-save"></i>Guardar';
                        btnEntGuardar.enabled = true;
                        funciones.AvisoError('No se pudo guardar este Ingreso');
                    })
                };                

            }
        })

    })


    //MODAL HISTORIAL O DETALLE DEL CORTE
    let btnNuevoSalida = document.getElementById('btnNuevoSalida');
    btnNuevoSalida.addEventListener('click',()=>{
        
        $('#modalNuevoSalida').modal('show');
    });




};

function getHistorialCorte(nocorte,fecha,importe){
    let lbFechaCorte = document.getElementById('lbFechaCorte');
    lbFechaCorte.innerText = fecha;
    let lbImporteCorte = document.getElementById('lbImporteCorte');
    lbImporteCorte.innerText = funciones.setMoneda(importe,'Q')

    api.caja_historial_lista('tblHistorial',nocorte)

    $('#modalDetalle').modal('show');

};

function initView(){
    getView();
    addListeners();
};