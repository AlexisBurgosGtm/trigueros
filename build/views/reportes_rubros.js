
function getView(){

    let view = {
        encabezado: ()=>{
            return `
                <div class="row">
                    <div class="col-8">
                        <div class="form-group">
                            <label class="negrita">Reporte pagos por Rubro</label>
                            <div class="input-group">
                                <select class="form-control" id="cmbRubros"></select>
                                <select class="form-control col-4" id="cmbTipoReporte">
                                    <option value="CHEQUES">LISTA CHEQUES</option>
                                    <option value="PROYECTOS">LISTA PROYECTOS</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label>Total:</label>
                            <h3 class="negrita text-danger" id="lbTotal">--</h3>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label>Del</label>
                            <input type="date" class="form-control" id="txtFechaInicial">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label>Al</label>
                            <input type="date" class="form-control" id="txtFechaFinal">
                        </div>
                    </div>
         
                </div>
        
            `
        },
        detalle : ()=>{
            return `
                <hr class="solid">
                <div class="row">
                    <div class="col-7">
                        <div class="table-responsive col-12" id="tblPrincipal">
                                

                        </div>
                    </div>
                    <div class="col-5">
                        <h3>Detalle adicional</h3>
                        <div class="table-responsive col-12" id="tblDetalle">

                        </div>
                    </div>
                </div>

                

                <button class="btn btn-exportar btn-circle btn-xl btn-success hand shadow" onclick="funciones.exportTableToExcel('tblRep1','ReporteRubros')">
                    <i class="fal fa-file-excel"></i>
                </button>
                
                <button class="btn btn-imprimir btn-primary btn-circle hand shadow btn-xl" onclick="window.print()">
                    <i class="fal fa-print"></i>
                </button>

            `
        }
    }

    root.innerHTML = view.encabezado() + view.detalle();

};


function addListeners(){

    let cmbRubros = document.getElementById('cmbRubros');
    let cmbTipoReporte = document.getElementById('cmbTipoReporte');

   
    let txtFechaInicial = document.getElementById('txtFechaInicial');
    let txtFechaFinal =document.getElementById('txtFechaFinal');

    txtFechaInicial.value = funciones.getFecha();
    txtFechaFinal.value = funciones.getFecha();


    cmbRubros.addEventListener('change',()=>{
        cargar_grid_primario();
    });

    cmbTipoReporte.addEventListener('change',()=>{
        cargar_grid_primario();
    });

    txtFechaInicial.addEventListener('change',()=>{
        cargar_grid_primario();
    });

    txtFechaFinal.addEventListener('change',()=>{
        cargar_grid_primario();
    });

   

    api.rubros_combo_promise('cmbRubros')
    .then(()=>{
        cargar_grid_primario();    
    })
    .catch(()=>{
        funciones.AvisoError('No se pudo cargar la lista de Rubros')
    })

};

function initView(){
    getView();
    addListeners();
};

function cargar_grid_primario(){

    let cmbTipoReporte = document.getElementById('cmbTipoReporte');
    document.getElementById('tblDetalle').innerHTML = '';

    if(cmbTipoReporte.value=='CHEQUES'){
        
        rpt_pagosrubro_fechas('tblPrincipal',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),cmbRubros.value);
    }else{
        rpt_proyectos_rubro('tblPrincipal',"lbTotal",funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),cmbRubros.value);   
    }
    
};


function rpt_pagosrubro_fechas(idContainer1,idSaldo,finicial,ffinal,rubro){
        
    let container1 = document.getElementById(idContainer1);
    container1.innerHTML = GlobalLoader;
    
    let lbSaldo = document.getElementById(idSaldo);
    lbSaldo.innerText = 'Q --';
    
    
    let str1 = ''; 
    let varTotalSaldo = 0;

    
    let url = GlobalUrlBackend + '/reportes/pagosmes_rubro_fechas';

    axios.post(url, {
                rubro:rubro,
                finicial: finicial,
                ffinal:ffinal
                })
    .then((response) => {
        try {
            const data = response.data.recordset;
            data.map((rows) => {
                        varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                        str1 =  str1 + `<tr class="border-bottom border-success">
                            <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                    
                            </td>
                            <td>${rows.BANCO}
                                    <br>
                                    <small>Cuenta No. ${rows.NOCUENTA}</small>
                                    <br>
                                    <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                    <br>
                                    <small class="negrita text-info">Tipo: ${rows.TIPOCHEQUE}</small>
                            </td>
                            <td>${rows.DESACREEDOR}
                                <br>
                                    <small>${rows.PROYECTO}</small>
                                    <br>
                                    <small class="negrita text-info">${rows.ASIGNACION + ' - ' + rows.CONCEPTO}</small>
                                    <br class="solid">
                                    <small>Creado:${rows.USUARIO}</small>
                            </td>
                            <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                            
                        </tr>`
           
            })
            let tbl = `<table class="table table-responsive table-striped table-hover table-bordered" id="tblRep1">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>BANCO</td>
                                    <td>DESCRIPCIÓN</td>
                                    <td>IMPORTE</td>
                                </tr>
                            </thead>
                            <tbody id="tblPagos">
                                    ${str1}
                            </tbody>
                        </table>`
            container1.innerHTML = tbl;
            lbSaldo.innerText = funciones.setMoneda((varTotalSaldo),'Q');
        } catch (err) {
            container1.innerHTML = 'Agregue un cheque ...';
            lbSaldo.innerText = 'Q --';
        }
    }, (error) => {
            console.log(error);
            container1.innerHTML = 'Agregue un cheque...';
            lbSaldo.innerText = 'Q --';
    });

};

function rpt_proyectos_rubro(idContainer,idSaldo,finicial,ffinal,rubro){
    
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    
    let lbSaldo = document.getElementById(idSaldo);
    lbSaldo.innerText = 'Q --';
    
    let varTotal = 0;
    
    let str = '';
        let data = {
            rubro:rubro,
            finicial:finicial,
            ffinal:ffinal
        };

        let url = GlobalUrlBackend + '/proyectos/listaproyectos_rubro'

        axios.post(url, data)
            .then((response) => {
                try {
                    const data = response.data.recordset;
                    data.map((r) => {
                        varTotal += Number(r.IMPORTE);
                        str = str + `
                        <tr>
                            <td>${r.PROYECTO}</td>
                            <td>${r.DIRECCION}</td>
                            <td>${funciones.setMoneda(r.IMPORTE,'Q')}</td>
                            <td>
                                <button class="btn btn-info btn-md btn-circle hand shadow" onclick="get_cheques_proyecto('${r.IDPROYECTO}','${rubro}')">
                                    <i class="fal fa-arrow-right"></i>
                                </button>
                            </td>
                        </tr>
                        `
                    })
                    let tbl = `<table class="table table-responsive table-striped table-hover table-bordered" id="tblRep1">
                            <thead class="bg-info text-white">
                                <tr>
                                    <td>PROYECTO</td>
                                    <td>DIRECCIÓN</td>
                                    <td>GASTADO</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="">
                                    ${str}
                            </tbody>
                        </table>`
                    container.innerHTML = tbl;
                    lbSaldo.innerText = funciones.setMoneda(varTotal,'Q');
                } catch (err) {
                    console.log(err);
                    container.innerHTML = 'Cree un proyecto para empezar';
                    lbSaldo.innerText = '---';
                }
            }, (error) => {
                    console.log(error);
                    container.innerHTML = 'Cree un proyecto para empezar';
                    lbSaldo.innerText = '---';
            });

};



function get_cheques_proyecto(idproyecto,rubro){

    rpt_pagosrubro_proyecto_fechas('tblDetalle',funciones.devuelveFecha('txtFechaInicial'),funciones.devuelveFecha('txtFechaFinal'),rubro,idproyecto)

};

function rpt_pagosrubro_proyecto_fechas(idContainer1,finicial,ffinal,rubro,idproyecto){
        
    let container1 = document.getElementById(idContainer1);
    container1.innerHTML = GlobalLoader;
    
    //let lbSaldo = document.getElementById(idSaldo);
    //lbSaldo.innerText = 'Q --';
    
    
    let str1 = ''; 
    let varTotalSaldo = 0;

    
    let url = GlobalUrlBackend + '/reportes/pagosmes_rubro_fechas_proyecto';

    axios.post(url, {
                idproyecto:idproyecto,
                rubro:rubro,
                finicial: finicial,
                ffinal:ffinal
                })
    .then((response) => {
        try {
            const data = response.data.recordset;
            data.map((rows) => {
                        varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                        str1 =  str1 + `<tr class="border-bottom border-success">
                            <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                    
                            </td>
                            <td>${rows.BANCO}
                                    <br>
                                    <small>Cuenta No. ${rows.NOCUENTA}</small>
                                    <br>
                                    <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                    <br>
                                    <small class="negrita text-info">Tipo: ${rows.TIPOCHEQUE}</small>
                            </td>
                            <td>${rows.DESACREEDOR}
                                <br>
                                    <small>${rows.PROYECTO}</small>
                                    <br>
                                    <small class="negrita text-info">${rows.ASIGNACION + ' - ' + rows.CONCEPTO}</small>
                                    <br class="solid">
                                    <small>Creado:${rows.USUARIO}</small>
                            </td>
                            <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                            
                        </tr>`
           
            })
            let tbl = `<table class="table table-responsive table-striped table-hover table-bordered" id="tblRep1">
                            <thead class="bg-secondary text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>BANCO</td>
                                    <td>DESCRIPCIÓN</td>
                                    <td>IMPORTE</td>
                                </tr>
                            </thead>
                            <tbody id="tblPagos">
                                    ${str1}
                            </tbody>
                        </table>`
            container1.innerHTML = tbl;
            //lbSaldo.innerText = funciones.setMoneda((varTotalSaldo),'Q');
        } catch (err) {
            container1.innerHTML = 'Agregue un cheque ...';
            //lbSaldo.innerText = 'Q --';
        }
    }, (error) => {
            console.log(error);
            container1.innerHTML = 'Agregue un cheque...';
            //lbSaldo.innerText = 'Q --';
    });

};
