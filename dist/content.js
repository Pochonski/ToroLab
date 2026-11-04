// Revisión editorial: 3 de noviembre de 2026.
// Los niveles de atención son una propuesta de divulgación pendiente de revisión
// docente. No constituyen un instrumento clínico validado ni se agregan en un score.
export const SOURCES = [
  {
    id: 'netherton2022', label: 'Netherton et al., 2022',
    title: 'Seasonal variation in bull semen quality demonstrates there are heat-sensitive and heat-tolerant bulls',
    authors: 'J. K. Netherton, B. R. Robinson, R. A. Ogle, A. Gunn, A. I. S. B. Villaverde, K. Colyvas, C. Wise, T. Russo, A. Dowdell y M. A. Baker',
    year: 2022, url: 'https://doi.org/10.1038/s41598-022-17708-9',
    summary: 'Investigación original: la calidad seminal varió con la estación y la respuesta al calor difirió entre toros. No permite predecir la respuesta de un individuo con este cuestionario.'
  },
  {
    id: 'harrison2022', label: 'Harrison et al., 2022',
    title: 'The effects of differing nutritional levels and body condition score on scrotal circumference, motility, and morphology of bovine sperm',
    authors: 'T. D. Harrison, E. M. Chaney, K. J. Brandt, T. B. Ault-Seay, L. G. Schneider, L. G. Strickland, F. N. Schrick y K. J. McLean',
    year: 2022, url: 'https://doi.org/10.1093/tas/txac001',
    summary: 'Investigación original con 11 toros Angus: los tratamientos nutricionales se relacionaron con cambios de morfología y circunferencia escrotal; la motilidad no mostró efecto significativo. Sus resultados no son umbrales universales.'
  },
  {
    id: 'araya2024', label: 'Araya-Zúñiga et al., 2024',
    title: 'Kinematic and morphometric assessment of fresh semen, before, during and after mating period in Brahman bulls',
    authors: 'I. Araya-Zúñiga, F. Sevilla, R. Molina-Montero, E. R. S. Roldan, M. Barrientos-Morales, M. A. Silvestre y A. Valverde',
    year: 2024, url: 'https://doi.org/10.3390/ani14010132',
    summary: 'Investigación original en toros Brahman con sistemas CASA: se observaron variaciones cinemáticas y morfométricas durante el periodo de monta. Estar en monta no demuestra deterioro seminal.'
  },
  {
    id: 'nongbua2020', label: 'Nongbua et al., 2020',
    title: 'Effects of season and single layer centrifugation on bull sperm quality in Thailand',
    authors: 'T. Nongbua, A. Utta, N. Am-In, J. Suwimonteerabutr, A. Johannisson y J. M. Morrell',
    year: 2020, url: 'https://doi.org/10.5713/ajas.19.0624',
    summary: 'Investigación original que documenta distintas formas de cabeza, pieza intermedia y cola en espermatozoides bovinos. Los ejemplos de esta web son esquemas educativos, no muestras ni clasificaciones de aptitud.'
  },
  {
    id: 'morrell2020', label: 'Morrell, 2020',
    title: 'Heat stress and bull fertility', authors: 'J. M. Morrell',
    year: 2020, url: 'https://doi.org/10.1016/j.theriogenology.2020.05.014',
    summary: 'Revisión incluida en el Word: explica termorregulación testicular y estrés por calor. Complementa las investigaciones originales; no valida los colores de esta herramienta.'
  },
  {
    id: 'sevilla2025', label: 'Sevilla et al., 2025',
    title: 'Morphometric differences in sperm subpopulations in frozen-thawed semen of two bovine subspecies',
    authors: 'F. Sevilla, I. Araya-Zúñiga, M. A. Silvestre, J. Solís, M. Barrientos, C. Dahl-Corcini, L. Víquez y A. Valverde',
    year: 2025, url: 'https://doi.org/10.15359/ru.39-1.10',
    summary: 'Investigación original sobre diversidad morfométrica en semen descongelado de dos subespecies bovinas. Las diferencias entre grupos no clasifican la fertilidad de un toro por su raza.'
  },
  {
    id: 'valverde2021', label: 'Valverde, 2021',
    title: 'Importancia de la evaluación de la aptitud reproductiva mediante el análisis de semen por sistemas CASA',
    authors: 'A. Valverde Abarca', year: 2021,
    url: 'https://revistas.tec.ac.cr/index.php/investiga_tec/article/view/5616',
    summary: 'Divulgación del Instituto Tecnológico de Costa Rica sobre análisis seminal asistido por computadora. Los sistemas CASA ayudan a medir características del movimiento y otras variables de la muestra.'
  },
  {
    id: 'vergel2021', label: 'Vergel-Martínez y Vergel-Martínez, 2021',
    title: 'Factores que intervienen en la calidad seminal en bovinos reproductores del departamento del Cesar, Colombia',
    authors: 'G. D. Vergel-Martínez y B. Y. Vergel-Martínez', year: 2021,
    url: 'https://repositorio.udes.edu.co/handle/001/6962',
    summary: 'Trabajo de grado de la Universidad de Santander incluido en el documento base. Se conserva como contexto bibliográfico, sin convertir sus conclusiones en reglas clínicas.'
  },
  {
    id: 'unl2021', label: 'Wilke et al., 2021 · Nebraska',
    title: 'Breeding Bull Management: It’s a Year-Round Commitment (G2332)',
    authors: 'K. H. Wilke, K. L. McCarthy y H. Greenwell · University of Nebraska–Lincoln Extension',
    year: 2021, url: 'https://extensionpubs.unl.edu/publication/g2332/na/html/view',
    summary: 'Guía universitaria original de manejo: aborda alimentación, sombra, agua, observación de la monta y evaluación reproductiva profesional.'
  },
  {
    id: 'mu2026', label: 'Thomas · Missouri Extension',
    title: 'Determining Reproductive Fertility in Herd Bulls (G2011)',
    authors: 'J. Thomas · University of Missouri Extension; autores originales D. Patterson y G. Perry',
    year: 2026, url: 'https://extension.missouri.edu/publications/g2011',
    summary: 'Guía universitaria revisada en julio de 2026: integra historia, examen físico y semen; explica que enfermedad, fiebre o lesiones pueden afectar la reproducción. El desempeño del hato tiene múltiples causas.'
  },
  {
    id: 'muVacc2025', label: 'Payne y Morris, 2025 · Missouri',
    title: 'Vaccination Program for a Cow-Calf Operation',
    authors: 'C. A. Payne y C. Morris · University of Missouri Extension',
    year: 2025, url: 'https://extension.missouri.edu/publications/g2104',
    summary: 'Guía veterinaria para programas de vacunación en hatos de cría, incluidos toros reproductores. Las vacunas apropiadas dependen del riesgo y deben acordarse con el veterinario; la vacunación no evalúa la calidad seminal.'
  },
  {
    id: 'muInbreed2021', label: 'Vogt et al., 2021 · Missouri',
    title: 'Inbreeding: Its Meaning, Uses and Effects on Farm Animals',
    authors: 'D. Vogt, H. A. Swartz y J. Massey · University of Missouri Extension',
    year: 2021, url: 'https://extension.missouri.edu/publications/g2911',
    summary: 'Guía universitaria sobre apareamientos entre animales emparentados; describe el cruce padre–hija y los posibles efectos de consanguinidad en la descendencia. Ese antecedente de manejo no informa sobre el semen del toro.'
  },
  {
    id: 'msu2019', label: 'Van Emon et al., 2019 · Montana',
    title: 'Bull Breeding Soundness Evaluation (MT201901AG)',
    authors: 'M. Van Emon, C. Buck y M. Hammond · Montana State University Extension',
    year: 2019, url: 'https://extension-store.montana.edu/montguides/bull-breeding-soundness-evaluation',
    summary: 'Guía universitaria sobre evaluación veterinaria: combina examen físico, reproductivo y seminal. Describe un momento del animal y no garantiza tasas de concepción ni evalúa por sí sola la libido.'
  }
];

export const FACTORS = [
  {
    id: 'ambiente', icon: 'sun', title: 'Ambiente',
    short: 'Calor, sombra y agua',
    description: 'La sombra y el agua ayudan al toro a regular su temperatura. La exposición al calor puede relacionarse con cambios posteriores en el semen, pero cada animal responde de manera diferente.',
    technical: 'Los testículos necesitan mantener una temperatura apropiada para producir espermatozoides. La respuesta al calor depende del animal y de las condiciones de exposición; una temperatura ambiental aislada no permite diagnosticar una alteración. Los cambios pueden aparecer después de la exposición.',
    sourceIds: ['netherton2022', 'unl2021', 'morrell2020']
  },
  {
    id: 'nutricion', icon: 'leaf', title: 'Nutrición',
    short: 'Alimentación y condición corporal',
    description: 'Observe la disponibilidad de alimento, los cambios de dieta y la condición corporal. Alimentar más no siempre significa alimentar mejor: las necesidades cambian con el crecimiento y la actividad.',
    technical: 'Harrison y colaboradores estudiaron diferentes niveles de alimentación en 11 toros Angus. Encontraron cambios en morfología y circunferencia escrotal, sin efecto significativo sobre motilidad. Esto apoya revisar la nutrición, pero no permite calcular la calidad del semen a partir del aspecto del toro.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'salud', icon: 'heart', title: 'Salud',
    short: 'Antecedentes, signos y vacunas',
    description: 'Los antecedentes de fiebre o enfermedad, el movimiento, los ojos, los cambios visibles en la zona reproductiva y las vacunas son información útil para el profesional. Observar al toro por fuera no reemplaza el examen.',
    technical: 'La evaluación andrológica integra antecedentes, estado físico y aparato reproductor, junto con el análisis seminal cuando corresponde. Enfermedad y fiebre pueden relacionarse con cambios en el semen; lesiones y problemas de visión pueden dificultar el desplazamiento o la monta. Las vacunas necesarias dependen del riesgo y del programa acordado con el veterinario para cada finca.',
    sourceIds: ['mu2026', 'msu2019', 'muVacc2025']
  },
  {
    id: 'reproductor', icon: 'bull', title: 'El reproductor',
    short: 'Historia y respuesta individual',
    description: 'Cada toro tiene su propia historia. La edad, la raza y la apariencia ayudan a describirlo, pero no permiten asignarle una calidad seminal. Conozca sus evaluaciones y el seguimiento indicado.',
    technical: 'Existen diferencias individuales frente al calor y diversidad en las subpoblaciones espermáticas. Los resultados obtenidos en una raza o subespecie no determinan el estado de un individuo. Una evaluación profesional informa sobre un momento y puede requerir repetición según el caso.',
    sourceIds: ['netherton2022', 'sevilla2025', 'msu2019']
  },
  {
    id: 'manejo', icon: 'calendar', title: 'Manejo reproductivo',
    short: 'Monta, registros y parentesco',
    description: 'Durante la monta, observe cómo se mueve y sirve el toro, y registre lo que ocurre en el hato. Revise también el parentesco de las hembras destinadas a ese reproductor. Estos datos de manejo no permiten evaluar su semen.',
    technical: 'Un estudio con toros Brahman detectó variaciones cinemáticas y morfométricas entre momentos del periodo de monta, sin demostrar que toda actividad reproductiva deteriore el semen. Los sistemas CASA miden trayectorias y velocidades; sus resultados requieren protocolos y una interpretación profesional. El cruce padre–hija es un asunto de consanguinidad de la descendencia, separado de la calidad seminal del reproductor.',
    sourceIds: ['araya2024', 'valverde2021', 'unl2021', 'mu2026', 'muInbreed2021']
  }
];

const unknownOption = () => ({ value: 'unknown', label: 'No sé', status: 'unknown', explanation: 'No hay información suficiente para interpretar esta condición.', recommendation: 'Observe o consulte los registros y, si sigue la duda, converse con el profesional. No es necesario adivinar la respuesta.' });

export const QUESTIONS = [
  {
    id: 'sombra', group: 'ambiente', title: '¿El toro puede usar sombra durante las horas de mayor calor?',
    hint: 'Piense en el potrero o corral donde permanece habitualmente.',
    options: [
      { value: 'always', label: 'Sí, tiene sombra disponible', status: 'adequate', explanation: 'Según lo declarado, hay sombra disponible. Esto describe el manejo de este aspecto; no demuestra que el semen esté normal.', recommendation: 'Mantenga la sombra accesible y observe que el toro realmente pueda utilizarla.' },
      { value: 'sometimes', label: 'Solo en algunos momentos', status: 'attention' },
      { value: 'never', label: 'No tiene sombra disponible', status: 'attention' },
      unknownOption()
    ],
    explanation: 'Una disponibilidad limitada de sombra merece revisión como medida de manejo frente al calor. La respuesta seminal no puede deducirse de esta observación.',
    recommendation: 'Revise dónde puede refugiarse durante el calor y consulte opciones de sombra apropiadas para la finca.',
    sourceIds: ['unl2021', 'netherton2022']
  },
  {
    id: 'agua', group: 'ambiente', title: '¿Tiene acceso continuo a agua limpia para beber?',
    hint: 'Incluya fallas del bebedero, acceso bloqueado o interrupciones del suministro.',
    options: [
      { value: 'continuous', label: 'Sí, el acceso es continuo', status: 'adequate', explanation: 'Se declara acceso continuo a agua. Este resultado solo describe la disponibilidad de agua y no evalúa el semen.', recommendation: 'Siga comprobando el suministro, el funcionamiento y la limpieza del bebedero.' },
      { value: 'interrupted', label: 'A veces se interrumpe el acceso', status: 'attention' },
      { value: 'unavailable', label: 'Actualmente no tiene acceso', status: 'priority', recommendation: 'Restablezca el acceso a agua limpia y revise la causa de la interrupción. Si observa al animal enfermo o decaído, consulte al profesional.' },
      unknownOption()
    ],
    explanation: 'La disponibilidad de agua es una necesidad de manejo y ayuda a enfrentar el calor. El nivel de atención propuesto no representa una predicción de calidad seminal.',
    recommendation: 'Revise y corrija las interrupciones del suministro y asegure que el toro pueda alcanzar el bebedero.',
    sourceIds: ['unl2021']
  },
  {
    id: 'calor', group: 'ambiente', title: 'En los últimos dos meses, ¿ha pasado varios días de mucho calor sin poder refugiarse?',
    hint: 'Los dos meses son un marco para recordar lo observado, no un límite diagnóstico.',
    options: [
      { value: 'yes', label: 'Sí, he observado esa situación', status: 'attention' },
      { value: 'no', label: 'No he observado esa situación', status: 'adequate', explanation: 'No se declara esa exposición. La ausencia de esta observación no descarta otros factores ni confirma calidad seminal normal.', recommendation: 'Continúe observando las condiciones del ambiente y mantenga disponibles sombra y agua.' },
      unknownOption()
    ],
    explanation: 'Se declara una exposición al calor que conviene revisar. Los estudios muestran diferencias entre animales y posibles cambios posteriores; no se puede determinar el efecto en este toro con la respuesta.',
    recommendation: 'Revise sombra, agua y horarios de manejo. Comente la exposición con el profesional al solicitar una evaluación.',
    sourceIds: ['netherton2022', 'unl2021']
  },
  {
    id: 'alimento', group: 'nutricion', title: '¿Ha faltado alimento o forraje de forma repetida durante los últimos dos meses?',
    hint: 'Se pregunta por disponibilidad; la cantidad necesaria debe valorarse según el animal y la finca.',
    options: [
      { value: 'yes', label: 'Sí, ha faltado repetidamente', status: 'attention' },
      { value: 'no', label: 'No, ha habido alimento disponible', status: 'adequate', explanation: 'Se declara disponibilidad de alimento. Eso no confirma que la dieta cubra todas sus necesidades ni informa sobre la calidad seminal.', recommendation: 'Revise periódicamente la calidad de la dieta y las necesidades del toro con apoyo técnico.' },
      unknownOption()
    ],
    explanation: 'Las interrupciones de alimento justifican revisar la nutrición. No se puede estimar su efecto seminal a partir de esta respuesta.',
    recommendation: 'Revise las reservas de forraje y solicite orientación para una alimentación ajustada al reproductor.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'condicion', group: 'nutricion', title: 'En los últimos dos meses, ¿ha observado pérdida marcada de condición o exceso de grasa?',
    hint: 'Es una observación general. No sustituye la valoración de condición corporal por una persona capacitada.',
    options: [
      { value: 'loss', label: 'Ha perdido condición de forma marcada', status: 'attention' },
      { value: 'excess', label: 'Observo exceso de grasa', status: 'attention' },
      { value: 'neither', label: 'No he observado ninguna de las dos', status: 'adequate', explanation: 'No se declara ninguno de estos cambios. La observación externa no determina la condición corporal exacta ni la calidad del semen.', recommendation: 'Mantenga el seguimiento y solicite una valoración de condición corporal cuando corresponda.' },
      unknownOption()
    ],
    explanation: 'La pérdida de condición o el exceso de grasa son motivos para revisar la dieta y el estado del animal; no son un diagnóstico seminal.',
    recommendation: 'Solicite una valoración de condición corporal y de la alimentación antes de realizar ajustes importantes.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'dieta', group: 'nutricion', title: '¿La dieta cambió de forma importante y sin una transición planificada en los últimos dos meses?',
    hint: 'Por ejemplo, un cambio grande de alimento, suplementación o disponibilidad de pasto.',
    options: [
      { value: 'abrupt', label: 'Sí, hubo un cambio sin planificación', status: 'attention' },
      { value: 'planned', label: 'Cambió con una transición planificada', status: 'context', explanation: 'Se declara un cambio planificado. Es un dato de contexto; esta herramienta no comprueba la adecuación de la dieta ni su efecto sobre el semen.', recommendation: 'Revise la respuesta del animal y siga el plan de alimentación con apoyo técnico.' },
      { value: 'stable', label: 'No hubo un cambio importante', status: 'context', explanation: 'No se declara un cambio importante. Una dieta estable también necesita revisión de calidad y cantidad.', recommendation: 'Conserve los registros de alimentación y observe la condición corporal.' },
      unknownOption()
    ],
    explanation: 'Un cambio de alimentación sin planificación invita a revisar el manejo nutricional. No todo cambio dietético es perjudicial y el cuestionario no determina una alteración seminal.',
    recommendation: 'Revise el cambio con quien asesora la nutrición de la finca y evite ajustes grandes sin valorar las necesidades del toro.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'fiebre', group: 'salud', title: 'En los últimos dos meses, ¿ha tenido fiebre o una enfermedad atendida por un profesional?',
    hint: 'Tome en cuenta lo observado, los registros y lo indicado por un profesional. Si tiene dudas, elija «No sé».',
    options: [
      { value: 'yes', label: 'Sí, hay ese antecedente', status: 'priority' },
      { value: 'no', label: 'No hay un antecedente conocido', status: 'adequate', explanation: 'No se declara ese antecedente. Esto no descarta una enfermedad ni confirma la calidad del semen.', recommendation: 'Conserve el registro sanitario y consulte si aparecen cambios en el estado o desempeño del toro.' },
      unknownOption()
    ],
    explanation: 'El antecedente de fiebre o enfermedad merece seguimiento profesional por su posible relación con la reproducción. No prueba que el semen esté alterado.',
    recommendation: 'Comente el antecedente, sus fechas y el tratamiento recibido con el profesional; él decidirá si se necesita evaluación o seguimiento.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'lesiones', group: 'salud', title: '¿Observa actualmente cojera, dolor al moverse o una lesión que dificulte caminar?',
    hint: 'Observe desde una distancia segura. No intente manipular al toro para responder.',
    options: [
      { value: 'yes', label: 'Sí, observo alguno de estos signos', status: 'priority' },
      { value: 'no', label: 'No he observado estos signos', status: 'adequate', explanation: 'No se declaran estos signos visibles. Algunas alteraciones solo se detectan mediante examen profesional.', recommendation: 'Continúe observando el movimiento y el estado general desde una distancia segura.' },
      unknownOption()
    ],
    explanation: 'Estos signos pueden interferir con el bienestar o la capacidad de monta y requieren una valoración. Su presencia no permite conocer la calidad seminal.',
    recommendation: 'Solicite valoración veterinaria del signo observado. Evite forzar el servicio o manipular al toro para responder.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'zona-reproductiva', group: 'salud', title: '¿Ha observado hinchazón, heridas o secreción en el escroto o el prepucio?',
    hint: 'Observe desde una distancia segura; no toque ni examine al toro para responder.',
    options: [
      { value: 'yes', label: 'Sí, he observado alguno de estos cambios', status: 'priority' },
      { value: 'no', label: 'No he observado esos cambios', status: 'adequate', explanation: 'No se declaran cambios visibles en estas zonas. Eso no descarta alteraciones que solo detecta un examen profesional ni demuestra calidad seminal normal.', recommendation: 'Continúe observando de forma segura y comunique cualquier cambio al veterinario.' },
      unknownOption()
    ],
    explanation: 'Los cambios visibles en el escroto o el prepucio ameritan valoración profesional. La causa y su posible relación con la reproducción no pueden determinarse con esta respuesta.',
    recommendation: 'Solicite valoración veterinaria y describa lo que observó; evite manipular la zona para comprobarlo.',
    sourceIds: ['msu2019', 'unl2021']
  },
  {
    id: 'vision', group: 'salud', title: '¿Ha notado dificultad para ver o alguna lesión visible en los ojos del toro?',
    hint: 'Por ejemplo, si tropieza o presenta un cambio visible en los ojos. Observe desde una distancia segura.',
    options: [
      { value: 'yes', label: 'Sí, he observado esa dificultad o lesión', status: 'attention' },
      { value: 'no', label: 'No he observado dificultad ni lesión', status: 'adequate', explanation: 'No se declara un problema visible de visión. Esto no sustituye el examen físico ni informa sobre el semen.', recommendation: 'Mantenga la observación y comente cualquier cambio al profesional.' },
      unknownOption()
    ],
    explanation: 'La visión ayuda al toro a desplazarse y a encontrar las vacas. Una dificultad observada requiere revisión, pero no permite inferir la calidad de su semen.',
    recommendation: 'Comente la observación con el veterinario para que valore los ojos y la capacidad de desplazamiento.',
    sourceIds: ['msu2019', 'mu2026']
  },
  {
    id: 'vacunas', group: 'salud', title: '¿El toro cuenta con todas sus vacunas?',
    hint: '«Todas» se refiere a las vacunas indicadas por el veterinario para este toro y esta finca; no existe una lista universal.',
    options: [
      { value: 'yes', label: 'Sí, están al día según el plan veterinario', status: 'context', explanation: 'Se declara que recibió las vacunas indicadas para este toro. Es un dato de manejo; no confirma ausencia de enfermedad ni calidad seminal normal.', recommendation: 'Conserve el registro de vacunación y revise con el veterinario las próximas fechas.' },
      { value: 'no', label: 'No, hay vacunas indicadas pendientes', status: 'attention' },
      unknownOption()
    ],
    explanation: 'Una vacuna indicada pendiente es un punto de manejo sanitario para revisar. No demuestra una alteración del semen ni permite juzgar la protección del animal.',
    recommendation: 'Revise el registro con el veterinario y acuerde qué vacunas corresponden, sin aplicar un calendario universal.',
    sourceIds: ['muVacc2025', 'unl2021']
  },
  {
    id: 'edad', group: 'reproductor', title: '¿Cuál es la edad aproximada del toro?',
    hint: 'Los rangos solo describen la edad. No indican madurez, aptitud ni fertilidad.',
    options: [
      { value: 'under2', label: 'Menos de 2 años', status: 'context', explanation: 'Se registra una edad aproximada menor de 2 años como dato de contexto. Este rango no determina madurez ni calidad seminal.', recommendation: 'Conserve la fecha de nacimiento o la estimación disponible para compartirla durante la evaluación profesional.' },
      { value: '2to5', label: 'De 2 a 5 años', status: 'context', explanation: 'Se registra una edad aproximada de 2 a 5 años como dato de contexto. Este rango no indica aptitud reproductiva ni fertilidad.', recommendation: 'Conserve la fecha de nacimiento o la estimación disponible junto con los antecedentes individuales del toro.' },
      { value: 'over5', label: 'Más de 5 años', status: 'context', explanation: 'Se registra una edad aproximada mayor de 5 años como dato de contexto. Este rango no califica al reproductor ni informa sobre su semen.', recommendation: 'Comparta la edad estimada y los antecedentes individuales con el profesional, sin deducir un resultado a partir de la edad.' },
      unknownOption()
    ],
    explanation: 'La edad describe al reproductor. Las agrupaciones de esta pregunta son una decisión editorial, no puntos de corte derivados de los artículos ni criterios de diagnóstico.',
    recommendation: 'Registre la edad conocida o aproximada como parte de la historia individual; no la use para concluir si el toro es fértil o infértil.',
    sourceIds: ['msu2019', 'mu2026', 'netherton2022']
  },
  {
    id: 'evaluacion', group: 'reproductor', title: '¿Cuenta con una evaluación andrológica profesional para el periodo de monta actual o próximo?',
    hint: 'Una evaluación incluye más que mirar al toro o comprobar que monta.',
    options: [
      { value: 'yes', label: 'Sí, cuento con el informe', status: 'context', explanation: 'Disponer del informe aporta información individual. Describe el momento de la evaluación y no garantiza fertilidad futura ni reemplaza el seguimiento.', recommendation: 'Consulte el informe y siga las indicaciones del profesional, especialmente si el estado del toro ha cambiado.' },
      { value: 'older', label: 'Solo tengo una evaluación de otro periodo', status: 'attention' },
      { value: 'no', label: 'No cuento con una evaluación', status: 'attention' },
      unknownOption()
    ],
    explanation: 'Sin una evaluación aplicable al periodo, falta información profesional sobre este reproductor. La edad, la raza o la apariencia no la sustituyen.',
    recommendation: 'Planifique con el profesional una evaluación y lleve los antecedentes individuales del toro.',
    sourceIds: ['msu2019', 'mu2026']
  },
  {
    id: 'seguimiento', group: 'reproductor', title: '¿Hay una recomendación profesional de repetir una prueba o revisar un hallazgo que siga pendiente?',
    hint: 'Piense en indicaciones anteriores específicas de este toro; no en su edad o raza.',
    options: [
      { value: 'pending', label: 'Sí, sigue pendiente', status: 'priority' },
      { value: 'completed', label: 'La indicación ya fue atendida', status: 'context', explanation: 'Se declara que el seguimiento indicado fue atendido. Este dato no reemplaza el resultado de ese seguimiento.', recommendation: 'Conserve el informe y siga las nuevas indicaciones recibidas.' },
      { value: 'none', label: 'No conozco una indicación pendiente', status: 'context', explanation: 'No se declara una indicación pendiente. Esto no equivale a haber sido evaluado ni demuestra un estado seminal normal.', recommendation: 'Revise los antecedentes disponibles y compártalos durante la evaluación profesional.' },
      unknownOption()
    ],
    explanation: 'Existe un seguimiento profesional sin completar. La herramienta no reinterpreta el hallazgo ni reemplaza la prueba solicitada.',
    recommendation: 'Retome con el profesional la recomendación pendiente y acuerde cómo completarla.',
    sourceIds: ['msu2019']
  },
  {
    id: 'periodo', group: 'manejo', title: '¿En qué momento del periodo reproductivo se encuentra el toro?',
    hint: 'Esta respuesta describe el momento de manejo. Ninguna etapa determina por sí sola la calidad seminal.',
    options: [
      { value: 'before', label: 'Antes de iniciar la monta', status: 'context', explanation: 'Se registra que el toro está antes del periodo de monta. Es un dato para situar las observaciones, sin calificar su estado reproductivo.', recommendation: 'Anote el periodo previsto y comparta esa información junto con los antecedentes del toro durante la revisión profesional.' },
      { value: 'during', label: 'Durante la monta', status: 'context', explanation: 'Se registra que el toro está en monta. Esta etapa por sí sola no demuestra una alteración ni una condición favorable del semen.', recommendation: 'Sitúe en este periodo los registros de manejo y las observaciones del reproductor, sin convertirlos en un diagnóstico.' },
      { value: 'after', label: 'Después de terminar la monta', status: 'context', explanation: 'Se registra que terminó el periodo de monta. Esto describe el manejo y no permite concluir cómo está el semen.', recommendation: 'Conserve las fechas y observaciones del periodo para comentarlas con el profesional.' },
      { value: 'undefined', label: 'No hay un periodo de monta definido', status: 'context', explanation: 'Se registra que la finca no tiene un periodo de monta definido. Esta modalidad de manejo no genera una calificación del toro.', recommendation: 'Describa cómo se organiza la monta en la finca y comparta ese contexto al revisar los antecedentes reproductivos.' },
      unknownOption()
    ],
    explanation: 'El momento del periodo reproductivo ayuda a ubicar la historia y las observaciones del animal. Se registra como contexto, sin asignar calidad seminal ni aptitud.',
    recommendation: 'Guarde las fechas o la modalidad de manejo conocidas y consúltelas junto con los demás antecedentes individuales.',
    sourceIds: ['araya2024', 'unl2021']
  },
  {
    id: 'demanda', group: 'manejo', title: '¿Aumentó la demanda de monta sin revisar el plan de trabajo del toro?',
    hint: 'Por ejemplo, más vacas, más recorridos o un periodo más concentrado. No hay una proporción toro:vacas universal para este formulario.',
    options: [
      { value: 'unplanned', label: 'Sí, aumentó sin revisar el plan', status: 'attention' },
      { value: 'planned', label: 'Aumentó y se revisó el plan', status: 'context', explanation: 'La demanda se revisó según lo declarado. Estar en monta no implica por sí solo una alteración seminal.', recommendation: 'Continúe observando el servicio, el movimiento y la condición corporal durante el periodo.' },
      { value: 'same', label: 'No aumentó la demanda', status: 'context', explanation: 'No se declara un aumento. La demanda actual aún debe corresponder al animal y a las condiciones de la finca.', recommendation: 'Mantenga la observación y revise el plan si cambian las condiciones de monta.' },
      unknownOption()
    ],
    explanation: 'Un aumento sin planificación merece revisar el manejo. La actividad de monta no permite inferir una mala calidad seminal ni calcular la capacidad de servicio.',
    recommendation: 'Revise con apoyo profesional la demanda, el terreno, el estado individual del toro y la observación durante la monta.',
    sourceIds: ['unl2021', 'araya2024']
  },
  {
    id: 'monta', group: 'manejo', title: 'Durante la monta, ¿ha observado intentos repetidos sin lograr completar el servicio?',
    hint: 'Si el toro no está en monta, puede indicar «No está en monta».',
    options: [
      { value: 'difficulty', label: 'Sí, he observado esa dificultad', status: 'priority' },
      { value: 'none', label: 'No he observado esa dificultad', status: 'adequate', explanation: 'No se declara esa dificultad de servicio. Completar una monta no demuestra calidad seminal normal ni garantiza preñez.', recommendation: 'Siga observando el servicio desde una distancia segura y registre cambios.' },
      { value: 'inactive', label: 'No está en monta', status: 'context', explanation: 'La capacidad de servicio no se está observando en este momento. No se asigna una valoración de calidad seminal.', recommendation: 'Planifique la evaluación y la observación para el periodo reproductivo que corresponda.' },
      unknownOption()
    ],
    explanation: 'La dificultad de servicio necesita valoración de la capacidad de monta. Su causa no se determina mediante este formulario y puede ser distinta de una alteración del semen.',
    recommendation: 'Registre lo observado y solicite una revisión profesional del toro y de las condiciones de servicio.',
    sourceIds: ['mu2026', 'unl2021']
  },
  {
    id: 'hato', group: 'manejo', title: '¿Se repiten los celos o hay resultados de preñez que le preocupan en el grupo de vacas servido?',
    hint: 'Se pregunta por una preocupación del hato. No permite atribuir la causa al toro.',
    options: [
      { value: 'concern', label: 'Sí, hay una preocupación', status: 'attention' },
      { value: 'none', label: 'No he observado una preocupación', status: 'context', explanation: 'No se declara una preocupación del hato. Ese dato no evalúa por sí solo al reproductor ni su semen.', recommendation: 'Mantenga los registros y la revisión reproductiva del hato.' },
      { value: 'unmeasured', label: 'Aún no hay resultados del periodo', status: 'context', explanation: 'Todavía no hay resultados del periodo para revisar. No se considera una condición favorable ni desfavorable.', recommendation: 'Planifique con el profesional el seguimiento reproductivo del grupo.' },
      unknownOption()
    ],
    explanation: 'Un resultado preocupante del hato justifica una revisión integral. Puede relacionarse con las hembras, el toro, la nutrición, la sanidad o el manejo; no demuestra una causa seminal.',
    recommendation: 'Reúna los registros de servicios, celos y preñez y revíselos con el profesional junto con la evaluación de los animales.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'hijas', group: 'manejo', title: '¿Existen registros de que el reproductor haya sido utilizado para cubrir o inseminar a sus propias hijas?',
    hint: 'Revise la identificación de las hembras y los registros de monta o inseminación. Si no puede comprobar el parentesco, elija «No sé».',
    options: [
      { value: 'yes', label: 'Sí, los registros muestran ese uso', status: 'attention' },
      { value: 'no', label: 'No, los registros muestran que no ocurrió', status: 'context', explanation: 'Los registros disponibles no muestran ese cruce. Es un dato de planificación genética, no una evaluación del semen o de la fertilidad del toro.', recommendation: 'Mantenga identificados padres e hijas y revise el parentesco antes de asignar nuevos servicios.' },
      unknownOption()
    ],
    explanation: 'El cruce padre–hija es un apareamiento entre animales estrechamente emparentados. Merece revisar el plan genético por sus posibles efectos en la descendencia; no demuestra un problema de calidad seminal del toro.',
    recommendation: 'Revise los registros de parentesco y los próximos apareamientos con asesoría en reproducción o genética bovina.',
    sourceIds: ['muInbreed2021']
  }
];

export function evaluateAnswers(answers = {}) {
  return QUESTIONS.map(question => {
    const answer = question.options.find(option => option.value === answers[question.id]) ?? null;
    return { question, answer, status: answer?.status ?? 'unknown' };
  });
}
