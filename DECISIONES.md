# DECISIONES

Este archivo se agrega en la raiz porque la consigna del trabajo final pide un `DECISIONES.md` directamente legible por el evaluador. Complementa el registro mas detallado de `docs/06-decisiones.md`.

## Resumen del proceso

El proyecto comenzo como una estructura documental en Markdown y evoluciono hacia un prototipo web local para generar presentaciones PowerPoint con identidad visual inspirada en UCEMA.

La construccion fue iterativa:

- primero se creo la estructura base del repositorio;
- luego se implemento una interfaz para docentes y alumnos;
- despues se corrigio la previsualizacion para que reflejara el contenido cargado;
- mas tarde se ajusto la descarga para generar un `.pptx` real;
- finalmente se incorporo la paleta y estructura visual de un PPT de referencia provisto por el usuario.

## Iteraciones principales

### Iteracion 001 - Documentacion inicial

Se crearon `README.md`, `AGENTS.md`, `docs/`, `src/` y `data/`.

Resultado: el repositorio quedo organizado para trabajar progresivamente, pero todavia no habia aplicacion.

### Iteracion 002 - Prototipo funcional

Se creo una aplicacion web estatica en `index.html`, `src/styles.css` y `src/app.js`.

Resultado: la app permitia ingreso por correo UCEMA, seleccion de perfil, carga de insumos, previsualizacion y descarga.

### Iteracion 003 - Correccion de vista previa y descarga

El usuario detecto que subir documentos no generaba una presentacion real basada en el archivo.

Cambio realizado: se agrego extraccion de texto para formatos compatibles y se conecto el mismo conjunto de slides con la vista previa y el PPT descargable.

### Iteracion 004 - Identidad visual UCEMA desde PPT de referencia

El usuario compartio `C:\UCEMA - PPT\PesentacionUCEMA.pptx`.

Cambio realizado: se inspecciono el PPT, se extrajo la paleta dominante y se aplicaron tonos borgona/gris, tipografia de referencia y layouts inspirados en portada, contenido, seccion, grafico y cierre.

### Iteracion 005 - Ajuste por rubrica del trabajo final

Se reviso la consigna del trabajo final y una devolucion de evaluador externo.

Cambio realizado: se agregaron prompts, ejemplos, corridas documentadas, analisis economico, gobierno/riesgos y validacion local de estructura.

## Fallas y correcciones

| Falla observada | Causa | Correccion |
|---|---|---|
| El PPT descargado no se generaba correctamente en navegador | El CDN no exponia el constructor esperado en la primera version | Se ajusto la descarga para usar `window.pptxgen` o `window.PptxGenJS` |
| El documento cargado no alimentaba la presentacion | La primera version trataba archivos solo como referencias | Se agrego extraccion de texto y generacion de slides desde contenido legible |
| El detector de enlaces podia parecer una validacion completa | Solo hay heuristicas locales | Se documento explicitamente que no reemplaza reputacion real, analisis legal ni ciberseguridad |
| Faltaban ejemplos explicitos del contrato | La documentacion anterior describia funcionamiento, pero no casos NORMAL/ESCALAR | Se agregaron `prompts/system_prompt.md`, `docs/10-ejemplos.md` y `corridas/` |

## Decisiones relevantes

| Fecha | Decision | Motivo | Impacto |
|---|---|---|---|
| 2026-08-17 | Usar una aplicacion web estatica | Permite validar el flujo sin backend inicial | Menor complejidad, pero sin autenticacion real |
| 2026-08-17 | Validar correo por dominio UCEMA | Diferenciar perfil institucional de forma simple | No prueba identidad real |
| 2026-08-18 | Procesar archivos en navegador | Evita subir documentos a un servidor propio | Menor riesgo de exposicion, limitado por capacidades del navegador |
| 2026-08-18 | Usar heuristicas locales para enlaces | Permite advertencias preventivas sin conector externo | No determina reputacion real ni legalidad del contenido |
| 2026-08-27 | Aplicar paleta del PPT de referencia | El usuario pidio respetar formato y tonos del archivo provisto | Mejora consistencia visual, pendiente validar uso institucional |
| 2026-09-12 | Documentar corridas y ejemplos | La rubrica exige reproducibilidad y contrato claro | Mejora evaluabilidad del repositorio |

## Supuestos

- El archivo PPT provisto por el usuario puede usarse como referencia visual dentro del alcance academico.
- Los datos de ejemplo son ficticios y no representan informacion sensible.
- El evaluador revisara el repositorio y no necesariamente ejecutara un entorno complejo.

## Pendiente

- Validar uso institucional de marca, logos, tipografia y activos visuales.
- Incorporar autenticacion real si el proyecto se convierte en producto.
- Automatizar pruebas de navegador.
- Incorporar IA generativa real solo si se define proveedor, costo, privacidad y gobierno.
