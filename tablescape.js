const TOTAL_STEPS = 8;

const initialState = {
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

const state = { ...initialState };
let currentStep = 1;

const el = (id) => document.getElementById(id);

const refs = {
  year: el("year"),
  table: el("table"),
  settings: el("settingsEl"),
  centerpiece: el("centerpieceEl"),
  stepTitle: el("stepTitle"),
  stepHint: el("stepHint"),
  stepValue: el("stepValue"),
  stepContent: el("stepContent"),
  wizardProgress: el("wizardProgress"),
  progressFill: el("progressFill"),
  btnBack: el("btnBack"),
  btnNext: el("btnNext"),
  btnReset: el("btnReset"),
  exportNote: el("exportNote"),
  summary: {
    table: el("sumTable"),
    settings: el("sumSettings"),
    cloth: el("sumCloth"),
    charger: el("sumCharger"),
    napkin: el("sumNapkin"),
    napkinStyle: el("sumNapkinStyle"),
    centerpiece: el("sumCenterpiece"),
  },
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
  switch (name) {
    case "Low Florals": return { w: 92, h: 72, r: 18, bg: "rgba(255,255,255,0.16)" };
    case "Tall Florals": return { w: 66, h: 120, r: 18, bg: "rgba(255,255,255,0.14)" };
    case "Candles": return { w: 96, h: 56, r: 999, bg: "rgba(255,255,255,0.12)" };
    case "Minimal Greenery": return { w: 88, h: 52, r: 14, bg: "rgba(255,255,255,0.10)" };
    default: return { w: 92, h: 72, r: 18, bg: "rgba(255,255,255,0.16)" };
  }
}

function formatTable(shape) {
  if (shape === "Round") return 'Round (60")';
  if (shape === "Rectangle") return "Rectangle (8 ft)";
  return shape;
}

function applyTableShape(shape) {
  if (shape === "Round") {
    refs.table.style.width = "320px";
    refs.table.style.height = "320px";
    refs.table.style.borderRadius = "999px";
  } else if (shape === "Rectangle") {
    refs.table.style.width = "380px";
    refs.table.style.height = "260px";
    refs.table.style.borderRadius = "26px";
  } else if (shape === "Oval") {
    refs.table.style.width = "380px";
    refs.table.style.height = "280px";
    refs.table.style.borderRadius = "999px";
  } else if (shape === "Square") {
    refs.table.style.width = "300px";
    refs.table.style.height = "300px";
    refs.table.style.borderRadius = "26px";
  }
}

function renderPlaceSettings(count) {
  refs.settings.innerHTML = "";
  const rect = refs.table.getBoundingClientRect();
  const rx = (rect.width / 2) - 28;
  const ry = (rect.height / 2) - 28;

  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    const x = (rect.width / 2) + rx * Math.cos(angle);
    const y = (rect.height / 2) + ry * Math.sin(angle);

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
    napkin.style.transform = "none";
    napkin.style.borderRadius = "4px";

    if (state.napkinStyle === "Napkin Ring") napkin.style.borderRadius = "999px";
    if (state.napkinStyle === "Pocket Fold") napkin.style.borderRadius = "2px";
    if (state.napkinStyle === "Bow Tie") napkin.style.transform = "rotate(12deg)";

    place.appendChild(plate);
    place.appendChild(napkin);
    refs.settings.appendChild(place);
  }
}

function renderCenterpiece() {
  const s = centerStyle(state.centerpiece);
  refs.centerpiece.style.width = `${s.w}px`;
  refs.centerpiece.style.height = `${s.h}px`;
  refs.centerpiece.style.borderRadius = `${s.r}px`;
  refs.centerpiece.style.background = s.bg;
}

function renderSummary() {
  refs.summary.table.textContent = formatTable(state.tableShape);
  refs.summary.settings.textContent = String(state.placeSettings);
  refs.summary.cloth.textContent = state.clothName;
  refs.summary.charger.textContent = state.charger;
  refs.summary.napkin.textContent = state.napkinName;
  refs.summary.napkinStyle.textContent = state.napkinStyle;
  refs.summary.centerpiece.textContent = state.centerpiece;
}

function renderPreview() {
  refs.table.style.background = state.clothColor;
  applyTableShape(state.tableShape);
  renderCenterpiece();
  requestAnimationFrame(() => renderPlaceSettings(state.placeSettings));
  renderSummary();
}

function getStepMeta() {
  switch (currentStep) {
    case 1: return { title: "Table shape + size", hint: "Choose the base table profile.", value: formatTable(state.tableShape) };
    case 2: return { title: "Number of place settings", hint: "How many guests are you planning for?", value: String(state.placeSettings) };
    case 3: return { title: "Tablecloth color", hint: "Pick a table linen tone.", value: state.clothName };
    case 4: return { title: "Charger plate", hint: "Select a metallic or neutral charger.", value: state.charger };
    case 5: return { title: "Napkin color", hint: "Choose the napkin color.", value: state.napkinName };
    case 6: return { title: "Napkin style", hint: "Define the napkin presentation style.", value: state.napkinStyle };
    case 7: return { title: "Centerpiece", hint: "Select the tabletop focal element.", value: state.centerpiece };
    case 8: return { title: "Review + Export", hint: "Review all selections and export materials.", value: "Ready" };
    default: return { title: "", hint: "", value: "" };
  }
}

function setActiveButtons(selector, attrName, value) {
  document.querySelectorAll(selector).forEach((button) => {
    const isActive = button.getAttribute(attrName) === value;
    button.style.outline = isActive ? "2px solid rgba(215,198,163,0.7)" : "none";
  });
}

function renderStepContent() {
  refs.stepContent.innerHTML = "";

  if (currentStep === 1) {
    refs.stepContent.innerHTML = `
      <div class="options">
        ${["Round", "Rectangle", "Oval", "Square"].map((shape) => `
          <label class="opt">
            <input type="radio" name="tableShape" value="${shape}" ${state.tableShape === shape ? "checked" : ""} />
            <span>${formatTable(shape)}</span>
          </label>
        `).join("")}
      </div>
    `;
    document.querySelectorAll('input[name="tableShape"]').forEach((radio) => {
      radio.addEventListener("change", (event) => {
        state.tableShape = event.target.value;
        updateUI();
      });
    });
  }

  if (currentStep === 2) {
    refs.stepContent.innerHTML = `
      <div class="row">
        <input id="placeSettings" class="range" type="range" min="2" max="12" value="${state.placeSettings}" />
        <div class="range__labels"><span>2</span><span>12</span></div>
      </div>
    `;
    el("placeSettings").addEventListener("input", (event) => {
      state.placeSettings = Number(event.target.value);
      updateUI();
    });
  }

  if (currentStep === 3) {
    const clothOptions = [
      ["Ivory", "#F6F0E6"],
      ["White", "#FFFFFF"],
      ["Champagne", "#E9D7B5"],
      ["Mocha", "#8B6F5A"],
      ["Black", "#1D1D1F"],
      ["Sage", "#A8B8A0"],
    ];

    refs.stepContent.innerHTML = `<div class="swatches">${clothOptions.map(([name, color]) => (
      `<button class="swatch" type="button" data-cloth="${name}" data-color="${color}" aria-label="${name}" style="background:${color}"></button>`
    )).join("")}</div>`;

    document.querySelectorAll("[data-cloth]").forEach((button) => {
      button.addEventListener("click", () => {
        state.clothName = button.getAttribute("data-cloth");
        state.clothColor = button.getAttribute("data-color");
        updateUI();
      });
    });
    setActiveButtons("[data-cloth]", "data-cloth", state.clothName);
  }

  if (currentStep === 4) {
    refs.stepContent.innerHTML = `
      <div class="options">
        ${["Gold", "Silver", "Pearl", "Black"].map((option) => `
          <label class="opt">
            <input type="radio" name="charger" value="${option}" ${state.charger === option ? "checked" : ""} />
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    `;
    document.querySelectorAll('input[name="charger"]').forEach((radio) => {
      radio.addEventListener("change", (event) => {
        state.charger = event.target.value;
        updateUI();
      });
    });
  }

  if (currentStep === 5) {
    const napkinOptions = [
      ["White", "#FFFFFF"],
      ["Sand", "#E7D8C3"],
      ["Dusty Rose", "#D9B2B2"],
      ["Navy", "#3A4D68"],
      ["Charcoal", "#454545"],
      ["Sage", "#B5C3AE"],
    ];

    refs.stepContent.innerHTML = `<div class="swatches">${napkinOptions.map(([name, color]) => (
      `<button class="swatch swatch--sm" type="button" data-napkin="${name}" data-color="${color}" aria-label="${name}" style="background:${color}"></button>`
    )).join("")}</div>`;

    document.querySelectorAll("[data-napkin]").forEach((button) => {
      button.addEventListener("click", () => {
        state.napkinName = button.getAttribute("data-napkin");
        state.napkinColor = button.getAttribute("data-color");
        updateUI();
      });
    });
    setActiveButtons("[data-napkin]", "data-napkin", state.napkinName);
  }

  if (currentStep === 6) {
    refs.stepContent.innerHTML = `
      <div class="options">
        ${["Classic Fold", "Pocket Fold", "Napkin Ring", "Bow Tie"].map((style) => `
          <label class="opt">
            <input type="radio" name="napkinStyle" value="${style}" ${state.napkinStyle === style ? "checked" : ""} />
            <span>${style}</span>
          </label>
        `).join("")}
      </div>
    `;
    document.querySelectorAll('input[name="napkinStyle"]').forEach((radio) => {
      radio.addEventListener("change", (event) => {
        state.napkinStyle = event.target.value;
        updateUI();
      });
    });
  }

  if (currentStep === 7) {
    refs.stepContent.innerHTML = `
      <div class="options">
        ${["Low Florals", "Tall Florals", "Candles", "Minimal Greenery"].map((style) => `
          <label class="opt">
            <input type="radio" name="centerpiece" value="${style}" ${state.centerpiece === style ? "checked" : ""} />
            <span>${style}</span>
          </label>
        `).join("")}
      </div>
    `;
    document.querySelectorAll('input[name="centerpiece"]').forEach((radio) => {
      radio.addEventListener("change", (event) => {
        state.centerpiece = event.target.value;
        updateUI();
      });
    });
  }

  if (currentStep === 8) {
    refs.stepContent.innerHTML = `
      <div class="review-card">
        <dl class="summary__grid kv">
          <div><dt>Table</dt><dd>${formatTable(state.tableShape)}</dd></div>
          <div><dt>Place Settings</dt><dd>${state.placeSettings}</dd></div>
          <div><dt>Tablecloth</dt><dd>${state.clothName}</dd></div>
          <div><dt>Charger</dt><dd>${state.charger}</dd></div>
          <div><dt>Napkin</dt><dd>${state.napkinName}</dd></div>
          <div><dt>Napkin Style</dt><dd>${state.napkinStyle}</dd></div>
          <div><dt>Centerpiece</dt><dd>${state.centerpiece}</dd></div>
        </dl>
        <button id="btnExport" class="btn review-card__export" type="button">Export Materials</button>
      </div>
    `;

    el("btnExport").addEventListener("click", exportMaterials);
  }
}

function exportMaterials() {
  const lines = [
    "The Preview Suite — Materials List",
    "--------------------------------",
    `Table: ${formatTable(state.tableShape)}`,
    `Place settings: ${state.placeSettings}`,
    `Tablecloth: ${state.clothName}`,
    `Charger: ${state.charger}`,
    `Napkin: ${state.napkinName}`,
    `Napkin style: ${state.napkinStyle}`,
    `Centerpiece: ${state.centerpiece}`,
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "preview-suite-materials.txt";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);

  refs.exportNote.textContent = "Downloaded: preview-suite-materials.txt";
}

function updateUI() {
  refs.wizardProgress.textContent = `Step ${currentStep} of ${TOTAL_STEPS}`;
  refs.progressFill.style.width = `${(currentStep / TOTAL_STEPS) * 100}%`;

  const meta = getStepMeta();
  refs.stepTitle.textContent = meta.title;
  refs.stepHint.textContent = meta.hint;
  refs.stepValue.textContent = meta.value;

  refs.btnBack.disabled = currentStep === 1;
  refs.btnNext.disabled = currentStep === TOTAL_STEPS;
  refs.btnNext.textContent = currentStep === TOTAL_STEPS ? "Complete" : "Next";

  renderStepContent();
  renderPreview();
}

function resetState() {
  Object.assign(state, initialState);
  currentStep = 1;
  refs.exportNote.textContent = "";
  updateUI();
}

function init() {
  refs.year.textContent = String(new Date().getFullYear());

  refs.btnBack.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep -= 1;
      refs.exportNote.textContent = "";
      updateUI();
    }
  });

  refs.btnNext.addEventListener("click", () => {
    if (currentStep < TOTAL_STEPS) {
      currentStep += 1;
      refs.exportNote.textContent = "";
      updateUI();
    }
  });

  refs.btnReset.addEventListener("click", resetState);

  updateUI();
}

document.addEventListener("DOMContentLoaded", init);
