# UCEMA Deck Studio

## Resumen

Este repositorio contiene un aplicativo web local para crear presentaciones de PowerPoint con una identidad visual inspirada en la Universidad del CEMA.

La herramienta esta pensada para docentes y alumnos. Permite ingresar con un correo institucional, cargar materiales, generar una estructura predictiva de diapositivas, previsualizar el contenido y descargar una presentacion `.pptx`.

## Estado actual

Estado: prototipo funcional inicial.

El prototipo funciona como aplicacion HTML, CSS y JavaScript. La descarga de PowerPoint utiliza una libreria externa cargada desde CDN.

## Estructura del repositorio

```text
.
├── index.html
├── README.md
├── AGENTS.md
├── docs/
│   ├── 01-problema.md
│   ├── 02-objetivos-y-alcance.md
│   ├── 03-requisitos.md
│   ├── 04-solucion-propuesta.md
│   ├── 05-plan-de-trabajo.md
│   ├── 06-decisiones.md
│   └── 07-avances.md
├── src/
│   ├── app.js
│   └── styles.css
└── data/
```

## Funcionalidades iniciales

- Validacion de correo con dominio UCEMA.
- Seleccion de perfil docente o alumno.
- Carga y analisis de archivos y documentos con click o arrastrar y soltar.
- Registro de ideas, consignas, supuestos, audios adjuntos y grabacion en vivo cuando el navegador lo permite.
- Registro y analisis preventivo local de enlaces.
- Campos de titulo, materia, duracion estimada y estilo.
- Previsualizacion de cada slide predicho desde un recuadro inferior.
- Descarga de una presentacion PowerPoint basada en los mismos slides de la previsualizacion.

## Formatos analizados

El prototipo extrae texto de `TXT`, `MD`, `CSV`, `JSON`, `HTML`, `PDF` y `DOCX`.

Otros formatos, incluidos algunos `PPTX`, se cargan como referencia pero no se analizan en profundidad en esta version.

## Supuestos

- La validacion inicial acepta dominios `ucema.edu.ar`, `alumnos.ucema.edu.ar` y `mail.ucema.edu.ar`.
- El perfil docente o alumno se declara al ingresar.
- El prototipo no autentica contra sistemas internos de UCEMA.
- Los archivos cargados se procesan en el navegador y no se suben a un servidor.
- El logotipo se representa como marca tipografica local. Para uso institucional final debe reemplazarse por activos oficiales autorizados.
- La deteccion de enlaces maliciosos o ilegales es una validacion local por senales de riesgo. No reemplaza un servicio real de ciberseguridad, reputacion de URLs o cumplimiento legal.

## Documentacion principal

- `docs/01-problema.md`: contexto, problema a resolver y preguntas abiertas.
- `docs/02-objetivos-y-alcance.md`: objetivos, limites y criterios de exito.
- `docs/03-requisitos.md`: requisitos funcionales, no funcionales y datos necesarios.
- `docs/04-solucion-propuesta.md`: enfoque de solucion, alternativas y riesgos.
- `docs/05-plan-de-trabajo.md`: fases sugeridas y proximos pasos.
- `docs/06-decisiones.md`: decisiones importantes y su justificacion.
- `docs/07-avances.md`: registro cronologico de avances.

## Preguntas pendientes

- Que dominios de correo institucional deben validarse oficialmente?
- Que activos de marca UCEMA pueden utilizarse dentro del aplicativo?
- Se requiere autenticacion real contra un sistema institucional?
- Se espera que el aplicativo procese el contenido de archivos o solo los use como insumo declarado?
