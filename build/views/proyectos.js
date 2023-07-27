function getView(){
    let view ={
        body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="dias-tab">
                            ${view.encabezado() + view.listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="clientes-tab">
                            ${view.datos_proyecto()}
                        </div>

                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                           ${view.nuevo_proyecto()}
                        </div>
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>¿
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i></a>
                        </li>                           
                    </ul>
                </div>
            `
        },
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
           
            <div class="form-group col-12">
                <label></label>
                <input type="text" placeholder="Escriba para buscar..." class="form-control border-danger text-danger negrita" id="filtroCards" oninput="aplicaFiltroCards()">
            </div>
            
            
            `
        },
        listado : ()=>{
            return `
            <div class="row">
               <div id="tblProyectos" class="card-columns">
               </div>
            </div>
            <div id="btnFlotanteDerecha">
                <button class="btn btn-success btn-circle btn-xl shadow" id="btnNuevo">
                    +
                </button>
            </div>
            `
        },
        nuevo_proyecto : ()=>{
            return `
            <div class="card card-rounded shadow">
 
                    <div class="card-body p-6">

                        <h5 class="negrita text-danger">Datos del Proyecto</h5>

                        <div class="form-group">
                            <label>Proyecto</label>
                            <input type="text" class="form-control input-sm" id="txtDescripcion">
                        </div>

                        <div class="form-group">
                            <label>Dirección</label>
                            <input type="text" class="form-control input-sm" id="txtDireccion">
                        </div>
                        

                        <div class="row">
                            <div class="col-sm-12 col-lg-4 col-xl-4 col-md-4">
                                <div class="form-group">
                                    <label>Fecha Inicio</label>
                                    <input type="date" class="form-control input-sm" id="txtFInicio">
                                </div>    
                            </div>
                            <div class="col-sm-12 col-lg-4 col-xl-4 col-md-4">
                                <div class="form-group">
                                    <label>Fecha Final</label>
                                    <input type="date" class="form-control input-sm" id="txtFFinal">
                                </div>    
                            </div>
                            <div class="col-sm-12 col-lg-4 col-xl-4 col-md-4">
                                <div class="form-group">
                                    <label>Costo Total</label>
                                    Q<input type="number" class="form-control bg-amarillo border-danger text-danger
                                    " id="txtPresupuesto" value=0>
                                </div>
                            </div>
                        </div>
                        <br>
                        
                        <div class="form-group">
                            <label>Contratante:</label>
                            <select class="form-control input-sm" id="cmbContratante">
                               
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-6">
                        </div>
                        <div class="col-6">
                                <div class="row">
                                    <div class="col-6 text-right">
                                        <button type="button" class="btn btn-circle hand shadow btn-secondary btn-xl" onclick="document.getElementById('tab-uno').click()">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <button type="button" class="btn btn-owner btn-xl btn-circle hand shadow" id="btnGuardarProyecto">
                                            <i class="fal fa-save"></i>
                                        </button>
                                    </div>
                                </div>
                        </div>
                        
                        
                    </div>

                </div>

                
            </div>
            `
            
        },       
        datos_proyecto : ()=>{
            return `
              
                            <div class="panel-container show">
                                <div class="panel-content">
                                
                                    <ul class="nav nav-pills nav-justified .bg-primarygrad" role="tablist">
                                        <li class="nav-item "><a class="nav-link active shadow" data-toggle="tab" href="#panel0" id="btnTabGeneral">DATOS GENERALES</a></li>
                                        <li class="nav-item"><a class="nav-link shadow" data-toggle="tab" href="#panel3" id="btnTabProveedores">CHEQUES A PROVEEDORES</a></li>
                                        <li class="nav-item"><a class="nav-link shadow" data-toggle="tab" href="#panel2" id="btnTabSubcontratistas">CHEQUES A SUBCONTRATISTAS</a></li>
                                        <li class="nav-item"><a class="nav-link shadow" data-toggle="tab" href="#panel5" id="btnTabCaja">GASTOS DE CAJA</a></li>
                                        <li class="nav-item"><a class="nav-link shadow" data-toggle="tab" href="#panel1"  id="btnTabContratos">LISTADO DE SUBCONTRATOS</a></li>    
                                        <li class="nav-item ${get_permiso_visible()}"><a class="nav-link shadow" data-toggle="tab" href="#panel4"  id="btnTabRecibidos">PAGOS RECIBIDOS</a></li>
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
                                                        __Editar
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
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label>Costo Total</label>
                                                        <h1 class="text-info" id="lbPresupuesto"></h1>
                                                    </div>
                                                </div>
                                                <div class="col-6 ${get_permiso_visible()}">
                                                    <div class="form-group">
                                                        <label>Recibido</label>
                                                        <h1 class="text-success" id="lbRecibido"></h1>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            <div class="row">
                                                <hr class="solid">
                                            </div>

                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label>Ejecutado</label>
                                                        <h1 class="text-danger" id="lbEjecutado"></h1>
                                                    </div>
                                                </div>
                                                <div class="col-6 ${get_permiso_visible()}">
                                                    <div class="form-group">
                                                        <label>Diferencia</label>
                                                        <h1 id="lbDiferencia"></h1>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>   

                                        <!-- LISTADO DE SUBCONTRATOS -->
                                        <div class="tab-pane fade" id="panel1" role="tabpanel">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label>Total:</label>
                                                        <h3 class="negrita tex-danger" id="lbTotalSubcontratos">00.00</h3>
                                                    </div>
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

                                        
                                        <!-- pagos de caja chica -->
                                        <div class="tab-pane fade" id="panel5" role="tabpanel">
                                          
                                            <div class="table-responsive">
                                                <table class="table table-responsive">
                                                    <thead class="bg-trans-gradient text-white">
                                                        <tr>
                                                            <td>FECHA</td>
                                                            <td>ENTREGADO POR / CONCEPTO</td>
                                                            <td>IMPORTE</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tblPCaja"></tbody>
                                                </table>
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
                           
                <div class="btn-bottom-left" id="">
                    <button class="btn btn-secondary btn-circle hand shadow btn-xl" onclick="document.getElementById('tab-uno').click()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
                </div>                                
            </div>
            `   
        },
        modalNuevoContrato : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevoContrato">
            <div class="modal-dialog modal-lg" role="document">
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
                            <label>Fecha Inicio</label>
                            <input type="date" class="form-control input-sm" id="txtPFechaInicio">
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

    root.innerHTML= view.body();
    rootModal.innerHTML = view.modalNuevoContrato(); //view.modalNuevoProyecto() + view.modalNuevoContrato();
    
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
        GlobalSelectedCodProyecto = 0;
        //$('#modalNuevo').modal('show');
        document.getElementById('tab-tres').click();
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
      
        if(GlobalSelectedCodProyecto==0){ //ES UN NUEVO PROYECTO
            funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
            .then((value) => {
                if (value == true) {

                    btnGuardarProyecto.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                    btnGuardarProyecto.disabled = true;

                    api.proyectos_insertar(txtDescripcion.value, txtDireccion.value, funciones.devuelveFecha('txtFInicio'), funciones.devuelveFecha('txtFFinal'), 'SN', '0', cmbContratante.value, Number(txtPresupuesto.value))
                    .then(async() => {
                            
                            btnGuardarProyecto.innerHTML = `<i class="fal fa-save"></i>`;
                            btnGuardarProyecto.disabled = false;

                            funciones.Aviso('Proyecto guardado exitosamente!!')
                            let cmbStatus = document.getElementById('cmbStatus');
                            let cmbMes = document.getElementById('cmbMes');
                            let cmbAnio = document.getElementById('cmbAnio');

                            await api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
                            await api.insertar_bitacora(`Proyecto nuevo: ${txtDescripcion.value}`)
                            //$('#modalNuevo').modal('hide');
                            document.getElementById('tab-uno').click();
                    })
                    .catch(() => {
                            funciones.AvisoError('No se pudo guardar'); 
                            btnGuardarProyecto.innerHTML = `<i class="fal fa-save"></i>`;
                            btnGuardarProyecto.disabled = false;
                    });
                    

                }
            })
        

        }else{ // EDITA EL PROYECTO
            funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
            .then((value) => {
                if (value == true) {

                    btnGuardarProyecto.innerHTML = GlobalLoader;

                    api.proyectos_editar(GlobalSelectedCodProyecto,txtDescripcion.value, txtDireccion.value, funciones.devuelveFecha('txtFInicio'), funciones.devuelveFecha('txtFFinal'), 'SN', '0', cmbContratante.value, Number(txtPresupuesto.value))
                    .then(async() => {
                            btnGuardarProyecto.innerHTML = `<i class="fal fa-save"></i>`;
                            funciones.Aviso('Proyecto editado exitosamente!!')
                            
                            let cmbStatus = document.getElementById('cmbStatus');
                            let cmbMes = document.getElementById('cmbMes');
                            let cmbAnio = document.getElementById('cmbAnio');

                            await api.proyectos_listado(cmbStatus.value, cmbMes.value, cmbAnio.value, 'tblProyectos');
                            await api.insertar_bitacora(`Proyecto editado: ${txtDescripcion.value}`)

                            $('#modalNuevo').modal('hide');
                    })
                    .catch(() => {
                            funciones.AvisoError('No se pudo guardar'); 
                    });
                    btnGuardarProyecto.innerHTML = `<i class="fal fa-save"></i>`;

                }
            })
        

        }

        
    })


    //VENTANA DE OPCIONES DEL PROYECTO
    let btnMenuProyectoEliminar = document.getElementById('btnMenuProyectoEliminar');
    btnMenuProyectoEliminar.addEventListener('click',()=>{
        
        //$('#modalMenuProyecto').modal('hide');
        
        funciones.solicitarClave()
        .then((name)=>{
            if(name.toString()==GlobalConfigClave.toString()){
               
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
    
                            //$('#modalMenuProyecto').modal('hide');
                            document.getElementById('tab-uno').click();

                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo Eliminar este proyecto')
                        })
                        btnMenuProyectoEliminar.innerHTML =`<i class="fal fa-trash"></i>Eliminar`
                    }        
                })    
            

            }else{
                funciones.AvisoError('Incorrecta')
            }
        })
        .catch(()=>{
            funciones.AvisoError('Incorrecta')
        })
        

        
        
    });

    let btnMenuProyectoEditar = document.getElementById('btnMenuProyectoEditar');
    btnMenuProyectoEditar.addEventListener('click',()=>{
        
        //$('#modalMenuProyecto').modal('hide');
    
        funciones.solicitarClave()
        .then((name)=>{
            if(name.toString()==GlobalConfigClave.toString()){
                //funciones.Aviso('proyecto seleccionado ' + GlobalSelectedCodProyecto.toString())
                getDataProyecto();
            }else{
                funciones.AvisoError('Incorrecta')
            }
        })
        .catch(()=>{
            funciones.AvisoError('Incorrecta')
        })

    });

    let btnMenuProyectoFinalizar = document.getElementById('btnMenuProyectoFinalizar');
    btnMenuProyectoFinalizar.addEventListener('click',()=>{
        
        //$('#modalMenuProyecto').modal('hide');
    
        funciones.solicitarClave()
        .then((name)=>{
            if(name.toString()==GlobalConfigClave.toString()){
                
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
                            //$('#modalMenuProyecto').modal('hide');
                            document.getElementById('tab-uno').click();

                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo Finalizado este proyecto')
                        })
                        btnMenuProyectoFinalizar.innerHTML = `<i class="fal fa-check"></i>Finalizar`
                    }
                })
            

            }else{
                funciones.AvisoError('Incorrecta')
            }
        })
        .catch(()=>{
            funciones.AvisoError('Incorrecta')
        })
        


    });

    //VENTANA NUEVO CONTRATO
    let txtPFechaEntrega = document.getElementById('txtPFechaEntrega');
    txtPFechaEntrega.value = funciones.getFecha();

    let txtPFechaInicio = document.getElementById('txtPFechaInicio');
    txtPFechaInicio.value = funciones.getFecha();

    let txtPAsignacion = document.getElementById('txtPAsignacion');
    let txtPPresupuesto = document.getElementById('txtPPresupuesto');
    let cmbPSubContratista = document.getElementById('cmbPSubContratista');

    let btnNuevoContrato = document.getElementById('btnNuevoContrato');
    btnNuevoContrato.addEventListener('click',()=>{

        document.getElementById('lbNuevoContrato').innerText='Nuevo Sub-Contrato';

        GlobalSelectedNumeroContrato = 0;
        txtPAsignacion.value = '';
        txtPPresupuesto.value= 0;

        document.getElementById('txtPFechaInicio').value = funciones.getFecha();
        document.getElementById('txtPFechaEntrega').value = funciones.getFecha();

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
                           await api.subcontrato_insertar(GlobalSelectedCodProyecto,cmbPSubContratista.value,txtPAsignacion.value,txtPPresupuesto.value,funciones.getFecha('txtPFechaEntrega'),funciones.getFecha('txtPFechaInicio'))
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
                            await api.subcontrato_editar(GlobalSelectedNumeroContrato,cmbPSubContratista.value,txtPAsignacion.value,txtPPresupuesto.value,funciones.getFecha('txtPFechaEntrega'),funciones.getFecha('txtPFechaInicio'))
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

function aplicaFiltroCards() {

    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("filtroCards");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("tblProyectos");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
    document.getElementById("filtroCards").value = input.value.toUpperCase();
};

function initView(){
    getView();
    addListeners();
};

function getMenuProyecto(codigo,descripcion, presupuesto){
    
    GlobalSelectedCodProyecto = codigo;
    
    document.getElementById('lbDetProyecto').innerText = descripcion;
    document.getElementById('lbPresupuesto').innerText = presupuesto;

    api.proyectos_subcontratistas(codigo,'tblPSucontratistas');
    api.cheques_proyecto(GlobalSelectedCodProyecto, 'tblCheques1','tblCheques2','tblCheques3','lbRecibido','lbEjecutado','lbDiferencia');
    api.cheques_cajachica(GlobalSelectedCodProyecto,'tblPCaja')

    //$('#modalMenuProyecto').modal('show');
    document.getElementById('tab-dos').click();

};

function getDataProyecto(){
    funciones.showToast('Cargando datos del proyecto...');
    api.proyectos_datos_proyecto(GlobalSelectedCodProyecto,'txtDescripcion','txtDireccion','txtPresupuesto','cmbContratante','txtFInicio','txtFFinal');
    $('#modalNuevo').modal('show');
}


function deleteContrato(nocontrato){
    funciones.solicitarClave()
        .then((name)=>{
            if(name.toString()==GlobalConfigClave.toString()){

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

            }else{
                funciones.AvisoError('Incorrecta')
            }
        })
        .catch(()=>{
            funciones.AvisoError('Incorrecta')
        })

    
    
     
        
    
};

function editContrato(nocontrato,codacreedor,asignacion,fecha,presupuesto,fechainicio){
     
    
        document.getElementById('lbNuevoContrato').innerText = 'Edición del Contrato No. ' + nocontrato.toString();
        GlobalSelectedNumeroContrato = nocontrato;

        let cmbPSubContratista = document.getElementById('cmbPSubContratista');
        cmbPSubContratista.value = codacreedor;
        
        document.getElementById('txtPAsignacion').value = asignacion;
        document.getElementById('txtPPresupuesto').value = presupuesto;
        document.getElementById('txtPFechaInicio').value = fechainicio;
        document.getElementById('txtPFechaEntrega').value = fecha;
        
        
        $('#modalNuevoContrato').modal('show');

};

function deleteCheque(id){
    funciones.solicitarClave()
    .then((name)=>{
        if(name.toString()==GlobalConfigClave.toString()){

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

        }else{
            funciones.AvisoError('Incorrecta')
        }
    })
    .catch(()=>{
        funciones.AvisoError('Incorrecta')
    })
    

        
};