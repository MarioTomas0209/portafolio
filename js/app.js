const cajaProyecto = document.querySelector('#caja-proyecto');

document.addEventListener('DOMContentLoaded', () => {

    mostrarProyecto(proyectos);
    
});

function mostrarProyecto(proyectos){

    let datos = '';

    proyectos.forEach(proyecto =>{
        console.log(proyecto)
        const {src, nombre, href, alt} = proyecto;

        datos += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="proyecto rounded-3 border border-1">
                <img src="${src}" alt="${alt}">
                <div class="overlay">
                    <p>${nombre}</p>
                    <div class="iconos-contenedor">
                        <a href="${href}" target="_blank" rel="noopener noreferrer"><i class="bi bi-laptop"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `;

        cajaProyecto.innerHTML  = datos;
    })
}