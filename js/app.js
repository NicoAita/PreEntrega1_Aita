

function suma(num1, num2) {
    resultado = parseInt(num1) + parseInt(num2);
    return resultado;
};

function resta(num1, num2) {
    resultado = parseInt(num1) - parseInt(num2);
    return resultado;
}

function multiplicar(num1, num2) {
    resultado = parseInt(num1) * parseInt(num2);
    return resultado;
}

function dividir(num1, num2) {
    resultado = parseInt(num1) / parseInt(num2);
    return resultado;
}


let operacion;

do {

    operacion = prompt("¿Qué operación querés realizar? \n 1: Sumar | 2: Restar | 3: Multiplicar | 4: Dividir | 5: Exit");

    if (operacion == "1") {
        let numero1 = prompt("Agregá el primer número a sumar");
        let numero2 = prompt("Agregá el segundo número a sumar");
        resultado = suma(numero1, numero2);
        alert("El resultado de la suma es: " + resultado);
    }

    else if (operacion == "2") {
        let numero1 = prompt("Agregá el primer número a restar");
        let numero2 = prompt("Agregá el segundo número a restar");
        resultado = resta(numero1, numero2);
        alert("El resultado de la resta es: " + resultado);
    }

    else if (operacion == "3") {

        let numero1 = prompt("Agregá el primer número a restar");
        let numero2 = prompt("Agregá el segundo número a restar");
        resultado = multiplicar(numero1, numero2);
        alert("El resultado de la multiplicación es: " + resultado);
    }

    else if (operacion == "4") {
        numero1 = prompt("Agregá el primer número a dividir");
        numero2 = prompt("Agregá el segundo número a dividir");
        resultado = dividir(numero1, numero2);
        alert("El resultado de la división es: " + resultado);
    }

    else if (operacion == "5") {
        break;
    }

    else {

        alert("🚧La opción que indicaste no es correcta🚧 \n Seleccioná una opción del 1 al 4.")
    }

    inicioCalculadora = confirm("¿Querés hacer otro cálculo?🤔");

}

while (inicioCalculadora == true);

alert("Hasta la vista Baby!😎");


