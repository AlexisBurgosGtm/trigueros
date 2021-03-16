function getView(){
    let view ={
        encabezado:()=>{
            return `
            <div class="row">
                <div class="col-lg-4 col-sm-12 col-md-6">
                    <div class="form-group">
                        <label>Buscar:</label>
                        <input type="text" id="txtBuscar" class="form-control">
                    </div>
                </div>
                                
            </div>
            `
        },
        listado : ()=>{
            return `
            <div class="card">
                <table class="table table-responsive table-striped table-hover table-bordered" id="tablaCheques">
                    <thead class="bg-warning">
                        <tr>
                            <td>FECHA</td>
                            <td>CUENTA</td>
                            <td>ACREEDOR</td>
                            <td>VALOR</td>
                            <td>PROYECTO</td>
                        </tr>
                    </thead>
                    <tbody id="tblCheques">
                       
                    </tbody>
                </table>
            </div> `
        },
        modalNuevo : ()=>{
            return `
            <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Datos del Cheque</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="form group"
                            <label>Proyecto</label>
                            <select class="form-control">
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Fecha:</label>
                            <input type="date" class="form-control" id="txtChequeFecha">
                        </div>   
                        
                        <div class="form group">
                            <label>Cuenta</label>
                            <select class="form-control">
                            </select>
                        </div>

                        
                        <div class="form-group">
                            <label>No. Cheque</label>
                            <input type="number" class="form-control">
                        </div>
                        
                        <div class="form-group">
                            <label>Acreedor (Proveedor o Subcontratista)</label>
                            <select class="form-control">
                            </select> 
                        </div>
        
                        <div class="form-group">
                            <label>Cantidad</label>
                            <input type="number" class="form-control">
                        </div>
        
                        <div class="form-group">
                            <label>Observaciones</label>
                            <input type="text" class="form-control">
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Aceptar</button>
                    </div>
                    </div>
                </div>
            </div>
            `
        },
        btnNuevo : ()=>{
            return `
                <div class="" id="btnFlotanteDerecha">
                    <button class="btn btn-success btn-circle btn-xl" id="btnNuevo">
                        +                        
                    </button>
                </div>           
            `

        }
    }

    root.innerHTML= view.encabezado() + view.listado() + view.btnNuevo();
    rootModal.innerHTML = view.modalNuevo();
    
};

function addListeners(){
    

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        $('#modalNuevo').modal('show');
    })

    let txtBuscar = document.getElementById('txtBuscar');
    txtBuscar.addEventListener('keyup',()=>{
        funciones.FiltrarTabla('tablaCheques','txtBuscar');
    })


    let txtChequeFecha = document.getElementById('txtChequeFecha');
    txtChequeFecha.value = funciones.getFecha(); 

};

function initView(){
    getView();
    addListeners();
};