/* Clase Interfaz */
class Interfaz {

    //Constructor
    constructor() {
        this .init();
        this .listado = document .getElementById( 'resultado-eventos' );    // Obtiene el elemento con el ID 'resultado-eventos' 
                                                                            // (Donde insertaremos los resultados en el DOM)
    }

    // Método para inicializar la App
    init() {
        this .imprimirCategorias();
    }

    // Despliega las categorías desde el REST API
    imprimirCategorias() {
        const listaCategorias = eventBrite .obtenerCategorias() 
            .then( data => {
                console .log( data);
                
                const selectCategoria = document .getElementById( 'listado-categorias' ),
                      categorias = data .dataCategorias .categories;                                // Asigna el 'Array' a una nueva variable
                
                // Recorre 'Array' 
                categorias .forEach( categoria => {
                    const option = document .createElement( 'option' );                             // Crea elemento 'option'

                    option .value = categoria .id;                                                  // Agrega valor a la propiedad 'value' del elemento 'option'
                    option .appendChild( document .createTextNode( categoria .name_localized ) );   // Agrega nodo de texto al elemento 'option'
                    selectCategoria .appendChild( option );                                         // Agrega el elemento 'option' al elemento 'select' de categorias en el DOM
                });
                
            });    
    }

    // Despliega los resultados de los eventos encontrados
    mostrarEventos( eventos ) {
        // Recorre los eventos 
        eventos .forEach( evento => {
            // Agrega los datos al Template
            this .listado .innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${ evento .logo !== null ? evento .logo .url : '' }">      <!-- Operador ternario para avaluar si el evento trae URL o no -->
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${ evento .name .text }</h2>                                    <!-- Título o nombre del evento -->
                                <p class="lead text-info">Información del evento</p>
                                <p>${ evento .description .text .substring( 0, 280 ) }...</p>                           <!-- Limita la descripción a 280 caracteres -->
                                <span class="badge badge-primary">Capacidad: ${ evento .capacity }</span>               <!-- # de plazas disponibles para el evento -->
                                <span class="badge badge-secondary">Fecha y hora: ${ evento .start .local }</span>      <!-- Fecha y hora de inicio del evento -->
                                <a href="${ evento .url}" target="_blank" class="btn btn-primary btn-block mt-4">       <!-- Botón 'Comprar entradas' -->
                                    Comprar entradas
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Limpia los resultados previos de los eventos
    limpiarEventos() {
        this .listado .innerHTML = '';
    }

    // Despliega mensajes en el DOM
    mostrarMensaje( clases, mensaje ) {
        const div = document .createElement( 'div' ),                                               // Crea elemento 'div'
              buscadorDiv = document .querySelector( '#buscador' );                                 // Obtiene el elemento con el ID 'buscador'

        div .classList = clases;                                                                    // Agrega las clases a la propiedad 'class' del elemento 'div'
        div .appendChild( document .createTextNode( mensaje ) );                                    // Agrega nodo de texto al elemento 'div'
        buscadorDiv .appendChild( div );                                                            // Agrega el elemento 'div' al elemento con el id 'buscador' para desplegar el mensaje en el DOM

        // Desaparece el mensaje luego de pasados 3 segundos
        setTimeout( () => {
            this .limpiarMensaje();
        }, 3000 );      // 3 segundos
    }

    // Desaparece el mensaje en el DOM (En caso que exista)
    limpiarMensaje() {
        const alerta = document .querySelector( '.alert' );

        if( alerta ) {
            alerta .remove();                                                                       // Elimina el elemento 'div' que despliega los mensajes
        }
    }

}