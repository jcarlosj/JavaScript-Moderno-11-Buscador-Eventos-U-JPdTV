/* Clase EventBrite */
class EventBrite {

    // Constructor
    constructor() {
        this .tokenOAuth = 'LFKLYT26TBC2XOP7QFUA';      // Token personal de OAuth (EventBrite) 
        this .ordenar = 'date';
        this .init();
    }

    // Método para inicializar la App
    init() {
        this .obtenerCategorias();
    }

    // Obtiene categorías REST API EventBrite en init()
    async obtenerCategorias() {
        // FecthAPI usando Promises (Se conecta a los datos)
        const data = await fetch( `https://www.eventbriteapi.com/v3/categories/?token=${ this .tokenOAuth }` );

        // Respuesta JSON de todas las categorias (Convierte JSON en un 'Array')
        const dataCategorias = await data .json();

        // Retorna un Objeto con un 'Array' de todas las categorías 
        return {                                                                                          
            dataCategorias
        }
    }

    // Mostrar resultados de la búsqueda
    async obtenerEventos( evento, categoria ) {
        // FecthAPI usando Promises (Se conecta a los datos)
        const data = await fetch( `https://www.eventbriteapi.com/v3/events/search/?q=${ evento }&sort_by=${ this .ordenar }&categories=${ categoria }&token=${ this .tokenOAuth }` );

        // Respuesta JSON de todas los eventos (Convierte JSON en un 'Array')
        const dataEventos = await data .json();

        // Retorna un Objeto con un 'Array' de todas los eventos 
        return {                                                                                          
            dataEventos
        }
    }

}