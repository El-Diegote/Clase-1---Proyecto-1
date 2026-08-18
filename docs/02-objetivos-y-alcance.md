# Objetivos y alcance

## Objetivo general

Crear un aplicativo para generar presentaciones PowerPoint con identidad UCEMA, apto para docentes y alumnos.

## Objetivos especificos

- Permitir ingreso con correo institucional y perfil declarado.
- Permitir carga de archivos, documentos, lecturas, enlaces y audios.
- Generar una estructura predictiva de diapositivas.
- Permitir previsualizacion antes de descargar.
- Permitir descarga en formato `.pptx`.
- Mantener un estilo visual alineado con referencias institucionales UCEMA.

## Alcance incluido

- Prototipo web local en HTML, CSS y JavaScript.
- Distincion entre perfil docente y alumno.
- Previsualizacion de diapositivas en pantalla.
- Generacion de archivo PowerPoint desde el navegador.

## Fuera de alcance

- Autenticacion real contra sistemas UCEMA.
- Procesamiento avanzado de documentos o transcripcion automatica de audio.
- Almacenamiento en servidor.
- Uso definitivo de activos oficiales de marca sin autorizacion institucional.

## Criterios de exito

- El usuario puede ingresar con un correo de dominio UCEMA aceptado.
- El usuario puede cargar materiales y enlaces.
- El usuario puede ver una previsualizacion.
- El usuario puede descargar un archivo `.pptx`.

## Supuestos

- La validacion de correo se implementa inicialmente por dominio.
- El perfil docente o alumno se declara al ingresar.
- La identidad visual se basa en referencias publicas y debe validarse con activos oficiales antes de uso institucional.

## Preguntas pendientes

- Cuales son los dominios de correo UCEMA oficiales para docentes y alumnos?
- Se necesitara inicio de sesion real?
- Que permisos existen para usar logo, tipografia y plantillas oficiales?
