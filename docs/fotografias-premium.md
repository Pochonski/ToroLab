# Fotografías editoriales de los cinco factores

Fecha: 3 de noviembre de 2026.

## Procedencia y uso

Cinco imágenes originales generadas con la herramienta integrada `image_gen.imagegen`, mediante cinco llamadas independientes en modo `photorealistic-natural`. No se utilizó CLI ni API externa. Las escenas son ficticias y generadas con IA para educación; no documentan una finca ni un toro identificado. La fotografía aporta contexto y no permite determinar la edad, fertilidad, salud ni calidad seminal del animal.

Estética común: fotografía agrícola editorial, finca tropical inspirada en San Carlos, Costa Rica, toro adulto negro tipo Brahman cruzado, tonos bosque y oliva, texturas naturales y luz matinal suave. Se inspeccionaron las cinco salidas: sujetos reconocibles y coherentes, sin texto legible ni marcas, sin intervenciones veterinarias invasivas y sin montas.

Los originales generados están conservados en el directorio de Codex. Los archivos destinados a la web están copiados al proyecto en WebP. Conversión con Pillow: RGB, WebP calidad 88 (original) y 86 (variante 960), método 6; reducción Lanczos. No se recortó, recompuso ni retocó ninguna fotografía. Las dimensiones originales son **1672 × 941 px** (proporción prácticamente 16:9); variantes **960 × 540 px**.

## Archivos y composición

Las coordenadas de puntos seleccionables se expresan como porcentajes **x,y** sobre la imagen completa, origen en esquina superior izquierda. Para conservar su correspondencia, mantener la proporción de la imagen y evitar `object-fit: cover` con recortes distintos.

| Asset | Dimensiones | Tamaño |
|---|---|---|
| `dist/assets/premium/ambiente.webp` | 1672 × 941 | 432214 bytes |
| `dist/assets/premium/ambiente-960.webp` | 960 × 540 | 156088 bytes |
| `dist/assets/premium/nutricion.webp` | 1672 × 941 | 417056 bytes |
| `dist/assets/premium/nutricion-960.webp` | 960 × 540 | 156400 bytes |
| `dist/assets/premium/salud.webp` | 1672 × 941 | 362632 bytes |
| `dist/assets/premium/salud-960.webp` | 960 × 540 | 141552 bytes |
| `dist/assets/premium/reproductor.webp` | 1672 × 941 | 373572 bytes |
| `dist/assets/premium/reproductor-960.webp` | 960 × 540 | 146418 bytes |
| `dist/assets/premium/manejo.webp` | 1672 × 941 | 489824 bytes |
| `dist/assets/premium/manejo-960.webp` | 960 × 540 | 179976 bytes |

### ambiente

Árbol de sombra a la izquierda, toro adulto en el centro, bebedero de concreto con agua en primer plano a la derecha.

Puntos recomendados: Sombra: 15,35 · Agua: 86,68 · Luz/calor contextual: 83,18.

Original conservado: `/home/pocho/.codex/generated_images/01a1a344-8556-7831-b10e-06aa2db8ebf7/exec-432e34e2-bd18-4e33-a318-cfe1b660780f.png`

Prompt completo:

```text
Use case: photorealistic-natural.
Asset type: premium agricultural editorial photograph for an educational website about cattle reproductive management.
Style/medium: sophisticated authentic location photography, natural textures, subtle film-like tonal depth, fine photographic detail; never illustration, never CGI. All subjects and scenery fictional.
Scene: a lush tropical cattle farm in San Carlos, Costa Rica, with subdued forest green and olive, weathered timber, warm neutral tones, soft early morning light. Healthy mature black Brahman-cross bull with anatomically correct legs, hooves, natural body proportions and horns. Peaceful agricultural context.
Framing: panoramic 16:9 image, 2048x1152 if possible, carefully composed wide view, level natural perspective, everything described is truly in the same photographic scene.
Constraints: no written words, no logos, no labels, no watermarks, no graphic sun, no floating icons, no decorative shapes, no score or diagnostic imagery, no surreal elements. Do not exaggerate saturation.
Primary request: Show environmental conditions as an aspirational but authentic tropical pasture.
Composition: a large leafy shade tree occupies the left fifth of the picture with clearly visible shadow on the ground; the healthy mature black bull stands calmly at the center in three-quarter view, its whole body visible; a solid clean concrete drinking trough filled with clear visible water occupies the foreground at the right fifth. Open green pasture and a little softly lit sky upper right, warm morning sunlight from upper right. The tree, bull and trough are separate recognizable subjects and not overlapping one another.
```

### nutricion

Forraje y heno en comedero a la izquierda, cuerpo entero del toro en el centro, reserva de alimento sin marcas a la derecha.

Puntos recomendados: Forraje: 16,61 · Condición corporal (consulta): 50,49 · Reserva: 89,47.

Original conservado: `/home/pocho/.codex/generated_images/01a1a344-8556-7831-b10e-06aa2db8ebf7/exec-f168311b-7c7a-4688-a635-79d91e25a6ad.png`

Prompt completo:

```text
Use case: photorealistic-natural.
Asset type: premium agricultural editorial photograph for an educational website about cattle reproductive management.
Style/medium: sophisticated authentic location photography, natural textures, subtle film-like tonal depth, fine photographic detail; never illustration, never CGI. All subjects and scenery fictional.
Scene: a lush tropical cattle farm in San Carlos, Costa Rica, with subdued forest green and olive, weathered timber, warm neutral tones, soft early morning light. Healthy mature black Brahman-cross bull with anatomically correct legs, hooves, natural body proportions and horns. Peaceful agricultural context.
Framing: panoramic 16:9 image, 2048x1152 if possible, carefully composed wide view, level natural perspective, everything described is truly in the same photographic scene.
Constraints: no written words, no logos, no labels, no watermarks, no graphic sun, no floating icons, no decorative shapes, no score or diagnostic imagery, no surreal elements. Do not exaggerate saturation.
Primary request: Show feeding resources and a bull's visible body in a real farm environment.
Composition: fresh cut forage and dry hay in a low rustic feeding trough at the left fifth; a healthy mature black bull standing at the center in full body side or three-quarter view, the silhouette of torso and all legs clearly visible; neat feed storage of a few hay bales and plain unlabelled tan feed sacks to the right fifth under a simple open-sided shelter. Very clean editorial composition with textures of forage and grass, no emaciation, no obesity, no clinical score.
```

### salud

Toro tranquilo dentro del corral y veterinaria fuera de la cerca a la derecha; observación sin procedimientos.

Puntos recomendados: Animal: 31,42 · Patas/desplazamiento: 31,75 · Antecedentes y consulta: 89,40.

Original conservado: `/home/pocho/.codex/generated_images/01a1a344-8556-7831-b10e-06aa2db8ebf7/exec-b6ea4772-10a9-4765-9eed-94b727cc633d.png`

Prompt completo:

```text
Use case: photorealistic-natural.
Asset type: premium agricultural editorial photograph for an educational website about cattle reproductive management.
Style/medium: sophisticated authentic location photography, natural textures, subtle film-like tonal depth, fine photographic detail; never illustration, never CGI. All subjects and scenery fictional.
Scene: a lush tropical cattle farm in San Carlos, Costa Rica, with subdued forest green and olive, weathered timber, warm neutral tones, soft early morning light. Healthy mature black Brahman-cross bull with anatomically correct legs, hooves, natural body proportions and horns. Peaceful agricultural context.
Framing: panoramic 16:9 image, 2048x1152 if possible, carefully composed wide view, level natural perspective, everything described is truly in the same photographic scene.
Constraints: no written words, no logos, no labels, no watermarks, no graphic sun, no floating icons, no decorative shapes, no score or diagnostic imagery, no surreal elements. Do not exaggerate saturation.
Primary request: An ethically safe livestock health observation scene, not a procedure.
Composition: healthy calm mature black bull stands inside a well-maintained secure wooden corral in the left and middle half, all four legs visible, natural relaxed posture. At the right third, a Costa Rican female veterinarian in a cream shirt, dark green trousers and practical boots stands outside the wooden fence, observing the bull without contact. She carries a simple clipboard with paper that has no legible text. Fence clearly separates person and bull. No needle, no examination of genitals, no close handling, no unsafe restraint. Quiet natural tropical pasture in the background.
```

### reproductor

Toro adulto de perfil y tres cuartos a la izquierda; manos y cuaderno de registro fuera del corral en primer plano derecho.

Puntos recomendados: Individuo: 22,28 · Cuerpo: 43,47 · Registro: 80,70.

Original conservado: `/home/pocho/.codex/generated_images/01a1a344-8556-7831-b10e-06aa2db8ebf7/exec-c67d8768-c071-48de-be9b-13f66b061df1.png`

Prompt completo:

```text
Use case: photorealistic-natural.
Asset type: premium agricultural editorial photograph for an educational website about cattle reproductive management.
Style/medium: sophisticated authentic location photography, natural textures, subtle film-like tonal depth, fine photographic detail; never illustration, never CGI. All subjects and scenery fictional.
Scene: a lush tropical cattle farm in San Carlos, Costa Rica, with subdued forest green and olive, weathered timber, warm neutral tones, soft early morning light. Healthy mature black Brahman-cross bull with anatomically correct legs, hooves, natural body proportions and horns. Peaceful agricultural context.
Framing: panoramic 16:9 image, 2048x1152 if possible, carefully composed wide view, level natural perspective, everything described is truly in the same photographic scene.
Constraints: no written words, no logos, no labels, no watermarks, no graphic sun, no floating icons, no decorative shapes, no score or diagnostic imagery, no surreal elements. Do not exaggerate saturation.
Primary request: A handsome adult breeding bull and a farmer's real record notebook in a tropical farm. This image conveys observing the individual bull and checking its recorded history, never guessing its age from appearance.
Composition: a beautiful mature black Brahman-cross bull in side to three-quarter profile standing inside a secure wooden corral at the left and center of the wide image. Its head is around x27% y33%, whole body visible. At the lower right foreground, outside the corral, a Costa Rican farmer's natural hands hold an open plain notebook and a few paper record sheets with faint ruling but absolutely no legible text, a pen in hand. Only hands, cuffs of a neutral shirt and perhaps a partial forearm visible; the notebook is around x77% y69%. Wooden fence clearly divides bull from farmer. Keep photographic depth and realistic scale.
```

### manejo

Toro a la izquierda, pocas vacas espaciadas en el potrero, cuaderno y lapicero sobre cerca en primer plano a la derecha.

Puntos recomendados: Toro: 28,45 · Grupo: 70,38 · Registros: 78,74.

Original conservado: `/home/pocho/.codex/generated_images/01a1a344-8556-7831-b10e-06aa2db8ebf7/exec-f9aada45-e46c-4efa-a44e-bd238b1df2b4.png`

Prompt completo:

```text
Use case: photorealistic-natural.
Asset type: premium agricultural editorial photograph for an educational website about cattle reproductive management.
Style/medium: sophisticated authentic location photography, natural textures, subtle film-like tonal depth, fine photographic detail; never illustration, never CGI. All subjects and scenery fictional.
Scene: a lush tropical cattle farm in San Carlos, Costa Rica, with subdued forest green and olive, weathered timber, warm neutral tones, soft early morning light. Healthy mature black Brahman-cross bull with anatomically correct legs, hooves, natural body proportions and horns. Peaceful agricultural context.
Framing: panoramic 16:9 image, 2048x1152 if possible, carefully composed wide view, level natural perspective, everything described is truly in the same photographic scene.
Constraints: no written words, no logos, no labels, no watermarks, no graphic sun, no floating icons, no decorative shapes, no score or diagnostic imagery, no surreal elements. Do not exaggerate saturation.
Primary request: Calm organized grazing and herd management with real written records, broad pastoral view.
Composition: wide landscape photograph, one healthy mature black Brahman-cross bull at center-left x32% y48%, a small number of adult cows spaced naturally across the center and right of the pasture at x58% to80%, no crowded herd, fence boundary visible. In the near lower-right foreground, a real plain open farm records notebook and simple pen rest on the broad flat top of a rustic wooden fence rail, around x88% y78%. Notebook must have no legible text. All cattle standing or grazing peacefully, no mounting, no breeding action, no claimed signs of pregnancy, no floating calendar. The wide grassy landscape and distant tropical trees have depth and warm early-morning light.
```

## Revisión visual

- Ambiente: sombra, bebedero con agua y luz matinal presentes; la luz no representa una medición de temperatura.
- Nutrición: comedero, cuerpo completo y reserva de alimento visibles. La imagen no asigna una puntuación corporal.
- Salud: veterinaria separada por la cerca; cuatro extremidades reconocibles y sin procedimientos.
- Reproductor: libreta con hojas en blanco y rayado tenue, sin texto legible; no atribuir edad a la imagen.
- Manejo: toro y vacas separados naturalmente, sin monta; cuaderno real integrado en primer plano, sin calendarios flotantes.

No se detectaron fallos que impidan el uso editorial previsto. Las imágenes deben acompañarse del aviso general de representación con IA para no presentarlas como documentación de campo.


## Optimización para tarjetas y navegación

Se añadieron variantes `ambiente-480.webp`, `nutricion-480.webp`, `salud-480.webp`, `reproductor-480.webp` y `manejo-480.webp` de 480×270 mediante ImageMagick. Se conservan las imágenes completas y las versiones de 960 px. El navegador elige la resolución mediante `srcset` según el tamaño y la densidad de pantalla; no se cambia la composición.
