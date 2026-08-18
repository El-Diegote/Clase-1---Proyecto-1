const state = {
  profile: "docente",
  email: "",
  files: [],
  audio: [],
  recordedAudio: null,
  extractedDocs: [],
  slides: [],
  linkFindings: [],
  recorder: null,
  recordedChunks: [],
  lastAnalysisSignature: "",
};

const ucemaDomains = ["ucema.edu.ar", "alumnos.ucema.edu.ar", "mail.ucema.edu.ar"];
const readableExtensions = new Set(["txt", "md", "csv", "json", "html", "htm", "pdf", "docx"]);
const stopwords = new Set([
  "para",
  "con",
  "del",
  "las",
  "los",
  "una",
  "por",
  "que",
  "como",
  "este",
  "esta",
  "son",
  "sobre",
  "entre",
  "desde",
  "tambien",
  "donde",
  "cada",
  "cuando",
  "presentacion",
  "documento",
]);
const riskyShorteners = new Set(["bit.ly", "tinyurl.com", "t.co", "goo.gl", "ow.ly", "is.gd", "cutt.ly"]);
const suspiciousTlds = new Set(["zip", "mov", "top", "click", "country", "gq", "tk"]);
const illegalContentSignals = ["pirateria", "crack", "warez", "doxxing", "abuso", "explotacion", "ilegal"];

const accessPanel = document.querySelector("#accessPanel");
const workspace = document.querySelector("#workspace");
const accessForm = document.querySelector("#accessForm");
const accessMessage = document.querySelector("#accessMessage");
const userChip = document.querySelector("#userChip");
const homeButton = document.querySelector("#homeButton");
const dropZone = document.querySelector("#dropZone");
const filesInput = document.querySelector("#files");
const audioInput = document.querySelector("#audio");
const linksInput = document.querySelector("#links");
const briefInput = document.querySelector("#brief");
const assetList = document.querySelector("#assetList");
const analysisStatus = document.querySelector("#analysisStatus");
const linkReport = document.querySelector("#linkReport");
const scanLinksBtn = document.querySelector("#scanLinksBtn");
const recordBtn = document.querySelector("#recordBtn");
const recordStatus = document.querySelector("#recordStatus");
const previewPanel = document.querySelector("#slides");
const slideStrip = document.querySelector("#slideStrip");

const deckTitle = document.querySelector("#deckTitle");
const course = document.querySelector("#course");
const duration = document.querySelector("#duration");
const tone = document.querySelector("#tone");

accessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(accessForm);
  const email = String(form.get("email") || "").trim().toLowerCase();
  const profile = String(form.get("profile") || "docente");

  if (!isValidUcemaEmail(email)) {
    accessMessage.textContent = "Ingresa un correo con dominio UCEMA para continuar.";
    accessMessage.classList.add("error");
    return;
  }

  accessMessage.classList.remove("error");
  state.email = email;
  state.profile = profile;
  accessPanel.classList.add("hidden");
  workspace.classList.remove("hidden");
  userChip.innerHTML = `<strong>${profile === "docente" ? "Docente" : "Alumno"}</strong><br>${email}`;
  applyProfileDefaults();
  renderStaticState();
});

homeButton.addEventListener("click", () => {
  workspace.classList.add("hidden");
  previewPanel.classList.add("hidden");
  accessPanel.classList.remove("hidden");
  accessForm.querySelector("#email").focus();
});

[filesInput, audioInput].forEach((element) => {
  element.addEventListener("change", () => {
    state.lastAnalysisSignature = "";
    previewPanel.classList.add("hidden");
    renderStaticState();
  });
});

[linksInput, briefInput, deckTitle, course, duration, tone].forEach((element) => {
  element.addEventListener("input", () => {
    state.lastAnalysisSignature = "";
    renderStaticState();
  });
  element.addEventListener("change", () => {
    state.lastAnalysisSignature = "";
    renderStaticState();
  });
});

["dragenter", "dragover"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add("drag-over");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, () => dropZone.classList.remove("drag-over"));
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  if (!event.dataTransfer?.files?.length) return;
  filesInput.files = event.dataTransfer.files;
  state.lastAnalysisSignature = "";
  previewPanel.classList.add("hidden");
  renderStaticState();
});

document.querySelector("#previewBtn").addEventListener("click", async () => {
  await generatePresentation();
  previewPanel.classList.remove("hidden");
  previewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#downloadBtn").addEventListener("click", downloadPpt);
scanLinksBtn.addEventListener("click", scanLinks);
recordBtn.addEventListener("click", toggleRecording);

function isValidUcemaEmail(email) {
  const parts = email.split("@");
  return parts.length === 2 && ucemaDomains.includes(parts[1]);
}

function applyProfileDefaults() {
  if (state.profile === "docente") {
    deckTitle.value = "Clase UCEMA";
    tone.value = "academico";
    duration.value = "40";
    briefInput.placeholder = "Tema de clase, consigna, supuestos, objetivos de aprendizaje y actividad de cierre.";
  } else {
    deckTitle.value = "Presentacion de alumno UCEMA";
    tone.value = "visual";
    duration.value = "10";
    briefInput.placeholder = "Tema, consigna, supuestos, hipotesis, fuentes consultadas y conclusion esperada.";
  }
}

function renderStaticState() {
  state.files = Array.from(filesInput.files || []);
  state.audio = Array.from(audioInput.files || []);
  renderAssets();
  renderLinks();
  if (state.slides.length) renderSlides();
}

function renderAssets() {
  const items = [
    ...state.files.map((file) => {
      const extension = getExtension(file.name);
      const status = readableExtensions.has(extension) ? "analizable" : "referencia";
      return `Archivo ${status}: ${file.name}`;
    }),
    ...state.audio.map((file) => `Audio adjunto: ${file.name}`),
    ...(state.recordedAudio ? [`Audio grabado: ${state.recordedAudio.name}`] : []),
  ];

  assetList.innerHTML = items.length
    ? items.map((item) => `<span class="asset-pill">${escapeHtml(item)}</span>`).join("")
    : `<span class="asset-pill">Todavia no hay archivos cargados</span>`;
}

function renderLinks() {
  if (!state.linkFindings.length) {
    linkReport.innerHTML = `<span class="link-pill warning">Pendiente de analizar enlaces</span>`;
    return;
  }

  linkReport.innerHTML = state.linkFindings
    .map((finding) => `<span class="link-pill ${finding.level}">${escapeHtml(finding.label)}</span>`)
    .join("");
}

function renderSlides() {
  slideStrip.innerHTML = state.slides
    .map(
      (slide, index) => `
        <article class="slide-card">
          <div class="slide-header">
            <span>UCEMA</span>
            <span>${index + 1}/${state.slides.length}</span>
          </div>
          <div class="slide-body">
            <h4>${escapeHtml(slide.title)}</h4>
            <ul>${slide.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
          </div>
          <div class="slide-footer">${escapeHtml(slide.footer)}</div>
        </article>
      `
    )
    .join("");
}

async function generatePresentation() {
  const signature = [
    state.files.map((file) => `${file.name}:${file.size}:${file.lastModified}`).join("|"),
    briefInput.value,
    linksInput.value,
    deckTitle.value,
    course.value,
    duration.value,
    tone.value,
    state.profile,
  ].join("::");

  if (signature === state.lastAnalysisSignature && state.slides.length) {
    renderSlides();
    return;
  }

  analysisStatus.textContent = "Analizando documentos y prediciendo slides...";
  analysisStatus.classList.remove("error");

  state.extractedDocs = await extractDocuments(state.files);
  if (!state.linkFindings.length && getLinks().length) await scanLinks(false);
  state.slides = buildSlidesFromAnalysis();
  state.lastAnalysisSignature = signature;
  renderAssets();
  renderSlides();

  const extractedCount = state.extractedDocs.filter((doc) => doc.text.trim()).length;
  const warningCount = state.extractedDocs.filter((doc) => doc.warning).length;
  analysisStatus.textContent = `${state.slides.length} slide(s) generados. ${extractedCount} documento(s) leido(s). ${warningCount} advertencia(s).`;
}

async function extractDocuments(files) {
  const docs = [];

  for (const file of files) {
    const extension = getExtension(file.name);

    try {
      if (["txt", "md", "csv", "json", "html", "htm"].includes(extension)) {
        docs.push({ name: file.name, text: await file.text(), warning: "" });
      } else if (extension === "pdf") {
        docs.push({ name: file.name, text: await extractPdfText(file), warning: "" });
      } else if (extension === "docx") {
        docs.push({ name: file.name, text: await extractDocxText(file), warning: "" });
      } else {
        docs.push({
          name: file.name,
          text: "",
          warning: "Formato cargado como referencia, pero no analizable en esta version.",
        });
      }
    } catch (error) {
      docs.push({
        name: file.name,
        text: "",
        warning: `No se pudo leer el contenido: ${error.message || "error desconocido"}.`,
      });
    }
  }

  return docs;
}

async function extractPdfText(file) {
  if (!window.pdfjsLib) throw new Error("PDF.js no termino de cargar");

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages = [];
  const maxPages = Math.min(pdf.numPages, 30);

  for (let pageNumber = 1; pageNumber <= maxPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => item.str).join(" "));
  }

  return pages.join("\n\n");
}

async function extractDocxText(file) {
  if (!window.mammoth) throw new Error("Mammoth no termino de cargar");

  const arrayBuffer = await file.arrayBuffer();
  const result = await window.mammoth.extractRawText({ arrayBuffer });
  return result.value || "";
}

function buildSlidesFromAnalysis() {
  const title = deckTitle.value.trim() || "Presentacion UCEMA";
  const subject = course.value.trim() || "Materia pendiente";
  const readableText = normalizeText(
    [
      ...state.extractedDocs.map((doc) => doc.text),
      briefInput.value,
      getLinks()
        .map((link) => `Fuente web ingresada: ${link}`)
        .join(". "),
    ].join("\n\n")
  );
  const documentNames = state.files.map((file) => file.name);
  const sentences = splitSentences(readableText);
  const keywords = extractKeywords(readableText, 10);
  const slideTarget = getSlideTarget();
  const bulletLimit = tone.value === "visual" ? 3 : tone.value === "ejecutivo" ? 4 : 5;
  const isTeacher = state.profile === "docente";
  const slides = [];

  slides.push({
    title,
    points: [
      `Materia: ${subject}`,
      isTeacher ? "Perfil: docente." : "Perfil: alumno.",
      documentNames.length
        ? `Documento base: ${documentNames.slice(0, 2).join(", ")}${documentNames.length > 2 ? "..." : ""}`
        : "Documento base pendiente.",
    ],
    footer: "Universidad del CEMA",
  });

  slides.push({
    title: isTeacher ? "Objetivo de aprendizaje" : "Objetivo de la exposicion",
    points: pickBullets(sentences, bulletLimit, [
      isTeacher
        ? "Transformar el material cargado en una clase clara, con conceptos, evidencia y cierre."
        : "Transformar el material cargado en una exposicion clara, con problema, evidencia y conclusion.",
      keywords.length ? `Ejes detectados: ${keywords.slice(0, 5).join(", ")}.` : "Ejes del documento pendientes de detectar.",
    ]),
    footer: "Estructura predictiva",
  });

  const remaining = sentences.slice(0, Math.max(6, slideTarget * 4));
  const contentSlideCount = Math.max(1, slideTarget - 4);
  const chunks = chunkArray(remaining, contentSlideCount);

  chunks.forEach((chunk, index) => {
    slides.push({
      title: getContentSlideTitle(index, keywords),
      points: pickBullets(chunk, bulletLimit, [`Punto principal ${index + 1} pendiente de completar con mas contenido legible.`]),
      footer: tone.value === "ejecutivo" ? "Sintesis ejecutiva" : "Desarrollo academico",
    });
  });

  slides.push({
    title: "Grafico o visual sugerido",
    points: [
      keywords.length ? `Mapa conceptual: ${keywords.slice(0, 4).join(" / ")}.` : "Mapa conceptual de conceptos centrales.",
      "Tabla comparativa de argumentos, evidencia e implicancias.",
      "Linea de tiempo o flujo causal si el documento describe un proceso.",
    ].slice(0, bulletLimit),
    footer: "Visualizacion sugerida",
  });

  slides.push({
    title: isTeacher ? "Cierre y actividad" : "Conclusion",
    points: isTeacher
      ? [
          "Recuperar los conceptos centrales detectados en el material.",
          "Proponer una pregunta de discusion basada en la evidencia.",
          "Definir consigna o lectura posterior.",
        ].slice(0, bulletLimit)
      : [
          "Responder la consigna o pregunta principal.",
          "Explicitar limites del analisis.",
          "Cerrar con una implicancia o pregunta abierta.",
        ].slice(0, bulletLimit),
    footer: "Cierre UCEMA",
  });

  if (state.extractedDocs.some((doc) => doc.warning)) {
    slides.push({
      title: "Advertencias de lectura",
      points: state.extractedDocs
        .filter((doc) => doc.warning)
        .map((doc) => `${doc.name}: ${doc.warning}`)
        .slice(0, bulletLimit),
      footer: "Revision requerida",
    });
  }

  return slides.slice(0, slideTarget);
}

function getSlideTarget() {
  const minutes = Number(duration.value);
  const base = minutes <= 10 ? 5 : minutes <= 20 ? 7 : 10;
  if (tone.value === "visual") return Math.max(5, base - 1);
  if (tone.value === "academico") return base + 1;
  return base;
}

function getContentSlideTitle(index, keywords) {
  const fallback = ["Contexto", "Conceptos clave", "Evidencia", "Implicancias", "Discusion", "Aplicacion"];
  const keyword = keywords[index];
  if (!keyword) return fallback[index] || `Desarrollo ${index + 1}`;
  return `${capitalize(keyword)}: punto clave`;
}

function pickBullets(sentences, limit, fallback) {
  const candidates = sentences
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 28)
    .map((sentence) => truncate(sentence, tone.value === "visual" ? 96 : 140));

  const unique = [...new Set(candidates)].slice(0, limit);
  return unique.length ? unique : fallback.slice(0, limit);
}

function splitSentences(text) {
  return normalizeText(text)
    .split(/(?<=[.!?])\s+|\n+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function extractKeywords(text, limit) {
  const counts = new Map();
  normalizeText(text)
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúñü\s]/gi, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4 && !stopwords.has(word))
    .forEach((word) => counts.set(word, (counts.get(word) || 0) + 1));

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word);
}

function chunkArray(items, chunkCount) {
  const chunks = [];
  const size = Math.max(1, Math.ceil(items.length / chunkCount));

  for (let index = 0; index < chunkCount; index += 1) {
    chunks.push(items.slice(index * size, index * size + size));
  }

  return chunks;
}

function normalizeText(text) {
  return String(text || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getExtension(filename) {
  return String(filename).split(".").pop().toLowerCase();
}

function getLinks() {
  return linksInput.value
    .split(/\n|,/)
    .map((link) => link.trim())
    .filter(Boolean);
}

async function scanLinks(updateSlides = true) {
  const links = getLinks();

  if (!links.length) {
    state.linkFindings = [{ level: "warning", label: "No hay enlaces para analizar" }];
    renderLinks();
    return;
  }

  state.linkFindings = links.map(classifyLink);
  renderLinks();
  if (updateSlides) state.lastAnalysisSignature = "";
}

function classifyLink(rawLink) {
  let url;

  try {
    url = new URL(rawLink);
  } catch {
    return { level: "danger", label: `${rawLink}: URL invalida` };
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  const pathname = decodeURIComponent(url.pathname.toLowerCase());
  const fullText = `${host} ${pathname} ${url.search.toLowerCase()}`;
  const tld = host.split(".").at(-1);
  const warnings = [];

  if (url.protocol !== "https:") warnings.push("no usa HTTPS");
  if (riskyShorteners.has(host)) warnings.push("acortador");
  if (suspiciousTlds.has(tld)) warnings.push("dominio riesgoso");
  if (host.includes("@") || rawLink.includes("%40")) warnings.push("formato enganoso");
  if (/(login|verify|secure|account|password).*\.(zip|mov|top|click)/i.test(rawLink)) warnings.push("patron sospechoso");
  if (illegalContentSignals.some((signal) => fullText.includes(signal))) warnings.push("posible contenido ilegal");

  if (warnings.some((warning) => warning.includes("ilegal") || warning.includes("enganoso"))) {
    return { level: "danger", label: `${host}: revisar (${warnings.join(", ")})` };
  }

  if (warnings.length) {
    return { level: "warning", label: `${host}: advertencia (${warnings.join(", ")})` };
  }

  return { level: "safe", label: `${host}: enlace valido` };
}

async function toggleRecording() {
  if (state.recorder?.state === "recording") {
    state.recorder.stop();
    recordBtn.textContent = "Grabar audio";
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    recordStatus.textContent = "Este navegador no permite grabacion en vivo desde esta pagina.";
    recordStatus.classList.add("error");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.recordedChunks = [];
    state.recorder = new MediaRecorder(stream);
    state.recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) state.recordedChunks.push(event.data);
    });
    state.recorder.addEventListener("stop", () => {
      const blob = new Blob(state.recordedChunks, { type: "audio/webm" });
      state.recordedAudio = new File([blob], `audio-ideas-${Date.now()}.webm`, { type: "audio/webm" });
      stream.getTracks().forEach((track) => track.stop());
      recordStatus.textContent = "Audio grabado y agregado como insumo.";
      recordStatus.classList.remove("error");
      state.lastAnalysisSignature = "";
      renderStaticState();
    });
    state.recorder.start();
    recordBtn.textContent = "Detener grabacion";
    recordStatus.textContent = "Grabando audio...";
    recordStatus.classList.remove("error");
  } catch {
    recordStatus.textContent = "No se pudo iniciar la grabacion. Revisa el permiso de microfono.";
    recordStatus.classList.add("error");
  }
}

async function downloadPpt() {
  await generatePresentation();

  const PptxConstructor = window.pptxgen || window.PptxGenJS;

  if (!PptxConstructor) {
    alert("No se pudo cargar el generador de PowerPoint. Revisa la conexion a internet e intenta nuevamente.");
    return;
  }

  const pptx = new PptxConstructor();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "UCEMA Deck Studio";
  pptx.subject = course.value || "Presentacion academica";
  pptx.title = deckTitle.value || "Presentacion UCEMA";
  pptx.company = "Universidad del CEMA";
  pptx.lang = "es-AR";
  pptx.theme = {
    headFontFace: "Arial",
    bodyFontFace: "Arial",
    lang: "es-AR",
  };

  state.slides.forEach((item, index) => {
    const slide = pptx.addSlide();
    slide.background = { color: "FBFAF9" };
    slide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: 13.333,
      h: 0.72,
      fill: { color: "940028" },
      line: { color: "940028" },
    });
    slide.addText("UCEMA", {
      x: 0.42,
      y: 0.16,
      w: 1.35,
      h: 0.3,
      color: "FFFFFF",
      bold: true,
      fontSize: 15,
      margin: 0,
    });
    slide.addText(`${index + 1}/${state.slides.length}`, {
      x: 12.1,
      y: 0.16,
      w: 0.8,
      h: 0.3,
      color: "FFFFFF",
      fontSize: 10,
      align: "right",
      margin: 0,
    });
    slide.addText(item.title, {
      x: 0.65,
      y: 1.05,
      w: 11.8,
      h: 0.78,
      color: "19171A",
      bold: true,
      fontSize: 28,
      margin: 0,
      breakLine: false,
      fit: "shrink",
    });
    slide.addText(item.points.map((point) => ({ text: point, options: { bullet: { type: "ul" } } })), {
      x: 0.82,
      y: 2.0,
      w: 11.2,
      h: 3.75,
      color: "19171A",
      fontSize: tone.value === "visual" ? 20 : 17,
      breakLine: false,
      fit: "shrink",
      paraSpaceAfterPt: 8,
    });
    slide.addShape(pptx.ShapeType.line, {
      x: 0.65,
      y: 6.7,
      w: 12,
      h: 0,
      line: { color: "DED8DD", width: 1 },
    });
    slide.addText(item.footer, {
      x: 0.65,
      y: 6.86,
      w: 6,
      h: 0.24,
      color: "6F6870",
      fontSize: 9,
      margin: 0,
    });
  });

  const safeName = (deckTitle.value || "presentacion-ucema").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  await pptx.writeFile({ fileName: `${safeName}.pptx` });
}

function truncate(text, length) {
  return text.length > length ? `${text.slice(0, length - 1)}...` : text;
}

function capitalize(text) {
  return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderStaticState();
