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
    description: 'Observe la disponibilidad de alimento, los cambios de dieta y la pérdida de peso o condición corporal. Alimentar más no siempre significa alimentar mejor: las necesidades cambian con el crecimiento y la actividad.',
    technical: 'Harrison y colaboradores estudiaron diferentes niveles de alimentación en 11 toros Angus. Encontraron cambios en morfología y circunferencia escrotal, sin efecto significativo sobre motilidad. Esto apoya revisar la nutrición, pero no permite calcular la calidad del semen a partir del aspecto del toro.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'salud', icon: 'heart', title: 'Salud',
    short: 'Antecedentes, signos y registros',
    description: 'Los antecedentes de fiebre o enfermedad, el movimiento, los cambios visibles en la zona reproductiva y el registro de vacunas son información útil para el profesional. Observar al toro por fuera no reemplaza el examen.',
    technical: 'La evaluación andrológica integra antecedentes, estado físico y aparato reproductor, junto con el análisis seminal cuando corresponde. Enfermedad y fiebre pueden relacionarse con cambios en el semen; las lesiones pueden dificultar el desplazamiento o la monta. El registro permite revisar las vacunas indicadas para este toro según el programa acordado con el veterinario.',
    sourceIds: ['mu2026', 'msu2019', 'muVacc2025']
  },
  {
    id: 'reproductor', icon: 'bull', title: 'El reproductor',
    short: 'Edad, monta y seguimiento',
    description: 'Cada toro tiene su propia historia. La edad, la forma en que se utiliza durante la monta y el seguimiento indicado aportan contexto, pero no permiten asignarle una calidad seminal.',
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

const unknownOption = () => ({ value: 'unknown', label: 'No sé', status: 'unknown', explanation: 'Elegiste «No sé». Por ahora no podemos valorar este punto.', recommendation: 'Revisa lo que sabes, consulta los registros o pregunta al encargado del toro. Puedes volver y cambiar esta respuesta.' });

export const QUESTIONS = [
  {
    id: 'sombra', group: 'ambiente', title: '¿El toro puede usar sombra durante las horas de mayor calor?',
    hint: 'Piense en el potrero o corral donde permanece habitualmente.',
    options: [
      { value: 'always', label: 'Sí, tiene sombra disponible', status: 'adequate', explanation: 'El toro puede refugiarse del sol cuando hace calor. Eso es favorable para su manejo, aunque no indica cómo está su semen.', recommendation: 'Comprueba que pueda entrar a la sombra durante las horas más calurosas.' },
      { value: 'sometimes', label: 'Solo en algunos momentos', status: 'attention', explanation: 'El toro puede quedarse sin sombra en parte del día, incluso cuando hace calor. Conviene revisar cuándo puede refugiarse.', recommendation: 'Observa las horas en que falta sombra y busca una opción accesible para ese momento.' },
      { value: 'never', label: 'No tiene sombra disponible', status: 'attention', explanation: 'El toro no tiene dónde refugiarse del sol. Esto merece un cambio de manejo; la respuesta no indica si su semen está afectado.', recommendation: 'Busca una forma de ofrecerle sombra y consulta qué opción funciona en tu finca.' },
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
      { value: 'continuous', label: 'Sí, el acceso es continuo', status: 'adequate', explanation: 'El toro tiene agua limpia disponible de forma continua, según tu respuesta. Esto no nos dice cómo está su semen.', recommendation: 'Sigue revisando que el bebedero funcione, esté limpio y sea accesible.' },
      { value: 'interrupted', label: 'A veces se interrumpe el acceso', status: 'attention', explanation: 'El toro se queda sin acceso al agua en algunos momentos. Conviene encontrar la causa y corregirla.', recommendation: 'Revisa el suministro y el bebedero; comprueba que el toro pueda llegar al agua en todo momento.' },
      { value: 'unavailable', label: 'Actualmente no tiene acceso', status: 'priority', explanation: 'El toro no tiene acceso al agua ahora. Es una necesidad inmediata de manejo y bienestar, independiente de cómo esté su semen.', recommendation: 'Restablece el acceso a agua limpia cuanto antes. Si el toro se ve enfermo o decaído, llama al veterinario.' },
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
      { value: 'no', label: 'No he observado esa situación', status: 'adequate', explanation: 'No has observado varios días de calor intenso sin refugio. Esto no descarta otros problemas ni confirma cómo está el semen.', recommendation: 'Mantén disponibles la sombra y el agua, y observa si las condiciones cambian.' },
      unknownOption()
    ],
    explanation: 'El toro pasó varios días de mucho calor sin poder refugiarse. El calor puede afectar a algunos toros, pero esta respuesta no permite saber si afectó a este.',
    recommendation: 'Revisa dónde encuentra sombra y agua, y comenta esos días de calor al veterinario cuando evalúe al toro.',
    sourceIds: ['netherton2022', 'unl2021']
  },
  {
    id: 'alimento', group: 'nutricion', title: '¿Ha faltado alimento o forraje de forma repetida durante los últimos dos meses?',
    hint: 'Se pregunta por disponibilidad; la cantidad necesaria debe valorarse según el animal y la finca.',
    options: [
      { value: 'yes', label: 'Sí, ha faltado repetidamente', status: 'attention' },
      { value: 'no', label: 'No, ha habido alimento disponible', status: 'adequate', explanation: 'No ha faltado alimento de forma repetida. Aun así, disponer de comida no asegura que la dieta cubra las necesidades del toro.', recommendation: 'Revisa con quien asesora la alimentación si la cantidad y la calidad del alimento son apropiadas.' },
      unknownOption()
    ],
    explanation: 'Al toro le ha faltado alimento varias veces. Conviene revisar su alimentación; esta respuesta no indica cómo está su semen.',
    recommendation: 'Revisa las reservas de forraje y pide ayuda para ajustar la alimentación del toro.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'perdida-peso', group: 'nutricion', title: 'En los últimos dos meses, ¿ha observado pérdida marcada de peso o de condición corporal?',
    hint: 'Compare con la apariencia anterior y los registros disponibles. Esta observación no sustituye una valoración profesional de la condición corporal.',
    options: [
      { value: 'yes', label: 'Sí, he observado una pérdida marcada', status: 'attention' },
      { value: 'no', label: 'No he observado una pérdida marcada', status: 'adequate', explanation: 'No has notado una pérdida marcada de peso o condición corporal. Eso no permite saber su condición exacta ni cómo está su semen.', recommendation: 'Sigue observando al toro y pide una valoración de condición corporal si tienes dudas.' },
      unknownOption()
    ],
    explanation: 'Has observado que el toro perdió bastante peso o condición corporal. Conviene averiguar por qué; esto no significa por sí solo que su semen esté alterado.',
    recommendation: 'Pide al veterinario o a quien asesora la nutrición que revise su condición y su alimentación antes de hacer cambios grandes.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'dieta', group: 'nutricion', title: '¿La dieta cambió de forma importante y sin una transición planificada en los últimos dos meses?',
    hint: 'Por ejemplo, un cambio grande de alimento, suplementación o disponibilidad de pasto.',
    options: [
      { value: 'abrupt', label: 'Sí, hubo un cambio sin planificación', status: 'attention' },
      { value: 'planned', label: 'Cambió con una transición planificada', status: 'context', explanation: 'La dieta cambió siguiendo un plan. Eso describe cómo se hizo el cambio, pero no demuestra que la nueva dieta sea adecuada.', recommendation: 'Observa cómo responde el toro y revisa el plan con quien asesora la alimentación.' },
      { value: 'stable', label: 'No hubo un cambio importante', status: 'context', explanation: 'La dieta no tuvo cambios importantes. Aun así, vale la pena revisar si el toro recibe alimento suficiente y de buena calidad.', recommendation: 'Conserva los registros de alimentación y observa su peso y condición corporal.' },
      unknownOption()
    ],
    explanation: 'La dieta cambió de forma importante sin una transición planificada. Conviene revisar cómo respondió el toro; no se puede saber el efecto sobre su semen con esta respuesta.',
    recommendation: 'Comenta el cambio con quien asesora la alimentación y evita nuevos cambios grandes sin revisar sus necesidades.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'fiebre', group: 'salud', title: 'En los últimos dos meses, ¿ha tenido fiebre o una enfermedad atendida por un profesional?',
    hint: 'Tome en cuenta lo observado, los registros y lo indicado por un profesional. Si tiene dudas, elija «No sé».',
    options: [
      { value: 'yes', label: 'Sí, hay ese antecedente', status: 'priority' },
      { value: 'no', label: 'No hay un antecedente conocido', status: 'adequate', explanation: 'No conoces episodios de fiebre ni enfermedades atendidas en los últimos dos meses. Eso no descarta problemas que no se hayan detectado.', recommendation: 'Guarda los registros de salud y consulta al veterinario si notas cambios en el toro.' },
      unknownOption()
    ],
    explanation: 'El toro tuvo fiebre o una enfermedad atendida recientemente. Conviene contarle esto al veterinario porque puede ser importante para su reproducción; no prueba que el semen esté alterado.',
    recommendation: 'Anota cuándo ocurrió y qué tratamiento recibió. Comparte esos datos con el veterinario para decidir si necesita seguimiento.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'lesiones', group: 'salud', title: '¿Observa actualmente cojera, dolor al moverse o una lesión que dificulte caminar?',
    hint: 'Observe desde una distancia segura. No intente manipular al toro para responder.',
    options: [
      { value: 'yes', label: 'Sí, observo alguno de estos signos', status: 'priority' },
      { value: 'no', label: 'No he observado estos signos', status: 'adequate', explanation: 'No has visto cojera, dolor al moverse ni lesiones que dificulten caminar. Eso no sustituye un examen veterinario.', recommendation: 'Sigue observando cómo camina y se comporta, siempre desde una distancia segura.' },
      unknownOption()
    ],
    explanation: 'El toro cojea, parece tener dolor al moverse o tiene una lesión visible. Esto puede dificultar la monta y necesita revisión; no indica cómo está su semen.',
    recommendation: 'Pide al veterinario que revise al toro. No lo fuerces a montar ni intentes examinarlo de cerca para responder.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'zona-reproductiva', group: 'salud', title: '¿Ha observado hinchazón, heridas o secreción en el escroto o el prepucio?',
    hint: 'Observe desde una distancia segura; no toque ni examine al toro para responder.',
    options: [
      { value: 'yes', label: 'Sí, he observado alguno de estos cambios', status: 'priority' },
      { value: 'no', label: 'No he observado esos cambios', status: 'adequate', explanation: 'No has visto hinchazón, heridas ni secreción en el escroto o el prepucio. Un examen profesional puede detectar problemas que no se ven a simple vista.', recommendation: 'Sigue observando desde una distancia segura y avisa al veterinario si notas algún cambio.' },
      unknownOption()
    ],
    explanation: 'Viste hinchazón, una herida o secreción en la zona reproductiva. Un veterinario debe revisar la causa; esta respuesta no permite saber si afecta la reproducción.',
    recommendation: 'Describe al veterinario lo que viste. No toques ni manipules la zona para comprobarlo.',
    sourceIds: ['msu2019', 'unl2021']
  },
  {
    id: 'registro-vacunas', group: 'salud', title: '¿El toro cuenta con su registro de vacunas completo?',
    hint: 'Revise si el registro permite comprobar las vacunas indicadas para este toro por el veterinario, con sus fechas. Un registro completo no prueba por sí solo que la protección esté vigente.',
    options: [
      { value: 'yes', label: 'Sí, el registro está completo', status: 'context', explanation: 'Tienes un registro completo de las vacunas del toro. Eso ayuda a revisar su historial, pero no demuestra que todas las vacunas estén vigentes.', recommendation: 'Guarda el registro y comprueba con el veterinario qué vacunas necesita ahora.' },
      { value: 'no', label: 'No, está incompleto o no existe', status: 'attention' },
      unknownOption()
    ],
    explanation: 'Faltan datos en el registro de vacunas o no hay registro. Por eso no se puede comprobar qué vacunas recibió; no significa necesariamente que le falte alguna.',
    recommendation: 'Reúne las fechas y comprobantes disponibles. Revisa con el veterinario qué vacunas necesita y cómo dejar el registro al día.',
    sourceIds: ['muVacc2025', 'unl2021']
  },
  {
    id: 'edad', group: 'reproductor', title: '¿Cuál es la edad aproximada del toro?',
    hint: 'Los rangos solo describen la edad. No indican madurez, aptitud ni fertilidad.',
    options: [
      { value: 'under2', label: 'Menos de 2 años', status: 'context', explanation: 'El toro tiene menos de 2 años, según tu estimación. La edad sola no permite saber si está listo para reproducirse ni cómo está su semen.', recommendation: 'Guarda la fecha de nacimiento o tu mejor estimación para compartirla con el veterinario.' },
      { value: '2to5', label: 'De 2 a 5 años', status: 'context', explanation: 'El toro tiene entre 2 y 5 años, según tu estimación. Este dato no dice por sí solo si puede reproducirse ni cómo está su semen.', recommendation: 'Guarda su edad aproximada junto con los demás antecedentes del toro.' },
      { value: 'over5', label: 'Más de 5 años', status: 'context', explanation: 'El toro tiene más de 5 años, según tu estimación. La edad sola no permite saber si puede reproducirse ni cómo está su semen.', recommendation: 'Comparte la edad y los antecedentes del toro con el veterinario cuando lo evalúe.' },
      unknownOption()
    ],
    explanation: 'La edad describe al reproductor. Las agrupaciones de esta pregunta son una decisión editorial, no puntos de corte derivados de los artículos ni criterios de diagnóstico.',
    recommendation: 'Registre la edad conocida o aproximada como parte de la historia individual; no la use para concluir si el toro es fértil o infértil.',
    sourceIds: ['msu2019', 'mu2026', 'netherton2022']
  },
  {
    id: 'modalidad-monta', group: 'reproductor', title: '¿Cómo se maneja el período de monta del toro reproductor en la finca?',
    hint: 'Describe la organización de la monta en la finca. Ninguna modalidad permite conocer por sí sola la calidad seminal.',
    options: [
      { value: 'continua', label: 'Monta continua: el toro permanece con las vacas durante todo el año.', status: 'context', explanation: 'El toro permanece con las vacas todo el año. Esto describe cómo se organiza la finca; no indica cómo está su semen.', recommendation: 'Anota qué vacas estuvieron con el toro y cuándo. Revisa periódicamente su condición y su desempeño con apoyo profesional.' },
      { value: 'estacional', label: 'Monta estacional: el toro se utiliza únicamente durante determinados meses.', status: 'context', explanation: 'El toro se usa para la monta solo en algunos meses. Este dato ayuda a ubicar su actividad, pero no califica su fertilidad.', recommendation: 'Guarda las fechas de inicio y fin de cada temporada y el grupo de vacas servido.' },
      { value: 'controlada', label: 'Monta controlada: el toro se introduce con las vacas en períodos programados.', status: 'context', explanation: 'El toro entra con las vacas en períodos programados. Esto permite describir el manejo, pero no evalúa su semen.', recommendation: 'Conserva las fechas programadas y los registros de las vacas que sirvió.' },
      { value: 'sin-manejo', label: 'No existe un manejo reproductivo definido.', status: 'context', explanation: 'No hay un plan definido para cuándo usar al toro. Es un dato de organización de la finca, no una conclusión sobre su fertilidad.', recommendation: 'Describe cómo se usa actualmente al toro y conversa con un profesional sobre cómo registrar y organizar la monta.' },
      unknownOption()
    ],
    explanation: 'La modalidad declarada describe cómo se utiliza este toro en la finca. No califica su capacidad reproductiva, la calidad del semen ni la eficacia del manejo.',
    recommendation: 'Anote las fechas y el grupo de vacas servido, y comparta el contexto con el profesional durante la evaluación del reproductor.',
    sourceIds: ['unl2021', 'araya2024']
  },
  {
    id: 'seguimiento', group: 'reproductor', title: '¿Hay una recomendación profesional de repetir una prueba o revisar un hallazgo que siga pendiente?',
    hint: 'Piense en indicaciones anteriores específicas de este toro; no en su edad o raza.',
    options: [
      { value: 'pending', label: 'Sí, sigue pendiente', status: 'priority' },
      { value: 'completed', label: 'La indicación ya fue atendida', status: 'context', explanation: 'Ya hiciste el seguimiento que pidió el profesional. Para saber qué se encontró, hace falta revisar el resultado de esa visita o prueba.', recommendation: 'Guarda el informe y sigue las nuevas indicaciones que te hayan dado.' },
      { value: 'none', label: 'No conozco una indicación pendiente', status: 'context', explanation: 'No conoces una revisión pendiente para este toro. Eso no significa que haya sido evaluado ni que su semen esté bien.', recommendation: 'Revisa los informes que tengas y compártelos en la próxima evaluación del toro.' },
      unknownOption()
    ],
    explanation: 'Un profesional pidió repetir una prueba o revisar un hallazgo y aún está pendiente. Esta página no puede interpretar ese hallazgo.',
    recommendation: 'Contacta al profesional que hizo la recomendación y acuerda cómo completar la revisión.',
    sourceIds: ['msu2019']
  },
  {
    id: 'periodo', group: 'manejo', title: '¿En qué momento del periodo reproductivo se encuentra el toro?',
    hint: 'Esta respuesta describe el momento de manejo. Ninguna etapa determina por sí sola la calidad seminal.',
    options: [
      { value: 'before', label: 'Antes de iniciar la monta', status: 'context', explanation: 'El toro todavía no empezó el período de monta. Esta respuesta solo indica en qué momento está.', recommendation: 'Anota cuándo comenzará la monta y lleva esa fecha a la evaluación del toro.' },
      { value: 'during', label: 'Durante la monta', status: 'context', explanation: 'El toro está en período de monta. Estar con las vacas no indica por sí solo cómo está su semen.', recommendation: 'Registra cuándo comenzó, qué vacas sirve y cualquier cambio que observes.' },
      { value: 'after', label: 'Después de terminar la monta', status: 'context', explanation: 'El período de monta ya terminó. Eso ayuda a ordenar los antecedentes, pero no permite saber cómo está el semen.', recommendation: 'Conserva las fechas del período y las observaciones para comentarlas en la próxima revisión.' },
      { value: 'undefined', label: 'No hay un periodo de monta definido', status: 'context', explanation: 'En la finca no hay fechas de monta definidas. Esto describe la organización, sin calificar al toro.', recommendation: 'Explica cómo se usa el toro durante el año y, si puedes, comienza a registrar las fechas de servicio.' },
      unknownOption()
    ],
    explanation: 'El momento del periodo reproductivo ayuda a ubicar la historia y las observaciones del animal. Se registra como contexto, sin asignar calidad seminal ni aptitud.',
    recommendation: 'Guarde las fechas o la modalidad de manejo conocidas y consúltelas junto con los demás antecedentes individuales.',
    sourceIds: ['araya2024', 'unl2021']
  },
  {
    id: 'cantidad-vacas', group: 'manejo', title: '¿Se ha aumentado la cantidad de vacas que debe cubrir el toro reproductor sin evaluar si tiene la capacidad para hacerlo?',
    hint: 'Compare la cantidad de vacas asignadas antes y ahora. La capacidad del toro requiere valoración profesional; este formulario no fija una proporción toro:vacas.',
    options: [
      { value: 'unplanned', label: 'Sí, aumentó sin evaluar su capacidad', status: 'attention' },
      { value: 'planned', label: 'Aumentó, pero se evaluó su capacidad', status: 'context', explanation: 'Se asignaron más vacas después de evaluar al toro. Es una decisión de manejo; no garantiza preñez ni calidad del semen.', recommendation: 'Guarda la evaluación y sigue observando cómo se mueve y realiza la monta.' },
      { value: 'same', label: 'No aumentó la cantidad de vacas', status: 'context', explanation: 'No aumentó la cantidad de vacas asignadas. Aun así, conviene revisar si la carga actual es apropiada para este toro.', recommendation: 'Observa su desempeño y revisa la cantidad de vacas si cambian el terreno o las condiciones de monta.' },
      unknownOption()
    ],
    explanation: 'Se asignaron más vacas sin comprobar si este toro puede cubrirlas. Conviene revisar esa decisión; la respuesta no dice cómo está su semen.',
    recommendation: 'Revisa con un profesional la cantidad de vacas, el terreno y lo que has observado durante la monta.',
    sourceIds: ['unl2021', 'araya2024']
  },
  {
    id: 'monta', group: 'manejo', title: 'Durante la monta, ¿ha observado intentos repetidos sin lograr completar el servicio?',
    hint: 'Si el toro no está en monta, puede indicar «No está en monta».',
    options: [
      { value: 'difficulty', label: 'Sí, he observado esa dificultad', status: 'priority' },
      { value: 'none', label: 'No he observado esa dificultad', status: 'adequate', explanation: 'No has visto intentos repetidos de monta sin completarla. Eso no demuestra que el semen esté bien ni garantiza preñez.', recommendation: 'Sigue observando el servicio desde una distancia segura y anota si cambia algo.' },
      { value: 'inactive', label: 'No está en monta', status: 'context', explanation: 'El toro no está en período de monta, así que ahora no puedes observar si completa el servicio.', recommendation: 'Cuando corresponda, planifica la observación de la monta y la evaluación profesional.' },
      unknownOption()
    ],
    explanation: 'Has visto varios intentos de monta que no se completan. Un profesional debe revisar qué ocurre; puede haber causas distintas de un problema del semen.',
    recommendation: 'Anota lo que viste y pide al veterinario que revise al toro y las condiciones de la monta.',
    sourceIds: ['mu2026', 'unl2021']
  },
  {
    id: 'hato', group: 'manejo', title: '¿Se repiten los celos o hay resultados de preñez que le preocupan en el grupo de vacas servido?',
    hint: 'Se pregunta por una preocupación del hato. No permite atribuir la causa al toro.',
    options: [
      { value: 'concern', label: 'Sí, hay una preocupación', status: 'attention' },
      { value: 'none', label: 'No he observado una preocupación', status: 'context', explanation: 'No has notado problemas de celos repetidos ni resultados de preñez preocupantes en el grupo. Eso no evalúa por sí solo al toro.', recommendation: 'Continúa registrando servicios, celos y resultados de preñez.' },
      { value: 'unmeasured', label: 'Aún no hay resultados del periodo', status: 'context', explanation: 'Todavía no hay resultados suficientes para revisar cómo va este grupo de vacas.', recommendation: 'Acuerda con el profesional cuándo revisar los resultados del período.' },
      unknownOption()
    ],
    explanation: 'Hay celos repetidos o resultados de preñez que te preocupan. Pueden deberse a las vacas, al toro o al manejo; esta respuesta no identifica la causa.',
    recommendation: 'Reúne los registros de monta, celos y preñez y revísalos con un profesional junto con los animales.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'hijas', group: 'manejo', title: '¿Existen registros de que el reproductor haya sido utilizado para cubrir o inseminar a sus propias hijas?',
    hint: 'Revise la identificación de las hembras y los registros de monta o inseminación. Si no puede comprobar el parentesco, elija «No sé».',
    options: [
      { value: 'yes', label: 'Sí, los registros muestran ese uso', status: 'attention' },
      { value: 'no', label: 'No, los registros muestran que no ocurrió', status: 'context', explanation: 'Según los registros, el toro no se usó con sus propias hijas. Esto habla del parentesco, no de la calidad de su semen.', recommendation: 'Mantén identificados padres e hijas y revisa el parentesco antes de nuevas montas.' },
      unknownOption()
    ],
    explanation: 'Los registros muestran que el toro se usó con una o más de sus hijas. Ese parentesco cercano puede afectar a las crías; no significa que el semen del toro sea de mala calidad.',
    recommendation: 'Revisa los registros de parentesco y las próximas montas con alguien que asesore en reproducción o genética bovina.',
    sourceIds: ['muInbreed2021']
  }
];

export function evaluateAnswers(answers = {}) {
  return QUESTIONS.map(question => {
    const answer = question.options.find(option => option.value === answers[question.id]) ?? null;
    return { question, answer, status: answer?.status ?? 'unknown' };
  });
}
