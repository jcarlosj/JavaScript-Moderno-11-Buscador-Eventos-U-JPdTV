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

    }

    // Despliega las categorías desde el REST API
    imprimirCategorias() {
        const listaCategorias = eventBrite .obtenerCategorias();    
    }

}