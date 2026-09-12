# System prompt del proyecto

Este archivo documenta las instrucciones permanentes utilizadas para orientar el trabajo de Codex dentro del repositorio.

```text
Escribir toda la documentacion en espanol.

Desarrollar el proyecto progresivamente, manteniendo alineados el codigo y la documentacion.

No inventar datos ni requisitos.
Senalar explicitamente los supuestos.
Utilizar datos ficticios o anonimizados.
No incorporar contrasenas, credenciales ni claves.
Explicar los cambios antes de realizarlos.
Mantener actualizado docs/07-avances.md.
Registrar decisiones importantes en docs/06-decisiones.md.
Crear una rama diferente para cada cambio relevante.
Verificar el funcionamiento antes de considerar terminada una tarea.
```

## Ejemplos

### Caso NORMAL

Entrada esperada:

```text
Usuario UCEMA valido, perfil Docente, documento TXT con contenido academico, duracion 40 minutos y estilo Academico.
```

Respuesta esperada del sistema:

```text
La aplicacion permite el ingreso, analiza el texto del documento, genera una vista previa con multiples slides y descarga un archivo PPTX con los mismos slides.
```

### Caso ESCALAR

Entrada esperada:

```text
Usuario UCEMA valido, URL http://bit.ly/login.zip ingresada en Enlaces reales.
```

Respuesta esperada del sistema:

```text
La aplicacion no bloquea por si sola el uso del enlace, pero lo marca con advertencia local por no usar HTTPS, usar acortador y coincidir con un patron sospechoso. La revision humana queda pendiente.
```

## Pendiente de validacion

- Estas instrucciones no corresponden a un agente productivo con herramientas externas; documentan el criterio de trabajo usado para construir este prototipo.

## Seis piezas del contrato

### Objetivo

Crear un prototipo local para transformar materiales academicos de docentes y alumnos UCEMA en una presentacion PowerPoint inicial, revisable y descargable.

### Entradas

- Correo UCEMA y perfil declarado.
- Archivos seleccionados por el usuario.
- Ideas, consignas y supuestos escritos.
- Audios adjuntos o grabados.
- Enlaces pegados por el usuario.
- Titulo, materia, duracion estimada y estilo.

### Herramientas

- File API del navegador para leer archivos seleccionados.
- PDF.js para extraer texto de PDF.
- Mammoth.js para extraer texto de DOCX.
- MediaRecorder del navegador cuando hay permiso de microfono.
- PptxGenJS para generar el archivo `.pptx`.
- Clasificador local de URL implementado en `src/app.js`.

### Proceso

1. Validar correo institucional por dominio.
2. Registrar perfil docente o alumno.
3. Leer insumos disponibles.
4. Extraer texto de formatos compatibles.
5. Revisar enlaces con reglas locales de riesgo.
6. Generar slides segun duracion, estilo y contenido disponible.
7. Mostrar previsualizacion.
8. Descargar un `.pptx` editable.

### Salida estructurada

La salida interna es una lista de slides con campos verificables: `type`, `layout`, `title`, `body`, `bullets`, `meta`, `tags`, `accent` y `note`, segun el tipo de slide.

### Supervision

La app no publica ni envia resultados automaticamente. La persona usuaria debe revisar la vista previa y el PPT descargado antes de usarlo. Para uso institucional, queda pendiente una aprobacion humana de marca, seguridad y contenido.
