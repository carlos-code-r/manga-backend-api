const API_URL = "http://localhost:8080/mangas";
let paginaActual = 0;
const TAMANO_PAGINA = 10;

document.addEventListener("DOMContentLoaded", () => {
    cargarMangas(paginaActual);
});

async function cargarMangas(pagina) {
    try {
        const respuesta = await fetch(`${API_URL}?page=${pagina}&size=${TAMANO_PAGINA}`);
        if (!respuesta.ok) throw new Error("Error de conexión");
        
        const data = await respuesta.json();
        const mangas = data.content;
        
        const tablaBody = document.getElementById("tabla-mangas-body");
        tablaBody.innerHTML = "";

        mangas.forEach(manga => {
            const claseEtiqueta = manga.estado === 'EN_PUBLICACION' ? 'emision' : 'finalizado';
            const textoEstado = manga.estado === 'EN_PUBLICACION' ? 'En Emisión' : 'Finalizado';
            
            tablaBody.innerHTML += `
                <tr>
                    <td><strong>${manga.titulo}</strong></td>
                    <td>ID: ${manga.autorId}</td>
                    <td class="columna-descripcion">${manga.descripcion}</td>
                    <td><span class="etiqueta ${claseEtiqueta}">${textoEstado}</span></td>
                    <td>${manga.fechaPublicacion}</td>
                    <td>-</td>
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
        cuadro.className = (i === paginaActual) ? "num-cuadro activo" : "num-cuadro";
        cuadro.onclick = () => {
            paginaActual = i;
            cargarMangas(paginaActual);
        };
        contenedor.appendChild(cuadro);
    }

    document.getElementById("btn-anterior").disabled = data.first;
    document.getElementById("btn-siguiente").disabled = data.last;
}

function paginaSiguiente() { paginaActual++; cargarMangas(paginaActual); }
function paginaAnterior() { if(paginaActual > 0) { paginaActual--; cargarMangas(paginaActual); } }

function verSection(id) {
    document.querySelectorAll('.view').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

async function eliminarManga(id) {
    if (confirm("¿Eliminar este manga?")) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        cargarMangas(paginaActual);
    }
}