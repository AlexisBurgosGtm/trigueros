let classNavegar = {
    login: ()=>{
        funciones.loadScript('../views/login.js','root')
        .then(async()=>{
            GlobalSelectedForm = 'login';
            GlobalUsuario = 'USUARIO';
            GlobalPassUsuario = '';
            GlobalNivelUsuario = 0;
            GlobalCodUsuario = 0;
            document.getElementById('lbUsuario').innerHTML = GlobalUsuario;
            document.getElementById('lbUsuarioNivel').innerText = GlobalNivelUsuario;
            menuPrincipal.style = "visibility : hidden";
            initView();
        })
    },
    proyectos: ()=>{
        funciones.loadScript('../views/proyectos.js','root')
        .then(async()=>{
            GlobalSelectedForm = 'proyectos';
            initView();
        })
    },
    cheques: ()=>{
        funciones.loadScript('../views/cheques.js','root')
        .then(async()=>{
            GlobalSelectedForm = 'cheques';
            initView();
        })
    },
    subcontratistas: ()=>{
        funciones.loadScript('../views/contratantes.js','root')
        .then(async()=>{
            GlobalSelectedForm = 'subcontratistas';
            initView();
        })
    },
    reportes: ()=>{
        funciones.loadScript('../views/reportes.js','root')
        .then(async()=>{
            GlobalSelectedForm = 'reportes';
            initView();
        })
    }
}