function getView(){
    let view = {
        encabezado: ()=>{
            return `
                
                    <div class="card">
                        <div class="form-group">
                            <label>Seleccione un Elemento de la Lista</label>
                            <select class="form-control" id="cmbLista">
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
                        <div class="table-responsive" id="tblContainer">
                            
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
                            <h5 class="modal-title" id="">Datos del Banco</h5>
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
                        </div>

                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML= view.encabezado() + view.listado();
    rootModal.innerHTML = view.modalBancos();
};

function addListeners(){
    let cmbLista = document.getElementById('cmbLista');
    cmbLista.addEventListener('change',async()=>{
        await getListado(cmbLista.value);
    })

    getListado(cmbLista.value);
};

function initView(){
    getView();
    addListeners();
};

async function getListado(tipo){
    switch (tipo) {
        case 'BANCOS':
            await api.config_bancos_lista('tblContainer');           
            break;
        case 'CONTRATANTES':
            
            break;
        case 'BANCOS':
            
            break;
        
    }


};

function getMenuBancos(data){
    console.log(data);
}