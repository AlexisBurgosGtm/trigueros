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
    proyectos_listado: (activo,idContainer) => {
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        let str = '';
            let data = {
                activo : activo
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
                                                ${rows.DESCONTRATISTA} (Contrato No.:${rows.NOCONTRATO})
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

    }
}