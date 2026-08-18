# UCEMA Deck Studio

## Qué construí

Construí un prototipo web estático para crear presentaciones PowerPoint con una identidad visual inspirada en UCEMA. Sirve para cargar documentos, ideas, enlaces y audios, generar una vista previa de slides y descargar un `.pptx`. Está pensado para docentes y alumnos que necesitan transformar materiales académicos en una presentación inicial editable.

## Cómo se lo pedí

Prompts principales usados, en orden:

```text
Quiero inicializar este repositorio como un proyecto organizado y documentado en Markdown.

Creá la siguiente estructura:

- README.md
- AGENTS.md
- docs/01-problema.md
- docs/02-objetivos-y-alcance.md
- docs/03-requisitos.md
- docs/04-solucion-propuesta.md
- docs/05-plan-de-trabajo.md
- docs/06-decisiones.md
- docs/07-avances.md
- src/
- data/

El proyecto consiste en: [describir aquí la idea].

La documentación debe estar escrita en español, con lenguaje profesional y comprensible. No inventes datos ni requisitos. Cuando falte información, dejá una pregunta pendiente claramente identificada.

Por ahora, no desarrolles la aplicación. Primero organizá la documentación y proponé un plan de trabajo.
```

```text
Ahora sí, quiero crear un aplicativo para crear presentaciones de power point, pero que sea específico de la Universidad del CEMA y que sea apto tanto para docentes como para alumnos.
Debe contar con botones para subir información: archivos, documentos, lecturas, enlaces, audio con ideas, etc
Debe contar con boton para descarga de la presentación
Debe contar con boton para previsualización de la presentación
Debe contar las ediciones y formatos de PPT predictivos
Debe tener diseños actuales del Logo, tipografía, paleta de colores y gráficos relacionados con UCEMA
Debe distinguir entre perfil docente y alumno: para ello, al ingresar en el ''html'' valida mail y/o perfil
```

```text
Al ingresar como usuario:
el ''UCEMA'' de arriba a la izquierda tiene que volver a la ventana de inicio de sesión
A continuación, se debe ver el generador predictivo que contiene:
1) recuadro para clickear ''+'' y/o arrastrar archivos, documentos ,etc
2) recuadro para escribir ideas, consignas, supuestos, audios o grabar en vivo un audio sobre lo que va a ser la presentación
3) enlaces reales para copiar y pegar y que se obtenga la información. Importante: en este ítem que detecte si es una página maliciosa o de contenido ilegal.
Todo lo que sigue no me sirve. Reemplazalo por campos a rellanar y/o seleccionar que digan:
a) Título de la presentación
b) Materia
c) Duración estimada
d) Estilo

Abajo de todo tiene que haber un recuadro chiquito donde al clickear se hace un previa vista de la presentacion
```

```text
Probé subir un documento y no me hace ni la previsualización de los slides del ppt y el archivo que descargo no crear una presentación en power point o pdf sobre ese archivo.
Necesito que el boton ''previa vista'' haga una previsualización de cada slide o una ventana de cómo se vería. Y quiero que el botón ''descargar ppt'' realmente cree un power point descargable que contenga los slides que hayan analizado y predecido ese documento para que se cree una presentación a partir de la duración que se estima y el estilo que se elige.
```

```text
Analizá integralmente este repositorio y creá un README.md profesional en español.

El contenido debe basarse exclusivamente en los archivos y en el funcionamiento comprobable del proyecto. No inventes funcionalidades.
```

```text
Además del README.md, creá la siguiente documentación:

docs/
├── 01-descripcion-funcional.md
├── 02-arquitectura.md
├── 03-instalacion-y-configuracion.md
├── 04-manual-de-uso.md
├── 05-modelo-de-datos.md
├── 06-seguridad.md
├── 07-pruebas.md
├── 08-limitaciones.md
└── 09-proximos-pasos.md

Agregá en el README.md un índice con enlaces relativos a estos documentos.

Documentá solamente características verificables en el código. Cuando no puedas comprobar algo, marcá la sección como "Pendiente de validación".
```

## Qué funciona

Funciona el ingreso con correo de dominio UCEMA y selección de perfil `Docente` o `Alumno`. Después del ingreso, la marca `UCEMA` de arriba a la izquierda vuelve a la pantalla inicial.

Funciona la carga de archivos por click o arrastrar y soltar. La aplicación puede extraer texto de `TXT`, `MD`, `CSV`, `JSON`, `HTML`, `PDF` y `DOCX`; otros formatos quedan como referencia. También permite escribir ideas y consignas, adjuntar audio, grabar audio si el navegador lo permite e ingresar enlaces para un análisis local preventivo.

Funciona el botón `Previa vista`: genera una previsualización de slides en pantalla a partir del texto disponible, la duración estimada y el estilo elegido. Funciona el botón `Descargar PPT`: genera un `.pptx` descargable con los mismos slides mostrados en la previa.

Se probó en navegador local el flujo de ingreso, generación de vista previa y descarga de PowerPoint. También se verificó sintaxis de `src/app.js`, comportamiento responsive básico y que `work/`, `outputs/`, `.env`, `.pptx` y `.pdf` generados queden excluidos por `.gitignore`.

Para usarlo, abrir `index.html` en un navegador con JavaScript e internet habilitados, ingresar un correo UCEMA, cargar materiales, completar título, materia, duración y estilo, clickear `Previa vista` y luego `Descargar PPT`.

## Qué falta o qué falló

Falta autenticación real contra sistemas de UCEMA. La validación actual solo revisa dominios locales: `ucema.edu.ar`, `alumnos.ucema.edu.ar` y `mail.ucema.edu.ar`.

Falta usar activos oficiales autorizados de UCEMA. El logo está representado como marca tipográfica `UCEMA`; no se incorporaron archivos oficiales de marca dentro del repositorio.

Falta análisis profundo de archivos `PPTX` subidos. La aplicación genera nuevos `.pptx`, pero no interpreta presentaciones cargadas como fuente estructurada.

Falta transcripción automática de audio. Los audios se adjuntan o se graban como insumo, pero el contenido hablado no se convierte a texto.

Falta análisis real del contenido de enlaces. El detector actual revisa señales locales de riesgo en la URL, como falta de HTTPS, acortadores, dominios sospechosos y patrones engañosos, pero no consulta un servicio de reputación ni analiza legalmente la página.

Falló al principio la descarga real del PowerPoint porque el CDN usado no exponía el objeto esperado por el navegador. Se corrigió usando el objeto global `PptxGenJS` cuando está disponible.

También falló la primera versión de carga de documentos porque solo usaba los archivos como referencia declarada. Se corrigió agregando extracción de texto para formatos compatibles y conectando esa extracción con la vista previa y el `.pptx` descargado.

En esta máquina, los comandos genéricos `python` y `node` no estaban disponibles en el `PATH` normal. Las validaciones técnicas se hicieron con el runtime incluido en Codex.

## Qué aprendí

Aprendí que trabajar con agentes sirve mejor cuando el pedido se parte en pasos verificables: primero estructura, después interfaz, después comportamiento real y finalmente documentación.

También entendí que una interfaz puede parecer lista aunque todavía no esté conectada a la lógica importante; en este caso, la diferencia fue hacer que el documento subido realmente alimentara los slides.

La documentación ayuda a ordenar el proyecto, pero solo es útil si distingue con honestidad lo implementado de lo pendiente.

El agente puede acelerar mucho el armado, las pruebas y la corrección, pero necesita feedback concreto del usuario para ajustar el producto a lo que realmente se esperaba.
