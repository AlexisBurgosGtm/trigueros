let classNavegar = {
    login: ()=>{
        funciones.loadScript('../views/login.js','root')
        .then(async()=>{
            GlobalListaRubros = '';
            lbTituloVista.innerText = 'INICIO';
            GlobalSelectedForm = 'login';
            GlobalUsuario = 'USUARIO';
            GlobalPassUsuario = '';
            GlobalNivelUsuario = 0;
            GlobalCodUsuario = 0;
            //document.getElementById('lbUsuario').innerHTML = GlobalUsuario;
            //document.getElementById('lbUsuarioNivel').innerText = GlobalNivelUsuario;
            menuPrincipal.style = "visibility : hidden";
            document.getElementById('btnSalir').style = "visibility : hidden";
            initView();
        })
    },
    proyectos: ()=>{
        switch (Number(GlobalNivelUsuario)) {
            case 1:
                funciones.loadScript('../views/proyectos.js','root')
                .then(async()=>{
                    lbTituloVista.innerText = 'GESTION DE PROYECTOS';
                    GlobalSelectedForm = 'proyectos';
                    initView();
                })    
                break;
            case 2:
                funciones.loadScript('../views/proyectos.js','root')
                .then(async()=>{
                    lbTituloVista.innerText = 'GESTION DE PROYECTOS';
                    GlobalSelectedForm = 'proyectos';
                    initView();
                })
                break;
        
            default:
                funciones.AvisoHablado('Usted no puede entrar a esta sección')    
                break;
        }
        
    },
    cheques: ()=>{
        funciones.loadScript('../views/cheques.js','root')
        .then(async()=>{
            lbTituloVista.innerText = 'GESTION DE CHEQUES';
            GlobalSelectedForm = 'cheques';
            initView();
        })
    },
    cuentas: ()=>{
        funciones.loadScript('../views/cuentas.js','root')
        .then(async()=>{
            lbTituloVista.innerText = 'REPORTE DE CUENTAS BANCARIAS';
            GlobalSelectedForm = 'cuentas';
            initView();
        })
    },
    caja: ()=>{
        funciones.loadScript('../views/caja.js','root')
        .then(async()=>{
            lbTituloVista.innerText = 'CAJA CHICA';
            GlobalSelectedForm = 'caja';
            initView();
        })
    },
    contratos: ()=>{
        funciones.loadScript('../views/contratos.js','root')
        .then(async()=>{
            lbTituloVista.innerText = 'LISTADO DE SUBCONTRATOS';
            GlobalSelectedForm = 'contratos';
            initView();
        })
    },
    mantenimientos: ()=>{
                funciones.loadScript('../views/mantenimientos.js','root')
                .then(async()=>{
                    lbTituloVista.innerText = 'MANTENIMIENTOS';
                    GlobalSelectedForm = 'mantenimientos';
                    initView();
                })
    },
    reportes: ()=>{
        if(GlobalNivelUsuario==1){
            funciones.loadScript('../views/reportes.js','root')
            .then(async()=>{
                lbTituloVista.innerText = 'REPORTES PAGOS EFECTUADOS - RECIBIDOS';
                GlobalSelectedForm = 'reportes';
                initView();
            })
        }else{
            funciones.AvisoHablado('Usted no puede entrar a esta sección')
        }
    },
    cotizaciones: ()=>{
        funciones.loadScript('../views/cotizaciones.js','root')
            .then(async()=>{
                lbTituloVista.innerText = 'COTIZACIÓN MATERIALES';
                GlobalSelectedForm = 'cotizaciones';
                initView();
        })
    },
    reportesSubcontratistas: ()=>{
        if(GlobalNivelUsuario==1){
            funciones.loadScript('../views/reportes_subcontratistas.js','root')
            .then(async()=>{
                lbTituloVista.innerText = 'PAGOS A SUBCONTRATISTAS';
                GlobalSelectedForm = 'reportes';
                initView();
            })
        }else{
            funciones.AvisoHablado('Usted no puede entrar a esta sección')
        }
    },
    reportesRubros: ()=>{
        if(GlobalNivelUsuario==1){
            funciones.loadScript('../views/reportes_rubros.js','root')
            .then(async()=>{
                lbTituloVista.innerText = 'PAGOS POR RUBRO';
                GlobalSelectedForm = 'reportes';
                initView();
            })
        }else{
            funciones.AvisoHablado('Usted no puede entrar a esta sección')
        }
    },
    reportesProveedores: ()=>{
        if(GlobalNivelUsuario==1){
            funciones.loadScript('../views/reportes_proveedores.js','root')
            .then(async()=>{
                lbTituloVista.innerText = 'PAGOS A PROVEEDORES';
                GlobalSelectedForm = 'reportes';
                initView();
            })
        }else{
            funciones.AvisoHablado('Usted no puede entrar a esta sección')
        }
    }
}