const longitud = document.getElementById("longitud");
const num = document.getElementById("num");

longitud.addEventListener("input", () => {
    num.textContent = longitud.value;
});

document.getElementById("generate").addEventListener("click", function () {


    let pool = "";
    if (document.getElementById("uppercase").checked) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById("lowercase").checked) pool += "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("numbers").checked) pool += "0123456789";
    if (document.getElementById("symbols").checked) pool += "!@#$%^&*()_+-=";


    if (pool === "") {
        alert("Selecciona al menos un tipo de carácter");
        return;
    }


    const longitud = document.getElementById("longitud").value;
    let password = "";

    for (let i = 0; i < longitud; i++) {
        password += pool[Math.floor(Math.random() * pool.length)];
    }


    document.querySelector(".copiar_contraseña p").textContent = password;

    if (longitud < 5) {
        document.getElementById("strength").textContent = "Weak";
        document.querySelectorAll(".barra-fill")[0].style.backgroundColor = "red";
        document.querySelectorAll(".barra-fill")[1].style.backgroundColor = "#00000087";
        document.querySelectorAll(".barra-fill")[2].style.backgroundColor = "#00000087";
        document.querySelectorAll(".barra-fill")[3].style.backgroundColor = "#00000087";


    } else if (longitud >= 5 && longitud < 10) {
        document.getElementById("strength").textContent = "Medium";
        document.querySelectorAll(".barra-fill")[0].style.backgroundColor = "orange";
        document.querySelectorAll(".barra-fill")[1].style.backgroundColor = "orange";
        document.querySelectorAll(".barra-fill")[2].style.backgroundColor = "#00000087";
        document.querySelectorAll(".barra-fill")[3].style.backgroundColor = "#00000087";

    }
    else if (longitud >= 10 && longitud < 15) {
        document.getElementById("strength").textContent = "Strong";
        document.querySelectorAll(".barra-fill")[0].style.backgroundColor = "yellow";
        document.querySelectorAll(".barra-fill")[1].style.backgroundColor = "yellow";
        document.querySelectorAll(".barra-fill")[2].style.backgroundColor = "yellow";
        document.querySelectorAll(".barra-fill")[3].style.backgroundColor = "#00000087";

    }

    else {
        document.getElementById("strength").textContent = "Strong";
        document.querySelectorAll(".barra-fill")[0].style.backgroundColor = "green";
        document.querySelectorAll(".barra-fill")[1].style.backgroundColor = "green";
        document.querySelectorAll(".barra-fill")[2].style.backgroundColor = "green";
        document.querySelectorAll(".barra-fill")[3].style.backgroundColor = "green";
    }


});
document.getElementById("copy").addEventListener("click", function () {
    const password = document.querySelector(".copiar_contraseña p").textContent;
    navigator.clipboard.writeText(password);
});

