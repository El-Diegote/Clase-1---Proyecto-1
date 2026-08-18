# Limitaciones

## Limitaciones funcionales

- La validacion de usuario es solo por dominio de correo.
- El perfil `Docente` o `Alumno` es declarado por el usuario.
- No hay autenticacion institucional real.
- No hay autorizacion por rol.
- No hay persistencia de datos.
- No hay historial de presentaciones.

## Limitaciones de procesamiento

- La extraccion de texto depende del formato y calidad del documento.
- Los PDF escaneados o con texto como imagen pueden no aportar contenido util.
- Los archivos `PPTX` subidos no se analizan en profundidad.
- Los audios no se transcriben.
- Los enlaces no se descargan ni se leen; solo se analiza la URL ingresada.

## Limitaciones de generacion

- La generacion de slides usa reglas locales de seleccion de frases y palabras frecuentes.
- No usa modelos de IA externos.
- No valida calidad pedagogica, juridica ni academica del contenido.
- El diseno del PPT es basico y generado desde codigo.

## Limitaciones de marca

- La marca `UCEMA` se representa tipograficamente.
- No se incorporan activos oficiales autorizados dentro del repositorio.

## Limitaciones tecnicas

- La aplicacion depende de CDNs externos.
- Sin internet, la generacion de PPT y la lectura de PDF/DOCX pueden fallar.
- No hay proceso de build ni empaquetado.

## Pendiente de validacion

- Uso institucional real.
- Compatibilidad final con plantillas oficiales UCEMA.
- Comportamiento con documentos extensos o altamente estructurados.
