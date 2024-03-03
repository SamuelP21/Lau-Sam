const encabezados = document.querySelectorAll('.encabezado');
const enlaces = document.querySelectorAll('.sidepanelD a');

const observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const id = '#' + entrada.target.id;
            //cambiar la barra de direcciones con history
            history.pushState({}, '', id);

            //acceder a los enlaces
            enlaces.forEach(enlace => {

                //aliminamos la clase activo para que se borre el bg
                enlace.classList.remove('activo');

                //colocamos la clase activo si en los enlaces
                const href = enlace.attributes.href.nodeValue;
                if (href === id) {
                    enlace.classList.add('activo');
                }
            });
        }
    });
} ,{
    //threshold: 1,
    rootMargin: '0px 0px -87% 0px',
} );

encabezados.forEach(encabezado => {
    observador.observe(encabezado);
});