# User prompts principales

Este archivo conserva las instrucciones principales dadas por el usuario durante la construccion del proyecto.

## Inicializacion documental

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

## Creacion del aplicativo

```text
Ahora sí, quiero crear un aplicativo para crear presentaciones de power point, pero que sea específico de la Universidad del CEMA y que sea apto tanto para docentes como para alumnos.
Debe contar con botones para subir información: archivos, documentos, lecturas, enlaces, audio con ideas, etc
Debe contar con boton para descarga de la presentación
Debe contar con boton para previsualización de la presentación
Debe contar las ediciones y formatos de PPT predictivos
Debe tener diseños actuales del Logo, tipografía, paleta de colores y gráficos relacionados con UCEMA
Debe distinguir entre perfil docente y alumno: para ello, al ingresar en el ''html'' valida mail y/o perfil
```

## Ajuste de interfaz

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

## Correccion de analisis documental

```text
Probé subir un documento y no me hace ni la previsualización de los slides del ppt y el archivo que descargo no crear una presentación en power point o pdf sobre ese archivo.
Necesito que el boton ''previa vista'' haga una previsualización de cada slide o una ventana de cómo se vería. Y quiero que el botón ''descargar ppt'' realmente cree un power point descargable que contenga los slides que hayan analizado y predecido ese documento para que se cree una presentación a partir de la duración que se estima y el estilo que se elige.
```

## Documentacion y trazabilidad

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

## Ajuste de README tipo bitacora

```text
Quiero que la estructura del README sea:

# [Nombre de lo que construiste]

## Qué construí
(2-5 líneas: qué es, para qué sirve, para quién)

## Cómo se lo pedí
(las instrucciones/prompts principales que usaste, en orden; pegalos textuales)

## Qué funciona
(qué probaste y anduvo, cómo se usa)

## Qué falta o qué falló
(qué no anduvo, qué error apareció, qué intentaste; sé específico)

## Qué aprendí
(3-5 líneas honestas: qué entendiste del trabajo con agentes haciendo esto)
```

## Aplicacion de referencia visual

```text
esta es la carpeta donde quiero que trabajes como escritorio: C:\UCEMA - PPT
además, quiero que incorpores la paleta de colores que tiene este archivo ppt y que la presentación tenga ese formato y estructura de contenido.
Aplica los tonos de la paleta de colores del ppt a toda la app
```
