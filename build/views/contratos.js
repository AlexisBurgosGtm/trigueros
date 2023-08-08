function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="dias-tab">
                                ${view.listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="clientes-tab">
                                ${view.datos_contrato()}
                        </div>

                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                           
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
                    </ul>
                </div>
            `
        },
        listado:()=>{
            return `
            <div class="card card-rounded shadow p-2">
                <div class="card-body">

                    <div class="form-group">
                        <h5 class="negrita text-info">Seleccione un Proyecto</h5>
                        <select class="form-control border-info negrita text-info" id="cmbProyectos">
                            
                        </select>
                    </div>

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
        datos_contrato: ()=>{
            return `
                <div class="card">  
                    <div class="card-body">
                        
                        <h5 class="modal-title negrita text-danger" id="exampleModalLabel">Detalle del Sub-Contrato</h5>
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
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form group">
                                    <label>Proyecto:</label>
                                    <h4 id="Proyecto"></h4>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div class="form group">
                                    <label>Sub-contratista:</label>
                                    <h4 id="Acreedor"></h4>
                                </div>
                            </div>
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
                        <button class="btn btn-atras btn-secondary btn-circle btn-xl hand shadow" onclick="document.getElementById('tab-uno').click()">
                            <i class="fal fa-arrow-left"></i>
                        </button> 
                    </div>                            
                </div>
        
             
            `
        }
    };

    root.innerHTML = view.body();
    rootModal.innerHTML = ''; //view.modalDetalle();

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


    funciones.slideAnimationTabs();


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

    //$('#modalDetalle').modal('show');
    document.getElementById('tab-dos').click();

};

function deleteCheque(id){
    funciones.solicitarClave()
    .then((name)=>{
        if(name==GlobalConfigClave.toString()){
          
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