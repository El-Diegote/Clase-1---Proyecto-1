# Gobierno y riesgos

## Sistemas que toca

Implementado:

- Navegador del usuario.
- Archivos locales seleccionados manualmente por el usuario.
- Librerias externas cargadas por CDN desde `index.html`.

No implementado:

- Backend propio.
- Base de datos.
- Integracion con sistemas UCEMA.
- Escritura sobre sistemas productivos.
- Envio automatico de documentos a servicios de IA.

## Permisos

| Recurso | Permiso actual | Observacion |
|---|---|---|
| Archivos locales | Lectura de archivos seleccionados por el usuario | Se procesan en memoria del navegador |
| Audio | Permiso del navegador para grabar microfono | Depende de aprobacion del usuario |
| Enlaces | Texto pegado por el usuario | No se descarga la pagina |
| PowerPoint descargado | Escritura local iniciada por el navegador | El usuario decide guardar el archivo |

## Nivel de supervision humana

Se adopta vocabulario L0-L4 para el alcance actual:

| Nivel | Aplicacion al proyecto |
|---|---|
| L0 | La app organiza texto, propone slides y aplica formato localmente |
| L1 | El usuario revisa la vista previa antes de descargar |
| L2 | El docente o alumno edita y valida contenido antes de usar la presentacion |
| L3 | Para uso institucional, un responsable autorizado debe aprobar marca, tono y contenido |
| L4 | No aplica en el prototipo: no hay accion automatica sobre sistemas productivos |

## Quien firma el resultado

Para el alcance academico, la persona usuaria que genera la presentacion debe revisar y firmar el contenido final antes de usarlo.

Si el proyecto pasa a uso institucional, queda pendiente definir una autoridad responsable de aprobar:

- identidad visual;
- uso de marca UCEMA;
- tratamiento de datos;
- seguridad de enlaces;
- contenidos academicos generados.

## Riesgos y respuestas

| Riesgo | Impacto | Respuesta implementada o prevista |
|---|---|---|
| Documento con informacion sensible | Exposicion accidental en una presentacion | La app procesa localmente, pero se recomienda anonimizar datos |
| URL maliciosa | Uso de fuente riesgosa | Se marcan advertencias locales por patrones sospechosos |
| URL ilegal o no confiable | Incorporacion de contenido inapropiado | La app no valida legalidad; requiere revision humana |
| Error de extraccion de PDF o DOCX | Slides incompletos o incorrectos | El usuario debe revisar la vista previa |
| Audio no transcripto | Ideas habladas no aparecen en slides | La transcripcion automatica esta pendiente |
| Uso no autorizado de marca | Riesgo institucional | Pendiente validar activos y manual de marca |
| Dependencia CDN no disponible | La app puede fallar al generar o leer archivos | Pendiente empaquetar dependencias localmente |

## Reglas de confianza

- No confiar en la salida sin leer la vista previa.
- No usar enlaces marcados con advertencia sin revision humana.
- No cargar documentos con datos sensibles si no fueron anonimizados.
- No usar la identidad visual como version oficial sin aprobacion institucional.

## Pendiente de validacion

- Politica formal de tratamiento de documentos.
- Proveedor de autenticacion.
- Proveedor de reputacion de URLs.
- Responsable institucional de aprobacion.
