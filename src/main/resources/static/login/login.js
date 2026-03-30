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
    
    // Construimos el objeto según tu UsuarioDto.java
    const bodyData = esRegistro 
        ? { 
            usuario: usuarioValue, 
            password: passwordValue, 
            email: emailValue, 
            rol: "ADMIN" // Enviamos el Enum en mayúsculas
          } 
        : { 
            usuario: usuarioValue, 
            password: passwordValue 
            // En login NO enviamos email para evitar el error 400 de validación
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
                // ÉXITO: Guardamos sesión y vamos al Dashboard
                localStorage.setItem("rolUsuario", "ADMIN");
                localStorage.setItem("nombreUsuario", usuarioValue);
                
                alert("¡Bienvenido, " + usuarioValue + "!");
                window.location.href = "../dashboard/dashboard.html"; 
            }
        } else {
            // Si el backend responde 400 (Bad Request) o 401 (Unauthorized)
            if (errorBanner) errorBanner.style.display = "block";
            const errorMsg = await res.text();
            console.error("Error desde Java:", errorMsg);
        }
    } catch (err) {
        console.error("Error de conexión:", err);
        alert("No se pudo conectar con el servidor Java. ¿Está encendido?");
    }
});

// 3. INICIO: Detectar modo por URL
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const modo = params.get("mode");
    cambiarModo(modo === "registro" ? 'registro' : 'login');
});