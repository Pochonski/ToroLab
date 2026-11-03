# Calidad del semen bovino

Web educativa estática en español. Primera versión para revisión académica basada en el segundo avance de divulgación científica creativa en andrología. Su caso interactivo identifica condiciones de atención; no es una evaluación clínica validada ni diagnostica fertilidad.

## Uso local

Desde esta carpeta, `npm run dev` inicia la web en http://127.0.0.1:4173. No requiere instalar dependencias. Se necesita Node.js para los controles y Python 3 para el servidor local. También se puede servir `dist/` con cualquier servidor HTTP estático. Los módulos ES necesitan HTTP; no abrir directamente con `file://`.

`npm run check` comprueba sintaxis y pruebas de los criterios. No hay proceso de compilación: la carpeta `dist/` contiene la web completa.

## Organización

- `dist/index.html`, `styles.css`, `app.js`: estructura, diseño e interacción accesible.
- `dist/content.js`: grupos, cuestionario, reglas educativas provisionales, fuentes y función de interpretación por condición.
- `dist/factor-scenes.js`: cinco escenas vectoriales distintas con puntos seleccionables, explicaciones breves y acceso a la pregunta correspondiente de «Mi caso».
- `docs/criterios-revision.md`: matriz completa para revisar con el docente, con límites y trazabilidad bibliográfica.
- `docs/imagen-principal.md`: origen, prompt y uso de la imagen generada.
- `tests/criteria.test.mjs`: escenarios de información desconocida, independencia de condiciones e integridad editorial.
- `.openai/hosting.json`: identidad Sites y directorio estático; conservar el mismo `project_id` en siguientes versiones.

## Datos y comportamiento

Las respuestas se guardan en `sessionStorage`, solo en la pestaña de la visita, bajo `calidad-seminal-caso-v1`. No se transmiten a una API, no hay analítica ni formulario de datos personales. Recargar conserva la visita; cerrar la sesión de la pestaña termina su almacenamiento normal según el navegador. Las respuestas se validan contra las opciones reconocidas antes de restaurarlas.

Los estados son `adequate`, `attention`, `priority`, `unknown` y `context`. No se suman, promedian ni producen una etiqueta global. Una respuesta desconocida o ausente siempre es `unknown`; edad y raza nunca generan calificaciones. Revisar los criterios con el docente antes de cualquier difusión pública.

El cuestionario tiene 15 preguntas. La edad aproximada y el momento del periodo reproductivo se registran exclusivamente como contexto (azul); sus opciones desconocidas son información insuficiente (gris). Los rangos de edad son agrupaciones descriptivas y no umbrales clínicos. Las visitas que habían completado la versión de 13 preguntas conservan todas sus respuestas y se reanudan en el primer grupo con una pregunta nueva pendiente.

En «Factores» se pueden seleccionar los puntos de la escena o sus botones con texto. La selección abre una explicación educativa y no registra respuestas. «Relacionarlo con mi caso» lleva al grupo correspondiente y enfoca la pregunta, sin seleccionar ninguna opción. El contenido se puede recorrer con teclado sin completar el caso.

## Recursos y acceso

El sitio contiene diez referencias enlazadas y esquemas educativos de movimiento, estructura y cantidad por volumen. Las ilustraciones no son resultados de laboratorio ni tienen escala diagnóstica. No hay videos, descargas ficticias ni estadísticas inventadas. La tipografía puede descargarse desde Google Fonts; si no está disponible, se usan fuentes del dispositivo. Los enlaces bibliográficos abren las páginas externas solo al seleccionarlos.

La publicación solicitada es privada mediante Sites. El acceso lo aplica el alojamiento; `noindex` es complementario y no sustituye la autenticación. No cambiar la audiencia a pública sin una nueva solicitud del propietario.

## Autoría académica

Dikson Aarón Guzmán Sibaja y José Ángel Aguirre Reyes. Instituto Tecnológico de Costa Rica, Campus Local San Carlos. La identificación del proyecto no implica una aprobación institucional de la herramienta o de sus criterios.
