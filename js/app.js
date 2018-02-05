/* Busca Eventos de tu interes */
const eventBrite = new EventBrite(),        // Instancia Clase EventBrite (REST API)
      ui = new Interfaz();                  // Instancia Clase Interfaz (UI)

// Evento 'click' al Botón de búsqueda del formulario
document .getElementById( 'buscarBtn' ) .addEventListener( 'click', e => {
    const nombreCiudad = document .getElementById( 'evento' ) .value,                                   // Obtiene el valor del elemento 'input' (Buscar por Nombre o Ciudad)
          selectCategoria = document .getElementById( 'listado-categorias' ),                           // Obtiene el elemento 'select' (Categoría Evento)
          categoriaSeleccionada = selectCategoria .options[ selectCategoria .selectedIndex ] .value;    // Obtiene la categoria seleccionada en el 'select'

    e .preventDefault();        // Previene la ejecución del 'action' o acciones por defecto del formulario

    console .log( 'Nombre o Ciudad ' + nombreCiudad );
    console .log( 'Categoría Evento ' + categoriaSeleccionada );

    // Valida que el campo del buscador no esté vacío (Nombre o Ciudad)
    if( nombreCiudad !== '' ) {
        console .log( 'Buscando...' );
    }
    else {
        console .log( 'Hey! no hay nada en el campo de búsqueda' );
    }
});
