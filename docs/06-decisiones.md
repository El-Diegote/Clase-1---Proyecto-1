# Decisiones

Este documento registra decisiones relevantes del proyecto.

| Fecha | Decision | Motivo | Impacto |
|---|---|---|---|
| Pendiente | Usar Markdown como formato principal de documentacion | Permite versionar, revisar y mantener el conocimiento del proyecto dentro del repositorio | Facilita el trabajo con Codex y GitHub |
| Pendiente | No desarrollar la aplicacion en la etapa inicial | Primero se requiere definir problema, objetivos, alcance y requisitos | Reduce el riesgo de construir sobre supuestos no validados |
| 2026-08-17 | Adoptar reglas explicitas de trabajo para Codex en `AGENTS.md` | Mantener alineados codigo, documentacion, decisiones y avances | Da criterios claros para futuras tareas del proyecto |
| 2026-08-17 | Crear un prototipo web local para UCEMA Deck Studio | Permite validar flujo, perfiles, previsualizacion y descarga PPT sin backend inicial | Acelera la revision funcional antes de invertir en integraciones |
| 2026-08-17 | Usar marca tipografica local en lugar de descargar logo oficial | Evita depender de activos externos o permisos no confirmados | La version institucional final debera usar activos oficiales autorizados |
| 2026-08-18 | Simplificar el workspace posterior al ingreso | El usuario solicito reemplazar secciones posteriores por tres recuadros de insumos, cuatro campos y una vista previa inferior | La interfaz queda enfocada en el generador predictivo |
| 2026-08-18 | Implementar analisis local preventivo de enlaces | Permite advertir senales basicas de riesgo sin backend ni proveedor externo | No reemplaza un servicio real de reputacion, ciberseguridad o cumplimiento legal |
| 2026-08-18 | Generar slides a partir del contenido legible del documento | La vista previa y la descarga deben reflejar el material subido, no solo metadatos | El PPT descargado usa los mismos slides que se muestran en la previsualizacion |

## Formato sugerido para nuevas decisiones

```markdown
## AAAA-MM-DD - Titulo de la decision

Decision:

Motivo:

Alternativas consideradas:

Impacto:
```
