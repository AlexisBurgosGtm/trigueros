function getView(){
    let view ={
        
        listado : ()=>{
            return `
            <div class="card">
                <table class="table table-responsive table-striped table-hover table-bordered" id="tablaCheques">
                    <thead class="bg-warning">
                        <tr>
                            <td>NOMBRE</td>
                            <td>DIRECCION</td>
                            <td>NO. TELEFONO</td>
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
                        <h5 class="modal-title" id="exampleModalLabel">Datos Del Contratante</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="form group"
                            <label>Nit</label>
                            <input type="text" class="form-control" autocomplete="off" >
                        </div>

                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" class="form-control" autocomplete="off">
                        </div>   
                        
                        <div class="form group">
                            <label>Dirección</label>
                            <input type="text" class="form-control" autocomplete="off">
                        </div>

                        <div class="form group">
                            <label>Telefono</label>
                            <input type="text" class="form-control" autocomplete="off">
                        </div>

                        <div class="form group">
                            <label>Email</label>
                            <input type="Text" class="form-control" autocomplete="off" >
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

    root.innerHTML= view.listado() + view.btnNuevo();
    rootModal.innerHTML = view.modalNuevo();
    
};

function addListeners(){
    

    let btnNuevo = document.getElementById('btnNuevo');
    btnNuevo.addEventListener('click',()=>{
        $('#modalNuevo').modal('show');
    })


};

function initView(){
    getView();
    addListeners();
};