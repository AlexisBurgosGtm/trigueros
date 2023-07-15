let api = {
    usuarios_login: (usuario,pass) => {
        return new Promise((resolve, reject) => {

            let data = {
                usuario: usuario,
                pass: pass
            };

            let url = GlobalUrlBackend + '/usuarios/login'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 1) {
                        data.map((rows) => {
                            if (rows.USUARIO == usuario) {
                                GlobalCodUsuario = rows.CODIGO;
                                GlobalUsuario = rows.USUARIO;
                                GlobalPassUsuario = pass;
                                GlobalNivelUsuario = Number(rows.NIVEL);
                                resolve();
                            } else {
                                GlobalCodUsuario = 0
                                GlobalUsuario = '';
                                GlobalPassUsuario = '';
                                GlobalNivelUsuario = 0;
                                reject();
                            }
                        })
                    } else {
                        GlobalCodUsuario = 0
                        GlobalUsuario = '';
                        GlobalNivelUsuario = 0;
                        GlobalPassUsuario = '';
                        reject();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    insertar_bitacora: (descripcion) => {
        return new Promise((resolve, reject) => {

            let fecha = funciones.getFecha();
            let hora = funciones.getHora();

            let data = {
                fecha:fecha,
                hora:hora,
                descripcion:descripcion,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/usuarios/bitacora'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    usuarios_eliminar: (codigo) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:codigo
            };

            let url = GlobalUrlBackend + '/usuarios/eliminar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    proyectos_listado: (activo,mes,anio,idContainer) => {
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        let str = '';
            let data = {
                activo : activo,
                mes:mes,
                anio:anio
            };

            let url = GlobalUrlBackend + '/proyectos/listaproyectos'

            axios.post(url, data)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            let diferencia = (Number(rows.RECIBIDO) - Number(rows.EJECUTADO))
                            let stClasDif = '';
                            if(Number(diferencia)>=0){
                                stClasDif = 'text-success';
                            }else{
                                stClasDif = 'text-danger';
                            };
                            str = str + `
                            
                            <div class="card card-rounded shadow hand border-top-rounded" onClick="getMenuProyecto(${rows.IDPROYECTO},'${rows.PROYECTO}','${funciones.setMoneda(rows.PRESUPUESTO, 'Q')}');">
                               
                                    <div class="card-body">

                                        <div class="card card-rounded bg-owner text-white col-12 p-2">
                                            <h5>${rows.PROYECTO}</h5>
                                            <small>${rows.DIRECCION}</small>
                                            <br>
                                            <small>Creado por:${rows.USUARIO}</small>
                                        </div>

                                        <div class="row">
                                            <div class="col-6">
                                                <small class="text-info">F.Inicio: ${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHAINICIO))}</small>
                                            </div>
                                            <div class="col-6">
                                                <small class="text-info">F.Fin: ${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHAFIN))}</small>
                                            </div>
                                        </div>
                                        <br><small>Contratante: <b>${rows.DESCONTRATANTE}</b></small>        
                                        
                                    </div>

                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <b>Presupuesto: ${funciones.setMoneda(rows.PRESUPUESTO, 'Q')}</b>    
                                            </div>
                                            <div class="col-6">
                                                <b class="text-success">Recibido:${funciones.setMoneda(rows.RECIBIDO, 'Q')}</b>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <b class="text-danger">Ejecutado:${funciones.setMoneda(rows.EJECUTADO, 'Q')}</b>
                                                <br>
                                                <small>${funciones.setMargen((Number(rows.EJECUTADO) / Number(rows.PRESUPUESTO) * 100),'%')}</small>    
                                            </div>
                                            <div class="col-6">
                                                <h5 class='${stClasDif}'>Diferencia:${funciones.setMoneda(diferencia, 'Q')}</h5>
                                            </div>
                                        </div>                     
                                    </div>

                            </div>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        console.log(err);
                        container.innerHTML = 'Cree un proyecto para empezar';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = 'Cree un proyecto para empezar';
                });

    },
    proyectos_listado_table: (activo,mes,anio,idContainer) => {
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        let str = '';
            let data = {
                activo : activo,
                mes:mes,
                anio:anio
            };

            let url = GlobalUrlBackend + '/proyectos/listaproyectos'

            axios.post(url, data)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            let diferencia = (Number(rows.RECIBIDO) - Number(rows.EJECUTADO))
                            let stClasDif = '';
                            if(Number(diferencia)>=0){
                                stClasDif = 'text-success';
                            }else{
                                stClasDif = 'text-danger';
                            };
                            str = str + `<tr class="hand border-bottom border-top border-danger" onClick="getMenuProyecto(${rows.IDPROYECTO},'${rows.PROYECTO}','${funciones.setMoneda(rows.PRESUPUESTO, 'Q')}');">
                                        <td>${rows.PROYECTO}
                                            <br><small>${rows.DIRECCION}</small>
                                               <br><small>Creado:${rows.USUARIO}</small>
                                            <div class="row">
                                                <div class="col-6">
                                                    <small class="text-info">Inicio: ${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHAINICIO))}</small>
                                                </div>
                                                <div class="col-6">
                                                    <small class="text-info">Fin: ${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHAFIN))}</small>
                                                </div>
                                            </div>
                                            <br><small>Contratante: ${rows.DESCONTRATANTE}</small>
                                        </td>
                                        <td><b>${funciones.setMoneda(rows.PRESUPUESTO, 'Q')}</b>
                                            <br>
                                            <small class="text-success">R:${funciones.setMoneda(rows.RECIBIDO, 'Q')}</small>
                                            <br>
                                            <small class="text-danger">E:${funciones.setMoneda(rows.EJECUTADO, 'Q')}</small>
                                            <br>
                                            <small>${funciones.setMargen((Number(rows.EJECUTADO) / Number(rows.PRESUPUESTO) * 100),'%')}</small>
                                            <br>
                                            <h5 class='${stClasDif}'>Dif:${funciones.setMoneda(diferencia, 'Q')}</h5>
                                        </td>
                                        
                                    </tr>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        console.log(err);
                        container.innerHTML = 'Cree un proyecto para empezar';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = 'Cree un proyecto para empezar';
                });

    },
    proyectos_combo_promise: (idContainer) => {

        let container  = document.getElementById(idContainer);    
        return new Promise((resolve,reject)=>{
            
            let str = '';

            let data = {
                activo : 'NO'
            };
    
            let url = GlobalUrlBackend + '/proyectos/listaproyectoscombo';
            axios.post(url,data)
            .then((response) => {
                try {
                    const data = response.data.recordset;
                    data.map((rows) => {
                        if(Number(GlobalNivelUsuario)==1){
                            str = str + `<option value="${rows.IDPROYECTO}">${rows.PROYECTO} 
                            (Presupuesto: ${funciones.setMoneda(rows.PRESUPUESTO,'Q')})</option>`;
                        }else{
                            str = str + `<option value="${rows.IDPROYECTO}">${rows.PROYECTO}</option>`;
                        }
                        
                    })
                    container.innerHTML=str;
                    resolve();
                } catch (err) {
                    container.innerHTML='<option value="SN">No hay datos..</option>';
                    resolve();
                }
            }, (error) => {
                    console.log(error);
                    container.innerHTML='<option value="SN">Error..</option>';
                    reject();
            });

        })

    },
    proyectos_combo_caja_promise: (idContainer) => {

        let container  = document.getElementById(idContainer);    
        return new Promise((resolve,reject)=>{
            
            let str = '<option value=0>GASTO DE OFICINA</option>';

            let data = {
                activo : 'NO'
            };
    
            let url = GlobalUrlBackend + '/proyectos/listaproyectoscombo';
            axios.post(url,data)
            .then((response) => {
                try {
                    const data = response.data.recordset;
                    data.map((rows) => {
                        if(Number(GlobalNivelUsuario)==1){
                            str = str + `<option value="${rows.IDPROYECTO}">${rows.PROYECTO} (Presupuesto: ${funciones.setMoneda(rows.PRESUPUESTO,'Q')})</option>`;
                        }else{
                            str = str + `<option value="${rows.IDPROYECTO}">${rows.PROYECTO}</option>`;
                        }
                    })
                    container.innerHTML=str;
                    resolve();
                } catch (err) {
                    container.innerHTML='<option value="SN">No hay datos..</option>';
                    resolve();
                }
            }, (error) => {
                    console.log(error);
                    container.innerHTML='<option value="SN">Error..</option>';
                    reject();
            });

        })

    },
    proyectos_combo: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';
        
        
            let data = {
                activo : 'NO'
            };
    
            let url = GlobalUrlBackend + '/proyectos/listaproyectoscombo';
            axios.post(url,data)
            .then((response) => {
                try {
                    const data = response.data.recordset;
                    data.map((rows) => {
                        
                        str = str + `<option value="${rows.IDPROYECTO}">${rows.PROYECTO}</option>`
                    })
                    container.innerHTML = str;
                } catch (err) {
                    container.innerHTML = '<option value="SN">No hay datos..</option>';
                }
            }, (error) => {
                    console.log(error);
                    container.innerHTML = '<option value="SN">Error..</option>';
            });           

    },
    proyecto_acreedores_combo: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';

            let url = GlobalUrlBackend + '/acreedores/listado'

            axios.post(url,{tipo:'TODOS'})
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION} (${rows.TIPO})</option>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                });

    },
    proyectos_insertar: (proyecto, direccion, inicio, final, contacto, telefono, contratante, presupuesto) => {
        return new Promise((resolve, reject) => {

            let data = {
                proyecto: proyecto,
                direccion: direccion,
                inicio: inicio,
                final: final,
                contacto: contacto,
                telefono: telefono,
                contratante: contratante,
                presupuesto: presupuesto,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/proyectos/nuevo'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar('Proyecto nuevo creado ' + proyecto)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    proyectos_editar: (idproyecto,proyecto, direccion, inicio, final, contacto, telefono, contratante, presupuesto) => {
        return new Promise((resolve, reject) => {

            let data = {
                id:idproyecto,
                proyecto: proyecto,
                direccion: direccion,
                inicio: inicio,
                final: final,
                contacto: contacto,
                telefono: telefono,
                contratante: contratante,
                presupuesto: presupuesto,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/proyectos/editar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar('Proyecto editado ' + proyecto)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    proyectos_eliminar: (codigo) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:codigo
            };

            let url = GlobalUrlBackend + '/proyectos/eliminar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar('Eliminacion de proyecto ' + codigo)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    proyectos_finalizar: (codigo) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:codigo
            };

            let url = GlobalUrlBackend + '/proyectos/finalizar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    proyectos_subcontratistas: (idproyecto,idContainer) => {
                let container = document.getElementById(idContainer);
                container.innerHTML = GlobalLoader;
                let str = '';
            
                let url = GlobalUrlBackend + '/proyectos/subcontratistas';

                axios.post(url, {
                            idproyecto : idproyecto
                            })
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<tr>
                                            <td>
                                                ${rows.DESACREEDOR}
                                                <br>
                                                <small class="negrita">${rows.ASIGNACION}</small>
                                                <br>
                                                <small>Inicio: ${funciones.convertDate2(rows.FECHA)}</small>
                                                <br>
                                                <small>Entrega: ${funciones.convertDate2(rows.FECHAENTREGA)}</small>
                                            </td>
                                            <td>
                                                <b class="text-info">${funciones.setMoneda(rows.IMPORTE,'Q')}</b>
                                                <br>
                                                <small class="negrita text-success">Ent:${funciones.setMoneda(rows.ENTREGADO,'Q')}</small>
                                                <br>
                                                <small class="negrita text-danger">Saldo:${funciones.setMoneda((Number(rows.IMPORTE)-Number(rows.ENTREGADO)),'Q')}</small>
                                            </td>
                                            <td>
                                                <button class="btn btn-sm btn-info btn-circle"
                                                 onclick="editContrato(
                                                        ${Number(rows.NOCONTRATO)},
                                                        ${Number(rows.CODACREEDOR)},
                                                        '${rows.ASIGNACION}',
                                                        '${funciones.cleanDataFecha(rows.FECHAENTREGA)}',
                                                        ${Number(rows.IMPORTE)},
                                                        '${funciones.cleanDataFecha(rows.FECHA)}'
                                                        )">
                                                    <i class="fal fa-edit"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button class="btn btn-sm btn-danger btn-circle" onclick="deleteContrato(${Number(rows.NOCONTRATO)})">x</button>
                                            </td>
                                        </tr>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = 'Agregue un subcontratista al proyecto...';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = 'Agregue un subcontratista al proyecto...';
                });

    },
    proyectos_subcontratistas_combo: (idproyecto,idContainer) => {
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        let str = '';
    
        let url = GlobalUrlBackend + '/proyectos/subcontratistas';

        axios.post(url, {
                    idproyecto : idproyecto
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    if(Number(GlobalNivelUsuario)==1){
                        str = str + `<option value="${rows.NOCONTRATO}">${rows.DESACREEDOR} (Contrato No. ${rows.NOCONTRATO}) (Saldo:${funciones.setMoneda((Number(rows.IMPORTE)-Number(rows.ENTREGADO)),'Q')})</option>`
                    }else{
                        str = str + `<option value="${rows.NOCONTRATO}">${rows.DESACREEDOR} (Contrato No. ${rows.NOCONTRATO})</option>`
                    }
                   
                })
                container.innerHTML = str;
            } catch (err) {
                container.innerHTML = 'Agregue un subcontratista al proyecto...';
            }
        }, (error) => {
                console.log(error);
                container.innerHTML = 'Agregue un subcontratista al proyecto...';
        });

    },
    proyectos_contratante_combo: (idproyecto,idContainer) => {
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        let str = '';
    
        let url = GlobalUrlBackend + '/proyectos/contratante';

        axios.post(url, {
                    idproyecto : idproyecto
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<option value="${rows.CODCONTRATANTE}">${rows.DESCONTRATANTE}</option>`
                })
                container.innerHTML = str;
            } catch (err) {
                container.innerHTML = 'No hay contratantes...';
            }
        }, (error) => {
                console.log(error);
                container.innerHTML = 'No hay contratantes...';
        });

    },
    proyectos_datos_proyecto: (idproyecto, idDescripcion, idDireccion, idPresupuesto, idContratante, idFechaInicial, idFechaFinal) => {
        
        let descripcion = document.getElementById(idDescripcion); descripcion.value = "--";
        let direccion = document.getElementById(idDireccion); direccion.value = "--";
        let presupuesto = document.getElementById(idPresupuesto); presupuesto.value = 0;
        let finicial = document.getElementById(idFechaInicial);
        let ffinal = document.getElementById(idFechaFinal); 
        let contratante = document.getElementById(idContratante);

        descripcion.value = 'Cargando datos del proyecto...'

        let str = '';
        
        let data = {id:idproyecto}

        let url = GlobalUrlBackend + '/proyectos/datosproyecto';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    descripcion.value = rows.PROYECTO;
                    direccion.value = rows.DIRECCION;
                    presupuesto.value = Number(rows.PRESUPUESTO);
                    finicial.value = funciones.cleanDataFecha(rows.FECHAINICIO);
                    ffinal.value = funciones.cleanDataFecha(rows.FECHAFIN);
                    contratante.value = rows.CODCONTRATANTE;
                })
            } catch (err) {
                str = 'AGREGUE DATOS...';
                descripcion.value = 'No se pudo cargar...'
                GlobalSelectedCodProyecto = 0;
            }
        }, (error) => {
                str = 'ERROR...';
                descripcion.value = 'No se pudo cargar...'
                GlobalSelectedCodProyecto = 0;
        });           
    },
    subcontratistas_combo: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';

            let url = GlobalUrlBackend + '/acreedores/listado'

            axios.post(url, {tipo: "SUBCONTRATISTA"})
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION}</option>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                });

    },
    subcontratistas_combo_promise: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';

        return new Promise((resolve,reject)=>{
            let url = GlobalUrlBackend + '/acreedores/listado'

            axios.post(url, {tipo: "SUBCONTRATISTA"})
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION}</option>`
                        })
                        container.innerHTML = str;
                        resolve();
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                        reject();
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                        reject();
                });
        })

    },
    subcontrato_insertar: (idProyecto,idSubcontratista,asignacion,importe,fecha,fechainicio) => {
        return new Promise((resolve, reject) => {

            let data = {
                idproyecto:idProyecto,
                idsubcontratista:idSubcontratista,
                fechainicio:fechainicio,
                fecha: fecha,
                asignacion:asignacion,
                importe:Number(importe)
            };

            let url = GlobalUrlBackend + '/proyectos/nuevocontrato'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar('Subcontrato creado ' + asignacion)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    subcontrato_editar: (nocontrato,idSubcontratista,asignacion,importe,fecha,fechainicio) => {
        return new Promise((resolve, reject) => {

            let data = {
                nocontrato:nocontrato,
                idsubcontratista:idSubcontratista,
                fechainicio:fechainicio,
                fecha: fecha,
                asignacion:asignacion,
                importe:Number(importe)
            };

            let url = GlobalUrlBackend + '/proyectos/editarcontrato'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar(`Edición de subcontrato No: ${nocontrato}, asinacion ${asignacion}`)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    subcontrato_eliminar: (nocontrato) => {
        return new Promise((resolve, reject) => {

            let data = {
                nocontrato:nocontrato
            };

            let url = GlobalUrlBackend + '/proyectos/eliminarcontrato'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar('Sucontrato eliminado ' + nocontrato.toString())
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });


        });
    },
    subcontrato_listado: (idproyecto,idContainer)=>{
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        
        let str = '';

            let url = GlobalUrlBackend + '/proyectos/subcontratos'

            axios.post(url, {idproyecto: idproyecto})
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<tr class="border-info hand" 
                            onClick="detalleContrato(${rows.NOCONTRATO},
                                '${funciones.cleanDataFecha(rows.FECHAENTREGA)}',
                                '${rows.PROYECTO}',
                                '${rows.DESACREEDOR}',
                                '${rows.ASIGNACION}',
                                '${funciones.setMoneda(rows.IMPORTE,'Q')}',
                                '${funciones.setMoneda(rows.ENTREGADO,'Q')}',
                                '${funciones.setMoneda((Number(rows.IMPORTE)-Number(rows.ENTREGADO)),'Q')}'
                                )">
                                            <td>Correlativo: ${rows.NOCONTRATO}
                                                <hr class="solid">
                                                <small class="">Entrega:</small>
                                                <br>
                                                <small class="negrita">${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHAENTREGA))}</small>
                                            </td>
                                            <td><!--${rows.PROYECTO}<br>-->
                                                <div class="negrita text-info">${rows.DESACREEDOR}</div>
                                                <br>
                                                <small class="">Tarea:${rows.ASIGNACION}</small>
                                            </td>
                                            <td><b>${funciones.setMoneda(rows.IMPORTE,'Q')}</b>
                                                <br>
                                                <small class="text-success">E:${funciones.setMoneda(rows.ENTREGADO,'Q')}</small>
                                                <br>
                                                <small class="negrita text-danger">S:${funciones.setMoneda((Number(rows.IMPORTE)-Number(rows.ENTREGADO)),'Q')}</small>
                                            </td>
                                        </tr>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                });

    },
    contratantes_combo: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';

            let url = GlobalUrlBackend + '/contratantes/listado'

            axios.post(url)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION}</option>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                });

    },
    contratantes_combo_promise: (idContainer) => {

        let container = document.getElementById(idContainer);
        
        return new Promise((resolve,reject)=>{
            let str = '';

            let url = GlobalUrlBackend + '/contratantes/listado'

            axios.post(url)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION}</option>`
                        })
                        container.innerHTML = str;
                        resolve();
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                        reject();
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                        reject();
                });

        })
        
    },
    contratantes_proyectos_combo: (codcontratante,idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';

            let url = GlobalUrlBackend + '/contratantes/listadoproyectos';

            axios.post(url, {codcontratante:codcontratante})
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            if(Number(GlobalNivelUsuario)==1){
                                str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION} (Saldo: ${funciones.setMoneda(rows.SALDO,'Q')})</option>`
                            }else{
                                str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION} </option>`
                            }
                           
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                });

    },
    proveedores_combo: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';

            let url = GlobalUrlBackend + '/acreedores/listado'

            axios.post(url, {tipo: "PROVEEDOR"})
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION}</option>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                });

    },
    cheques_contratista_insertar: (codproyecto,fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo,concepto) => {
        return new Promise((resolve, reject) => {

            let data = {
                fecha:fecha,
                idproyecto:codproyecto,
                nocontrato:nocontrato,
                codacreedor: codacreedor,
                codcuenta:codcuenta,
                numero:numero,
                cantidad:cantidad,
                recibe:recibe,
                obs:obs,
                rubro:rubro,
                tipo:tipo,
                concepto:concepto,
                usuario:GlobalUsuario,
                nofactura:'SN'
            };

            let url = GlobalUrlBackend + '/cheques/nuevo'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar(`Cheque nuevo. a subcontratista No: ${numero}, importe: ${cantidad}`)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    cheques_proveedor_insertar: (codproyecto,fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo,concepto,nofactura) => {
        return new Promise((resolve, reject) => {

            let data = {
                fecha:fecha,
                idproyecto:codproyecto,
                nocontrato:nocontrato,
                codacreedor: codacreedor,
                codcuenta:codcuenta,
                numero:numero,
                cantidad:cantidad,
                recibe:recibe,
                obs:obs,
                rubro:rubro,
                tipo:tipo,
                concepto:concepto,
                usuario:GlobalUsuario,
                nofactura:nofactura
            };

            let url = GlobalUrlBackend + '/cheques/nuevo'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar(`Cheque nuevo a proveedor No: ${numero}, importe: ${cantidad}`)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    cheques_contratante_insertar: (codproyecto,fecha, codcontratante,banco,numero,cantidad,recibe,obs,tipo,concepto) => {
                    
        return new Promise((resolve, reject) => {

            let data = {
                idproyecto:codproyecto,
                fecha:fecha,
                codcontratante:codcontratante,
                banco:banco,
                numero:numero,
                cantidad:cantidad,
                recibe:recibe,
                obs:obs,
                tipo:tipo,
                concepto:concepto,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/cheques/nuevochequecontratante'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar(`Cheque nuevo de contratante No: ${numero}, importe: ${cantidad}`)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    cheques_proyecto_todos: (idproyecto,idContainer1,idPresupuesto,idSaldo,idDiferencia) => {
        
        let container1 = document.getElementById(idContainer1);
        container1.innerHTML = GlobalLoader;
        //let container2 = document.getElementById(idContainer2);
        //container2.innerHTML = GlobalLoader;
        //let container3 = document.getElementById(idContainer3);
        //container3.innerHTML = GlobalLoader;

        let lbPresupuesto = document.getElementById(idPresupuesto);
        lbPresupuesto.innerText = 'Q --';
        let lbSaldo = document.getElementById(idSaldo);
        lbSaldo.innerText = 'Q --';
        let lbDiferencia = document.getElementById(idDiferencia);
        lbDiferencia.innerText = 'Q --';
        
        let str1 = ''; let str2 = ''; let str3 = '';
        let varTotalPresupuesto = 0; let varTotalSaldo = 0;

        let newrow = '';

        let url = GlobalUrlBackend + '/cheques/listadoproyecto';

        axios.post(url, {
                    idproyecto : idproyecto
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    let tipo = rows.TIPOCHEQUE;
                    let importe = Number(rows.IMPORTE);
                    if(importe<0){importe= importe * -1};
                    newrow = `<tr class="border-bottom border-info">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                        <br>
                                        <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                </td>
                                <td>${rows.BANCO}
                                        <br>
                                        <small>Cuenta No. ${rows.NOCUENTA}</small>
                                        <br>
                                        <small>No.Factura/Recibo: ${rows.NOFACTURA}</small>
                                </td>
                                <td>${rows.DESACREEDOR}
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION}</small>
                                        <br>
                                        <small class="negrita">Concepto:${rows.CONCEPTO}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                </td>
                                <td>${funciones.setMoneda(importe,'Q')}</td>
                                <td>${tipo}</td>
                                <td>
                                    <button class="btn btn-sm btn-danger btn-circle" onclick="deleteCheque(${rows.ID})">x</button>
                                </td>
                            </tr>`
                            str1 = str1 + newrow;
                    switch (tipo) {
                        case 'SUBCONTRATISTA':
                            //str1 = str1 + newrow;
                            varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                            break;
                        case 'PROVEEDOR':
                            //str2 = str2 + newrow;
                            varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                            break;
                        case 'CONTRATANTE':
                            //str3 = str3 + newrow;
                            varTotalPresupuesto = varTotalPresupuesto + Number(rows.IMPORTE);
                            break;
                    }
                })
                container1.innerHTML = str1;
                //container2.innerHTML = str2;
                //container3.innerHTML = str3;
                lbSaldo.innerText = funciones.setMoneda((varTotalSaldo * -1),'Q');
                lbPresupuesto.innerText = funciones.setMoneda((varTotalPresupuesto),'Q');
                let dif = varTotalPresupuesto - (varTotalSaldo * -1); //recibido menos ejecutado
                if(Number(dif)>0){
                    lbDiferencia.innerHTML = `<b class="text-info">${funciones.setMoneda(dif,'Q')}</b>`;
                }else{
                    lbDiferencia.innerHTML = `<b class="text-danger">${funciones.setMoneda(dif,'Q')}</b>`;
                }
            } catch (err) {
                container1.innerHTML = 'Agregue un cheque al proyecto...';
                //container2.innerHTML = 'Agregue un cheque al proyecto...';
                //container3.innerHTML = 'Agregue un cheque al proyecto...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
                lbDiferencia.innerText = 'Q --';
            }
        }, (error) => {
                console.log(error);
                container1.innerHTML = 'Agregue un cheque al proyecto...';
                //container2.innerHTML = 'Agregue un cheque al proyecto...';
                //container3.innerHTML = 'Agregue un cheque al proyecto...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
                lbDiferencia.innerText = 'Q --';
        });

    },
    cheques_proyecto: (idproyecto,idContainer1,idContainer2,idContainer3,idPresupuesto,idSaldo,idDiferencia) => {
        
        let container1 = document.getElementById(idContainer1);
        container1.innerHTML = GlobalLoader;
        let container2 = document.getElementById(idContainer2);
        container2.innerHTML = GlobalLoader;
        let container3 = document.getElementById(idContainer3);
        container3.innerHTML = GlobalLoader;

        let lbPresupuesto = document.getElementById(idPresupuesto);
        lbPresupuesto.innerText = 'Q --';
        let lbSaldo = document.getElementById(idSaldo);
        lbSaldo.innerText = 'Q --';
        let lbDiferencia = document.getElementById(idDiferencia);
        lbDiferencia.innerText = 'Q --';
        
        let str1 = ''; let str2 = ''; let str3 = '';
        let varTotalPresupuesto = 0; let varTotalSaldo = 0;

        let newrow = '';

        let url = GlobalUrlBackend + '/cheques/listadoproyecto';

        axios.post(url, {
                    idproyecto : idproyecto
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    let tipo = rows.TIPOCHEQUE;
                    let importe = Number(rows.IMPORTE);
                    if(importe<0){importe= importe * -1};
                    newrow = `<tr class="border-bottom border-info">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                        <br>
                                        <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                </td>
                                <td>${rows.BANCO}
                                        <br>
                                        <small>Cuenta No. ${rows.NOCUENTA}</small>
                                        <br>
                                        <small>No.Factura/Recibo: ${rows.NOFACTURA}</small>
                                </td>
                                <td>${rows.DESACREEDOR}
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION}</small>
                                        <br>
                                        <small class="negrita">Concepto:${rows.CONCEPTO}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                </td>
                                <td>${funciones.setMoneda(importe,'Q')}</td>
                                <td>
                                    <button class="btn btn-sm btn-danger btn-circle" onclick="deleteCheque(${rows.ID})">x</button>
                                </td>
                            </tr>`
                    switch (tipo) {
                        case 'SUBCONTRATISTA':
                            str1 = str1 + newrow;
                            varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                            break;
                        case 'PROVEEDOR':
                            str2 = str2 + newrow;
                            varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                            break;
                        case 'CONTRATANTE':
                            str3 = str3 + newrow;
                            varTotalPresupuesto = varTotalPresupuesto + Number(rows.IMPORTE);
                            break;
                    }
                })
                container1.innerHTML = str1;
                container2.innerHTML = str2;
                container3.innerHTML = str3;
                lbSaldo.innerText = funciones.setMoneda((varTotalSaldo * -1),'Q');
                lbPresupuesto.innerText = funciones.setMoneda((varTotalPresupuesto),'Q');
                let dif = varTotalPresupuesto - (varTotalSaldo * -1); //recibido menos ejecutado
                if(Number(dif)>0){
                    lbDiferencia.innerHTML = `<b class="text-info">${funciones.setMoneda(dif,'Q')}</b>`;
                }else{
                    lbDiferencia.innerHTML = `<b class="text-danger">${funciones.setMoneda(dif,'Q')}</b>`;
                }
            } catch (err) {
                container1.innerHTML = 'Agregue un cheque al proyecto...';
                container2.innerHTML = 'Agregue un cheque al proyecto...';
                container3.innerHTML = 'Agregue un cheque al proyecto...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
                lbDiferencia.innerText = 'Q --';
            }
        }, (error) => {
                console.log(error);
                container1.innerHTML = 'Agregue un cheque al proyecto...';
                container2.innerHTML = 'Agregue un cheque al proyecto...';
                container3.innerHTML = 'Agregue un cheque al proyecto...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
                lbDiferencia.innerText = 'Q --';
        });

    },
    cheques_cajachica: (idproyecto,idContainer) => {
        
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        
        let str = ''; 
       
        let url = GlobalUrlBackend + '/cheques/listadoproyectocaja';

        axios.post(url, {
                    idproyecto : idproyecto
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    let importe = Number(rows.IMPORTE);
                    if(importe<0){importe= importe *-1};
                    str = str + `<tr class="border-bottom border-info">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                        <br>
                                        <small class="negrita text-danger">Factura No. ${rows.NOFACTURA}</small>
                                </td>
                                <td>${rows.ACREEDOR}
                                        <br>
                                        <small>Usado para: ${rows.DESCRIPCION}</small> 
                                        <br>
                                        <small>Usuario: ${rows.USUARIO}</small>
                                </td>
                                
                                <td><b>${funciones.setMoneda(importe,'Q')}</b></td>
                                
                            </tr>`
                  
                })
                container.innerHTML = str;
                
            } catch (err) {
                container.innerHTML = 'Agregue un cheque al proyecto...';
                       }
        }, (error) => {
                console.log(error);
                container.innerHTML = 'Agregue un cheque al proyecto...';
        });

    },
    cheques_contrato: (nocontrato,idContainer) => {
        
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        
        let str = '';
        
        let url = GlobalUrlBackend + '/cheques/listadocontrato';

        axios.post(url, {
                    nocontrato : nocontrato
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    let tipo = rows.TIPOCHEQUE;
                    let importe = Number(rows.IMPORTE);
                    if(importe<0){importe= importe * -1};
                    newrow = `<tr class="border-bottom border-info">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                        <br>
                                        <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                </td>
                                <td>${rows.BANCO}
                                        <br>
                                        <small>Cuenta No. ${rows.NOCUENTA}</small>
                                </td>
                                <td>${rows.DESACREEDOR}
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                </td>
                                <td>${funciones.setMoneda(importe,'Q')}</td>
                                <td>
                                    <button class="btn btn-sm btn-danger btn-circle" onclick="deleteCheque(${rows.ID})">x</button>
                                </td>
                            </tr>`
                            str = str + newrow;
                })
                container.innerHTML = str;
            } catch (err) {
                container.innerHTML = 'Agregue un cheque al contrato...';
            }
        }, (error) => {
                console.log(error);
                container.innerHTML = 'Agregue un cheque al contrato...';
        });

    },
    cheques_delete: (id) => {
        return new Promise((resolve, reject) => {

            let data = {
                id:id
            };

            let url = GlobalUrlBackend + '/cheques/eliminar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        api.bitacora_insertar(`Cheque Eliminado. Id: ${id}`)
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    cuentas_combo: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        
        let str = '';

            let url = GlobalUrlBackend + '/bancos/listado'

            axios.post(url)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODCUENTA}">${rows.BANCO} (No. ${rows.NUMERO})</option>`
                        })
                        container.innerHTML = str;
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                });

    },
    cuentas_combo_promise: (idContainer) => {
        let container = document.getElementById(idContainer);
        
        let str = '';

        return new Promise((resolve, reject) => {
            let url = GlobalUrlBackend + '/bancos/listado'

            axios.post(url)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                            str = str + `<option value="${rows.CODCUENTA}">${rows.BANCO} (No. ${rows.NUMERO})</option>`
                        })
                        container.innerHTML = str;
                        resolve();
                    } catch (err) {
                        container.innerHTML = '<option value="SN">No hay datos..</option>';
                        reject();
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = '<option value="SN">Error..</option>';
                        reject();
                });


        })
      

        
    },
    config_bancos_lista: (idContainer)=>{
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        
        let strHeader = `<table class="table table-striped table-responsive table-hover">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>DESCRIPCION</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>`
        let str = '';
        let strFooter = `</tbody></table>`
        
        
        let url = GlobalUrlBackend + '/bancos/listado';

        axios.post(url)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    let d = []; d = rows
                    str = str + `<tr class="border-bottom border-info">
                                <td>${rows.CODCUENTA}</td>
                                <td>${rows.DESCRIPCION}
                                    <br>
                                        <small class="negrita">Banco: ${rows.BANCO}</small>
                                        <br>
                                        <small class="negrita text-info">Cuenta No. ${rows.NUMERO}</small>
                                        <hr class="solid">
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-warning btn-circle" onclick="getMenuBancos(${rows.CODCUENTA},'${rows.DESCRIPCION}','${rows.BANCO}','${rows.NUMERO}')">
                                        <i class="fal fa-edit"></i>
                                    </button>
                                </td>
                            </tr>`
                })
                container.innerHTML = strHeader + str + strFooter;
            } catch (err) {
                container.innerHTML = 'Agregue un banco...';
            }
        }, (error) => {
                console.log(error);
                container.innerHTML = 'Agregue un banco...';
        });
    },
    config_bancos_insert: (descripcion,bancos,numero) => {
        return new Promise((resolve, reject) => {

            let data = {
                descripcion: descripcion,
                bancos:bancos,
                numero:numero
            };

            let url = GlobalUrlBackend + '/bancos/nuevo'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_bancos_update: (codigo,descripcion,bancos,numero) => {
        return new Promise((resolve, reject) => {

            let data = {
                codcuenta:codigo,
                descripcion: descripcion,
                bancos:bancos,
                numero:numero
            };

            let url = GlobalUrlBackend + '/bancos/editar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_bancos_delete: (codigo) => {
        return new Promise((resolve, reject) => {

            let data = {
                codcuenta:codigo
            };

            let url = GlobalUrlBackend + '/bancos/eliminar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    }, 
    config_contratantes_lista: (idContainer) => {
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;

        let strHeader = `<table class="table table-striped table-responsive table-hover">
                            <thead class="bg-warning text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>DESCRIPCION</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>`
        let str = '';
        let strFooter = `</tbody></table>`

            let url = GlobalUrlBackend + '/contratantes/listado'

            axios.post(url)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                                str = str + `<tr class="border-warning border-bottom">
                                                <td>${rows.CODIGO}</td>
                                                <td>${rows.DESCRIPCION}
                                                    <br>
                                                    <small class="negrita">Teléfono: ${rows.TELEFONO}</small>
                                                </td>

                                                <td>
                                                    <button class="btn btn-sm btn-warning btn-circle" onclick="getMenuContratantes(${rows.CODIGO},'${rows.DESCRIPCION}','${rows.TELEFONO}')">
                                                        <i class="fal fa-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>`
                        })
                        container.innerHTML = strHeader + str + strFooter;
                    } catch (err) {
                        container.innerHTML = 'No hay datos..';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = 'Error..';
                });

    },
    config_contratantes_delete: (codigo) => {
        return new Promise((resolve, reject) => {

            let data = {
                codcontratante:codigo
            };

            let url = GlobalUrlBackend + '/contratantes/eliminar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_contratantes_insert: (descripcion,telefono) => {
        return new Promise((resolve, reject) => {

            let data = {
                descripcion:descripcion,
                telefono:telefono
            };

            let url = GlobalUrlBackend + '/contratantes/nuevo'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_contratantes_update: (codigo,descripcion,telefono) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:codigo,
                descripcion:descripcion,
                telefono:telefono
            };

            let url = GlobalUrlBackend + '/contratantes/editar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    rubros_listado: (idContainer) => {
            let container = document.getElementById(idContainer)
            let str = '';
    
            let url = GlobalUrlBackend + '/proyectos/listarubros';
            axios.post(url)
            .then((response) => {
                try {
                    const data = response.data.recordset;
                    data.map((rows) => {
                        str = str + `<option value="${rows.RUBRO}">${rows.RUBRO}</option>`
                    })
                    container.innerHTML = str;
                } catch (err) {
                    str = '<option value="SN">';
                    container.innerHTML = str;
                }
            }, (error) => {
                    str = '<option value="SN">Error..</option>';
                    container.innerHTML = str;
            });           
    },
    rubros_combo_promise: (idContainer) => {
        let container = document.getElementById(idContainer)
        let str = '';

        return new Promise((resolve,reject)=>{
            let url = GlobalUrlBackend + '/proyectos/listarubros';
            axios.post(url)
            .then((response) => {
                try {
                    const data = response.data.recordset;
                    data.map((rows) => {
                        str = str + `<option value="${rows.RUBRO}">${rows.RUBRO}</option>`
                    })
                    container.innerHTML = str;
                    resolve();
                } catch (err) {
                    str = '<option value="SN">';
                    container.innerHTML = str;
                    reject();
                }
            }, (error) => {
                    str = '<option value="SN">Error..</option>';
                    container.innerHTML = str;
                    reject();
            });
        })
                   
},
    config_rubros_insert: (descripcion) => {
        return new Promise((resolve, reject) => {

            let data = {
                descripcion:descripcion
            };

            let url = GlobalUrlBackend + '/proyectos/insertrubro'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_rubros_update: (id,descripcion) => {
        return new Promise((resolve, reject) => {

            let data = {
                id:id,
                descripcion:descripcion
            };

            let url = GlobalUrlBackend + '/proyectos/updaterubro'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_rubros_delete: (id) => {
        return new Promise((resolve, reject) => {

            let data = {
                id:id
            };

            let url = GlobalUrlBackend + '/proyectos/deleterubro'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_rubros_lista: (idContainer) => {
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        let strHeader = `<table class="table table-striped table-responsive table-hover">
                            <thead class="bg-warning text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>DESCRIPCION</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>`
        let str = '';
        let strFooter = `</tbody></table>`

        let url = GlobalUrlBackend + '/proyectos/listarubros';
        axios.post(url)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<tr class="border-warning border-bottom">
                                                <td>${rows.ID}</td>
                                                <td>${rows.RUBRO}
                                                </td>

                                                <td>
                                                    <button class="btn btn-sm btn-warning btn-circle" onclick="getMenuRubros(${rows.ID},'${rows.RUBRO}')">
                                                        <i class="fal fa-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>`
                })
                container.innerHTML = strHeader + str + strFooter;
            } catch (err) {
                str = 'AGREGUE DATOS...';
                container.innerHTML = str;
            }
        }, (error) => {
                str = 'ERROR...';
                container.innerHTML = str;
        });           
    },
    config_usuarios_insert: (u,p,n) => {
        return new Promise((resolve, reject) => {

            let data = {
                u:u,
                p:p,
                n:n
            };

            let url = GlobalUrlBackend + '/usuarios/nuevo'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_usuarios_edit: (u,p,n,c) => {
        return new Promise((resolve, reject) => {

            let data = {
                u:u,
                p:p,
                n:n,
                c:c
            };

            let url = GlobalUrlBackend + '/usuarios/editar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_usuarios_lista: (idContainer) => {
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        let strHeader = `<table class="table table-striped table-responsive table-hover">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>USUARIO/CLAVE</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>`
        let str = '';
        let strFooter = `</tbody></table>`
        let data = {nivel:GlobalNivelUsuario}
        let url = GlobalUrlBackend + '/usuarios/listado';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<tr class="border-info border-bottom">
                                                <td>${rows.CODIGO}</td>
                                                <td>${rows.USUARIO}
                                                    <br>
                                                    <small class="negrita">Clave:${rows.PASS}</small>
                                                    <br>
                                                    <small class="negrita text-danger">Nivel:${rows.NIVEL}</small>
                                                </td>

                                                <td>
                                                    <button class="btn btn-sm btn-info btn-circle" 
                                                        onclick="getMenuUsuarios(${rows.CODIGO},'${rows.USUARIO}','${rows.PASS}','${rows.NIVEL}')">
                                                        <i class="fal fa-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>`
                })
                container.innerHTML = strHeader + str + strFooter;
            } catch (err) {
                str = 'AGREGUE DATOS...';
                container.innerHTML = str;
            }
        }, (error) => {
                str = 'ERROR...';
                container.innerHTML = str;
        });           
    },
    config_usuarios_delete: (id) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:id
            };

            let url = GlobalUrlBackend + '/usuarios/eliminar'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_proveedores_insert: (desc,tipo) => {
        return new Promise((resolve, reject) => {

            let data = {
                descripcion:desc,
                tipo:tipo
            };

            let url = GlobalUrlBackend + '/acreedores/insert'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_proveedores_edit: (codigo,desc) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:codigo,
                descripcion:desc
            };

            let url = GlobalUrlBackend + '/acreedores/edit'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_proveedores_lista: (idContainer) => {
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        let strHeader = `<table class="table table-striped table-responsive table-hover">
                            <thead class="bg-trans-gradient text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>PROVEEDOR</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>`
        let str = '';
        let strFooter = `</tbody></table>`
        let data = {tipo:'PROVEEDOR'}
        let url = GlobalUrlBackend + '/acreedores/listado';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<tr class="border-info border-bottom">
                                                <td>${rows.CODIGO}</td>
                                                <td>${rows.DESCRIPCION}</td>
                                                <td>
                                                    <button class="btn btn-sm btn-primary btn-circle" 
                                                        onclick="getMenuProveedores(${rows.CODIGO},'${rows.DESCRIPCION}')">
                                                        <i class="fal fa-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>`
                })
                container.innerHTML = strHeader + str + strFooter;
            } catch (err) {
                str = 'AGREGUE DATOS...';
                container.innerHTML = str;
            }
        }, (error) => {
                str = 'ERROR...';
                container.innerHTML = str;
        });           
    },
    config_proveedores_delete: (id) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:id
            };

            let url = GlobalUrlBackend + '/acreedores/delete'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    config_subcontratistas_lista: (idContainer) => {
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        let strHeader = `<table class="table table-striped table-responsive table-hover">
                            <thead class="bg-warning">
                                <tr>
                                    <td>ID</td>
                                    <td>SUBCONTRATISTA</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>`
        let str = '';
        let strFooter = `</tbody></table>`
        let data = {tipo:'SUBCONTRATISTA'}
        let url = GlobalUrlBackend + '/acreedores/listado';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<tr class="border-info border-bottom">
                                                <td>${rows.CODIGO}</td>
                                                <td>${rows.DESCRIPCION}</td>
                                                <td>
                                                    <button class="btn btn-sm btn-warning btn-circle" 
                                                        onclick="getMenuSubcontratistas(${rows.CODIGO},'${rows.DESCRIPCION}')">
                                                        <i class="fal fa-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>`
                })
                container.innerHTML = strHeader + str + strFooter;
            } catch (err) {
                str = 'AGREGUE DATOS...';
                container.innerHTML = str;
            }
        }, (error) => {
                str = 'ERROR...';
                container.innerHTML = str;
        });           
    },
    config_getclave:()=>{
        let url = GlobalUrlBackend + '/usuarios/claveverificacion';
        axios.post(url)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    GlobalConfigClave = rows.VALOR;
                })
            } catch (err) {
                GlobalConfigClave = '0';
            }
        }, (error) => {
            GlobalConfigClave = '0';
        });             
    },
    config_setClave: (nuevaclave) => {
        return new Promise((resolve, reject) => {

            let data = {
                clave:nuevaclave
            };

            let url = GlobalUrlBackend + '/usuarios/claveset'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    verificar_nocheque: (codcuenta,numero)=>{
        return new Promise((resolve, reject) => {
            if(numero=='0'){
                resolve();
                //return;
            }

            let data = {
                codcuenta:codcuenta,
                numero:numero
            };

            let url = GlobalUrlBackend + '/cheques/verificarcheque'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        resolve();
                    } else {
                        reject();
                    }
                }, (error) => {
                    console.log(error);
                    resolve();
                });



        });
    },
    bitacora_lista: (idContainer)=>{
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;


        let strHeader = `
                        <table class="table table-striped table-responsive table-hover">
                            <thead class="bg-danger text-white">
                                <tr>
                                    <td>FECHA</td>
                                    <td>EVENTO</td>
                                </tr>
                            </thead>
                            <tbody>`
        let str = '';
        let strFooter = `</tbody></table>`

            let url = GlobalUrlBackend + '/bitacora/listado'

            axios.post(url)
                .then((response) => {
                    try {
                        const data = response.data.recordset;
                        data.map((rows) => {
                                str = str + `<tr class="border-warning border-bottom">
                                                <td>${funciones.convertDate2(rows.FECHA)}</td>
                                                <td>${rows.DESCRIPCION}
                                                    <br>
                                                    <small class="negrita">Usuario: ${rows.USUARIO}</small>
                                                </td>
                                            </tr>`
                        })
                        container.innerHTML = strHeader + str + strFooter;
                        
                    } catch (err) {
                        container.innerHTML = 'No hay datos..';
                    }
                }, (error) => {
                        console.log(error);
                        container.innerHTML = 'Error..';
                });
    },
    bitacora_insertar: (descripcion) => {
       
            let data = {
                fecha:funciones.getFecha(),
                hora:funciones.getHora(),
                descripcion: descripcion,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/bitacora/nuevo'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    console.log(data);
                }, (error) => {
                    console.log(error);
          
                });

    },
    caja_lista: (idContainer,status) => {
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        
        let str = '';
        
        let data = {finalizado:status}

        let url = GlobalUrlBackend + '/cajas/listado';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<tr class="" onclick="getHistorialCorte(${rows.NOCORTE},'${funciones.convertDate2(rows.FECHA)}',${rows.IMPORTE})">
                                                <td class="negrita text-danger">${rows.NOCORTE}</td>
                                                <td>${funciones.convertDate2(rows.FECHA)}
                                                    <br>
                                                    <small class="negrita">Usuario:${rows.USUARIO}</small>
                                                </td>
                                                <td>${rows.BANCO + '-' + rows.NUMERO}
                                                    <br>
                                                    <small class="negrita">Cheque No: ${rows.NOCHEQUE}</small>
                                                    <br>
                                                    <small class="negrita">Recibió: ${rows.RECIBIDO}</small>
                                                    
                                                </td>
                                                <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                                                <td>
                                                    <button class="btn btn-sm btn-info btn-circle" >
                                                        <i class="fal fa-list"></i>
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
    },
    caja_insertar: (codcuenta,nocheque,fecha,importe,recibido) => {
    
        return new Promise((resolve, reject)=>{
            let data = {
                codcuenta:codcuenta,
                nocheque:nocheque,
                fecha:fecha,
                importe:importe,
                recibido:recibido,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/cajas/insertcorte'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });
       })

    },
    caja_finalizar: (nocorte) => {
    
        return new Promise((resolve, reject)=>{
            let data = {
                nocorte:nocorte
            };

            let url = GlobalUrlBackend + '/cajas/finalizarcorte'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });
       })

    },
    caja_historial_lista: (idContainer,nocorte, idContainerTotal, idContainerSaldo, monto) => {
        
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        let containerTotal = document.getElementById(idContainerTotal)
        containerTotal.innerHTML = '----';
        let containerSaldo = document.getElementById(idContainerSaldo);
        containerSaldo.innerHTML = '----';
        
        
        let str = '';
        let varTotal = 0;

        let data = {
            nocorte:nocorte
        }
        let url = GlobalUrlBackend + '/cajas/listadomovimientos';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    varTotal = varTotal + Number(rows.IMPORTE);
                    str = str + `<tr class="" onclick="">
                                                <td>${funciones.convertDate2(rows.FECHA)}
                                                    <br>
                                                    <small class="negrita text-info">Factura:${rows.NOFACTURA}</small>
                                                </td>
                                                <td>${rows.PROYECTO}
                                                    <br>
                                                    <small class="negrita">${rows.DESCRIPCION}</small>
                                                </td>
                                                <td>${rows.RUBRO}
                                                    <br>
                                                    <small class="negrita">${rows.ACREEDOR}</small>
                                                </td>
                                                <td><b class="text-danger">${funciones.setMoneda(rows.IMPORTE,'Q')}</b></td>
                                                <td>
                                                    <button class="btn btn-danger btn-sm btn-circle" onclick="deleteMovimientoCaja(${rows.ID})">
                                                        x
                                                    </button>
                                                </td>
                                            </tr>`
                })
                container.innerHTML = str;
                containerSaldo.innerHTML = funciones.setMoneda((Number(monto) + varTotal),'Q');
                containerTotal.innerHTML = funciones.setMoneda(varTotal,'Q');
            } catch (err) {
                str = 'AGREGUE DATOS...';
                container.innerHTML = str;
                containerSaldo.innerHTML = '----';
                containerTotal.innerHTML = '----';
            }
        }, (error) => {
                str = 'ERROR...';
                container.innerHTML = str;
                containerSaldo.innerHTML = '----';
                containerTotal.innerHTML = '----';
        });           
    },
    caja_delete: (nomovimiento) => {
    
        return new Promise((resolve, reject)=>{
            let data = {
                id:nomovimiento
            };

            let url = GlobalUrlBackend + '/cajas/deletemovimiento'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });
       })

    },
    caja_insertar_movimiento: (nocorte,fecha,proyecto,acreedor,descripcion,rubro,nofactura,importe) => {
    
        return new Promise((resolve, reject)=>{
            let data = {
                nocorte:nocorte,
                fecha:fecha,
                proyecto:proyecto,
                acreedor:acreedor,
                descripcion:descripcion,
                rubro:rubro,
                nofactura:nofactura,
                importe:importe,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/cajas/insertmovimiento'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });
       })

    },
    cotiz_productos_insert: (codigo,descripcion,medida) => {
        return new Promise((resolve, reject) => {

            let data = {
                codigo:codigo,
                descripcion:descripcion,
                medida:medida
            };

            let url = GlobalUrlBackend + '/cotizaciones/insertproducto'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    cotiz_listaproductos: (idContainer) => {
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        let str = '';
        
        let data = {finalizado:status}

        let url = GlobalUrlBackend + '/cotizaciones/listadoproductos';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<tr class="" onclick="getHistorialProducto(${rows.ID})">
                                    <td>${rows.DESPROD}
                                        <br>
                                        <small class="text-danger">Código:${rows.CODPROD}</small>
                                    </td>
                                    <td>${rows.MEDIDA}</td>
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
    },
    cotiz_productos_eliminar: (codigo) => {
        return new Promise((resolve, reject) => {

            let data = {
                id:codigo
            };

            let url = GlobalUrlBackend + '/cotizaciones/deleteprod'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    cotiz_historial_producto: (idContainer,idprod) => {
        let container = document.getElementById(idContainer)
        container.innerHTML = GlobalLoader;

        let str = '';
        
        let data = {producto:idprod}

        let url = GlobalUrlBackend + '/cotizaciones/historialproducto';
        axios.post(url,data)
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    str = str + `<tr>
                                    <td>${rows.PROVEEDOR}
                                        <br>
                                        <small class="text-danger negrita">${funciones.convertDate2(rows.FECHA)}</small>
                                    </td>
                                    <td>${funciones.setMoneda(rows.PRECIO,'Q')}</td>
                                    <td>
                                        <button class="btn btn-md btn-circle btn-danger" onclick="deleteItemHistorial(${rows.ID})">
                                            <i class="fal fa-trash"></i>
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
    },
    cotiz_historial_insert: (idprod,proveedor,fecha,precio) => {
        return new Promise((resolve, reject) => {

            let data = {
                producto:idprod,
                proveedor:proveedor,
                fecha:fecha,
                precio:precio,
                usuario:GlobalUsuario
            };

            let url = GlobalUrlBackend + '/cotizaciones/insertcotiz'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    cotiz_historial_delete: (id) => {
        return new Promise((resolve, reject) => {

            let data = {
                idmov: id
            };

            let url = GlobalUrlBackend + '/cotizaciones/deletecotiz'

            axios.post(url, data)
                .then((response) => {
                    const data = response.data.recordset;
                    if (response.data.rowsAffected[0] == 0) {
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    },
    reportes_pagosmes: (idContainer1,idPresupuesto,idSaldo,idDiferencia,mes,anio) => {
        
        let container1 = document.getElementById(idContainer1);
        container1.innerHTML = GlobalLoader;
        

        let lbPresupuesto = document.getElementById(idPresupuesto);
        lbPresupuesto.innerText = 'Q --';
        let lbSaldo = document.getElementById(idSaldo);
        lbSaldo.innerText = 'Q --';
        let lbDiferencia = document.getElementById(idDiferencia);
        lbDiferencia.innerText = 'Q --';
        
        let str1 = ''; 
        let varTotalPresupuesto = 0; let varTotalSaldo = 0;

        

        let url = GlobalUrlBackend + '/reportes/pagosmes';

        axios.post(url, {
                    mes: mes,
                    anio:anio
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    let tipo = rows.TIPOCHEQUE;
                    let importe = Number(rows.IMPORTE);
                    if(importe<0){importe = importe * -1};
                    switch (tipo) {
                        case 'SUBCONTRATISTA':
                            varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                            str1 =  str1 + `<tr class="border-bottom border-info">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                        <br>
                                        <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                </td>
                                <td>${rows.BANCO}
                                        <br>
                                        <small>Cuenta No. ${rows.NOCUENTA}</small>
                                </td>
                                <td>${rows.DESACREEDOR}
                                           
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                        <br>
                                        <small>Tipo pago:${rows.TIPOCHEQUE}</small>
                                </td>
                                <td>${funciones.setMoneda(importe,'Q')}</td>
                                
                            </tr>`
                            break;
                        case 'PROVEEDOR':
                            varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                            str1 =  str1 + `<tr class="border-bottom border-info">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                        <br>
                                        <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                </td>
                                <td>${rows.BANCO}
                                        <br>
                                        <small>Cuenta No. ${rows.NOCUENTA}</small>
                                </td>
                                <td>${rows.DESACREEDOR2}
                                        
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                        <br>
                                        <small>Tipo pago:${rows.TIPOCHEQUE}</small>
                                </td>
                                <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                                
                            </tr>`
                            break;
                        case 'CONTRATANTE':
                            varTotalPresupuesto = varTotalPresupuesto + Number(rows.IMPORTE);
                            break;
                    }
                    
                    
                })
                container1.innerHTML = str1;

                lbSaldo.innerText = funciones.setMoneda((varTotalSaldo * -1),'Q');
                lbPresupuesto.innerText = funciones.setMoneda((varTotalPresupuesto),'Q');
                let dif = varTotalPresupuesto - (varTotalSaldo * -1); //recibido menos ejecutado
                if(Number(dif)>0){
                    lbDiferencia.innerHTML = `<b class="text-info">${funciones.setMoneda(dif,'Q')}</b>`;
                }else{
                    lbDiferencia.innerHTML = `<b class="text-danger">${funciones.setMoneda(dif,'Q')}</b>`;
                }
            } catch (err) {
                container1.innerHTML = 'Agregue un cheque ...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
                lbDiferencia.innerText = 'Q --';
            }
        }, (error) => {
                console.log(error);
                container1.innerHTML = 'Agregue un cheque...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
                lbDiferencia.innerText = 'Q --';
        });

    },
    reportes_recibidosmes: (idContainer1,idSaldo,mes,anio) => {
        
        let container1 = document.getElementById(idContainer1);
        container1.innerHTML = GlobalLoader;
        
        let lbSaldo = document.getElementById(idSaldo);
        lbSaldo.innerText = 'Q --';
        
        
        let str1 = ''; 
        let varTotalSaldo = 0;

        

        let url = GlobalUrlBackend + '/reportes/pagosmes';

        axios.post(url, {
                    mes: mes,
                    anio:anio
                    })
        .then((response) => {
            try {
                const data = response.data.recordset;
                data.map((rows) => {
                    let tipo = rows.TIPOCHEQUE;
                    switch (tipo) {
                        case 'CONTRATANTE':
                            varTotalSaldo = varTotalSaldo + Number(rows.IMPORTE);
                            str1 =  str1 + `<tr class="border-bottom border-success">
                                <td>${funciones.convertDate2(funciones.cleanDataFecha(rows.FECHA))}
                                        <br>
                                        <small class="negrita text-danger">Cheque No. ${rows.NOCHEQUE}</small>
                                </td>
                                <td>${rows.BANCO}
                                        <br>
                                        <small>Cuenta No. ${rows.NOCUENTA}</small>
                                </td>
                                <td>${rows.DESACREEDOR}
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                        <br>
                                        <small>Tipo pago:${rows.TIPOCHEQUE}</small>
                                </td>
                                <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                                
                            </tr>`
                            break;
                    }
                })
                container1.innerHTML = str1;
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

    },
    reportes_pagoscontratista: (idContainer1,idSaldo,mes,anio,codsubcontratista) => {
        
        let container1 = document.getElementById(idContainer1);
        container1.innerHTML = GlobalLoader;
        
        let lbSaldo = document.getElementById(idSaldo);
        lbSaldo.innerText = 'Q --';
        
        
        let str1 = ''; 
        let varTotalSaldo = 0;

        

        let url = GlobalUrlBackend + '/reportes/pagosmes_subcontratista';

        axios.post(url, {
                    codsubcontratista:codsubcontratista,
                    mes: mes,
                    anio:anio
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
                                </td>
                                <td>${rows.PROYECTO}
                                        <br>
                                        <small class="negrita text-info">${rows.ASIGNACION + ' - ' + rows.CONCEPTO}</small>
                                        <br class="solid">
                                        <small>Creado:${rows.USUARIO}</small>
                                </td>
                                <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
                                
                            </tr>`
               
                })
                container1.innerHTML = str1;
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

    },
    reportes_pagosrubros: (idContainer1,idSaldo,mes,anio,rubro) => {
        
        let container1 = document.getElementById(idContainer1);
        container1.innerHTML = GlobalLoader;
        
        let lbSaldo = document.getElementById(idSaldo);
        lbSaldo.innerText = 'Q --';
        
        
        let str1 = ''; 
        let varTotalSaldo = 0;

        

        let url = GlobalUrlBackend + '/reportes/pagosmes_rubro';

        axios.post(url, {
                    rubro:rubro,
                    mes: mes,
                    anio:anio
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
                container1.innerHTML = str1;
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

    }
}