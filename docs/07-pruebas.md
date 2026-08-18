# Pruebas

## Estado

No hay suite automatizada de pruebas incluida en el repositorio.

## Validaciones realizadas

Comprobado durante el desarrollo:

- `src/app.js` no presenta errores de sintaxis al evaluarse con Node.js del runtime de Codex.
- `index.html` responde correctamente al servirse con un servidor HTTP temporal.
- El flujo en navegador permite:
  - ingresar con correo UCEMA;
  - seleccionar perfil;
  - generar vista previa;
  - descargar un `.pptx`;
  - volver al inicio de sesion desde la marca UCEMA;
  - visualizar la aplicacion en ancho movil sin desborde horizontal detectado.

## Validaciones funcionales comprobadas

- Para perfil docente, duracion de 40 minutos y estilo academico, se genero una presentacion con multiples slides.
- Para perfil alumno, duracion de 10 minutos y estilo visual, se genero una presentacion mas breve.
- La descarga `.pptx` contiene texto proveniente de los slides generados.

## Validaciones de seguridad comprobadas

- `.gitignore` excluye `work/`, `outputs/`, `.env`, `.pptx` y `.pdf` generados.
- Se revisaron patrones frecuentes de secretos en archivos versionables.

## Pendiente de validacion

- Pruebas automatizadas versionadas.
- Pruebas con archivos PDF y DOCX variados.
- Pruebas con documentos escaneados.
- Pruebas de compatibilidad entre navegadores.
- Pruebas visuales con PowerPoint instalado.
- Pruebas de accesibilidad.
