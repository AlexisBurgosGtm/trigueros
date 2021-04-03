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
                            str = str + `<tr class="hand border-bottom" onClick="getMenuProyecto(${rows.IDPROYECTO},'${rows.PROYECTO}');">
                                        <td>${rows.PROYECTO}
                                            <br><small>${rows.DIRECCION}</small>
                                               <br>
                                            <div class="row">
                                                <div class="col-6">
                                                    <small class="text-info">Inicio: ${funciones.cleanDataFecha(rows.FECHAINICIO)}</small>
                                                </div>
                                                <div class="col-6">
                                                    <small class="text-info">Fin: ${funciones.cleanDataFecha(rows.FECHAFIN)}</small>
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
    
            let url = GlobalUrlBackend + '/proyectos/listaproyectos';
            axios.post(url,data)
            .then((response) => {
                try {
                    const data = response.data.recordset;
                    data.map((rows) => {
                        str = str + `<option value="${rows.IDPROYECTO}">${rows.PROYECTO} (Presupuesto: ${funciones.setMoneda(rows.PRESUPUESTO,'Q')})</option>`;
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
    
            let url = GlobalUrlBackend + '/proyectos/listaproyectos';
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
                presupuesto: presupuesto
            };

            let url = GlobalUrlBackend + '/proyectos/nuevo'

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
                                                ${rows.DESACREEDOR} (Contrato No.:${rows.NOCONTRATO})
                                                <br>
                                                <small class="negrita">${rows.ASIGNACION}</small>
                                                <br>
                                                <small>Entrega: ${funciones.cleanDataFecha(rows.FECHAENTREGA)}</small>
                                            </td>
                                            <td>
                                                <b class="text-info">${funciones.setMoneda(rows.IMPORTE,'Q')}</b>
                                                <br>
                                                <small class="negrita text-success">Ent:${funciones.setMoneda(rows.ENTREGADO,'Q')}</small>
                                                <br>
                                                <small class="negrita text-danger">Saldo:${funciones.setMoneda(rows.SALDO,'Q')}</small>
                                            </td>
                                            <td>
                                                <button class="btn btn-sm btn-info btn-circle"
                                                 onclick="editContrato(
                                                        ${Number(rows.NOCONTRATO)},
                                                        ${Number(rows.CODACREEDOR)},
                                                        '${rows.ASIGNACION}',
                                                        '${funciones.cleanDataFecha(rows.FECHAENTREGA)}',
                                                        ${Number(rows.IMPORTE)}
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
                    str = str + `<option value="${rows.NOCONTRATO}">${rows.DESACREEDOR} (Contrato No. ${rows.NOCONTRATO}) (Saldo:${funciones.setMoneda(rows.SALDO,'Q')})</option>`
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
    subcontrato_insertar: (idProyecto,idSubcontratista,asignacion,importe,fecha) => {
        return new Promise((resolve, reject) => {

            let data = {
                idproyecto:idProyecto,
                idsubcontratista:idSubcontratista,
                fecha: fecha,
                asignacion:asignacion,
                importe:Number(importe)
            };

            let url = GlobalUrlBackend + '/proyectos/nuevocontrato'

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
    subcontrato_editar: (nocontrato,idSubcontratista,asignacion,importe,fecha) => {
        return new Promise((resolve, reject) => {

            let data = {
                nocontrato:nocontrato,
                idsubcontratista:idSubcontratista,
                fecha: fecha,
                asignacion:asignacion,
                importe:Number(importe)
            };

            let url = GlobalUrlBackend + '/proyectos/editarcontrato'

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
                                '${funciones.setMoneda(rows.SALDO,'Q')}'
                                )">
                                            <td>No: ${rows.NOCONTRATO}
                                                <hr class="solid">
                                                <small class="">Entrega:</small>
                                                <br>
                                                <small class="negrita">${funciones.cleanDataFecha(rows.FECHAENTREGA)}</small>
                                            </td>
                                            <td>${rows.PROYECTO}
                                                <br>
                                                <small class="negrita text-info">${rows.DESACREEDOR}</small>
                                                <br>
                                                <small class="">Tarea:${rows.ASIGNACION}</small>
                                            </td>
                                            <td><b>${funciones.setMoneda(rows.IMPORTE,'Q')}</b>
                                                <br>
                                                <small class="text-success">E:${funciones.setMoneda(rows.ENTREGADO,'Q')}</small>
                                                <br>
                                                <small class="negrita text-danger">S:${funciones.setMoneda(rows.SALDO,'Q')}</small>
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
                            str = str + `<option value="${rows.CODIGO}">${rows.DESCRIPCION} (Saldo: ${funciones.setMoneda(rows.SALDO,'Q')})</option>`
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
    cheques_contratista_insertar: (codproyecto,fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo) => {
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
                tipo:tipo
            };

            let url = GlobalUrlBackend + '/cheques/nuevo'

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
    cheques_proveedor_insertar: (codproyecto,fecha,nocontrato,codacreedor,codcuenta,numero,cantidad,recibe,obs,rubro,tipo) => {
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
                tipo:tipo
            };

            let url = GlobalUrlBackend + '/cheques/nuevo'

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
    cheques_contratante_insertar: (codproyecto,fecha,
        codcontratante,banco,numero,cantidad,recibe,obs,tipo) => {
                    
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
                tipo:tipo
            };

            let url = GlobalUrlBackend + '/cheques/nuevochequecontratante'

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
    cheques_proyecto: (idproyecto,idContainer1,idContainer2,idContainer3,idPresupuesto,idSaldo) => {
        
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
                    
                    newrow = `<tr class="border-bottom border-info">
                                <td>${funciones.cleanDataFecha(rows.FECHA)}
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
                                        <small>Proyecto:${rows.PROYECTO}</small>
                                </td>
                                <td>${funciones.setMoneda(rows.IMPORTE,'Q')}</td>
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
            } catch (err) {
                container1.innerHTML = 'Agregue un cheque al proyecto...';
                container2.innerHTML = 'Agregue un cheque al proyecto...';
                container3.innerHTML = 'Agregue un cheque al proyecto...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
            }
        }, (error) => {
                console.log(error);
                container1.innerHTML = 'Agregue un cheque al proyecto...';
                container2.innerHTML = 'Agregue un cheque al proyecto...';
                container3.innerHTML = 'Agregue un cheque al proyecto...';
                lbSaldo.innerText = 'Q --';
                lbPresupuesto.innerText = 'Q --';
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
                        reject();
                    } else {
                        resolve();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });



        });
    }    
}