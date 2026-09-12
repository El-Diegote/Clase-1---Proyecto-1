# Avances

Este documento registra el progreso del proyecto.

## 2026-08-17

### Realizado

- Se creo la estructura inicial del repositorio.
- Se agregaron archivos base de documentacion en Markdown.
- Se reservaron las carpetas `src/` y `data/` para etapas futuras.
- Se dejaron preguntas pendientes donde falta informacion del proyecto.
- Se actualizo `AGENTS.md` con reglas explicitas de trabajo para Codex.
- Se registro la decision correspondiente en `docs/06-decisiones.md`.
- Se definio el proyecto como aplicativo para crear presentaciones PowerPoint especificas de UCEMA.
- Se creo un prototipo funcional en `index.html`, `src/styles.css` y `src/app.js`.
- Se agrego validacion inicial de correo UCEMA y perfil docente/alumno.
- Se agrego carga de archivos, documentos, audios, enlaces e ideas.
- Se agrego previsualizacion de diapositivas y descarga `.pptx`.
- Se actualizo la documentacion del proyecto segun el nuevo alcance.

### Pendiente

- Confirmar dominios oficiales de correo para docentes y alumnos.
- Confirmar activos de marca UCEMA autorizados para uso en la aplicacion.
- Definir si se requiere autenticacion real.
- Definir si se requiere procesamiento automatico de documentos o audios.
- Inicializar o conectar el repositorio Git para poder crear ramas por cada cambio relevante.

### Observaciones

- En la primera etapa solo se habia organizado la documentacion.
- No se incorporaron datos inventados.

## 2026-08-18

### Realizado

- Se verifico la sintaxis de `src/app.js`.
- Se probo el ingreso con correo UCEMA en navegador local.
- Se confirmo la previsualizacion de diapositivas.
- Se confirmo la descarga real de un archivo `.pptx`.
- Se corrigio la carga del generador PowerPoint para usar el objeto global `PptxGenJS` cuando corresponda.
- Se simplifico la pantalla posterior al ingreso para mostrar el generador predictivo solicitado.
- Se agrego retorno al inicio de sesion desde la marca UCEMA superior izquierda.
- Se agrego carga por click o arrastrar y soltar.
- Se agrego grabacion de audio en vivo cuando el navegador lo permite.
- Se agrego analisis local preventivo de enlaces.
- Se reemplazaron secciones no solicitadas por campos de titulo, materia, duracion estimada y estilo.
- Se movio la previsualizacion a un recuadro inferior clickeable.
- Se agrego extraccion de texto para documentos compatibles.
- Se conecto la vista previa y la descarga PPT al mismo conjunto de slides generados desde el documento.

### Pendiente

- Confirmar dominios oficiales de correo para validacion definitiva.
- Reemplazar la marca tipografica provisoria por activos oficiales autorizados si UCEMA lo aprueba.
- Definir si se requiere analisis profundo de `PPTX` subidos.
- Inicializar o conectar el repositorio Git para poder crear ramas por cada cambio relevante.

## 2026-08-18

### Realizado

- Se preparo el proyecto para vincularlo con un repositorio GitHub.
- Se agrego `.gitignore` raiz para excluir credenciales, temporales, salidas locales y archivos generados.

### Pendiente

- Confirmar y ejecutar el primer `push` a GitHub.

## 2026-08-27

### Realizado

- Se inspecciono el archivo `C:\UCEMA - PPT\PesentacionUCEMA.pptx` como referencia visual.
- Se detecto una paleta dominante basada en borgona `#950028`, grises `#BFBFBF`, `#E7E6E6`, texto gris azulado `#44546A` y tipografia de referencia `Acumin Pro`.
- Se renderizo el PPT de referencia para revisar su estructura visual.
- Se incorporo un fondo visual extraido del PPT en `src/assets/ucema-template-cover.jpeg`.
- Se aplicaron los tonos de la paleta del PPT a la app.
- Se ajusto la previsualizacion para reflejar layouts de portada, titulo, contenido, seccion, grafico y cierre.
- Se ajusto la generacion del `.pptx` para usar esos mismos patrones visuales.

### Pendiente

- Confirmar autorizacion institucional para uso publico o productivo de los activos visuales UCEMA.
- Validar fidelidad visual final contra el template oficial en Microsoft PowerPoint.

## 2026-09-12

### Realizado

- Se reviso la devolucion de un evaluador externo como referencia de mejora, sin tomarla como instruccion prioritaria sobre las reglas del proyecto.
- Se agrego `prompts/system_prompt.md` con el contrato de trabajo del proyecto y ejemplos explicitos de caso normal y caso de escalamiento.
- Se agrego `prompts/user_prompt.md` con los prompts principales usados durante la construccion.
- Se agrego `docs/10-ejemplos.md` con ejemplos funcionales verificables y pendientes de validacion.
- Se agregaron corridas documentadas en `corridas/corrida_001/` y `corridas/corrida_002/`.
- Se agrego `corridas/corrida_003/` para completar tres casos documentados como pide la consigna.
- Se agrego `DECISIONES.md` en la raiz para cumplir el formato obligatorio del trabajo final.
- Se agregaron `docs/ECONOMIA.md` y `docs/GOBIERNO_Y_RIESGOS.md`.
- Se agrego `scripts/validar-estructura.ps1` para verificar archivos documentales esperados y buscar patrones basicos de secretos.
- Se actualizo el README para enlazar la evidencia nueva.

### Pendiente

- Convertir las corridas documentadas en pruebas automatizadas de navegador.
- Ampliar evidencia con casos reales de PDF, DOCX y audio cuando el alcance lo permita.
