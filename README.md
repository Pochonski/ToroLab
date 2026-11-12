<div align="center">
  <img src="dist/assets/torolab-logo.png" alt="Logo de ToroLab" width="110">
  <h1>ToroLab</h1>
  <p><strong>Explora, Analiza y aprende.</strong> Una experiencia educativa en español para explorar los factores que pueden relacionarse con la calidad seminal de un toro reproductor.</p>
  <p><a href="https://torolab-bovino.vercel.app/">Visitar la web</a> · <a href="https://torolab-bovino.vercel.app/#factores">Explorar los factores</a> · <a href="https://torolab-bovino.vercel.app/#recursos">Revisar las fuentes</a></p>
</div>

<p align="center">
  <img src="dist/assets/toro-potrero.webp" alt="Toro en un potrero, imagen de contexto generada con IA" width="900">
</p>

> **Alcance:** es una herramienta de divulgación científica en revisión académica. Sus indicaciones son criterios educativos provisionales: no diagnostican fertilidad, no sustituyen una evaluación andrológica y no calculan una puntuación global.

## Qué puedes hacer

- **Conocer cinco factores:** ambiente, nutrición, salud, características del reproductor y manejo reproductivo. Cada escena permite seleccionar puntos de interés y leer una explicación práctica.
- **Explorar «Mi caso»:** responder 21 preguntas en seis grupos, empezando por cuestiones generales de manejo. La segunda pregunta incluye un dato adicional sobre el número de toros. Puedes cambiar de grupo sin perder las respuestas de la visita y elegir «No sé» cuando falte información.
- **Consultar «Mis puntos»:** ver cada condición por separado, con una indicación, una explicación comprensible, una acción sugerida y sus fuentes. Las respuestas desconocidas se muestran como información insuficiente.
- **Abrir el laboratorio interactivo:** comparar motilidad, morfología y concentración mediante simulaciones educativas sin escala. Incluye movimiento controlable, un modelo 3D y una alternativa estática cuando 3D no esté disponible.
- **Revisar la bibliografía:** acceder a 13 publicaciones y guías que aportan contexto científico y técnico.

El contenido educativo se puede recorrer sin completar el cuestionario. Las fotografías de contexto se generaron con IA; las animaciones representan conceptos y no son imágenes ni mediciones de muestras reales.

## Ejecutarlo en tu equipo

Necesitas **Python 3** para el servidor local y **Node.js** para las comprobaciones. El cuestionario público funciona sin cuenta. Para guardar casos se usa Supabase Auth con Google y la base de datos del proyecto.

```bash
git clone https://github.com/Pochonski/ToroLab.git
cd ToroLab
npm run dev
```

Abre [http://127.0.0.1:4173](http://127.0.0.1:4173). Para ejecutar las pruebas y la comprobación de sintaxis:

```bash
npm run check
```

También puedes servir `dist/` con cualquier servidor HTTP estático. Los módulos JavaScript necesitan HTTP; abrir `index.html` mediante `file://` no es suficiente.

## Cómo está construido

| Parte | Función |
| --- | --- |
| [`dist/index.html`](dist/index.html) y hojas CSS en [`dist/`](dist/) | Estructura, navegación y diseño adaptable. |
| [`dist/app.js`](dist/app.js) | Rutas, formulario, resultados y estado de la visita. |
| [`dist/content.js`](dist/content.js) | Factores, preguntas, opciones, explicaciones, recomendaciones, fuentes y criterios por condición. |
| [`dist/factor-scenes.js`](dist/factor-scenes.js) | Escenas interactivas de los cinco factores. |
| [`dist/science-visuals.js`](dist/science-visuals.js) | Interfaz y simulaciones 2D del laboratorio educativo. |
| [`dist/science-3d.js`](dist/science-3d.js) y [`dist/vendor/three/`](dist/vendor/three/) | Modelo de morfología en Three.js, servido junto con la web. |
| [`tests/`](tests/) | Pruebas de criterios, escenas y visualizaciones. |
| [`docs/criterios-revision.md`](docs/criterios-revision.md) | Matriz completa de preguntas, respuestas, indicaciones y fuentes para revisión docente. |

Es una web estática de **HTML, CSS y JavaScript**. No hay proceso de compilación: `dist/` contiene la versión lista para servir. Las imágenes se incluyen en el repositorio, con variantes WebP para distintos tamaños de pantalla.

## Criterios, privacidad y accesibilidad

Las 21 preguntas reúnen 22 respuestas y 87 opciones. Cada respuesta se interpreta de forma independiente como **adecuada según lo declarado**, **merece atención**, **requiere mayor atención**, **información insuficiente** o **dato de contexto**. Ninguna indicación establece por sí sola el estado del semen. La relación entre vacas y toros, la edad y la modalidad de monta se registran como contexto; «No sé» y las respuestas ausentes nunca producen un resultado favorable. La [matriz de revisión](docs/criterios-revision.md) explica cada regla y su fuente.

Las respuestas se conservan en `sessionStorage` durante la visita a esa pestaña. Si la persona pulsa «Guardar caso», inicia sesión con Google y las respuestas y explicaciones se guardan en Supabase. Cada cuenta puede consultar sus casos guardados. El formulario permite volver a pasos anteriores y limpiar todas las respuestas de la pestaña.

## Configuración de Supabase

El identificador del proyecto está en [`dist/supabase-config.js`](dist/supabase-config.js). Coloca allí la clave pública `sb_publishable_…` desde **Supabase > Project Settings > API Keys**. La conexión PostgreSQL que empieza con `postgresql://` se usa para administrar el esquema y requiere la contraseña real en lugar de `[YOUR-PASSWORD]`. La página se conecta mediante la API HTTPS de Supabase con la clave pública. La contraseña de PostgreSQL y la clave secreta de Google deben permanecer fuera de `dist/`.

Ejecuta [`supabase/migrations/20261112000000_saved_cases.sql`](supabase/migrations/20261112000000_saved_cases.sql) en el editor SQL del proyecto. Configura un cliente OAuth web de Google y agrega `https://dbraawsvosmipleetfbu.supabase.co/auth/v1/callback` como URI de redirección autorizada. Activa ese proveedor en **Supabase > Authentication > Providers > Google** con el ID y secreto del cliente. [`supabase/config.toml`](supabase/config.toml) define `https://torolab-bovino.vercel.app/` como URL del sitio y autoriza el retorno de Google a la dirección nueva, la anterior y el servidor local. Publica la aplicación OAuth para usuarios externos cuando el acceso se destine a todos los visitantes.

La interfaz incluye controles con etiquetas, navegación por teclado, indicaciones que no dependen solo del color y soporte para la preferencia de movimiento reducido. Las animaciones se detienen fuera de pantalla o cuando la pestaña está oculta; el modelo 3D dispone de una representación estática alternativa.

## Publicación y revisión

La rama `main` se despliega automáticamente en [Vercel](https://torolab-bovino.vercel.app/) mediante la integración con GitHub. [`vercel.json`](vercel.json) ejecuta `npm run check` y publica `dist/`. La web es accesible mediante su enlace y mantiene `noindex` mientras se revisa el contenido académico.

Las referencias respaldan el contexto general, pero **no validan el cuestionario ni sus niveles de atención**. Las correcciones científicas o editoriales deben contrastarse con las fuentes y actualizar tanto [`dist/content.js`](dist/content.js) como la [matriz de criterios](docs/criterios-revision.md). Antes de proponer cambios, ejecuta `npm run check`.

## Autores

- Dikson Aarón Guzmán Sibaja · [ORCID](https://orcid.org/0009-0004-0368-7781)
- José Ángel Aguirre Reyes · [ORCID](https://orcid.org/0009-0001-4447-772X)
- Joseph Fonseca Nuñez · [Portafolio](https://joseph-fonseca-dev.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/joseph-fonseca-n/)

Proyecto académico del **Instituto Tecnológico de Costa Rica, Campus Local San Carlos**. La identificación institucional no implica aprobación de la herramienta ni de sus criterios.
