function getView(){
    let view = {
        encabezado: ()=>{
            return `
                
                    <div class="card">
                        <div class="form-group">
                            <label>Seleccione un Elemento de la Lista</label>
                            <select class="form-control" id="cmbLista">
                                <option value="BITACORA">BITACORA</option>    
                                <option value="BANCOS">BANCOS</option>
                                <option value="CONTRATANTES">CONTRATANTES</option>
                                <option value="PROVEEDORES">PROVEEDORES</option>
                                <option value="SUBCONTRATISTAS">SUBCONTRATISTAS</option>
                                <option value="RUBROS">RUBROS</option>
                                <option value="USUARIOS">USUARIOS</option>
                            </select>
                        </div>
                    </div>
                
            `
        },
        listado: ()=>{
            return `
                    <div class="card">
                        <div class="table-responsive" id="tblContainer">
                            
                        </div>
                    </div>
                `
        },
        btnNuevo : ()=>{
            return `
                <div class="" id="btnFlotanteDerecha">
                    <button class="btn btn-success btn-circle btn-xl shadow" id="btnNuevo">
                        +                        
                    </button>
                </div>           
            `
        },
        modalBancos : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalBancos">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title" id="">Datos de la Cuenta de Banco</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="negrita">Descripción</label>
                                <input type="text" class="form-control" id="txtBancosDescripcion" value='SN'>
                            </div>
                            
                            <div class="form-group">
                                <label class="negrita">Banco</label>
                                <select class="form-control" id="cmbBancosBanco">
                                </select> 
                            </div>

                            <div class="form-group">
                                <label class="negrita">No. Cuenta</label>
                                <input type="text" class="form-control negrita" id="txtBancosNumero">
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
                                    <button class="btn btn-primary btn-xl" id="btnBancosGuardar">
                                        <i class="fal fa-save"></i>
                                        Guardar
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-danger btn-xl shadow" id="btnBancosEliminar">
                                <i class="fal fa-trash"></i>Eliminar
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        modalContratantes : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalContratantes">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-warning text-white">
                            <h5 class="modal-title" id="">Datos del Contratante</h5>
                        </div>
                        <div class="modal-body">
                            
                            <div class="form-group">
                                <label class="negrita">Contratante:</label>
                                <input type="text" class="form-control negrita" id="txtContratantesDescripcion">
                            </div>

                            <div class="form-group">
                                <label class="negrita">Teléfono:</label>
                                <input type="number" class="form-control negrita" id="txtContratantesTelefono">
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
                                    <button class="btn btn-primary btn-xl" id="btnContratantesGuardar">
                                        <i class="fal fa-save"></i>
                                        Guardar
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-danger btn-xl shadow" id="btnContratantesEliminar">
                                <i class="fal fa-trash"></i>
                                Eliminar
                            </button>    
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        modalRubros : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalRubros">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info text-white">
                            <h5 class="modal-title" id="">Datos del Rubro</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="negrita">Descripción</label>
                                <input type="text" class="form-control" id="txtRubrosDescripcion" value='SN'>
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
                                    <button class="btn btn-primary btn-xl" id="btnRubrosGuardar">
                                        <i class="fal fa-save"></i>
                                        Guardar
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-danger btn-xl shadow" id="btnRubrosEliminar">
                                <i class="fal fa-trash"></i>Eliminar
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        modalUsuarios : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalUsuarios">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title" id="">Datos del usuario</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="negrita">Usuario</label>
                                <input type="text" class="form-control" id="txtUsuarioUser">
                            </div>
                            <div class="form-group">
                                <label class="negrita">Contraseña</label>
                                <input type="text" class="form-control" id="txtUsuarioPass">
                            </div>
                            <div class="form-group">
                                <label class="negrita">Nivel</label>
                                <select class="form-control" id="cmbUsuarioNivel">
                                    <option value="1">ADMINISTRADOR</option>
                                    <option value="2">SEMI-ADMINISTRADOR</option>
                                    <option value="3">OPERADOR</option>
                                </select>
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
                                    <button class="btn btn-primary btn-xl" id="btnUsuarioGuardar">
                                        <i class="fal fa-save"></i>
                                        Guardar
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-danger btn-xl shadow" id="btnUsuarioEliminar">
                                <i class="fal fa-trash"></i>Eliminar
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML= view.encabezado() + view.listado() + view.btnNuevo();
    rootModal.innerHTML = view.modalBancos() + view.modalContratantes() + view.modalRubros();
};

function addListeners(){

    document.getElementById('cmbBancosBanco').innerHTML = funciones.getComboBancos();

    let cmbLista = document.getElementById('cmbLista');
    cmbLista.addEventListener('change',async()=>{
        await getListado(cmbLista.value);
    })

    getListado(cmbLista.value);

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        let tipo = document.getElementById('cmbLista').value;
        switch (tipo) {
            case 'BANCOS':
                GlobalSelectedId = 0;
                document.getElementById('txtBancosDescripcion').value = "";
                document.getElementById('txtBancosNumero').value = "";
                document.getElementById('btnBancosEliminar').style = "visibility:hidden";

                $('#modalBancos').modal('show');   
                         
                break;
            case 'CONTRATANTES':
                GlobalSelectedId = 0;
                document.getElementById('txtContratantesDescripcion').value = "";
                document.getElementById('txtContratantesTelefono').value = "";
                document.getElementById('btnContratantesEliminar').style = "visibility:hidden";

                $('#modalContratantes').modal('show');   

                break;
            case 'RUBROS':
                GlobalSelectedId = 0;
                document.getElementById('txtRubrosDescripcion').value = "";
                document.getElementById('btnRubrosEliminar').style = "visibility:hidden";

                $('#modalRubros').modal('show');
                break;
            case 'USUARIOS':
                GlobalSelectedId = 0;
                document.getElementById('txtUsuarioUser').value = "";
                document.getElementById('txtUsuarioPass').value = "";
                document.getElementById('btnUsuarioEliminar').style = "visibility:hidden";
                
                $('#modalUsuarios').modal('show');
                break;

        }

    })

    //**** BANCOS ***//
    let btnBancosGuardar = document.getElementById('btnBancosGuardar');
    btnBancosGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
        .then((value)=>{
            if(value==true){
                if(GlobalSelectedId==0){ //es nuevo
                    let d = document.getElementById('txtBancosDescripcion').value || 'CUENTA BANCO';
                    let b = document.getElementById('cmbBancosBanco').value;
                    let n = document.getElementById('txtBancosNumero').value || '0';
                    api.config_bancos_insert(d,b,n)
                    .then(async()=>{
                        $('#modalBancos').modal('hide');   
                        funciones.Aviso('Cuenta creada exitosamente!!');
                        await getListado('BANCOS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear esta cuenta')
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtBancosDescripcion').value || 'CUENTA BANCO';
                    let b = document.getElementById('cmbBancosBanco').value;
                    let n = document.getElementById('txtBancosNumero').value || '0';
                    api.config_bancos_update(GlobalSelectedId,d,b,n)
                    .then(async()=>{
                        $('#modalBancos').modal('hide');   
                        funciones.Aviso('Cuenta actualizada exitosamente!!');
                        await getListado('BANCOS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo actualizar esta cuenta')
                    })
                }

            }
        })
        
    });

    let btnBancosEliminar = document.getElementById('btnBancosEliminar');
    btnBancosEliminar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea ELIMINAR esta Cuenta?')
        .then((value)=>{
            if(value==true){
                $('#modalBancos').modal('hide'); 

                funciones.solicitarClave()
                .then((name)=>{
                    if(name==GlobalPassUsuario){
                        api.config_bancos_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Cuenta eliminada exitosamente !!')
                            await getListado('BANCOS');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar la cuenta')
                        })
                    }else{
                        funciones.AvisoError('Contraseña Incorrecta');    
                    }
                })
                .catch(()=>{
                    funciones.AvisoError('Contraseña Incorrecta');
                })

           }
       }) 

            
       
    });

    //**** CONTRATANTES ***//
    let btnContratantesGuardar = document.getElementById('btnContratantesGuardar');
    btnContratantesGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
        .then((value)=>{
            if(value==true){
                if(GlobalSelectedId==0){ //es nuevo
                    let d = document.getElementById('txtContratantesDescripcion').value || 'SN';
                    let t = document.getElementById('txtContratantesTelefono').value || '0';
                    api.config_contratantes_insert(d,t)
                    .then(async()=>{
                        $('#modalContratantes').modal('hide');   
                        funciones.Aviso('Contratante creado exitosamente!!');
                        await getListado('CONTRATANTES')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear esta cuenta')
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtContratantesDescripcion').value || 'SN';
                    let t = document.getElementById('txtContratantesTelefono').value || '0';
                    api.config_contratantes_update(GlobalSelectedId,d,t)
                    .then(async()=>{
                        $('#modalContratantes').modal('hide');   
                        funciones.Aviso('Contratante actualizado exitosamente!!');
                        await getListado('CONTRATANTES')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo actualizar este contratista')
                    })
                }

            }
        })
        
    });

    let btnContratantesEliminar = document.getElementById('btnContratantesEliminar');
    btnContratantesEliminar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea ELIMINAR este Contratante?')
        .then((value)=>{
            if(value==true){
                $('#modalContratantes').modal('hide');   

                funciones.solicitarClave()
                .then((name)=>{
                    if(name==GlobalPassUsuario){
                        api.config_contratantes_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Contrantate eliminado exitosamente !!')
                            await getListado('CONTRATANTES');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar este contratante')
                        })
                    }else{
                        funciones.AvisoError('Contraseña Incorrecta');    
                    }
                })
                .catch(()=>{
                    funciones.AvisoError('Contraseña Incorrecta');
                })

           }
       }) 

            
       
    });


    //**** RUBROS ***//
    let btnRubrosGuardar = document.getElementById('btnRubrosGuardar');
    btnRubrosGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
        .then((value)=>{
            if(value==true){
                if(GlobalSelectedId==0){ //es nuevo
                    let d = document.getElementById('txtRubrosDescripcion').value || 'SN';
                    
                    api.config_rubros_insert(d)
                    .then(async()=>{
                        $('#modalRubros').modal('hide');   
                        funciones.Aviso('Rubro creado exitosamente!!');
                        await getListado('RUBROS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear este rubro')
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtRubrosDescripcion').value || 'SN';
                    
                    api.config_rubros_update(GlobalSelectedId,d)
                    .then(async()=>{
                        $('#modalRubros').modal('hide');   
                        funciones.Aviso('Rubro actualizado exitosamente!!');
                        await getListado('RUBROS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo actualizar este rubro')
                    })
                }

            }
        })

    });

    let btnRubrosEliminar = document.getElementById('btnRubrosEliminar');
    btnRubrosEliminar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea ELIMINAR este Rubro?')
        .then((value)=>{
            if(value==true){
                $('#modalRubros').modal('hide');   

                funciones.solicitarClave()
                .then((name)=>{
                    if(name==GlobalPassUsuario){
                        api.config_rubros_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Rubro eliminado exitosamente !!')
                            await getListado('RUBROS');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar este rubro')
                        })
                    }else{
                        funciones.AvisoError('Contraseña Incorrecta');    
                    }
                })
                .catch(()=>{
                    funciones.AvisoError('Contraseña Incorrecta');
                })

           }
       }) 

    });

    //*** USUARIOS   ****/
    let btnUsuarioGuardar = document.getElementById('btnUsuarioGuardar');
    btnUsuarioGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
        .then((value)=>{
            if(value==true){
                if(GlobalSelectedId==0){ //es nuevo
                    let u = document.getElementById('txtUsuarioUser').value;
                    let p = document.getElementById('txtUsuarioPass').value;
                    let n = document.getElementById('cmbUsuarioNivel').value;
                    
                    api.config_usuarios_insert(u,p,n)
                    .then(async()=>{
                        $('#modalUsuarios').modal('hide');   
                        funciones.Aviso('Usuario creado exitosamente!!');
                        await getListado('USUARIOS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear este USUARIO')
                    })
                }else{ // se está editando
                    let u = document.getElementById('txtUsuarioUser').value;
                    let p = document.getElementById('txtUsuarioPass').value;
                    let n = document.getElementById('cmbUsuarioNivel').value;
                    
                    api.config_usuarios_edit(u,p,n,GlobalSelectedId)
                    .then(async()=>{
                        $('#modalUsuarios').modal('hide');   
                        funciones.Aviso('Usuario editado exitosamente!!');
                        await getListado('USUARIOS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo editar este USUARIO')
                    })
                }

            }
    })

};

function initView(){
    getView();
    addListeners();
};

async function getListado(tipo){
    switch (tipo) {
        case 'BITACORA':
            await api.bitacora_lista('tblContainer');

            break;
        case 'BANCOS':
            await api.config_bancos_lista('tblContainer');           
            break;
        case 'CONTRATANTES':
            await api.config_contratantes_lista('tblContainer');
            break;

        case 'RUBROS':
            await api.config_rubros_lista('tblContainer');
            break;
        case 'USUARIOS':
            await api.config_usuarios_lista('tblContainer');
            break;
        default:
            document.getElementById('tblContainer').innerHTML = `<b class="text-danger">Opción en construcción</b>`
            break;
        
    }

};

function getMenuBancos(codcuenta,descripcion,banco,numero){
    
    GlobalSelectedId = codcuenta;
    document.getElementById('txtBancosDescripcion').value = descripcion;
    document.getElementById('cmbBancosBanco').value = banco;
    document.getElementById('txtBancosNumero').value = numero;
    document.getElementById('btnBancosEliminar').style = "visibility:visible";
    
    $('#modalBancos').modal('show');
    
};


function getMenuContratantes(codcontratante,descripcion,telefono){
    
    GlobalSelectedId = codcontratante;
    document.getElementById('txtContratantesDescripcion').value = descripcion;
    document.getElementById('txtContratantesTelefono').value = telefono;

    document.getElementById('btnContratantesEliminar').style = "visibility:visible";
    $('#modalContratantes').modal('show');   
};


function getMenuRubros(codcuenta,descripcion,banco,numero){
    
    GlobalSelectedId = codcuenta;
    document.getElementById('txtBancosDescripcion').value = descripcion;
    document.getElementById('cmbBancosBanco').value = banco;
    document.getElementById('txtBancosNumero').value = numero;
    document.getElementById('btnBancosEliminar').style = "visibility:visible";
    
    $('#modalBancos').modal('show');
    
};

function getMenuUsuarios(codigo,usuario,pass,nivel){
    GlobalSelectedId = codcuenta;
    $('#modalBancos').modal('show');
};