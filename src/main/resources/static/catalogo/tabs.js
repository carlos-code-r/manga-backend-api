document.addEventListener("DOMContentLoaded", () => {
    
    /* ============================================================
       1. FILTRO DE BÚSQUEDA (Para index.html)
       ============================================================ */
    const inputBusqueda = document.getElementById("buscar-titulo");
    const tarjetasManga = document.querySelectorAll(".catalogo .card");

    // Solo se ejecuta si estamos en la página que tiene el buscador
    if (inputBusqueda) {
        inputBusqueda.addEventListener("input", () => {
            const textoBuscado = inputBusqueda.value.toLowerCase().trim();

            tarjetasManga.forEach(tarjeta => {
                const titulo = tarjeta.querySelector("h3").textContent.toLowerCase();
                
                // Filtro por letras: si el título contiene lo que escribes, se queda
                if (titulo.includes(textoBuscado)) {
                    tarjeta.style.display = "flex";
                } else {
                    tarjeta.style.display = "none";
                }
            });
        });
    }

    /* ============================================================
       2. LÓGICA DE PESTAÑAS (Para manga.html)
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
       3. CARGA DE API (Para manga.html)
       ============================================================ */
    const id = new URLSearchParams(window.location.search).get("id");
    if (id && document.getElementById("portada")) {
        cargarManga(id);
    }
});

async function cargarManga(id) {
    try {
        const res = await fetch(`http://localhost:8080/mangas/${id}`);
        const manga = await res.json();

        // Rellenar cabecera y descripción
        document.getElementById("titulo").textContent = manga.titulo;
        document.getElementById("portada").src = manga.imagenUrl;
        document.getElementById("descripcion-texto").textContent = manga.descripcion;
        
        // Cuadro de datos
        document.getElementById("dato-titulo").textContent = manga.titulo;
        document.getElementById("dato-estado").textContent = manga.estado;
        document.getElementById("dato-anio").textContent = manga.fechaPublicacion ? manga.fechaPublicacion.split("-")[0] : "-";

        // Autor
        const resAutor = await fetch(`http://localhost:8080/autores/${manga.autorId}`);
        const autor = await resAutor.json();
        document.getElementById("autor-bio").textContent = autor.autobiografia;
        document.getElementById("dato-autor").textContent = autor.nombre;
        document.getElementById("dato-nacionalidad").textContent = autor.nacionalidad;

        // Capítulos
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