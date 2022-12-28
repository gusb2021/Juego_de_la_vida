import { set_interval } from './main.js'


let btn_speed = document.getElementById('btn_speed')
let div_speed = document.getElementById('div_speed')
let btn_slow = document.getElementById('btn_slow')
let btn_normal = document.getElementById('btn_normal')
let btn_fast = document.getElementById('btn_fast')

let btn_create = document.getElementById('btn_create')
let div_canvas = document.getElementById('div_canvas')

let btn_analize = document.getElementById('btn_analize')
let btn_stop = document.getElementById('btn_stop')
let btn_reset = document.getElementById('btn_reset')


let mouse_down = false


// CELL SELECTION WITH MOUSE CLICK AND DRAG //

document.addEventListener('mouseover', (e) => {
    e.preventDefault()
    if (mouse_down === true && e.target.classList.contains('celda')) {
        e.target.classList.remove('celda_muerta')
        e.target.classList.add('celda_viva')
    }
})

document.addEventListener('mouseup', (e) => {
    e.preventDefault()
    mouse_down = false
})


document.addEventListener('mousedown', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('celda'))
        mouse_down = true


    if (e.target.classList.contains('celda_muerta')) {
        e.target.classList.remove('celda_muerta')
        e.target.classList.add('celda_viva')
    }

    else if (e.target.classList.contains('celda_viva')) {
        e.target.classList.remove('celda_viva')
        e.target.classList.add('celda_muerta')
    }
})

// SHOW AND HIDE ALL BUTTONS //

export let show_buttons = () => {

    btn_analize.classList.remove('displayNone')
    btn_analize.classList.add('display')

    btn_stop.classList.remove('displayNone')
    btn_stop.classList.add('display')

    btn_speed.classList.remove('displayNone')
    btn_speed.classList.add('display')

    btn_reset.classList.add('display')
    btn_reset.classList.remove('displayNone')

}


// SHOW AND HIDE CANVAS BUTTONS //

div_canvas.addEventListener('mouseleave', () => {

    div_canvas.style.display = "none"
})

btn_create.addEventListener('click', (e) => {

    div_canvas.style.display === "none" ? div_canvas.style.display = "flex" : div_canvas.style.display = "none"
})


// REZISE CANVAS and SHOW CREATE BUTTONS //

let resize_canvas = () => {

}


// SHOW AND HIDE SPEED BUTTONS //

div_speed.addEventListener('mouseleave', () => {

    div_speed.style.display = "none"
})

btn_speed.addEventListener('click', () => {

    div_speed.style.display === "none" ? div_speed.style.display = "flex" : div_speed.style.display = "none"
})


// INTERVAL SPEED MODIFIERS //

btn_slow.addEventListener('click', () => {
    set_interval(600)
    btn_slow.classList.add('button--clicked')
    btn_normal.classList.remove('button--clicked')
    btn_fast.classList.remove('button--clicked')
})

btn_normal.addEventListener('click', () => {
    set_interval(400)
    btn_slow.classList.remove('button--clicked')
    btn_normal.classList.add('button--clicked')
    btn_fast.classList.remove('button--clicked')
})

btn_fast.addEventListener('click', () => {
    set_interval(100)
    btn_slow.classList.remove('button--clicked')
    btn_normal.classList.remove('button--clicked')
    btn_fast.classList.add('button--clicked')
})

