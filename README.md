# UCEMA Deck Studio

## Descripcion ejecutiva

UCEMA Deck Studio es un prototipo web estatico para crear presentaciones PowerPoint con una identidad visual inspirada en la Universidad del CEMA. La aplicacion permite ingresar con un correo de dominio UCEMA, seleccionar perfil docente o alumno, cargar materiales, generar una vista previa de diapositivas y descargar un archivo `.pptx`.

El proyecto funciona en el navegador con HTML, CSS y JavaScript. No tiene backend, base de datos ni autenticacion institucional real.

## Problema que busca resolver

Docentes y alumnos pueden necesitar convertir lecturas, documentos, consignas, enlaces e ideas en una presentacion ordenada. El problema abordado por este prototipo es reducir el trabajo manual inicial de estructurar slides, manteniendo una interfaz simple y una salida editable en PowerPoint.

## Usuarios destinatarios

- Docentes que preparan clases, seminarios, actividades o cierres conceptuales.
- Alumnos que preparan exposiciones, entregas o defensas breves.

## Funcionalidades principales

Implementado:

- Ingreso con correo de dominio UCEMA y seleccion de perfil `Docente` o `Alumno`.
- Retorno al inicio de sesion desde la marca `UCEMA` superior izquierda.
- Carga de archivos por seleccion manual o arrastrar y soltar.
- Extraccion de texto de documentos compatibles: `TXT`, `MD`, `CSV`, `JSON`, `HTML`, `PDF` y `DOCX`.
- Carga de audios como insumo de referencia.
- Grabacion de audio en vivo cuando el navegador y los permisos lo permiten.
- Ingreso de ideas, consignas y supuestos en texto libre.
- Ingreso de enlaces y analisis local preventivo de senales de riesgo.
- Campos configurables: titulo de la presentacion, materia, duracion estimada y estilo.
- Generacion de slides predictivos a partir del texto disponible.
- Previsualizacion de cada slide en la pagina.
- Descarga de un archivo `.pptx` con los mismos slides mostrados en la previsualizacion.
- Diseno responsive para escritorio y pantallas moviles.

No implementado:

- Autenticacion real contra sistemas internos de UCEMA.
- Procesamiento profundo de archivos `PPTX` subidos.
- Transcripcion automatica del audio.
- Consulta real del contenido de enlaces externos.
- Servicio externo de reputacion de URLs, ciberseguridad o validacion legal.
- Persistencia de usuarios, historial o presentaciones generadas.

## Tecnologias utilizadas

- HTML5.
- CSS3.
- JavaScript en navegador.
- [PptxGenJS](https://gitbrent.github.io/PptxGenJS/) mediante CDN para generar archivos `.pptx`.
- PDF.js mediante CDN para extraer texto de archivos `PDF`.
- Mammoth.js mediante CDN para extraer texto de archivos `DOCX`.

## Arquitectura general

La aplicacion es estatica y se ejecuta completamente en el navegador:

```text
Usuario
  |
  v
index.html
  |
  +-- src/styles.css   -> estilos, layout responsive e identidad visual
  |
  +-- src/app.js       -> validacion, lectura de documentos, generacion de slides,
                          previsualizacion, analisis local de enlaces y descarga PPT
  |
  +-- CDNs externos    -> PptxGenJS, PDF.js y Mammoth.js
```

Los archivos cargados se procesan localmente en el navegador. El proyecto no incluye servidor propio ni subida de archivos a un backend.

## Documentacion del proyecto

- [Descripcion funcional](docs/01-descripcion-funcional.md)
- [Arquitectura](docs/02-arquitectura.md)
- [Instalacion y configuracion](docs/03-instalacion-y-configuracion.md)
- [Manual de uso](docs/04-manual-de-uso.md)
- [Modelo de datos](docs/05-modelo-de-datos.md)
- [Seguridad](docs/06-seguridad.md)
- [Pruebas](docs/07-pruebas.md)
- [Limitaciones](docs/08-limitaciones.md)
- [Proximos pasos](docs/09-proximos-pasos.md)

## Estructura de carpetas

```text
.
├── .gitignore
├── AGENTS.md
├── README.md
├── index.html
├── data/
│   └── .gitkeep
├── docs/
│   ├── 01-descripcion-funcional.md
│   ├── 02-arquitectura.md
│   ├── 03-instalacion-y-configuracion.md
│   ├── 04-manual-de-uso.md
│   ├── 05-modelo-de-datos.md
│   ├── 06-seguridad.md
│   ├── 07-pruebas.md
│   ├── 08-limitaciones.md
│   ├── 09-proximos-pasos.md
│   └── documentos de definicion y seguimiento del proyecto
└── src/
    ├── .gitkeep
    ├── app.js
    └── styles.css
```

Carpetas locales excluidas por `.gitignore`:

- `work/`: archivos temporales y pruebas locales.
- `outputs/`: entregables o plantillas generadas fuera del producto principal.
- `node_modules/`, entornos virtuales, temporales, `.env`, `.pptx` y `.pdf` generados.

## Requisitos para utilizarlo

Para uso normal:

- Navegador moderno con JavaScript habilitado.
- Conexion a internet para cargar las librerias desde CDN.
- Correo con alguno de los dominios aceptados por el prototipo:
  - `ucema.edu.ar`
  - `alumnos.ucema.edu.ar`
  - `mail.ucema.edu.ar`

No se requieren dependencias locales para el uso normal.

## Instrucciones de instalacion

Este proyecto no requiere instalacion de dependencias locales.

1. Obtener una copia del repositorio.
2. Abrir `index.html` directamente en el navegador.
3. Verificar que el navegador tenga acceso a internet para cargar las librerias externas desde CDN.

## Variables de entorno necesarias

No hay variables de entorno obligatorias.

El proyecto no debe incluir archivos `.env` ni secretos. El `.gitignore` excluye `.env`, `.env.*`, claves privadas y certificados locales.

## Instrucciones de ejecucion

Abrir el archivo principal desde la carpeta del proyecto:

```powershell
start .\index.html
```

Tambien puede abrirse manualmente con doble click sobre `index.html`.

## Ejemplos de uso

### Crear una presentacion docente

1. Abrir la aplicacion.
2. Ingresar un correo con dominio UCEMA.
3. Elegir perfil `Docente`.
4. Cargar un documento compatible, por ejemplo `TXT`, `PDF` o `DOCX`.
5. Completar:
   - titulo de la presentacion;
   - materia;
   - duracion estimada;
   - estilo.
6. Clickear `Previa vista`.
7. Revisar los slides generados.
8. Clickear `Descargar PPT`.

### Crear una presentacion de alumno

1. Ingresar con correo UCEMA.
2. Elegir perfil `Alumno`.
3. Escribir ideas, consigna o supuestos.
4. Opcionalmente agregar enlaces o audios de referencia.
5. Seleccionar una duracion breve, por ejemplo `10 minutos`.
6. Elegir estilo `Visual y sintetico`.
7. Generar la vista previa y descargar el `.pptx`.

## Pruebas y validaciones disponibles

No hay una suite automatizada de tests incluida en el repositorio y no existe un script de pruebas versionado.

Validaciones comprobadas durante el desarrollo:

- Validacion manual en navegador:
  - ingreso con correo UCEMA;
  - seleccion de perfil;
  - generacion de vista previa;
  - descarga de `.pptx`;
  - comportamiento responsive basico.

- Validacion tecnica con runtime de Codex:
  - verificacion de sintaxis de `src/app.js`;
  - ejecucion temporal con servidor HTTP local;
  - prueba de flujo en navegador con generacion de previa y descarga.

- Validacion de seguridad local:
  - busqueda de patrones sensibles como tokens, claves, contrasenas y `.env`;
  - verificacion de que `work/`, `outputs/`, `.env`, `.pptx` y `.pdf` generados queden excluidos por `.gitignore`.

## Limitaciones conocidas

- La validacion de usuario solo revisa el dominio del correo y el perfil declarado.
- No existe autenticacion real contra sistemas de UCEMA.
- La identidad visual usa una marca tipografica `UCEMA`; no incorpora activos oficiales autorizados.
- El analisis de enlaces es local y preventivo. No reemplaza un servicio especializado de reputacion, ciberseguridad o cumplimiento legal.
- Los enlaces no se descargan ni se analizan en profundidad; solo se evalua la URL ingresada.
- Los audios se adjuntan o graban como referencia, pero no se transcriben.
- Los archivos `PPTX` subidos no se analizan en profundidad en esta version.
- La generacion de slides usa reglas locales de extraccion, seleccion de frases y palabras frecuentes. No usa un modelo de IA externo.
- La aplicacion depende de CDNs para generar `.pptx` y leer `PDF`/`DOCX`.
- No hay persistencia de datos ni historial.

## Proximos pasos

- Confirmar dominios institucionales definitivos para docentes y alumnos.
- Reemplazar la marca tipografica por activos UCEMA oficiales si se cuenta con autorizacion.
- Definir si se requiere autenticacion real.
- Integrar transcripcion de audio si el flujo lo necesita.
- Incorporar analisis profundo de `PPTX` subidos.
- Evaluar un servicio real de seguridad para reputacion de URLs.
- Agregar una suite automatizada de pruebas.
- Definir si habra backend, almacenamiento o historial de presentaciones.

## Estado actual del proyecto

Estado: prototipo funcional inicial.

El proyecto permite crear y descargar presentaciones `.pptx` desde una aplicacion web estatica. La funcionalidad principal esta implementada, pero quedan pendientes validaciones institucionales, integraciones reales y automatizacion de pruebas.
