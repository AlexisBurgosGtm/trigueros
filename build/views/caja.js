function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <h3>Listado de Cortes de Caja</h3>
                    </div>
                </div>
            </div>
            `;
        },
        listado: ()=>{
            return `
            <div class="row">
                <div class="card col-12">
                    <div class="form-group">
                        <label>Estado</label>
                        <select class="form-control col-6" id="cmbStatus">
                            <option value="NO">ACTIVOS</option>
                            <option value="SI">FINALIZADOS</option>
                        </select>
                    </div>

                    <table class="table table-responsive table-hover table-striped" id="tblListado">
                        <thead class="bg-trans-gradient text-white">
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
            </div>`;
        },
        modalNuevoIngreso: ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalNuevoIngreso">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title" id="">Datos de la Entrada</h5>
                        </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label class="negrita">Fecha</label>
                            <input type="date" class="form-control" id="txtEntFecha">
                        </div>
                        <div class="form-group">
                            <label class="negrita">Cuenta</label>
                            <select class="form-control" id="cmbEntCuenta"></select>
                        </div>
                        <div class="form-group">
                            <label class="negrita">Número de Cheque</label>
                            <input type="text" class="form-control" id="txtEntNocheque" value='0'>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Cantidad</label>
                            <input type="number" class="form-control col-4 bg-amarillo text-danger negrita" id="txtEntImporte" value=0>
                        </div>

                        <div class="form-group">
                            <label class="negrita">Recibe</label>
                            <input type="text" class="form-control" id="txtEntRecibido" value='SN'>
                        </div>

                        
                        <hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary btn-xl" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    Cancelar
                                </button>    
                            </div>
                            <div class="col-6">
                                <button class="btn btn-primary btn-xl" id="btnEntGuardar">
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
            `;
        },
        modalNuevoSalida: ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalNuevoSalida">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title" id="">Datos de la Salida</h5>
                        </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label>Fecha</label>
                            <input type="date" class="form-control col-6" id="txtSalFecha">
                        </div>

                        <div class="form-group">
                            <label>Proyecto</label>
                            <!--<input type="text" class="form-control" id="txtSalProyecto">-->
                            <select class="form-control" id="txtSalProyecto"></select>
                        </div>

                        <div class="form-group">
                            <label>Acreedor</label>
                            <input type="text" class="form-control" id="txtSalAcreedor">
                        </div>
                       

                        <div class="form-group">
                            <label>Descripción</label>
                            <input type="text" class="form-control" id="txtSalDescripcion">
                        </div>

                        <div class="form-group">
                            <label>Rubro</label>
                            <select class="form-control" id="cmbSalRubro"></select>
                        </div>

                        <div class="form-group">
                            <label>Factura</label>
                            <input type="text" class="form-control col-8" id="txtSalFactura">
                        </div>

                        <div class="form-group">
                            <label>Importe</label>
                            <input type="number" class="form-control bg-amarillo negrita text-danger col-8" id="txtSalImporte" value=0>
                        </div>


                        
                        <hr class="solid">

                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-outline-secondary btn-xl" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    Cancelar
                                </button>    
                            </div>
                            <div class="col-6">
                                <button class="btn btn-info btn-xl" id="btnSalidaGuardar">
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
            `;
        },
        modalDetalle: ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalDetalle">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info text-white">
                            <h5 class="modal-title" id="">Movimientos del Corte</h5>
                            <button class="btn btn-danger shadow" id="btnFinalizar">
                                <i class="fal fa-check"></i>Finalizar
                            </button>
                        </div>

                        <div class="modal-body">
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
                            <thead class="bg-trans-gradient text-white">
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

                    <div class="modal-footer">
                    </div>

                    </div>
                </div>

                <div class="" id="btnFlotanteDerecha">
                    <div class="row">
                        <button class="btn btn-danger btn-circle btn-xl shadow" id="btnNuevoSalida">
                            -                       
                        </button>
                    </div>
                    <br><br>
                    <div class="row">
                        <button class="btn btn-danger btn-sm shadow" data-dismiss="modal">
                            <<-Atrás                       
                        </button>
                    </div>
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

    root.innerHTML = view.encabezado() + view.listado() + view.btnNuevo() + view.modalNuevoIngreso() + view.modalDetalle() + view.modalNuevoSalida();

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
            $('#modalNuevoIngreso').modal('show');
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
                    btnEntGuardar.innerHTML = GlobalMiniLoader;
                    btnEntGuardar.enabled = false;

                    api.caja_insertar(cmbEntCuenta.value,txtEntNocheque,txtEntFecha,txtEntImporte.value,txtEntRecibido)
                    .then(()=>{
                        btnEntGuardar.innerHTML =  '<i class="fal fa-save"></i>Guardar';
                        btnEntGuardar.enabled = true;
                        funciones.Aviso('Ingreso registrado exitosamente!!')
                        api.caja_lista('tblCortes',cmbStatus.value);
                        $('#modalNuevoIngreso').modal('hide');
                    })
                    .catch(()=>{
                        btnEntGuardar.innerHTML =  '<i class="fal fa-save"></i>Guardar';
                        btnEntGuardar.enabled = true;
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
    
            $('#modalNuevoSalida').modal('show');

        }else{
            funciones.AvisoError('No se puede agregar más salidas a un corte finalizado')
        }

        

    });

    let btnFinalizar = document.getElementById('btnFinalizar');
    btnFinalizar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea FINALIZAR este corte?')
        .then((value)=>{
            if(value==true){
                
                $('#modalDetalle').modal('hide');

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

                if(Number(txtSalImporte.value) > 0){
                    api.caja_insertar_movimiento(GlobalSelectedId,fecha,txtSalProyecto,txtSalAcreedor,txtSalDescripcion,cmbSalRubro,txtSalFactura,Number(txtSalImporte.value))
                    .then(async()=>{
                        //funciones.showToast('Salida de caja registrada..')

                        funciones.Aviso('Movimiento guardado exitosamente!!');
                        await api.caja_historial_lista('tblHistorial',GlobalSelectedId, 'lbCorteSalidas', 'lbCorteSaldo',GlobalSelectedImporte);

                                                
                        $('#modalNuevoSalida').modal('hide');



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
                        funciones.AvisoError('No se pudo guardar este movimiento')                        
                    })
                }else{
                    funciones.AvisoError('No se puede guardar una salida con valor cero');
                }


            }
        })          
    })



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

    $('#modalDetalle').modal('show');

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
    
                $('#modalDetalle').modal('hide');
    
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