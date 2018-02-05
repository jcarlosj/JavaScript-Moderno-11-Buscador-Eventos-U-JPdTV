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

    // Obtiene las categorias en init()
    async obtenerCategorias() {
        // Consulta categorías REST API EventBrite
        console .log( 'Obtiene las categorías' );
    }
}