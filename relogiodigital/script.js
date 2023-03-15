const data = new Date
const dia = String(data.getDate()).padStart(2, '0');
const m = String(data.getMonth() + 1).padStart(2, '0');
const a = String(data.getFullYear());

    ano.textContent = a;
    mes.textContent = m;
    dias.textContent = dia;
    

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time(){
   let dateToday = new Date();
   let hr = dateToday.getHours(); 
   let min = dateToday.getMinutes();
   let s = dateToday.getSeconds();


    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (s < 10) s = '0' + s
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    
})