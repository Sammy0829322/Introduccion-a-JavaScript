let saldo =1000
let opcion= parseInt(prompt(
   ` Bienvenido al cajero automatico

   1.- Consultar
   2.- Depositar
   3.-Retirar dinero
   4.- Salir`

));
switch (opcion) {
    case 1:
        alert(`tu saldo al dia de hoy es  ${saldo}`)
        
        break;
        case 2 :
            let depositar =parseFloat(prompt(`¿Cuanto dinero deseas depositar`))
            saldo+=depositar
            alert(`Tu nuevo saldo es ${saldo} `)
            break;
        case 3:
            let retirar=parseFloat(prompt(`¿Cuanto dinero deseas retirar`))
            if (retirar>saldo) {
                 alert(`no tienes saldo suficiente  `)
                 retirar=parseFloat(prompt(`Seleccciona una cantidad no mayor a ${saldo} `))
                  saldo-=retirar
                 alert(`Tu nuevo saldo es ${saldo} y has retirado ${retirar} `)
                
            } else {
                saldo-=retirar
                 alert(`Tu nuevo saldo es ${saldo} y has retirado ${retirar} `)

            }  
            break;  
            case 4:
                 alert(`Gracias por visitarnos `)
                 break;

    default:
        console.log("Actividad no reconocida");
        break;
}