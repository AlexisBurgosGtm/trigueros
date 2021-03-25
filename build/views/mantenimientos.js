function getView(){
    let view = {
        encabezado: ()=>{
            return `
                
                    <div class="card">
                        <div class="form-group">
                            <label>Seleccione una Lista</label>
                            <select class="form-control">
                                <option value="BANCOS">BANCOS</option>
                                <option value="CONTRATANTES">CONTRATANTES</option>
                                <option value="PROVEEDORES">PROVEEDORES</option>
                                <option value="SUBCONTRATISTAS">SUBCONTRATISTAS</option>
                                <option value="USUARIOS">USUARIOS</option>
                            </select>
                        </div>
                    </div>
                
            `
        },
        listado: ()=>{
            return `
                
                    <div class="card">
                        <div class="table-responsive">
                            <table class="table table-responsive table-striped table-hover">
                                <thead class="bg-trans-gradient text-white">
                                    <tr>
                                        <td>CODIGO</td>
                                        <td>DESCRIPCION</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                `
        }
    }

    root.innerHTML= view.encabezado() + view.listado();
    rootModal.innerHTML = view.modalNuevo();
};

function addListeners(){

};

function initView(){
    getView();
    addListeners();
};