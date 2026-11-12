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
    short: 'Temperatura, sombra y agua',
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
    id: 'organizacion-hato', group: 'general', title: '¿Cómo organiza la monta en el hato?',
    hint: 'Indique cómo se asignan los toros y las vacas durante la monta.',
    options: [
      { value: 'rotativa', label: 'La monta se organiza por turnos entre grupos de vacas', status: 'context' },
      { value: 'parejas', label: 'Se asigna un toro a una vaca por vez', status: 'context' },
      { value: 'grupos', label: 'Cada toro permanece con un grupo fijo de vacas', status: 'context' },
      { value: 'otra', label: 'Se combinan varias formas de monta', status: 'context' },
      { value: 'sin-monta', label: 'No se usa monta natural', status: 'context' },
      unknownOption()
    ],
    explanation: 'La forma de organizar la monta describe el manejo del hato. Por sí sola no permite valorar el semen de un toro.',
    recommendation: 'Registre qué toros y vacas participan y las fechas de cada período de monta.',
    sourceIds: ['unl2021', 'mu2026']
  },
  {
    id: 'relacion-hato', group: 'general', title: 'En promedio, ¿cuántas vacas hay por cada toro durante la monta?',
    hint: 'Considere el mismo grupo y período de monta que en la pregunta sobre el número de toros.',
    options: [
      { value: 'menos-25', label: 'Menos de 25 vacas por toro', status: 'context', explanation: 'Hay menos de 25 vacas por cada toro en este grupo. Para valorar si la distribución funciona, también importan la edad de los toros y el tiempo que permanecen con las vacas.' },
      { value: '25-30', label: 'De 25 a 30 vacas por toro', status: 'context', explanation: 'Esta relación se parece a una referencia usada para toros adultos. Hay que considerar la edad y las condiciones de cada toro antes de decidir cuántas vacas asignarle.' },
      { value: 'mas-30', label: 'Más de 30 vacas por toro', status: 'context', explanation: 'Hay más de 30 vacas por cada toro en este grupo. Conviene revisar cómo se distribuyen y observar si los toros logran completar la monta.' },
      { value: 'no-aplica', label: 'No hay monta natural en este período', status: 'context', explanation: 'En este período no hay toros montando a las vacas, por lo que no corresponde calcular esta relación.' },
      unknownOption()
    ],
    explanation: 'La relación declarada ayuda a describir la distribución del hato. La capacidad de servicio depende de la edad, el animal y las condiciones de monta.',
    recommendation: 'Revise con el profesional cómo se distribuyen las vacas entre los toros durante el período de monta.',
    sourceIds: ['unl2021', 'mu2026']
  },
  {
    id: 'numero-toros', group: 'general', parentId: 'relacion-hato', title: '¿Cuántos toros participan en ese período?',
    hint: 'Cuente los toros que participan en el grupo y período de monta descritos arriba.',
    options: [
      { value: 'ninguno', label: 'Ninguno', status: 'context' },
      { value: 'uno', label: 'Uno', status: 'context' },
      { value: 'dos-tres', label: 'De dos a tres', status: 'context' },
      { value: 'cuatro-mas', label: 'Cuatro o más', status: 'context' },
      unknownOption()
    ],
    explanation: 'El número de toros describe el manejo del hato y ayuda a interpretar la relación declarada entre vacas y toros.',
    recommendation: 'Conserve un registro de los toros que estuvieron con cada grupo de vacas.',
    sourceIds: ['unl2021']
  },
  {
    id: 'sombra', group: 'ambiente', title: '¿El toro tiene acceso a sombra durante las horas de mayor temperatura?',
    hint: 'Piense en el potrero o corral donde permanece habitualmente.',
    options: [
      { value: 'always', label: 'Puede entrar a la sombra cuando sube la temperatura', status: 'adequate', explanation: 'El toro puede refugiarse del sol cuando hace calor. Eso es favorable para su manejo, aunque no indica cómo está su semen.', recommendation: 'Comprueba que pueda entrar a la sombra durante las horas más calurosas.' },
      { value: 'sometimes', label: 'La sombra está disponible solo parte del día', status: 'attention', explanation: 'El toro puede quedarse sin sombra en parte del día, incluso cuando hace calor. Conviene revisar cuándo puede refugiarse.', recommendation: 'Observa las horas en que falta sombra y busca una opción accesible para ese momento.' },
      { value: 'never', label: 'Permanece sin un lugar con sombra', status: 'attention', explanation: 'El toro no tiene dónde refugiarse del sol. Esto merece un cambio de manejo; la respuesta no indica si su semen está afectado.', recommendation: 'Busca una forma de ofrecerle sombra y consulta qué opción funciona en tu finca.' },
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
      { value: 'continuous', label: 'Tiene agua limpia a su alcance todo el día', status: 'adequate', explanation: 'El toro tiene agua limpia disponible de forma continua, según tu respuesta. Esto no nos dice cómo está su semen.', recommendation: 'Sigue revisando que el bebedero funcione, esté limpio y sea accesible.' },
      { value: 'interrupted', label: 'A veces falta agua o no puede llegar al bebedero', status: 'attention', explanation: 'El toro se queda sin acceso al agua en algunos momentos. Conviene encontrar la causa y corregirla.', recommendation: 'Revisa el suministro y el bebedero; comprueba que el toro pueda llegar al agua en todo momento.' },
      { value: 'unavailable', label: 'Ahora no tiene agua a su alcance', status: 'priority', explanation: 'El toro no tiene acceso al agua ahora. Es una necesidad inmediata de manejo y bienestar, independiente de cómo esté su semen.', recommendation: 'Restablece el acceso a agua limpia cuanto antes. Si el toro se ve enfermo o decaído, llama al veterinario.' },
      unknownOption()
    ],
    explanation: 'La disponibilidad de agua es una necesidad de manejo y ayuda a enfrentar el calor. El nivel de atención propuesto no representa una predicción de calidad seminal.',
    recommendation: 'Revise y corrija las interrupciones del suministro y asegure que el toro pueda alcanzar el bebedero.',
    sourceIds: ['unl2021']
  },
  {
    id: 'calor', group: 'ambiente', title: 'En los últimos dos meses, ¿ha pasado varios días de exposición a altas temperaturas sin poder refugiarse?',
    hint: 'Los dos meses son un marco para recordar lo observado, no un límite diagnóstico.',
    options: [
      { value: 'yes', label: 'Pasó varios días de alta temperatura sin refugio', status: 'attention' },
      { value: 'no', label: 'No hubo varios días seguidos sin refugio', status: 'adequate', explanation: 'Según lo observado, el toro tuvo dónde refugiarse cuando lo necesitó o no se dieron varios días de temperatura alta. Mantener sombra y agua disponibles sigue siendo importante.', recommendation: 'Mantén disponibles la sombra y el agua, y observa si las condiciones cambian.' },
      unknownOption()
    ],
    explanation: 'Pasar varios días sin refugio ante altas temperaturas puede afectar a algunos toros. Esta respuesta ayuda a recordar cuándo ocurrió para comentarlo durante la evaluación.',
    recommendation: 'Revisa dónde encuentra sombra y agua, y comenta esos días de calor al veterinario cuando evalúe al toro.',
    sourceIds: ['netherton2022', 'unl2021']
  },
  {
    id: 'alimento', group: 'nutricion', title: '¿Ha faltado alimento o forraje de forma repetida durante los últimos dos meses?',
    hint: 'Se pregunta por disponibilidad; la cantidad necesaria debe valorarse según el animal y la finca.',
    options: [
      { value: 'yes', label: 'Faltó alimento en varias ocasiones', status: 'attention' },
      { value: 'no', label: 'Hubo alimento disponible de forma habitual', status: 'adequate', explanation: 'No ha faltado alimento de forma repetida. Aun así, disponer de comida no asegura que la dieta cubra las necesidades del toro.', recommendation: 'Revisa con quien asesora la alimentación si la cantidad y la calidad del alimento son apropiadas.' },
      unknownOption()
    ],
    explanation: 'Cuando falta alimento varias veces, el toro puede perder peso o condición corporal. Conviene revisar cuánto recibe y durante qué períodos faltó comida.',
    recommendation: 'Revisa las reservas de forraje y pide ayuda para ajustar la alimentación del toro.',
    sourceIds: ['harrison2022', 'unl2021']
  },
  {
    id: 'perdida-peso', group: 'nutricion', title: 'En los últimos dos meses, ¿ha observado pérdida marcada de peso o de condición corporal?',
    hint: 'Compare con la apariencia anterior y los registros disponibles. Esta observación no sustituye una valoración profesional de la condición corporal.',
    options: [
      { value: 'yes', label: 'Ha bajado mucho de peso o se ve más delgado', status: 'attention' },
      { value: 'no', label: 'No he notado que haya adelgazado mucho', status: 'adequate', explanation: 'No has notado una pérdida marcada de peso o condición corporal. Eso no permite saber su condición exacta ni cómo está su semen.', recommendation: 'Sigue observando al toro y pide una valoración de condición corporal si tienes dudas.' },
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
      { value: 'abrupt', label: 'Se cambió el alimento, pasto o suplemento de golpe', status: 'attention' },
      { value: 'planned', label: 'El cambio se hizo poco a poco y con un plan', status: 'context', explanation: 'La dieta cambió siguiendo un plan. Eso describe cómo se hizo el cambio, pero no demuestra que la nueva dieta sea adecuada.', recommendation: 'Observa cómo responde el toro y revisa el plan con quien asesora la alimentación.' },
      { value: 'stable', label: 'Ha seguido con una alimentación parecida', status: 'context', explanation: 'La dieta no tuvo cambios importantes. Aun así, vale la pena revisar si el toro recibe alimento suficiente y de buena calidad.', recommendation: 'Conserva los registros de alimentación y observa su peso y condición corporal.' },
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
      { value: 'yes', label: 'Tuvo fiebre o lo atendieron por una enfermedad', status: 'priority' },
      { value: 'no', label: 'No se conocen episodios de fiebre ni atención por enfermedad', status: 'adequate', explanation: 'No conoces episodios de fiebre ni enfermedades atendidas en los últimos dos meses. Eso no descarta problemas que no se hayan detectado.', recommendation: 'Guarda los registros de salud y consulta al veterinario si notas cambios en el toro.' },
      unknownOption()
    ],
    explanation: 'Aunque el toro ya se vea recuperado, una fiebre o enfermedad reciente puede importar al evaluar su reproducción. La fecha y el tratamiento ayudan al veterinario a interpretarlo.',
    recommendation: 'Anota cuándo ocurrió y qué tratamiento recibió. Comparte esos datos con el veterinario para decidir si necesita seguimiento.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'lesiones', group: 'salud', title: '¿Observa actualmente cojera, dolor al moverse o una lesión que dificulte caminar?',
    hint: 'Observe desde una distancia segura. No intente manipular al toro para responder.',
    options: [
      { value: 'yes', label: 'Cojea, le cuesta caminar o parece sentir dolor', status: 'priority' },
      { value: 'no', label: 'No le he visto cojera, dolor ni lesiones al caminar', status: 'adequate', explanation: 'No has visto cojera, dolor al moverse ni lesiones que dificulten caminar. Eso no sustituye un examen veterinario.', recommendation: 'Sigue observando cómo camina y se comporta, siempre desde una distancia segura.' },
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
      { value: 'yes', label: 'Le he visto una herida, hinchazón o salida de líquido', status: 'priority' },
      { value: 'no', label: 'No he visto heridas, hinchazón ni salida de líquido', status: 'adequate', explanation: 'No has visto hinchazón, heridas ni secreción en el escroto o el prepucio. Un examen profesional puede detectar problemas que no se ven a simple vista.', recommendation: 'Sigue observando desde una distancia segura y avisa al veterinario si notas algún cambio.' },
      unknownOption()
    ],
    explanation: 'Una herida, hinchazón o salida de líquido puede tener distintas causas. Un veterinario debe revisar la zona para saber qué ocurre y si necesita tratamiento.',
    recommendation: 'Describe al veterinario lo que viste. No toques ni manipules la zona para comprobarlo.',
    sourceIds: ['msu2019', 'unl2021']
  },
  {
    id: 'registro-vacunas', group: 'salud', title: '¿El toro cuenta con su registro de vacunas completo?',
    hint: 'Revise si el registro permite comprobar las vacunas indicadas para este toro por el veterinario, con sus fechas. Un registro completo no prueba por sí solo que la protección esté vigente.',
    options: [
      { value: 'yes', label: 'Tengo anotadas las vacunas y sus fechas', status: 'context', explanation: 'Tienes un registro completo de las vacunas del toro. Eso ayuda a revisar su historial, pero no demuestra que todas las vacunas estén vigentes.', recommendation: 'Guarda el registro y comprueba con el veterinario qué vacunas necesita ahora.' },
      { value: 'no', label: 'Faltan fechas o no encuentro el registro', status: 'attention' },
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
      { value: 'continua', label: 'El toro permanece con las vacas todo el año', status: 'context', explanation: 'El toro permanece con las vacas todo el año. Esto describe cómo se organiza la finca; no indica cómo está su semen.', recommendation: 'Anota qué vacas estuvieron con el toro y cuándo. Revisa periódicamente su condición y su desempeño con apoyo profesional.' },
      { value: 'estacional', label: 'Se usa al toro solo en ciertos meses', status: 'context', explanation: 'El toro se usa para la monta solo en algunos meses. Este dato ayuda a ubicar su actividad, pero no califica su fertilidad.', recommendation: 'Guarda las fechas de inicio y fin de cada temporada y el grupo de vacas servido.' },
      { value: 'controlada', label: 'Se introduce al toro en fechas programadas', status: 'context', explanation: 'El toro entra con las vacas en períodos programados. Esto permite describir el manejo, pero no evalúa su semen.', recommendation: 'Conserva las fechas programadas y los registros de las vacas que sirvió.' },
      { value: 'sin-manejo', label: 'No hay fechas ni períodos de monta definidos', status: 'context', explanation: 'No hay un plan definido para cuándo usar al toro. Es un dato de organización de la finca, no una conclusión sobre su fertilidad.', recommendation: 'Describe cómo se usa actualmente al toro y conversa con un profesional sobre cómo registrar y organizar la monta.' },
      unknownOption()
    ],
    explanation: 'La modalidad declarada describe cómo se utiliza este toro en la finca. No califica su capacidad reproductiva, la calidad del semen ni la eficacia del manejo.',
    recommendation: 'Anote las fechas y el grupo de vacas servido, y comparta el contexto con el profesional durante la evaluación del reproductor.',
    sourceIds: ['unl2021', 'araya2024']
  },
  {
    id: 'analisis-andrologico', group: 'reproductor', title: '¿Se le ha hecho un análisis andrológico al reproductor?',
    hint: 'Indique cuándo se hizo la evaluación más reciente, si cuenta con esa información.',
    options: [
      { value: 'menos-ano', label: 'Sí, hace menos de un año', status: 'context', explanation: 'Se realizó un análisis andrológico hace menos de un año. El informe describe al toro en el momento de la evaluación.', recommendation: 'Conserve el informe y consulte con el veterinario cuándo corresponde una nueva evaluación antes de la monta.' },
      { value: 'ano-mas', label: 'Sí, hace un año o más', status: 'attention' },
      { value: 'nunca', label: 'No, nunca', status: 'attention', explanation: 'Falta una evaluación profesional que reúna el examen del toro y, cuando corresponde, el análisis de su semen.', recommendation: 'Coordine una evaluación andrológica con el veterinario antes de la próxima monta.' },
      unknownOption()
    ],
    explanation: 'El estado reproductivo del toro puede cambiar con el tiempo. Un informe de hace un año o más puede requerir una nueva revisión antes de la monta.',
    recommendation: 'Revise el informe con el veterinario y acuerde si corresponde una nueva evaluación.',
    sourceIds: ['unl2021', 'msu2019']
  },
  {
    id: 'seguimiento', group: 'reproductor', title: '¿Hay una recomendación profesional de repetir una prueba o revisar un hallazgo que siga pendiente?',
    hint: 'Piense en indicaciones anteriores específicas de este toro; no en su edad o raza.',
    options: [
      { value: 'pending', label: 'Quedó una prueba o revisión por hacer', status: 'priority' },
      { value: 'completed', label: 'Ya se hizo la revisión que indicó el profesional', status: 'context', explanation: 'Ya hiciste el seguimiento que pidió el profesional. Para saber qué se encontró, hace falta revisar el resultado de esa visita o prueba.', recommendation: 'Guarda el informe y sigue las nuevas indicaciones que te hayan dado.' },
      { value: 'none', label: 'No me han indicado una revisión pendiente', status: 'context', explanation: 'No conoces una revisión pendiente para este toro. Eso no significa que haya sido evaluado ni que su semen esté bien.', recommendation: 'Revisa los informes que tengas y compártelos en la próxima evaluación del toro.' },
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
    id: 'vacas-asignadas', group: 'manejo', title: '¿Cuántas vacas tiene asignadas este toro durante el período de monta?',
    hint: 'Como referencia orientativa, se citan 25 a 30 vacas para un toro adulto. La capacidad depende de su edad, estado y las condiciones de monta.',
    options: [
      { value: 'menos-25', label: 'Menos de 25 vacas', status: 'context', explanation: 'Este toro tiene asignadas menos de 25 vacas. Para valorar si esa cantidad le conviene, también cuentan su edad, su estado y el tiempo de monta.' },
      { value: '25-30', label: 'De 25 a 30 vacas', status: 'context', explanation: 'La cantidad se parece a una referencia usada para toros adultos. La edad, el estado del toro y el manejo de la finca ayudan a decidir si es apropiada para él.' },
      { value: 'mas-30', label: 'Más de 30 vacas', status: 'context', explanation: 'Este toro tiene asignadas más de 30 vacas. Conviene revisar su evaluación, observar la monta y valorar con el veterinario si puede cubrir ese grupo.' },
      { value: 'no-aplica', label: 'Este toro no está en monta', status: 'context', explanation: 'El toro no participa en la monta durante este período, así que ahora no tiene vacas asignadas para cubrir.' },
      unknownOption()
    ],
    explanation: 'Esta cantidad describe las vacas asignadas al toro. La referencia de 25 a 30 vacas corresponde a toros adultos en condiciones específicas y no determina la capacidad de este animal.',
    recommendation: 'Revise la edad, la evaluación del toro y las condiciones de monta con el veterinario antes de ajustar la cantidad de vacas.',
    sourceIds: ['unl2021', 'mu2026']
  },
  {
    id: 'monta', group: 'manejo', title: 'Durante la monta, ¿ha observado intentos repetidos sin lograr completar el servicio?',
    hint: 'Si el toro no está en monta, puede indicar «No está en monta».',
    options: [
      { value: 'difficulty', label: 'Intenta montar varias veces, pero no logra terminar', status: 'priority' },
      { value: 'none', label: 'No he visto intentos fallidos repetidos', status: 'adequate', explanation: 'No has visto intentos repetidos de monta sin completarla. Eso no demuestra que el semen esté bien ni garantiza preñez.', recommendation: 'Sigue observando el servicio desde una distancia segura y anota si cambia algo.' },
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
      { value: 'concern', label: 'Varias vacas vuelven a entrar en celo o hay pocas preñeces', status: 'attention' },
      { value: 'none', label: 'No noto celos repetidos ni resultados preocupantes', status: 'context', explanation: 'No has notado problemas de celos repetidos ni resultados de preñez preocupantes en el grupo. Eso no evalúa por sí solo al toro.', recommendation: 'Continúa registrando servicios, celos y resultados de preñez.' },
      { value: 'unmeasured', label: 'Aún faltan datos de este período de monta', status: 'context', explanation: 'Todavía no hay resultados suficientes para revisar cómo va este grupo de vacas.', recommendation: 'Acuerda con el profesional cuándo revisar los resultados del período.' },
      unknownOption()
    ],
    explanation: 'Los resultados del grupo pueden depender de las vacas, del toro o de cómo se organiza la monta. Los registros ayudan a investigar qué está pasando.',
    recommendation: 'Reúne los registros de monta, celos y preñez y revísalos con un profesional junto con los animales.',
    sourceIds: ['mu2026', 'msu2019']
  },
  {
    id: 'hijas', group: 'manejo', title: '¿Existen registros de que el reproductor haya sido utilizado para cubrir o inseminar a sus propias hijas?',
    hint: 'Revise la identificación de las hembras y los registros de monta o inseminación. Si no puede comprobar el parentesco, elija «No sé».',
    options: [
      { value: 'yes', label: 'Hay registros de cruces del toro con sus hijas', status: 'attention' },
      { value: 'no', label: 'Los registros descartan cruces del toro con sus hijas', status: 'context', explanation: 'Según los registros, el toro no se usó con sus propias hijas. Esto habla del parentesco, no de la calidad de su semen.', recommendation: 'Mantén identificados padres e hijas y revisa el parentesco antes de nuevas montas.' },
      unknownOption()
    ],
    explanation: 'Un cruce entre padre e hija aumenta el parentesco de las crías y puede afectar a su descendencia. Esto no significa que el semen del toro sea de mala calidad.',
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
