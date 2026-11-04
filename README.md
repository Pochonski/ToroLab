# Calidad del semen bovino

Web educativa estática en español. Primera versión para revisión académica basada en el segundo avance de divulgación científica creativa en andrología. Su caso interactivo identifica condiciones de atención; no es una evaluación clínica validada ni diagnostica fertilidad.

## Uso local

Desde esta carpeta, `npm run dev` inicia la web en http://127.0.0.1:4173. No requiere instalar dependencias. Se necesita Node.js para los controles y Python 3 para el servidor local. También se puede servir `dist/` con cualquier servidor HTTP estático. Los módulos ES necesitan HTTP; no abrir directamente con `file://`.

`npm run check` comprueba sintaxis y pruebas de los criterios. No hay proceso de compilación: la carpeta `dist/` contiene la web completa.

## Organización

- `dist/index.html`, `styles.css`, `premium.css`, `app.js`: estructura, diseño e interacción accesible.
- `dist/content.js`: grupos, cuestionario, reglas educativas provisionales, fuentes y función de interpretación por condición.
- `dist/factor-scenes.js`: cinco escenas fotográficas generadas con IA con puntos seleccionables, explicaciones breves y acceso a la pregunta correspondiente de «Mi caso».
- `dist/science-visuals.js`: modelo celular generado con IA, selección de partes y comparaciones de movimiento y cantidad, sin escala diagnóstica.
- `dist/assets/portadas/`: cinco portadas temáticas distintas para tarjetas, selector de categorías y encabezados de resultados; ver `docs/portadas-factores.md`.
- `dist/assets/premium/`: siete imágenes nuevas con variantes WebP para móvil; la célula conserva transparencia.
- `docs/fotografias-premium.md` y `docs/imagenes-cientificas-premium.md`: prompts completos, procedencia y uso de las nuevas imágenes.
- `docs/criterios-revision.md`: matriz completa para revisar con el docente, con límites y trazabilidad bibliográfica.
- `docs/imagen-principal.md`: origen, prompt y uso de la imagen generada.
- `tests/criteria.test.mjs`: escenarios de información desconocida, independencia de condiciones e integridad editorial.
- `.openai/hosting.json`: identidad Sites y directorio estático; conservar el mismo `project_id` en siguientes versiones.

## Datos y comportamiento

Las respuestas se guardan en `sessionStorage`, solo en la pestaña de la visita, bajo `calidad-seminal-caso-v1`. No se transmiten a una API, no hay analítica ni formulario de datos personales. Recargar conserva la visita; cerrar la sesión de la pestaña termina su almacenamiento normal según el navegador. Las respuestas se validan contra las opciones reconocidas antes de restaurarlas.

Los estados son `adequate`, `attention`, `priority`, `unknown` y `context`. No se suman, promedian ni producen una etiqueta global. Una respuesta desconocida o ausente siempre es `unknown`; edad y raza nunca generan calificaciones. Revisar los criterios con el docente antes de cualquier difusión pública.

El cuestionario tiene 18 preguntas: cuatro en Salud y cinco en Manejo reproductivo. La edad aproximada y el momento del periodo reproductivo se registran exclusivamente como contexto (azul); sus opciones desconocidas son información insuficiente (gris). Los rangos de edad son agrupaciones descriptivas y no umbrales clínicos. Las visitas que habían completado versiones anteriores conservan sus respuestas reconocidas y se reanudan en el primer grupo con una pregunta nueva pendiente. La pregunta anterior sobre el plan sanitario se sustituyó por una sobre vacunas y, después, por otra sobre la integridad de su registro; ninguna respuesta anterior se reutiliza para la nueva pregunta. Se eliminó la pregunta sobre visión. La pregunta sobre la demanda de monta también cambió de sentido: las respuestas anteriores no se reutilizan para la nueva pregunta sobre la cantidad de vacas.

En «Factores» se pueden seleccionar los puntos de la escena o sus botones con texto. La selección abre una explicación educativa y no registra respuestas. «Relacionarlo con mi caso» lleva al grupo correspondiente y enfoca la pregunta, sin seleccionar ninguna opción. El contenido se puede recorrer con teclado sin completar el caso.

## Recursos y acceso

El sitio contiene doce referencias enlazadas y modelos educativos de movimiento, estructura y cantidad por volumen. Las fotografías y los modelos generados con IA no son resultados de laboratorio ni tienen escala diagnóstica. No hay videos, descargas ficticias ni estadísticas inventadas. La tipografía puede descargarse desde Google Fonts; si no está disponible, se usan fuentes del dispositivo. Los enlaces bibliográficos abren las páginas externas solo al seleccionarlos.

La publicación en Vercel es pública por solicitud del propietario. El repositorio de GitHub conserva sus permisos independientes. La configuración anterior de Sites se conserva en `.openai/hosting.json`; no interviene en los despliegues de Vercel. La etiqueta `noindex` se mantiene para esta versión de revisión académica y no limita el acceso mediante enlace.

## Autoría académica

Dikson Aarón Guzmán Sibaja ([ORCID](https://orcid.org/0009-0004-0368-7781)), José Ángel Aguirre Reyes ([ORCID](https://orcid.org/0009-0001-4447-772X)) y Joseph Fonseca Nuñez. Instituto Tecnológico de Costa Rica, Campus Local San Carlos. La identificación del proyecto no implica una aprobación institucional de la herramienta o de sus criterios.

## Despliegue automático en Vercel

Web pública: https://calidad-seminal-bovina.vercel.app

Repositorio: https://github.com/Pochonski/calidad-seminal-bovina

Proyecto Vercel: `calidad-seminal-bovina`, equipo `pochonskis-projects`. La rama de producción es `main` y la conexión nativa de GitHub inicia un despliegue con cada push. Las demás ramas generan vistas previas.

`vercel.json` selecciona el proyecto estático, omite la instalación de dependencias y ejecuta `npm run check` antes de servir `dist/`. Si una comprobación falla, ese cambio no sustituye la versión publicada.

Para publicar una actualización, revisar los cambios y usar `git add`, `git commit` y `git push origin main`. No se necesita ejecutar un despliegue manual ni guardar un token de Vercel en GitHub Actions. Los datos locales de Vercel y los archivos `.env` están excluidos del repositorio.
