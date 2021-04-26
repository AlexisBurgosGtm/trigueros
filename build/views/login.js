function getView(){
    let view = {
        login : ()=>{
            return `
                <div class="card col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow border-info-left border-info-bottom">
                    <div class="card-header text-center bg-white border-bottom ">
                        <img src="../img/favicon.png" widht="80" height="80">
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label>Usuario</label>
                            <input type="text" class="input-md form-control border-info" id="txtUsuario" value='TRIGUEROS'>
                        </div>
                        <br>
                        <div class="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control border-info" id="txtPass" value='123'>
                        </div>
                        <br>
                        <div class="form-group text-right">
                            <button class="btn btn-info btn-lg btn-rounded" id="btnIniciar">
                                <i class="fal fa-lock"></i>
                                Ingresar
                            </button>
                        </div>
                        <br>
                    </div>
                </div>           
            `
        }

    };

    root.innerHTML = view.login();

};

function addListeners(){
    

    let btnIniciar  = document.getElementById('btnIniciar');
    btnIniciar.addEventListener('click', () => {
        
        btnIniciar.innerHTML = GlobalLoader;

        let us = document.getElementById('txtUsuario').value;
        let ps = document.getElementById('txtPass').value;

        api.usuarios_login(us, ps)
            .then(() => {
                               
                menuPrincipal.style = "visibility : visible";
               
                //document.body.requestFullscreen();

                switch (Number(GlobalNivelUsuario)) {
                    case 1:
                        classNavegar.proyectos();    
                        break;
                    case 2:
                        classNavegar.cheques();    
                        break;
                    case 3:
                        classNavegar.contratos();
                        break;
                    default:
                        classNavegar.login();
                        break;
                }
                document.getElementById('btnSalir').style = "visibility : visible";
                
                
            })
            .catch(() => {
                funciones.AvisoError('Usuario o contraseña incorrectos');
                btnIniciar.innerHTML = `<i class="lni lni-cloud-check"></i>Ingresar`;
                
            })
        
    })
};

function initView(){
    getView();
    addListeners();
};


initView();
