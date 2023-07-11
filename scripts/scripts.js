// Version: 1.0

function mostrarResultado(resultado) {
    document.getElementById("valor3").value = resultado;
}

function suma() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;

    mostrarResultado(numero1 + numero2);
}
function resta() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;

    mostrarResultado(numero1 - numero2);
}
function multiplica() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;

    mostrarResultado(numero1 * numero2);
}
function divide() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;

    mostrarResultado(numero1 / numero2);
}

function raiz() {
    let numero = +document.getElementById("valor2").value;
    
    mostrarResultado(Math.sqrt(numero));
}

function potencia() {
    let numero1 = +document.getElementById("valor1").value;
    let numero2 = +document.getElementById("valor2").value;

    mostrarResultado(Math.pow(numero1, numero2));
}

function valorAbsoluto() {
    let numero = +document.getElementById("valor2").value;
    
    mostrarResultado(Math.sqrt(numero));
}

function random() {
    let minimo = +document.getElementById("valor1").value;
    let maximo = +document.getElementById("valor2").value;
    maximo = maximo +1;


    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function round() {
    let resultado = +document.getElementById("valor3").value;
    
    mostrarResultado(Math.round(resultado));
}
function ceil() {
    let resultado = +document.getElementById("valor3").value;
    
    mostrarResultado(Math.ceil(resultado));
}
function floor() {
    let resultado = +document.getElementById("valor3").value;
    
    mostrarResultado(Math.floor(resultado));
}
