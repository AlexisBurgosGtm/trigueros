function getView(){
    let view ={
        encabezado:()=>{
            return `
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Status</label>
                        <select class="form-control" id="cmbStatus">
                            <option value="NO">ACTIVOS</option>
                            <option value="SI">FINALIZADOS</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label>Mes</label>
                        <select class="form-control" id="cmbMes">
                            
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label>Año</label>
                        <select class="form-control" id="cmbAnio">
                            
                        </select>
                    </div>
                </div>
               
            </div>
            <hr class="solid">
            
            `
        },
        listado : ()=>{
            return `
            <div class="row">
                <table class="table table-responsive table-hover" id="tablaProyectos">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>Proyecto</td>
                            <td>Presupuesto</td>
                        </tr>
                    </thead>
                    <tbody id="tblProyectos" class="bg-white">
                    
                    </tbody>
                </table>
            </div>
            `
        },
        modalNuevoProyecto : ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevo">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-trans-gradient text-white">
                        <h5 class="modal-title" id="exampleModalLabel">Datos del Proyecto</h5>
                        </button>
                    </div>
                    <div class="modal-body" style="font-size :small">

                        <div class="form-group">
                            <label>Proyecto</label>
                            <input type="text" class="form-control input-sm" id="txtDescripcion">
                        </div>

                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" class="form-control input-sm" id="txtDireccion">
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" class="form-control input-sm" id="txtFInicio">
                                </div>    
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label>Fecha Final</label>
                                    <input type="date" class="form-control input-sm" id="txtFFinal">
                                </div>    
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Costo Total</label>
                            Q<input type="number" class="form-control col-6 bg-amarillo" id="txtPresupuesto" value=0>
                        </div>

                        <div class="form-group">
                            <label>Contratante:</label>
                            <select class="form-control input-sm" id="cmbContratante">
                               
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary btn-lg" data-dismiss="modal">
                            <i class="fal fa-times"></i>
                            Cerrar
                        </button>
                        <button type="button" class="btn btn-primary btn-lg" id="btnGuardarProyecto">
                            <i class="fal fa-save"></i>
                            Guardar
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            `
            
        },
        btnNuevo: () => {
            return `<div id="btnFlotanteDerecha">
                        <button class="btn btn-success btn-circle btn-xl shadow" id="btnNuevo">
                            +
                         </button>
                    </div>`   
        },
        modalMenuProyecto : ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalMenuProyecto" >
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        
                        <div class="modal-body" style="font-size :small">
                                
                            <div class="panel-container show">
                                <div class="panel-content">
                                
                                    <ul class="nav nav-pills nav-justified" role="tablist">
                                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#panel0" id="btnTabGeneral">DATOS GENERALES</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel3" id="btnTabProveedores">CHEQUES A PROVEEDORES</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel2" id="btnTabSubcontratistas">CHEQUES A SUBCONTRATISTAS</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel1"  id="btnTabContratos">SUBCONTRATOS</a></li>    
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel4"  id="btnTabRecibidos">PAGOS RECIBIDOS</a></li>
                                    </ul>
                                    <div class="tab-content py-3">
                                    <hr class="solid">
                                        <!-- inicio -->
                                        <div class="tab-pane fade active show" id="panel0" role="tabpanel">
                                        
                                            <h4 id="lbDetProyecto">Proyecto</h4>
                                            <br>
                                            
                                            <div class="row">
                                                <div class="col-3">
                                                    
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-warning btn-md" id="btnMenuProyectoEditar">
                                                        <i class="fal fa-edit"></i>
                                                        Editar
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-secondary btn-md" id="btnMenuProyectoFinalizar">
                                                        <i class="fal fa-check"></i>
                                                        Finalizar
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-danger btn-md" id="btnMenuProyectoEliminar">
                                                        <i class="fal fa-trash"></i>
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <hr class="rounded">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label>Recibido</label>
                                                        <h5 class="text-info" id="lbRecibido"></h5>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label>Ejecutado</label>
                                                        <h5 class="text-danger" id="lbEjecutado"></h5>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label>Diferencia</label>
                                                        <h5 id="lbDiferencia"></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>   

                                        <!-- sub contratistas -->
                                        <div class="tab-pane fade" id="panel1" role="tabpanel">
                                            <div class="row">
                                                <div class="col-6">
                                                </div>
                                                <div class="col-6 text-right">
                                                    <button class="btn btn-success btn-md shadow" id="btnNuevoContrato">
                                                        Nuevo (+)
                                                    </button>
                                                </div>
                                            </div>    
                                            <div class="table-responsive">
                                                <table class="table table-responsive">
                                                    <thead class="bg-trans-gradient text-white">
                                                        <tr>
                                                            <td>CONTRATISTA/ASIGNACION</td>
                                                            <td>IMPORTE</td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tblPSucontratistas"></tbody>
                                                </table>
                                            </div>
                                            
                                        </div>   

                                        <!-- cheques subcontratistas -->
                                        <div class="tab-pane fade" id="panel2" role="tabpanel">
                                            <div class="table-responsive">
                                                <div class="table-responsive">
                                                    <table class="table table-responsive">
                                                        <thead class="bg-trans-gradient text-white">
                                                            <tr>
                                                                <td>FECHA</td>
                                                                <td>CUENTA</td>
                                                                <td>ACREEDOR</td>
                                                                <td>VALOR</td>
                                                                <td></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tblCheques1"></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- cheques proveedores -->
                                        <div class="tab-pane fade" id="panel3" role="tabpanel">
                                            <div class="table-responsive">
                                                <div class="table-responsive">
                                                    <table class="table table-responsive">
                                                        <thead class="bg-info text-white">
                                                            <tr>
                                                                <td>FECHA</td>
                                                                <td>CHEQUE</td>
                                                                <td>DESCRIPCIOON</td>
                                                                <td>VALOR</td>
                                                                <td></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tblCheques2"></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- cheques contratante -->
                                        <div class="tab-pane fade" id="panel4" role="tabpanel">
                                            <div class="table-responsive">
                                                <div class="table-responsive">
                                                    <table class="table table-responsive">
                                                        <thead class="bg-success text-white">
                                                            <tr>
                                                                <td>FECHA</td>
                                                                <td>CUENTA</td>
                                                                <td>ACREEDOR</td>
                                                                <td>VALOR</td>
                                                                <td></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tblCheques3"></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- -- -- -- --> 
                                    </div>
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>
                <div class="" id="btnFlotanteDerecha">
                    <button class="btn btn-danger btn-md" data-dismiss="modal">
                        <i class="fal fa-arrow-left"></i>Atrás
                    </button>
                </div>                                
            </div>
            `   
        },
        modalNuevoContrato : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevoContrato">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title" id="lbNuevoContrato">Nuevo Sub-Contrato</h5>
                    </div>
                    <div class="modal-body" style="font-size :small">

                        <div class="form-group">
                            <label>Sub-Contratista:</label>
                            <select class="form-control input-sm" id="cmbPSubContratista"></select>
                        </div>

                        <div class="form-group">
                            <label>Asignación o Tarea a realizar</label>
                            <textarea class="form-control" rows="4" id="txtPAsignacion" placeholder="Describa el motivo del contrato"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Fecha Estimada de Finalización</label>
                            <input type="date" class="form-control input-sm" id="txtPFechaEntrega">
                        </div>    
                       
                        <div class="form-group">
                            <label>Presupuesto Asignado:</label>
                            Q<input type="number" class="form-control col-6 bg-amarillo" id="txtPPresupuesto" value=0>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary btn-lg" data-dismiss="modal">
                            <i class="fal fa-times"></i>
                            Cerrar
                        </button>
                        <button type="button" class="btn btn-primary btn-lg" id="btnGuardarContrato">
                            <i class="fal fa-save"></i>
                            Guardar
                        </button>
                    </div>

                </div>
            </div>
        </div>
            `
            
        }
    }

    root.innerHTML= view.encabezado() + view.listado() + view.btnNuevo();
    rootModal.innerHTML = view.modalNuevoProyecto() + view.modalMenuProyecto() + view.modalNuevoContrato();
    
};

function addListeners() { 
    
    let cmbStatus = document.getElementById('cmbStatus');
    let cmbAnio = document.getElementById('cmbAnio');
    let cmbMes = document.getElementById('cmbMes');

    cmbAnio.innerHTML = funciones.ComboAnio();
    cmbMes.innerHTML = funciones.ComboMeses();

    let fecha = new Date();
    cmbMes.value = fecha.getUTCMonth()+1;
    cmbAnio.value = fecha.getFullYear();

    cmbMes.addEventListener('change',()=>{
        api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
    });

    
    cmbAnio.addEventListener('change',()=>{
        api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
    });

    cmbAnio.style = "visibility:hidden";
    cmbMes.style = "visibility:hidden";

    cmbStatus.addEventListener('change',()=>{
        if(cmbStatus.value=='NO'){
            cmbAnio.style = "visibility:hidden";
            cmbMes.style = "visibility:hidden";
            api.proyectos_listado(cmbStatus.value, 0, 0, 'tblProyectos');
            
        }else{
            cmbAnio.style = "visibility:visible";
            cmbMes.style = "visibility:visible";
            api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
        }
    });

    //VENTANA INICIAL DE PROYECTOS
    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click', () => {
        $('#modalNuevo').modal('show');
    });   


    //VENTANA NUEVO PROYECTO
    let txtFInicio = document.getElementById('txtFInicio');
    let txtFFinal = document.getElementById('txtFFinal');
    txtFFinal.value = funciones.getFecha();
    txtFInicio.value = funciones.getFecha();

    let btnGuardarProyecto = document.getElementById('btnGuardarProyecto');
    btnGuardarProyecto.addEventListener('click', () => {

        let txtDescripcion = document.getElementById('txtDescripcion');
        let txtDireccion = document.getElementById('txtDireccion');
        let txtPresupuesto = document.getElementById('txtPresupuesto');
        let cmbContratante = document.getElementById('cmbContratante');
      

        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
            .then((value) => {
                if (value == true) {

                    btnGuardarProyecto.innerHTML = GlobalLoader;

                    api.proyectos_insertar(txtDescripcion.value, txtDireccion.value, funciones.devuelveFecha('txtFInicio'), funciones.devuelveFecha('txtFFinal'), 'SN', '0', cmbContratante.value, Number(txtPresupuesto.value))
                    .then(async() => {
                            btnGuardarProyecto.innerHTML = `<i class="fal fa-save"></i>Guardar`;
                            funciones.Aviso('Proyecto guardado exitosamente!!')
                            let cmbStatus = document.getElementById('cmbStatus');
                            let cmbMes = document.getElementById('cmbMes');
                            let cmbAnio = document.getElementById('cmbAnio');

                            await api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
                            await api.insertar_bitacora(`Proyecto nuevo: ${txtDescripcion.value}`)
                            $('#modalNuevo').modal('hide');
                    })
                    .catch(() => {
                            funciones.AvisoError('No se pudo guardar'); 
                    });
                    btnGuardarProyecto.innerHTML = `<i class="fal fa-save"></i>Guardar`;

                }
            })
        
    })


    //VENTANA DE OPCIONES DEL PROYECTO
    let btnMenuProyectoEliminar = document.getElementById('btnMenuProyectoEliminar');
    btnMenuProyectoEliminar.addEventListener('click',()=>{
        
            funciones.Confirmacion('¿Está seguro que desea ELIMINAR este proyecto?')
            .then((value)=>{
                if(value==true){
                    btnMenuProyectoEliminar.innerHTML = GlobalLoader;
                    api.proyectos_eliminar(GlobalSelectedCodProyecto)
                    .then(async()=>{
                        funciones.Aviso('Proyecto Eliminado exitosamente!!')
                        let cmbStatus = document.getElementById('cmbStatus');
                        let cmbMes = document.getElementById('cmbMes');
                        let cmbAnio = document.getElementById('cmbAnio');

                        await api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
                        await api.insertar_bitacora(`Proyecto Eliminado: ${GlobalSelectedCodProyecto}`);

                        $('#modalMenuProyecto').modal('hide');
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo Eliminar este proyecto')
                    })
                    btnMenuProyectoEliminar.innerHTML =`<i class="fal fa-trash"></i>Eliminar`
                }        
            })    
        
        
    });

    let btnMenuProyectoEditar = document.getElementById('btnMenuProyectoEditar');
    btnMenuProyectoEditar.addEventListener('click',()=>{
        $('#modalMenuProyecto').modal('hide');
        funciones.solicitarClave()
        .then((name)=>{
            if(name==GlobalPassUsuario){
                funciones.Aviso('Edición de los datos generales del proyecto');
            }else{
                funciones.AvisoError('Clave incorrecta')
            }
        })
        .catch(()=>{
            funciones.AvisoError('Clave incorrecta')
        })
        
    });

    let btnMenuProyectoFinalizar = document.getElementById('btnMenuProyectoFinalizar');
    btnMenuProyectoFinalizar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea FINALIZAR este proyecto?')
            .then(async(value)=>{
                if(value==true){
                    btnMenuProyectoFinalizar.innerHTML = GlobalLoader;
                    await api.proyectos_finalizar(GlobalSelectedCodProyecto)
                    .then(async()=>{
                        funciones.Aviso('Proyecto Finalizado exitosamente!!')
                        let cmbStatus = document.getElementById('cmbStatus');
                        let cmbMes = document.getElementById('cmbMes');
                        let cmbAnio = document.getElementById('cmbAnio');

                        await api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
                        await api.insertar_bitacora(`Proyecto finalizado: ${GlobalSelectedCodProyecto}`)
                        $('#modalMenuProyecto').modal('hide');
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo Finalizado este proyecto')
                    })
                    btnMenuProyectoFinalizar.innerHTML = `<i class="fal fa-check"></i>Finalizar`
                }
            })
        
    });

    //VENTANA NUEVO CONTRATO
    let txtPFechaEntrega = document.getElementById('txtPFechaEntrega');
    txtPFechaEntrega.value = funciones.getFecha();

    let txtPAsignacion = document.getElementById('txtPAsignacion');
    let txtPPresupuesto = document.getElementById('txtPPresupuesto');
    let cmbPSubContratista = document.getElementById('cmbPSubContratista');

    let btnNuevoContrato = document.getElementById('btnNuevoContrato');
    btnNuevoContrato.addEventListener('click',()=>{
        document.getElementById('lbNuevoContrato').innerText='Nuevo Sub-Contrato';

        GlobalSelectedNumeroContrato = 0;
        txtPAsignacion.value = '';
        txtPPresupuesto.value= 0;
        $('#modalNuevoContrato').modal('show');
    })

    let btnGuardarContrato = document.getElementById('btnGuardarContrato');
    btnGuardarContrato.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea guardar este Sub-Contrato?')
        .then(async (value)=>{
            if(value==true){

                if (txtPAsignacion.value==''){
                    funciones.AvisoError('Escriba la asignación o tarea del contrato');
                }else{
                    if(Number(txtPPresupuesto.value)>0){
                        
                        btnGuardarContrato.innerHTML = GlobalLoader;

                        if(GlobalSelectedNumeroContrato==0){
                            //es un nuevo contrato
                           await api.subcontrato_insertar(GlobalSelectedCodProyecto,cmbPSubContratista.value,txtPAsignacion.value,txtPPresupuesto.value,funciones.getFecha('txtPFechaEntrega'))
                            .then(async()=>{
                                funciones.Aviso('Nuevo Sub-contrato creado exitosamente !!')
                                api.proyectos_subcontratistas(GlobalSelectedCodProyecto,'tblPSucontratistas')
                                $('#modalNuevoContrato').modal('hide');
                                await api.insertar_bitacora(`Nuevo subcontrato: ${txtPAsignacion.value} para ${cmbPSubContratista.value}`)
                            })
                            .catch(()=>{
                                funciones.AvisoError('No se pudo crear el Sub-contrato')
                            })
                        }else{
                            //edita un contrato existente
                            await api.subcontrato_editar(GlobalSelectedNumeroContrato,cmbPSubContratista.value,txtPAsignacion.value,txtPPresupuesto.value,funciones.getFecha('txtPFechaEntrega'))
                            .then(()=>{
                                funciones.Aviso('Sub-contrato actualizado exitosamente !!')
                                api.proyectos_subcontratistas(GlobalSelectedCodProyecto,'tblPSucontratistas')
                                $('#modalNuevoContrato').modal('hide');
                            })
                            .catch(()=>{
                                funciones.AvisoError('No se pudo editar el Sub-contrato')
                            })
                        }

                        btnGuardarContrato.innerHTML = `<i class="fal fa-save"></i>Guardar`
                        

                    }else{
                        funciones.AvisoError('Escriba el monto o presupuesto asignado a este Subcontrato')
                    }
                }

            }
        })
        
    });


    //funciones varias
    getCargasIniciales();

    funciones.slideAnimationTabs();

};

async function getCargasIniciales() {

    let cmbStatus = document.getElementById('cmbStatus');
    let cmbMes = document.getElementById('cmbMes');
    let cmbAnio = document.getElementById('cmbAnio');

    await api.proyectos_listado(cmbStatus.value, 0, 0, 'tblProyectos');
    await api.contratantes_combo('cmbContratante');
    await api.subcontratistas_combo('cmbPSubContratista');

};

function initView(){
    getView();
    addListeners();
};

function getMenuProyecto(codigo,descripcion){
    
    GlobalSelectedCodProyecto = codigo;
    
    document.getElementById('lbDetProyecto').innerText = descripcion;

    api.proyectos_subcontratistas(codigo,'tblPSucontratistas');
    api.cheques_proyecto(GlobalSelectedCodProyecto, 'tblCheques1','tblCheques2','tblCheques3','lbRecibido','lbEjecutado','lbDiferencia');

    $('#modalMenuProyecto').modal('show');

};

function deleteContrato(nocontrato){
    
        funciones.Confirmacion('¿Está seguro que desea Eliminar este Sub-Contrato?, no se podrán recuperar los datos')
        .then((value)=>{
            if(value==true){
                api.subcontrato_eliminar(nocontrato)
                .then(()=>{
                    funciones.Aviso('Sub-contrato ELIMINADO exitosamente !!')
                    api.proyectos_subcontratistas(GlobalSelectedCodProyecto,'tblPSucontratistas')
                    $('#modalNuevoContrato').modal('hide');
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo ELIMINAR el Sub-contrato')
                })
            }
        })
        
    
};

function editContrato(nocontrato,codacreedor,asignacion,fecha,presupuesto){
        document.getElementById('lbNuevoContrato').innerText = 'Edición del Contrato No. ' + nocontrato.toString();
        GlobalSelectedNumeroContrato = nocontrato;

        let cmbPSubContratista = document.getElementById('cmbPSubContratista');
        cmbPSubContratista.value = codacreedor;
        
        document.getElementById('txtPAsignacion').value = asignacion;
        document.getElementById('txtPPresupuesto').value = presupuesto;
        document.getElementById('txtPFechaEntrega').value = fecha;
        
        
        $('#modalNuevoContrato').modal('show');

};

function deleteCheque(id){
    
        funciones.Confirmacion('¿Está seguro que desea ELIMINAR este cheque?')
        .then((value)=>{
            if(value==true){
    
                api.cheques_delete(id)
                .then(()=>{
                    funciones.Aviso('Cheque ELIMINADO exitosamente!!');
                    api.cheques_proyecto(GlobalSelectedCodProyecto, 'tblCheques1','tblCheques2','tblCheques3','lbRecibido','lbEjecutado','lbDiferencia');
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo ELIMINAR el cheque')
                })
    
            }
        })
        
};