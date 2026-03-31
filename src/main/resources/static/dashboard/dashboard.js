// COMPROBACION DE PERMISOS:
(function comprobarPermisos() {
    const rol = localStorage.getItem("rolUsuario");
    if (rol !== "ADMIN") {
        window.location.href = "../catalogo/index.html";
    }
})();

const API_URL = "http://localhost:8080/mangas";
let paginaActual = 0;
const TAMANO_PAGINA = 10;

document.addEventListener("DOMContentLoaded", () => {
  cargarMangas(paginaActual);
});

async function cargarMangas(pagina) {
  try {
    const respuesta = await fetch(
      `${API_URL}?page=${pagina}&size=${TAMANO_PAGINA}`,
    );
    if (!respuesta.ok) throw new Error("Error de conexión");

    const data = await respuesta.json();
    console.log("Datos que llegan del Back:", data.content);
    const mangas = data.content || [];

    if (data.totalPages > 0 && pagina >= data.totalPages) {
      paginaActual = data.totalPages - 1;
      cargarMangas(paginaActual);
      return;
    }

    const tablaBody = document.getElementById("tabla-mangas-body");
    tablaBody.innerHTML = "";

    mangas.forEach((manga) => {
      const claseEtiqueta =
        manga.estado === "EN_PUBLICACION" ? "emision" : "finalizado";
      const textoEstado =
        manga.estado === "EN_PUBLICACION" ? "En publicación" : "Finalizado";

      tablaBody.innerHTML += `
    <tr>
        <td><strong>${manga.titulo}</strong></td>
        <td>${manga.autorNombre || "-"}</td>
        <td class="columna-descripcion">${manga.descripcion}</td>
        <td><span class="etiqueta ${claseEtiqueta}">${textoEstado}</span></td>
        <td>${formatearFecha(manga.fechaPublicacion)}</td>
        
        <td>${manga.totalCapitulos || 0}</td> 
        
<td class="celda-acciones">
    <button class="boton-editar" onclick="editarManga(${manga.id})">Editar</button>
    <button class="boton-eliminar" onclick="eliminarManga(${manga.id})">Eliminar</button>
</td>
    </tr>
`;
    });

    renderizarNumeros(data);
  } catch (error) {
    console.error("Error al cargar:", error);
  }
}

function renderizarNumeros(data) {
  const contenedor = document.getElementById("paginas-numeros");
  contenedor.innerHTML = "";

  for (let i = 0; i < data.totalPages; i++) {
    const cuadro = document.createElement("span");
    cuadro.innerText = i + 1;
    cuadro.className = i === paginaActual ? "num-cuadro activo" : "num-cuadro";
    cuadro.onclick = () => {
      paginaActual = i;
      cargarMangas(paginaActual);
    };
    contenedor.appendChild(cuadro);
  }

  if (data.totalPages === 0) {
    const cuadro = document.createElement("span");
    cuadro.innerText = "1";
    cuadro.className = "num-cuadro activo";
    contenedor.appendChild(cuadro);
  }

  document.getElementById("btn-anterior").disabled = data.first || data.totalPages === 0;
  document.getElementById("btn-siguiente").disabled = data.last || data.totalPages === 0;
}

function paginaSiguiente() {
  const botonSiguiente = document.getElementById("btn-siguiente");
  if (botonSiguiente.disabled) return;
  paginaActual++;
  cargarMangas(paginaActual);
}
function paginaAnterior() {
  const botonAnterior = document.getElementById("btn-anterior");
  if (!botonAnterior.disabled && paginaActual > 0) {
    paginaActual--;
    cargarMangas(paginaActual);
  }
}

function verSection(id) {
  document.querySelectorAll(".view").forEach((s) => (s.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

async function eliminarManga(id) {
  if (confirm("¿Eliminar este manga?")) {
    const resp = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!resp.ok) {
      alert("No se pudo eliminar el manga.");
      return;
    }
    cargarMangas(paginaActual);
  }
}

function editarManga(id) {
  window.location.href = "../registro/registro.html?id=" + id;
}

function formatearFecha(fecha) {
  if (!fecha) return "-";
  return new Date(fecha).toLocaleDateString("es-ES");
}

function activarMenu(elemento) {
    document.querySelectorAll('.menu-navegacion a').forEach(a => a.classList.remove('activo'));
    
    elemento.classList.add('activo');
}

function cerrarSesion() {
    localStorage.clear();
    // Como estás en /dashboard/ o /usuarios/, subimos un nivel para ir a /catalogo/
    window.location.href = "../catalogo/index.html";
}