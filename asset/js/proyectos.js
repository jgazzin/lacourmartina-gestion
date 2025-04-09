const proyectosPropios = [
  {
    numero: "PL370/2025",
    fecha: "07-04-2025",
    estado: "ingresado",
    area: "administración-Estado",
    tema: "Ficha limpia para todos",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=312&a=2025",
    resumen:
      'Sustituye el artículo 1º de la ley B nº 4780 de prohibiciones e inhabilidades para el ejercicio de cargos públicos y modifica el artículo 4º de la ley L nº 3487 -Estatuto General y Básico para el personal de la Administración Pública, para que el alcance de las leyes de Ficha Limpia abarquen a toda la administración pública, no solo los cargos electos.',
  },
  {
    numero: "PL312/2025",
    fecha: "26-03-2025",
    estado: "ingresado",
    area: "Desarrollo humano",
    tema: "Protección social",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=312&a=2025",
    resumen:
      'Crea la Agencia para la Protección Social.',
  },
  {
    numero: "PL311/2025",
    fecha: "26-03-2025",
    estado: "ingresado",
    area: "Salud",
    tema: "Enfermedad renal",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=311&a=2025",
    resumen:
      'Establece un sistema de otorgamiento de turnos preferenciales en los hospitales rionegrinos para pacientes con enfermedad renal crónica terminal.',
  },
  {
    numero: "PI310/2025",
    fecha: "26-03-2025",
    estado: "ingresado",
    area: "Economía-hacienda",
    tema: "Ingresos brutos",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=310&a=2025",
    resumen:
      'Al Poder Ejecutivo, Ministerio de Economía, Agencia de Recaudación Tributaria, referido a la recaudación del Impuesto sobre los Ingresos Brutos para las principales actividades financieras entre los años 2021, 2022, 2023 y 2024.',
  },
  {
    numero: "PD309/2025",
    fecha: "26-03-2025",
    estado: "ingresado",
    area: "Salud",
    tema: "Enfermedad renal",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=309&a=2025",
    resumen:
      'Su beneplácito por la próxima firma del convenio entre el Instituto Nacional Central Único Coordinador de Ablación e Implante -INCUCAI- y el Ministerio de Salud de la Provincia de Río Negro para la implementación de los Consultorios de Enfermedad Renal Crónica Avanzada -CERCA-en la provincia.',
  },
  {
    numero: "PI306/2025",
    fecha: "26-03-2025",
    estado: "ingresado",
    area: "Administración-Estado",
    tema: "Información pública",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=306&a=2025",
    resumen:
      'Al Poder Ejecutivo, Secretaría Legal y Técnica, Secretaría de Estado General de la Gobernación, referido a los motivos por los cuales se demoró la publicación en el Boletín Oficial de los decretos nº 336/2024, 456/2024 y 633/2024, que modificaron créditos presupuestarios.',
  },
  {
    numero: "PC80/2025",
    fecha: "07-02-2025",
    estado: "ingresado",
    area: "Seguridad",
    tema: "Comisarías",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=80&a=2025",
    resumen:
      'Al Poder Ejecutivo, Ministerio de Seguridad y Justicia, solicita la urgente implementación de medidas administrativas, operativas y presupuestarias necesarias para la Subcomisaría nº 55, y los Destacamentos nº 138 y 140 de la ciudad de San Carlos de Bariloche.',
  },
  {
    numero: "PC46/2025",
    fecha: "31-01-2025",
    estado: "ingresado",
    area: "Seguridad",
    tema: "Incendios",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=46&a=2025",
    resumen:
      'A la Secretaría de Estado de Energía y Ambiente, se clausuren todos los accesos al Área Natural Protegida Río Azul-Lago Escondido -ANPRALE-, que está bajo su órbita, y se prohíba el ingreso de turistas, manifestantes y personas ajenas al operativo de combate del fuego, iniciado el día 30 de enero de 2025.',
  },
  {
    numero: "PC19/2025",
    fecha: "21-01-2025",
    estado: "ingresado",
    area: "Asuntos económicos",
    tema: "Ayuda a frutícolas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=19&a=2025",
    resumen:
      'Al Gobernador de la Provincia de Río Negro, Alberto Weretilneck, que de forma urgente active los programas presupuestarios de ayuda al pequeño y mediano productor frutícola de la provincia y solicite al Gobierno Nacional la intervención y ayuda para la producción rionegrina.',
  },
  {
    numero: "PC9/2025",
    fecha: "13-01-2025",
    estado: "ingresado",
    area: "Seguridad y Justicia",
    tema: "Comisaría en Bariloche",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=9&a=2025",
    resumen:
      'Al Poder Ejecutivo, Ministerio de Seguridad y Justicia, que consideren indispensable elevar a la Subcomisaría 80 de la ciudad de San Carlos de Bariloche al rango de Comisaría.',
  },
  {
    numero: "PL1611/2024",
    fecha: "15-11-2024",
    estado: "ingresado",
    area: "Administración-Estado",
    tema: "RTO - licencias de conducir",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1611&a=2024",
    resumen:
      'Modifica el artículo 2º e incorpora los artículos 21 bis y 21 ter al Capítulo I del Título III de la ley S nº 5263 de Tránsito de la Provincia de Río Negro; Establece la RTO no obligatoria y un sistema simplificado de renovación de licencias de conducir.',
  },
  {
    numero: "PD1590/2024",
    fecha: "13-11-2024",
    estado: "ingresado",
    area: "Cultura y educación",
    tema: "derechos de los niños",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1590&a=2024",
    resumen:
      'De interés social y legislativo la "1º Jornada sobre los Derechos de los Niños en los tres Poderes del Estado", a realizarse el 19 de noviembre de 2024 en la Legislatura de la Provincia del Neuquén y el 22 de noviembre de 2024 en la Cámara de Comercio, Turismo, Industria y Producción de la ciudad de Viedma.',
  },
  {
    numero: "PL1526/2024",
    fecha: "29-10-2024",
    estado: "ingresado",
    area: "Administración-Estado",
    tema: "cargos públicos no hereditarios",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1526&a=2024",
    resumen:
      'Se prohíbe la designación preferencial en cargos y empleos públicos a integrantes del grupo familiar primario de los trabajadores activos o activos fallecidos, dentro de todos los organismos que integran la Administración Pública Provincial.',
  },
  {
    numero: "PL1525/2024",
    fecha: "29-10-2024",
    estado: "ingresado",
    area: "cultura, turismo y educación",
    tema: "Pilcaniyeu Viejo",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1525&a=2024",
    resumen:
      'Declara Sitio Histórico Provincial, en los términos de la ley F nº 3656 de Protección y Conservación del Patrimonio Cultural de la Provincia de Río Negro, el paraje "Pilcaniyeu Viejo", y Monumentos Históricos Provinciales a los edificios del correo y del galpón de esquila y enfardado de lana, ubicados en el predio del Centro Educativo Rural -CER-.',
  },
  {
    numero: "PD1524/2024",
    fecha: "29-10-2024",
    estado: "aprobado",
    area: "cultura, turismo y educación",
    tema: "Pilcaniyeu Viejo",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1524&a=2024",
    resumen:
      'De interés histórico, cultural, social, educativo y turístico los sitios donde funcionaron el almacén, el correo, el hotel y el galpón de esquila y enfardado del paraje Pilcaniyeu Viejo.',
  },
  {
    numero: "PI1449/2024",
    fecha: "21-10-2024",
    estado: "ingresado",
    area: "Asuntos económicos",
    tema: "Recaudación Tributaria",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1449&a=2024",
    resumen:
      'Al Poder Ejecutivo, Ministerio de Hacienda y Agencia de Recaudación Tributaria, referido a la recaudación de los ejercicios fiscales 2019, 2020, 2021, 2022 y 2023, ejecutada en conceptos de los Impuestos Sobre los Ingresos Brutos, Automotores, Inmobiliario y Sellos; y el total recaudado en las diferentes jurisdicciones municipales de la provincia.',
  },
  {
    numero: "PL1448/2024",
    fecha: "18-10-2024",
    estado: "ingresado",
    area: "Educación y Cultura",
    tema: "hallazgo del Helvecia II",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1448&a=2024",
    resumen:
      'Se declara "Sitio Histórico Provincial", "Patrimonio Histórico Provincial y de interés científico cultural, al lugar Lago Nahuel Huapi donde se halla el naufragio del vapor Helvecia II en los términos de la ley F nº 3656 de Protección y Conservación del Patrimonio Cultural de la Provincia de Río Negro.',
  },
  {
    numero: "PD1446/2024",
    fecha: "18-10-2024",
    estado: "aprobado",
    area: "Educación y Cultura",
    tema: "hallazgo del Helvecia II",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1446&a=2024",
    resumen:
      "De interés histórico, cultural, social, educativo, científico y turístico al sitio donde se produjo el hallazgo del vapor Helvecia II en aguas del lago Nahuel Huapi.",
  },
  {
    numero: "PL1444/2024",
    fecha: "18-10-2024",
    estado: "ingresado",
    area: "Educación y Cultura",
    tema: "Nuestra historia",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1444&a=2024",
    resumen:
      "Se declara en la Provincia de Río Negro, el año 2025 como '210 Años del Congreso de los Pueblos Libres'. Declara el año 2026 como '210 Años de Nuestra Indepenencia'. Se incorpora durante el año 2025 la leyenda '2025-210 Años del Congreso de los Pueblos Libre' en los medios digitales de los Poderes Ejecutivo y Legislativo.",
  },
  {
    numero: "PC1419/2024",
    fecha: "16-10-2024",
    estado: "aprobado",
    area: "Seguridad y Justicia",
    tema: "datos genéticos",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1419&a=2024",
    resumen:
      "Al Poder Ejecutivo, Ministerio de Seguridad y Justicia, que vería con agrado suscriba un convenio con el Registro Nacional de Datos Genéticos, para posibilitar su utilización por parte del fuero y los ministerios públicos provinciales.",
  },
  {
    numero: "PI1389/2024",
    fecha: "10-10-2024",
    estado: "ingresado",
    area: "Salud",
    tema: "medicina de emergencia",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1389&a=2024",
    resumen:
      "Al Poder Ejecutivo, Ministerio de Salud, referido al Sistema Integral de Atención Rionegrina de Medicina de Emergencias -SIARME-.",
  },
  {
    numero: "PC1208/2024",
    fecha: "12-09-2024",
    estado: "ingresado",
    area: "Asuntos económicos",
    tema: "eliminación de tasas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1208&a=2024",
    resumen:
      "Al Poder Ejecutivo, que arbitre los medios necesarios para que el Ministerio de Hacienda, a través de la Agencia de Recaudación Tributaria, derogue todo régimen de percepción de tributos o tasas provinciales que se apliquen y/o trasladen con la facturación realizada por bienes o servicios, y sea ajeno a la naturaleza de los mismos.",
  },
  {
    numero: "PC1131/2024",
    fecha: "28-08-2024",
    estado: "aprobado",
    area: "Asuntos económicos",
    tema: "eliminación IIBB",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1042&a=2024",
    resumen:
      "Al Poder Ejecutivo, que arbitre los medios necesarios para que la Agencia de Recaudación Tributaria derogue todo régimen de retención del Impuesto sobre los Ingresos Brutos que resulte aplicable a los pagos realizados a los contribuyentes por parte de los sistemas de administración de tarjetas de crédito, de compra y/o pago y/o débito, y/o de servicios electrónicos de pagos y/o cobranzas por cuenta y orden de terceros, desde el 1 de septiembre de 2024.",
  },
  {
    numero: "PL1042/2024",
    fecha: "14-08-2024",
    estado: "aprobado",
    area: "Asuntos económicos",
    tema: "blanqueo de activos",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=1042&a=2024",
    resumen:
      "Se adhiere al Régimen de regularización de Activos no registrados, establecido en el Título II de la ley nacional nº 27743. Busca mejorar la base tributaria y potenciar la reactivación económica. El proyecto que finalmente fue aprobado pertenece al PE, es similar en el objetivo y no requirió debate en segunda vuelta.",
  },
  {
    numero: "PI996/2024",
    fecha: " 08-08-2024",
    estado: "tratado",
    area: "Asuntos económicos",
    tema: "gasoducto patagónico",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=996&a=2024",
    resumen:
      "Al Poder Ejecutivo, referido a las obras de ampliación de la capacidad de transporte del Gasoducto Patagónico.",
  },
  {
    numero: "PL950/2024",
    fecha: "01-08-2024",
    estado: "ingresado",
    area: "Administración-Estado",
    tema: "Información pública",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=950&a=2024",
    resumen:
      "Garantizar el libre acceso a las respuestas de los pedidos de informe, colaborando con la buscada “despapelización” y con la transformación digital y la simplificación de trámites.",
  },
  {
    numero: "PL869/2024",
    fecha: "10-07-2024",
    estado: "ingresado",
    area: "Administración-Estado",
    tema: "Información pública",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=869&a=2024",
    resumen:
      'Sustituye los artículos 2º y 18 de la ley A nº 2938 -Procedimiento Administrativo de Río Negro. En concordancia con la Ley Bases, adecua el procedimiento adminstrativo, evitando la sobregarga burocrática, e implementa el "silencio positivo", que permite obtener resultados efectivos de los trámites frente a la pasividad del Estado.',
  },
  {
    numero: "PL773/2024",
    fecha: "19-06-2024",
    estado: "ingresado",
    area: "Seguridad - Justicia",
    tema: "reiterancia delictiva",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=773&a=2024",
    resumen:
      'Incorpora los conceptos de "reiterancia delictiva" y "peligrosidad procesal" a la ley P nº 5020 -Código Procesal Penal, ',
  },
  {
    numero: "PC772/2024",
    fecha: "19-06-2024",
    estado: "ingresado",
    area: "Educación-Cultura-Soberanía",
    tema: "nuestras banderas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=772&a=2024",
    resumen:
      "Su enérgico repudio a la realización de cualquier acto de Promesa de Lealtad a una bandera distinta de la Bandera Nacional en las escuelas",
  },
  {
    numero: "PC771/2024",
    fecha: "19-06-2024",
    estado: "ingresado",
    area: "Educación-Cultura-Soberanía",
    tema: "nuestras banderas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=771&a=2024",
    resumen:
      "Al Poder Ejecutivo, Ministerio de Educación y Derechos Humanos, que prohíba la celebración de cualquier acto de promesa a banderas distintas de la Bandera Argentina",
  },
  {
    numero: "PC758/2024",
    fecha: "18-06-2024",
    estado: "ingresado",
    area: "Educación-Obras públicas",
    tema: "escuelas públicas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=758&a=2024",
    resumen:
      "Al Poder Ejecutivo y al Ministerio de Educación y Derechos Humanos, que realicen con urgencia las tareas de mantenimiento necesarias para poner en funcionamiento las calderas de la Escuela Secundaria Río Negro -ESRN- nº 46 de San Carlos de Bariloche; y al Ministerio de Obras y Servicios Públicos, que inicie las obras de ampliación y refacción de los sanitarios de ese establecimiento",
  },
  {
    numero: "PC757/2024",
    fecha: "18-06-2024",
    estado: "ingresado",
    area: "Seguridad",
    tema: "fin a sumarios policías",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=757&a=2024",
    resumen:
      "Al Poder Ejecutivo, al Ministerio de Seguridad y Justicia y a la Policía de Río Negro, que concluya los sumarios administrativos iniciados a efectivos policiales en noviembre y diciembre de 2023",
  },
  {
    numero: "PI753/2024",
    fecha: "18-06-2024",
    estado: "tratado",
    area: "Educación-Obras públicas",
    tema: "escuelas públicas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=753&a=2024",
    resumen:
      "Al Poder Ejecutivo, Ministerio de Educación y Derechos Humanos, referido a la reparación de la caldera de la Escuela Secundaria Río Negro -ESRN- nº 46 de la ciudad de San Carlos de Bariloche",
  },
  {
    numero: "PI752/2024",
    fecha: "18-06-2024",
    estado: "tratado",
    area: "Educación-Obras públicas",
    tema: "escuelas públicas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=752&a=2024",
    resumen:
      "Al Poder Ejecutivo, Ministerio de Obras y Servicios Públicos, referido a la licitación para la refacción y ampliación de los sanitarios de la Escuela Secundaria Río Negro -ESRN- nº 46 de la ciudad de San Carlos de Bariloche",
  },
  {
    numero: "PI751/2024",
    fecha: "18-06-2024",
    estado: "tratado",
    area: "Economía-Finanzas",
    tema: "gasto público",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=751&a=2024",
    resumen:
      "Al Poder Ejecutivo, referido a los bienes muebles de la provincia, compras efectuadas durante el período 2020-2024 y contrataciones realizadas, entre otros",
  },
  {
    numero: "PL695/2024",
    fecha: "06-06-2024",
    estado: "ingresado",
    area: "Cultura-Educación-Seguridad Interior",
    tema: "nuestras banderas",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=695&a=2024",
    resumen:
      '"Nuestras Banderas". Establece que las únicas y exclusivas banderas que están autorizadas a ser exhibidas y flamear en todos los edificios públicos de la Provincia de Río Negro son las banderas nacional y provincial, y la bandera municipal en caso de existir',
  },
  {
    numero: "PI451/2024",
    fecha: "23-04-2024",
    estado: "tratado",
    area: "Medio Ambiente",
    tema: "contaminación lago",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=451&a=2024",
    resumen:
      "Al Poder Ejecutivo, Secretaría de Energía y Ambiente, Departamento Provincial de Aguas -DPA-, referido a la periodicidad con la que monitorean la calidad del agua del lago Nahuel Huapi y resultados físico-químicos y bacteriológicos del espejo de agua, avance de Plan Director Cloacal, ruidos y olores molestos, astreintes judiciales",
  },
  {
    numero: "PI449/2024",
    fecha: "23-04-2024",
    estado: "tratado",
    area: "Educación-Obras públicas",
    tema: "escuela oeste bariloche",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=449&a=2024",
    resumen:
      "Al Poder Ejecutivo, Ministerio de Educación y Derechos Humanos, referido a los fondos de la partida asignada en el Presupuesto 2023 destinada a la creación de una Escuela Secundaria Río Negro -ESRN- en el predio de la Escuela Primaria nº 48 de la ciudad de San Carlos de Bariloche",
  },
  {
    numero: "PL447/2024",
    fecha: "23-04-2024",
    estado: "ingresado",
    area: "Salud",
    tema: "no más cautivos IPROSS",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=447&a=2024",
    resumen:
      "Libre elección de Obras Sociales para empleados públicos. Modifica la ley K nº 2753 -Instituto Provincial del Seguro de Salud -IProSS",
  },
  {
    numero: "PC446/2024",
    fecha: "23-04-2024",
    estado: "aprobado",
    area: "Economía - Agro",
    tema: "protección agro",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=446&a=2024",
    resumen:
      "Al Poder Ejecutivo, que vería con agrado se dirija a los Poderes Ejecutivo y Legislativo Nacional a fin de solicitarles la adhesión de la República Argentina al Convenio Internacional para la Protección de las Obtenciones Vegetales -UPOV- Acta 1991",
  },
  {
    numero: "PL357/2024",
    fecha: "05-04-2024",
    estado: "ingresado",
    area: "Administración-Estado",
    tema: "Información pública",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=357&a=2024",
    resumen:
      'Incorpora el artículo 99 "Título IX-Acceso Público Permanente" y modifica el inciso c- del artículo 85 de la ley H nº 3186 de Administración Financiera y Control Interno del Sector Público Provincial',
  },
  {
    numero: "PC356/2024",
    fecha: "05-04-2024",
    estado: "ingresado",
    area: "Educación",
    tema: "escuela oeste bariloche",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=356&a=2024",
    resumen:
      "Al Ministerio de Educación y Derechos Humanos, la necesidad de asignar un Código Único Escolar -CUE- para la escuela secundaria cuya construcción está prevista en el km. 20 de la Avenida Ezequiel Bustillo de la ciudad de San Carlos de Bariloche",
  },
  {
    numero: "PC244/2024",
    fecha: "12-03-2024",
    estado: "aprobado",
    area: "Seguridad",
    tema: "cuidar a roca",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=244&a=2024",
    resumen:
      "Al Ministerio de Seguridad y Justicia, la necesidad de realizar las gestiones necesarias con la Municipalidad de la ciudad de San Carlos de Bariloche y su Centro de Monitoreo, para la protección del monumento de Julio Argentino Roca ubicado en el Centro Cívico de esa ciudad",
  },
  {
    numero: "PD230/2024",
    fecha: "08-03-2024",
    estado: "ingresado",
    area: "Seguridad",
    tema: "cuidar a roca",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=230&a=2024",
    resumen:
      "Su enérgico repudio a los hechos de vandalismo ocurridos el 7 de marzo de 2024 sobre el monumento de Julio Argentino Roca en el Centro Cívico de la ciudad de San Carlos de Bariloche",
  },
  {
    numero: "PL211/2024",
    fecha: "06-03-2024",
    estado: "ingresado",
    area: "Justicia",
    tema: "Información pública",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=211&a=2024",
    resumen:
      "Garantiza a los ciudadanos que acudan a las Comisarías de la Policía de la Provincia de Río Negro, el debido acceso a la información atinente a sus derechos y garantías",
  },
  {
    numero: "PL196/2024",
    fecha: "06-03-2024",
    estado: "ingresado",
    area: "Medio Ambiente",
    tema: "reducción de plásticos",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=196&a=2024",
    resumen: "Ley de Reducción de Plásticos de único uso",
  },
  {
    numero: "PL115/2024",
    fecha: "19-02-2024",
    estado: "ingresado",
    area: "Economía-Defensa del Consumidor",
    tema: "responsabilidad fiscal",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=115&a=2024",
    resumen:
      "Transparencia Fiscal al Consumidor. Establece la obligatoriedad de indicar dentro de las facturas o tickets de compra que recibe el consumidor, los impuestos provinciales incluidos en ellos. En el caso excepcional de imposibilidad de desglose, se indicará el porcentaje aproximado de incidencia sobre el precio final",
  },
  {
    numero: "PC72/2024",
    fecha: "07-02-2024",
    estado: "aprobado",
    area: "Relaciones Internacionales",
    tema: "paso cardenal samoré",
    enlace:
      "https://web.legisrn.gov.ar/legislativa/proyectos/ver?c=P&n=72&a=2024",
    resumen: "Extensión horaria del Paso Cardenal Samoré en verano",
  },
];

const destacados = proyectosPropios.filter(
  (proyecto) =>
    proyecto.tema.includes("reiterancia") ||
    proyecto.tema.includes("cautivos") ||
    proyecto.resumen.includes("Plásticos")
);

document.addEventListener("DOMContentLoaded", () => {
  imprimirProyectos(proyectosPropios);
  imprimirDestacados();
  imprimirEstado()
});

// estado de proyectos
function imprimirEstado() { 
const $estado = document.querySelector(".proyectos_estado");

const aprobados = proyectosPropios.filter(
  (proy) => proy.estado === "aprobado"
);
const rechazados = proyectosPropios.filter(
  (proy) => proy.estado === "rechazado"
);
const tratados = proyectosPropios.filter(
  (proy) => proy.estado === "tratado"
);
const pendientes = proyectosPropios.filter(
  (proy) => proy.estado === "ingresado"
);

$estado.querySelector(".aprobados .num").textContent = aprobados.length;
$estado.querySelector(".rechazados .num").textContent = rechazados.length;
$estado.querySelector(".tratados .num").textContent = tratados.length;
$estado.querySelector(".pendientes .num").textContent = pendientes.length;

}

// FUNCIONES
const contenedorProyectos = document.querySelector(".proyectos_propios");

function imprimirProyectos(listado) {
  contenedorProyectos.innerHTML = "";
  let mostrar = listado.length > 8 ? 8 : listado.length;

  let i = 0;
  while (i < mostrar) {
    let color = "";
    switch (listado[i].estado) {
      case "tratado":
        color = "tratado";

        break;
      case "aprobado":
        color = "aprobado";
        break;
      case "rechazado":
        color = "rechazado";
        break;
      case "ingresado":
        color = "ingresado";
        break;
      default:
        break;
    }

    const card = document.createElement("div");
    card.classList.add("registro");
    card.setAttribute("id", listado[i].numero);
    card.innerHTML = `
        <div class="data">
            <p class="area">${listado[i].area}</p>
            <p class="tema">${listado[i].tema}</p>
        </div>
        <div class="data">
            <div class="tags">
                <p class="numero">${listado[i].numero}  <a href="${listado[i].enlace}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                <p class="fecha">${listado[i].fecha}</p>
                <p class="avance ${color}">${listado[i].estado}</p>
            </div>
            <div class="resumen">
                <p>${listado[i].resumen}</p>  
            </div>
        </div>
        `;

    i++;
    contenedorProyectos.appendChild(card);
  }

  if (listado.length > 8) {

    const mostrarMas = document.createElement("p");
    mostrarMas.textContent = "Mostrar más";
    mostrarMas.classList.add("ancor");
    contenedorProyectos.appendChild(mostrarMas);

    mostrarMas.addEventListener("click", () => {
      mostrarMas.remove();
      mostrarMasProyectos(listado);
    });
  }

  const countProyectos = listado.length;
  document.querySelector("#countProyectos").textContent = countProyectos;
}

function mostrarTodo() {
  imprimirProyectos(proyectosPropios);
  const mostrarMas = contenedorProyectos.querySelector(".ancor");
  mostrarMas.remove();
  mostrarMasProyectos(proyectosPropios);
}

function mostrarMasProyectos(listado) {
  let i = 8;
  while (i < listado.length) {
    let color = "";
    switch (listado[i].estado) {
      case "tratado":
        color = "tratado";

        break;
      case "aprobado":
        color = "aprobado";
        break;
      case "rechazado":
        color = "rechazado";
        break;
      case "ingresado":
        color = "ingresado";
        break;
      default:
        break;
    }

    const card = document.createElement("div");
    card.classList.add("registro");
    card.setAttribute("id", listado[i].numero);
    card.innerHTML = `
        <div class="data">
            <p class="area">${listado[i].area}</p>
            <p class="tema">${listado[i].tema}</p>
        </div>
        <div class="data">
            <div class="tags">
                <p class="numero">${listado[i].numero}  <a href="${listado[i].enlace}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                <p class="fecha">${listado[i].fecha}</p>
                <p class="avance ${color}">${listado[i].estado}</p>
            </div>
            <div class="resumen">
                <p>${listado[i].resumen}</p>  
            </div>
        </div>
        `;

    i++;
    contenedorProyectos.appendChild(card);
  }
  const mostrarMenos = document.createElement("p");
  mostrarMenos.textContent = "Mostrar menos";
  mostrarMenos.classList.add("ancor");
  contenedorProyectos.appendChild(mostrarMenos);

  mostrarMenos.addEventListener("click", () => {
    mostrarMenos.remove();
    mostrarMenosProyectos(listado);
  });
}

function mostrarMenosProyectos(listado) {
  let i = listado.length;

  while (i > 8) {
    contenedorProyectos.lastChild.remove();
    i--;
  }

  const mostrarMas = document.createElement("p");
  mostrarMas.textContent = "Mostrar más";
  mostrarMas.classList.add("ancor");
  contenedorProyectos.appendChild(mostrarMas);
  contenedorProyectos.scrollIntoView({ behavior: "smooth" });

  mostrarMas.addEventListener("click", () => {
    mostrarMas.remove();
    mostrarMasProyectos(listado);
  });
}

function imprimirDestacados() {
  for (let i = 0; i < destacados.length; i++) {
    document.querySelector(`#card_${i + 1} .card__numero`).innerText =
      destacados[i].numero;
    document.querySelector(`#card_${i + 1} .card__titulo`).innerText =
      destacados[i].tema;
    document.querySelector(`#card_${i + 1} .area`).innerText =
      destacados[i].area;
    document.querySelector(`#card_${i + 1} .fecha`).innerText =
      destacados[i].fecha;
    document.querySelector(`#card_${i + 1} .texto`).innerText =
      destacados[i].resumen;
    document.querySelector(`#card_${i + 1} .estado`).innerText =
      destacados[i].estado;
  }
}

// BUSCADOR
/* meses */
const search_meses = document.querySelectorAll("#meses input[type='radio']");
search_meses.forEach(mes => {
  mes.addEventListener("change", () => {
    console.log(mes.value);
    if (mes.value === "All") {
      imprimirProyectos(proyectosPropios);
    } else {
      const mesesFiltrados = proyectosPropios.filter(
        (proy) => proy.fecha.split('-')[1] === mes.value
      );
      if(mesesFiltrados.length === 0){
        const alert = document.createElement('i')
        alert.textContent = 'No hay proyectos este mes';
        contenedorProyectos.innerHTML = '';
        contenedorProyectos.appendChild(alert)
      } else {
     imprimirProyectos(mesesFiltrados);
      console.log(mesesFiltrados); 
    }
  }
  });
});