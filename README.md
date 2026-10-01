# Trabajo Grupal RA1: Matriculator

## Organización del Grupo y Temporalización
* **Integrantes del grupo:** 3 personas.
* **Reparto de tareas:**
  * **Byron:** Definición del caso de uso (Paso 1) y diseño del flujo y pseudocódigo (Paso 3).
  * **Igor:** Análisis de Google Trends, comparativa de lenguajes y matriz de decisión (Paso 2 y 5).
  * **Dani:** Programa y diagrama de flujo (paso 3), los notebook y la demo (paso 4.c), web estática y documentación.
* **Temporalización:**
  * **Dia 1:** Elección de opción (Matriculator), extracción de Google Trends y definición teórica -- Igor.
  * **Dia 2:** Comparativa de lenguajes, matriz de decisión y redacción del flujo técnico -- Byron.
  * **Dia 3:** Creación de notebooks, desarrollo web en HTML, subida a Netlify y revisión final --  Dani.
---

# 1. Aplicación hipotética: Matriculator

## 1.1 Explicación de la aplicación

Matriculator es una aplicación hipotética para una empresa de aparcamientos que usa Inteligencia Artificial para detectar y leer matrículas en imágenes, y el objetivo es automatizar esta tarea, así ahorrar tiempo al personal y bajar la cantidad de errores al escribir las matrículas a mano.

### El funcionamiento:

- El usuario mete una imagen de prueba en la aplicación.
- El programa revisa que la imagen se puede usar.
- Si la imagen no es válida, el programa va a mostrar un mensaje diciendo que hay un problema con la imagen.
- Si la imagen es válida, el programa prepara la imagen para poder analizarla bien.
- El sistema usa un modelo de Inteligencia Artificial para buscar la matrícula dentro de la imagen.
- Si es que encuentra una matrícula, el sistema trata de leer sus caracteres.
- El sistema obtiene una matrícula y un porcentaje que muestra lo segura que está la IA de ese resultado.
- Si el resultado tiene un buen porcentaje, se muestra la matrícula que ha detectado.
- Si el resultado tiene poco porcentaje o no hay ninguna matrícula, se muestra un aviso para que una persona revise la imagen.
- La persona puede comprobar la imagen y decidir si el resultado es correcto o si hay que corregirlo.
- La aplicación trabajaría con imágenes de prueba y no haría falta usar datos personales reales.

## 1.2 Resumen de la aplicación

| **Parte** | **Matriculator** |
|---|---|
| Entradas | Imagen de un coche, y datos de la cámara. |
| Procesamiento | Comprobar la foto, buscar la matrícula con un modelo de IA como YOLO y leer sus números y letras con OCR. |
| Salidas | Matrícula detectada, porcentaje de confianza y aviso si hay algún problema. |
| Datos necesarios | Fotos de coches, matrículas de prueba, y un modelo de IA ya preparado para detectar y leer las matrículas. |
| Decisión humana | Una persona revisará el resultado si la IA no reconoce bien la matrícula. |

---

# 2. Comparación de lenguajes de programación

Para comparar los lenguajes de programación en base al interés de las personas, se usó Google Trends.

Se compararon estos lenguajes:

- Python
- JavaScript
- Node.js
- R
- C++
- PHP
- Java

## 2.1. Google Trends

Para conocer el interés de búsqueda de estos lenguajes, se usó Google Trends, se compararon: **Python, JavaScript, Node.js, R, C++, PHP** y **Java**.

| **Lenguaje** | **¿Qué es?** | **Uso principal** | **¿Podría usarse en Matriculator?** |
|---|---|---|---|
| Python | Lenguaje fácil y muy utilizado en IA y datos. | IA, imágenes y análisis de datos. | Para la parte de Inteligencia Artificial se utilizará Python para analizar las imágenes y reconocer las matrículas. |
| JavaScript | Lenguaje para crear páginas web interactivas. | Interfaces web, interacción con el usuario. | Para la interfaz web, JavaScript hace que usuario pueda interactuar con la aplicación, subir imágenes, enviarlas, ver los resultados obtenidos por la IA, como la matrícula detectada. |
| Node.js | Entorno que nos deja ejecutar JavaScript fuera del navegador. | Servidores y aplicaciones web. | Podría utilizarse para manejar la comunicación entre la interfaz y el servidor, pero no lo usaremos porque no necesitamos un servidor desarrollado con Node.js. |
| R | Lenguaje de análisis de datos y estadística. | Estadística, gráficos y análisis de datos. | Podría usarse para analizar datos y hacer cálculos estadísticos, pero no lo usaremos porque se analizan imágenes y el reconocimiento de matrículas. |
| C++ | Lenguaje que es muy veloz y tiene buen rendimiento. | Programas de alto rendimiento, imágenes y sistemas. | Se usaría para procesar imágenes y hacer tareas que necesiten mucho rendimiento. No lo utilizamos porque no queremos un nivel de rendimiento tan alto. |
| PHP | Lenguaje para aplicaciones web. | Servidores y páginas web dinámicas. | Se puede usar para la parte del servidor de una aplicación web, pero no lo usaremos ya que no necesitamos hacer un servidor con PHP |
| Java | Lenguaje para crear aplicaciones y sistemas. | Aplicaciones, servidores y sistemas grandes. | Se puede usar para hacer aplicaciones y trabajar con IA, pero no lo usaremos porque preferimos Python por sus herramientas de IA. |

La búsqueda se hizo con el filtro de Todo el mundo, el periodo desde 2004 hasta septiembre de 2026 y se buscó en Google Web y YouTube.

Estos resultados se descargan en formato CSV y se guardaron en la carpeta **data/**:

- trends_web.csv
- trends_youtube.csv

## 2.2 Resultados

En la última fecha, 1 de septiembre de 2026, Python es el que más está interesado la gente de los demás lenguajes comparados.

En Google Web Search, los valores de la última fecha disponible son:

| **Lenguaje** | **Valor** |
|---|---:|
| Python | 12 |
| Java | 8 |
| JavaScript | 7 |
| Node.js | 3 |
| PHP | 2 |
| C++ | 2 |
| R | 1 |

En YouTube Search también aparece Python como el lenguaje con mayor interés entre los lenguajes comparados.

Así que Python es muy importante en las búsquedas relacionadas con estos lenguajes, pero el interés de búsqueda no significa que sea el mejor para desarrollar IA. Para tomar esta decisión también veremos otros aspectos, como librerías de IA, fácil de aprender, el trabajo con datos, etc.

## 2.3 Comparación de características

Cuáles se adaptan mejor a Matriculator:

Para comparar los lenguajes de buena manera, se ha tenido en cuenta características fundamentales.

| **Característica** | **Python** | **JavaScript** | **Node.js** | **R** | **C++** | **PHP** | **Java** |
|---|---|---|---|---|---|---|---|
| Facilidad de aprendizaje | Alta | Alta | Alta | Media | Baja | Media | Media |
| Legibilidad | Alta | Alta | Alta | Alta | Media | Alta | Alta |
| Mantenimiento | Alta | Alta | Alta | Alta | Media | Alta | Alta |
| Integración con web, APIs y bases de datos | Alta | Muy Alta | Muy Alta | Media | Media | Muy Alta | Muy Alta |
| Trabajo con datos | Muy alta | Alta | Alta | Muy Alta | Medio | Bajo | Alta |
| Análisis estadístico | Muy Alta | Medio | Medio | Muy Alta | Medio | Bajo | Alta |
| Uso de modelos preentrenados | Muy Alta | Alta | Alta | Medio | Alta | Bajo | Alta |
| Rendimiento | Alta | Alta | Alta | Medio | Muy Alta | Medio | Alta |
| Despliegue, documentación y comunidad | Muy Alta | Muy Alta | Muy Alta | Alta | Alta | Alta | Muy Alta |
| Interfaz web | Alta | Muy alta | Muy alta | Bajo | Media | Muy alta | Muy alta |

Como se puede ver, Python destaca en IA, datos e imágenes, que son partes importantes de Matriculator.

## 2.3.1 Bibliotecas y modelos existentes para IA

Para Matriculator se han visto algunas bibliotecas y herramientas que se podrían usar en el proyecto y cada una tendría una función concreta dentro del proceso.

| **Biblioteca / modelo** | **Tipo** | **¿Para qué se usaría en Matriculator?** |
|---|---|---|
| NumPy | Biblioteca de Python | La usamos para trabajar con datos numéricos y matrices, trabaja con datos del pseudocódigo. |
| Pandas | Biblioteca de Python | La usamos para trabajar con tablas y archivos CSV, por ejemplo, con los datos de Google Trends. |
| OpenCV | Biblioteca de Python | Podría usarse para cargar y preparar las imágenes antes de analizarlas. No la usamos. |
| YOLO | Modelo de IA | Lo usaríamos para localizar la matrícula dentro de la imagen |
| Tesseract / EasyOCR | Tecnología OCR | Lo usaríamos para leer los números y letras de la matrícula que YOLO haya localizado. |
| PyTorch | Framework de IA | Podría usarse para cargar modelos de IA y que pueda analizar las imágenes. No lo usamos. |

## 2.4. Matriz de decisión

Para elegir los lenguajes que usamos en Matriculator, valoramos las cosas más importantes.

La ponderación se refiere a la importancia que tiene cada uno, la puntuación va de 1 a 5, 1 significa poca adaptación y 5 mucha adaptación.

| **Criterio** | **Ponderación** | **Python** | **JavaScript** | **Node.js** | **R** | **C++** | **PHP** | **Java** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Herramientas para IA | 30% | 5 | 4 | 4 | 4 | 5 | 2 | 4 |
| Trabajo con imágenes | 25% | 5 | 4 | 3 | 3 | 5 | 2 | 4 |
| Facilidad de aprendizaje | 20% | 5 | 5 | 4 | 4 | 2 | 4 | 3 |
| Trabajo con datos | 15% | 5 | 4 | 4 | 5 | 3 | 2 | 4 |
| Desarrollo web | 10% | 4 | 5 | 5 | 2 | 3 | 5 | 4 |

Después de ver esta matriz, Python se adapta mejor a la parte de Inteligencia Artificial y JavaScript para la aplicación e interfaz web, por eso se decidió usar Python para la Inteligencia Artificial y JavaScript para la aplicación e interfaz web.

## 2.5. Lenguaje principal para la aplicación

Para la aplicación e interfaz web hemos elegido **JavaScript** porque nos deja crear una interfaz para que el usuario pueda interactuar, y en Matriculator, se podría utilizar para seleccionar una imagen, enviarla para que sea procesada y mostrar el resultado.

## 2.6. Lenguaje principal para Inteligencia Artificial

Para la parte de Inteligencia Artificial hemos elegido **Python** porque como hemos visto anteriormente, este destaca por las herramientas que tiene y las bibliotecas para trabajar con IA, datos, imágenes, etc.

En la aplicación se utilizaría Python para procesar las imágenes, con modelos y tecnologías de detección de la IA como:

- **YOLO:** Es un modelo de IA que sirve para detectar objetos dentro de una imagen y lo usaremos para saber donde esta la matricula dentro de la imagen del coche.
- **OCR:** Tecnología de IA que sirve para reconocer texto en una imagen, y se utilizaría para leer los números y letras de la matrícula que YOLO localizó.

### El proceso sería:

**Imagen -> Python -> YOLO localiza la matrícula -> OCR lee sus caracteres -> resultado**

## 2.7. Descarte de los demás lenguajes

Se sabe que los demás lenguajes también pueden usarse en un Matriculator, pero al final no podemos trabajar con todos a la vez, y nuestras necesidades ya son cubiertas por Python y JavaScript.

- **Node.js:** No lo usamos porque no necesitamos crear un servidor usando javascript.
- **R:** No lo usamos porque no necesitamos trabajar mucho en la estadística y análisis de datos, Matriculator se encarga más de la IA y el reconocimiento de imágenes.
- **C++:** No lo usamos porque no hace falta tanto rendimiento y tanta velocidad para Matriculator.
- **PHP:** No lo usamos porque nos hemos inclinado más por JavaScript para la parte de interfaz y la aplicación.
- **Java:** Pasa algo parecido al anterior, podríamos usar Java pero nos hemos inclinado más por Python para la parte de IA.

Así que nuestra elección final es:

| **Lenguaje** | **Uso en Matriculator** |
|---|---|
| JavaScript | Aplicación e interfaz web |
| Python | Inteligencia Artificial y procesamiento de imágenes |

Todos los lenguajes son muy buenos y cada uno tiene su propia función, pero se evita usar lenguajes que no necesitamos tanto.

---

# 3. Flujo y pseudocódigo

En este apartado se explica como funciona el Matriculator desde que el usuario introduce una imagen hasta que se obtiene el resultado.

El flujo y el pseudocódigo completo se encuentran en:

- `pseudocodigo.ipynb`

---

# 4. Lenguajes de marcado y formatos de datos

## 4A

| **Formato** | **¿Qué es?** | **¿Para qué sirve?** | **Características principales** |
|---|---|---|---|
| HTML | Es un lenguaje que se usa para crear y organizar una página web. | Para crear la interfaz de Matriculator. | Usa etiquetas como títulos, textos, imágenes, botones y listas. |
| XML | Es un formato de texto para organizar datos. | Para guardar y compartir información entre diferentes sistemas. | Usa etiquetas y permite organizar los datos de forma estructurada. |
| JSON | Es un formato de texto para guardar y enviar datos. | Para enviar y recibir información entre diferentes partes de la aplicación. | Usa datos organizados en claves y valores y es fácil de leer. |
| Markdown | Es un lenguaje sencillo para dar formato a textos. | Para crear el README del proyecto. | Permite crear títulos, listas, tablas, enlaces y otros elementos de texto. |
| CSV | Es un formato de texto para guardar datos en filas y columnas. | Para guardar los datos de Google Trends. | Es sencillo, ocupa poco y puede abrirse con diferentes programas. |

## 4B

| **Lenguaje** | **Donde** | **Para que** |
|---|---|---|
| HTML | Frontend (navegador) | Crear la interfaz y mostrar los resultados |
| JSON | Cliente ↔ Servidor | Guardar o enviar datos como la matrícula y la confianza |
| CSV | Backend (almacenamiento) | Guardar y trabajar con los datos de Google Trends |
| XML | Configuración | Parámetros (umbral 85%), anotaciones de dataset |
| Markdown | Documentación | README.md, reportes diarios, documentación API |

## 4C. Notebook - `demo_lenguajes.ipynb`

En este notebook hicimos pruebas con HTML, CSV y JSON.

### 4.1 Librerías de Python

Para leer cada tipo de archivo se pueden usar diferentes librerías. BeautifulSoup sirve para leer HTML, Pandas para trabajar con CSV y json para leer JSON.

Para leer estos archivos usamos:

- HTML: BeautifulSoup (bs4)
- CSV: Pandas
- JSON: json

### 4.2 Librerías en R

También pusimos una tabla con las librerías que se usarían en R:

| **Formato** | **Python** | **R** |
|---|---|---|
| HTML | BeautifulSoup (bs4) | rvest |
| CSV | Pandas | readr |
| JSON | json | jsonlite |

En R, rvest, readr y jsonlite sirven para trabajar con HTML, CSV y JSON.

### 4.3 Fichero HTML

Creamos un archivo.html inventado para representar la interfaz de Matriculato, tiene el título de la aplicación, una descripción y tres acciones: subir una imagen, detectar la matrícula y mostrar el resultado.

### 4.4 Fichero JSON

Creamos un archivo JSON con datos inventados que podrían llegar a Matriculator, como la imagen, la matrícula y el porcentaje de confianza.

---

# 5. Preguntas Adicionales

## ¿La solución es IA débil o se aproxima a IA fuerte?

Es un claro ejemplo de IA débil (o estrecha), ya que el sistema está diseñado y entrenado exclusivamente para una tarea muy específica: detectar y reconocer caracteres de matrículas en imágenes. No posee conciencia, razonamiento general ni capacidad de adaptación fuera de ese ámbito de visión artificial.

## ¿Usarías un modelo preentrenado o entrenarías desde cero?

Se utilizaría un modelo preentrenado (combinando una red de detección de objetos como YOLO para localizar la placa y un motor OCR como Tesseract o EasyOCR). Entrenar un modelo de visión artificial desde cero requiere un coste computacional altísimo y miles de imágenes etiquetadas manualmente, mientras que los modelos preentrenados ofrecen una precisión muy elevada de base y solo requieren ajustes menores o integración directa.

---

# 6. Fuentes de Información

Documentación oficial de Python y librerías de visión artificial.

Apuntes de la unidad de Programación de Inteligencia Artificial (Cebanc).

Google Trends (Datos de interés global de lenguajes de programación).

- Documentacion oficial de Python. The Python Software Foundation. https://docs.python.org/3/ (consultado el 01/10/2026).
- Documentacion oficial de Ultralytics YOLO. Ultralytics. https://docs.ultralytics.com/ (consultado el 01/10/2026).
- Repositorio oficial de Tesseract OCR. Google / tesseract-ocr. https://github.com/tesseract-ocr/tesseract (consultado el 01/10/2026).
- Google Trends. Google. https://trends.google.com/trends/ (consultado el 01/10/2026).
- MDN Web Docs, referencia de JavaScript. Mozilla. https://developer.mozilla.org/es/docs/Web/JavaScript (consultado el 01/10/2026).
- Apuntes de la unidad de Programacion de Inteligencia Artificial. CEBANC (material de clase, sin URL publica).

---

# 7. Enlaces de Interés

**URL de vercel (Web estática):** [https://trabajo-ia-matriculator.vercel.app/](url)

**Repositorio GitHub:** [GitHub - trabajo-ia-matriculator](https://github.com/igorr17/trabajo-ia-matriculator)

---

# 8. Anexo de uso de Inteligencia Artificial

Durante la realización del trabajo hemos utilizado principalmente **ChatGPT Pro y Gemini** como apoyo. Las hemos utilizado para resolver dudas, entender conceptos, comparar lenguajes de programación y revisar algunas partes del trabajo.

Cuando alguna explicación era demasiado técnica o no la entendíamos bien, hacíamos repreguntas para que se explicara de una forma más sencilla. También comparábamos algunas respuestas y revisábamos la información antes de incluirla en el trabajo.
La IA nos ha servido como apoyo, pero las decisiones finales sobre Matriculator, los lenguajes elegidos y la organización del trabajo las hemos tomado nosotros.

## 8.1. Aplicación hipotética: Matriculator

### Preguntas y prompts utilizados:

Preguntamos cómo podía funcionar una aplicación que detectara y leyera matrículas en imágenes, qué datos necesitaría y en qué momento debe intervenir una persona.
Algunas preguntas fueron: “¿Cómo funcionaría una aplicación que detecta matrículas en imágenes?”, “¿Qué entradas y salidas tendría?” o “¿En qué momento debería revisar una persona el resultado de la IA?”.

### Repreguntas y cambios realizados:

Algunas respuestas tenían demasiados detalles, por lo que pedimos explicaciones más sencillas y eso lo adaptamos a nuestra aplicación.
También decidimos trabajar con imágenes de prueba y no con datos personales reales.

## 8.22. Comparación de lenguajes

### Preguntas y prompts utilizados:

Preguntamos por las diferencias entre **Python, JavaScript, Node.js, R, C++, PHP y Java**, y por cuáles serían más adecuados para la aplicación y para la parte de Inteligencia Artificial.
Algunas preguntas fueron: “¿Qué lenguaje sería más adecuado para la IA de Matriculator?”, “¿Qué diferencia hay entre Python y JavaScript?” o “¿Node.js es un lenguaje de programación?”.

### Repreguntas y cambios realizados:

Pedimos varias explicaciones más sencillas para entender las diferencias entre los lenguajes.

También revisamos las características que pedía el profesor y las relacionamos con Matriculator, después utilizamos una tabla de decisión para tomar la decisión final.
Al final elegimos **Python** para la parte de Inteligencia Artificial y **JavaScript** para la aplicación e interfaz web.

## 8.3. Flujo y pseudocódigo

### Preguntas y prompts utilizados:

Preguntamos cómo dividir el funcionamiento de Matriculator en diferentes etapas y qué elementos debía tener el pseudocódigo.

### Repreguntas y cambios realizados:

Fuimos haciendo el proceso más simple, añadimos control de errores y una revisión humana cuando la IA no estaba segura.

## 8.4. Lenguajes de marcado y formatos de datos

### Preguntas y prompts utilizados:

Preguntamos por la función de **HTML, XML, JSON, Markdown y CSV** y cómo podría usarse dentro de Matriculator. tambien preguntamos 
qué librerías de Python se utilizan para trabajar con HTML, CSV y JSON.

### Repreguntas y cambios realizados:

Pedimos ejemplos sencillos para entender mejor cómo funciona cada formato y después los usamos en las diferentes partes del proyecto.

## 8.5. Preguntas adicionales

### Preguntas y prompts utilizados:

Preguntamos si Matriculator sería una IA débil o fuerte y si sería mejor utilizar un modelo preentrenado o entrenar uno desde cero.

### Repreguntas y cambios realizados:

Revisamos las respuestas para adaptarlas a nuestro proyecto y dejamos claro que es un proyecto hipotético y no se crea ni se entrena ningún modelo de IA. 
Diferenciamos entre las herramientas que hemos utilizado en el trabajo y las que se proponen para una futura implementación, como YOLO y OCR.

## 8.6 Reflexión sobre el uso de IA

La IA nos ayudó mucho a entender conceptos que al principio eran complicados, comparar diferentes opciones y revisar algunas partes del trabajo.

Nos ayudó a detectar errores o confusiones, pero no utilizamos todas sus respuestas directamente. Cuando una respuesta no encajaba con el proyecto, la cambiábamos o la descartábamos.
Una decisión importante tomada por el grupo fue utilizar **Python** para la Inteligencia Artificial y **JavaScript** para la aplicación, después de comparar las diferentes opciones.
La IA ayudó durante el trabajo, pero la elección de Matriculator, los lenguajes, la tabla de decisión y las decisiones finales fueron realizadas por el grupo.


---
