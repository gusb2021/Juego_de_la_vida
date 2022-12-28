import { stop_ejecucion } from './main.js'


export let width
export let height
let cell_size = 5
let cells_per_row
let cells_per_column
let total_cells

let check_value = 0 // cheking for reset when every cell is dead

let display_width = window.innerWidth
let display_height = window.innerHeight

// 

export let set_size = (scale) => {
    width = display_width * scale - ((display_width * scale) % 5)
    height = display_height * scale - ((display_height * scale) % 5)
    cells_per_row = width / cell_size
    cells_per_column = height / cell_size
    total_cells = cells_per_column * cells_per_row
}


// FUNCION CREAR CELDAS INDIVIDUALES //

export let crear_celdas = () => {
    let cuadros_total = (width * height) / cell_size ** 2
    for (let i = 1; i <= cuadros_total; i++) {
        let celda = document.createElement('div')
        celda.classList.add('celda')
        celda.classList.add('celda_muerta')
        celda.id = i
        let plano = document.getElementById('plano')
        plano.appendChild(celda)

    }
}


// FUNCION ASIGNAR VALORES Y ESTADOS A CELDAS A MODIFICAR //

export let analizar_estado = () => {
    check_value = 0
    let celdas_general = document.querySelectorAll('div.celda')
    celdas_general.forEach((estado_celda) => {

        let celda_0_id = {},
            celda_1_id = {},
            celda_2_id = {},
            celda_3_id = {},
            celda_4_id = {},
            celda_5_id = {},
            celda_6_id = {},
            celda_7_id = {}

        let celdas_array = [

            { celda_0_id },
            { celda_1_id },
            { celda_2_id },
            { celda_3_id },
            { celda_4_id },
            { celda_5_id },
            { celda_6_id },
            { celda_7_id }
        ]

        // Seleccion de celdas vecinas 1 al 8 //



        // casilla N 1 - Perfecto //
        if (estado_celda.id == 1) {

            celdas_array[0] = document.getElementById(`${Number(total_cells)}`)
            celdas_array[1] = document.getElementById(`${Number(total_cells) + 1 - (cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(total_cells) + 2 - (cells_per_row)}`)
            celdas_array[3] = document.getElementById(`${Number(estado_celda.id) * (cells_per_row)}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) + 1}`)
            celdas_array[5] = document.getElementById(`${(cells_per_row) * 2}`)
            celdas_array[6] = document.getElementById(`${Number(estado_celda.id) + Number(+cells_per_row)}`)
            celdas_array[7] = document.getElementById(`${Number(estado_celda.id) + Number(+cells_per_row) + 1}`)
        }

        // Esquina inferior derecha - Perfecto //
        else if (estado_celda.id == total_cells) {

            celdas_array[0] = document.getElementById(`${total_cells - cells_per_row - 1}`)
            celdas_array[1] = document.getElementById(`${(estado_celda.id) - (cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row * 2) + 1}`)
            celdas_array[3] = document.getElementById(`${(estado_celda.id) - 1}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) + 1}`)
            celdas_array[5] = document.getElementById(`${(cells_per_row) - 1}`)
            celdas_array[6] = document.getElementById(`${(cells_per_row)}`)
            celdas_array[7] = document.getElementById('1')
        }

        // Esquina Sup. Derecha - Perfecto //
        else if (estado_celda.id == cells_per_row) {

            celdas_array[0] = document.getElementById(`${(total_cells) - 1}`)
            celdas_array[1] = document.getElementById(`${(total_cells)}`)
            celdas_array[2] = document.getElementById(`${Number(total_cells) - Number(cells_per_row) + 1}`)
            celdas_array[3] = document.getElementById(`${(estado_celda.id - 1)}`)
            celdas_array[4] = document.getElementById("1")
            celdas_array[5] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) - 1}`)
            celdas_array[6] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row)}`)
            celdas_array[7] = document.getElementById(`${Number(estado_celda.id) + 1}`)
        }

        // Esquina inferior Izquierda - Perfecto //
        else if (estado_celda.id == ((total_cells) + 1 - (cells_per_row))) {

            celdas_array[0] = document.getElementById(`${(estado_celda.id) - 1}`)
            celdas_array[1] = document.getElementById(`${(estado_celda.id) - (cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) + 1}`)
            celdas_array[3] = document.getElementById(`${(total_cells)}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) + 1}`)
            celdas_array[5] = document.getElementById(`${(cells_per_row)}`)
            celdas_array[6] = document.getElementById('1')
            celdas_array[7] = document.getElementById("2")
        }

        // linea horizontal superior - Perfecto//
        else if (Number(estado_celda.id) > 1 && Number(estado_celda.id) < Number(cells_per_row)) {

            celdas_array[0] = document.getElementById(`${Number(estado_celda.id) + Number(total_cells) - Number(cells_per_row) - 1}`)
            celdas_array[1] = document.getElementById(`${Number(estado_celda.id) + Number(total_cells) - Number(cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(estado_celda.id) + Number(total_cells) - Number(cells_per_row) + 1}`)
            celdas_array[3] = document.getElementById(`${Number(estado_celda.id) - 1}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) + 1}`)
            celdas_array[5] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) - 1}`)
            celdas_array[6] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row)}`)
            celdas_array[7] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) + 1}`)
        }

        // Linea vertical izquierda - Perfecto //
        else if ((Number(estado_celda.id) % Number(cells_per_row) == 1 && Number(estado_celda.id) != (Number(total_cells) - Number(cells_per_row) + 1))) {

            celdas_array[0] = document.getElementById(`${Number(estado_celda.id) - 1}`)
            celdas_array[1] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) + 1}`)
            celdas_array[3] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) - 1}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) + 1}`)
            celdas_array[5] = document.getElementById(`${Number(estado_celda.id) + (Number(cells_per_row) * 2) - 1}`)
            celdas_array[6] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row)}`)
            celdas_array[7] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) + 1}`)
        }

        // Linea Horizontal inferior - Perfecto //
        else if (Number(estado_celda.id) > (Number(total_cells) - Number(cells_per_row) + 1) && Number(estado_celda.id) < Number(total_cells)) {

            celdas_array[0] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) - 1}`)
            celdas_array[1] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) + 1}`)
            celdas_array[3] = document.getElementById(`${Number(estado_celda.id) - 1}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) + 1}`)
            celdas_array[5] = document.getElementById(`${Number(estado_celda.id) - Number(total_cells) + Number(cells_per_row) - 1}`)
            celdas_array[6] = document.getElementById(`${Number(estado_celda.id) - Number(total_cells) + Number(cells_per_row)}`)
            celdas_array[7] = document.getElementById(`${Number(estado_celda.id) - Number(total_cells) + Number(cells_per_row) + 1}`)
        }

        // Linea Vertical Derecha
        else if ((Number(estado_celda.id) % Number(cells_per_row)) == 0 && Number(estado_celda.id) != Number(cells_per_row) && Number(estado_celda.id) != Number(total_cells)) {
            celdas_array[0] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) - 1}`)
            celdas_array[1] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(estado_celda.id) - (Number(cells_per_row * 2)) + 1}`)
            celdas_array[3] = document.getElementById(`${Number(estado_celda.id) - 1}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) + 1}`)
            celdas_array[5] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) - 1}`)
            celdas_array[6] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row)}`)
            celdas_array[7] = document.getElementById(`${Number(estado_celda.id) + 1}`)
        }

        else {
            celdas_array[0] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) - 1}`)
            celdas_array[1] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row)}`)
            celdas_array[2] = document.getElementById(`${Number(estado_celda.id) - Number(cells_per_row) + 1}`)
            celdas_array[3] = document.getElementById(`${Number(estado_celda.id) - 1}`)
            celdas_array[4] = document.getElementById(`${Number(estado_celda.id) + 1}`)
            celdas_array[5] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) - 1}`)
            celdas_array[6] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row)}`)
            celdas_array[7] = document.getElementById(`${Number(estado_celda.id) + Number(cells_per_row) + 1}`)
        }

        //if (estado_celda.id == 500) { console.log(celdas_array, estado_celda) }

        let valor = 0

        for (let i = 0; i < celdas_array.length; i++) {
            if (celdas_array[i].classList.contains('celda_viva')) { valor += 1, check_value += 1 }
        }

        // establecer estado futuro de la celda central segun valor global de celdas vecinas //

        if (valor < 2 && estado_celda.classList.contains('celda_viva')) {
            estado_celda.classList.add('morira')
        }

        if (valor > 3 && estado_celda.classList.contains('celda_viva')) {
            estado_celda.classList.add('morira')
        }

        if (valor == 3 && estado_celda.classList.contains('celda_muerta')) { estado_celda.classList.add("vivira") }
    })

    if (check_value == 0) {
        stop_ejecucion()
    }
}


// APLICAR CAMBIOS DE VALOR DE CELDA CENTRAL MEDIANTE ACTUALIZACION DE CLASES //

