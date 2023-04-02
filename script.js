'use strict'

/* Aqui va su codigo */





/* CONFIG DEL BUSCADOR NO TOCAR */
const buscador = () => {

    const tabla = document.querySelector('[data-table]');
    const input = document.querySelector('[data-finder]');
    let total = 0;
    
    input.addEventListener('keyup', () => {
        const inputSearch = input.value.toLowerCase();

        // Recorremos todas las filas con contenido de la tabla
        for (let i = 1; i < tabla.rows.length; i++) {
            // Si el td tiene la clase "noSearch" no se busca en su contenido
            if (tabla.rows[i].classList.contains("noSearch")) {
                continue;
            };

            let found = false;
            const cellsOfRow = tabla.rows[i].getElementsByTagName('td');

            // Recorremos todas las celdas
            for (let j = 0; j < cellsOfRow.length && !found; j++) {
                const compareWith = cellsOfRow[j].innerHTML.toLowerCase();

                // Buscamos el texto en el contenido de la celda
                if (inputSearch.length == 0 || compareWith.indexOf(inputSearch) > -1) {
                    found = true;
                    total++;
                };
            };

            if (found) {
                tabla.rows[i].style.display = '';

            } else {

                // si no ha encontrado ninguna coincidencia, esconde la
                // fila de la tabla
                tabla.rows[i].style.display = 'none';
            };
        };
    });
};

buscador();
