// Actividad de campus

let librosLeidos=["Don Quijote de la Mancha ","El Señor de los Anillos", "El principito","Harry Potter y la piedra filosofal "]

function agregarLibro(titulo) {
    librosLeidos.unshift(titulo)

    
}
function mostrarLibrosLeidos() {
    console.log(librosLeidos)
}
agregarLibro("mil años de soledad")
mostrarLibrosLeidos()




// Funcion para calcular el area de un triangulo 
function area_triangulo(base , altura) {
    return (base*altura)/2;
    
}

console.log(area_triangulo(2,3))


// Funcion para calcular la multiplicacion de dos numeros y tambien  imprimer el numero mayor 
function multiplicacion(a, b) {
    return {
        resultado: a * b,
        mayor: a > b ? a : b
    };
}

console.log(multiplicacion(3,5))



// Funcion para saludar
function saludar(nombre) {
    return console.log("hola",nombre)
    
}

saludar("samuel")


// Funcion para dividir dos numeros 
function division(c,d) {
    return c/d
    
}

console.log(division(2,5))


// Funcion para imprimir si un numero es par o impar 
function parImpar(numero) {
valor=numero % 2;

if (valor===0) {
    console.log("el numero es par")
}
else if (valor=== 1) {    
    console.log("el numero es par")

} else {
    console.log("revisa el numero ingresado")
}
    
}

 parImpar(8)




// cajero automatico con funciones 
 switch (opcion) {
    case 1:
      Consultar();
        
        break;
         case 2 :
            Depositar();
            break;
        case 3:
              retirarDinero();
            break;  
            case 4:
                Salir();
                 break;

    default:
        console.log("Actividad no reconocida");
        break; 
} 



function Consultar() {
     alert(`tu saldo al dia de hoy es  ${saldo}`)    
}

function Depositar(depositar) {
depositar =parseFloat(prompt(`¿Cuanto dinero deseas depositar`))
            saldo+=depositar
            alert(`Tu nuevo saldo es ${saldo} `)    
    
}

function retirarDinero(retirar) {
  retirar=parseFloat(prompt(`¿Cuanto dinero deseas retirar`))
            if (retirar>saldo) {
                 alert(`no tienes saldo suficiente  `)
                 retirar=parseFloat(prompt(`Seleccciona una cantidad no mayor a ${saldo} `))
                  saldo-=retirar
                 alert(`Tu nuevo saldo es ${saldo} y has retirado ${retirar} `)
                
            } else {
                saldo-=retirar
                 alert(`Tu nuevo saldo es ${saldo} y has retirado ${retirar} `)

            }   
    
}

function Salir() {
     alert(`Gracias por visitarnos `)
    
}




 