const nameInputName = document.getElementById('name_input_name')
const heigthInputHeigth = document.getElementById('heigth_input_heigth')
const weigthInputWeigth = document.getElementById('weigth_input_weigth')
const buttonCalcular = document.getElementById('button_calcular')
const buttonReset = document.getElementById('button_reset')
const res = document.getElementById('result_result')



function calcular(){
    let heigth = heigthInputHeigth.value * heigthInputHeigth.value
    let weigth = weigthInputWeigth.value
    let imc = weigth / heigth
    let names = nameInputName.value
    res.innerHTML = `Ola ${names}, seu IMC é  de ${imc.toFixed(1)}`
     
}   

buttonCalcular.addEventListener("click", calcular)


function reset(){
    nameInputName.value = ''
    heigthInputHeigth.value = ''
    weigthInputWeigth.value = ''
    res.innerHTML = '...'
}

buttonReset.addEventListener("click", reset)