export { set_size, btnAnailizar, btnInicio, btnStop, alto, ancho, tamaño_celda, intervalo, btnReiniciar, btnSpeedUp, btnSpeedDown, celdas_por_fila, celdas_por_columna, celdas_totales, upIntervalo, downIntervalo }


let btnInicio = document.querySelector('#btnInicio')
let btnAnailizar = document.querySelector('#btnAnalizar')
let btnStop = document.querySelector('#btnStop')
let btnReiniciar = document.querySelector('#btnReiniciar')
let btnSpeedUp = document.querySelector('#btnSpeedUp')
let btnSpeedDown = document.querySelector('#btnSpeedDown')
let ancho
let alto = 500
let tamaño_celda = 5
let celdas_por_fila
let celdas_por_columna
let celdas_totales

let display_width = window.innerWidth
let display_height = window.innerHeight

let set_size = () => {
    ancho = display_width * 0.8 - ((display_width * 0.8) % 5)
    celdas_por_fila = ancho / tamaño_celda  //200
    celdas_por_columna = alto / tamaño_celda  //100
    celdas_totales = celdas_por_columna * celdas_por_fila

    console.log(ancho)
}



let intervalo = 100

let upIntervalo = () => {
    intervalo *= 0.5
}
let downIntervalo = () => {
    intervalo *= 1.5
}

