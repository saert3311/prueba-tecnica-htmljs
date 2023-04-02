'use strict'

/* Aqui va su codigo */

const filtrador = () => {
    const select = document.getElementsByClassName('form-select')[0] // asumimos que es un solo select
    const tabla = document.querySelector('[data-table]');

    select.addEventListener('change', function (e) {
        const filterValue = this.value.toLowerCase()
        for (let i = 1; i < tabla.rows.length; i++) {
            const row = tabla.rows[i].cells
            const compareWith = row[1].innerHTML.toLowerCase() // asumimos que la tabla es estatica
            if (filterValue === compareWith) {
                tabla.rows[i].classList.remove('d-none') // como tenemos bootstrap usamos su clase para ocultar
            }else{
                if (filterValue === 'todos') {
                    tabla.rows[i].classList.remove('d-none') // nos aseguramos de mostrar todos antes de remover
                    continue
                }
                tabla.rows[i].classList.add('d-none')
            }
        }
    })

}





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
filtrador();
