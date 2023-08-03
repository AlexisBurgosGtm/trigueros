
let version = 'Act 02.08.2023';
const GlobalUrlBackend =  '';  //'https://trg-ingenieros.herokuapp.com'; //'http://localhost:333';

let GlobalCodUsuario = 0;
let GlobalUsuario = 'USUARIO';
let GlobalPassUsuario = '';
let GlobalNivelUsuario = 0;
let GlobalSelectedForm = 'login';
let GlobalConfigClave = 'trigueros123';

let GlobalMiniLoader = '<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>';
let GlobalLoader = `<div>
                        <div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>
                        <div class="spinner-grow text-warning" role="status"><span class="sr-only">Loading...</span></div>
                        <div class="spinner-grow text-warning" role="status"><span class="sr-only">Loading...</span></div>
                        <div class="spinner-grow text-warning" role="status"><span class="sr-only">Loading...</span></div>
                    </div>`;


let GlobalSelectedCodProyecto = 0;
let GlobalSelectedDesProyecto = '';
let GlobalSelectedNumeroContrato = 0;
let GlobalSelectedTipoCheque = 'SN';
let GlobalSelectedId = 0;
let GlobalListaRubros = '';
let GlobalString = '';
let GlobalSelectedImporte = 0;

let GlobalSelected_totalProveedores = 0;
let GlobalSelected_totalSubcontratistas = 0;
let GlobalSelected_totalGastosCaja = 0;
let GlobalSelected_totalRecibido = 0;


function get_permiso_visible(){
    let strclass = '';
    if(Number(GlobalNivelUsuario)==1){}else{strclass='hidden'};
    return strclass;
};

