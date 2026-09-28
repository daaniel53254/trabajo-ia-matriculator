// Tema para Chart.js sobre fondo cobalto
Chart.defaults.color = "#bfdbfe";
Chart.defaults.borderColor = "#1b4b98";
const PALETA = ["#7dd3fc", "#fcd34d", "#a5b4fc", "#5eead4", "#f9a8d4", "#e2e8f0", "#fdba74"];

// Lee un CSV exportado de Google Trends y devuelve { etiquetas, nombres, series }.
// Ignora las lineas de cabecera previas que Google anade en algunas exportaciones.
function parsearTrends(texto) {
  const lineas = texto.split(/\r?\n/).filter(l => l.trim() !== "");
  const esFecha = l => /^"?\d{4}-\d{2}/.test(l);
  const primera = lineas.findIndex(esFecha);
  if (primera < 1) throw new Error("Formato de CSV no reconocido");

  const quitarComillas = s => s.replace(/^"|"$/g, "").trim();
  // Google anade ": (Todo el mundo)" a cada nombre de serie
  const nombres = lineas[primera - 1].split(",").slice(1).map(c => quitarComillas(c).split(":")[0]);

  const etiquetas = [];
  const series = nombres.map(() => []);
  lineas.slice(primera).forEach(linea => {
    const celdas = linea.split(",").map(quitarComillas);
    etiquetas.push(celdas[0]);
    nombres.forEach((_, i) => {
      const v = celdas[i + 1].replace("<1", "0");
      series[i].push(v === "" ? null : Number(v));
    });
  });
  return { etiquetas, nombres, series };
}

async function dibujar(rutaCsv, idCanvas, idEstado) {
  const estado = document.getElementById(idEstado);
  try {
    const respuesta = await fetch(rutaCsv);
    if (!respuesta.ok) throw new Error("No se encuentra " + rutaCsv);
    const { etiquetas, nombres, series } = parsearTrends(await respuesta.text());

    new Chart(document.getElementById(idCanvas), {
      type: "line",
      data: {
        labels: etiquetas,
        datasets: nombres.map((n, i) => ({
          label: n,
          data: series[i],
          borderColor: PALETA[i % PALETA.length],
          pointRadius: 0,
          borderWidth: 1.5
        }))
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: "Interes relativo (0-100), todo el mundo", color: "#ffffff" } },
        scales: { x: { ticks: { maxTicksLimit: 12 } }, y: { min: 0, max: 100 } }
      }
    });
    estado.textContent = "Datos: " + rutaCsv + " (" + etiquetas.length + " puntos, de " + etiquetas[0] + " a " + etiquetas[etiquetas.length - 1] + ").";
    return { etiquetas, nombres, series };
  } catch (e) {
    estado.textContent = "No se pudo cargar el grafico: " + e.message;
    return null;
  }
}

function rellenarUltimo(datos) {
  if (!datos) return;
  const ultimo = datos.etiquetas.length - 1;
  const filas = datos.nombres
    .map((n, i) => ({ n, v: datos.series[i][ultimo] }))
    .sort((a, b) => b.v - a.v);
  const cuerpo = document.querySelector("#tabla-ultimo tbody");
  filas.forEach(f => {
    const tr = document.createElement("tr");
    tr.innerHTML = '<td class="font-semibold text-white">' + f.n + "</td><td>" + f.v + "</td>";
    cuerpo.appendChild(tr);
  });
}

// Resalta en el indice lateral la seccion visible
function activarIndice() {
  const enlaces = document.querySelectorAll("#indice a.enlace-indice");
  const secciones = document.querySelectorAll("main section");
  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        enlaces.forEach(a => a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  secciones.forEach(s => observador.observe(s));
}

dibujar("data/trends_web.csv", "grafico-web", "estado-web").then(rellenarUltimo);
dibujar("data/trends_youtube.csv", "grafico-youtube", "estado-youtube");
activarIndice();