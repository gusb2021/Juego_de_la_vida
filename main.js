import { set_size, crear_celdas, analizar_estado, width, height } from './functions.js'
import { show_buttons } from './interactive.js'

let btn_small = document.getElementById('btn_small')
let btn_medium = document.getElementById('btn_medium')
let btn_large = document.getElementById('btn_large')

let btn_create = document.getElementById('btn_create')
let btn_analize = document.getElementById('btn_analize')
let btn_stop = document.getElementById('btn_stop')
let btn_reset = document.getElementById('btn_reset')

let containerButtons = document.querySelector('.containerButtons')

let get_canvas

let comenzar_ejecucion
let intervalo = 400

// CREATE CANVAS BUTTONS //

btn_small.addEventListener('click', () => {
    if (!get_canvas) {
        create_canvas(0.5)
    }
    else {
        delete_canvas()
        create_canvas(0.5)
    }
})

btn_medium.addEventListener('click', () => {
    if (!get_canvas) {
        create_canvas(0.7)
    }
    else {
        delete_canvas()
        create_canvas(0.7)
    }
})

btn_large.addEventListener('click', () => {
    if (!get_canvas) {
        create_canvas(0.9)
    }
    else {
        delete_canvas()
        create_canvas(0.9)
    }
})


// DELETE CANVAS //

function delete_canvas() {

    let parent = get_canvas.parentNode
    parent.removeChild(get_canvas)
}
// CREATE CANVAS //

function create_canvas(size) {
    set_size(size)
    let plano = document.createElement('div')
    plano.id = 'plano'
    plano.style.width = `${width}px`
    plano.style.height = `${height}px`
    let h1 = document.querySelector('h1')
    h1.style.display = 'none'
    document.body.appendChild(plano)
    crear_celdas()
    btn_create.innerHTML = 'Rezise Canvas'
    show_buttons()
    get_canvas = document.getElementById('plano')
    
}

// BUTTON START RUNNING //

btn_analize.addEventListener('click', (e) => {
    e.preventDefault()
    btn_analize.style.display = "none"
    iniciar_ejecucion()
})

// BUTTON STOP RUNNING //

btn_stop.addEventListener('click', () => {
    stop_ejecucion()
    btn_analize.style.display = "inline-block"
    btn_create.style.display = "inline-block"
})

// BUTTON RESET //

btn_reset.addEventListener('click', () => {
    stop_ejecucion()
    let divs_total = document.getElementsByClassName('celda')
    for (let i = 0; i < divs_total.length; i++) {
        if (divs_total[i].classList.contains('celda_viva', 'morira', 'vivira')) {
            divs_total[i].classList.remove('celda_viva', 'vivira', 'morira')
            divs_total[i].classList.add('celda_muerta')
        }
    }
    btn_analize.style.display = "block"
})

// CHECK AND CHANGE CELLS STATE //

function ejecutar() {

    let celdas_general = document.querySelectorAll('div.celda')
    celdas_general.forEach((cell_change) => {
        if (cell_change.classList.contains('vivira') && cell_change.classList.contains('celda_muerta')) {
            cell_change.classList.remove('celda_muerta')
            cell_change.classList.add('celda_viva')
            cell_change.classList.remove('vivira')
        }
        if (cell_change.classList.contains("morira") && cell_change.classList.contains('celda_viva')) {
            cell_change.classList.remove('celda_viva')
            cell_change.classList.add('celda_muerta')
            cell_change.classList.remove('morira')
        }
    })
}


// CHANGE EXECUTION INVERVAL //

export let set_interval = (mls) => {
    stop_ejecucion()
    intervalo = mls
    iniciar_ejecucion()
}


// SET SELECTED INTERVAL ADN EXECUTE

function iniciar_ejecucion(multiplier) {
    comenzar_ejecucion = setInterval(ejecutar_inicio, intervalo);
    ejecutar_inicio()
}


// START RUNNING - CHECK AND EXECUTE //

function ejecutar_inicio() {
    analizar_estado()
    ejecutar()
}


// CLEAR INTERVAL //

export let stop_ejecucion = () => {
    clearInterval(comenzar_ejecucion)
    btn_analize.style.display = "inline-block"
}





















