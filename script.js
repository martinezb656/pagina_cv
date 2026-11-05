const exp_academica = [
    {
        "titulo": "GS Desarrollo de Aplicaciones Web",
        "periodo": "2025-27",
        "centro": "CPR Afundación A Coruña"
    }
];

const exp_profesional = [
    {
        "titulo": "Desarrollador Web (Proyecto)",
        "periodo": "2026",
        "centro": "Concept BMB"
    }
];

function renderizarDatos(datos, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    datos.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-experiencia');
        
        tarjeta.innerHTML = `<h3>${item.titulo}</h3><p>${item.centro} | Período: ${item.periodo}</p>`;
        contenedor.appendChild(tarjeta);
    });
}

renderizarDatos(exp_academica, 'lista-academica');
renderizarDatos(exp_profesional, 'lista-profesional');