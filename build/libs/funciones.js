let funciones = {
    GetDataNit: async (idNit,idCliente,idDireccion)=>{

      return new Promise((resolve, reject) => {
        let nit = document.getElementById(idNit).value;                    
        let url = 'https://free.feel.com.gt/api/v1/obtener_contribuyente';
        
        axios.post(url,{nit: nit})
        .then((response) => {
            let json = response.data;
            console.log(response.data);
            
            //document.getElementById(idCliente).value = json.descripcion;
            //document.getElementById(idDireccion).value = json.direcciones.direccion;    

            resolve(json);
        }, (error) => {
            console.log(error);
            reject();
        });
  


      });

    },
    instalationHandlers: (idBtnInstall)=>{
      //INSTALACION APP
      let btnInstalarApp = document.getElementById(idBtnInstall);
      btnInstalarApp.hidden = true;

      let capturedInstallEvent;
      window.addEventListener('beforeinstallprompt',(e)=>{
        e.preventDefault();
        btnInstalarApp.hidden = false;
        capturedInstallEvent = e;
      });
      btnInstalarApp.addEventListener('click',(e)=>{
        capturedInstallEvent.prompt();
      capturedInstallEvent.userChoice.then((choice)=>{
          //solicita al usuario confirmacion para instalar
      })
    })
    //INSTALACION APP
    },
    instalationHandlers2: (idContainer,idBtnInstall)=>{
      //INSTALACION APP
      let btnInstalarApp = document.getElementById(idBtnInstall);
      btnInstalarApp.hidden = true;

      let container = document.getElementById(idContainer);

      let capturedInstallEvent;
      window.addEventListener('beforeinstallprompt',(e)=>{
        e.preventDefault();
        container.hidden = false;
        capturedInstallEvent = e;
      });
      btnInstalarApp.addEventListener('click',(e)=>{
        capturedInstallEvent.prompt();
        capturedInstallEvent.userChoice.then((choice)=>{
          //solicita al usuario confirmacion para instalar
        })
      })
      //INSTALACION APP
    },
    Confirmacion: function(msn){
        return swal({
            title: 'Confirme',
            text: msn,
            icon: 'warning',
            buttons: {
                cancel: true,
                confirm: true,
              }})
    },
    Aviso: function(msn){
        swal(msn, {
            timer: 1500,
            icon: "success",
            buttons: false
            });

        try {
            navigator.vibrate(500);
        } catch (error) {
            
        }
    },
    AvisoHablado: function(msn){
      swal(msn, {
          timer: 1500,
          icon: "error",
          buttons: false
          });
          var utterance = new SpeechSynthesisUtterance(msn);
          window.speechSynthesis.speak(utterance); 
      try {
          navigator.vibrate(500);
      } catch (error) {
          
      }
    },
    AvisoError: function(msn){
        swal(msn, {
            timer: 1500,
            icon: "error",
            buttons: false
            });
        try {
            navigator.vibrate([100,200,500]);
        } catch (error) {
            
        }
    },
    getPassword : (titulo,nivel)=>{
      if(nivel==1){
        return new Promise(async(resolve,reject)=>{

          const { value: password } =  await Swal.fire({
            title: 'Escriba su contraseña',
            input: 'password',
            inputLabel: 'Password',
            inputPlaceholder: 'Escriba aqui...',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          })
          
          if (password) {
            if(password==GlobalPassUsuario){
              resolve(password);
            }else{
              reject('no');
            }
          }else{
            reject('no');
          }

        })

      }else{
        funciones.AvisoError('Usted no tiene permiso de realizar esta acción');
      }
      
    },
    FiltrarListaProductos: function(idTabla){
        swal({
          text: 'Escriba para buscar...',
          content: "input",
          button: {
            text: "Buscar",
            closeModal: true,
          },
        })
        .then(name => {
          if (!name) throw null;
            funciones.FiltrarTabla(idTabla,name);

            //'tblProductosVentas'
        })
    },
    solicitarClave: function(){
      return new Promise((resolve,reject)=>{
          swal({
            html:true,
            text: 'Escriba su contraseña de usuario',
            content: {
              element: "input",
              attributes: {
                placeholder: "",
                type: "text", //password
              }
            },
            button: {
              text: "Verificar",
              closeModal: true,
            },
          })
          .then(name => {
            if (!name) throw null;
                resolve(name);
          })
          .catch(()=>{
            reject('no');
          })
      })     
    },
    setMoneda: function(num,signo) {
            num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num)) num = "0";
        let sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        let cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        let resultado = ((((sign) ? '' : '-') + signo + ' ' + num + ((cents == "00") ? '' : '.' + cents)).toString());
        
        if(resultado.includes('.')){}else{resultado = resultado + ".00"}
        
        return resultado.replace('-','');

      },
      setMoneda3: function(num,signo) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num)) num = "0";
        let sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        let cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        let resultado = ((((sign) ? '' : '-') + signo + ' ' + num + ((cents == "00") ? '' : '.' + cents)).toString());
        
        if(resultado.includes('.')){}else{resultado = resultado + ".00"}
        
        return resultado;

      },
      setMoneda2: function(n) {

        let valor = n;

        let t=valor.toString(); //let t=n.toString();
        let regex=/(\d*.\d{0,2})/;
        let resultado = t.match(regex)[0]; 

        return resultado;
      },
    setMargen: function(num,signo) {
      num = num.toString().replace(/\$|\,/g, '');
      if (isNaN(num)) num = "0";
      let sign = (num == (num = Math.abs(num)));
      num = Math.floor(num * 100 + 0.50000000001);
      let cents = num % 100;
      num = Math.floor(num / 100).toString();
      if (cents < 10) cents = "0" + cents;
      for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
      return (( ((sign) ? '' : '-') +  num + ((cents == "00") ? '' : '.' + cents) + ' ' + signo  ).toString());
    },
    loadScript: function(url, idContainer) {
        return new Promise((resolve, reject) => {
          var script = document.createElement('script');
          script.src = url;
    
          script.onload = resolve;
          script.onerror = reject;
             
          document.getElementById(idContainer).appendChild(script)
        });
    },
    loadCss: function(url, idContainer) {
        return new Promise((resolve, reject) => {
          var link = document.createElement('link');
          //script.async = true;
          link.href = url;
          link.rel = "stylesheet"
    
          link.onload = resolve;
          link.onerror = reject;
             
          document.getElementById(idContainer).appendChild(link)
        });
    },
    loadView: (url, idContainer)=> {
        return new Promise((resolve, reject) => {
            
            let contenedor = document.getElementById(idContainer);

            axios.get(url)
            .then((response) => {
                contenedor.innerHTML ='';
                contenedor.innerHTML = response.data;
                resolve();
            }, (error) => {
                console.log(error);
                reject();
            });
      
          });
    },   
    hablar: function(msn){
        var utterance = new SpeechSynthesisUtterance(msn);
        return window.speechSynthesis.speak(utterance); 
    },
    crearBusquedaTabla: function(idTabla,idBusqueda){
    var tableReg = document.getElementById(idTabla);
    var searchText = document.getElementById(idBusqueda).value.toLowerCase();
      var cellsOfRow="";
      var found=false;
      var compareWith="";
   
      // Recorremos todas las filas con contenido de la tabla
        for (var i = 1; i < tableReg.rows.length; i++)
                {
                  cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                    found = false;
                    // Recorremos todas las celdas
                    for (var j = 0; j < cellsOfRow.length && !found; j++)
                    {
                      compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                      // Buscamos el texto en el contenido de la celda
                      if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
                      {
                          found = true;
                      }
                  }
                  if(found)
                  {
                      tableReg.rows[i].style.display = '';
                  } else {
                      // si no ha encontrado ninguna coincidencia, esconde la
                      // fila de la tabla
                      tableReg.rows[i].style.display = 'none';
                  }
              }
    },
    FiltrarTabla: function(idTabla,idfiltro){
    var tableReg = document.getElementById(idTabla);
    let filtro = document.getElementById(idfiltro).value;

    var searchText = filtro.toLowerCase();
      var cellsOfRow="";
      var found=false;
      var compareWith="";
   
      // Recorremos todas las filas con contenido de la tabla
        for (var i = 1; i < tableReg.rows.length; i++)
                {
                  cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                    found = false;
                    // Recorremos todas las celdas
                    for (var j = 0; j < cellsOfRow.length && !found; j++)
                    {
                      compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                      // Buscamos el texto en el contenido de la celda
                      if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
                      {
                          found = true;
                      }
                  }
                  if(found)
                  {
                      tableReg.rows[i].style.display = '';
                  } else {
                      // si no ha encontrado ninguna coincidencia, esconde la
                      // fila de la tabla
                      tableReg.rows[i].style.display = 'none';
                  }
              }
        //funciones.scrollUp(1000, 'easing');
    },
    OcultarRows: function(idTabla){
    var tableReg = document.getElementById(idTabla);
        // Recorremos todas las filas con contenido de la tabla
        for (var i = 1; i < tableReg.rows.length; i++)
        {
            if(i>15){
                tableReg.rows[i].style.display = 'none';
            }
        }
    },
    PingInternet: async (url)=>{
    var peticion = new Request(url, {
        method: 'POST',
        headers: new Headers({
            // Encabezados
           'Content-Type': 'application/json'
        })
      });

      await fetch(peticion)
         .then(function(res) {
           if (res.status==200)
               {
                   funciones.hablar('parece que ya hay internet');
                }
      })
      .catch(
          ()=>{
            funciones.hablar('por lo visto no hay señal');
          }
      )
    },
    NotificacionPersistent : (titulo,msn)=>{
 
    const options = {
        body : titulo,
        icon: "../favicon.png",
        vibrate: [1,2,3],
      }
      //image: "../favicon.png",
         if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
          console.log('Persistent Notification API not supported!');
          return;
        }
        
        try {
          navigator.serviceWorker.getRegistration()
            .then(reg => 
                    reg.showNotification(msn, options)
                )
            .catch(err => console.log('Service Worker registration error: ' + err));
        } catch (err) {
          console.log('Notification API error: ' + err);
        }
      
    },
    ObtenerUbicacion: async(idlat,idlong)=>{
        let lat = document.getElementById(idlat);
        let long = document.getElementById(idlong);
        
        try {
            navigator.geolocation.getCurrentPosition(function (location) {
                lat.innerText = location.coords.latitude.toString();
                long.innerText = location.coords.longitude.toString();
            })
        } catch (error) {
            funciones.AvisoError(error.toString());
        }
    },
    ComboSemana :(letnum)=>{
      let str = '';
      if(letnum=="LETRAS"){
        str =  `<option value="LUNES">LUNES</option>
                <option value="MARTES">MARTES</option>
                <option value="MIERCOLES">MIERCOLES</option>
                <option value="JUEVES">JUEVES</option>
                <option value="VIERNES">VIERNES</option>
                <option value="SABADO">SABADO</option>
                <option value="DOMINGO">DOMINGO</option>
                <option value="OTROS">OTROS</option>
                `
      }else{
        str =  `<option value="1">LUNES</option>
                <option value="2">MARTES</option>
                <option value="3">MIERCOLES</option>
                <option value="4">JUEVES</option>
                <option value="5">VIERNES</option>
                <option value="6">SABADO</option>
                <option value="7">DOMINGO</option>
                <option value="0">OTROS</option>
                `
      };

      return str;
      
    },
    getDiaSemana:(numdia)=>{
      switch (numdia) {
        case 0:
          return 'DOMINGO';
          break;
        case 1:
          return 'LUNES';
          break;
        case 2:
          return 'MARTES';
          break;
        case 3:
          return 'MIERCOLES';
          break;
        case 4:
          return 'JUEVES';
          break;
        case 5:
          return 'VIERNES';
          break;
        case 6:
          return 'SABADO';
          break;
      
        default:
          break;
      }
    },
    ComboMeses: ()=>{
    let str =`<option value='1'>Enero</option>
              <option value='2'>Febrero</option>
              <option value='3'>Marzo</option>
              <option value='4'>Abril</option>
              <option value='5'>Mayo</option>
              <option value='6'>Junio</option>
              <option value='7'>Julio</option>
              <option value='8'>Agosto</option>
              <option value='9'>Septiembre</option>
              <option value='10'>Octubre</option>
              <option value='11'>Noviembre</option>
              <option value='12'>Diciembre</option>`
    return str;
    },
    ComboAnio: ()=>{
    let str =`<option value='2017'>2017</option>
              <option value='2018'>2018</option>
              <option value='2019'>2019</option>
              <option value='2020'>2020</option>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
              <option value='2028'>2028</option>
              <option value='2029'>2029</option>
              <option value='2030'>2030</option>
              <option value='2031'>2031</option>
              <option value='2032'>2032</option>
              <option value='2033'>2033</option>
              <option value='2034'>2034</option>
              <option value='2035'>2035</option>
              <option value='2036'>2036</option>
              <option value='2037'>2037</option>
              <option value='2038'>2038</option>
              <option value='2039'>2039</option>
              <option value='2040'>2040</option>
              <option value='2041'>2041</option>
              <option value='2042'>2042</option>
              <option value='2043'>2043</option>
              <option value='2044'>2044</option>
              <option value='2045'>2045</option>
              <option value='2046'>2046</option>
              <option value='2047'>2047</option>
              <option value='2048'>2048</option>
              <option value='2049'>2049</option>
              <option value='2050'>2050</option>`
    return str;
    },
    convertDate2(date) {
      const [yy, mm, dd] = date.split(/-/g);
      return `${dd}/${mm}/${yy}`.replace('T00:00:00.000Z', '');
    },
    convertDate(input) {
      var datePart = input.match(/\d+/g),
      year = datePart[0].substring(4), // get only two digits
      month = datePart[1], day = datePart[2];
    
      return day+'/'+month+'/'+year;
    },
    getHora(){
      let f = new Date(); 
      let h = f.getHours();
      let m = f.getMinutes();
      return `${h.toString()}:${m.toString()}`;
    },
    getFecha(){
      let fecha
      let f = new Date(); 
      let d = f.getDate(); 
      let m = f.getUTCMonth()+1; 

      switch (d.toString()) {
        case '30':
          m = f.getMonth()+1; 
          break;
        case '31':
          m = f.getMonth()+1; 
            break;
      
        default:

          break;
      }

      
      let y = f.getFullYear();
     
      di = d;
      var D = '0' + di;
      let DDI 
      if(D.length==3){DDI=di}else{DDI=D}
      
      ma = m;
      var MA = '0' + ma;
      let DDM 
      if(MA.length==3){DDM=ma}else{DDM=MA}


      fecha = y + '-' + DDM + '-' + DDI;
      return fecha;
    },
    quitarCaracteres: ( texto, reemplazarQue, reemplazarCon, ignorarMayMin) =>{
      var reemplazarQue = reemplazarQue.replace(/[\\^$.|?*+()[{]/g, "\\$&"),
      reemplazarCon = reemplazarCon.replace(/\$(?=[$&`"'\d])/g, "$$$$"),
      modif = "g" + (ignorarMayMin ? "i" : ""),
      regex = new RegExp(reemplazarQue, modif);
      return texto.replace(regex,reemplazarCon);
    },
    devuelveFecha: (idInputFecha)=>{
      let fe = new Date(document.getElementById(idInputFecha).value);
      let ae = fe.getFullYear();
      let me = fe.getUTCMonth()+1;
      let de = fe.getUTCDate() 
      let fret = ae + '-' + me + '-' + de;
      return fret;
    },
    showToast: (text)=>{
      //depente de la libreria noty
      new Noty({
        type: 'info',
        layout: 'topRight',
        timeout: '1000',
        theme: 'metroui',
        progressBar: true,
        text,
      }).show();
    },
    setReminder: async (msg,minutos)=>{

      
        if (!('Notification' in window)) {
          alert('Notification API not supported');
          return;
        }
        if (!('showTrigger' in Notification.prototype)) {
          alert('Notification Trigger API not supported');
          return;
        }
        
        await Notification.requestPermission()
          .then(() => {
            if (Notification.permission !== 'granted') {
              throw 'Notification permission is not granted';
            }
          })
          .then(() => navigator.serviceWorker.getRegistration())
          .then((reg) => {
            reg.showNotification(msg, {
                showTrigger: new TimestampTrigger(new Date().getTime() + Number(minutos) * 60000)
            })
          })
          .catch((err) => {
            alert('Notification Trigger API error: ' + err);
          });
      
    
    },
    slideAnimationTabs: ()=>{
      //inicializa el slide de las tabs en censo
      $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
          var $old_tab = $($(e.target).attr("href"));
          var $new_tab = $($(e.relatedTarget).attr("href"));
  
          if($new_tab.index() < $old_tab.index()){
              $old_tab.css('position', 'relative').css("right", "0").show();
              $old_tab.animate({"right":"-100%"}, 300, function () {
                  $old_tab.css("right", 0).removeAttr("style");
              });
          }
          else {
              $old_tab.css('position', 'relative').css("left", "0").show();
              $old_tab.animate({"left":"-100%"}, 300, function () {
                  $old_tab.css("left", 0).removeAttr("style");
              });
          }
      });
  
      $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
          var $new_tab = $($(e.target).attr("href"));
          var $old_tab = $($(e.relatedTarget).attr("href"));
  
          if($new_tab.index() > $old_tab.index()){
              $new_tab.css('position', 'relative').css("right", "-2500px");
              $new_tab.animate({"right":"0"}, 500);
          }
          else {
              $new_tab.css('position', 'relative').css("left", "-2500px");
              $new_tab.animate({"left":"0"}, 500);
          }
      });
  
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          // your code on active tab shown
      });
    },
    exportTableToExcel: (tableID, filename = '')=>{
      var downloadLink;
      var dataType = 'application/vnd.ms-excel;charset=UTF-8';
      var tableSelect = document.getElementById(tableID);
      var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
      
      // Specify file name
      filename = filename?filename+'.xls':'excel_data.xlsx';
      
      // Create download link element
      downloadLink = document.createElement("a");
      
      document.body.appendChild(downloadLink);
      
      if(navigator.msSaveOrOpenBlob){
          var blob = new Blob(['ufeff', tableHTML], {
              type: "text/plain;charset=utf-8;"//dataType
          });
          navigator.msSaveOrOpenBlob( blob, filename);
      }else{
          // Create a link to the file
          downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
      
          // Setting the file name
          downloadLink.download = filename;
          
          //triggering the function
          downloadLink.click();
      }
    },
    cleanDataFecha : (fecha)=>{
      let f = fecha.replace('T00:00:00.000Z', '');
      return f;
    },
    getComboRubros : ()=>{
      let str = `
      <option value="MANO DE OBRA">MANO DE OBRA</option>
      <option value="MATERIALES">MATERIALES</option>
      <option value="VENTANERIA">VENTANERIA</option>
      <option value="HERRERIA">HERRERIA</option>
      <option value="CARPINTERIA">CARPINTERIA</option>
      <option value="PINTURA">PINTURA</option>
      <option value="ADMINISTRACION">ADMINISTRACION</option>
      <option value="SUPERVISION">SUPERVISION</option>
      <option value="ELECTRICIDAD">ELECTRICIDAD</option>
      <option value="VARIOS">VARIOS</option>
      `;
      return GlobalListaRubros;
      
    },
    getComboBancos: ()=>{
      return `
      <option value="EFECTIVO">EFECTIVO</option>
      <option value="BANRURAL">BANRURAL</option>
      <option value="BAM">BAM (BANCO AGRICOLA MERCANTIL)</option>
      <option value="G&T">BANCO G&T</option>
      <option value="CHN">CREDITO HIPOTECARIO NACIONAL</option>
      <option value="PROMERICA">BANCO PROMERICA</option>
      <option value="BANCO INDUSTRIAL">BANCO INDUSTRIAL (BI)</option>
      <option value="BANCO INTERNACIONAL">BANCO INTERNACIONAL</option>
      <option value="BANTRAB">BANCO DE LOS TRABAJADORES</option>
      <option value="BANCO AZTECA">BANCO AZTECA</option>
      <option value="BANCO BAC">BANCO BAC CREDOMATIC</option>
      `
    },
    getComboMedidasProductos: ()=>{
      return `  <option value="UNIDAD">UNIDAD</option>
                <option value="LIBRA">LIBRA</option>
                <option value="SACO">SACO</option>
                <option value="QUINTAL">QUINTAL</option>
                <option value="CAJA">CAJA</option>
                <option value="KIT">KIT</option>
                <option value="METRO">METRO</option>
                <option value="DOCENA">DOCENA</option>
                <option value="CIENTO">CIENTO</option>
                <option value="LIO">LIO</option>
                <option value="YARDA">YARDA</option>`
    },
    openFullscreen : (idElement)=>{
      let elem = document.getElementById(idElement);
  
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },
    convertDateNormal(date) {
      const [yy, mm, dd] = date.split(/-/g);
      return `${dd}/${mm}/${yy}`.replace('T00:00:00.000Z', '');
    },
    imprimirSelec:(nombreDiv)=>{
      var contenido= document.getElementById(nombreDiv).innerHTML;
      var contenidoOriginal= document.body.innerHTML;
  
      document.body.innerHTML = contenido;
  
      window.print();
  
      document.body.innerHTML = contenidoOriginal;
    },
    limpiarTexto: (texto) =>{
      var ignorarMayMin = true;
      var reemplazarCon = " pulg";
      var reemplazarQue = '"';
      reemplazarQue = reemplazarQue.replace(/[\\^$.|?*+()[{]/g, "\\$&"),
      reemplazarCon = reemplazarCon.replace(/\$(?=[$&`"'\d])/g, "$$$$"),
      modif = "g" + (ignorarMayMin ? "i" : ""),
      regex = new RegExp(reemplazarQue, modif);
      return texto.replace(regex,reemplazarCon);
    },
    detectarPc:()=>{
          let navegador = navigator.userAgent;
          if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
              //console.log("Estás usando un dispositivo móvil!!");
            return 'tel';
          } else {
              //console.log("No estás usando un móvil");
            return 'pc';
          }
    },
    exportarPDF:(iddiv,archivo)=>{

      var doc = new jsPDF();
      var elementHTML = $(iddiv).html();
      var specialElementHandlers = {
        '#elementH': function (element, renderer) {
          return true;
        }
      };
      doc.fromHTML(elementHTML, 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
      
      // Save the PDF
      doc.save(archivo.toString() + '.pdf');



      return;

      var pdf = new jsPDF('p', 'pt', 'letter');
      //source = $('#' + iddiv.toString())[0];
      source = document.getElementById(iddiv);

      specialElementHandlers = {
          '#bypassme': function (element, renderer) {
              return true
          }
      };
      margins = {
          top: 80,
          bottom: 60,
          left: 40,
          width: 522
      };

      pdf.fromHTML(
          source, 
          margins.left, // x coord
          margins.top, { // y coord
              'width': margins.width, 
              'elementHandlers': specialElementHandlers
          },

          function (dispose) {
              pdf.save(archivo.toString() + '.pdf');
          }, margins
      );
    }    
};

//export default funciones;