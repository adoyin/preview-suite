const TOTAL_STEPS = 9;

const PLACEHOLDER_ASSET = "./assets/placeholders/ref-card.svg";

const tableShapeOptions = [
  { value: "round", label: "Round" },
  { value: "rectangle", label: "Rectangle" },
  { value: "square", label: "Square" },
];

const tableSizeOptions = {
  round: [
    { value: '60"', label: 'Round 60"' },
    { value: '90"', label: 'Round 90"' },
  ],
  rectangle: [
    { value: "6ft", label: "Rectangle 6 ft" },
    { value: "8ft", label: "Rectangle 8 ft" },
    { value: "9ft", label: "Rectangle 9 ft" },
  ],
  square: [
    { value: "8ft", label: "Square 8 ft" },
    { value: "9ft", label: "Square 9 ft" },
    { value: "10ft", label: "Square 10 ft" },
  ],
};

const initialState = {
  tableShape: "round",
  tableSize: '60"',
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

const ASSET_BASE = "./assets/tablescape";

const chargerAssetMap = {
  Gold: `${ASSET_BASE}/charger-gold.svg`,
  Silver: `${ASSET_BASE}/charger-silver.svg`,
  Pearl: `${ASSET_BASE}/charger-pearl.svg`,
  Black: `${ASSET_BASE}/charger-black.svg`,
};

const napkinColorSlugMap = {
  White: "white",
  Sand: "sand",
  "Dusty Rose": "dusty-rose",
  Navy: "navy",
  Charcoal: "charcoal",
  Sage: "sage",
};

const napkinStyleSlugMap = {
  "Classic Fold": "classic-fold",
  "Pocket Fold": "pocket-fold",
  "Napkin Ring": "napkin-ring",
  "Bow Tie": "bow-tie",
};

const centerpieceAssetMap = {
  "Low Florals": `${ASSET_BASE}/centerpiece-low-florals.svg`,
  "Tall Florals": `${ASSET_BASE}/centerpiece-tall-florals.svg`,
  Candles: `${ASSET_BASE}/centerpiece-candles.svg`,
  "Minimal Greenery": `${ASSET_BASE}/centerpiece-minimal-greenery.svg`,
};

function formatTableShape(shape) {
  const selected = tableShapeOptions.find((option) => option.value === shape);
  return selected ? selected.label : shape;
}

function formatTableSelection(shape, size) {
  return `${formatTableShape(shape)} — ${size}`;
}

function applyTableShape(shape, size) {
  refs.table.classList.remove("table--round", "table--rectangle", "table--oval", "table--square");

  if (shape === "round") {
    if (size === '90"') {
      refs.table.style.width = "360px";
      refs.table.style.height = "360px";
    } else {
      refs.table.style.width = "300px";
      refs.table.style.height = "300px";
    }
    refs.table.style.borderRadius = "999px";
    refs.table.classList.add("table--round");
  } else if (shape === "rectangle") {
    if (size === "6ft") {
      refs.table.style.width = "320px";
      refs.table.style.height = "220px";
    } else if (size === "9ft") {
      refs.table.style.width = "410px";
      refs.table.style.height = "250px";
    } else {
      refs.table.style.width = "370px";
      refs.table.style.height = "240px";
    }
    refs.table.style.borderRadius = "26px";
    refs.table.classList.add("table--rectangle");
  } else if (shape === "square") {
    if (size === "10ft") {
      refs.table.style.width = "350px";
      refs.table.style.height = "350px";
    } else if (size === "9ft") {
      refs.table.style.width = "320px";
      refs.table.style.height = "320px";
    } else {
      refs.table.style.width = "290px";
      refs.table.style.height = "290px";
    }
    refs.table.style.borderRadius = "26px";
    refs.table.classList.add("table--square");
  }
}

function getNapkinAsset() {
  const color = napkinColorSlugMap[state.napkinName] || "white";
  const style = napkinStyleSlugMap[state.napkinStyle] || "classic-fold";
  return `${ASSET_BASE}/napkin-${color}-${style}.svg`;
}

function createLayer(className, src, alt = "") {
  const image = document.createElement("img");
  image.className = className;
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  return image;
}

function getCircularPositions(shape, count, width, height) {
  const inset = shape === "Round" ? 18 : 24;
  const rx = (width / 2) - inset;
  const ry = (height / 2) - inset;

  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      x: (width / 2) + rx * Math.cos(angle),
      y: (height / 2) + ry * Math.sin(angle),
      angle,
    };
  });
}

function getPerimeterPositions(count, width, height) {
  const pad = 24;
  const corners = [
    { x: pad, y: pad },
    { x: width - pad, y: pad },
    { x: width - pad, y: height - pad },
    { x: pad, y: height - pad },
  ];

  const segments = corners.map((point, index) => {
    const next = corners[(index + 1) % corners.length];
    return { start: point, end: next };
  });

  return Array.from({ length: count }, (_, i) => {
    const progress = i / count;
    const segmentIndex = Math.floor(progress * segments.length) % segments.length;
    const localProgress = (progress * segments.length) % 1;
    const segment = segments[segmentIndex];
    const x = segment.start.x + (segment.end.x - segment.start.x) * localProgress;
    const y = segment.start.y + (segment.end.y - segment.start.y) * localProgress;
    const angle = Math.atan2(y - (height / 2), x - (width / 2));

    return { x, y, angle };
  });
}

function getSettingPositions(shape, count, width, height) {
  if (shape === "rectangle" || shape === "square") {
    return getPerimeterPositions(count, width, height);
  }
  return getCircularPositions(shape, count, width, height);
}

function renderPlaceSettings(count) {
  refs.settings.innerHTML = "";
  const rect = refs.table.getBoundingClientRect();
  const chargerAsset = chargerAssetMap[state.charger] || chargerAssetMap.Gold;
  const napkinAsset = getNapkinAsset();
  const positions = getSettingPositions(state.tableShape, count, rect.width, rect.height);

  positions.forEach((position, index) => {
    const setting = document.createElement("div");
    setting.className = "setting";

    const facing = (position.angle * 180) / Math.PI + 90;
    const jitter = ((index % 5) - 2) * 1.2;
    setting.style.left = `${position.x}px`;
    setting.style.top = `${position.y}px`;
    setting.style.setProperty("--rot", `${facing + jitter}deg`);

    setting.appendChild(createLayer("setting__charger", chargerAsset, `${state.charger} charger`));
    setting.appendChild(createLayer("setting__plate", `${ASSET_BASE}/dinner-plate.svg`, "Dinner plate"));
    setting.appendChild(createLayer("setting__napkin", napkinAsset, `${state.napkinName} ${state.napkinStyle} napkin`));
    setting.appendChild(createLayer("setting__fork", `${ASSET_BASE}/cutlery-fork.svg`, "Fork"));
    setting.appendChild(createLayer("setting__knife", `${ASSET_BASE}/cutlery-knife.svg`, "Knife"));
    setting.appendChild(createLayer("setting__spoon", `${ASSET_BASE}/cutlery-spoon.svg`, "Spoon"));
    setting.appendChild(createLayer("setting__glass", `${ASSET_BASE}/glass.svg`, "Glass"));

    refs.settings.appendChild(setting);
  });
}

function renderCenterpiece() {
  refs.centerpiece.innerHTML = "";
  const centerImage = createLayer(
    "centerpiece__image",
    centerpieceAssetMap[state.centerpiece] || centerpieceAssetMap["Low Florals"],
    `${state.centerpiece} centerpiece`
  );
  refs.centerpiece.appendChild(centerImage);

  if (state.centerpiece === "Candles") {
    ["-44px", "44px"].forEach((offset) => {
      const candle = createLayer("centerpiece__candle", `${ASSET_BASE}/candle-single.svg`, "Accent candle");
      candle.style.left = `calc(50% + ${offset})`;
      refs.centerpiece.appendChild(candle);
    });
  }
}

function renderSummary() {
  refs.summary.table.textContent = formatTableSelection(state.tableShape, state.tableSize);
  refs.summary.settings.textContent = String(state.placeSettings);
  refs.summary.cloth.textContent = state.clothName;
  refs.summary.charger.textContent = state.charger;
  refs.summary.napkin.textContent = state.napkinName;
  refs.summary.napkinStyle.textContent = state.napkinStyle;
  refs.summary.centerpiece.textContent = state.centerpiece;
}

function renderPreview() {
  refs.table.style.backgroundColor = state.clothColor;
  refs.table.style.backgroundImage = `url(${ASSET_BASE}/tablecloth-texture.svg)`;
  refs.table.style.backgroundSize = "cover";
  applyTableShape(state.tableShape, state.tableSize);

  const isTableOnlyPreviewStep = currentStep <= 2;
  refs.centerpiece.innerHTML = "";
  refs.settings.innerHTML = "";

  if (!isTableOnlyPreviewStep) {
    renderCenterpiece();
    requestAnimationFrame(() => renderPlaceSettings(state.placeSettings));
  }

  renderSummary();
}

function renderVisualOptionCards({ name, options, selectedValue, onSelect }) {
  refs.stepContent.innerHTML = `
    <div class="option-cards">
      ${options.map((option) => `
        <label class="option-card ${selectedValue === option.value ? "option-card--selected" : ""}">
          <input type="radio" name="${name}" value="${option.value}" ${selectedValue === option.value ? "checked" : ""} />
          <img class="option-card__image" src="${PLACEHOLDER_ASSET}" alt="Image coming soon" loading="lazy" />
          <span class="option-card__title">${option.label}</span>
        </label>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(`input[name="${name}"]`).forEach((radio) => {
    radio.addEventListener("change", (event) => onSelect(event.target.value));
  });
}

function getStepMeta() {
  switch (currentStep) {
    case 1: return { title: "Table shape", hint: "Choose the base table shape.", value: formatTableShape(state.tableShape) };
    case 2: return { title: "Table size", hint: "Choose a size for the selected shape.", value: state.tableSize };
    case 3: return { title: "Number of place settings", hint: "How many guests are you planning for?", value: String(state.placeSettings) };
    case 4: return { title: "Tablecloth color", hint: "Pick a table linen tone.", value: state.clothName };
    case 5: return { title: "Charger plate", hint: "Select a metallic or neutral charger.", value: state.charger };
    case 6: return { title: "Napkin color", hint: "Choose the napkin color.", value: state.napkinName };
    case 7: return { title: "Napkin style", hint: "Define the napkin presentation style.", value: state.napkinStyle };
    case 8: return { title: "Centerpiece", hint: "Select the tabletop focal element.", value: state.centerpiece };
    case 9: return { title: "Review + Export", hint: "Review all selections and export materials.", value: "Ready" };
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
    renderVisualOptionCards({
      name: "tableShape",
      options: tableShapeOptions,
      selectedValue: state.tableShape,
      onSelect: (value) => {
        if (state.tableShape !== value) {
          state.tableShape = value;
          const shapeSizes = tableSizeOptions[value] || [];
          state.tableSize = shapeSizes[0]?.value || "";
        }
        updateUI();
      },
    });
  }

  if (currentStep === 2) {
    const shapeSizes = tableSizeOptions[state.tableShape] || [];
    if (!shapeSizes.some((option) => option.value === state.tableSize)) {
      state.tableSize = shapeSizes[0]?.value || "";
    }

    renderVisualOptionCards({
      name: "tableSize",
      options: shapeSizes,
      selectedValue: state.tableSize,
      onSelect: (value) => {
        state.tableSize = value;
        updateUI();
      },
    });
  }

  if (currentStep === 3) {
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

  if (currentStep === 4) {
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

  if (currentStep === 5) {
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

  if (currentStep === 6) {
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

  if (currentStep === 7) {
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

  if (currentStep === 8) {
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

  if (currentStep === 9) {
    refs.stepContent.innerHTML = `
      <div class="review-card">
        <dl class="summary__grid kv">
          <div><dt>Table</dt><dd>${formatTableSelection(state.tableShape, state.tableSize)}</dd></div>
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
    `Table: ${formatTableSelection(state.tableShape, state.tableSize)}`,
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
