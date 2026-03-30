const API_AUTORES = "http://localhost:8080/autores";
const API_MANGAS = "http://localhost:8080/mangas";

const formulario = document.getElementById("formulario-manga");
const aviso = document.getElementById("aviso-exito");

const params = new URLSearchParams(window.location.search);
const mangaId = params.get("id");
let autorIdEdicion = null;

if (mangaId) {
  document.querySelector(".seccion-registro h1").textContent = "Editar Manga";
  document.querySelector(".boton-enviar").textContent = "GUARDAR CAMBIOS";
  cargarDatosEdicion(mangaId);
}

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payloadAutor = {
    nombre: document.getElementById("autor-nombre").value.trim(),
    nacionalidad: document.getElementById("nacionalidad").value.trim(),
    autobiografia: document.getElementById("biografia").value.trim(),
  };

  const payloadMangaBase = {
    titulo: document.getElementById("titulo").value.trim(),
    descripcion: document.getElementById("descripcion").value.trim(),
    estado: document.getElementById("estado").value,
    fechaPublicacion: document.getElementById("fecha-publicacion").value || null,
    imagenUrl: document.getElementById("portada").value.trim(),
    totalCapitulos: Number(document.getElementById("total-capitulos").value || 0),
  };

  if (payloadMangaBase.descripcion.length < 10) {
    alert("La descripción debe tener al menos 10 caracteres.");
    return;
  }

  try {
    if (mangaId) {
      await actualizarMangaCompleto(payloadAutor, payloadMangaBase);
    } else {
      await crearMangaCompleto(payloadAutor, payloadMangaBase);
    }

    aviso.style.display = "block";
    setTimeout(() => {
      window.location.href = "../dashboard/dashboard.html";
    }, 1200);
  } catch (error) {
    console.error(error);
    alert("No se pudo guardar la información. Revisa backend y datos.");
  }
});

async function crearMangaCompleto(payloadAutor, payloadMangaBase) {
  const respuestaAutor = await fetch(API_AUTORES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloadAutor),
  });
  if (!respuestaAutor.ok) throw new Error("Error creando autor");
  const autorCreado = await respuestaAutor.json();

  const payloadManga = {
    ...payloadMangaBase,
    autorId: autorCreado.id,
  };

  const respuestaManga = await fetch(API_MANGAS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloadManga),
  });
  if (!respuestaManga.ok) throw new Error("Error creando manga");
}

async function actualizarMangaCompleto(payloadAutor, payloadMangaBase) {
  if (!autorIdEdicion) throw new Error("No se encontró autor para edición");

  const respuestaAutor = await fetch(`${API_AUTORES}/${autorIdEdicion}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloadAutor),
  });
  if (!respuestaAutor.ok) throw new Error("Error actualizando autor");

  const payloadManga = {
    ...payloadMangaBase,
    autorId: autorIdEdicion,
  };

  const respuestaManga = await fetch(`${API_MANGAS}/${mangaId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloadManga),
  });
  if (!respuestaManga.ok) throw new Error("Error actualizando manga");
}

async function cargarDatosEdicion(id) {
  try {
    const respuestaManga = await fetch(`${API_MANGAS}/${id}`);
    if (!respuestaManga.ok) throw new Error("No se pudo cargar el manga");
    const manga = await respuestaManga.json();

    autorIdEdicion = manga.autorId;

    document.getElementById("titulo").value = manga.titulo || "";
    document.getElementById("descripcion").value = manga.descripcion || "";
    document.getElementById("portada").value = manga.imagenUrl || "";
    document.getElementById("estado").value = manga.estado || "EN_PUBLICACION";
    document.getElementById("total-capitulos").value = manga.totalCapitulos || 0;
    document.getElementById("fecha-publicacion").value = manga.fechaPublicacion || "";

    if (autorIdEdicion) {
      const respuestaAutor = await fetch(`${API_AUTORES}/${autorIdEdicion}`);
      if (respuestaAutor.ok) {
        const autor = await respuestaAutor.json();
        document.getElementById("autor-nombre").value = autor.nombre || "";
        document.getElementById("nacionalidad").value = autor.nacionalidad || "";
        document.getElementById("biografia").value = autor.autobiografia || "";
      }
    }
  } catch (error) {
    console.error(error);
    alert("No se pudieron cargar los datos para editar.");
  }
}