const socket = io();

socket.on('nuevo cheque', function(msg,user){
    
    if(Number(GlobalNivelUsuario)==1){
        funciones.NotificacionPersistent("Nuevo Cheque",msg + 'Creado por el usuario' + user);
    }
    
});
