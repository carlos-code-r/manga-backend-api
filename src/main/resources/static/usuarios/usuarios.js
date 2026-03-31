// COMPROBACION DE PERMISOS:
(function comprobarPermisos() {
    const rol = localStorage.getItem("rolUsuario");
    if (rol !== "ADMIN") {
        window.location.href = "../catalogo/index.html";
    }
})();
const API_URL = "http://localhost:8080/usuarios";
let paginaActual = 0;

document.addEventListener("DOMContentLoaded", () => {
    cargarUsuarios(paginaActual);
});

async function cargarUsuarios(pagina) {
    try {
        const respuesta = await fetch(`${API_URL}?page=${pagina}&size=10`);
        const data = await respuesta.json();

        document.getElementById("count-usuarios").innerText = data.totalElements;
        
        const tbody = document.getElementById("tabla-usuarios-body");
        tbody.innerHTML = "";

        data.content.forEach(u => {
            const claseRol = (u.rol === 'ADMIN') ? 'admin' : 'user';
            
            const fecha = new Date(u.fechaAlta).toLocaleDateString();

            // 4. Inyectamos el HTML usando las clases de tu CSS para el diseño
            tbody.innerHTML += `
                <tr>
                    <td><strong>${u.usuario}</strong></td>
                    <td>${u.email}</td>
                    <td><span class="fecha-resaltada">${fecha}</span></td>
                    <td><span class="badge-rol ${claseRol}">${u.rol}</span></td>
                    <td class="text-center">
                        <button class="btn-eliminar-pro" onclick="eliminarUsuario(${u.id})">Eliminar</button>
                    </td>
                </tr>
            `;
        });

        renderizarNumeros(data);
    } catch (error) {
        console.error("Error cargando usuarios:", error);
    }
}

function renderizarNumeros(data) {
    const contenedor = document.getElementById("paginas-numeros-user");
    contenedor.innerHTML = "";
    for (let i = 0; i < data.totalPages; i++) {
        const cuadro = document.createElement("span");
        cuadro.innerText = i + 1;
        cuadro.className = (i === paginaActual) ? "num-cuadro activo" : "num-cuadro";
        cuadro.onclick = () => {
            paginaActual = i;
            cargarUsuarios(paginaActual);
        };
        contenedor.appendChild(cuadro);
    }
    document.getElementById("btn-ant-user").disabled = data.first;
    document.getElementById("btn-sig-user").disabled = data.last;
}

function cambiarPagina(salto) {
    paginaActual += salto;
    cargarUsuarios(paginaActual);
}

async function eliminarUsuario(id) {
    if (confirm("¿Borrar este usuario de forma permanente?")) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        cargarUsuarios(paginaActual);
    }
}

function cerrarSesion() {
    localStorage.clear();
    // Como estás en /dashboard/ o /usuarios/, subimos un nivel para ir a /catalogo/
    window.location.href = "../catalogo/index.html";
}