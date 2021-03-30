const GlobalUrlBackend =  '';  //'https://trg-ingenieros.herokuapp.com'; //'http://localhost:333';

let GlobalCodUsuario = 0;
let GlobalUsuario = 'USUARIO';
let GlobalPassUsuario = '';
let GlobalNivelUsuario = 0;
let GlobalSelectedForm = 'login';


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