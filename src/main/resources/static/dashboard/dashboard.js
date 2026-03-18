// Manejo de secciones principales
function verSection(id) {
    document.querySelectorAll('.view').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Manejo de pestañas del formulario
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        
        // Quitar clases active
        document.querySelectorAll('.tab-link, .tab-pane').forEach(el => el.classList.remove('active'));
        
        // Añadir active al clickeado
        link.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});