function getView(){
    let view ={
        body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="dias-tab">
                    
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="clientes-tab">
                          
                        </div>

                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                           
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
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <div class="form-group">
                        <label>Buscar:</label>
                        <div class="input-group">
                            <input type="text" id="txtBuscar" class="form-control">
                        </div>
                        
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
                    <div class="input-group">
                        <select class="form-control col-9" id="cmbProyectoCheques">
                        </select>
                        <select class="form-control col-3 negrita text-info" id="cmbTipoCheque">
                            <option value="">TODOS</option>
                            <option value="SUBCONTRATISTA">A SUBCONTRATISTA</option>
                            <option value="PROVEEDOR">A PROVEEDORES</option>
                            <option name="admin" value="CONTRATANTE">PAGO DE CLIENTE</option>
                        </select>
                    </div>
                    
                </div>

                <div class="row" id="permisoLb1" name="admin">
                    <div class="col-4">
                        <div class="form-group">
                            <label>Recibido</label>
                            <h3 class="text-info" name="admin" id="lbPresupuesto"></h3>
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
                            <h3 id="lbDiferencia" name="admin"></h3>
                        </div>
                    </div>
                </div>

              
            </div> 
        <div class="card card-rounded col-12 shadow">
            <div class="card-body">
                <div class="form-group">
                    <input type="search" placeholder="Escriba para buscar..." class="form-control border-danger negrita text-danger" id="txtBuscarCheque" oninput="funciones.FiltrarTabla('tbl_cheques','txtBuscarCheque')"> 
                </div>
                <table class="table table-responsive table-striped table-hover table-bordered" id="tbl_cheques">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>FECHA</td>
                            <td>CUENTA</td>
                            <td>ACREEDOR</td>
                            <td>VALOR</td>
                            <td>TIPO</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody id="tblCheques1">
                    
                    </tbody>
                </table>

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
                                    Pago a Proveedores
                                </button>    
                            </div>
                            <div class="col-4">
                                <button class="btn btn-outline-info btn-xl shadow btn-rounded" data-dismiss="modal" id="btnMenuChequeContratante">
                                    <i class="fal fa-archive"></i>
                                    Pago de Cliente
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
                            <input type="text" class="form-control bg-amarillo negrita" id="txtNumeroCheque">
                        </div>
                        
                        <div class="form-group">
                            <label class="negrita">Acreedor</label>
                            <select class="form-control" id="cmbAcreedor">
                            </select> 
                        </div>
        
                        <div class="form-group">
                            <label class="negrita">Cantidad</label>
                            <input type="number" class="form-control bg-amarillo text-danger col-6" id="txtImporte" value=>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Rubro</label>
                            <select class="form-control" id="cmbRubro">
                            </select> 
                        </div>
        
                        <div class="form-group">
                            <label class="negrita">Concepto</label>
                            <input type="text" class="form-control" id="txtConcepto" value='SN'>
                        </div>

                      
                        
                        <div class="form-group">
                            <label class="negrita">Recibido por</label>
                            <input type="text" class="form-control" id="txtRecibe" value=''>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Observaciones</label>
                            <input type="text" class="form-control" id="txtObs">
                        </div>

                       

                        <div class="form-group" id="nofact">
                            <label class="negrita">No. Factura / No. Recibo</label>
                            <input type="text" class="form-control" id="txtNoFactura">
                        </div>
                        
                        <hr class="solid"><hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    
                                </button>    
                            </div>
                            <div class="col-6">
                                <button class="btn btn-primary btn-xl btn-circle hand shadow" id="btnGuardarCheque">
                                    <i class="fal fa-save"></i>
                                    
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
                            <input type="text" class="form-control negrita bg-amarillo" id="txtNumeroChequeC">
                        </div>
                        
                                
                        <div class="form-group">
                            <label class="negrita">Cantidad</label>
                            <input type="number" class="form-control bg-amarillo text-danger col-6" id="txtImporteC" value=>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Concepto</label>
                            <input type="text" class="form-control" id="txtConceptoC" value=''>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Recibido por</label>
                            <input type="text" class="form-control" id="txtRecibeC" value=''>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Observaciones</label>
                            <input type="text" class="form-control" id="txtObsC">
                        </div>
                        
                        <hr class="solid"><hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    
                                </button>    
                            </div>
                            <div class="col-6">
                                <button class="btn btn-primary btn-xl btn-circle hand shadow" id="btnGuardarChequeC">
                                    <i class="fal fa-save"></i>
                                    
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
   

    //document.getElementById('cmbRubro').innerHTML = funciones.getComboRubros();
    api.rubros_listado('cmbRubro');

    //**************************************************** */
    // MENU NUEVO CHEQUE
    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        document.getElementById('cmbProyecto').value = document.getElementById('cmbProyectoCheques').value;

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

        document.getElementById('txtNumeroCheque').value = '';
        document.getElementById('txtImporte').value = '';
        document.getElementById('txtRecibe').value = '';
        document.getElementById('txtObs').value = '';
        
        document.getElementById('nofact').style = "visibility:hidden";
        document.getElementById('txtNoFactura').value = 'SN';

        $('#modalNuevo').modal('show');
    });

    let btnMenuChequeProveedor = document.getElementById('btnMenuChequeProveedor');
    btnMenuChequeProveedor.addEventListener('click',()=>{
        document.getElementById('lbDatosCheque').innerText = "Nuevo Cheque a Proveedor"
        GlobalSelectedTipoCheque = 'PROVEEDOR';
        //CARGA LA LISTA DE PROVEEDORES EN EL COMBO ACREEDOR
        api.proveedores_combo('cmbAcreedor');

        document.getElementById('txtNumeroCheque').value = '';
        document.getElementById('txtImporte').value = '';
        document.getElementById('txtRecibe').value = '';
        document.getElementById('txtObs').value = '';

        document.getElementById('nofact').style = "visibility:visible";
        document.getElementById('txtNoFactura').value = 'SN';

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


                btnGuardarCheque.disabled = true;
                btnGuardarCheque.innerHTML = ' <i class="fal fa-save fa-spin"></i>';

                let codproyecto = document.getElementById('cmbProyecto').value || 0;
                let nocontrato = document.getElementById('cmbAcreedor').value || 0;
                let codcuenta = document.getElementById('cmbCuenta');
                let numero = document.getElementById('txtNumeroCheque');
                let cantidad = document.getElementById('txtImporte');
                let concepto = document.getElementById('txtConcepto');
                let recibe = document.getElementById('txtRecibe');
                let rubro = document.getElementById('cmbRubro');
                let obs = document.getElementById('txtObs');
                let nofactura =  document.getElementById('txtNoFactura').value || 'SN';

                if(obs.value==''){obs.value='SN'};
                if(recibe.value==''){recibe.value='SN'};

                api.verificar_nocheque(codcuenta.value,numero.value)
                .then(()=>{

                    if(numero.value==''){
                        funciones.AvisoError('Indique el número de cheque emitido');

                        btnGuardarCheque.disabled = false;
                        btnGuardarCheque.innerHTML = ' <i class="fal fa-save"></i>';
                    }else{
                        if(Number(cantidad.value)>0){
                            //btnGuardarCheque.innerHTML = GlobalLoader;
                            switch (GlobalSelectedTipoCheque) {
                                case 'SUBCONTRATISTA':
                                    api.cheques_contratista_insertar(
                                        codproyecto,
                                        funciones.devuelveFecha('txtFecha'),
                                        nocontrato,
                                        0,
                                        codcuenta.value,
                                        numero.value,
                                        Number(cantidad.value),
                                        recibe.value,
                                        obs.value,
                                        rubro.value,
                                        'SUBCONTRATISTA',
                                        concepto.value)
                                    .then(()=>{
                                        funciones.Aviso('Cheque creado exitosamente!!');
                                        
                                        btnGuardarCheque.disabled = false;
                                        btnGuardarCheque.innerHTML = ' <i class="fal fa-save"></i>';

                                        $('#modalNuevo').modal('hide');
    
                                        let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                                        api.cheques_proyecto_todos(cmbProyectoCheques, 'tblCheques1','lbPresupuesto','lbSaldo','lbDiferencia');
                                    })
                                    .catch(()=>{
                                        funciones.AvisoError('No se pudo crear el cheque');

                                        btnGuardarCheque.disabled = false;
                                        btnGuardarCheque.innerHTML = ' <i class="fal fa-save"></i>';
                                    })        
                                    break;
                                case 'PROVEEDOR':
                                    api.cheques_proveedor_insertar(
                                        codproyecto,
                                        funciones.devuelveFecha('txtFecha'),
                                        0,
                                        nocontrato,
                                        codcuenta.value,
                                        numero.value,
                                        Number(cantidad.value),
                                        recibe.value,
                                        obs.value,
                                        rubro.value,
                                        'PROVEEDOR',
                                        concepto.value,
                                        nofactura)
                                    .then(()=>{
                                        funciones.Aviso('Cheque creado exitosamente!!');

                                        btnGuardarCheque.disabled = false;
                                        btnGuardarCheque.innerHTML = ' <i class="fal fa-save"></i>';

                                        $('#modalNuevo').modal('hide');
    
                                        let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                                        api.cheques_proyecto_todos(cmbProyectoCheques, 'tblCheques1','lbPresupuesto','lbSaldo','lbDiferencia');
                                    })
                                    .catch(()=>{
                                        funciones.AvisoError('No se pudo crear el cheque');

                                        btnGuardarCheque.disabled = false;
                                        btnGuardarCheque.innerHTML = ' <i class="fal fa-save"></i>';
                                    })        
                                    break;                            
                            }
                            //btnGuardarCheque.innerHTML = `<i class="fal fa-save"></i>`;
                        }else{
                            funciones.AvisoError('Indique el monto/cantidad del cheque');

                            btnGuardarCheque.disabled = false;
                            btnGuardarCheque.innerHTML = ' <i class="fal fa-save"></i>';
                        };
                    };
                })
                .catch(()=>{
                    funciones.AvisoError('Cheque ya existe')
                })

            }
        })      
    });

    //selector de proyectos para ver lista de cheques
    let cmbProyectoCheques = document.getElementById('cmbProyectoCheques');
    cmbProyectoCheques.addEventListener('change',()=>{
        let cmbProyectoC = document.getElementById('cmbProyectoCheques').value || 0;
        api.cheques_proyecto_todos(cmbProyectoC, 'tblCheques1','lbPresupuesto','lbSaldo','lbDiferencia');
    })

    //LISTADO DEL INICIO DE LA VISTA CHEQUES
    api.proyectos_combo_promise('cmbProyectoCheques')
    .then(async()=>{
        let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
        await api.cheques_proyecto_todos(cmbProyectoCheques, 'tblCheques1','lbPresupuesto','lbSaldo','lbDiferencia');
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
        if(Number(GlobalNivelUsuario)==1){
            GlobalSelectedTipoCheque = 'CONTRATANTE';
            //CONTRANTE DEL PROYECTO
            let codigo = document.getElementById('cmbContratanteC').value || 0;
            api.contratantes_proyectos_combo(codigo,'cmbProyectoC');
    
            document.getElementById('txtNumeroChequeC').value = '';
            document.getElementById('txtImporteC').value = '';
            document.getElementById('txtRecibeC').value = '';
            document.getElementById('txtObsC').value = '';
            $('#modalNuevoContratante').modal('show');
        }else{
            funciones.AvisoHablado('Usted no puede realizar esta opción, solicitela a su Administrador')
        }
        

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
                let concepto = document.getElementById('txtConceptoC');
                let recibe = document.getElementById('txtRecibeC');
                let obs = document.getElementById('txtObsC');

                if(obs.value==''){obs.value='SN'};
                if(recibe.value==''){recibe.value='SN'};

                //api.verificar_nocheque(cmbBancoC.value,numero.value)
                //.then(()=>{

                    if(numero.value==''){
                        funciones.AvisoError('Indique el número de cheque emitido');
                    }else{
                        if(Number(cantidad.value)>0){
                            //btnGuardarChequeC.innerHTML = GlobalLoader;

                            btnGuardarChequeC.disabled = true;
                            btnGuardarChequeC.innerHTML = ' <i class="fal fa-save fa-spin"></i>';

                            api.cheques_contratante_insertar(
                                        codproyecto,
                                        funciones.devuelveFecha('txtFechaC'),
                                        codcontratante,
                                        cmbBancoC.value,
                                        numero.value,
                                        Number(cantidad.value),
                                        recibe.value,
                                        obs.value,
                                        'CONTRATANTE',
                                        concepto.value)
                                    .then(()=>{
                                        funciones.Aviso('Cheque creado exitosamente!!');
                                        $('#modalNuevoContratante').modal('hide');
    
                                        let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                                        api.cheques_proyecto_todos(cmbProyectoCheques, 'tblCheques1','lbPresupuesto','lbSaldo','lbDiferencia');
                                    })
                                    .catch(()=>{
                                        funciones.AvisoError('No se pudo crear el cheque');
                                    })
                                //btnGuardarChequeC.innerHTML = `<i class="fal fa-save"></i>Guardar`;
                                btnGuardarChequeC.disabled = false;
                                btnGuardarChequeC.innerHTML = ' <i class="fal fa-save"></i>';
                            
                        }else{
                            funciones.AvisoError('Indique el monto/cantidad del cheque');
                        };
                    };
                //})
                //.catch(()=>{
                  //  funciones.AvisoError('Cheque ya existe')
                //})
                
            }
        })      
    });

  
    funciones.slideAnimationTabs();

    document.getElementById('cmbTipoCheque').addEventListener('change',()=>{
        funciones.FiltrarTabla('tbl_cheques','cmbTipoCheque')
    })

};

function initView(){
    getView();
    addListeners();
    setPermisos();
};


function deleteCheque(id){
    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este cheque?')
    .then((value)=>{
        if(value==true){

            api.cheques_delete(id)
            .then(()=>{
                funciones.Aviso('Cheque ELIMINADO exitosamente!!');
                let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                api.cheques_proyecto_todos(cmbProyectoCheques, 'tblCheques1','lbPresupuesto','lbSaldo','lbDiferencia');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo ELIMINAR el cheque')
            })

        }
    })
};

function setPermisos(){
    //permisoLb1 = div de los totales de cheques
    //permisoLb2 = tab de cheques recibidos
    switch (GlobalNivelUsuario) {
        case 1:
            document.getElementById('permisoLb1').style = "visibility:visible";
            document.getElementById('permisoLb2').style = "visibility:visible";
            break;

        case 2:
            document.getElementById('permisoLb1').style = "visibility:visible";
            document.getElementById('permisoLb2').style = "visibility:visible";
            break;

        case 3:
            document.getElementById('permisoLb1').style = "visibility:hidden";
            document.getElementById('permisoLb2').style = "visibility:hidden";
            document.getElementById('lbPresupuesto').style = "visibility:hidden";
            document.getElementById('lbSaldo').style = "visibility:hidden";
            break;

        default:
            break;
    }
}