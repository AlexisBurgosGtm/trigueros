function getView(){
    let view = {
        body:()=>{
            return `
           
            <div class="card card-rounded col-12 shadow p-4">
                <div class="card-body">
                
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="form-group">
                                <label>Seleccione un tipo de Acreedor</label>
                                <select class="form-control negrita text-danger border-danger" id="cmbTipo">
                                    <option value="PROVEEDOR">LISTADO DE PROVEEDORES</option>
                                    <option value="SUBCONTRATISTA">LISTADO DE SUBCONTRATISTAS</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="form-group">
                                <label>Búsqueda</label>
                                <input type="text" placeholder="Escriba para buscar..." class="form-control border-danger negrita text-danger" id="txtBuscar" oninput="funciones.FiltrarTabla('tblData','txtBuscar')">
                            </div>
                        </div>
                    </div>

                    <br>
                    
                    <table class="table table-responsive col-12" id="tblData">
                        <thead class="bg-secondary text-white">
                            <tr>
                                <td></td>
                                <td>NOMBRE EMPRESA / ACTIVO</td>
                                <td>CONTACTO / TELEFONO</td>
                                <td>NOMBRE CHEQUE / NIT</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblDatos"></tbody>
                    </table>

                </div>
            </div>

            <button class="btn btn-nuevo btn-circle btn-success btn-xl hand shadow" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
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
                            
                                                    
                            <hr class="solid">

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
                                                    
                            <hr class="solid">

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
                    

                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.body() + view.modalProveedores() + view.modalSubcontratistas();

};

function addEventListeners(){
   

    document.getElementById('cmbTipo').addEventListener('change',()=>{
        switch (document.getElementById('cmbTipo').value) {
            case 'PROVEEDOR':
                proveedores_lista('tblDatos');
                break;
            case 'SUBCONTRATISTA':
                subcontratistas_lista('tblDatos');
                break;
        }
    });


    proveedores_lista('tblDatos');


    document.getElementById('btnNuevo').addEventListener('click',()=>{
        switch (document.getElementById('cmbTipo').value) {
            case 'PROVEEDOR':
                document.getElementById('txtProveedoresDescripcion').value='';
                document.getElementById('txtProveedoresContacto').value='';
                document.getElementById('txtProveedoresTelefono').value='';
                document.getElementById('txtProveedoresNit').value='';
                document.getElementById('txtProveedoresCheque').value='';

                $("#modalProveedores").modal('show');
                break;
            case 'SUBCONTRATISTA':
                document.getElementById('txtSubcontratistasContacto').value='';
                document.getElementById('txtSubcontratistasTelefono').value='';
                document.getElementById('txtSubcontratistasNit').value='';
                document.getElementById('txtSubcontratistasCheque').value='';

                $("#modalSubcontratistas").modal('show');
                break;
        }
    });


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
                        
                        proveedores_lista('tblDatos');
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
                        proveedores_lista('tblDatos');
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo editar este PROVEEDOR');
                        get_btn_save_loader('btnProveedoresGuardar','NO');
                    })
                }

            }
        })
    });


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

                        subcontratistas_lista('tblDatos');
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

                        subcontratistas_lista('tblDatos');
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo editar este SUBCONTRATISTA');
                        get_btn_save_loader('btnSubcontratistasGuardar','NO');
                    })
                }

            }
        })

    });


};

function initView(){

    getView();
    addEventListeners();

};


function proveedores_lista(idContainer){

    let container = document.getElementById(idContainer)
    container.innerHTML = GlobalLoader;

    let strActivo = '';

    let str = '';
    
    let data = {tipo:'PROVEEDOR'}
    let url = GlobalUrlBackend + '/acreedores/listado';
    axios.post(url,data)
    .then((response) => {
        try {
            const data = response.data.recordset;
            data.map((rows) => {
                if(rows.ACTIVO=='NO'){strActivo='<b class="text-danger">DESACTIVADO</b>'}else{strActivo=''}
                str = str + `<tr class="border-info border-bottom">
                                            <td>
                                                <button class="hidden btn btn-sm btn-outline-danger hand btn-circle" 
                                                    onclick="proveedores_desactivar('${rows.CODIGO}','${rows.ACTIVO}')">
                                                    <i class="fal fa-sync"></i>
                                                </button>
                                            </td>
                                            <td>${rows.DESCRIPCION}
                                                <br>
                                                ${strActivo}
                                            </td>
                                            <td>${rows.CONTACTO}
                                                <br>
                                                <small>Tel: ${rows.TELEFONO}</small>
                                            </td>
                                            <td>${rows.CHEQUE}
                                                <br>
                                                <small>NIT: ${rows.NIT}</small>
                                            </td>
                                            <td>
                                                <button class="hidden btn btn-sm btn-primary btn-circle hand" 
                                                    onclick="getMenuProveedores(${rows.CODIGO},'${rows.DESCRIPCION}','${rows.CONTACTO}','${rows.TELEFONO}','${rows.NIT}','${rows.CHEQUE}')">
                                                    <i class="fal fa-edit"></i>
                                                </button>
                                            </td>
                                        </tr>`
            })
            container.innerHTML = str;
        } catch (err) {
            str = 'AGREGUE DATOS...';
            container.innerHTML = str;
        }
    }, (error) => {
            str = 'ERROR...';
            container.innerHTML = str;
    });           
};

function subcontratistas_lista(idContainer){
    let container = document.getElementById(idContainer)
    container.innerHTML = GlobalLoader;

    
    let str = ''; let strActivo = '';
    
    let data = {tipo:'SUBCONTRATISTA'}
    
    let url = GlobalUrlBackend + '/acreedores/listado';
    axios.post(url,data)
    .then((response) => {
        try {
            const data = response.data.recordset;
            data.map((rows) => {
                if(rows.ACTIVO=='NO'){strActivo='<b class="text-danger">DESACTIVADO</b>'}else{strActivo=''}
                str = str + `<tr class="border-info border-bottom">
                                            <td>
                                                <button class="hidden btn btn-sm btn-outline-danger btn-circle hand" 
                                                    onclick="subcoontratistas_desactivar(${rows.CODIGO},'${rows.ACTIVO}')">
                                                    <i class="fal fa-sync"></i>
                                                </button>
                                            </td>
                                            <td>${rows.DESCRIPCION}
                                                <br>
                                                ${strActivo}
                                            </td>
                                            <td>${rows.CONTACTO}
                                                <br>
                                                <small>Tel: ${rows.TELEFONO}</small>
                                            </td>
                                            <td>${rows.CHEQUE}
                                                <br>
                                                <small>NIT: ${rows.NIT}</small>
                                            </td>
                                            <td>
                                                <button class="hidden btn btn-sm btn-warning btn-circle hand" 
                                                    onclick="getMenuSubcontratistas(${rows.CODIGO},'${rows.DESCRIPCION}','${rows.CONTACTO}','${rows.TELEFONO}','${rows.NIT}','${rows.CHEQUE}')">
                                                    <i class="fal fa-edit"></i>
                                                </button>
                                            </td>
                                        </tr>`
            })
            container.innerHTML = str;
        } catch (err) {
            str = 'AGREGUE DATOS...';
            container.innerHTML = str;
        }
    }, (error) => {
            str = 'ERROR...';
            container.innerHTML = str;
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