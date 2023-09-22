# Analizador de texto
![Visualización del proyecto](https://github.com/LidiaAliciaJG/Laboratoria_text-analyzer/blob/1b9a89be29ff73b2212750d07c871ab5698857c0/ResultadoFinal.png)

Proyecto desarrollado para el Bootcamp de Laboratoria en Desarrollo Web.

Este sitio web es un analizador de texto; permite la extracción de datos de un texto, en este caso, para conocer 6 métricas: cantidad de palabras, cantidad de caracteres, cantidad de caracteres excluyendo espacios y signos de puntuación, cantidad de cifras numéricas, la suma total de estos números y la longitud promedio de las palabras.

***

## Índice

* [1. Descripción del proyecto](#descripción-del-proyecto)
* [2. Características de la aplicación](#características-de-la-aplicación)
* [3. Deploy](#deploy)
* [4. Pruebas](#pruebas)
* [5. Tecnologías](#tecnologías)
* [6. Autora](#autora)

## Descripción del proyecto
Este analizador de texto se ha desarrollado para ser utilizado por un usuario que busque conocer la cantidad de palabras, carácteres y números, la suma de éstos y la longitud promedio de las palabras ingresadas. Este proyecto es aplicable en el ámbito escolar al solicitar ensayos con requerimientos específicos, así como en un ámbito laboral donde se desee crear textos con un límite tanto para redes sociales como para otras plataformas.

El proyecto inició con un prototipado de baja fidelidad que incluye interacción, el cual se muestra a continuación.
![Esquema del prototipado de baja resolución](https://github.com/LidiaAliciaJG/Laboratoria_text-analyzer/blob/691465a83b31f248df74e41e658b474e14e10464/Prototipo.gif)

Para su desarrollo se realizó una planeación con las etapas que se pueden observar en la siguiente imagen:

![Planificación del proyecto](https://github.com/LidiaAliciaJG/Laboratoria_text-analyzer/blob/65817e0f828d62a1b0b78aeedf908db75b2d2c38/Planeacion.gif)

## Características de la aplicación
El proyecto mantiene la siguiente estructura:

![Distribución de estructura](https://github.com/LidiaAliciaJG/Laboratoria_text-analyzer/blob/12f96cd69445e6464cfc74c4798ed95cf562d09f/Distribucion.png)

### Funcionalidades del proyecto
- `Cantidad de palabras`: Cuenta las palabras en el texto de entrada y muestra la cantidad al usuario.
- `Cantidad de caracteres`: Cuenta el número de carácteres en el texto de entrada, incluidos espacios y signos de puntuación, y muestra la cantidad al usuario.
- `Cantidad de solo caracteres`: Cuenta el número de carácteres en el texto de entrada sin considerar los espacios ni signos de puntuación, y se muestra la cantidad al usuario.
- `Cantidad de números`: Cuenta cuántos números hay en el texto de entrada, sin considerar los números dentro de una palabra y muestra la cantidad al usuario.
-  `Suma de los números`: Considerando los números que hay en el texto de entrada con la condición anterior, suma todas las cifras y muestra el resultado al usuario.
-  `Longitud promedio de las palabras`: Calcula el promedio de caracterés que incluyen las palabras en el texto de entrada y muestra el resultado al usuario.
-  `Botón de Borrar`: Botón que permite al usuario eliminar cualquier dato ingresado en la entrada de texto y las métricas mostradas se resetean.
-  `Entrada de texto`: Permite al usuario ingresar el texto que desea analizar.

## Deploy
La aplicación se encuentra publicado a través de Github Pages, accesible a todo usuario: [Link](https://lidiaaliciajg.github.io/Laboratoria_text-analyzer/src/index.html).

## Pruebas
El proyecto contiene una configuración para ser ejecutado en Github Action donde se evalúa el funcionamiento y requirimientos esperados.


## Tecnologías
* HTML
* CSS
* JavaScript

## Autora

| [<img src="https://github.com/LidiaAliciaJG.png?size=139">](https://github.com/LidiaAliciaJG) | [Lidia Alicia JG](https://github.com/LidiaAliciaJG) <br> <sub>[Sitio web](https://lidiaaliciajg.github.io/)</sub> <br> <sub>[LinkedIn](https://www.linkedin.com/in/lidiaaliciajg/)</sub> |
| :---: | :---: |


