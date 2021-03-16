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
                <table class="table table-responsive table-hover table-striped table-bordered" id="tablaProyectos">
                    <thead class="bg-warning">
                        <tr>
                            <td>Proyecto</td>
                            <td>Presupuesto</td>
                        </tr>
                    </thead>
                    <tbody id="tblProyectos">
                    
                    </tbody>
                </table>
            </div>
            `
        },
        modalNuevoProyecto : ()=>{
            return `
            <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header bg-warning">
                        <h5 class="modal-title" id="exampleModalLabel">Datos del Proyecto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
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
                            <input type="number" class="form-control" id="txtPresupuesto">
                        </div>

                        <div class="form-group">
                            <label>Contratante:</label>
                            <select class="form-control input-sm" id="cmbPrioridad">
                               
                            </select>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">
                            <i class="lni lni-close"></i>
                            Cerrar
                        </button>
                        <button type="button" class="btn btn-primary btn-lg" id="btnGuardarProyecto">
                            <i class="lni lni-save"></i>
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
                        <button class="btn btn-success btn-circle btn-xl" id="btnNuevo">
                            +
                         </button>
                    </div>`   
        },
        modalMenuProyecto : ()=>{
            return `
            <div class="modal fade" id="modalMenuProyecto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title" id="exampleModalLabel">Opciones del Proyecto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" style="font-size :small">
                            <h4 id="lbDetProyecto">Proyecto</h4>
                            <br>
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-info">
                                        Cheques Recibidos
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-info">
                                        Cheques Emitidos
                                    </button>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-info">
                                        Listado Contratistas
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-info">
                                        Opción Disponible
                                    </button>
                                </div>
                            </div>
                            <br><br><br><br>
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-warning col-12">
                                        <i class="lni lni-edit"></i>
                                        EDITAR
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-danger col-12" id="btnMenuProyectoEliminar">
                                        <i class="lni lni-trash"></i>
                                        ELIMINAR
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div>
            </div>
            `   
        }
    }

    root.innerHTML= view.encabezado() + view.listado() + view.btnNuevo();
    rootModal.innerHTML = view.modalNuevoProyecto() + view.modalMenuProyecto();
    
};

function addListeners() {

    let cmbPrioridad = document.getElementById('cmbPrioridad');
    cmbPrioridad.addEventListener('change',()=>{
        switch (cmbPrioridad.value) {
            case 'A':
                cmbPrioridad.className = 'form-control bg-danger text-white';
                break;
            case 'M':
                cmbPrioridad.className = 'form-control bg-info text-white';
                break;
            case 'B':
                cmbPrioridad.className = 'form-control';
                break;
        }
    });

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click', () => {
        $('#modalNuevo').modal('show');
    });

    let txtBuscar = document.getElementById('txtBuscar');
    txtBuscar.addEventListener('keyup', () => {
        funciones.FiltrarTabla('tablaProyectos', 'txtBuscar');
    });

    let txtFInicio = document.getElementById('txtFInicio');
    let txtFFinal = document.getElementById('txtFFinal');
    txtFFinal.value = funciones.getFecha();
    txtFInicio.value = funciones.getFecha();

    let btnGuardarProyecto = document.getElementById('btnGuardarProyecto');
    btnGuardarProyecto.addEventListener('click', () => {

        let txtDescripcion = document.getElementById('txtDescripcion');
        let txtDireccion = document.getElementById('txtDireccion');
        let txtPresupuesto = document.getElementById('txtPresupuesto');
        let cmbPrioridad = document.getElementById('cmbPrioridad');

        

        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
            .then((value) => {
                if (value == true) {

                    btnGuardarProyecto.innerHTML = GlobalLoader;

                    api.proyectos_insertar(txtDescripcion.value, txtDireccion.value, funciones.devuelveFecha('txtFInicio'), funciones.devuelveFecha('txtFFinal'), 'SN', '0', cmbPrioridad.value, Number(txtPresupuesto.value))
                        .then(async() => {
                            btnGuardarProyecto.innerHTML = `<i class="lni lni-save"></i>Guardar`;
                            funciones.Aviso('Proyecto guardado exitosamente!!')
                            await api.proyectos_listado('NO', 'tblProyectos');
                            $('#modalNuevo').modal('hide');
                        })
                        .catch(() => {
                            funciones.AvisoError('No se pudo guardar');
                            btnGuardarProyecto.innerHTML = `<i class="lni lni-save"></i>Guardar`;
                        })

                }
            })
        
    })

    getCargasIniciales();

    //eventos del menú del proyecto
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
    })
};

async function getCargasIniciales() {

    await api.proyectos_listado('NO', 'tblProyectos');

};

function initView(){
    getView();
    addListeners();
};

function getMenuProyecto(codigo,descripcion){
    
    GlobalSelectedCodProyecto = codigo;
    
    document.getElementById('lbDetProyecto').innerText = descripcion;

    $('#modalMenuProyecto').modal('show');

};