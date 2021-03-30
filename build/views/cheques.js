function getView(){
    let view ={
        encabezado:()=>{
            return `
            <div class="row">
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <div class="form-group">
                        <label>Buscar:</label>
                        <input type="text" id="txtBuscar" class="form-control">
                    </div>
                </div>
                                
            </div>
            `
        },
        listado : ()=>{
            return `
            <div class="card">
                <div class="form-group">
                    <label>Seleccione un proyecto</label>
                    <select class="form-control" id="cmbProyectoCheques">
                    </select>
                </div>
                <table class="table table-responsive table-striped table-hover table-bordered" id="tablaCheques">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>FECHA</td>
                            <td>CUENTA</td>
                            <td>ACREEDOR</td>
                            <td>VALOR</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody id="tblCheques">
                       
                    </tbody>
                </table>
            </div> `
        },
        modalMenuCheques : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true"  id="modalTiposCheque">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-secondary text-white text-center">
                        <h5 class="modal-title" id="exampleModalLabel">Seleccione un tipo de Cheque</h5>
                    </div>
                    <div class="modal-body">
                        <hr class="solid">
                        
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-outline-success btn-xl shadow btn-rounded"  data-dismiss="modal" id="btnMenuChequeContratista">
                                    <i class="fal fa-bell"></i>
                                    Pago a Sub-Contratista
                                </button>    
                            </div>
                            <div class="col-4">
                                <button class="btn btn-outline-warning btn-xl shadow btn-rounded" data-dismiss="modal" id="btnMenuChequeProveedor">
                                    <i class="fal fa-box"></i>
                                    Pago hacia Proveedore
                                </button>    
                            </div>
                            <div class="col-4">
                                <button class="btn btn-outline-info btn-xl shadow btn-rounded" data-dismiss="modal" id="btnMenuChequeContratante">
                                    <i class="fal fa-archive"></i>
                                    Recibo de Contratante
                                </button>    
                            </div>
                        </div>                
                        
                        <hr class="solid">


                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary col-12" data-dismiss="modal">
                            <i class="fal fa-times"></i>
                            CANCELAR
                        </button>
                    </div>

                </div>
            </div>
        </div>
            `
        },
        modalNuevo : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalNuevo">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-trans-gradient text-white">
                            <h5 class="modal-title" id="lbDatosCheque">Datos del Cheque</h5>
                        </div>
                    <div class="modal-body">

                        <div class="form group"
                            <label>Proyecto</label>
                            <select class="form-control" id="cmbProyecto">
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Fecha:</label>
                            <input type="date" class="form-control" id="txtFecha">
                        </div>   
                        
                        <div class="form group">
                            <label>Cuenta</label>
                            <select class="form-control" id="cmbCuenta">
                            </select>
                        </div>

                        
                        <div class="form-group">
                            <label>No. Cheque</label>
                            <input type="number" class="form-control" id="txtNumeroCheque">
                        </div>
                        
                        <div class="form-group">
                            <label>Acreedor</label>
                            <select id="cmbTipoAcreedor" readonly="true">
                                <option value="SUBCONTRATISTA">SUBCONTRATISTA</option>
                                <option value="PROVEEDOR">PROVEEDOR</option>
                                <option value="CONTRATANTE">CONTRATANTE</option>
                            </select>

                            <select class="form-control" id="cmbAcreedor">
                            </select> 

                        </div>
        
                        <div class="form-group">
                            <label>Cantidad</label>
                            <input type="number" class="form-control bg-amarillo text-danger col-6" id="txtImporte" value=0>
                        </div>

                        <div class="form-group">
                            <label>Rubro</label>
                            <select class="form-control" id="cmbRubro">
                            </select> 
                        </div>
        
                        <div class="form-group">
                            <label>Recibido por</label>
                            <input type="text" class="form-control" id="txtRecibe" value='SN'>
                        </div>

                        <div class="form-group">
                            <label>Observaciones</label>
                            <input type="text" class="form-control" id="txtObs">
                        </div>
                        
                        <hr class="solid"><hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary btn-xl" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    Cancelar
                                </button>    
                            </div>
                            <div class="col-6">
                                <button class="btn btn-primary btn-xl" id="btnGuardarCheque">
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
            `
        },
        btnNuevo : ()=>{
            return `
                <div class="" id="btnFlotanteDerecha">
                    <button class="btn btn-success btn-circle btn-xl" id="btnNuevo">
                        +                        
                    </button>
                </div>           
            `

        }
    }

    root.innerHTML=  view.listado() + view.btnNuevo(); //view.encabezado() +
    rootModal.innerHTML = view.modalMenuCheques() + view.modalNuevo();
    
};

async function addListeners(){
   

    document.getElementById('cmbRubro').innerHTML = funciones.getComboRubros();

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        /*
        document.getElementById('txtNumeroCheque').value = 0;
        document.getElementById('txtImporte').value = 0;
        document.getElementById('txtRecibe').value = 'SN';
        document.getElementById('txtObs').value = 'SN';
        */
        //$('#modalNuevo').modal('show');
        $('#modalTiposCheque').modal('show');
        
    });

    let btnMenuChequeContratista = document.getElementById('btnMenuChequeContratista');
    btnMenuChequeContratista.addEventListener('click',()=>{
        document.getElementById('lbDatosCheque').innerText = "Nuevo Cheque a Sub-Contratista"
        GlobalSelectedTipoCheque = 'SUBCONTRATISTA';
        document.getElementById('cmbTipoAcreedor').value = 'SUBCONTRATISTA';

        document.getElementById('txtNumeroCheque').value = 0;
        document.getElementById('txtImporte').value = 0;
        document.getElementById('txtRecibe').value = 'SN';
        document.getElementById('txtObs').value = 'SN';
        $('#modalNuevo').modal('show');
    });

    let btnMenuChequeProveedor = document.getElementById('btnMenuChequeProveedor');
    btnMenuChequeProveedor.addEventListener('click',()=>{
        document.getElementById('lbDatosCheque').innerText = "Nuevo Cheque a Proveedor"
        GlobalSelectedTipoCheque = 'PROVEEDOR';
        document.getElementById('cmbTipoAcreedor').value = 'PROVEEDOR';

        document.getElementById('txtNumeroCheque').value = 0;
        document.getElementById('txtImporte').value = 0;
        document.getElementById('txtRecibe').value = 'SN';
        document.getElementById('txtObs').value = 'SN';
        $('#modalNuevo').modal('show');
    });

    let btnMenuChequeContratante = document.getElementById('btnMenuChequeContratante');
    btnMenuChequeContratante.addEventListener('click',()=>{
        document.getElementById('lbDatosCheque').innerText = "Nuevo Pago de Contratante"
        GlobalSelectedTipoCheque = 'CONTRATANTE';
        document.getElementById('cmbTipoAcreedor').value = 'CONTRATANTE';

        document.getElementById('txtNumeroCheque').value = 0;
        document.getElementById('txtImporte').value = 0;
        document.getElementById('txtRecibe').value = 'SN';
        document.getElementById('txtObs').value = 'SN';
        $('#modalNuevo').modal('show');
    });
/*
    let txtBuscar = document.getElementById('txtBuscar');
    txtBuscar.addEventListener('keyup',()=>{
        funciones.FiltrarTabla('tablaCheques','txtBuscar');
    })
 */

    let txtFecha = document.getElementById('txtFecha');
    txtFecha.value = funciones.getFecha(); 

    //combo TIPO ACREEDOR - Cambia entre proveedores y subcontratistas
    let cmbTipoAcreedor = document.getElementById('cmbTipoAcreedor');
    cmbTipoAcreedor.addEventListener('change',()=>{
        if(cmbTipoAcreedor.value=='SUBCONTRATISTA'){
            let codproyecto = document.getElementById('cmbProyecto').value || 0;
            api.proyectos_subcontratistas_combo(codproyecto, 'cmbAcreedor');
        }else{
            api.proveedores_combo('cmbAcreedor');
        }
    });

    
    //combo Proyectos, cambia los subcontratistas según se cambia el proyecto
    let cmbProyecto = document.getElementById('cmbProyecto');
    cmbProyecto.addEventListener('change',()=>{
        if(cmbTipoAcreedor.value=='SUBCONTRATISTA'){
            let codproyecto = document.getElementById('cmbProyecto').value || 0;
            api.proyectos_subcontratistas_combo(codproyecto, 'cmbAcreedor');
        }else{
            api.proveedores_combo('cmbAcreedor');
        }
    });



    api.proyectos_combo_promise('cmbProyecto')
    .then(async()=>{
        let codproyecto = document.getElementById('cmbProyecto').value || 0;
        await api.proyectos_subcontratistas_combo(codproyecto, 'cmbAcreedor');
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo cargar la lista de Proyectos');
    })

    await api.cuentas_combo('cmbCuenta');
  
    //boton guardar cheque
    let btnGuardarCheque = document.getElementById('btnGuardarCheque');
    btnGuardarCheque.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardar este Cheque?')
        .then((value)=>{
            if(value==true){
                
                let nocontrato = document.getElementById('cmbAcreedor').value || 0;
                let codcuenta = document.getElementById('cmbCuenta');
                let numero = document.getElementById('txtNumeroCheque');
                let cantidad = document.getElementById('txtImporte');
                let recibe = document.getElementById('txtRecibe');
                let rubro = document.getElementById('cmbRubro');
                let obs = document.getElementById('txtObs');

                if(obs.value==''){}else{obs.value='SN'};
                if(recibe.value=''){}else{recibe.value='SN'};

                if(numero.value==''){
                    funciones.AvisoError('Indique el número de cheque emitido');
                }else{
                    if(Number(cantidad.value)>0){

                        api.cheques_insertar(funciones.getFecha('txtFecha'),
                                                nocontrato,
                                                0,
                                                codcuenta.value,
                                                numero.value,
                                                Number(cantidad.value),
                                                recibe.value,
                                                obs.value,
                                                rubro.value,
                                                GlobalSelectedTipoCheque)
                        .then(()=>{
                            funciones.Aviso('Cheque creado exitosamente!!');
                            $('#modalNuevo').modal('hide');

                            let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                            api.cheques_proyecto(cmbProyectoCheques, 'tblCheques');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo crear el cheque');
                        })

                    }else{
                        funciones.AvisoError('Indique el monto/cantidad del cheque');
                    };
                };
                
                

                
            }
        })      
    });

    //selector de proyectos para ver lista de cheques
    let cmbProyectoCheques = document.getElementById('cmbProyectoCheques');
    cmbProyectoCheques.addEventListener('change',()=>{
        let cmbProyectoC = document.getElementById('cmbProyectoCheques').value || 0;
        api.cheques_proyecto(cmbProyectoC, 'tblCheques');
    })

    api.proyectos_combo_promise('cmbProyectoCheques')
    .then(async()=>{
        let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
        await api.cheques_proyecto(cmbProyectoCheques, 'tblCheques');
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo cargar la lista de Proyectos');
    })
};

function initView(){
    getView();
    addListeners();
};


function deleteCheque(id){
    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este cheque?')
    .then((value)=>{
        if(value==true){

            api.cheques_delete(id)
            .then(()=>{
                funciones.Aviso('Cheque ELIMINADO exitosamente!!');
                let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                api.cheques_proyecto(cmbProyectoCheques, 'tblCheques');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo ELIMINAR el cheque')
            })

        }
    })
};