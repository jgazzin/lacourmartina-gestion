const hitos = [
    'Rechazo absoluto a fraude electoral y auto-proclamación de Maduro como Presidente de Venezuela.',
    'Votamos de forma afirmativa todos sus términos al Régimen de Incentivo para Grandes Inversiones -RIGI-, creado por la ley Bases.',
    'Comunicación al Ministerio de Educación para solicitar se prohíba la realización de promesas de lealtad a banderas diferentes de la argentina',
    'Solicitamos establecer a la educación obligatoria como servicio estratégico esencial',
    'Ley "Nuestras Banderas" para que sólo se exhiban las banderas oficiales (nacional, provincial y municipal) en los edificios públicos provinciales',
    'Ley de Reiterancia para restringir la libertad en caso de peligrosidad procesal',
    'Solicitud de Información sobre estadísticas de ludopatía digital en niños y adolescentes',
    'Solicitamos establecer vacantes escolares en secundario por mérito para abanderados y escoltas',
    'Solicitamos arancelar la atención y servicios para extranjeros que no residan de manera permanente',
    'Solicitud de Información sobre Terminal de Ómnibus de San Carlos de Bariloche',
    'Ley de Transparencia  Fiscal para informar a los consumidores los impuestos provinciales y tasas que se pagan en los productos y servicios que adquieren',
    'Ley de Libre elección de Obra Social para los empleados públicos rionegrinos',
    'Solicitud al Ministerio de Seguridad para que concluya con los sumarios policiales que tienen a alrededor de 800 efectivos en situación indefinida',
    'Derogación de la Emergencia Territorial: solicitamos al PEN derogar el decreto 805/2021 que extendió la vigencia de la Ley 26.160',
    'Solicitud de Información por programas preventivos de la SENAF (Secretaría de Niñez, Adolescencia y Familia)',
    'Volvimos a presentar el proyecto de "Ficha Limpia" tanto para cargos electivos como partidarios'

];

document.addEventListener('DOMContentLoaded', imprimirHitos)
const contenedorHitos = document.querySelector('.hitos')
let slider = document.querySelector('.ultimos_hitos');

function imprimirHitos() {
    let index = 0
    setInterval(() => {
       
        const div = document.createElement('div')
        div.classList.add('item')
        div.setAttribute('id', index)
        div.innerHTML = `
        <p><i>Últimas noticias:</i></p>
        <h3>${hitos[index]}</h3>
        `;
        slider.appendChild(div) 
        index++
        if(index === 3){
            index =0
        }
        setTimeout(() => {
            div.classList.add('sacar') 
            setTimeout(() => {
                div.remove()
            }, 1500);
        }, 3500);

    }, 5000);


    let i = 3;
    while (i < 10 ) {
        const item = document.createElement('DIV')
        item.classList.add('item')
        item.innerHTML =`
            <i class="fa-solid fa-flag fa-lg"></i>
            <p>${hitos[i]}</p>
        `;

        contenedorHitos.appendChild(item)
        i++
    }
    const mostrarMas = document.createElement('p')
    mostrarMas.textContent = 'Mostrar más'
    mostrarMas.classList.add('ancor')
    contenedorHitos.appendChild(mostrarMas)

    mostrarMas.addEventListener('click', ()=>{
        mostrarMas.remove()
        masHitos()
    })

}

function masHitos() {
    let i= 10
    while (i<hitos.length){
        const item = document.createElement('DIV')
        item.classList.add('item')
        item.innerHTML =`
            <i class="fa-solid fa-flag fa-lg"></i>
            <p>${hitos[i]}</p>
        `;

        contenedorHitos.appendChild(item)
        i++
    }
    const mostrarMenos = document.createElement('p')
    mostrarMenos.textContent = 'Mostrar menos'
    mostrarMenos.classList.add('ancor')
    contenedorHitos.appendChild(mostrarMenos)

    mostrarMenos.addEventListener('click', ()=>{
        mostrarMenos.remove()
        menosHitos()
    })
}

function menosHitos(){
    let i = hitos.length

    while( i > 10){
        contenedorHitos.lastChild.remove()
        i--
    }

    const mostrarMas = document.createElement('p')
    mostrarMas.textContent = 'Mostrar más'
    mostrarMas.classList.add('ancor')
    contenedorHitos.appendChild(mostrarMas)
    contenedorHitos.scrollIntoView({ behavior: 'smooth' });

    mostrarMas.addEventListener('click', ()=>{
        mostrarMas.remove()
        masHitos()
    })
}


function slides(sliderInd) {

    let contador = 1;
    let tamanio = sliderInd.clientHeight;

    slider.style.transform = 'translateY(' + (- tamanio * contador) +'px)';
    slider.style.transition = 'transform 1s';
    contador++;
    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(() => {
            slider.style.transform = 'translateY(0px)';
            slider.style.transition = 'transform 0s';
        }, 2000);
    }
}