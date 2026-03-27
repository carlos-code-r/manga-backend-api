if (respuesta.ok) {
    // Primero mostramos el aviso que ya tienes en el HTML
    const aviso = document.getElementById("aviso-exito");
    aviso.style.display = "block";

    // Después de 1.5 segundos, saltamos al index del catálogo
    setTimeout(() => {
        window.location.href = "../catalogo/index.html";
    }, 1500);
}