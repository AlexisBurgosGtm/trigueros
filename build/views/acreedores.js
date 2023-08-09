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
    }

    root.innerHTML = view.body();

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
    })


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
                                                <button class="btn btn-sm btn-outline-danger hand btn-circle" 
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
                                                <button class="btn btn-sm btn-primary btn-circle hand" 
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
                                                <button class="btn btn-sm btn-outline-danger btn-circle hand" 
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
                                                <button class="btn btn-sm btn-warning btn-circle hand" 
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

