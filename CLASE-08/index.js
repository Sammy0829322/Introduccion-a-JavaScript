function crearMensaje() {
    let mensaje = document.getElementById('comentario').value;
    
    if (mensaje.trim() === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }
    let ahora = new Date();
    
    let fechaHora = ahora.toLocaleString();

    document.getElementById("container").innerHTML += `
        <div class="comentario-item">
            <p>${mensaje}</p>
            <small style="color: gray;">Publicado el: ${fechaHora}</small>
        </div>
    `; 
    
    document.getElementById('comentario').value = '';
}


function eliminarMensaje() {
    let contenedor = document.getElementById('container');
    contenedor.innerHTML = ''; 
}