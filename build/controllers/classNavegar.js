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
            lbTituloVista.innerText = 'LISTA DE CONTRATOS';
            GlobalSelectedForm = 'contratos';
            initView();
        })
    },
    mantenimientos: ()=>{
            if(GlobalNivelUsuario==1){
                funciones.loadScript('../views/mantenimientos.js','root')
                .then(async()=>{
                    lbTituloVista.innerText = 'MANTENIMIENTOS';
                    GlobalSelectedForm = 'mantenimientos';
                    initView();
                })
            }else{
                funciones.AvisoHablado('Usted no puede acceder a esta sección')
            }
    },
    reportes: ()=>{
        if(GlobalNivelUsuario==1){
            funciones.loadScript('../views/reportes.js','root')
            .then(async()=>{
                lbTituloVista.innerText = 'REPORTES';
                GlobalSelectedForm = 'reportes';
                initView();
            })
        }else{
            funciones.AvisoHablado('Usted no puede entrar a esta sección')
        }
    },
    cotizaciones: ()=>{
        funciones.Aviso('En proceso...')
    }
}