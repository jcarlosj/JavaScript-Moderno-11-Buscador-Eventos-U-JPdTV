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