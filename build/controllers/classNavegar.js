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
    mantenimientos: ()=>{
        funciones.loadScript('../views/mantenimientos.js','root')
        .then(async()=>{
            GlobalSelectedForm = 'mantenimientos';
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