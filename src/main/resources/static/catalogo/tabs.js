document.addEventListener("DOMContentLoaded", () => {
    /* ============================================================
       0. LÓGICA DE SESIÓN (ACTUALIZADA CON ROLES)
       ============================================================ */
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    const rolUsuario = localStorage.getItem("rolUsuario"); // <--- CAPTURAMOS EL ROL
    
    const panelBtn = document.getElementById("btn-panel-creador");
    const loginBtn = document.getElementById("btn-login");
    const registroBtn = document.getElementById("btn-registro");
    const authContainer = document.getElementById("auth-container");

    if (nombreUsuario) {
        // 1. Lógica del Panel (SOLO SI ES ADMIN)
        if (panelBtn) {
            if (rolUsuario === "ADMIN") {
                panelBtn.style.display = "flex"; 
                panelBtn.innerText = `⚙️ Panel de ${nombreUsuario}`;
            } else {
                // Si es un usuario normal, nos aseguramos de que esté oculto
                panelBtn.style.display = "none";
            }
        }
        
        // 2. Ocultamos Iniciar Sesión y Crear Cuenta
        if (loginBtn) loginBtn.style.display = "none";       
        if (registroBtn) registroBtn.style.display = "none"; 

        // 3. BOTÓN DE CERRAR SESIÓN (Tu código original sin cambios)
        if (authContainer && !document.getElementById("btn-logout-manual")) {
            const btnSalir = document.createElement("a");
            btnSalir.id = "btn-logout-manual";
            btnSalir.innerHTML = `<span>🚪</span> Cerrar Sesión`;
            btnSalir.className = "btn-auth btn-logout-rojo"; 
            btnSalir.href = "#";

            btnSalir.onclick = (e) => {
                e.preventDefault();
                localStorage.clear(); 
                window.location.href = "index.html"; 
            };
            
            authContainer.appendChild(btnSalir);
        }
    } else {
        // Si no hay sesión, el panel debe estar oculto siempre
        if (panelBtn) panelBtn.style.display = "none";
    }
    /* ============================================================
       2. LÓGICA DE PESTAÑAS (TABS)
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
                if (targetContent) {
                    targetContent.classList.add("active");
                }
            });
        });
    }

    /* ============================================================
       3. CARGA DE DATOS DESDE LA API
       ============================================================ */
    const params = new URLSearchParams(window.location.search);
    const idManga = params.get("id");
    
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

        if(document.getElementById("titulo")) document.getElementById("titulo").textContent = manga.titulo;
        if(document.getElementById("portada")) document.getElementById("portada").src = manga.imagenUrl || 'https://via.placeholder.com/200x300';
        if(document.getElementById("descripcion-texto")) document.getElementById("descripcion-texto").textContent = manga.descripcion;
        
        if(document.getElementById("dato-titulo")) document.getElementById("dato-titulo").textContent = manga.titulo;
        if(document.getElementById("dato-estado")) document.getElementById("dato-estado").textContent = manga.estado;
        if(document.getElementById("dato-anio")) document.getElementById("dato-anio").textContent = manga.fechaPublicacion ? manga.fechaPublicacion.split("-")[0] : "-";

        if (manga.autorId) {
            const resAutor = await fetch(`http://localhost:8080/autores/${manga.autorId}`);
            if (resAutor.ok) {
                const autor = await resAutor.json();
                if(document.getElementById("autor-bio")) document.getElementById("autor-bio").textContent = autor.autobiografia;
                if(document.getElementById("dato-autor")) document.getElementById("dato-autor").textContent = autor.nombre;
                if(document.getElementById("dato-nacionalidad")) document.getElementById("dato-nacionalidad").textContent = autor.nacionalidad;
            }
        }

        const resCaps = await fetch(`http://localhost:8080/capitulos?mangaId=${id}`);
        if (resCaps.ok) {
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
        }
    } catch (e) { 
        console.error("Error cargando datos del manga:", e); 
    }
}