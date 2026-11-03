# Revisión de la edición visual 1.2

3 de noviembre de 2026.

## Cambios

- Cinco escenas de finca fotográficas generadas con IA sustituyen las ilustraciones vectoriales. Conservan los puntos educativos y el acceso a la pregunta correspondiente.
- Una fotografía de laboratorio y un modelo celular transparente completan la colección. Procedencia y prompts en `fotografias-premium.md` e `imagenes-cientificas-premium.md`.
- Diseño editorial en toda la web: tipografía, portada, tarjetas, formulario, resultados, evaluación, recursos y pie de página.
- Imágenes WebP adaptables de 480, 960 y 1672 px en las escenas, carga diferida y dimensiones declaradas. Se conserva la fotografía principal anterior.
- El selector de factores muestra los cinco grupos en celular. Los pasos solo llevan marca de completado si tienen todas sus respuestas.
- No se modificaron las preguntas, opciones, fuentes ni criterios de `content.js`.

## Comprobaciones

- `npm run check`: sintaxis correcta y 14 pruebas superadas.
- Navegación de las seis pantallas principales sin desbordamiento horizontal a 320 px; inspección visual también a 390, 768 y 1280 px.
- Las cinco escenas muestran su fotografía y sus puntos. Seleccionar un tema abre su explicación; entrar desde un tema enfoca la pregunta y no elige respuestas ni marca grupos vacíos como completados.
- Recorrido del formulario completo de 15 preguntas con navegación hacia atrás y adelante. Las cuatro respuestas del grupo de manejo permanecieron seleccionadas. Recargar conserva la visita.
- Caso de prueba con diez respuestas desconocidas y cinco contextuales: quince resultados, diez etiquetas de información insuficiente y cinco de contexto, sin estados favorables inferidos.
- Controles de movimiento progresivo/reducido, pausa, tres partes del modelo y menor/mayor cantidad comprobados. La comparación cambia de cuatro a doce células en el mismo contenedor. El foco se conserva al actualizar la vista.
- Navegación con Tab entre controles; tablas de criterios contenidas en su propio desplazamiento horizontal en celular. Menú móvil se cierra tras elegir una página.
- Sin errores ni advertencias en la consola del navegador durante el recorrido local.

Las representaciones están identificadas como generadas con IA y sin escala. La revisión visual y funcional no valida el cuestionario como instrumento clínico. El contenido conserva el aviso de revisión académica.
