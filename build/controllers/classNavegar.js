let classNavegar = {
    login: ()=>{
        funciones.loadScript('../views/login.js','root')
        .then(async()=>{
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
        if(GlobalNivelUsuario==1){
            funciones.loadScript('../views/proyectos.js','root')
            .then(async()=>{
                lbTituloVista.innerText = 'GESTION DE PROYECTOS';
                GlobalSelectedForm = 'proyectos';
                initView();
            })
        }else{
            funciones.AvisoError('Usted no puede entrar a esta sección')
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
                funciones.AvisoError('Usted no puede acceder a esta sección')
                funciones.hablar('Usted no puede acceder a esta sección')
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
            funciones.AvisoError('Usted no puede entrar a esta sección')
        }
    }
}