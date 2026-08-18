# Modelo de datos

## Estado general

La aplicacion no tiene base de datos. El modelo de datos existe solo en memoria dentro del objeto `state` de `src/app.js`.

## Estructura principal

Campos observables en codigo:

| Campo | Uso |
|---|---|
| `profile` | Perfil seleccionado: docente o alumno |
| `email` | Correo ingresado por el usuario |
| `files` | Archivos cargados |
| `audio` | Audios adjuntos |
| `recordedAudio` | Audio grabado en vivo |
| `extractedDocs` | Textos extraidos y advertencias por documento |
| `slides` | Slides generados para previsualizacion y descarga |
| `linkFindings` | Resultado del analisis local de URLs |
| `recorder` | Instancia de grabacion de audio |
| `recordedChunks` | Fragmentos temporales de audio grabado |
| `lastAnalysisSignature` | Firma local para evitar regenerar sin cambios |

## Documento extraido

Estructura usada para documentos procesados:

| Campo | Descripcion |
|---|---|
| `name` | Nombre del archivo |
| `text` | Texto extraido cuando el formato es compatible |
| `warning` | Advertencia cuando el archivo no pudo leerse o no es analizable |

## Slide generado

Estructura usada para previsualizacion y PPT:

| Campo | Descripcion |
|---|---|
| `title` | Titulo del slide |
| `points` | Lista de bullets |
| `footer` | Texto de pie |

## Resultado de enlace

Estructura usada por el analisis local de URLs:

| Campo | Descripcion |
|---|---|
| `level` | `safe`, `warning` o `danger` |
| `label` | Mensaje mostrado al usuario |

## Persistencia

Implementado:

- Sin persistencia.
- Sin almacenamiento local.
- Sin envio a servidor propio.

Pendiente de validacion:

- Modelo de datos si se incorpora backend, historial, usuarios reales o almacenamiento de presentaciones.
