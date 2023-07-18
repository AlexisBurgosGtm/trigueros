function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="dias-tab">
                            ${view.encabezado() + view.listado() + view.btnNuevo()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="clientes-tab">
                            ${view.modalNuevoIngreso()}
                        </div>

                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.modalNuevoSalida()}
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            ${ view.modalDetalle()}
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
        encabezado: ()=>{
            return `
            
            `;
        },
        listado: ()=>{
            return `
            
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-4">    
                    
                    <h3 class="text-danger negrita">Listado de Cortes de Caja</h3>

                    <div class="form-group">
                        <label>Ver por Activos o Finalizados</label>
                        <select class="form-control col-6" id="cmbStatus">
                            <option value="NO">ACTIVOS</option>
                            <option value="SI">FINALIZADOS</option>
                        </select>
                    </div>

                    <table class="table table-responsive table-hover table-striped" id="tblListado">
                        <thead class="bg-secondary text-white">
                            <tr>
                                <td>No.</td>
                                <td>Fecha</td>
                                <td>Datos Cheque</td>
                                <td>Importe</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblCortes"></tbody>
                    </table>

                </div>    
            </div>
            `;
        },
        modalNuevoIngreso: ()=>{
            return `
                <div class="card card-rounded shadow col-12">
                    
                    <div class="card-body">

                        <h5 class="negrita text-success" id="">Datos de la Entrada</h5>

                        <div class="row">
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div class="form-group">
                                    <label class="negrita">Fecha</label>
                                    <input type="date" class="form-control" id="txtEntFecha">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div class="form-group">
                                    <label class="negrita">Cuenta</label>
                                    <select class="form-control" id="cmbEntCuenta"></select>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div class="form-group">
                                    <label class="negrita">Número de Cheque</label>
                                    <input type="text" class="form-control" id="txtEntNocheque" value='0'>
                                </div>
                            </div>
                        </div>
                        <br>

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Cantidad</label>
                                    <input type="number" class="form-control bg-amarillo text-danger negrita" id="txtEntImporte" value=0>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form-group">
                                    <label class="negrita">Recibe</label>
                                    <input type="text" class="form-control" id="txtEntRecibido" value='SN'>
                                </div>
                            </div>
                        </div>

                        
                        <hr class="solid">

                        <div class="row">
                            <div class="col-6 text-right">
                                 
                            </div>
                            <div class="col-6 text-right">
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-secondary btn-circle hand shadow btn-xl" onclick="document.getElementById('tab-uno').click()">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>    
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-owner btn-circle btn-xl hand shadow" id="btnEntGuardar">
                                            <i class="fal fa-save"></i>
                                        </button>    
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    
            </div>
            `;
        },
        modalNuevoSalida: ()=>{
            return `
            <div class="card card-rounded shadow col-12">
                 
                    <div class="card-body p-4">

                        <h5 class="negrita text-danger" id="">Datos de la Salida</h5>

                        <div class="row">
                            <div class="col-sm-12 col-md-3 col-xl-3 col-lg-3">
                                <div class="form-group">
                                    <label>Fecha</label>
                                    <input type="date" class="form-control" id="txtSalFecha">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-9 col-xl-9 col-lg-9">
                                <div class="form-group">
                                    <label>Proyecto</label>
                                    <!--<input type="text" class="form-control" id="txtSalProyecto">-->
                                    <select class="form-control" id="txtSalProyecto"></select>
                                </div>
                            </div>
                        </div>
                        <br>
                        

                        <div class="form-group">
                            <label>Acreedor</label>
                            <input type="text" class="form-control" id="txtSalAcreedor">
                        </div>
                       

                        <div class="form-group">
                            <label>Descripción</label>
                            <input type="text" class="form-control" id="txtSalDescripcion">
                        </div>

                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4">
                                <div class="form-group">
                                    <label>Rubro</label>
                                    <select class="form-control" id="cmbSalRubro"></select>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4">
                                <div class="form-group">
                                    <label>Factura</label>
                                    <input type="text" class="form-control" id="txtSalFactura">
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4">
                                <div class="form-group">
                                    <label>Importe</label>
                                    <input type="number" class="form-control bg-amarillo negrita border-danger text-danger" id="txtSalImporte" value=0>
                                </div>
                            </div>
                        </div>

                        
                        <hr class="solid">

                        <div class="row">
                            <div class="col-6">
                               
                            </div>
                            <div class="col-6 text-right">
                                    <div class="row">
                                        <div class="col-6">
                                            <button class="btn btn-secondary btn-circle hand shadow btn-xl" onclick="document.getElementById('tab-cuatro').click()">
                                                <i class="fal fa-arrow-left"></i>
                                            </button>    
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-owner btn-xl btn-circle hand shadow" id="btnSalidaGuardar">
                                                <i class="fal fa-save"></i>
                                            </button>    
                                        </div>
                                    </div>   
                            </div>
                        </div>

                    </div>
            </div>
            `;
        },
        modalDetalle: ()=>{
            return `
            <div class="card card-rounded shadow col-12">
                

                        <div class="card-body">
                            <div class="row">
                                <div class="col-8 text-left">
                                    <h5 class="negrita text-danger" id="">Movimientos del Corte</h5>
                            
                                </div>
                                <div class="col-4 text-right">
                                    <button class="btn btn-danger hand shadow" id="btnFinalizar"><i class="fal fa-list"></i> Finalizar</button>
                                </div>
                            </div>
                            
                            

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Creado el:</label>
                                        <h4 id="lbFechaCorte">0</h4>
                                    </div>
                                    <div class="form-group">
                                        <label>Monto:</label>
                                        <h4 class="negrita text-success" id="lbImporteCorte">0</h4>
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Total Salidas</label>
                                        <h4 class="negrita text-danger" id="lbCorteSalidas">0</h4>
                                    </div>
                                    <div class="form-group">
                                        <label>Saldo</label>
                                        <h4 class="negrita" id="lbCorteSaldo">0</h4>
                                    </div>    
                                </div>
                            </div>

                        <table class="table table-responsive table-hover table-striped table-bordered">
                            <thead class="bg-owner text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>PROYECTO/DESCRIPCION</td>
                                    <td>RUBRO/ACREEDOR</td>
                                    <td>IMPORTE</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblHistorial"></tbody>
                        </table>
           
                        <hr class="solid">             

                    </div>

                    

               

            </div>
            <div class="" id="btnFlotanteDerecha">
                <div class="row">
                    <button class="btn btn-success btn-circle btn-xl shadow hand" id="btnNuevoSalida">
                        +                       
                    </button>
                </div>
                <br><br>
                <div class="row">
                    <button class="btn btn-secondary btn-xl btn-circle shadow hand" onclick="document.getElementById('tab-uno').click()">
                        <i class="fal fa-arrow-left"></i>
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

    root.innerHTML =  view.body();

};

async function addListeners(){

    //PRINCIPAL
    let cmbStatus = document.getElementById('cmbStatus');
    cmbStatus.addEventListener('change',()=>{
        api.caja_lista('tblCortes',cmbStatus.value);
    });
    

    api.proyectos_combo_caja_promise('txtSalProyecto')
    .then(()=>{
        
    })


    let cmbProyecto = document.getElementById('txtSalProyecto');
    cmbProyecto.addEventListener('change',()=>{
        
    })

    //*********************************************/
    //********  INGRESO DE CORTES DE CAJA  ********/
    //*********************************************/
    
    api.cuentas_combo('cmbEntCuenta');


    let btnNuevoIngreso = document.getElementById('btnNuevoIngreso');
    btnNuevoIngreso.addEventListener('click',()=>{
        //if(cmbStatus.value=='NO'){
            document.getElementById('txtEntFecha').value = funciones.getFecha();
            //$('#modalNuevoIngreso').modal('show');
            document.getElementById('tab-dos').click();
        //}else{
          //  funciones.AvisoError('No se puede agregar más salidas a un corte finalizado')
        //}
        
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
                    btnEntGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
                    btnEntGuardar.disabled = true;

                    api.caja_insertar(cmbEntCuenta.value,txtEntNocheque,txtEntFecha,txtEntImporte.value,txtEntRecibido)
                    .then(()=>{
                        btnEntGuardar.innerHTML =  '<i class="fal fa-save"></i>';
                        btnEntGuardar.disabled = false;
                        funciones.Aviso('Ingreso registrado exitosamente!!')
                        api.caja_lista('tblCortes',cmbStatus.value);
                        //$('#modalNuevoIngreso').modal('hide');
                        document.getElementById('tab-uno').click();
                    })
                    .catch(()=>{
                        btnEntGuardar.innerHTML =  '<i class="fal fa-save"></i>';
                        btnEntGuardar.disabled = false;
                        funciones.AvisoError('No se pudo guardar este Ingreso');
                    })
                };                

            }
        })

    })


    //MODAL HISTORIAL O DETALLE DEL CORTE

    let btnNuevoSalida = document.getElementById('btnNuevoSalida');
    btnNuevoSalida.addEventListener('click',()=>{
        
        if(cmbStatus.value=='NO'){
        
            document.getElementById('txtSalFecha').value = funciones.getFecha();
            document.getElementById('txtSalProyecto').value = 'SN';
            document.getElementById('txtSalAcreedor').value = 'SN';
            document.getElementById('txtSalDescripcion').value = 'SN';
            document.getElementById('txtSalFactura').value = '000';
            document.getElementById('txtSalImporte').value = 0;
    
            //$('#modalNuevoSalida').modal('show');
            document.getElementById('tab-tres').click();

        }else{
            funciones.AvisoError('No se puede agregar más salidas a un corte finalizado')
        }

        

    });

    let btnFinalizar = document.getElementById('btnFinalizar');
    btnFinalizar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea FINALIZAR este corte?')
        .then((value)=>{
            if(value==true){
                
                //$('#modalDetalle').modal('hide');
                document.getElementById('tab-uno').click();

                funciones.solicitarClave()
                .then((name)=>{
                    
                    if(name.toString()==GlobalConfigClave.toString()){
                        api.caja_finalizar(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Corte finalizado exitosamente!!');
                            //LISTADO DE CORTES
                            await api.caja_lista('tblCortes','NO');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo finalizar este Corte')
                        })
                    }
                })

            }
        })
    })

    //*********************************************/
    // MOVIMIENTO DE SALIDA
    //*********************************************/

    api.rubros_listado('cmbSalRubro');

    let btnSalidaGuardar = document.getElementById('btnSalidaGuardar');
    btnSalidaGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea registrar este nuevo movimiento?')
        .then((value)=>{
            if(value==true){

                let fecha = funciones.devuelveFecha('txtSalFecha');
                let txtSalProyecto = document.getElementById('txtSalProyecto').value || '0';
                let txtSalAcreedor = document.getElementById('txtSalAcreedor').value || 'SN';
                let txtSalDescripcion = document.getElementById('txtSalDescripcion').value || 'SN';
                let cmbSalRubro = document.getElementById('cmbSalRubro').value;
                let txtSalFactura = document.getElementById('txtSalFactura').value || '000';
                let txtSalImporte = document.getElementById('txtSalImporte');

                btnSalidaGuardar.disabled = true;
                btnSalidaGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';


                if(Number(txtSalImporte.value) > 0){
                    api.caja_insertar_movimiento(GlobalSelectedId,fecha,txtSalProyecto,txtSalAcreedor,txtSalDescripcion,cmbSalRubro,txtSalFactura,Number(txtSalImporte.value))
                    .then(async()=>{
                        //funciones.showToast('Salida de caja registrada..')

                        funciones.Aviso('Movimiento guardado exitosamente!!');
                        await api.caja_historial_lista('tblHistorial',GlobalSelectedId, 'lbCorteSalidas', 'lbCorteSaldo',GlobalSelectedImporte);

                        btnSalidaGuardar.disabled = false;
                        btnSalidaGuardar.innerHTML = '<i class="fal fa-save"></i>';

                        document.getElementById('tab-cuatro').click();

                        if(txtSalProyecto.toString()=='0'){
                            //SI ES GASTO DE OFICINA NO GUARDA UN CHEQUE
                        }else{
                            //SI NO ES GASTO ES DE UN PROYECTO
                            //let cmbTipoGasto = document.getElementById('cmbTipoGasto');
                            //if(cmbTipoGasto.value=='PROVEEDOR'){
                                //inserta un cheque a proveedor
                                //api.cheques_proveedor_insertar(txtSalProyecto,fecha,0,0,0,'000',txtSalImporte.value,txtSalAcreedor,'GASTO RECIBIDO DE CAJA','VARIOS','PROVEEDOR',txtSalDescripcion)
                            //}else{
                                //inserta un cheque a subcontratista
                                //api.cheques_contratista_insertar(txtSalProyecto,'SUBCONTRATISTA')
                            //}
                        }



                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo guardar este movimiento');
                        btnSalidaGuardar.disabled = false;
                        btnSalidaGuardar.innerHTML = '<i class="fal fa-save"></i>';                        
                    })
                }else{
                    funciones.AvisoError('No se puede guardar una salida con valor cero');

                    btnSalidaGuardar.disabled = false;
                    btnSalidaGuardar.innerHTML = '<i class="fal fa-save"></i>';
                }


            }
        })          
    })

    funciones.slideAnimationTabs();

};

function getHistorialCorte(nocorte,fecha,importe){

    let st = document.getElementById('cmbStatus').value;

    if(st=='SI'){
        document.getElementById('btnFinalizar').style ="visibility:hidden";
    }else{
        document.getElementById('btnFinalizar').style ="visibility:visible";
    }

    GlobalSelectedId = nocorte;
    GlobalSelectedImporte = Number(importe);
    let lbFechaCorte = document.getElementById('lbFechaCorte');
    lbFechaCorte.innerText = fecha;
    let lbImporteCorte = document.getElementById('lbImporteCorte');
    lbImporteCorte.innerText = funciones.setMoneda(importe,'Q')

    api.caja_historial_lista('tblHistorial',GlobalSelectedId, 'lbCorteSalidas', 'lbCorteSaldo',GlobalSelectedImporte);

    //$('#modalDetalle').modal('show');
    document.getElementById('tab-cuatro').click();
};

function initView(){
    getView();
    addListeners();
};

function deleteMovimientoCaja(idmovimiento){

    let st = document.getElementById('cmbStatus').value;

    if(st=='SI'){
        funciones.AvisoHablado('No puede Eliminar un movimiento de un corte finalizado')
    }else{
        
        funciones.Confirmacion('¿Está seguro que desea Eliminar este movimiento?')
        .then((value)=>{
            if(value==true){
    
                //$('#modalDetalle').modal('hide');
    
                funciones.solicitarClave()
                .then((name)=>{
                    if(name.toString()==GlobalConfigClave.toString()){
                        api.caja_delete(idmovimiento)
                        .then(()=>{
                            funciones.Aviso('Movimiento eliminado exitosamente!!')
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo eliminar este movimiento')
                        })
                    }else{
                        funciones.AvisoError('Contraseña incorrecta');
                    }
                })
    
            }
        })

    }

    

};