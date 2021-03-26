function getView(){
    let view ={
        encabezado:()=>{
            return `
            <div class="row">
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <div class="form-group">
                        <label>Buscar:</label>
                        <input type="text" class="form-control" id="txtBuscar" placeholder="Escriba para filtrar...">
                    </div>
                </div>
               
            </div>
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
                            <label>Presupuesto</label>
                            Q<input type="number" class="form-control col-8" id="txtPresupuesto">
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
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title" id="exampleModalLabel">Opciones del Proyecto</h5>
                            <button class="btn btn-warning" data-dismiss="modal">
                                        <i class="fal fa-times"></i>
                                        Cerrar
                            </button>
                        </div>
                        <div class="modal-body" style="font-size :small">
                            <h4 id="lbDetProyecto">Proyecto</h4>
                            <br>
                            
                            <div class="row">
                                <div class="col-4">
                                    <button class="btn btn-success col-12" id="btnNuevoContrato">
                                        <i class="fal fa-list"></i>
                                        Nuevo
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-warning col-10">
                                        <i class="fal fa-edit"></i>
                                        Editar
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-danger btn-rounded col-10" id="btnMenuProyectoEliminar">
                                        <i class="fal fa-trash"></i>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                                <br>
                                <hr class="rounded">
                                <br>
                                
                            <div class="panel-container show">
                                <div class="panel-content">
                                    <ul class="nav nav-pills nav-justified" role="tablist">
                                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#panel1">Subcontratistas</a></li>    
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel2">Cheques Emitidos</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#panel3">Cheques Recibidos</a></li>
                                    </ul>
                                    <div class="tab-content py-3">
                                        <!-- sub contratistas -->
                                        <div class="tab-pane fade active show" id="panel1" role="tabpanel">
                                            
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
                                        <!-- cheques emitidos -->
                                        <div class="tab-pane fade" id="panel2" role="tabpanel">
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
                                                        <tbody id="tblPChequesEmitidos"></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- cheques recibidos -->
                                        <div class="tab-pane fade" id="panel3" role="tabpanel">
                                            <div class="table-responsive">
                                                <div class="table-responsive">
                                                    <table class="table table-responsive">
                                                        <thead class="bg-danger text-white">
                                                            <tr>
                                                                <td>CHEQUE</td>
                                                                <td>DESCRIPCIOON</td>
                                                                <td>VALOR</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody></tbody>
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
                            Q<input type="number" class="form-control col-8" id="txtPPresupuesto">
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
    

    //VENTANA INICIAL DE PROYECTOS
    let txtBuscar = document.getElementById('txtBuscar');
    txtBuscar.addEventListener('keyup', () => {
        funciones.FiltrarTabla('tablaProyectos', 'txtBuscar');
    });

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
                            await api.proyectos_listado('NO', 'tblProyectos');
                            $('#modalNuevo').modal('hide');
                        })
                        .catch(() => {
                            funciones.AvisoError('No se pudo guardar');
                            btnGuardarProyecto.innerHTML = `<i class="fal fa-save"></i>Guardar`;
                        })

                }
            })
        
    })

    
    //VENTANA DE OPCIONES DEL PROYECTO
    let btnMenuProyectoEliminar = document.getElementById('btnMenuProyectoEliminar');
    btnMenuProyectoEliminar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea ELIMINAR este proyecto?')
        .then(()=>{
            api.proyectos_eliminar(GlobalSelectedCodProyecto)
            .then(async()=>{
                funciones.Aviso('Proyecto Eliminado exitosamente!!')
                await api.proyectos_listado('NO', 'tblProyectos');
                $('#modalMenuProyecto').modal('hide');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo Eliminar este proyecto')
            })
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
        .then((value)=>{
            if(value==true){

                if (txtPAsignacion.value==''){
                    funciones.AvisoError('Escriba la asignación o tarea del contrato');
                }else{
                    if(Number(txtPPresupuesto.value)>0){
                        if(GlobalSelectedNumeroContrato==0){
                            //es un nuevo contrato
                            api.subcontrato_insertar(GlobalSelectedCodProyecto,cmbPSubContratista.value,txtPAsignacion.value,txtPPresupuesto.value,funciones.getFecha('txtPFechaEntrega'))
                            .then(()=>{
                                funciones.Aviso('Nuevo Sub-contrato creado exitosamente !!')
                                api.proyectos_subcontratistas(GlobalSelectedCodProyecto,'tblPSucontratistas')
                                $('#modalNuevoContrato').modal('hide');
                            })
                            .catch(()=>{
                                funciones.AvisoError('No se pudo crear el Sub-contrato')
                            })
                        }else{
                            //edita un contrato existente
                            api.subcontrato_editar(GlobalSelectedNumeroContrato,cmbPSubContratista.value,txtPAsignacion.value,txtPPresupuesto.value,funciones.getFecha('txtPFechaEntrega'))
                            .then(()=>{
                                funciones.Aviso('Sub-contrato actualizado exitosamente !!')
                                api.proyectos_subcontratistas(GlobalSelectedCodProyecto,'tblPSucontratistas')
                                $('#modalNuevoContrato').modal('hide');
                            })
                            .catch(()=>{
                                funciones.AvisoError('No se pudo editar el Sub-contrato')
                            })
                        }
                        
                        

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

    await api.proyectos_listado('NO', 'tblProyectos');
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
    api.cheques_proyecto(GlobalSelectedCodProyecto, 'tblPChequesEmitidos');

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
                api.cheques_proyecto(GlobalSelectedCodProyecto, 'tblPChequesEmitidos');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo ELIMINAR el cheque')
            })

        }
    })
};