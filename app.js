// The Preview Suite — Tablescape Builder (MVP)
// No frameworks. Updates the preview + summary live.

const state = {
  tableShape: "Round",
  placeSettings: 8,
  clothName: "Ivory",
  clothColor: "#F6F0E6",
  charger: "Gold",
  napkinName: "White",
  napkinColor: "#FFFFFF",
  napkinStyle: "Classic Fold",
  centerpiece: "Low Florals",
};

const el = (id) => document.getElementById(id);

const tableEl = el("table");
const settingsEl = el("settingsEl");
const centerpieceEl = el("centerpieceEl");

// Summary fields
const sum = {
  table: el("sumTable"),
  settings: el("sumSettings"),
  cloth: el("sumCloth"),
  charger: el("sumCharger"),
  napkin: el("sumNapkin"),
  napkinStyle: el("sumNapkinStyle"),
  centerpiece: el("sumCenterpiece"),
};

// Pills (small chips in builder)
const pill = {
  table: el("pillTable"),
  settings: el("pillSettings"),
  cloth: el("pillCloth"),
  charger: el("pillCharger"),
  napkin: el("pillNapkin"),
  napkinStyle: el("pillNapkinStyle"),
  centerpiece: el("pillCenterpiece"),
};

function chargerColor(name) {
  switch (name) {
    case "Gold": return "#C9A44A";
    case "Silver": return "#B9C0C9";
    case "Pearl": return "#E8E2D6";
    case "Black": return "#1A1A1B";
    default: return "#C9A44A";
  }
}

function centerStyle(name) {
  // simple visual differences for MVP
  switch (name) {
    case "Low Florals":
      return { w: 92, h: 72, r: 18, bg: "rgba(255,255,255,0.16)" };
    case "Tall Florals":
      return { w: 66, h: 120, r: 18, bg: "rgba(255,255,255,0.14)" };
    case "Candles":
      return { w: 96, h: 56, r: 999, bg: "rgba(255,255,255,0.12)" };
    case "Minimal Greenery":
      return { w: 88, h: 52, r: 14, bg: "rgba(255,255,255,0.10)" };
    default:
      return { w: 92, h: 72, r: 18, bg: "rgba(255,255,255,0.16)" };
  }
}

function applyTableShape(shape) {
  // Adjust table silhouette
  if (shape === "Round") {
    tableEl.style.width = "320px";
    tableEl.style.height = "320px";
    tableEl.style.borderRadius = "999px";
  } else if (shape === "Rectangle") {
    tableEl.style.width = "380px";
    tableEl.style.height = "260px";
    tableEl.style.borderRadius = "26px";
  } else if (shape === "Oval") {
    tableEl.style.width = "380px";
    tableEl.style.height = "280px";
    tableEl.style.borderRadius = "999px";
  } else if (shape === "Square") {
    tableEl.style.width = "300px";
    tableEl.style.height = "300px";
    tableEl.style.borderRadius = "26px";
  }
}

function renderPlaceSettings(count) {
  settingsEl.innerHTML = "";

  // positions around the table in a circle/ellipse
  // radius adapts based on table size
  const rect = tableEl.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  const rx = (w / 2) - 28;
  const ry = (h / 2) - 28;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    const x = (w / 2) + rx * Math.cos(angle);
    const y = (h / 2) + ry * Math.sin(angle);

    const place = document.createElement("div");
    place.className = "place";
    place.style.left = `${x - 17}px`;
    place.style.top = `${y - 17}px`;

    const plate = document.createElement("div");
    plate.className = "plate";
    plate.style.background = chargerColor(state.charger);

    const napkin = document.createElement("div");
    napkin.className = "napkin";
    napkin.style.background = state.napkinColor;

    // tiny nod to napkin style (MVP)
    if (state.napkinStyle === "Napkin Ring") napkin.style.borderRadius = "999px";
    if (state.napkinStyle === "Pocket Fold") napkin.style.borderRadius = "3px";
    if (state.napkinStyle === "Bow Tie") napkin.style.transform = "rotate(12deg)";

    place.appendChild(plate);
    place.appendChild(napkin);
    settingsEl.appendChild(place);
  }
}

function renderCenterpiece(name) {
  const s = centerStyle(name);
  centerpieceEl.style.width = `${s.w}px`;
  centerpieceEl.style.height = `${s.h}px`;
  centerpieceEl.style.borderRadius = `${s.r}px`;
  centerpieceEl.style.background = s.bg;
}

function renderSummary() {
  sum.table.textContent = state.tableShape === "Round" ? "Round (60\")" :
                          state.tableShape === "Rectangle" ? "Rectangle (8 ft)" :
                          state.tableShape;

  sum.settings.textContent = String(state.placeSettings);
  sum.cloth.textContent = state.clothName;
  sum.charger.textContent = state.charger;
  sum.napkin.textContent = state.napkinName;
  sum.napkinStyle.textContent = state.napkinStyle;
  sum.centerpiece.textContent = state.centerpiece;

  pill.table.textContent = state.tableShape;
  pill.settings.textContent = String(state.placeSettings);
  pill.cloth.textContent = state.clothName;
  pill.charger.textContent = state.charger;
  pill.napkin.textContent = state.napkinName;
  pill.napkinStyle.textContent = state.napkinStyle;
  pill.centerpiece.textContent = state.centerpiece;
}

function renderAll() {
  // cloth color
  tableEl.style.background = state.clothColor;

  // shape
  applyTableShape(state.tableShape);

  // centerpiece
  renderCenterpiece(state.centerpiece);

  // after shape changes, re-render settings (needs updated size)
  requestAnimationFrame(() => {
    renderPlaceSettings(state.placeSettings);
  });

  renderSummary();
}

function setActiveSwatch(groupSelector, matchAttr, selectedValue) {
  const buttons = document.querySelectorAll(groupSelector);
  buttons.forEach((b) => {
    const isActive = b.getAttribute(matchAttr) === selectedValue;
    b.style.outline = isActive ? "2px solid rgba(215,198,163,0.7)" : "none";
  });
}

// --- Wire up inputs ---
function init() {
  el("year").textContent = String(new Date().getFullYear());

  // table shape radios
  document.querySelectorAll('input[name="tableShape"]').forEach((r) => {
    r.addEventListener("change", (e) => {
      state.tableShape = e.target.value;
      renderAll();
    });
  });

  // place settings range
  const range = el("placeSettings");
  range.addEventListener("input", (e) => {
    state.placeSettings = Number(e.target.value);
    renderAll();
  });

  // cloth swatches
  document.querySelectorAll("[data-cloth]").forEach((btn) => {
    const color = btn.getAttribute("data-color");
    btn.style.background = color;
    btn.addEventListener("click", () => {
      state.clothName = btn.getAttribute("data-cloth");
      state.clothColor = color;
      setActiveSwatch("[data-cloth]", "data-cloth", state.clothName);
      renderAll();
    });
  });

  // charger radios
  document.querySelectorAll('input[name="charger"]').forEach((r) => {
    r.addEventListener("change", (e) => {
      state.charger = e.target.value;
      renderAll();
    });
  });

  // napkin swatches
  document.querySelectorAll("[data-napkin]").forEach((btn) => {
    const color = btn.getAttribute("data-color");
    btn.style.background = color;
    btn.addEventListener("click", () => {
      state.napkinName = btn.getAttribute("data-napkin");
      state.napkinColor = color;
      setActiveSwatch("[data-napkin]", "data-napkin", state.napkinName);
      renderAll();
    });
  });

  // napkin style radios
  document.querySelectorAll('input[name="napkinStyle"]').forEach((r) => {
    r.addEventListener("change", (e) => {
      state.napkinStyle = e.target.value;
      renderAll();
    });
  });

  // centerpiece radios
  document.querySelectorAll('input[name="centerpiece"]').forEach((r) => {
    r.addEventListener("change", (e) => {
      state.centerpiece = e.target.value;
      renderAll();
    });
  });

  // reset
  el("btnReset").addEventListener("click", () => {
    state.tableShape = "Round";
    state.placeSettings = 8;
    state.clothName = "Ivory";
    state.clothColor = "#F6F0E6";
    state.charger = "Gold";
    state.napkinName = "White";
    state.napkinColor = "#FFFFFF";
    state.napkinStyle = "Classic Fold";
    state.centerpiece = "Low Florals";

    // reset UI controls
    document.querySelector('input[name="tableShape"][value="Round"]').checked = true;
    el("placeSettings").value = "8";
    document.querySelector('input[name="charger"][value="Gold"]').checked = true;
    document.querySelector('input[name="napkinStyle"][value="Classic Fold"]').checked = true;
    document.querySelector('input[name="centerpiece"][value="Low Florals"]').checked = true;

    setActiveSwatch("[data-cloth]", "data-cloth", "Ivory");
    setActiveSwatch("[data-napkin]", "data-napkin", "White");

    el("exportNote").textContent = "";
    renderAll();
  });

  // export materials list (downloads a .txt)
  el("btnExport").addEventListener("click", () => {
    const lines = [
      "The Preview Suite — Materials List",
      "--------------------------------",
      `Table: ${sum.table.textContent}`,
      `Place settings: ${state.placeSettings}`,
      `Tablecloth: ${state.clothName}`,
      `Charger: ${state.charger}`,
      `Napkin: ${state.napkinName}`,
      `Napkin style: ${state.napkinStyle}`,
      `Centerpiece: ${state.centerpiece}`,
      "",
      "Tip: This is an MVP export. Later you can export PDF or a shopping list.",
    ];

    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "preview-suite-materials.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    el("exportNote").textContent = "Downloaded: preview-suite-materials.txt";
  });

  // initial active outlines
  setActiveSwatch("[data-cloth]", "data-cloth", state.clothName);
  setActiveSwatch("[data-napkin]", "data-napkin", state.napkinName);

  renderAll();
}

document.addEventListener("DOMContentLoaded", init);
