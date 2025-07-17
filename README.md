# Verificador Par o Impar con Web Components

## Descripción
Este programa es una Aplicación web interactiva desarrollada con JavaScript y Web Components que permite al usuario ingresar un rango de números y ver si cada número es par o impar.

## Componentes
- `<input-range>`: Captura el rango (inicio y fin).
- `<par-impar-lista>`: Muestra los resultados con la paridad.

## Características Técnicas
- Web Components personalizados con ciclo de vida (`constructor`, `connectedCallback`).
- Comunicación entre componentes usando `CustomEvent`.
- Uso de Shadow DOM para encapsular lógica y estilo.

## Instalación
1. Copiar este repositorio o descargar los archivos.
2. Abrir `index.html` en un navegador.

## Uso
1. Ingresar un número de inicio y otro número de fin. (Rango)
2. Dar clic en "Verificar".
3. Observar la lista generada con la paridad de cada número.
