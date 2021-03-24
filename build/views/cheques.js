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
                <table class="table table-responsive table-striped table-hover table-bordered" id="tablaCheques">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>FECHA</td>
                            <td>CUENTA</td>
                            <td>ACREEDOR</td>
                            <td>VALOR</td>
                            <td>PROYECTO</td>
                        </tr>
                    </thead>
                    <tbody id="tblCheques">
                       
                    </tbody>
                </table>
            </div> `
        },
        modalNuevo : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true"  id="modalNuevo">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-trans-gradient text-white">
                            <h5 class="modal-title" id="exampleModalLabel">Datos del Cheque</h5>
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
                            <input type="number" class="form-control" id="NumeroCheque">
                        </div>
                        
                        <div class="form-group">
                            <label>Acreedor (Proveedor o Subcontratista)</label>
                            <select id="cmbTipoAcreedor">
                                <option value="SUBCONTRATISTA">SUBCONTRATISTA</option>
                                <option value="PROVEEDOR">PROVEEDOR</option>
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

    root.innerHTML= view.encabezado() + view.listado() + view.btnNuevo();
    rootModal.innerHTML = view.modalNuevo();
    
};

async function addListeners(){
    
    document.getElementById('cmbRubro').innerHTML = funciones.getComboRubros();

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        $('#modalNuevo').modal('show');
    })

    let txtBuscar = document.getElementById('txtBuscar');
    txtBuscar.addEventListener('keyup',()=>{
        funciones.FiltrarTabla('tablaCheques','txtBuscar');
    })


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
        
    });

};

function initView(){
    getView();
    addListeners();
};