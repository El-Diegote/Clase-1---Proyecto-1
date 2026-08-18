# Solucion propuesta

## Enfoque inicial

Construir un prototipo web local con `index.html`, `src/styles.css` y `src/app.js`. El aplicativo permite validar el ingreso, volver al inicio desde la marca UCEMA, cargar insumos, extraer texto de documentos compatibles, analizar enlaces de forma preventiva, previsualizar una estructura de diapositivas y descargar un PowerPoint generado en el navegador con los mismos slides de la previa.

## Componentes previstos

- `index.html`: estructura de la aplicacion.
- `src/styles.css`: identidad visual, layout responsive y componentes.
- `src/app.js`: validacion, sugerencias, previsualizacion y generacion PPT.
- Extraccion de texto: lectura directa de TXT, MD, CSV, JSON y HTML; lectura de PDF mediante PDF.js; lectura de DOCX mediante Mammoth.
- Analisis local de enlaces: clasifica senales de riesgo por protocolo, dominios, acortadores, patrones sospechosos y terminos de riesgo.
- `docs/`: documentacion del proyecto.
- `data/`: carpeta reservada para datos de prueba.

## Alternativas consideradas

- Aplicacion local estatica: elegida para una primera version simple y revisable.
- Aplicacion con backend: pendiente para una etapa futura si se requiere autenticacion real, almacenamiento o procesamiento de archivos.
- Integracion con servicios institucionales: pendiente de definicion.

## Riesgos iniciales

- Uso de activos de marca sin autorizacion formal.
- Validacion insuficiente si se requiere autenticacion real.
- Dependencia de CDN para generar PowerPoint.
- Dependencia de CDN para leer PDF y DOCX.
- Procesamiento limitado del contenido cargado.
- Deteccion limitada de enlaces maliciosos o ilegales si no se integra un servicio especializado.
- Incorporacion accidental de informacion sensible.

## Preguntas pendientes

- Se usara una plantilla oficial de UCEMA para PPT?
- El aplicativo debera funcionar sin conexion?
- Se integrara con algun sistema academico o repositorio documental?
