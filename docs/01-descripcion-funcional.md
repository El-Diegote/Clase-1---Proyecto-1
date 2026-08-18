# Descripcion funcional

## Alcance implementado

UCEMA Deck Studio es una aplicacion web estatica para generar una presentacion PowerPoint a partir de insumos cargados por el usuario.

La aplicacion permite:

- ingresar con un correo de dominio UCEMA;
- seleccionar perfil `Docente` o `Alumno`;
- cargar archivos por selector o arrastrar y soltar;
- escribir ideas, consignas y supuestos;
- adjuntar audio;
- grabar audio en vivo cuando el navegador lo permite;
- ingresar enlaces;
- analizar senales locales de riesgo en URLs;
- configurar titulo, materia, duracion estimada y estilo;
- generar una previsualizacion de slides;
- descargar un archivo `.pptx`.

## Flujo principal

1. El usuario ingresa correo y perfil.
2. La aplicacion valida que el dominio del correo este dentro de la lista local permitida.
3. El usuario carga documentos, texto libre, enlaces o audios.
4. Al clickear `Previa vista`, la aplicacion intenta extraer texto de documentos compatibles.
5. La aplicacion genera una lista de slides a partir del texto disponible, duracion y estilo.
6. La vista previa muestra los slides generados.
7. Al clickear `Descargar PPT`, se crea un archivo `.pptx` con los mismos slides.

## Perfiles

Implementado:

- `Docente`: configura valores iniciales orientados a clase.
- `Alumno`: configura valores iniciales orientados a exposicion breve.

Pendiente de validacion:

- Reglas institucionales reales para distinguir docentes y alumnos.
- Relacion entre perfil y permisos.

## Formatos de archivo

Implementado:

- Lectura directa: `TXT`, `MD`, `CSV`, `JSON`, `HTML`, `HTM`.
- Lectura de `PDF` mediante PDF.js.
- Lectura de `DOCX` mediante Mammoth.js.

Pendiente de validacion:

- Calidad de extraccion en documentos extensos, escaneados o con estructura compleja.
- Procesamiento profundo de `PPTX` subidos.

## Salida generada

Implementado:

- Vista previa HTML de cada slide.
- Descarga de archivo `.pptx` generado con PptxGenJS.

Pendiente de validacion:

- Compatibilidad visual final en todas las versiones de Microsoft PowerPoint.
- Exportacion a PDF.
