function getView(){
    let view ={
        body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="dias-tab">
                            ${view.listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="clientes-tab">
                            ${view.tipos_cheque()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                           ${view.nuevo_cheque()}
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                           ${view.nuevo_cheque_contratante()}
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
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i></a>
                        </li>                           
                    </ul>
                </div>
            `
        },
        listado : ()=>{
            return `
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">

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

                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                        <div class="row" id="permisoLb1" name="admin">
                            <div class="col-4 ${get_permiso_visible()}">
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
                            <div class="col-4 ${get_permiso_visible()}">
                                <div class="form-group">
                                    <label>Diferencia</label>
                                    <h3 id="lbDiferencia" name="admin"></h3>
                                </div>
                            </div>
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
        </div>
        
        <div class="" id="btnFlotanteDerecha">
            <button class="btn btn-success btn-circle btn-xl" id="btnNuevo">
                +                        
            </button>
        </div>
        `
        },
        tipos_cheque:()=>{
            return `
                        <br><br><br><br><br>

                        <div class="row">
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                                <div class="card card-rounded border-success shadow hand" id="btnMenuChequeContratista">
                                    <div class="card-body p-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <i class="fal fa-bell negrita text-success" style="font-size:190%"></i>
                                            </div>
                                            <div class="col-9">
                                                <h4 class="negrita text-success">Pago a Sub-Contratista</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                                <div class="card card-rounded border-secondary shadow hand" id="btnMenuChequeProveedor">
                                    <div class="card-body p-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <i class="fal fa-box negrita text-secondary" style="font-size:190%"></i>
                                            </div>
                                            <div class="col-9">
                                                <h4 class="negrita text-secondary">Pago a Proveedores</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">

                                <div class="card card-rounded border-warning shadow hand" id="btnMenuChequeContratante">
                                    <div class="card-body p-4">
                                        <div class="row">
                                            <div class="col-3">
                                                <i class="fal fa-archive negrita text-warning" style="font-size:190%"></i>
                                            </div>
                                            <div class="col-9">
                                                <h4 class="negrita text-warning">Pagos Recibidos</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                              
                            </div>
                        </div>      
                        
                <button class="btn btn-bottom-left btn-secondary btn-circle btn-xl hand shadow" onclick="document.getElementById('tab-uno').click()" id="">
                    <i class="fal fa-arrow-left"></i>                        
                </button>
                        
            `
        },
        nuevo_cheque : ()=>{
            return `
            <div class="card card-rounded shadow p-2">
                <div class="card-body">
                    
                    
                        <h5 class="negrita text-danger" id="lbDatosCheque">Datos del Cheque</h5>
                        
                        <div class="form group">
                            <label class="negrita">Proyecto</label>
                            <select class="form-control" id="cmbProyecto">
                            </select>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Fecha:</label>
                                    <input type="date" class="form-control" id="txtFecha">
                                </div>  
                            </div>
                            <div class="col-6">
                                <div class="form-group" id="nofact">
                                    <label class="negrita">No. Factura / No. Recibo</label>
                                    <input type="text" class="form-control" id="txtNoFactura">
                                </div>
                            </div>
                        </div>

                         
                        
                        <div class="row">
                            <div class="col-6">
                                <div class="form group">
                                    <label class="negrita">Cuenta</label>
                                    <select class="form-control" id="cmbCuenta">
                                    </select>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">No. Cheque</label>
                                    <input type="text" class="form-control bg-amarillo negrita border-primary" id="txtNumeroCheque">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Acreedor</label>
                                    <div class="input-group">
                                        <select class="form-control" id="cmbAcreedor">
                                        </select>
                                        <button class="btn btn-success btn-circle hand" id="btnCrearProveedor"><i class="fal fa-plus"></i></button> 
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label class="negrita">Cantidad (Q)</label>
                                    <input type="number" class="form-control bg-amarillo border-danger text-danger" id="txtImporte" value=>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label class="negrita">Rubro</label>
                                        <select class="form-control" id="cmbRubro">
                                        </select> 
                                    </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label class="negrita">Concepto</label>
                                        <input type="text" class="form-control" id="txtConcepto" value='SN'>
                                    </div>
                            </div>
                        </div>
                                                
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label class="negrita">Recibido por</label>
                                        <input type="text" class="form-control" id="txtRecibe" value=''>
                                    </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <label class="negrita">Observaciones</label>
                                        <input type="text" class="form-control" id="txtObs">
                                    </div>
                            </div>
                        </div>
                        
                        <hr class="solid"><hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                 
                            </div>
                            <div class="col-6 text-right">
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-secondary btn-xl btn-circle hand shadow" onclick="document.getElementById('tab-dos').click()">
                                            <i class="fal fa-arrow-left"></i>                      
                                        </button>    
                                    </div>
                                    <div class="col-6 text-right">
                                        <button class="btn btn-owner btn-xl btn-circle hand shadow" id="btnGuardarCheque">
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
        nuevo_cheque_contratante : ()=>{
            return `
            <div class="card card-rounded shadow p-2">
                <div class="card-body">

                    <h5 class="modal-title" id="">Datos del Cheque Recibido</h5>

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Contratante</label>
                                    <select class="form-control" id="cmbContratanteC">
                                    </select> 
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form group">
                                    <label class="negrita">Proyecto</label>
                                    <select class="form-control" id="cmbProyectoC">
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <br>

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Fecha:</label>
                                    <input type="date" class="form-control" id="txtFechaC">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form group">
                                    <label class="negrita">Banco</label>
                                    <select class="form-control" id="cmbBancoC"></select>
                                </div>
                            </div>
                        </div>
                        
                        <br>

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">No. Cheque</label>
                                    <input type="text" class="form-control negrita bg-amarillo border-primary" id="txtNumeroChequeC">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Cantidad (Q)</label>
                                    <input type="number" class="form-control bg-amarillo text-danger border-danger" id="txtImporteC" value=>
                                </div>
                            </div>
                        </div>

                        <br>

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

                        <div class="row">
                            <div class="col-6">
                                 
                            </div>
                            <div class="col-6 text-right">

                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-secondary btn-xl btn-circle hand shadow" onclick="document.getElementById('tab-dos').click()">
                                            <i class="fal fa-arrow-left"></i>    
                                        </button>    
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-owner btn-xl btn-circle hand shadow" id="btnGuardarChequeC">
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
        modal_nuevo_proveedor:()=>{
            return `
            <div class="modal fade" id="modalNuevoProveedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-owner text-white">
                            <h5 class="modal-title" id="exampleModalLabel">Datos del Nuevo Proveedor</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="form-group">
                                <label class="negrita">Nombre del nuevo Proveedor</label>
                                <input type="text" class="form-control border-danger"  placeholder="Escriba el nombre del proveedor..." id="txtNuevoProveedor">
                            </div>   
                            
                            
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-owner btn-xl btn-circle hand shadow" id="btnGuardarNuevoProveedor">
                                        <i class="fal fa-save"></i>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML=  view.body(); 
    rootModal.innerHTML =  view.modal_nuevo_proveedor();
    
};

async function addListeners(){
   

    //document.getElementById('cmbRubro').innerHTML = funciones.getComboRubros();
    api.rubros_listado('cmbRubro');

    //**************************************************** */
    // MENU NUEVO CHEQUE
    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        document.getElementById('cmbProyecto').value = document.getElementById('cmbProyectoCheques').value;

        //$('#modalTiposCheque').modal('show');
        document.getElementById('tab-dos').click();
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
        document.getElementById('btnCrearProveedor').style = "visibility:hidden";
        document.getElementById('txtNoFactura').value = 'SN';

        //$('#modalNuevo').modal('show');
        document.getElementById('tab-tres').click();

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
        document.getElementById('btnCrearProveedor').style = "visibility:visible";
        document.getElementById('txtNoFactura').value = 'SN';

        //$('#modalNuevo').modal('show');
        document.getElementById('tab-tres').click();

    });


    let btnMenuChequeContratante = document.getElementById('btnMenuChequeContratante');
    btnMenuChequeContratante.addEventListener('click',()=>{ 
        if(Number(GlobalNivelUsuario)==1){
            GlobalSelectedTipoCheque = 'CONTRATANTE';
            //CONTRANTE DEL PROYECTO
            let codigo = document.getElementById('cmbContratanteC').value || 0;
            api.contratantes_proyectos_combo(codigo,'cmbProyectoC');
    
            document.getElementById('txtConceptoC').value = '';
            document.getElementById('txtNumeroChequeC').value = '';
            document.getElementById('txtImporteC').value = '';
            document.getElementById('txtRecibeC').value = '';
            document.getElementById('txtObsC').value = '';

            //$('#modalNuevoContratante').modal('show');
            document.getElementById('tab-cuatro').click();
        }else{
            funciones.AvisoHablado('Usted no puede realizar esta opción, solicitela a su Administrador')
        }
        

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

                                        //$('#modalNuevo').modal('hide');
                                        document.getElementById('tab-uno').click();
    
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

                                        //$('#modalNuevo').modal('hide');
                                        document.getElementById('tab-uno').click();

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
                                        //$('#modalNuevoContratante').modal('hide');
                                        btnGuardarChequeC.disabled = false;
                                        btnGuardarChequeC.innerHTML = ' <i class="fal fa-save"></i>';

                                        document.getElementById('tab-uno').click();

                                        let cmbProyectoCheques = document.getElementById('cmbProyectoCheques').value || 0;
                                        api.cheques_proyecto_todos(cmbProyectoCheques, 'tblCheques1','lbPresupuesto','lbSaldo','lbDiferencia');
                                    })
                                    .catch(()=>{
                                        funciones.AvisoError('No se pudo crear el cheque');
                                        btnGuardarChequeC.disabled = false;
                                        btnGuardarChequeC.innerHTML = ' <i class="fal fa-save"></i>';
                                    })
                            
                        }else{
                            funciones.AvisoError('Indique el monto/cantidad del cheque');
                        };
                    };
                
            }
        })      
    });

  
    funciones.slideAnimationTabs();

    document.getElementById('cmbTipoCheque').addEventListener('change',()=>{
        funciones.FiltrarTabla('tbl_cheques','cmbTipoCheque')
    })


    let btnCrearProveedor = document.getElementById('btnCrearProveedor');
    btnCrearProveedor.addEventListener('click',()=>{

        $("#modalNuevoProveedor").modal('show');
        document.getElementById('txtNuevoProveedor').value = '';


    });

    let btnGuardarNuevoProveedor = document.getElementById('btnGuardarNuevoProveedor');
    btnGuardarNuevoProveedor.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea Crear este nuevo Proveedor?')
        .then((value)=>{
            if(value==true){


                    let d = document.getElementById('txtNuevoProveedor').value || 'SN';
                    let t = 'PROVEEDOR'
                    
                    if(d=='SN'){funciones.AvisoError('Escriba el nombre del Proveedor nuevo');return};

                    btnGuardarNuevoProveedor.disabled = true;
                    btnGuardarNuevoProveedor.innerHTML = `<i class="fal fa-save fa-spin"></i>`;


                    api.config_proveedores_insert(d,t)
                    .then(async()=>{

                        btnGuardarNuevoProveedor.disabled = false;
                        btnGuardarNuevoProveedor.innerHTML = `<i class="fal fa-save"></i>`;

                        $('#modalNuevoProveedor').modal('hide');   
                        funciones.Aviso('Proveedor creado exitosamente!!');
                        //await getListado('PROVEEDORES')
                        api.proveedores_combo('cmbAcreedor');


                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear este PROVEEDOR');
                        btnGuardarNuevoProveedor.disabled = false;
                        btnGuardarNuevoProveedor.innerHTML = `<i class="fal fa-save"></i>`;
                    })
                

            }
        })


    });


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
            //document.getElementById('permisoLb2').style = "visibility:visible";
            break;

        case 2:
            document.getElementById('permisoLb1').style = "visibility:visible";
            //document.getElementById('permisoLb2').style = "visibility:visible";
            break;

        case 3:
            document.getElementById('permisoLb1').style = "visibility:hidden";
            //document.getElementById('permisoLb2').style = "visibility:hidden";
            document.getElementById('lbPresupuesto').style = "visibility:hidden";
            document.getElementById('lbSaldo').style = "visibility:hidden";
            break;

        default:
            break;
    }
}