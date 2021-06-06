
function getView(){
    let view = {
        encabezado : ()=>{
            return `
            <div class="col-12">
                <div class="input-group">
                    <input id="txtBuscar" type="text" ref="txtBuscar" class="form-control border-info shadow" placeholder="Escriba para buscar ..." aria-label="" aria-describedby="button-addon4" />
                </div>
            </div>
            `
        },
        listado : ()=>{
            return `
                
                <div class="table-responsive">
                    <table class="table table-responsive table-hover table-striped table-bordered" id="tblProductos">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>PRODUCTO</td>
                                <td>PRESENTACIÓN</td>
                            </tr>
                        </thead>
                        <tbody id="tblListadoProductos">
                            
                        </tbody>
                    </table>
                </div>
            `
        },
        btnNuevo : ()=>{
            return `
                <div class="" id="btnFlotanteDerecha">
                    <button class="btn btn-success btn-circle btn-xl shadow" id="btnNuevoProducto">
                        +                        
                    </button>
                </div>           
            `
        },
        modalNuevoProducto : ()=>{
            return `
            <div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-info text-white">
                            <h5 class="modal-title" id="exampleModalLabel">Datos del Nuevo Producto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form group"
                                        <label>Código</label>
                                        <input type="text" id="txtCodprod" class="form-control">
                                    </div>    
                                </div>
                                <div class="col-6">
                                    <div class="form group"
                                        <label>Presentación</label>
                                        <select class="form-control" id="cmbCodmedida"></select>
                                    </div>
                                </div>
                            </div>

                            <hr class="solid">

                            <div class="form-group">
                                <label>Descripción del Producto</label>
                                <input type="text" class="form-control" id="txtDesprod">
                            </div>   
                            
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-secondary btn-xl" data-dismiss="modal">Cerrar (x)</button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-info btn-xl shadow" id="btnGuardarProd">
                                        <i class="fal fa-save"></i>Aceptar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        modalHistorial : ()=>{
            return `
            <div class="modal fade" id="modalHistorial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-right modal-lg" role="document">
                    <div class="modal-content">
                    
                        <div class="modal-body">
                            
                                <div class="card col-12">
                                    <h3 class="text-danger">Nueva Cotización</h3>
                                    <div class="form group"
                                        <label>Proveedor</label>
                                        <select class="form-control" id="cmbProveedores">
                                        </select>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>Fecha</label>
                                                <input type="date" class="form-control" id="txtFechaCot">
                                            </div>    
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>Precio</label>
                                                <input type="number" class="form-control bg-amarillo border-danger text-danger negrita" id="txtPrecioCot">
                                            </div>    
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-8"></div>
                                        <div class="col-4 text-right">
                                            <button class="btn btn-info btn-md" id="btnAgregarCot">Agregar(+)</button>
                                        </div>
                                    </div>
                                </div>
                            
                                <hr class="solid">

                                <div class="table-responsive col-12">
                                    <label class="negrita">PRECIOS COTIZADOS</label>
                                    <table class="table table-responsive table-hover table-striped">
                                        <thead class="bg-info text-white">
                                            <tr>
                                                <td>Proveedor</td>
                                                <td>Precio</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblHistorial"></tbody>
                                    </table>
                                </div>

                            
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>

                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.encabezado() + view.listado() + view.btnNuevo() + view.modalNuevoProducto() + view.modalHistorial();

};

async function addListeners(){

    let cmbCodmedida = document.getElementById('cmbCodmedida');
    cmbCodmedida.innerHTML = funciones.getComboMedidasProductos();

    document.getElementById('txtBuscar').addEventListener('keyup',()=>{
        funciones.FiltrarTabla('tblProductos','txtBuscar');
    });
    
    let btnNuevoProducto = document.getElementById("btnNuevoProducto");
    btnNuevoProducto.addEventListener('click',()=>{
        $('#modalNuevo').modal('show');
        document.getElementById('txtCodprod').value='0';
        document.getElementById('txtDesprod').value='';
        document.getElementById('cmbCodmedida').value='UNIDAD';
    });

    let btnGuardarProd = document.getElementById('btnGuardarProd');
    btnGuardarProd.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Guardar este Nuevo Producto?')
        .then((value)=>{
            if(value==true){
                let codigo = document.getElementById('txtCodprod').value;
                let descripcion = document.getElementById('txtDesprod').value;
                let medida = document.getElementById('cmbCodmedida').value;
                api.cotiz_productos_insert(codigo,descripcion,medida)
                .then(()=>{
                    funciones.Aviso('Producto guardado exitosamente!!')
                    $('#modalNuevo').modal('hide');
                    api.cotiz_listaproductos('tblListadoProductos')
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo guardar este producto')
                })

            }
        })
    })

    api.cotiz_listaproductos('tblListadoProductos');

    await api.proveedores_combo('cmbProveedores');

    let btnAgregarCot = document.getElementById('btnAgregarCot');
    btnAgregarCot.addEventListener('click',()=>{
        //cmbProveedores
        //txtPrecioCot
        //txtFechaCot
        let proveedor = document.getElementById('cmbProveedores').value;
        let precio = document.getElementById('txtPrecioCot').value;
        let fecha = funciones.devuelveFecha('txtFechaCot');

        funciones.Confirmacion('¿Está seguro que desea AGREGAR este precio cotizado?')
        .then((value)=>{
            if(value==true){

                api.cotiz_historial_insert(GlobalSelectedId,proveedor,fecha,precio)
                .then(()=>{
                    funciones.Aviso('Cotización agregada con éxito!!');
                    api.cotiz_historial_producto('tblHistorial',GlobalSelectedId);
        
                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo Guardar esta cotización')
                })

            }
        })

    });

};

function initView(){

    getView();
    addListeners();

}

function getHistorialProducto(idprod){
    
    //servirá para el botón AGREGAR de las nuevas cotizaciones
    GlobalSelectedId = idprod;

    $('#modalHistorial').modal('show');

    document.getElementById('txtPrecioCot').value = '';
    document.getElementById('txtFechaCot').value = funciones.getFecha();

    api.cotiz_historial_producto('tblHistorial',GlobalSelectedId);

};




function deleteItemHistorial(id){
    funciones.Confirmacion('¿Está seguro que desea ELIMINAR esta cotización?')
    .then((value)=>{
        if(value==true){
            api.cotiz_historial_delete(id)
            .then(()=>{
                funciones.showToast('Cotización Eliminada')
                api.cotiz_historial_producto('tblHistorial',GlobalSelectedId);
            })
            .catch(()=>{
                funciones.AvisoError('No se pudo eliminar este movimiento')
            })

        }
    })
};

