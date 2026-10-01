# Trabajo-IA-matriculator
# Trabajo Grupal RA1: Matriculator

## 1. Organización del Grupo y Temporalización
* **Integrantes del grupo:** 3 personas.
* **Reparto de tareas:**
  * **Byron:** Definición del caso de uso (Paso 1) y diseño del flujo y pseudocódigo (Paso 3).
  * **Igor:** Análisis de Google Trends, comparativa de lenguajes y matriz de decisión (Paso 2).
  * **Dani:** Desarrollo de formatos de datos, notebooks de prueba, web estática y documentación (Pasos 4 y 5).
* **Temporalización:**
  * 1h: Elección de opción (Matriculator), extracción de Google Trends y definición teórica.
  * 1:30: Comparativa de lenguajes, matriz de decisión y redacción del flujo técnico.
  * 3h: Creación de notebooks, desarrollo web en HTML, subida a Netlify y revisión final.
 
## 2. Análisis de Google Trends (Paso 2)

Para comparar los lenguajes de programación en base al interés de las personas, se usó Google Trends.
Se compararon estos lenguajes:

  * Python
  * JavaScript
  * Node.js
  * R
  * C++
  * PHP
  * Java

La búsqueda se puso a nivel mundial, desde 2004 hasta septiembre de 2026, se usaron dos tipos de búsqueda: Google Web Search y YouTube Search.
Estos resultados se descargaron en formato CSV y se guardaron en la carpeta data/:

  * trends_web.csv
  * trends_youtube.csv

## 2.1   Resultados

En la última fecha, 1 de septiembre de 2026, Python es el que mas esta interesado la gente de los demás lenguajes comparados.
En Google Web Search, los valores fueron:

Python:  | JavaScript:  | Java:  | Node.js:  | C++:  | R:  | PHP: 

En YouTube Search también aparece Python como el lenguaje con mayor interés entre los lenguajes comparados.
Así que Python es muy importante en las búsquedas relacionados con estos lenguajes, pero el interés de búsqueda no significa que sea el mejor para desarrollar IA. Para tomar esta decisión también veremos otros aspectos, como librerías de IA, fácil de aprender, el trabajo con datos, etc.

## 2. Enlaces de Interés
* **URL de Netlify (Web estática):** https://trabajo-ia-matriculator.netlify.app
* **Repositorio GitHub:** [GitHub - trabajo-ia-matriculator](https://github.com/igorr17/trabajo-ia-matriculator)

## 3. Preguntas Adicionales (Paso 5)
* **¿La solución es IA débil o se aproxima a IA fuerte?**
  Es un claro ejemplo de **IA débil (o estrecha)**, ya que el sistema está diseñado y entrenado exclusivamente para una tarea muy específica: detectar y reconocer caracteres de matrículas en imágenes. No posee conciencia, razonamiento general ni capacidad de adaptación fuera de ese ámbito de visión artificial.
* **¿Usarías un modelo preentrenado o entrenarías desde cero?**
  Se utilizaría un **modelo preentrenado** (combinando una red de detección de objetos como YOLO para localizar la placa y un motor OCR como Tesseract o EasyOCR). Entrenar un modelo de visión artificial desde cero requiere un coste computacional altísimo y miles de imágenes etiquetadas manualmente, mientras que los modelos preentrenados ofrecen una precisión muy elevada de base y solo requieren ajustes menores o integración directa.

## 4. Fuentes de Información
* Documentación oficial de Python y librerías de visión artificial.
* Apuntes de la unidad de Programación de Inteligencia Artificial (Cebanc).
* Google Trends (Datos de interés global de lenguajes de programación).
