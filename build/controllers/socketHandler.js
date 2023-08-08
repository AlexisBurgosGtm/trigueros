const socket = io();

socket.on('nuevo cheque', function(msg,usuario){
    
    if(Number(GlobalNivelUsuario)==1){
        funciones.showToast(msg);
        //funciones.NotificacionPersistent(msg,usuario);
    };

});


socket.on('inicio administrador', function(msg,usuario){
    
    if(Number(GlobalNivelUsuario)==1){
        funciones.showToast(`Inicio como administrador: ${usuario}`);
        //funciones.NotificacionPersistent(usuario,"Inicio Administrador");
    };
    
});

