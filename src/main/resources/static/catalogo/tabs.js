/* ===================== TABS ===================== */

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



const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("ID:", id);



if (!id) {
    console.error("No hay ID en la URL");
} else {

    /* =====================  MANGA ===================== */

    fetch(`http://localhost:8080/mangas/${id}`)
        .then(res => res.json())
        .then(manga => {

            console.log("MANGA:", manga);

            // 🔹 DATOS PRINCIPALES
            document.getElementById("titulo").textContent = manga.titulo;
            document.getElementById("descripcion-texto").textContent = manga.descripcion;

            document.getElementById("dato-titulo").textContent = manga.titulo;
            document.getElementById("dato-estado").textContent = manga.estado || "-";

            if (manga.fechaPublicacion) {
                document.getElementById("dato-anio").textContent =
                    manga.fechaPublicacion.split("-")[0];
            } else {
                document.getElementById("dato-anio").textContent = "-";
            }

            document.getElementById("portada").src = manga.imagenUrl;


            /* =====================  AUTOR ===================== */

            fetch(`http://localhost:8080/autores/${manga.autorId}`)
                .then(res => res.json())
                .then(autor => {

                    console.log("AUTOR:", autor);

                    document.getElementById("dato-autor").textContent = autor.nombre || "-";
                    document.getElementById("dato-nacionalidad").textContent = autor.nacionalidad || "-";

                    document.getElementById("autor-bio").textContent =
                        autor.autobiografia || "Sin información del autor";

                })
                .catch(err => console.error("Error autor:", err));

        })
        .catch(err => console.error("Error manga:", err));


    /* =====================  CAPITULOS ===================== */

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