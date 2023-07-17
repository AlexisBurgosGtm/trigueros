
10 07 2023

x * BUSCADOR DE PROYECTOS
x * BUSCADOR DE CHEQUES
* BUSCADORES EN OTRAS PANTALLAS
* EXPORTAR PDF
* DEFINICIÓN DE ROLES (DE NUEVO)
* SUGERENCIA: ESTILIZAR LA APP (CHECK LOADERS)



1) primera reunión y capacitación: Q 100.00
2) cambios ventana proyectos:  Q 100.00
3) cambios ventana cheques: Q 100.00
4) segunda capacitación: Q 100.00








body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="dias-tab">
                    
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="clientes-tab">
                          
                        </div>

                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>¿
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i></a>
                        </li>                           
                    </ul>
                </div>
            `
        },