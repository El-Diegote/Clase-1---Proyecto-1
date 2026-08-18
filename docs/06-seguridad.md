# Seguridad

## Alcance implementado

La aplicacion es un prototipo local en navegador. No implementa autenticacion real, autorizacion, cifrado propio, backend ni control institucional de usuarios.

## Validacion de correo

Implementado:

- La aplicacion valida que el correo tenga uno de estos dominios:
  - `ucema.edu.ar`
  - `alumnos.ucema.edu.ar`
  - `mail.ucema.edu.ar`

Limitacion:

- Esta validacion no prueba identidad ni pertenencia institucional.

## Manejo de archivos

Implementado:

- Los archivos se procesan en el navegador.
- No hay codigo que suba archivos a un servidor propio.
- No hay uso de `fetch` para enviar archivos.

Pendiente de validacion:

- Politica institucional para datos sensibles.
- Reglas de retencion, auditoria o eliminacion de documentos.

## Enlaces

Implementado:

- Analisis local preventivo de URLs.
- Deteccion por senales como ausencia de HTTPS, acortadores, dominios sospechosos, patrones enganosos y terminos de riesgo.

Limitacion:

- No se consulta reputacion real de URLs.
- No se descarga ni analiza el contenido de la pagina.
- No reemplaza revision legal, ciberseguridad ni cumplimiento institucional.

## Secretos y variables

Implementado:

- No hay variables de entorno necesarias.
- `.gitignore` excluye `.env`, `.env.*`, claves privadas, certificados, temporales y salidas generadas.

Verificacion local realizada:

- Busqueda de patrones sensibles en archivos versionables.
- El hallazgo de `password` en `src/app.js` corresponde a una expresion regular para detectar URLs sospechosas, no a una credencial.

## Pendiente de validacion

- Autenticacion real.
- Autorizacion por rol.
- Integracion con proveedor de reputacion de URLs.
- Reglas de seguridad para despliegue publico.
