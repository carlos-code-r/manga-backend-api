const API_LOGIN = "http://localhost:8080/auth/login";

document.getElementById("form-login").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBanner = document.getElementById("error-login");

    errorBanner.style.display = "none";

    try {
        const respuesta = await fetch(API_LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (respuesta.ok) {
            const usuario = await respuesta.json();
            
            // Guardamos el objeto usuario (incluyendo el ROL) en el navegador
            localStorage.setItem("manga_session", JSON.stringify(usuario));
            
            // Redirigir al Dashboard de gestión
            window.location.href = "../dashboard/dashboard.html";
        } else {
            errorBanner.style.display = "block";
        }
    } catch (error) {
        console.error("Error en conexión:", error);
        alert("❌ Error de servidor. Asegúrate de que el Backend esté encendido.");
    }
});