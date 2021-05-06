function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="row">
                <div class="card">
                    <h3>Listado de Cortes de Caja</h3>
                </div>
            </div>
            `;
        },
        listado: ()=>{
            return `
            <div class="row">
                <div class="card">
                    <div class="form-group">
                        <label>Estado</label>
                        <select class="form-control" id="cmbStatus">
                            <option value="NO">ACTIVOS</option>
                            <option value="SI">FINALIZADOS</option>
                        </select>
                    </div>

                    <table class="table table-responsive table-hover table-striped" id="tblListado">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>No.</td>
                                <td>Fecha</td>
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
                            <input type="text" class="form-control" id="txtEntNocheque">
                        </div>

                        <div class="form-group">
                            <label class="negrita">Cantidad</label>
                            <input type="number" class="form-control col-4 bg-amarillo text-danger negrita" id="txtEntImporte">
                        </div>

                        <div class="form-group">
                            <label class="negrita">Recibe</label>
                            <input type="text" class="form-control" id="txtEntRecibido">
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
                            <label class="negrita">Contratante</label>
                            <select class="form-control" id="cmbContratanteC">
                            </select> 
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
                                <button class="btn btn-primary btn-xl" id="btnGuardarChequeC">
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
                        </div>
                    <div class="modal-body">

           
                        
                        <hr class="solid">

                        

                    </div>
                    <div class="modal-footer">
                    </div>

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
                <div class="" id="btnFlotanteIzquierda">
                    <button class="btn btn-danger btn-circle btn-xl shadow" id="btnNuevoSalida">
                        -                       
                    </button>
                </div>           
            `

        }
    };

    root.innerHTML = view.encabezado() + view.listado() + view.btnNuevo() + view.modalNuevoIngreso() + view.modalDetalle() + view.modalNuevoSalida();

};

function addListeners(){
    
    let btnNuevoIngreso = document.getElementById('btnNuevoIngreso');
    btnNuevoIngreso.addEventListener('click',()=>{
        $('#modalNuevoIngreso').modal('show');
    });

    let btnNuevoSalida = document.getElementById('btnNuevoSalida');
    btnNuevoSalida.addEventListener('click',()=>{
        $('#modalNuevoSalida').modal('show');
    });



};

function getHistorialCorte(fecha,importe){

    $('#modalDetalle').modal('show');
    
};

function initView(){
    getView();
    addListeners();
};