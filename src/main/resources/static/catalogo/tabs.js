document.addEventListener("DOMContentLoaded", () => {
    /* ============================================================
       0. LÓGICA DE SESIÓN (LOGIN/REGISTRO/PANEL)
       ============================================================ */
    // IMPORTANTE: Usamos "rolUsuario" y "ADMIN" para que coincida con login.js
    const esAdmin = localStorage.getItem("rolUsuario") === "ADMIN";
    const nombreUsuario = localStorage.getItem("nombreUsuario");

    const panelBtn = document.getElementById("btn-panel-creador");
    const loginBtn = document.getElementById("btn-login");
    const registroBtn = document.getElementById("btn-registro");

    if (esAdmin) {
        if (panelBtn) {
            panelBtn.style.display = "flex"; // Muestra el botón de engranaje
            panelBtn.innerText = `⚙️ Panel de ${nombreUsuario || 'Admin'}`;
        }
        if (loginBtn) loginBtn.style.display = "none";       // Oculta Login
        if (registroBtn) registroBtn.style.display = "none"; // Oculta Registro
    }

    /* ============================================================
       1. FILTRO DE BÚSQUEDA (index.html)
       ============================================================ */
    const inputBusqueda = document.getElementById("buscar-titulo");
    const tarjetasManga = document.querySelectorAll(".catalogo .card");

    if (inputBusqueda) {
        inputBusqueda.addEventListener("input", () => {
            const textoBuscado = inputBusqueda.value.toLowerCase().trim();
            tarjetasManga.forEach(tarjeta => {
                const titulo = tarjeta.querySelector("h3").textContent.toLowerCase();
                tarjeta.style.display = titulo.includes(textoBuscado) ? "flex" : "none";
            });
        });
    }

    /* ============================================================
       2. LÓGICA DE PESTAÑAS (manga.html)
       ============================================================ */
    const botones = document.querySelectorAll(".tabs button");
    const contenidos = document.querySelectorAll(".tab-content");

    if (botones.length > 0) {
        botones.forEach(btn => {
            btn.addEventListener("click", () => {
                botones.forEach(b => b.classList.remove("active"));
                contenidos.forEach(c => c.classList.remove("active"));
                btn.classList.add("active");
                
                const idTab = btn.dataset.tab;
                const targetContent = document.getElementById(idTab);
                if (targetContent) targetContent.classList.add("active");
            });
        });
    }

    /* ============================================================
       3. CARGA DE API (manga.html)
       ============================================================ */
    const params = new URLSearchParams(window.location.search);
    const idManga = params.get("id");
    
    // Solo cargamos si hay ID y estamos en la página de detalle
    if (idManga && document.getElementById("portada")) {
        cargarManga(idManga);
    }
});

/* ============================================================
   4. FUNCIÓN ASÍNCRONA PARA CARGAR DATOS
   ============================================================ */
async function cargarManga(id) {
    try {
        const res = await fetch(`http://localhost:8080/mangas/${id}`);
        if (!res.ok) throw new Error("Manga no encontrado");
        const manga = await res.json();

        // Rellenar cabecera y descripción
        document.getElementById("titulo").textContent = manga.titulo;
        document.getElementById("portada").src = manga.imagenUrl || 'https://via.placeholder.com/200x300';
        document.getElementById("descripcion-texto").textContent = manga.descripcion;
        
        // Cuadro de datos
        document.getElementById("dato-titulo").textContent = manga.titulo;
        document.getElementById("dato-estado").textContent = manga.estado;
        document.getElementById("dato-anio").textContent = manga.fechaPublicacion ? manga.fechaPublicacion.split("-")[0] : "-";

        // Cargar Autor (si existe autorId)
        if (manga.autorId) {
            const resAutor = await fetch(`http://localhost:8080/autores/${manga.autorId}`);
            const autor = await resAutor.json();
            document.getElementById("autor-bio").textContent = autor.autobiografia;
            document.getElementById("dato-autor").textContent = autor.nombre;
            document.getElementById("dato-nacionalidad").textContent = autor.nacionalidad;
        }

        // Cargar Capítulos
        const resCaps = await fetch(`http://localhost:8080/capitulos?mangaId=${id}`);
        const caps = await resCaps.json();
        const lista = document.getElementById("lista-capitulos");
        
        if (lista) {
            lista.innerHTML = "";
            const dataCaps = caps.content || caps;
            dataCaps.forEach(c => {
                const li = document.createElement("li");
                li.textContent = c.titulo;
                lista.appendChild(li);
            });
        }
    } catch (e) { 
        console.error("Error cargando datos:", e); 
    }
}