function getView(){
    let view = {
        encabezado:()=>{
            return `
                <div class="card">
                    <div class="card-header bg-info text-white">
                        <label>Seleccione un Proyecto</label>
                    </div>
                    <div class="card-body">
                        <select class="form-control border-info shadow" id="cmbProyectos">
                            
                        </select>
                    </div>
                </div>
            `
        },
        listado:()=>{
            return `
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-striped table-bordered">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>CONTRATO</td>
                                    <td>PROYECTO</td>
                                    <td>VALOR</td>
                                </tr>
                            </thead>
                            <tbody id="tblContratos"></tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        },
        modalDetalle: ()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true"  id="modalDetalle">
            <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-trans-gradient text-white">
                            <h5 class="modal-title" id="exampleModalLabel">Detalle del Sub-Contrato</h5>
                        </div>
                    <div class="modal-body">
                        
                        <div class="row">
                            <div class="col">
                                <div class="form group"
                                    <label>No. Contrato: </label>
                                    <h3 id="NoContrato"></h3>
                                </div>    
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label>Fecha Entrega:</label>
                                    <h3 id="FechaEntrega"></h3>
                                </div>       
                            </div>
                        </div>

                        <hr class="solid">
                        
                        <div class="form group">
                            <label>Proyecto:</label>
                            <h4 id="Proyecto"></h4>
                        </div>
                        <br>
                        <div class="form group">
                            <label>Sub-contratista:</label>
                            <h4 id="Acreedor"></h4>
                        </div>
                        <br>
                        <div class="form group">
                            <label>Asignación:</label>
                            <h4 id="Asignacion"></h4>
                        </div>

                        <hr class="solid">

                        <div class="row">
                            <div class="col">
                                <div class="form group">
                                    <label>Importe:</label>
                                    <h4 class="text-info" id="Importe"></h4>
                                </div>    
                            </div>

                            <div class="col">
                                <div class="form group">
                                    <label>Entregado:</label>
                                    <h4 class="text-success" id="Entregado"></h4>
                                </div>    
                            </div>

                            <div class="col">
                                <div class="form group">
                                    <label>Saldo:</label>
                                    <h4 class="text-danger" id="Saldo"></h4>
                                </div>    
                            </div>
                            
                        </div>
                        
                        <hr class="solid">

                        <div class="row">
                            <div class="table-responsive">
                                <div class="table-responsive">
                                    <table class="table table-responsive">
                                        <thead class="bg-trans-gradient text-white">
                                            <tr>
                                                <td>FECHA</td>
                                                <td>CUENTA</td>
                                                <td>ACREEDOR</td>
                                                <td>VALOR</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblChequesContrato"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary btn-xl col-12" data-dismiss="modal">
                            <i class="fal fa-check"></i>
                            ACEPTAR
                        </button>    
                    </div>

                    </div>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado();
    rootModal.innerHTML = view.modalDetalle();

};

function addListeners(){


    let cmbProyectos = document.getElementById('cmbProyectos');
    cmbProyectos.addEventListener('change',()=>{
        let codproy =  document.getElementById('cmbProyectos').value || 0;
        api.subcontrato_listado(codproy,'tblContratos')
    });


    api.proyectos_combo_promise('cmbProyectos')
    .then(()=>{
        let codproy =  document.getElementById('cmbProyectos').value || 0;
        api.subcontrato_listado(codproy,'tblContratos')
    });



};

function initView(){
    getView();
    addListeners();
};

async function detalleContrato(nocontrato,entrega,proyecto,acreedor,asignacion,importe,entregado,saldo){
    
    document.getElementById('NoContrato').innerText = nocontrato;
    document.getElementById('FechaEntrega').innerText =funciones.convertDate2(entrega);
    document.getElementById('Proyecto').innerText = proyecto;
    document.getElementById('Acreedor').innerText = acreedor;
    document.getElementById('Asignacion').innerText = asignacion;
    document.getElementById('Importe').innerText = importe;
    document.getElementById('Entregado').innerText = entregado;
    document.getElementById('Saldo').innerText = saldo;

    await api.cheques_contrato(nocontrato,'tblChequesContrato')

    $('#modalDetalle').modal('show');

};

function deleteCheque(id){
    funciones.solicitarClave()
    .then((name)=>{
        if(name==GlobalPassUsuario){
            funciones.Confirmacion('¿Está seguro que desea ELIMINAR este cheque?')
            .then((value)=>{
                if(value==true){
        
                    api.cheques_delete(id)
                    .then(()=>{
                        funciones.Aviso('Cheque ELIMINADO exitosamente!!');
                        let codproy =  document.getElementById('cmbProyectos').value || 0;
                        api.subcontrato_listado(codproy,'tblContratos');
        
                        let nocontrato = document.getElementById('NoContrato').innerText;
                        api.cheques_contrato(nocontrato,'tblChequesContrato');
                        
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo ELIMINAR el cheque')
                    })
        
                }
            })
        }else{
            funciones.AvisoError('Clave incorrecta');
            return;
        }
    })
    .catch(()=>{
        funciones.AvisoError('Clave incorrecta');
        return;
    })

    
};