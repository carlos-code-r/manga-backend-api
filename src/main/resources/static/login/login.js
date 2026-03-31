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

// 1. CAMBIO DE MODO (Visual)
const cambiarModo = (modo) => {
    if (errorBanner) errorBanner.style.display = "none";
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

// 2. ENVÍO DE DATOS AL BACKEND
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const usuarioValue = document.getElementById("username").value.trim();
    const passwordValue = document.getElementById("password").value.trim();
    const emailField = document.getElementById("email");
    const emailValue = emailField ? emailField.value.trim() : "";

    const url = esRegistro ? API_BASE : API_LOGIN;
    
    // Al registrarse siempre es USER. Al loguearse no enviamos rol.
    const bodyData = esRegistro 
        ? { 
            usuario: usuarioValue, 
            password: passwordValue, 
            email: emailValue, 
            rol: "USER" 
          } 
        : { 
            usuario: usuarioValue, 
            password: passwordValue 
          };

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        });

        if (res.ok) {
            if (esRegistro) {
                alert("¡Cuenta creada con éxito! Ahora inicia sesión.");
                cambiarModo('login');
            } else {
                // ÉXITO EN LOGIN: Obtenemos los datos reales del servidor
                const usuarioData = await res.json(); 
                
                // Guardamos en el navegador el ROL real (ADMIN o USER) que viene de la BBDD
                localStorage.setItem("rolUsuario", usuarioData.rol);
                localStorage.setItem("nombreUsuario", usuarioData.usuario);
                
                alert("¡Bienvenido, " + usuarioData.usuario + "!");

                // REDIRECCIÓN SEGÚN ROL
                if (usuarioData.rol === "ADMIN") {
                    window.location.href = "../dashboard/dashboard.html"; 
                } else {
                    window.location.href = "../catalogo/index.html"; 
                }
            }
        } else {
            if (errorBanner) errorBanner.style.display = "block";
            const errorMsg = await res.text();
            console.error("Error desde Java:", errorMsg);
        }
    } catch (err) {
        console.error("Error de conexión:", err);
        alert("No se pudo conectar con el servidor Java. ¿Está encendido?");
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const modo = params.get("mode");
    cambiarModo(modo === "registro" ? 'registro' : 'login');
});