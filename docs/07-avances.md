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
