# Requisitos

## Requisitos funcionales

- Validar correo institucional y perfil al ingresar.
- Distinguir entre perfil docente y perfil alumno.
- Permitir carga de archivos y documentos.
- Extraer texto de documentos compatibles para generar slides.
- Permitir carga de audios con ideas.
- Permitir grabacion de audio en vivo cuando el navegador lo permita.
- Permitir ingreso de enlaces.
- Detectar senales locales de enlaces maliciosos, sospechosos o potencialmente ilegales.
- Permitir ingreso de resumen, consigna o ideas principales.
- Permitir completar titulo de presentacion, materia, duracion estimada y estilo.
- Mostrar previsualizacion de cada diapositiva al clickear un recuadro inferior.
- Descargar la presentacion en formato `.pptx` con los mismos slides generados en la previsualizacion.

## Requisitos no funcionales

- Interfaz en espanol.
- Diseno responsive.
- Uso de paleta visual inspirada en UCEMA.
- No subir archivos a servidores en el prototipo local.
- No almacenar credenciales.
- Mantener documentacion actualizada.
- Advertir que el analisis local de enlaces no reemplaza validacion institucional o servicios especializados.

## Datos necesarios

- Correo del usuario.
- Perfil declarado.
- Archivos, documentos o audios cargados por el usuario.
- Enlaces ingresados por el usuario.
- Texto de consigna o ideas principales.

## Restricciones

- No hay autenticacion institucional real en esta etapa.
- La generacion de PowerPoint depende de una libreria externa cargada desde CDN.
- El uso definitivo de identidad UCEMA requiere validar permisos y activos oficiales.

## Preguntas pendientes

- Que formatos de archivo deben procesarse en profundidad?
- Se requiere transcripcion automatica de audio?
- Las presentaciones deben seguir plantillas oficiales obligatorias?
- Debe existir historial de presentaciones generadas?
- Se integrara un proveedor real de reputacion de URLs o seguridad web?
- Se requiere analisis profundo de archivos `PPTX` subidos o solo generacion de nuevos `PPTX`?
