const notas = [
  {
    fecha: "03/04/2025",
    medio: "Agencia País",
    tema: "Cautivos IPROSS",
    titulo:
    "Los afiliados al IPROSS podrán elegir cambiar de obra social",
    enlace:
    "https://agenciapais.com/2025/04/03/los-afiliados-al-ipross-podran-elegir-cambiar-de-obra-social/",
  },
  {
    fecha: "04/04/2025",
    medio: "Ambito financiero",
    tema: "Transparencia fiscal",
    titulo:
    "Las 7 razones y excusas de las provincias que no adhieren a la Transparencia Fiscal al Consumidor",
    enlace:
    "https://www.ambito.com/opiniones/las-7-razones-y-excusas-las-provincias-que-no-adhieren-la-transparencia-fiscal-al-consumidor-n6131082",
  },
  {
    fecha: "18/12/2024",
    medio: "Diario Río Negro",
    tema: "Presupuesto 2025",
    titulo:
    "La aprobación del Presupuesto en Río Negro y la advertencia por la deuda proyectada",
    enlace:
    "https://www.rionegro.com.ar/politica/la-aprobacion-del-presupuesto-en-rio-negro-y-la-advertencia-por-la-deuda-proyectada-3932598/",
  },
  {
    fecha: "17/12/2024",
    medio: "Bariloche Digital",
    tema: "Presupuesto 2025",
    titulo:
    "UN SÓLO VOTO NEGATIVO TUVO LA APROBACIÓN DEL PROYECTO DE PRESUPUESTO 2025 DE RIO NEGRO",
    enlace:
      "https://barilochedigital.com/un-solo-voto-negativo-tuvo-la-aprobacion-del-proyecto-de-presupuesto-2025-de-rio-negro/",
  },
  {
    fecha: "15/11/2024",
    medio: "Vivo informado",
    tema: "RTO - licencias de conducir",
    titulo:
    "Proponen la Simplificación de Trámites de Licencias y Eliminación de la RTO",
    enlace:
      "https://www.vivoinformado.com.ar/2024/11/proponen-la-simplificacion-de-tramites.html?m=1",
  },
  {
    fecha: "12/11/2024",
    medio: "Vivo informado",
    tema: "bloque pro",
    titulo:
    "Martina Lacour: ‘Los ciudadanos nos piden soluciones, pero la política frena nuestros proyectos’",
    enlace:
      "https://www.vivoinformado.com.ar/2024/11/martina-lacour-los-ciudadanos-nos-piden.html?m=1&fbclid=PAY2xjawGgQW5leHRuA2FlbQIxMAABpqT8k5QF8ZkKko5yfvHYOURaGlGmcHI9vPyAWggSlAsOh7tgGY0e2aBwmw_aem_S2Ma8FzJzYdz75sNKn3U_Q",
  },
  {
    fecha: "11/11/2024",
    medio: "Con Voz y Voto",
    tema: "bloque pro",
    titulo:
      "Entrevista en Con Voz y Voto sobre proyectos estancados que esperan su tratamiento en la Legislatura de Río Negro.",
    enlace:
      "https://www.youtube.com/watch?v=VtqTB5f8buY",
  },
  {
    fecha: "31/10/2024",
    medio: "Noticias Río Negro",
    tema: "bloque pro",
    titulo:
      "Consultarán a las comunidades originarias antes de dictar medidas que las afectenConsultarán a las comunidades originarias antes de dictar medidas que las afecten",
    enlace:
      "https://noticiasrionegro.com.ar/contenido/80639/consultaran-a-las-comunidades-originarias-antes-de-dictar-medidas-que-las-afecte",
  },
  {
    fecha: "02/11/2024",
    medio: "Informativo Hoy",
    tema: "municipalización Las Grutas",
    titulo:
      "Vecinos municipalizadores de Las Grutas buscan avanzar en la autonomía",
    enlace:
      "https://informativohoy.com.ar/vecinos-municipalizadores-de-las-grutas-buscan-avanzar-en-la-autonomia/",
  },
  {
    fecha: "10/09/2024",
    medio: "Bariloche Opina",
    tema: "gasoducto patagónico",
    titulo:
      "Exigen la habilitación de nuevas conexiones de gas en Bariloche y otras localidades",
    enlace:
      "https://www.barilocheopina.com/noticias/2024/09/10/75939-exigen-la-habilitacion-de-nuevas-conexiones-de-gas-en-bariloche-y-otras-localidades",
  },
  {
    fecha: "10/09/2024",
    medio: "Económicas Bariloche",
    tema: "gasoducto patagónico",
    titulo:
      "Pablo Chamatrópulos: 'Depende de Camuzzi la restitución del servicio de gas'",
    enlace:
      "https://www.economicasbariloche.com.ar/noticias/2024/09/10/15519-pablo-chamatropulos-depende-de-camuzzi-la-restitucion-del-servicio-de-gas",
  },
  {
    fecha: "05/09/2024",
    medio: "Noticias Río Negro",
    tema: "reforma CCC",
    titulo:
      "Aprueban en primera vuelta la reforma del Código Civil y Comercial de Río Negro",
    enlace:
      "https://noticiasrionegro.com.ar/contenido/79125/aprueban-en-primera-vuelta-la-reforma-del-codigo-civil-y-comercial-de-rio-negro",
  },
  {
    fecha: "07/09/2024",
    medio: "Diario Río Negro",
    tema: "reforma CCC",
    titulo:
      "Se aprobó reforma del Código de Río Negro y qué significa en la práctica para las demandas civiles o comerciales",
    enlace:
      "https://www.rionegro.com.ar/politica/se-aprobo-reforma-del-codigo-de-rio-negro-y-que-significa-en-la-practica-para-las-demandas-civiles-o-comerciales-3779803/",
  },
  {
    fecha: "06/09/2024",
    medio: "ADN Río Negro",
    tema: "reforma CCC",
    titulo: "La reforma al Código Civil aprobada en primera vuelta",
    enlace:
      "https://www.adnrionegro.com.ar/2024/09/la-reforma-al-codigo-civil-aprobada-en-primera-vuelta/",
  },
  {
    fecha: "09/09/2024",
    medio: "Bariloche Opina",
    tema: "educación esencial",
    titulo:
      "Buscan declarar a la educación como 'servicio esencial' y establecer 'guardias mínimas' en los paros",
    enlace:
      "https://www.barilocheopina.com/noticias/2024/09/04/75810-buscan-declarar-a-la-educacion-como-servicio-esencial-y-establecer-guardias-minimas-en-los-paros",
  },
  {
    fecha: "09/09/2024",
    medio: "Diario Río Negro",
    tema: "educación esencial",
    titulo:
      "Educación esencial en Río Negro: el proyecto que exige guardias escolares iría a la sesión del jueves",
    enlace:
      "https://www.rionegro.com.ar/politica/educacion-esencial-en-rio-negro-el-proyecto-que-exige-guardias-escolares-iria-a-la-sesion-del-jueves-3774276/",
  },
  {
    fecha: "30/07/2024",
    medio: "Bariloche Opina",
    tema: "Cuidado Medioambiente",
    titulo:
      "Vertedero: proponen el tratamiento de los residuos con tecnología avanzada",
    enlace:
      "https://www.barilocheopina.com/noticias/2024/07/30/75112-vertedero-proponen-el-tratamiento-de-los-residuos-con-tecnologia-avanzada",
  },
  {
    fecha: "30/07/2024",
    medio: "Radio Rivadavia BRC",
    tema: "Información pública",
    titulo:
      "Entrevista: avances de los últimos proyectos presentados, remediación del vertedero y la propuesta alcanzada por parte del CPC -Convocatoria a la Participación Ciudadana",
    enlace:
      "https://www.facebook.com/watch/?mibextid=oFDknk&v=1238801677498292&rdid=F6I9PmPQPyS6UQi3",
  },
  {
    fecha: "18/07/2024",
    medio: "Bariloche 2000",
    tema: "Actos públicos",
    titulo:
      "El intendente Cortés participó del acto provincial de entrega de escrituras, personerías, aportes y becas deportivas",
    enlace:
      "https://www.bariloche2000.com/noticias/leer/el-intendente-cortes-participo-del-acto-provincial-de-entrega-de-escrituras-personerias-aportes-y-becas-deportivas/154645",
  },
  {
    fecha: "6/07/2024",
    medio: "El Cordillerano",
    tema: "nuestras banderas",
    titulo:
      "El líder de la agrupación Patoruzú considera “aberrante” que en las escuelas se presente la bandera mapuche",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/07/16/193096-el-lider-de-la-agrupacion-patoruzu-considera-aberrante-que-en-las-escuelas-se-presente-la-bandera-mapuche",
  },
  {
    fecha: "14/07/2024",
    medio: "Diario Río Negro",
    tema: "fin a sumarios policías",
    titulo:
      "Hay más de 800 sumarios abiertos a policías de Río Negro por las protestas de 2023",
    enlace:
      "https://www.rionegro.com.ar/politica/hay-mas-de-800-sumarios-abiertos-a-policias-de-rio-negro-por-las-protestas-de-2023-3690478/",
  },
  {
    fecha: "04/07/2024",
    medio: "Bariloche Opina",
    tema: "responsabilidad fiscal",
    titulo:
      "Nuevas medidas fiscales: Los tickets de consumo deberán detallar los impuestos",
    enlace:
      "https://www.barilocheopina.com/noticias/2024/07/04/74606-nuevas-medidas-fiscales-los-tickets-de-consumo-deberan-detallar-los-impuestos",
  },
  {
    fecha: "03/07/2024",
    medio: "Vivo Informado",
    tema: "no más cautivos IPROSS",
    titulo:
      "Reacciones de Lacour @lacourmartina: Falta de prestadores en El Bolsón de la obra social Ipross",
    enlace:
      "https://www.vivoinformado.com.ar/2024/07/reacciones-de-lacour-lacourmartina.html?m=1",
  },
  {
    fecha: "27/06/2024",
    medio: "Cadena 3 Rosario",
    tema: "nuestras banderas",
    titulo: 'Lacour: "Respetemos los símbolos patrios"',
    enlace: "https://youtu.be/Dgjhed29zMo ",
  },
  {
    fecha: "26/06/2024",
    medio: "Noticias Río Negro",
    tema: "reiterancia delictiva",
    titulo:
      "Presentan proyecto que busca fortalecer el Sistema Judicial para Proteger a la Sociedad y a las Víctimas",
    enlace:
      "https://noticiasrionegro.com.ar/contenido/77019/presentan-proyecto-que-busca-fortalecer-el-sistema-judicial-para-proteger-a-la-s",
  },
  {
    fecha: "25/06/2024",
    medio: "Infobae",
    tema: "nuestras banderas",
    titulo:
      "Otra polémica en Neuquén: izaron la bandera mapuche en la Universidad Nacional del Comahue",
    enlace:
      "https://www.infobae.com/politica/2024/06/25/otra-polemica-en-neuquen-izaron-la-bandera-mapuche-en-la-universidad-nacional-del-comahue/",
  },
  {
    fecha: "25/06/2024",
    medio: "FM Del Lago Esquel",
    tema: "nuestras banderas",
    titulo:
      "Impulsan dos  proyectos de ley para restringir la ceremonia de la promesa de la bandera mapuche y el izamiento de toda bandera que no fuera la celeste y blanca",
    enlace:
      "https://fmdellagoesquel.com.ar/impulsan-dos-proyectos-de-ley-para-restringir-la-ceremonia-de-la-promesa-de-la-bandera-mapuche-y-el-izamiento-de-toda-bandera-que-no-fuera-la-celeste-y-blanca/",
  },
  {
    fecha: "25/06/2024",
    medio: "Bariloche Más",
    tema: "reiterancia delictiva",
    titulo:
      "Un proyecto que busca fortalecer el Sistema Judicial para Proteger a la Sociedad y a las Víctimas",
    enlace:
      "https://barilochemas.com.ar/un-proyecto-que-busca-fortalecer-el-sistema-judicial-para-proteger-a-la-sociedad-y-a-las-victimas/",
  },
  {
    fecha: "25/06/2024",
    medio: "Ahora Comarca",
    tema: "bloque pro",
    titulo:
      "Dura respuesta del PRO a Ibarrolaza, McKidd y Domínguez: “No van a trabajar a las comisiones, no leen los proyectos”",
    enlace:
      "https://ahoracomarca.com.ar/contenido/2030/dura-respuesta-del-pro-a-ibarrolaza-mckidd-y-dominguez-no-van-a-trabajar-a-las-c",
  },
  {
    fecha: "25/06/2024",
    medio: "ADN Río Negro",
    tema: "bloque PRO",
    titulo: "Liberales enmarañados en cruces por «plagio» legislativo",
    enlace:
      "https://www.adnrionegro.com.ar/2024/06/liberales-enmaranados-en-cruces-por-plagio-legislativo/",
  },
  {
    fecha: "25/06/2024",
    medio: "Diario La Palabra",
    tema: "bloque PRO",
    titulo:
      'Lacour responde: "No trabajan en comisiones ni leen los proyectos"',
    enlace:
      "https://www.diariolapalabra.com.ar/noticia/143750/lacour-responde-no-trabajan-en-comisiones-ni-leen-los-proyectos",
  },
  {
    fecha: "25/06/2024",
    medio: "El Cordillerano",
    tema: "bloque PRO",
    titulo:
      "Acusación de plagio: recrudece la interna del PRO en la Legislatura",
    enlace:
      "https://www.elcordillerano.com.ar/amp/noticias/2024/06/25/191571-acusacion-de-plagio-recrudece-la-interna-del-pro-en-la-legislatura",
  },
  {
    fecha: "25/06/2024",
    medio: "LCR Diario Digital",
    tema: "bloque PRO",
    titulo:
      "Dura respuesta de Lacour a Ibarrolaza, McKidd y Domínguez: “No van a trabajar a las comisiones, no leen los proyectos”",
    enlace:
      "https://lcr.com.ar/dura-respuesta-de-lacour-a-ibarrolaza-mckidd-y-dominguez-no-van-a-trabajar-a-las-comisiones-no-leen-los-proyectos/",
  },
  {
    fecha: "25/06/2024",
    medio: "La Tecla Patagonia",
    tema: "bloque PRO",
    titulo:
      "Interna feroz en el PRO: el oficialismo responde a los rupturistas y los trata de ñoquis",
    enlace:
      "https://www.lateclapatagonia.com.ar/85364-interna-feroz-en-el-pro-el-oficialismo-responde-a-los-rupturistas-y-los-trata-de-oquis ",
  },
  {
    fecha: "25/06/2024",
    medio: "Canal 7 Jacobacci",
    tema: "bloque pro",
    titulo:
      "Dura respuesta del PRO a Ibarrolaza, McKidd y Domínguez: “No van a trabajar a las comisiones, no leen los proyectos”",
    enlace:
      "https://canal7jacobacci.com.ar/dura-respuesta-del-pro-a-ibarrolaza-mckidd-y-dominguez-no-van-a-trabajar-a-las-comisiones-no-leen-los-proyectos/ ",
  },
  {
    fecha: "25/06/2024",
    medio: "Radio Rivadavia BRC",
    tema: "reiterancia delictiva",
    titulo:
      "Entrevista sobre el proyecto de ley presentado para incluir al Código Procesal Penal la figura de Reiterancia",
    enlace: "https://facebook.com/100089872827598/videos/1117414732699723/",
  },
  {
    fecha: "24/06/2024",
    medio: "Diario La Palabra",
    tema: "nuestras banderas",
    titulo:
      "Polémica en torno a la jura a la bandera mapuche: desde el PRO piden prohibir el acto",
    enlace:
      "https://www.lateclapatagonia.com.ar/85342-legisladora-del-pro-en-contra-de-la-jura-a-la-bandera-mapuche ",
  },
  {
    fecha: "24/06/2024",
    medio: "El Cordillerano",
    tema: "nuestras banderas",
    titulo: "“En ningún lugar del mundo permitirían algo como esto”",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/06/24/191210-en-ningun-lugar-del-mundo-permitirian-algo-como-esto",
  },
  {
    fecha: "24/06/2024",
    medio: "Diario Río Negro",
    tema: "bloque pro",
    titulo:
      "Legisladores de Río Negro acusan a colegas de haber copiado “letra por letra” un proyecto sobre seguridad",
    enlace:
      "www.rionegro.com.ar/politica/legisladores-de-rio-negro-acusan-a-colegas-de-haber-copiado-letra-por-letra-un-proyecto-sobre-seguridad ",
  },
  {
    fecha: "23/06/2024",
    medio: "Bariloche 2000",
    tema: "nuestras banderas",
    titulo:
      "La legisladora Lacour pidió repudiar la promesa a la bandera mapuche y prohibir esos actos en escuelas",
    enlace:
      "https://www.bariloche2000.com/noticias/leer/la-legisladora-lacour-pidio-repudiar-la-promesa-a-la-bandera-mapuche-y-prohibir-esos-actos-en-escuelas/ ",
  },
  {
    fecha: "22/06/2024",
    medio: "Bariloche Más",
    tema: "reiterancia delictiva",
    titulo:
      "Lacour: “Proteger la Identidad Nacional y fortalecer el respeto a la Bandera Argentina”",
    enlace:
      "https://barilochemas.com.ar/lacour-proteger-la-identidad-nacional-y-fortalecer-el-respeto-a-la-bandera-argentina/",
  },
  {
    fecha: "21/06/2024",
    medio: "Noticias Río Negro",
    tema: "nuestras banderas",
    titulo:
      "Lacour: “Proteger la Identidad Nacional y fortalecer el respeto a la Bandera Argentina”",
    enlace:
      "https://noticiasrionegro.com.ar/contenido/76925/lacour-proteger-la-identidad-nacional-y-fortalecer-el-respeto-a-la-bandera-argen ",
  },
  {
    fecha: "19/06/2024",
    medio: "El Cordillerano",
    tema: "nuestras banderas",
    titulo:
      "Las autoras del proyecto para sacar los colores mapuches de los edificios públicos donaron una bandera argentina",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/06/19/191023-las-autoras-del-proyecto-para-sacar-los-colores-mapuches-de-los-edificios-publicos-donaron-una-bandera-argentina/",
  },
  {
    fecha: "15/06/2024",
    medio: "Boletín de Consenso Patagonia",
    tema: "nuestras banderas",
    titulo: "Resumen de la semana en el conflicto territorial en la Patagonia",
    enlace:
      "https://v3.esmsv.com/campaign/htmlversion?AdministratorID=182412&CampaignID=58&StatisticID=58&MemberID=402&s=0f9f9531f9d063b5c00b00b8265ba374&isDemo=0 ",
  },
  {
    fecha: "13/06/2024",
    medio: "Limay TV",
    tema: "nuestras banderas",
    titulo: 'Entrevista sobre proyecto "Sólo Nuestras banderas"',
    enlace: "https://youtu.be/134sx3PHgUg ",
  },
  {
    fecha: "11/06/2024",
    medio: "Radio Rivadavia BRC",
    tema: "nuestras banderas",
    titulo: 'Entrevista en "Nada es para siempre"',
    enlace: "https://facebook.com/100089872827598/videos/1101516237576166/",
  },
  {
    fecha: "11/06/2024",
    medio: "Radio C Bariloche",
    tema: "nuestras banderas",
    titulo: 'Entrevista en sobre proyecto "Sólo nuestras banderas"',
    enlace: "https://www.youtube.com/watch?v=Zw1AxgPbMRE&t=3s",
  },
  {
    fecha: "11/06/2024",
    medio: "TVeo Río Negro",
    tema: "nuestras banderas",
    titulo:
      "Proyecto de Ley en Río Negro quiere prohibir que la bandera mapuche esté en edificios públicos",
    enlace: "https://www.youtube.com/watch?v=Qj08lRsm02s ",
  },
  {
    fecha: "10/06/2024",
    medio: "Bariloche2000",
    tema: "nuestras banderas",
    titulo:
      "Podría ir a prisión quien no respete la ley impulsada para que no flamee la bandera mapuche en edificios públicos",
    enlace:
      "https://www.bariloche2000.com/noticias/leer/podria-ir-a-prision-quien-no-respete-la-ley-impulsada-para-que-no-flamee-la-bandera-mapuche-en-edificios-publicos/153960 ",
  },
  {
    fecha: "10/06/2024",
    medio: "Ahora Comarca",
    tema: "nuestras banderas",
    titulo:
      "Proyecto de ley en Río Negro busca que en edificios públicos de la provincia solo se exhiban las banderas nacional, provincial y municipal",
    enlace:
      "https://ahoracomarca.com.ar/contenido/1840/proyecto-de-ley-en-rio-negro-busca-que-en-edificios-publicos-de-la-provincia-sol",
  },
  {
    fecha: "10/06/2024",
    medio: "El Cordillerano",
    tema: "nuestras banderas",
    titulo:
      "El proyecto para que la bandera mapuche no figure en edificios públicos menciona un decreto de Roca",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/06/10/190382-el-proyecto-para-que-la-bandera-mapuche-no-figure-en-edificios-publicos-menciona-un-decreto-de-roca ",
  },
  {
    fecha: "10/06/2024",
    medio: "Bariloche Opina",
    tema: "nuestras banderas",
    titulo: 'Legisladora Lacour: "No estamos en contra de la bandera mapuche"',
    enlace:
      "https://www.barilocheopina.com/noticias/2024/06/10/74164-legisladora-lacour-no-estamos-en-contra-de-la-bandera-mapuche ",
  },
  {
    fecha: "10/06/2024",
    medio: "El Cordillerano",
    tema: "nuestras banderas",
    titulo:
      "“Poner la bandera mapuche es excluir a la gran mayoría de la población que no se identifica con ella”",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/06/10/190384-poner-la-bandera-mapuche-es-excluir-a-la-gran-mayoria-de-la-poblacion-que-no-se-identifica-con-ella ",
  },
  {
    fecha: "10/06/2024",
    medio: "Bariloche2000",
    tema: "nuestras banderas",
    titulo:
      'Legisladora Lacour: "colocar una única bandera de otra cultura es dejar afuera a todas las demás"',
    enlace:
      "https://www.bariloche2000.com/noticias/leer/legisladora-lacour-colocar-una-unica-bandera-de-otra-cultura-es-dejar-afuera-a-todas-las-demas-/153966",
  },
  {
    fecha: "09/06/2024",
    medio: "El Cordillerano",
    tema: "nuestras banderas",
    titulo:
      "La bandera mapuche no podría estar en edificios públicos rionegrinos",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/06/09/190339-la-bandera-mapuche-no-podria-estar-en-edificios-publicos-rionegrinos",
  },
  {
    fecha: "21/05/2024",
    medio: "Vivo Informado",
    tema: "bloque pro",
    titulo:
      "La Legisladora Martina Lacour critica las malas prácticas políticas y celebra el triunfo en las internas del PRO en Río Negro",
    enlace:
      "https://www.vivoinformado.com.ar/2024/05/la-legisladora-martina-lacour-critica.html",
  },
  {
    fecha: "21/05/2024",
    medio: "Noticias Río Negro ",
    tema: "bloque pro",
    titulo: '"La falta de principios tarde o temprano se paga"',
    enlace:
      "https://noticiasrionegro.com.ar/contenido/75992/la-falta-de-principios-tarde-o-temprano-se-paga ",
  },
  {
    fecha: "20/05/2024",
    medio: "Canal 7 Jacobacci",
    tema: "bloque pro",
    titulo:
      "Legisladora Martina Lacour, sobre las elecciones del PRO en Río Negro",
    enlace:
      "https://canal7jacobacci.com.ar/la-legisladora-martina-lacour-manifesto-que-la-falta-de-principios-tarde-o-temprano-se-paga/",
  },
  {
    fecha: "17/05/2024",
    medio: "LU 17",
    tema: "peajes río negro",
    titulo: "ES LEY: COBRARÁN PEAJES EN RUTAS DE RÍO NEGRO",
    enlace:
      "https://lu17.com/contenido/57629/es-ley-cobraran-peajes-en-rutas-de-rio-negro ",
  },
  {
    fecha: "17/05/2024",
    medio: "Radio Nacional",
    tema: "peajes río negro",
    titulo: "Entrevista sobre la sesión del 16 de mayo en la Legislatura",
    enlace: "https://www.youtube.com/watch?v=cTvtkdO7vEI ",
  },
  {
    fecha: "07/05/2024",
    medio: "El Cordillerano",
    tema: "usurpaciones de tierras",
    titulo:
      "El camino que desembocó en que dos hectáreas de la zona del lago Mascardi volvieran a Parques Nacionales",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/05/07/188047-el-camino-que-desemboco-en-que-dos-hectareas-de-la-zona-del-lago-mascardi-volvieran-a-parques-nacionales-y-algo-mas",
  },
  {
    fecha: "29/04/2024",
    medio: "Vivo Informado",
    tema: "no más cautivos IPROSS",
    titulo:
      "Tu salud, tu elección! Propone libre elección de afiliados en IPROSS",
    enlace:
      "https://www.vivoinformado.com.ar/2024/04/tu-salud-tu-eleccion-propone-libre.html",
  },
  {
    fecha: "26/04/2024",
    medio: "Rodrigo Sotomayor",
    tema: "no más cautivos IPROSS",
    titulo: 'Entrevista: "Libre elección del IPROSS"',
    enlace: "https://www.youtube.com/watch?v=zZMzrx4eIDo",
  },
  {
    fecha: "24/04/2024",
    medio: "Radio Rivadavia BRC",
    tema: "no más cautivos IPROSS",
    titulo:
      "Entrevista: proyecto de ley con el que impulsan la libre elección de obra social para estatales de Río Negro.",
    enlace: "https://facebook.com/100089872827598/videos/437341258987568/",
  },
  {
    fecha: "23/04/2024",
    medio: "ADN Río Negro",
    tema: "no más cautivos IPROSS",
    titulo: "«Libertad»: Proponen que el IPROSS deje de ser obligatorio",
    enlace:
      "https://www.adnrionegro.com.ar/2024/04/proponen-que-el-ipross-deje-de-ser-obligatorio/ ",
  },
  {
    fecha: "23/03/2024",
    medio: "LetraP",
    tema: "bloque pro",
    titulo:
      "Río Negro: Juan Martín va por el PRO para sacar del juego a Aníbal Tortoriello",
    enlace:
      "https://www.letrap.com.ar/politica/rio-negro-juan-martin-va-el-pro-sacar-del-juego-anibal-tortoriello-n5407444 ",
  },
  {
    fecha: "29/02/2024",
    medio: "El Cordillerano",
    tema: "bloque pro",
    titulo:
      "Desde una agrupación barilochense ligada al PRO dijeron que Ignacio Torres asumió un “planteamiento desestabilizador”",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/02/29/182928-desde-una-agrupacion-barilochense-ligada-al-pro-dijeron-que-ignacio-torres-asumio-un-planteamiento-desestabilizador",
  },
  {
    fecha: "21/02/2024",
    medio: "Radio Rivadavia BS.AS.",
    tema: "incendios forestales",
    titulo:
      "Sobre la actualidad de los incendios en la Patagonia:“Como legisladores vamos a pedir un mayor nivel de prevención”",
    enlace: "https://x.com/Rivadavia630/status/1756842854767329653",
  },
  {
    fecha: "24/01/2024",
    medio: "El Cordillerano",
    tema: "yo no paro",
    titulo:
      "Legisladoras del PRO se expresaron en contra del paro general que se va a desarrollar en todo el país",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/01/24/180374-legisladoras-del-pro-se-expresaron-en-contra-del-paro-general-que-se-va-a-desarrollar-en-todo-el-pais",
  },
  {
    fecha: "09/01/2024",
    medio: "El Cordillerano",
    tema: "responsabilidad fiscal",
    titulo:
      "Una ONG que busca generar conciencia fiscal intenta desembarcar en la Patagonia",
    enlace:
      "https://www.elcordillerano.com.ar/noticias/2024/01/09/179295-una-ong-que-busca-generar-conciencia-fiscal-intenta-desembarcar-en-la-patagonia",
  },
];

document.addEventListener('DOMContentLoaded', ()=>{
    imprimirPrensa(notas)})


// FUNCIONES
const contenedorPrensa = document.querySelector('.prensa')

function imprimirPrensa(listado) {
    contenedorPrensa.innerHTML= '';

    let mostrar = listado.length > 8 ? 8 : listado.length;

    let i=0
    while (i<mostrar) {
        const card = document.createElement('div')
        card.classList.add('registro')
        card.innerHTML = `
        <div class="data">
            <p class="area">${listado[i].fecha}</p>
            <p class="tema">${listado[i].tema}</p>
        </div>
        <div class="data">
            <div class="tags">
                <p class="numero">${listado[i].medio}  <a href="${listado[i].enlace}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
            </div>
            <div class="resumen">
                <p>${listado[i].titulo}</p>
            </div>
        </div>
        `;

        i++
        contenedorPrensa.appendChild(card)
    }

    if (listado.length > 8) {
      const mostrarMasPrensa = document.createElement('p')
      mostrarMasPrensa.textContent = 'Mostrar más'
      mostrarMasPrensa.classList.add('ancor')
      contenedorPrensa.appendChild(mostrarMasPrensa)
      mostrarMasPrensa.addEventListener('click', ()=>{
          mostrarMasPrensa.remove()
          MasPrensa(listado)
      })
    }

    const countPrensa = listado.length;
    document.querySelector('#countPrensa').textContent = countPrensa;
}

function MasPrensa(listado){
    console.log('imprimir mas prensa');
    
    let i=8   
    while (i< listado.length) {
                    
        const card = document.createElement('div')
        card.classList.add('registro')
        card.innerHTML= `
        <div class="data">
            <p class="area">${listado[i].fecha}</p>
            <p class="tema">${listado[i].tema}</p>
        </div>
        <div class="data">
            <div class="tags">
                <p class="numero">${listado[i].medio}  <a href="${listado[i].enlace}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
            </div>
            <div class="resumen">
                <p>${listado[i].titulo}</p> 
            </div>
        </div>
        `;
        i++
        contenedorPrensa.appendChild(card)
    }
    const mostrarMenosPrensa = document.createElement('p')
    mostrarMenosPrensa.textContent = 'Mostrar menos'
    mostrarMenosPrensa.classList.add('ancor')
    contenedorPrensa.appendChild(mostrarMenosPrensa)

    mostrarMenosPrensa.addEventListener('click', ()=>{
        mostrarMenosPrensa.remove()
        MenosPrensa(listado)
    })
}

function MenosPrensa(listado){
    let i = listado.length

    while( i > 8){
        contenedorPrensa.lastChild.remove()
        i--
    }
    
    const mostrarMasPrensa = document.createElement('p')
    mostrarMasPrensa.textContent = 'Mostrar más'
    mostrarMasPrensa.classList.add('ancor')
    contenedorPrensa.appendChild(mostrarMasPrensa)
    contenedorPrensa.scrollIntoView({ behavior: 'smooth' });

    mostrarMasPrensa.addEventListener('click', ()=>{
        mostrarMasPrensa.remove()
        MasPrensa(listado)
    })
}

// BUSCADOR
/* meses */
const notas_meses = document.querySelectorAll("#meses input[type='radio']");
notas_meses.forEach(mes => {
  mes.addEventListener("change", () => {
    console.log(mes.value);
    if (mes.value === "All") {
      imprimirPrensa(notas);
    } else {
      const notasFiltradas = notas.filter(
        (proy) => proy.fecha.split('/')[1] === mes.value
      );
      if(notasFiltradas.length === 0){
        const alert = document.createElement('i')
        alert.textContent = 'No hay notas este mes';
        contenedorPrensa.innerHTML = '';
        contenedorPrensa.appendChild(alert)
      } else {
      imprimirPrensa(notasFiltradas);
      console.log(notasFiltradas); 
    }
  }
  });
});