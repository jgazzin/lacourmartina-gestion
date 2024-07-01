const proyectosPropios = [
    {
        numero: 'PL773/24',
        fecha: '19/06/2024',
        area: 'Seguridad - Justicia',
        tema: 'reiterancia delictiva',
        resumen: 'Reiterancia Delictiva. Incorpora artículos a la ley P nº 5020 -Código Procesal Penal'
    },
    {
        numero: 'PC772/24',
        fecha: '19/06/2024',
        area: 'Educación - Cultura - Soberanía',
        tema: 'nuestras banderas',
        resumen: 'Su enérgico repudio a la realización de cualquier acto de Promesa de Lealtad a una bandera distinta de la Bandera Nacional en las escuelas'
    },
    {
        numero: 'PC771/24',
        fecha: '19/06/2024',
        area: 'Educación - Cultura - Soberanía',
        tema: 'nuestras banderas',
        resumen: 'Al Poder Ejecutivo, Ministerio de Educación y Derechos Humanos, que prohíba la celebración de cualquier acto de promesa a banderas distintas de la Bandera Argentina'
    },
    {
        numero: 'PC758/24',
        fecha: '18/06/2024',
        area: 'Educación - Obras públicas',
        tema: 'escuelas públicas',
        resumen: 'Al Poder Ejecutivo y al Ministerio de Educación y Derechos Humanos, que realicen con urgencia las tareas de mantenimiento necesarias para poner en funcionamiento las calderas de la Escuela Secundaria Río Negro -ESRN- nº 46 de San Carlos de Bariloche; y al Ministerio de Obras y Servicios Públicos, que inicie las obras de ampliación y refacción de los sanitarios de ese establecimiento'
    },
    {
        numero: 'PC757/24',
        fecha: '18/06/2024',
        area: 'Seguridad',
        tema: 'fin a sumarios policías',
        resumen: 'Al Poder Ejecutivo, al Ministerio de Seguridad y Justicia y a la Policía de Río Negro, que concluya los sumarios administrativos iniciados a efectivos policiales en noviembre y diciembre de 2023'
    },
    {
        numero: 'PI753/24',
        fecha: '18/06/2024',
        area: 'Educación - Obras públicas',
        tema: 'escuelas públicas',
        resumen: 'Al Poder Ejecutivo, Ministerio de Educación y Derechos Humanos, referido a la reparación de la caldera de la Escuela Secundaria Río Negro -ESRN- nº 46 de la ciudad de San Carlos de Bariloche'
    },
    {
        numero: 'PI752/24',
        fecha: '18/06/2024',
        area: 'Educación - Obras públicas',
        tema: 'escuelas públicas',
        resumen: 'Al Poder Ejecutivo, Ministerio de Obras y Servicios Públicos, referido a la licitación para la refacción y ampliación de los sanitarios de la Escuela Secundaria Río Negro -ESRN- nº 46 de la ciudad de San Carlos de Bariloche'
    },
    {
        numero: 'PI751/24',
        fecha: '18/06/2024',
        area: 'Economía - Finanzas',
        tema: 'gasto público',
        resumen: 'Al Poder Ejecutivo, referido a los bienes muebles de la provincia, compras efectuadas durante el período 2020-2024 y contrataciones realizadas, entre otros'
    },
    {
        numero: 'PL695/24',
        fecha: '06/06/2024',
        area: 'Cultura - Educación - Seguridad Interior',
        tema: 'nuestras banderas',
        resumen: '"Nuestras Banderas". Establece que las únicas y exclusivas banderas que están autorizadas a ser exhibidas y flamear en todos los edificios públicos de la Provincia de Río Negro son las banderas nacional y provincial, y la bandera municipal en caso de existir'
    },
    {
        numero: 'PI451/24',
        fecha: '23/04/2024',
        area: 'Medio Ambiente',
        tema: 'contaminación lago',
        resumen: 'Al Poder Ejecutivo, Secretaría de Energía y Ambiente, Departamento Provincial de Aguas -DPA-, referido a la periodicidad con la que monitorean la calidad del agua del lago Nahuel Huapi y resultados físico-químicos y bacteriológicos del espejo de agua, avance de Plan Director Cloacal, ruidos y olores molestos, astreintes judiciales'
    },
    {
        numero: 'PI449/24',
        fecha: '23/04/2024',
        area: 'Educación - Obras públicas',
        tema: 'escuela oeste bariloche',
        resumen: 'Al Poder Ejecutivo, Ministerio de Educación y Derechos Humanos, referido a los fondos de la partida asignada en el Presupuesto 2023 destinada a la creación de una Escuela Secundaria Río Negro -ESRN- en el predio de la Escuela Primaria nº 48 de la ciudad de San Carlos de Bariloche'
    },
    {
        numero: 'PL447/24',
        fecha: '23/04/2024',
        area: 'Salud',
        tema: 'no más cautivos IPROSS',
        resumen: 'Libre elección de Obras Sociales para empleados públicos. Modifica la ley K nº 2753 -Instituto Provincial del Seguro de Salud -IProSS'
    },
    {
        numero: 'PC446/24',
        fecha: '23/04/2024',
        area: 'Economía - Agro',
        tema: 'protección agro',
        resumen: 'Al Poder Ejecutivo, que vería con agrado se dirija a los Poderes Ejecutivo y Legislativo Nacional a fin de solicitarles la adhesión de la República Argentina al Convenio Internacional para la Protección de las Obtenciones Vegetales -UPOV- Acta 1991'
    },
    {
        numero: 'PL357/24',
        fecha: '05/04/2024',
        area: 'Información pública',
        tema: 'gasto público',
        resumen: 'Incorpora el artículo 99 "Título IX-Acceso Público Permanente" y modifica el inciso c- del artículo 85 de la ley H nº 3186 de Administración Financiera y Control Interno del Sector Público Provincial'
    },
    {
        numero: 'PC356/24',
        fecha: '05/04/2024',
        area: 'Educación',
        tema: 'escuela oeste bariloche',
        resumen: 'Al Ministerio de Educación y Derechos Humanos, la necesidad de asignar un Código Único Escolar -CUE- para la escuela secundaria cuya construcción está prevista en el km. 20 de la Avenida Ezequiel Bustillo de la ciudad de San Carlos de Bariloche'
    },
    {
        numero: 'PC244/24',
        fecha: '12/03/2024',
        area: 'Seguridad',
        tema: 'cuidar a Roca',
        resumen: 'Al Ministerio de Seguridad y Justicia, la necesidad de realizar las gestiones necesarias con la Municipalidad de la ciudad de San Carlos de Bariloche y su Centro de Monitoreo, para la protección del monumento de Julio Argentino Roca ubicado en el Centro Cívico de esa ciudad'
    },
    {
        numero: 'PD230/24',
        fecha: '08/03/2024',
        area: 'Seguridad',
        tema: 'cuidar a roca',
        resumen: 'Su enérgico repudio a los hechos de vandalismo ocurridos el 7 de marzo de 2024 sobre el monumento de Julio Argentino Roca en el Centro Cívico de la ciudad de San Carlos de Bariloche'
    },
    {
        numero: 'PL211/24',
        fecha: '06/03/2024',
        area: 'Justicia',
        tema: 'acceso a información',
        resumen: 'Garantiza a los ciudadanos que acudan a las Comisarías de la Policía de la Provincia de Río Negro, el debido acceso a la información atinente a sus derechos y garantías'
    },
    {
        numero: 'PL196/24',
        fecha: '06/03/2024',
        area: 'Medio Ambiente',
        tema: 'reducción de plásticos',
        resumen: 'Ley de Reducción de Plásticos de único uso'
    },
    {
        numero: 'PL115/24',
        fecha: '19/02/2024',
        area: 'Economía - Defensa del Consumidor',
        tema: 'responsabilidad fiscal',
        resumen: 'Transparencia Fiscal al Consumidor. Establece la obligatoriedad de indicar dentro de las facturas o tickets de compra que recibe el consumidor, los impuestos provinciales incluidos en ellos. En el caso excepcional de imposibilidad de desglose, se indicará el porcentaje aproximado de incidencia sobre el precio final'
    },
    {
        numero: 'PC72/24',
        fecha: '07/02/2024',
        area: 'Relaciones Internacionales',
        tema: 'paso cardenal samoré',
        resumen: 'Extensión horaria del Paso Cardenal Samoré en verano'
    }
];

document.addEventListener('DOMContentLoaded', ()=>{
    imprimirProyectos(proyectosPropios)
})

let temaProyectos = document.querySelector('#temas');
temaProyectos.addEventListener('change', ()=>{
    if(temaProyectos.value === '') {
        imprimirProyectos(proyectosPropios)
        console.log(proyectosPropios);

    } else{
        const proyectosFiltrados = proyectosPropios.filter(proy => proy.tema === temaProyectos.value)
        console.log(proyectosFiltrados);
        imprimirProyectos(proyectosFiltrados)

    }
})

// FUNCIONES
function imprimirProyectos(listado) {
    const contenedorProyectos = document.querySelector('.proyectos_propios')
    contenedorProyectos.innerHTML = '';
    listado.forEach(proyecto =>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML= `
        <div class="card_left">
            <a href="${proyecto.enlace}">
            <p class="numero">${proyecto.numero}</p></a>
            <p class="fecha">${proyecto.fecha}</p>
        </div>
        <div class="card_centro">
            <p class="resumen">${proyecto.resumen}</p>
        </div>
        <div class="card_right">
            <p class="area">${proyecto.area}</p>
            <p class="tag">${proyecto.tema}</p>
        </div>
        `;
        contenedorProyectos.appendChild(card)

    })
    const countProyectos = listado.length;
    document.querySelector('#countProyectos').textContent = countProyectos;

}

// <a href="${proyecto.enlace}" class="btn editar">Ver</a>