/**
 * ARCHIVO ÚNICO: tabs.js
 * Gestiona el buscador (index.html), las pestañas y la API (manga.html)
 */

document.addEventListener("DOMContentLoaded", () => {

    /* ===================== 1. BUSCADOR EN TIEMPO REAL (index.html) ===================== */
    const inputBusqueda = document.getElementById("buscar-titulo");
    const tarjetasManga = document.querySelectorAll(".catalogo .card");

    if (inputBusqueda) {
        inputBusqueda.addEventListener("input", () => {
            const textoBuscado = inputBusqueda.value.toLowerCase().trim();

            tarjetasManga.forEach(tarjeta => {
                const titulo = tarjeta.querySelector("h3").textContent.toLowerCase();
                // Si el título incluye lo que escribes, se muestra, si no, se oculta
                if (titulo.includes(textoBuscado)) {
                    tarjeta.style.display = "flex";
                    tarjeta.style.opacity = "1";
                } else {
                    tarjeta.style.display = "none";
                    tarjeta.style.opacity = "0";
                }
            });
        });
    }

    /* ===================== 2. LÓGICA DE PESTAÑAS (manga.html) ===================== */
    const botones = document.querySelectorAll(".tabs button");
    const contenidos = document.querySelectorAll(".tab-content");

    if (botones.length > 0) {
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                // Resetear estados activos
                botones.forEach(b => b.classList.remove("active"));
                contenidos.forEach(c => c.classList.remove("active"));

                // Activar pestaña actual
                boton.classList.add("active");
                const tabId = boton.dataset.tab;
                document.getElementById(tabId)?.classList.add("active");
            });
        });
    }

    /* ===================== 3. CARGA DE DATOS API (manga.html) ===================== */
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
        cargarDetallesManga(id);
        cargarCapitulos(id);
    }
});

/** * Obtiene info del Manga y del Autor desde el Backend 
 */
function cargarDetallesManga(mangaId) {
    fetch(`http://localhost:8080/mangas/${mangaId}`)
        .then(res => res.json())
        .then(manga => {
            // Datos básicos del Manga
            document.getElementById("titulo").textContent = manga.titulo;
            document.getElementById("descripcion-texto").textContent = manga.descripcion;
            document.getElementById("dato-titulo").textContent = manga.titulo;
            document.getElementById("dato-estado").textContent = manga.estado || "-";
            document.getElementById("portada").src = manga.imagenUrl;
            
            if (manga.fechaPublicacion) {
                document.getElementById("dato-anio").textContent = manga.fechaPublicacion.split("-")[0];
            }

            // Fetch anidado para obtener el Autor
            return fetch(`http://localhost:8080/autores/${manga.autorId}`);
        })
        .then(res => res.json())
        .then(autor => {
            document.getElementById("dato-autor").textContent = autor.nombre || "-";
            document.getElementById("dato-nacionalidad").textContent = autor.nacionalidad || "-";
            document.getElementById("autor-bio").textContent = autor.autobiografia || "Sin información";
        })
        .catch(err => console.error("Error cargando detalles:", err));
}

/** * Obtiene la lista de capítulos del Manga 
 */
function cargarCapitulos(mangaId) {
    fetch(`http://localhost:8080/capitulos?mangaId=${mangaId}`)
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById("lista-capitulos");
            if (!lista) return;

            lista.innerHTML = "";
            const capitulos = data.content || [];

            if (capitulos.length > 0) {
                capitulos.forEach(cap => {
                    const li = document.createElement("li");
                    li.textContent = cap.titulo;
                    lista.appendChild(li);
                });
            } else {
                lista.innerHTML = "<li>No hay capítulos disponibles</li>";
            }
        })
        .catch(err => console.error("Error capítulos:", err));
}