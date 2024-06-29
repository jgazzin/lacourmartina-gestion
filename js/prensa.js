const notas = [
    {
        fecha: '6/27/2024',
        medio: 'Cadena 3 Rosario',
        titulo: '',
        enlace: ''
    },
    {
        fecha: '6/26/2024',
        medio: 'FM 88.3 Frecuencia Urbana Roca',
        titulo: '',
        enlace: ''
    },
    {
        fecha: '6/25/2024',
        medio: 'Infobae',
        titulo: 'Otra polémica en Neuquén: izaron la bandera mapuche en la Universidad Nacional del Comahue',
        enlace: 'https://www.infobae.com/politica/2024/06/25/otra-polemica-en-neuquen-izaron-la-bandera-mapuche-en-la-universidad-nacional-del-comahue/'
    },
    {
        fecha: '6/25/2024',
        medio: 'Radios Seis BRC',
        titulo: '',
        enlace: ''
    },
    {
        fecha: '6/25/2024',
        medio: 'FM Del Lago Esquel',
        titulo: 'Impulsan dos  proyectos de ley para restringir la ceremonia de la promesa de la bandera mapuche y el izamiento de toda bandera que no fuera la celeste y blanca',
        enlace: 'https://fmdellagoesquel.com.ar/impulsan-dos-proyectos-de-ley-para-restringir-la-ceremonia-de-la-promesa-de-la-bandera-mapuche-y-el-izamiento-de-toda-bandera-que-no-fuera-la-celeste-y-blanca/'
    },
    {
        fecha: '6/25/2024',
        medio: 'La Tecla Patagonia',
        titulo: 'Interna feroz en el PRO: el oficialismo responde a los rupturistas y los trata de ñoquis',
        enlace: 'https://www.lateclapatagonia.com.ar/85364-interna-feroz-en-el-pro-el-oficialismo-responde-a-los-rupturistas-y-los-trata-de-oquis '
    },
    {
        fecha: '6/25/2024',
        medio: 'Canal 7 Jacobacci',
        titulo: 'Dura respuesta del PRO a Ibarrolaza, McKidd y Domínguez: “No van a trabajar a las comisiones, no leen los proyectos”',
        enlace: 'https://canal7jacobacci.com.ar/dura-respuesta-del-pro-a-ibarrolaza-mckidd-y-dominguez-no-van-a-trabajar-a-las-comisiones-no-leen-los-proyectos/ '
    },
    {
        fecha: '6/24/2024',
        medio: 'Diario La Palabra',
        titulo: 'Polémica en torno a la jura a la bandera mapuche: desde el PRO piden prohibir el acto',
        enlace: 'https://www.lateclapatagonia.com.ar/85342-legisladora-del-pro-en-contra-de-la-jura-a-la-bandera-mapuche '
    },
    {
        fecha: '6/24/2024',
        medio: 'Diario Río Negro',
        titulo: 'Legisladores de Río Negro acusan a colegas de haber copiado “letra por letra” un proyecto sobre seguridad',
        enlace: 'www.rionegro.com.ar/politica/legisladores-de-rio-negro-acusan-a-colegas-de-haber-copiado-letra-por-letra-un-proyecto-sobre-seguridad '
    },
    {
        fecha: '6/23/2024',
        medio: 'Bariloche 2000',
        titulo: 'La legisladora Lacour pidió repudiar la promesa a la bandera mapuche y prohibir esos actos en escuelas',
        enlace: 'https://www.bariloche2000.com/noticias/leer/la-legisladora-lacour-pidio-repudiar-la-promesa-a-la-bandera-mapuche-y-prohibir-esos-actos-en-escuelas/ '
    },
    {
        fecha: '6/21/2024',
        medio: 'Noticias Río Negro',
        titulo: 'Lacour: “Proteger la Identidad Nacional y fortalecer el respeto a la Bandera Argentina”',
        enlace: 'https://noticiasrionegro.com.ar/contenido/76925/lacour-proteger-la-identidad-nacional-y-fortalecer-el-respeto-a-la-bandera-argen '
    },
    {
        fecha: '6/19/2024',
        medio: 'El Cordillerano',
        titulo: 'Las autoras del proyecto para sacar los colores mapuches de los edificios públicos donaron una bandera argentina',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/19/191023-las-autoras-del-proyecto-para-sacar-los-colores-mapuches-de-los-edificios-publicos-donaron-una-bandera-argentina/'
    },
    {
        fecha: '6/15/2024',
        medio: 'Boletín de Consenso Patagonia',
        titulo: 'Resumen de la semana en el conflicto territorial en la Patagonia',
        enlace: 'https://v3.esmsv.com/campaign/htmlversion?AdministratorID=182412&CampaignID=58&StatisticID=58&MemberID=402&s=0f9f9531f9d063b5c00b00b8265ba374&isDemo=0 '
    },
    {
        fecha: '6/13/2024',
        medio: 'Limay TV',
        titulo: 'Entrevista sobre proyecto "Sólo Nuestras banderas"',
        enlace: 'https://youtu.be/134sx3PHgUg '
    },
    {
        fecha: '6/11/2024',
        medio: 'Radio Rivadavia BRC',
        titulo: 'Entrevista en "Nada es para siempre"',
        enlace: 'www.facebook.com/share/v/vNBtWD2ejNVG8quz/?mibextid=oFDknk'
    },
    {
        fecha: '6/11/2024',
        medio: 'Radio C Bariloche',
        titulo: 'Entrevista en sobre proyecto "Sólo nuestras banderas"',
        enlace: 'https://www.youtube.com/watch?v=Zw1AxgPbMRE&t=3s'
    },
    {
        fecha: '6/11/2024',
        medio: 'T Veo Río Negro',
        titulo: 'Proyecto de Ley en Río Negro quiere prohibir que la bandera mapuche esté en edificios públicos',
        enlace: 'https://www.youtube.com/watch?v=Qj08lRsm02s '
    },
    {
        fecha: '6/10/2024',
        medio: 'Bariloche2000',
        titulo: 'Podría ir a prisión quien no respete la ley impulsada para que no flamee la bandera mapuche en edificios públicos',
        enlace: 'https://www.bariloche2000.com/noticias/leer/podria-ir-a-prision-quien-no-respete-la-ley-impulsada-para-que-no-flamee-la-bandera-mapuche-en-edificios-publicos/153960 '
    },
    {
        fecha: '6/10/2024',
        medio: 'El Cordillerano',
        titulo: 'El proyecto para que la bandera mapuche no figure en edificios públicos menciona un decreto de Roca',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/10/190382-el-proyecto-para-que-la-bandera-mapuche-no-figure-en-edificios-publicos-menciona-un-decreto-de-roca '
    },
    {
        fecha: '6/10/2024',
        medio: 'Bariloche Opina',
        titulo: 'Legisladora Lacour: "No estamos en contra de la bandera mapuche"',
        enlace: 'https://www.barilocheopina.com/noticias/2024/06/10/74164-legisladora-lacour-no-estamos-en-contra-de-la-bandera-mapuche '
    },
    {
        fecha: '6/10/2024',
        medio: 'El Cordillerano',
        titulo: '“Poner la bandera mapuche es excluir a la gran mayoría de la población que no se identifica con ella”',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/10/190384-poner-la-bandera-mapuche-es-excluir-a-la-gran-mayoria-de-la-poblacion-que-no-se-identifica-con-ella '
    },
    {
        fecha: '6/9/2024',
        medio: 'El Cordillerano',
        titulo: 'La bandera mapuche no podría estar en edificios públicos rionegrinos',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/06/09/190339-la-bandera-mapuche-no-podria-estar-en-edificios-publicos-rionegrinos'
    },
    {
        fecha: '6/7/2024',
        medio: 'Radio Seis Engranaje',
        titulo: '',
        enlace: ''
    },
    {
        fecha: '5/21/2024',
        medio: 'Vivo Informado',
        titulo: 'La Legisladora Martina Lacour critica las malas prácticas políticas y celebra el triunfo en las internas del PRO en Río Negro',
        enlace: 'https://www.vivoinformado.com.ar/2024/05/la-legisladora-martina-lacour-critica.html'
    },
    {
        fecha: '5/21/2024',
        medio: 'Noticias Río Negro ',
        titulo: '"La falta de principios tarde o temprano se paga"',
        enlace: 'https://noticiasrionegro.com.ar/contenido/75992/la-falta-de-principios-tarde-o-temprano-se-paga '
    },
    {
        fecha: '5/20/2024',
        medio: 'Canal 7 Jacobacci',
        titulo: 'Legisladora Martina Lacour, sobre las elecciones del PRO en Río Negro',
        enlace: 'https://canal7jacobacci.com.ar/la-legisladora-martina-lacour-manifesto-que-la-falta-de-principios-tarde-o-temprano-se-paga/'
    },
    {
        fecha: '5/17/2024',
        medio: 'LU 17',
        titulo: 'ES LEY: COBRARÁN PEAJES EN RUTAS DE RÍO NEGRO',
        enlace: 'https://lu17.com/contenido/57629/es-ley-cobraran-peajes-en-rutas-de-rio-negro '
    },
    {
        fecha: '5/17/2024',
        medio: 'Radio Nacional',
        titulo: 'Entrevista sobre la sesión del 16 de mayo en la Legislatura',
        enlace: 'https://www.youtube.com/watch?v=cTvtkdO7vEI '
    },
    {
        fecha: '5/7/2024',
        medio: 'El Cordillerano',
        titulo: 'El camino que desembocó en que dos hectáreas de la zona del lago Mascardi volvieran a Parques Nacionales',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/05/07/188047-el-camino-que-desemboco-en-que-dos-hectareas-de-la-zona-del-lago-mascardi-volvieran-a-parques-nacionales-y-algo-mas'
    },
    {
        fecha: '4/29/2024',
        medio: 'Vivo Informado',
        titulo: 'Tu salud, tu elección! Propone libre elección de afiliados en IPROSS',
        enlace: 'https://www.vivoinformado.com.ar/2024/04/tu-salud-tu-eleccion-propone-libre.html'
    },
    {
        fecha: '4/26/2024',
        medio: 'Rodrigo Sotomayor',
        titulo: 'Entrevista: "Libre elección del IPROSS"',
        enlace: 'https://www.youtube.com/watch?v=zZMzrx4eIDo'
    },
    {
        fecha: '4/23/2024',
        medio: 'ADN Río Negro',
        titulo: '«Libertad»: Proponen que el IPROSS deje de ser obligatorio',
        enlace: 'https://www.adnrionegro.com.ar/2024/04/proponen-que-el-ipross-deje-de-ser-obligatorio/ '
    },
    {
        fecha: '3/23/2024',
        medio: 'LetraP',
        titulo: 'Río Negro: Juan Martín va por el PRO para sacar del juego a Aníbal Tortoriello',
        enlace: 'https://www.letrap.com.ar/politica/rio-negro-juan-martin-va-el-pro-sacar-del-juego-anibal-tortoriello-n5407444 '
    },
    {
        fecha: '2/29/2024',
        medio: 'El Cordillerano',
        titulo: 'Desde una agrupación barilochense ligada al PRO dijeron que Ignacio Torres asumió un “planteamiento desestabilizador”',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/02/29/182928-desde-una-agrupacion-barilochense-ligada-al-pro-dijeron-que-ignacio-torres-asumio-un-planteamiento-desestabilizador'
    },
    {
        fecha: '2/11/2024',
        medio: 'Radio Rivadavia BS.AS.',
        titulo: 'Sobre la actualidad de los incendios en la Patagonia:“Como legisladores vamos a pedir un mayor nivel de prevención”',
        enlace: 'https://x.com/Rivadavia630/status/1756842854767329653'
    },
    {
        fecha: '1/24/2024',
        medio: 'El Cordillerano',
        titulo: 'Legisladoras del PRO se expresaron en contra del paro general que se va a desarrollar en todo el país',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/01/24/180374-legisladoras-del-pro-se-expresaron-en-contra-del-paro-general-que-se-va-a-desarrollar-en-todo-el-pais'
    },
    {
        fecha: '1/9/2024',
        medio: 'El Cordillerano',
        titulo: 'Una ONG que busca generar conciencia fiscal intenta desembarcar en la Patagonia',
        enlace: 'https://www.elcordillerano.com.ar/noticias/2024/01/09/179295-una-ong-que-busca-generar-conciencia-fiscal-intenta-desembarcar-en-la-patagonia'
    }
]

document.addEventListener('DOMContentLoaded', imprimirPrensa)


// FUNCIONES
function imprimirPrensa() {
    const contenedorPrensa = document.querySelector('.prensa')
    console.log(contenedorPrensa);
    notas.forEach(nota =>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML= `
        <div class="card_left">
            <p>${nota.fecha}</p>
            <p>${nota.medio}</p>
        </div>
        <div class="card_centro">
            <p class="resumen">${nota.titulo}</p>
        </div>
        <div class="card_right">
            <a href="${nota.enlace}" class="btn editar">Ver</a>
        </div>
        `;
        contenedorPrensa.appendChild(card)

    })
}