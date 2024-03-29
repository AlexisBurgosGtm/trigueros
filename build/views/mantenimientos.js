function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="card col-12 card-rounded shadow p-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-10">
                            
                                <div class="form-group">
                                    <label>Seleccione un Elemento de la Lista</label>
                                    <select class="form-control negrita border-danger" id="cmbLista">
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
                        <div class="col-2">
                            <button class="btn btn-xl btn-circle btn-info hand shadow ${get_permiso_visible()}" id="btnConfig">
                                <i class="fal fa-cog"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br>    
            `
        },
        listado: ()=>{
            return `
                    <div class="card card-rounded shadow col-12">
                        <div class="card-body p-2">
                            <div class="table-responsive" id="tblContainer">
                                
                            </div>
                        </div>
                    </div>
                `
        },
        btnNuevo : ()=>{
            return `
                <div class="btn-nuevo" id="">
                    <button class="btn btn-success btn-circle btn-xl shadow" id="btnNuevo">
                        +                        
                    </button>
                </div>           
            `
        },
        modalClave : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalClave">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-danger text-white">
                            <h5 class="modal-title" id="">Cambio de Clave de Administrador</h5>
                        </div>
                        <div class="modal-body">

                            <div class="card">
                                <div class="form-group">
                                    <label>Clave de verificaciones</label>
                                    <input type="text" class="form-control" id="txtClave">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-outline-danger btn-xl btn-circle shadow hand" data-dismiss="modal">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-outline-danger btn-xl btn-circle hand shadow" id="btnClave">
                                            <i class="fal fa-save"></i>
                                        </button>
                                    </div>
                                    
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
                                    <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-owner btn-circle btn-xl hand shadow" id="btnBancosGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger btn-xl btn-circle hand shadow" id="btnBancosEliminar">
                                <i class="fal fa-trash"></i>
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
                                    <button class="btn btn-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-owner btn-circle hand shadow btn-xl" id="btnContratantesGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger btn-xl btn-circle hand shadow" id="btnContratantesEliminar">
                                <i class="fal fa-trash"></i>
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
                                    <button class="btn btn-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-owner btn-xl btn-circle hand shadow" id="btnRubrosGuardar">
                                        <i class="fal fa-save"></i>                                        
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger btn-xl btn-circle hand shadow" id="btnRubrosEliminar">
                                <i class="fal fa-trash"></i>
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
                                    <button class="btn btn-secondary btn-circle hand btn-xl shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-owner btn-circle hand btn-xl shadow" id="btnUsuarioGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger btn-xl btn-circle hand shadow" id="btnUsuarioEliminar">
                                <i class="fal fa-trash"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        modalProveedores : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalProveedores">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-trans-gradient text-white">
                            <h5 class="modal-title" id="">Datos del Proveedor</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="negrita">Nombre de la Empresa</label>
                                <input type="text" class="form-control" id="txtProveedoresDescripcion" value=''>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Nombre del Contacto</label>
                                <input type="text" class="form-control" id="txtProveedoresContacto" value=''>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Teléfono/s</label>
                                <input type="text" class="form-control" id="txtProveedoresTelefono" value=''>
                            </div>

                            <div class="form-group">
                                <label class="negrita">NIT</label>
                                <input type="text" class="form-control" id="txtProveedoresNit" value=''>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Nombre del Cheque</label>
                                <input type="text" class="form-control" id="txtProveedoresCheque" value=''>
                            </div>
                            
                                                    
                            <hr class="solid"><hr class="solid">

                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                        
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-owner btn-xl btn-circle hand shadow" id="btnProveedoresGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger btn-xl btn-circle hand shadow" id="btnProveedoresEliminar">
                                <i class="fal fa-trash"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            `
        },
        modalSubcontratistas : ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true"  id="modalSubcontratistas">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h5 class="modal-title" id="">Datos del Subcontratista</h5>
                        </div>
                        <div class="modal-body">

                            <div class="form-group">
                                <label class="negrita">Descripción</label>
                                <input type="text" class="form-control" id="txtSubcontratistasDescripcion" value='SN'>
                            </div>
                        
                            <div class="form-group">
                                <label class="negrita">Nombre del Contacto</label>
                                <input type="text" class="form-control" id="txtSubcontratistasContacto" value=''>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Teléfono/s</label>
                                <input type="text" class="form-control" id="txtSubcontratistasTelefono" value=''>
                            </div>

                            <div class="form-group">
                                <label class="negrita">NIT</label>
                                <input type="text" class="form-control" id="txtSubcontratistasNit" value=''>
                            </div>

                            <div class="form-group">
                                <label class="negrita">Nombre del Cheque</label>
                                <input type="text" class="form-control" id="txtSubcontratistasCheque" value=''>
                            </div>
                                                    
                            <hr class="solid"><hr class="solid">

                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-secondary btn-xl btn-circle hand shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-owner btn-circle hand shadow btn-xl" id="btnSubcontratistasGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>    
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger btn-xl btn-circle hand shadow" id="btnSubcontratistasEliminar">
                                <i class="fal fa-trash"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML= view.encabezado() + view.listado() + view.btnNuevo();
    rootModal.innerHTML = view.modalClave() + view.modalBancos() + view.modalContratantes() + view.modalRubros() + view.modalUsuarios() + view.modalProveedores() + view.modalSubcontratistas();
};

function addListeners(){

    //clave admin
    let btnConfig = document.getElementById('btnConfig');
    btnConfig.addEventListener('click',()=>{
        $('#modalClave').modal('show');   
    });

    document.getElementById('txtClave').value = GlobalConfigClave;

    let btnClave = document.getElementById('btnClave')
    btnClave.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea cambiar la clave de administrador?')
        .then((value)=>{
            if(value==true){
                if(Number(GlobalNivelUsuario)==1){
                    let nueva = document.getElementById('txtClave').value;
                    
                    btnClave.disabled = true;
                    btnClave.innerHTML = ' <i class="fal fa-save fa-spin"></i>';

                    api.config_setClave(nueva)
                    .then(()=>{
                        GlobalConfigClave = nueva;
                        funciones.Aviso('Clave cambiada exitosamente!!');
                        
                        btnClave.disabled = false;
                        btnClave.innerHTML = ' <i class="fal fa-save"></i>';
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo cambiar la clave');
                        btnClave.disabled = false;
                        btnClave.innerHTML = ' <i class="fal fa-save"></i>';
                    })
                }else{
                    funciones.AvisoHablado('Su nivel de usuario no le permite cambiar esta clave')
                }
            }
        })
        
    })


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
                if(Number(GlobalNivelUsuario)==1){
                    GlobalSelectedId = 0;
                    document.getElementById('txtBancosDescripcion').value = "";
                    document.getElementById('txtBancosNumero').value = "";
                    document.getElementById('btnBancosEliminar').style = "visibility:hidden";

                    $('#modalBancos').modal('show');   
                }else{
                    funcions.AvisoHablado('Usted no puede ver o editar la lista de Bancos, comuníquese con su administrador');   
                }
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
                if(Number(GlobalNivelUsuario)==1){
                    GlobalSelectedId = 0;
                    document.getElementById('txtUsuarioUser').value = "";
                    document.getElementById('txtUsuarioPass').value = "";
                    document.getElementById('btnUsuarioEliminar').style = "visibility:hidden";
                    
                    $('#modalUsuarios').modal('show');
                }else{
                    funcions.AvisoHablado('Usted no puede ver o editar la lista de Usuarios, comuníquese con su administrador');   
                };
                break;
            case 'PROVEEDORES':
                GlobalSelectedId = 0;
                document.getElementById('txtProveedoresDescripcion').value = "";
                document.getElementById('txtProveedoresContacto').value = "";
                document.getElementById('txtProveedoresTelefono').value = "";
                document.getElementById('txtProveedoresNit').value = "";
                document.getElementById('txtProveedoresCheque').value = "";
                document.getElementById('btnProveedoresEliminar').style = "visibility:hidden";
                    
                $('#modalProveedores').modal('show');
                break;
            case 'SUBCONTRATISTAS':
                GlobalSelectedId = 0;
                document.getElementById('txtSubcontratistasDescripcion').value = "";
                document.getElementById('btnSubcontratistasEliminar').style = "visibility:hidden";
                        
                $('#modalSubcontratistas').modal('show');
                break;    
        }

    });

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

                    get_btn_save_loader('btnBancosGuardar','SI')

                    api.config_bancos_insert(d,b,n)
                    .then(async()=>{
                        $('#modalBancos').modal('hide');   
                        funciones.Aviso('Cuenta creada exitosamente!!');
                        get_btn_save_loader('btnBancosGuardar','NO')
                        await getListado('BANCOS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear esta cuenta');
                        get_btn_save_loader('btnBancosGuardar','NO')
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtBancosDescripcion').value || 'CUENTA BANCO';
                    let b = document.getElementById('cmbBancosBanco').value;
                    let n = document.getElementById('txtBancosNumero').value || '0';
                    
                    get_btn_save_loader('btnBancosGuardar','SI');

                    api.config_bancos_update(GlobalSelectedId,d,b,n)
                    .then(async()=>{
                        $('#modalBancos').modal('hide');   
                        funciones.Aviso('Cuenta actualizada exitosamente!!');
                        get_btn_save_loader('btnBancosGuardar','NO');
                        await getListado('BANCOS');
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo actualizar esta cuenta');
                        get_btn_save_loader('btnBancosGuardar','NO');
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
                    if(name==GlobalConfigClave){

                        get_btn_delete_loader('btnBancosEliminar','SI');

                        api.config_bancos_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Cuenta eliminada exitosamente !!');
                            get_btn_delete_loader('btnBancosEliminar','NO');
                            await getListado('BANCOS');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar la cuenta');
                            get_btn_delete_loader('btnBancosEliminar','NO');
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
                    
                    get_btn_save_loader('btnContratantesGuardar','SI');

                    api.config_contratantes_insert(d,t)
                    .then(async()=>{
                        $('#modalContratantes').modal('hide');   
                        funciones.Aviso('Contratante creado exitosamente!!');
                        
                        get_btn_save_loader('btnContratantesGuardar','NO');

                        await getListado('CONTRATANTES')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear esta cuenta');
                        get_btn_save_loader('btnContratantesGuardar','NO');
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtContratantesDescripcion').value || 'SN';
                    let t = document.getElementById('txtContratantesTelefono').value || '0';
                    
                    get_btn_save_loader('btnContratantesGuardar','SI');

                    api.config_contratantes_update(GlobalSelectedId,d,t)
                    .then(async()=>{
                        $('#modalContratantes').modal('hide');   
                        funciones.Aviso('Contratante actualizado exitosamente!!');
                        get_btn_save_loader('btnContratantesGuardar','NO');

                        await getListado('CONTRATANTES')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo actualizar este contratista');
                        get_btn_save_loader('btnContratantesGuardar','NO');
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
                    if(name==GlobalConfigClave){

                        get_btn_delete_loader('btnContratantesEliminar','SI');

                        api.config_contratantes_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Contrantate eliminado exitosamente !!');
                            get_btn_delete_loader('btnContratantesEliminar','NO');
                            await getListado('CONTRATANTES');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar este contratante');
                            get_btn_delete_loader('btnContratantesEliminar','NO');
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
                    
                    get_btn_save_loader('btnRubrosGuardar','SI');

                    api.config_rubros_insert(d)
                    .then(async()=>{
                        $('#modalRubros').modal('hide');   
                        funciones.Aviso('Rubro creado exitosamente!!');
                        
                        get_btn_save_loader('btnRubrosGuardar','NO');

                        await getListado('RUBROS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear este rubro');
                        get_btn_save_loader('btnRubrosGuardar','NO');
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtRubrosDescripcion').value || 'SN';
                    get_btn_save_loader('btnRubrosGuardar','SI');
                    api.config_rubros_update(GlobalSelectedId,d)
                    .then(async()=>{
                        $('#modalRubros').modal('hide');   
                        funciones.Aviso('Rubro actualizado exitosamente!!');
                        get_btn_save_loader('btnRubrosGuardar','NO');
                        await getListado('RUBROS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo actualizar este rubro');
                        get_btn_save_loader('btnRubrosGuardar','NO');
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
                    if(name==GlobalConfigClave){

                        get_btn_delete_loader('btnRubrosEliminar','SI');

                        api.config_rubros_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Rubro eliminado exitosamente !!');
                            get_btn_delete_loader('btnRubrosEliminar','NO');
                            await getListado('RUBROS');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar este rubro');
                            get_btn_delete_loader('btnRubrosEliminar','NO');
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
                    
                    get_btn_save_loader('btnUsuarioGuardar','SI');

                    api.config_usuarios_insert(u,p,n)
                    .then(async()=>{
                        $('#modalUsuarios').modal('hide');   
                        funciones.Aviso('Usuario creado exitosamente!!');
                        
                        get_btn_save_loader('btnUsuarioGuardar','NO');

                        await getListado('USUARIOS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear este USUARIO');
                        get_btn_save_loader('btnUsuarioGuardar','NO');
                    })
                }else{ // se está editando
                    let u = document.getElementById('txtUsuarioUser').value;
                    let p = document.getElementById('txtUsuarioPass').value;
                    let n = document.getElementById('cmbUsuarioNivel').value;
                    
                    get_btn_save_loader('btnUsuarioGuardar','SI');

                    api.config_usuarios_edit(u,p,n,GlobalSelectedId)
                    .then(async()=>{
                        $('#modalUsuarios').modal('hide');   
                        funciones.Aviso('Usuario editado exitosamente!!');
                        get_btn_save_loader('btnUsuarioGuardar','NO');
                        await getListado('USUARIOS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo editar este USUARIO');
                        get_btn_save_loader('btnUsuarioGuardar','NO');
                    })
                }

            }
        })
    });

    let btnUsuarioEliminar = document.getElementById('btnUsuarioEliminar');
    btnUsuarioEliminar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea ELIMINAR este Usuario?')
        .then((value)=>{
            if(value==true){

                $('#modalUsuarios').modal('hide');   

                funciones.solicitarClave()
                .then((name)=>{
                    if(name==GlobalConfigClave){
                        
                        get_btn_delete_loader('btnUsuarioEliminar','SI');

                        api.config_usuarios_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Usuario eliminado exitosamente !!');
                            get_btn_delete_loader('btnUsuarioEliminar','NO');
                            await getListado('USUARIOS');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar este Usuario');
                            get_btn_delete_loader('btnUsuarioEliminar','NO');
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


    //** PROVEEDORES */
    let btnProveedoresGuardar = document.getElementById('btnProveedoresGuardar');
    btnProveedoresGuardar.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
        .then((value)=>{
            if(value==true){
                if(GlobalSelectedId==0){ //es nuevo

                    let d = document.getElementById('txtProveedoresDescripcion').value;
                    let contacto = document.getElementById('txtProveedoresContacto').value || 'SN';
                    let telefono = document.getElementById('txtProveedoresTelefono').value || '0';
                    let nit = document.getElementById('txtProveedoresNit').value || 'CF';
                    let cheque = document.getElementById('txtProveedoresCheque').value || 'SN';

                    let t = 'PROVEEDOR'
                    
                    get_btn_save_loader('btnProveedoresGuardar','SI');

                    api.config_proveedores_insert(d,t,contacto,telefono,nit,cheque)
                    .then(async()=>{
                        $('#modalProveedores').modal('hide');   
                        funciones.Aviso('Proveedor creado exitosamente!!');
                        
                        get_btn_save_loader('btnProveedoresGuardar','NO');
                        
                        await getListado('PROVEEDORES')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear este PROVEEDOR');
                        get_btn_save_loader('btnProveedoresGuardar','NO');
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtProveedoresDescripcion').value;
                    let contacto = document.getElementById('txtProveedoresContacto').value || 'SN';
                    let telefono = document.getElementById('txtProveedoresTelefono').value || '0';
                    let nit = document.getElementById('txtProveedoresNit').value || 'CF';
                    let cheque = document.getElementById('txtProveedoresCheque').value || 'SN';

                    let t = 'PROVEEDOR'
                    
                    get_btn_save_loader('btnProveedoresGuardar','SI');

                    api.config_proveedores_edit(GlobalSelectedId,d,t,contacto,telefono,nit,cheque)
                    .then(async()=>{
                        $('#modalProveedores').modal('hide');   
                        funciones.Aviso('Proveedor actualizado exitosamente!!');
                        get_btn_save_loader('btnProveedoresGuardar','NO');
                        await getListado('PROVEEDORES')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo editar este PROVEEDOR');
                        get_btn_save_loader('btnProveedoresGuardar','NO');
                    })
                }

            }
        })
    });

    let btnProveedoresEliminar = document.getElementById('btnProveedoresEliminar');
    btnProveedoresEliminar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea ELIMINAR este Proveedor?')
        .then((value)=>{
            if(value==true){

                $('#modalProveedores').modal('hide');   

                funciones.solicitarClave()
                .then((name)=>{
                    if(name==GlobalConfigClave){
                        
                        get_btn_delete_loader('btnProveedoresEliminar','SI');

                        api.config_proveedores_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Proveedor eliminado exitosamente !!');
                            get_btn_delete_loader('btnProveedoresEliminar','NO');
                            await getListado('PROVEEDORES');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar este Proveedor');
                            get_btn_delete_loader('btnProveedoresEliminar','NO');
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

    //** SUBCONTRATISTAS */
    let btnSubcontratistasGuardar = document.getElementById('btnSubcontratistasGuardar');
    btnSubcontratistasGuardar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea guardar estos datos?')
        .then((value)=>{
            if(value==true){
                if(GlobalSelectedId==0){ //es nuevo
                    let d = document.getElementById('txtSubcontratistasDescripcion').value;
                    let t = 'SUBCONTRATISTA'
                    
                    let contacto = document.getElementById('txtSubcontratistasContacto').value || 'SN';
                    let telefono = document.getElementById('txtSubcontratistasTelefono').value || '0';
                    let nit = document.getElementById('txtSubcontratistasNit').value || 'CF';
                    let cheque = document.getElementById('txtSubcontratistasCheque').value || 'SN';

                    get_btn_save_loader('btnSubcontratistasGuardar','SI');

                    api.config_proveedores_insert(d,t,contacto,telefono,nit,cheque)
                    .then(async()=>{
                        $('#modalSubcontratistas').modal('hide');   
                        funciones.Aviso('Subcontratista creado exitosamente!!');
                        
                        get_btn_save_loader('btnSubcontratistasGuardar','NO');

                        await getListado('SUBCONTRATISTAS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo crear este PROVEEDOR');
                        get_btn_save_loader('btnSubcontratistasGuardar','NO');
                    })
                }else{ // se está editando
                    let d = document.getElementById('txtSubcontratistasDescripcion').value;
                    let t = 'SUBCONTRATISTA'

                    let contacto = document.getElementById('txtSubcontratistasContacto').value || 'SN';
                    let telefono = document.getElementById('txtSubcontratistasTelefono').value || '0';
                    let nit = document.getElementById('txtSubcontratistasNit').value || 'CF';
                    let cheque = document.getElementById('txtSubcontratistasCheque').value || 'SN';
                    
                    get_btn_save_loader('btnSubcontratistasGuardar','SI');

                    api.config_proveedores_edit(GlobalSelectedId,d,t,contacto,telefono,nit,cheque)
                    .then(async()=>{
                        $('#modalSubcontratistas').modal('hide');   
                        funciones.Aviso('Subcontratista actualizado exitosamente!!');
                        
                        get_btn_save_loader('btnSubcontratistasGuardar','NO');

                        await getListado('SUBCONTRATISTAS')
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo editar este SUBCONTRATISTA');
                        get_btn_save_loader('btnSubcontratistasGuardar','NO');
                    })
                }

            }
        })

    });

    let btnSubcontratistasEliminar = document.getElementById('btnSubcontratistasEliminar');
    btnSubcontratistasEliminar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea ELIMINAR este Subcontratista?')
        .then((value)=>{
            if(value==true){

                $('#modalSubcontratistas').modal('hide');   

                funciones.solicitarClave()
                .then((name)=>{
                    if(name==GlobalConfigClave){
                        
                        get_btn_delete_loader('btnSubcontratistasEliminar','SI');

                        api.config_proveedores_delete(GlobalSelectedId)
                        .then(async()=>{
                            funciones.Aviso('Subcontratista eliminado exitosamente !!');
                            get_btn_delete_loader('btnSubcontratistasEliminar','NO');
                            await getListado('SUBCONTRATISTAS');
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se puedo eliminar este Subcontratista');
                            get_btn_delete_loader('btnSubcontratistasEliminar','NO');
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



};

function get_btn_save_loader(idbtn,cargando){

    let btn = document.getElementById(idbtn);
    
    if(cargando=='SI'){
        btn.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
        btn.disabled = true;
    }else{
        btn.innerHTML = `<i class="fal fa-save"></i>`;
        btn.disabled = false;
    }

};

function get_btn_delete_loader(idbtn,cargando){

    let btn = document.getElementById(idbtn);
    
    if(cargando=='SI'){
        btn.innerHTML = `<i class="fal fa-trash fa-spin"></i>`;
        btn.disabled = true;
    }else{
        btn.innerHTML = `<i class="fal fa-trash"></i>`;
        btn.disabled = false;
    }

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
            if(Number(GlobalNivelUsuario)==1){
                await api.config_bancos_lista('tblContainer');
            }else{
                funciones.AvisoHablado('Usted no puede ver o editar la lista de Bancos, comuníquese con su administrador')
            }           
            break;
        case 'CONTRATANTES':
            await api.config_contratantes_lista('tblContainer');
            break;

        case 'RUBROS':
            await api.config_rubros_lista('tblContainer');
            break;
        case 'USUARIOS':
            if(Number(GlobalNivelUsuario)==1){
                await api.config_usuarios_lista('tblContainer');
            }else{
                funciones.AvisoHablado('Usted no puede ver o editar la lista de Bancos, comuníquese con su administrador')
            } 
            break;
        case 'PROVEEDORES':
            await api.config_proveedores_lista('tblContainer');
            break;
        case 'SUBCONTRATISTAS':
            await api.config_subcontratistas_lista('tblContainer');
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


function getMenuRubros(codigo,descripcion){
    
    GlobalSelectedId = codigo;
    document.getElementById('txtRubrosDescripcion').value = descripcion;
    
    document.getElementById('btnRubrosEliminar').style = "visibility:visible";
    
    $('#modalRubros').modal('show');
    
};

function getMenuUsuarios(codigo,usuario,pass,nivel){
    GlobalSelectedId = codigo;

    document.getElementById('txtUsuarioUser').value = usuario;
    document.getElementById('txtUsuarioPass').value = pass;
    document.getElementById('cmbUsuarioNivel').value = nivel;

    document.getElementById('btnUsuarioEliminar').style = "visibility:visible";

    $('#modalUsuarios').modal('show');
};

function getMenuProveedores(codigo,descripcion,contacto,telefono,nit,cheque){

    GlobalSelectedId = codigo;
    document.getElementById('txtProveedoresDescripcion').value = descripcion;
    document.getElementById('txtProveedoresContacto').value = contacto;
    document.getElementById('txtProveedoresTelefono').value = telefono;
    document.getElementById('txtProveedoresNit').value = nit;
    document.getElementById('txtProveedoresCheque').value = cheque;


    document.getElementById('btnProveedoresEliminar').style = "visibility:visible";

    $('#modalProveedores').modal('show');

};

function proveedores_desactivar(id,st){

   funciones.Confirmacion('¿Está seguro que desea ACTIVAR/DESACTIVAR este Proveedor?')
   .then((value)=>{
        if(value==true){

            api.config_proveedores_desactivar(id,st)
            .then(()=>{
                funciones.Aviso('Proveedor actualizado exitosamente!!')
                getListado('PROVEEDORES');
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo actualizar')
            })

        }
   })

};


function getMenuSubcontratistas(codigo,descripcion,contacto,telefono,nit,cheque){

    GlobalSelectedId = codigo;
    document.getElementById('txtSubcontratistasDescripcion').value = descripcion;
    document.getElementById('btnSubcontratistasEliminar').style = "visibility:visible";

    document.getElementById('txtSubcontratistasContacto').value ='';
    document.getElementById('txtSubcontratistasTelefono').value ='';
    document.getElementById('txtSubcontratistasNit').value ='';
    document.getElementById('txtSubcontratistasCheque').value ='';

    $('#modalSubcontratistas').modal('show');

};

function subcoontratistas_desactivar(id,st){

    funciones.Confirmacion('¿Está seguro que desea ACTIVAR/DESACTIVAR este Subcontratista?')
    .then((value)=>{
         if(value==true){
 
             api.config_proveedores_desactivar(id,st)
             .then(()=>{
                 funciones.Aviso('Subcontratista actualizado exitosamente!!')
                 getListado('SUBCONTRATISTAS');
             })
             .catch(()=>{
                 funciones.AvisoError('No se pudo actualizar')
             })
 
         }
    })
 
 };