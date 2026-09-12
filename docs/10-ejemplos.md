# Ejemplos verificables

Este documento agrega ejemplos concretos de uso para reforzar el contrato funcional del prototipo.

## Caso NORMAL: docente con documento academico

### Entrada

- Correo: `profesor@ucema.edu.ar`
- Perfil: `Docente`
- Documento: archivo de texto con contenido academico.
- Materia: `Innovacion Educativa`
- Duracion estimada: `40 minutos`
- Estilo: `Academico`

### Resultado esperado

- La aplicacion acepta el ingreso.
- El documento aparece como archivo analizable.
- Al clickear `Previa vista`, se generan multiples slides.
- La vista previa incluye contenido extraido del documento.
- El boton `Descargar PPT` genera un archivo `.pptx`.
- El `.pptx` contiene los mismos slides vistos en la previsualizacion.

### Evidencia disponible

- Flujo probado durante el desarrollo con navegador local y documento de prueba.
- El PPT generado fue inspeccionado internamente para confirmar texto extraido del documento.

## Caso NORMAL: alumno con exposicion breve

### Entrada

- Correo: `alumno@alumnos.ucema.edu.ar`
- Perfil: `Alumno`
- Duracion estimada: `10 minutos`
- Estilo: `Visual y sintetico`
- Ideas escritas en el recuadro central.

### Resultado esperado

- La aplicacion acepta el ingreso.
- La previsualizacion genera una presentacion mas breve que en el caso docente de 40 minutos.
- La vista previa conserva formato responsive en ancho movil.

### Evidencia disponible

- Flujo probado durante el desarrollo en viewport movil.

## Caso ESCALAR: enlace sospechoso

### Entrada

- URL ingresada: `http://bit.ly/login.zip`

### Resultado esperado

- La aplicacion marca el enlace con advertencia local.
- Las razones esperadas son:
  - no usa HTTPS;
  - usa acortador;
  - coincide con patron sospechoso.

### Accion humana esperada

No usar el enlace como fuente confiable sin revision. El prototipo no determina legalidad ni reputacion real del sitio.

## Caso ESCALAR: formato no analizable

### Entrada

- Archivo con extension no incluida en la lista analizable.

### Resultado esperado

- El archivo queda cargado como referencia.
- La aplicacion informa que no puede analizar ese formato en profundidad.
- La generacion de slides usa el resto de los insumos disponibles.

## Pendiente de validacion

- Ejemplos con PDF escaneado.
- Ejemplos con DOCX complejos.
- Ejemplos con PPTX subidos como fuente.
- Ejemplos con audio transcripto automaticamente.

## Archivos relacionados

- `data/ejemplo-docente.txt`: texto ficticio para caso docente.
- `data/ejemplo-alumno.txt`: texto ficticio para caso alumno.
- `corridas/corrida_001/`: entrada, salida esperada y metadata del caso docente.
- `corridas/corrida_002/`: entrada, salida esperada y metadata del caso de enlace sospechoso.
- `corridas/corrida_003/`: entrada, salida esperada y metadata del caso alumno.
- `prompts/system_prompt.md`: contrato de trabajo con ejemplos NORMAL y ESCALAR.
