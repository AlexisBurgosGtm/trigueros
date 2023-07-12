function getView(){
    let view = {
        login : ()=>{
            return `
                <div class="rpw">
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                        <div class="card shadow card-rounded">
                            
                            <div class="card-body p-4">
                                
                                <div class="text-center bg-white border-bottom ">
                                    <img src="../img/favicon.png" widht="80" height="80">
                                </div>
                                
                                <hr class="solid">

                                <div class="form-group">
                                    <label class="negrita">Usuario</label>
                                    <input type="text" class="input-md form-control border-info" id="txtUsuario">
                                </div>
                                <br>
                                <div class="form-group">
                                    <label class="negrita">Contraseña</label>
                                    <input type="password" class="form-control border-info" id="txtPass">
                                </div>
                                <br>
                                <div class="form-group text-right">
                                    <button class="btn btn-owner btn-xl btn-circle hand shadow" id="btnIniciar">
                                        <i class="fal fa-lock"></i>
                                        
                                    </button>
                                </div>

                                <br>
                                <div class="row">
                                    <small class="text-info">${version}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-8 col-lg-9 col-xl-9">
                        <div class="card shadow card-rounded">
                            <div class="card-body">
                          
                            </div>
                        </div>
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
        
        btnIniciar.innerHTML = '<i class="fal fa-lock fa-spin"></i>';
        btnIniciar.disabled = true;

        let us = document.getElementById('txtUsuario').value;
        let ps = document.getElementById('txtPass').value;

        api.usuarios_login(us, ps)
            .then(() => {
                               
                //menuPrincipal.style = "visibility : visible";
               
                //document.body.requestFullscreen();

                switch (Number(GlobalNivelUsuario)) {
                    case 1:
                        classNavegar.proyectos();    
                        break;
                    case 2:
                        classNavegar.proyectos();  
                        break;
                    case 3:
                        classNavegar.cheques(); 
                        break;
                    default:
                        classNavegar.login();
                        break;
                }
                document.getElementById('btnSalir').style = "visibility : visible";
                document.getElementById('btnMenuPrincipal').style = "visibility:visible";
                
            })
            .catch(() => {
                funciones.AvisoError('Usuario o contraseña incorrectos');

                btnIniciar.innerHTML = `<i class="fal fa-lock"></i>`;
                btnIniciar.disabled = false;
                
            })
        
    })
};

async function initView(){
    getView();
    addListeners();

   await api.config_getclave();
};


initView();
