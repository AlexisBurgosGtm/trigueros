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
            <div class="card-body">
                <div class="form-group">
                    <label>Seleccione un proyecto</label>
                    <select class="form-control" id="cmbProyectoCheques">
                    </select>
                </div>

                <hr class="solid">

                <div class="row">
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
            <div class="card">
            
                <div class="panel-container show">
                    <div class="panel-content">
                        <ul class="nav nav-pills nav-justified" role="tablist">
                            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#panel1">SUBCON</a></li>    
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel2">PROV</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel3">CONTRAT</a></li>
                        </ul>
                        <div class="tab-content py-3">
                            <!-- sub contratistas -->
                            <div class="tab-pane fade active show" id="panel1" role="tabpanel">

                                <table class="table table-responsive table-striped table-hover table-bordered" id="">
                                    <thead class="bg-trans-gradient text-white">
                                        <tr>
                                            <td>FECHA</td>
                                            <td>CUENTA</td>
                                            <td>ACREEDOR</td>
                                            <td>VALOR</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblCheques1">
                                    
                                    </tbody>
                                </table>
                                            
                            </div>   
                            <!-- proveedores -->
                            <div class="tab-pane fade" id="panel2" role="tabpanel">
                                
                                <table class="table table-responsive table-striped table-hover table-bordered" id="">
                                    <thead class="bg-secondary text-white">
                                        <tr>
                                            <td>FECHA</td>
                                            <td>CUENTA</td>
                                            <td>ACREEDOR</td>
                                            <td>VALOR</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblCheques2">
                                    
                                    </tbody>
                                </table>

                            </div>
                            <!-- contratantes -->
                            <div class="tab-pane fade" id="panel3" role="tabpanel">
                                <table class="table table-responsive table-striped table-hover table-bordered" id="">
                                    <thead class="bg-info text-white">
                                        <tr>
                                            <td>FECHA</td>
                                            <td>CUENTA</td>
                                            <td>ACREEDOR</td>
                                            <td>VALOR</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblCheques3">
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>`
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

                        <div class="form group">
                            <label class="negrita">Proyecto</label>
                            <select class="form-control" id="cmbProyecto">
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Fecha:</label>
                            <input type="date" class="form-control" id="txtFecha">
                        </div>   
                        
                        <div class="form group">
                            <label class="negrita">Cuenta</label>
                            <select class="form-control" id="cmbCuenta">
                            </select>
                        </div>

                        
                        <div class="form-group">
                            <label class="negrita">No. Cheque</label>
                            <input type="number" class="form-control" id="txtNumeroCheque">
                        </div>
                        
                        <div class="form-group">
                            <label class="negrita">Acreedor</label>
                            <select class="form-control" id="cmbAcreedor">
                            </select> 
                        </div>
        
                        <div class="form-group">
                            <label class="negrita">Cantidad</label>
                            <input type="number" class="form-control bg-amarillo text-danger col-6" id="txtImporte" value=0>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Rubro</label>
                            <select class="form-control" id="cmbRubro">
                            </select> 
                        </div>
        
                        <div class="form-group">
                            <label class="negrita">Recibido por</label>
                            <input type="text" class="form-control" id="txtRecibe" value='SN'>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Observaciones</label>
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
        modalNuevoChequeContratante : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalNuevoContratante">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title" id="">Datos del Cheque Recibido</h5>
                        </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label class="negrita">Contratante</label>
                            <select class="form-control" id="cmbContratanteC">
                            </select> 
                        </div>

                        <div class="form group">
                            <label class="negrita">Proyecto</label>
                            <select class="form-control" id="cmbProyectoC">
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Fecha:</label>
                            <input type="date" class="form-control" id="txtFechaC">
                        </div>   
                        
                        <div class="form group">
                            <label class="negrita">Banco</label>
                            <select class="form-control" id="cmbBancoC"></select>
                        </div>

                        
                        <div class="form-group">
                            <label class="negrita">No. Cheque</label>
                            <input type="number" class="form-control negrita" id="txtNumeroChequeC">
                        </div>
                        
                                
                        <div class="form-group">
                            <label class="negrita">Cantidad</label>
                            <input type="number" class="form-control bg-amarillo text-danger col-6" id="txtImporteC" value=0>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Recibido por</label>
                            <input type="text" class="form-control" id="txtRecibeC" value='SN'>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Observaciones</label>
                            <input type="text" class="form-control" id="txtObsC">
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
    rootModal.innerHTML = view.modalMenuCheques() + view.modalNuevo() + view.modalNuevoChequeContratante();
    
};

async function addListeners(){
   

    document.getElementById('cmbRubro').innerHTML = funciones.getComboRubros();

    //**************************************************** */
    // MENU NUEVO CHEQUE
    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        $('#modalTiposCheque').modal('show');
    });

    //GlobalSelectedTipoCheque = 'SUBCONTRATISTA','PROVEEDOR','CONTRATANTE';

    let btnMenuChequeContratista = document.getElementById('btnMenuChequeContratista');
    btnMenuChequeContratista.addEventListener('click',()=>{
        document.getElementById('lbDatosCheque').innerText = "Nuevo Cheque a Sub-Contratista"
        GlobalSelectedTipoCheque = 'SUBCONTRATISTA';
        
        //CARGA LA LISTA DE SUBCONTRATISTAS O SEA CONTRATOS
        let codproyecto = document.getElementById('cmbProyecto').value || 0;
        api.proyectos_subcontratistas_combo(codproyecto, 'cmbAcreedor');

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
        //CARGA LA LISTA DE PROVEEDORES EN EL COMBO ACREEDOR
        api.proveedores_combo('cmbAcreedor');

        document.getElementById('txtNumeroCheque').value = 0;
        document.getElementById('txtImporte').value = 0;
        document.getElementById('txtRecibe').value = 'SN';
        document.getElementById('txtObs').value = 'SN';
        $('#modalNuevo').modal('show');
    });

    //****************************************************
    //****************************************************

    let txtFecha = document.getElementById('txtFecha'); 
    txtFecha.value = funciones.getFecha(); 

    let cmbProyecto = document.getElementById('cmbProyecto');
    cmbProyecto.addEventListener('change',()=>{
        if(GlobalSelectedTipoCheque=='SUBCONTRATISTA'){
            let codproyecto = document.getElementById('cmbProyecto').value || 0;
            api.proyectos_subcontratistas_combo(codproyecto, 'cmbAcreedor');
        }else{ //si no es subcontratista es proveedor
            api.proveedores_combo('cmbAcreedor');
        }
    });


    api.proyectos_combo_promise('cmbProyecto');

    await api.cuentas_combo('cmbCuenta');

  
    //boton guardar cheque - SUBCONTRATISTAS y PROVEEDORES
    let btnGuardarCheque = document.getElementById('btnGuardarCheque');
    btnGuardarCheque.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardar este Cheque?')
        .then((value)=>{
            if(value==true){
                let codproyecto = document.getElementById('cmbProyecto').value || 0;
                let nocontrato = document.getElementById('cmbAcreedor').value || 0;
                let codcuenta = document.getElementById('cmbCuenta');
                let numero = document.getElementById('txtNumeroCheque');
                let cantidad = document.getElementById('txtImporte');
                let recibe = document.getElementById('txtRecibe');
                let rubro = document.getElementById('cmbRubro');
                let obs = document.getElementById('txtObs');

                if(obs.value==''){obs.value='SN'};
                if(recibe.value==''){recibe.value='SN'};

                if(numero.value==''){
                    funciones.AvisoError('Indique el número de cheque emitido');
                }else{
                    if(Number(cantidad.value)>0){

                        switch (GlobalSelectedTipoCheque) {
                            case 'SUBCONTRATISTA':
                                api.cheques_contratista_insertar(
                                    codproyecto,
                                    funciones.getFecha('txtFecha'),
                                    nocontrato,
                                    0,
                                    codcuenta.value,
                                    numero.value,
                                    Number(cantidad.value),
                                    recibe.value,
                                    obs.value,
                                    rubro.value,
                                    'SUBCONTRATISTA')
                                .then(()=>{
                                    funciones.Aviso('Cheque creado exitosamente!!');
                                    $('#modalNuevo').modal('hide');

                                    let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                                    api.cheques_proyecto(cmbProyectoCheques, 'tblCheques1', 'tblCheques2', 'tblCheques3','lbPresupuesto','lbSaldo','lbDiferencia');
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No se pudo crear el cheque');
                                })        
                                break;
                            case 'PROVEEDOR':
                                api.cheques_proveedor_insertar(
                                    codproyecto,
                                    funciones.getFecha('txtFecha'),
                                    0,
                                    nocontrato,
                                    codcuenta.value,
                                    numero.value,
                                    Number(cantidad.value),
                                    recibe.value,
                                    obs.value,
                                    rubro.value,
                                    'PROVEEDOR')
                                .then(()=>{
                                    funciones.Aviso('Cheque creado exitosamente!!');
                                    $('#modalNuevo').modal('hide');

                                    let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                                    api.cheques_proyecto(cmbProyectoCheques, 'tblCheques1', 'tblCheques2', 'tblCheques3','lbPresupuesto','lbSaldo','lbDiferencia');
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No se pudo crear el cheque');
                                })        
                                break;                            
                        }
                        
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
        api.cheques_proyecto(cmbProyectoC, 'tblCheques1', 'tblCheques2', 'tblCheques3','lbPresupuesto','lbSaldo','lbDiferencia');
    })

    //LISTADO DEL INICIO DE LA VISTA CHEQUES
    api.proyectos_combo_promise('cmbProyectoCheques')
    .then(async()=>{
        let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
        await api.cheques_proyecto(cmbProyectoCheques, 'tblCheques1', 'tblCheques2', 'tblCheques3','lbPresupuesto','lbSaldo','lbDiferencia');
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo cargar la lista de Proyectos');
    })

    // VENTANA CHEQUE CONTRATANTE
    let txtFechaC = document.getElementById('txtFechaC');
    txtFechaC.value = funciones.getFecha(); 
    document.getElementById('cmbBancoC').innerHTML = funciones.getComboBancos();

    let btnMenuChequeContratante = document.getElementById('btnMenuChequeContratante');
    btnMenuChequeContratante.addEventListener('click',()=>{    
        GlobalSelectedTipoCheque = 'CONTRATANTE';
        //CONTRANTE DEL PROYECTO
        let codigo = document.getElementById('cmbContratanteC').value || 0;
        api.contratantes_proyectos_combo(codigo,'cmbProyectoC');

        document.getElementById('txtNumeroChequeC').value = 0;
        document.getElementById('txtImporteC').value = 0;
        document.getElementById('txtRecibeC').value = 'SN';
        document.getElementById('txtObsC').value = 'SN';
        $('#modalNuevoContratante').modal('show');

    });


    api.contratantes_combo_promise('cmbContratanteC');
    let cmbContratanteC = document.getElementById('cmbContratanteC');
    cmbContratanteC.addEventListener('change',()=>{
        api.contratantes_proyectos_combo(cmbContratanteC.value,'cmbProyectoC');
    });

    //boton guardar cheque - SUBCONTRATISTAS y PROVEEDORES
    let btnGuardarChequeC = document.getElementById('btnGuardarChequeC');
    btnGuardarChequeC.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardar este Cheque?')
        .then((value)=>{
            if(value==true){
                
                let codcontratante = document.getElementById('cmbContratanteC').value || 0;
                let codproyecto = document.getElementById('cmbProyectoC').value || 0;
                let cmbBancoC = document.getElementById('cmbBancoC');
                let numero = document.getElementById('txtNumeroChequeC');
                let cantidad = document.getElementById('txtImporteC');
                let recibe = document.getElementById('txtRecibeC');
                let obs = document.getElementById('txtObsC');

                if(obs.value==''){obs.value='SN'};
                if(recibe.value==''){recibe.value='SN'};

                if(numero.value==''){
                    funciones.AvisoError('Indique el número de cheque emitido');
                }else{
                    if(Number(cantidad.value)>0){

                        api.cheques_contratante_insertar(
                                    codproyecto,
                                    funciones.getFecha('txtFechaC'),
                                    codcontratante,
                                    cmbBancoC.value,
                                    numero.value,
                                    Number(cantidad.value),
                                    recibe.value,
                                    obs.value,
                                    'CONTRATANTE')
                                .then(()=>{
                                    funciones.Aviso('Cheque creado exitosamente!!');
                                    $('#modalNuevoContratante').modal('hide');

                                    let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                                    api.cheques_proyecto(cmbProyectoCheques, 'tblCheques1', 'tblCheques2', 'tblCheques3','lbPresupuesto','lbSaldo','lbDiferencia');
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

  
    funciones.slideAnimationTabs();

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
                api.cheques_proyecto(cmbProyectoCheques, 'tblCheques1', 'tblCheques2', 'tblCheques3','lbPresupuesto','lbSaldo','lbDiferencia');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo ELIMINAR el cheque')
            })

        }
    })
};