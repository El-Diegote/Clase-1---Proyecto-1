# Arquitectura

## Tipo de aplicacion

La aplicacion es estatica. No incluye backend, base de datos, servidor de aplicacion ni persistencia remota.

## Componentes

```text
index.html
  ├── estructura de interfaz
  ├── carga de librerias externas por CDN
  └── enlace a src/styles.css y src/app.js

src/styles.css
  ├── layout responsive
  ├── estilos de login
  ├── estilos del generador predictivo
  ├── estilos de previsualizacion de slides
  └── paleta y patrones visuales derivados del PPT de referencia

src/app.js
  ├── estado en memoria
  ├── validacion de correo
  ├── manejo de archivos y drag-and-drop
  ├── extraccion de texto
  ├── analisis local de enlaces
  ├── generacion de slides
  ├── previsualizacion
  └── descarga PPT

src/assets/
  └── asset visual extraido del PPT de referencia para fondo de portada
```

## Dependencias externas

Implementado en `index.html`:

- PptxGenJS desde CDN para generar archivos `.pptx`.
- PDF.js desde CDN para extraer texto de PDF.
- Mammoth.js desde CDN para extraer texto de DOCX.

## Estado de datos

El estado se mantiene en memoria dentro de `src/app.js`. No hay almacenamiento local, cookies, base de datos ni envio de archivos a servidor propio.

## Flujo de datos

```text
Entrada del usuario
  -> estado en memoria
  -> extraccion y normalizacion de texto
  -> seleccion de frases y palabras frecuentes
  -> construccion de slides
  -> previsualizacion HTML
  -> generacion PPTX
```

## Pendiente de validacion

- Arquitectura futura si se agrega autenticacion real.
- Arquitectura futura si se agrega backend, almacenamiento, IA externa o procesamiento avanzado de archivos.
