const API_BASE = "http://localhost:8080/usuarios";
const API_LOGIN = "http://localhost:8080/usuarios/login-test";

const form = document.getElementById("form-login");
const tabLogin = document.getElementById("tab-login");
const tabRegistro = document.getElementById("tab-registro");
const toggleWrapper = document.getElementById("toggle-wrapper");
const groupEmail = document.getElementById("group-email");
const headerSubtitle = document.getElementById("header-subtitle");
const btnSubmit = document.getElementById("btn-submit");
const errorBanner = document.getElementById("error-login");

let esRegistro = false;

// FUNCIÓN PARA CAMBIAR ENTRE MODOS
const cambiarModo = (modo) => {
    errorBanner.style.display = "none";
    if (modo === 'registro') {
        esRegistro = true;
        toggleWrapper.classList.add("registro-active");
        tabLogin.classList.remove("active");
        tabRegistro.classList.add("active");
        groupEmail.style.display = "block";
        headerSubtitle.innerText = "Únete a la comunidad";
        btnSubmit.innerText = "CREAR CUENTA";
    } else {
        esRegistro = false;
        toggleWrapper.classList.remove("registro-active");
        tabLogin.classList.add("active");
        tabRegistro.classList.remove("active");
        groupEmail.style.display = "none";
        headerSubtitle.innerText = "Panel de Creadores";
        btnSubmit.innerText = "ENTRAR AL PANEL";
    }
};

tabLogin.onclick = () => cambiarModo('login');
tabRegistro.onclick = () => cambiarModo('registro');

// ENVÍO DE DATOS
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const usuario = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    const url = esRegistro ? API_BASE : API_LOGIN;
    const bodyData = esRegistro 
        ? { usuario, password, email, rol: "USER" } 
        : { usuario, password };

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        });

        if (res.ok) {
            if (esRegistro) {
                alert("¡Cuenta creada! Ya puedes iniciar sesión.");
                cambiarModo('login');
            } else {
                alert("¡Bienvenido Admin!");
                window.location.href = "../dashboard/dashboard.html";
            }
        } else {
            errorBanner.style.display = "block";
        }
    } catch (err) {
        alert("Error de conexión con el servidor.");
    }
});
// Al cargar la página, miramos qué dice la URL
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const modo = params.get("mode");

    if (modo === "registro") {
        cambiarModo('registro'); 
    } else {
        cambiarModo('login');    
    }
});