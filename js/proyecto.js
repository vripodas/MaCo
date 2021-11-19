const nombre = document.getElementById('nombre');
const sexo = document.getElementById('sexo');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');
const boton = document.getElementById('boton'); 
const historial = document.getElementById('historial2');

boton.addEventListener('click', CalcularIMC);

var resultadoIMC = 0;

var miarray = [ ]

function CalcularIMC() {
    altura2 = Math.round(Number(altura.value)) / 100
    peso2 = Math.round(Number(peso.value));
    resultadoIMC = (peso2/ Math.pow(altura2, 2));
    Math.round(resultadoIMC);
    resultado.value = resultadoIMC


    if (resultadoIMC < 20) {
        alert('Peso por debajo de lo normal')        
        llenarHistorial();
        return;
    }
    if (resultadoIMC >=20 && resultadoIMC <= 24.9) {
        alert('Peso Normal')
        llenarHistorial();
        return;
    }
    if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
        alert('Sobrepeso')
        llenarHistorial();
        return;
    }
    if (resultadoIMC > 30) {
        alert('Obesidad');
        llenarHistorial();
        return;
    }
    

}

function recorrerArray() {
    historial.innerHTML = '';
    for (let index = 0; index < miarray.length; index++) {
        const element = miarray[index];
        historial.innerHTML += ` ${element.nombre} - ${element.imc} <br> `;
    }
}

function llenarHistorial() {
    var obj = {
        nombre: nombre.value,
        imc: resultadoIMC
    }
    miarray.push(obj);
    recorrerArray();
}


