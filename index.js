// Mensaje de bienvenida //

alert("Bienvenido!!🎈 Por favor ingresa dos numeros y calculare la suma de todos los numeros pares entre ellos 🎈")

// Variables //

let primerNumero = parseInt(prompt("Ingresa el primer numero"))
let segundoNumero = parseInt(prompt("Ingresa el segundo numero"))
let primerNumeroPar = ""
let primerNumeroImpar = ""
let sumaPrimerNumeroPar = 0
let sumaPrimerNumeroImpar = 0
let estado = 0

// Verificacion de condiciones //

if (isNaN(primerNumero) || isNaN(segundoNumero)) {
    alert("debes ingresar un numero entero")
} else if (primerNumero < 0 || segundoNumero < 0) {
    alert("el numero ingresado no puede ser negativo")
} else if (segundoNumero < primerNumero) {
    alert("el segundo numero debe ser mayor que el primero")
} 

// Ejecucion de codigo para numeros pares //

if (primerNumero % 2 === 0 && primerNumero >= 0 && segundoNumero > primerNumero && !isNaN(primerNumero) && !isNaN(segundoNumero)) {
    let primerNumeroPar = primerNumero
    for (let i = primerNumeroPar; i < segundoNumero; i= i + 2) {
        if (i=== primerNumeroPar) {
            continue
        }
        sumaPrimerNumeroPar= sumaPrimerNumeroPar + i;
        console.log(i, sumaPrimerNumeroPar);
    }
    alert("La suma de los numeros pares entre " + primerNumero +" y " + segundoNumero + " es 🎉 " + sumaPrimerNumeroPar + " 🎉")
}

// Ejecucion de codigo para numeros impares //

if (primerNumero % 2 !== 0 && primerNumero >= 0 && segundoNumero > primerNumero && !isNaN(primerNumero) && !isNaN(segundoNumero)) {
    let primerNumeroImpar = primerNumero + 1
    for (let i = primerNumeroImpar; i < segundoNumero; i= i + 2) {
        sumaPrimerNumeroImpar= sumaPrimerNumeroImpar + i;
        console.log(i,sumaPrimerNumeroImpar);
    }
    alert("La suma de los numeros pares entre " + primerNumero +" y " + segundoNumero + " es 🎉 " + sumaPrimerNumeroImpar + " 🎉");
}