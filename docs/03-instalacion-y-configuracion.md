# Instalacion y configuracion

## Requisitos

Implementado:

- Navegador moderno con JavaScript habilitado.
- Conexion a internet para cargar dependencias desde CDN.

No se requieren dependencias locales para utilizar la aplicacion abriendo `index.html`.

## Instalacion

No hay proceso de instalacion de paquetes. El proyecto no contiene `package.json`, lockfile ni scripts de build.

## Ejecucion

Desde Windows, se puede abrir el archivo principal con:

```powershell
start .\index.html
```

Tambien se puede abrir `index.html` manualmente desde el explorador de archivos.

## Variables de entorno

No hay variables de entorno necesarias.

El repositorio no debe versionar `.env`, claves privadas, certificados o secretos. Estas rutas y patrones estan excluidos en `.gitignore`.

## Configuracion disponible en codigo

En `src/app.js` existen listas locales para:

- dominios de correo aceptados;
- extensiones analizables;
- acortadores de URL considerados riesgosos;
- dominios de nivel superior considerados sospechosos;
- senales textuales de posible contenido ilegal.

## Pendiente de validacion

- Instalacion desde GitHub en otra maquina.
- Uso sin conexion a internet.
- Reemplazo de CDN por dependencias locales o empaquetadas.
