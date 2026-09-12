# Analisis economico

## Alcance

Este analisis se basa en el funcionamiento comprobable del repositorio. La aplicacion actual es un prototipo web estatico que corre en navegador y no invoca un modelo de lenguaje externo.

## Costo por corrida actual

| Concepto | Valor observado |
|---|---|
| Modelo de IA externo | No implementado |
| Tokens de entrada | 0 |
| Tokens de salida | 0 |
| Costo directo por tokens | USD 0 |
| Backend propio | No implementado |
| Almacenamiento remoto | No implementado |

El costo directo por corrida es USD 0 porque la generacion de slides se realiza con heuristicas locales en `src/app.js` y librerias cargadas en navegador.

## Dependencias utilizadas

La aplicacion carga librerias desde CDN:

- PptxGenJS para crear `.pptx`.
- PDF.js para extraer texto de PDF.
- Mammoth.js para extraer texto de DOCX.

Estas dependencias no generan costo directo por tokens. Pueden tener costos indirectos si el proyecto se despliega en infraestructura propia, pero ese despliegue no esta implementado en el repositorio.

## Proyeccion de uso

Supuesto de proyeccion academica: 7 corridas por semana.

| Horizonte | Corridas estimadas | Tokens estimados | Costo directo estimado |
|---|---:|---:|---:|
| Semana | 7 | 0 | USD 0 |
| Ano | 365 | 0 | USD 0 |

## Eleccion de modelo

No se selecciono un modelo de IA externo porque el alcance implementado utiliza reglas locales:

- division de texto en frases;
- extraccion simple de palabras frecuentes;
- cantidad de slides en funcion de duracion;
- estilos visuales predefinidos;
- analisis local de URLs por patrones.

Esta decision reduce costo y complejidad, pero limita la calidad semantica del analisis. Si se incorpora IA generativa en una etapa posterior, se debera elegir el modelo mas chico que resuelva correctamente la tarea y registrar:

- proveedor;
- modelo;
- tokens promedio por corrida;
- costo por corrida;
- costo semanal y anual;
- riesgos de privacidad de documentos cargados.

## Pendiente de validacion

- Costo de hosting si se publica la app.
- Costo de un proveedor de reputacion de URLs.
- Costo de transcripcion automatica de audio.
- Costo de un modelo generativo para resumen, reescritura o armado avanzado de slides.
