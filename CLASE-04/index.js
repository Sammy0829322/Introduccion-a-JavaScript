function area_triangulo(base , altura) {
    return (base*altura)/2;
    
}

console.log(area_triangulo(2,3))

function multiplicacion(a, b) {
    return {
        resultado: a * b,
        mayor: a > b ? a : b
    };
}

console.log(multiplicacion(3,5))


function saludar(nombre) {
    return console.log("hola",nombre)
    
}

saludar("samuel")

function division(c,d) {
    return c/d
    
}

console.log(division(2,5))