/* ---------------- TABS ---------------- */
alert("JS CARGADO");
const botones = document.querySelectorAll(".tabs button");
const contenidos = document.querySelectorAll(".tab-content");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        botones.forEach(b => b.classList.remove("active"));
        contenidos.forEach(c => c.classList.remove("active"));

        boton.classList.add("active");

        const tab = boton.dataset.tab;
        document.getElementById(tab).classList.add("active");
    });
});


/* ---------------- OBTENER ID ---------------- */

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("ID:", id);


/* ---------------- SI NO HAY ID, NO HACE NADA ---------------- */

if (!id) {
    console.error("No hay ID en la URL");
} else {

    /* ---------------- FETCH MANGA ---------------- */

    fetch(`http://localhost:8080/mangas/${id}`)
        .then(res => res.json())
        .then(manga => {

            document.getElementById("titulo").textContent = manga.titulo;
            document.getElementById("descripcion-texto").textContent = manga.descripcion;

            document.getElementById("dato-titulo").textContent = manga.titulo;
            document.getElementById("dato-autor").textContent = manga.autorId || "Desconocido";
            document.getElementById("dato-nacionalidad").textContent = "N/A";
            document.getElementById("dato-anio").textContent = manga.fechaPublicacion || "N/A";
            document.getElementById("dato-estado").textContent = manga.estado || "N/A";

            document.getElementById("portada").src = manga.imagenUrl;

        })
        .catch(err => console.error("Error manga:", err));


    /* ---------------- FETCH CAPITULOS ---------------- */

    fetch(`http://localhost:8080/capitulos?mangaId=${id}`)
        .then(res => res.json())
        .then(data => {

            const lista = document.getElementById("lista-capitulos");
            lista.innerHTML = "";

            const capitulos = data.content;

            if (capitulos.length > 0) {
                capitulos.forEach(cap => {
                    const li = document.createElement("li");
                    li.textContent = cap.titulo;
                    lista.appendChild(li);
                });
            } else {
                const li = document.createElement("li");
                li.textContent = "No hay capítulos disponibles";
                lista.appendChild(li);
            }

        })
        .catch(err => console.error("Error capítulos:", err));
}