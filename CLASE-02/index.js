// Actividad campus

let calificacion = 101
if (calificacion > 0) {
    if (calificacion >= 90 && calificacion <= 100) {
        console.log("Excelente")

    }
    else if (calificacion >= 75 && calificacion <= 89) {
        console.log("bien")

    }
    else if (calificacion >= 60 && calificacion <= 74) {
        console.log("suficiente")

    }
    else if (calificacion < 60) {
        console.log("El estudiante no aprueba")

    }
    else {
        console.log("calificacion no valida")
    }


}
else {
    console.log("la calificacion no es valida")
}


// Actidades Clase

// Ejercicio 1.- Clasificar las etapas del humano 0-12 niño 13-17 adolecente  18-60 adulto 

let edad = 89
if (edad >= 0 && edad <= 12) {
    console.log("Niño")

}
else if (edad >= 13 && edad <= 17) {
    console.log("Adolecente")

}

else if (edad >= 18 && edad <= 60) {
    console.log("Adulto")

}
else if (edad > 60) {
    console.log("Adulto mayor")

}
else {
    console.log(" Edad no reconocida")

}
// Ejercicio 2.- Ten 3 numeros y muestra cual es el mayoy
let numero_1 = 0;
let numero_2 = 2;
let numero_3 = 5;
let mayor = numero_1;
let menor = numero_1;

if (numero_2 > mayor) {
    mayor = numero_2;
}
if (numero_2 < menor) {
    menor = numero_2;
}

if (numero_3 > mayor) {
    mayor = numero_3;
}
if (numero_3 < menor) {
    menor = numero_3;
}

console.log("El número mayor es:", mayor);
console.log("El número menor es:", menor);

// Ejercicio 3.- Pide 3 lados de un triangulo y determina si es equilatero isosceles y escaleno

let Lado_A = 2
let Lado_B = 3
let Lado_C = 1

if (Lado_A===Lado_B && Lado_A ===Lado_C) {
    console.log("triangulo equilatero")
    
}
else if (Lado_A===Lado_B && Lado_A!==Lado_C && Lado_B !== Lado_C) {
    console.log("triangulo escaleno")
    
}

else {
    console.log("trianguulo isósceles ")
    
}

// Pide usuario y contraseña y determina si tiene acceso o no 
let usuario="samuel"
let contraseña ="123@"

if (usuario==="samuel" && contraseña==="123@") {
    console.log("sesión iniciada")
} else {
    
    console.log(" contraseña o usuario incorrectos")
}

