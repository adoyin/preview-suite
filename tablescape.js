const PLACEHOLDER_ASSET = "./assets/placeholders/ref-card.svg";
const TABLECLOTH_FALLBACK_ASSET = "./assets/tablescape/tablecloth-texture.svg";

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

const tableclothTextureOptions = [
  { value: "linen", label: "Linen", thumbnail: "./assets/tablecloths/linen/ivory.jpg" },
  { value: "satin", label: "Satin", thumbnail: "./assets/tablecloths/satin/ivory.jpg" },
  { value: "velvet", label: "Velvet", thumbnail: "./assets/tablecloths/velvet/ivory.jpg" },
];

const tableclothColorOptions = [
  { value: "ivory", label: "Ivory" },
  { value: "white", label: "White" },
  { value: "champagne", label: "Champagne" },
  { value: "blush", label: "Blush" },
  { value: "dusty-rose", label: "Dusty Rose" },
  { value: "sage", label: "Sage" },
  { value: "emerald", label: "Emerald" },
  { value: "navy", label: "Navy" },
  { value: "french-blue", label: "French Blue" },
  { value: "burgundy", label: "Burgundy" },
  { value: "terracotta", label: "Terracotta" },
  { value: "black", label: "Black" },
];

const clothPalette = {
  ivory: "#F6F1E8",
  white: "#FFFFFF",
  champagne: "#F1E3C6",
  blush: "#E8C7C8",
  "dusty-rose": "#CFA1A3",
  sage: "#A8B5A2",
  emerald: "#1F6A5A",
  navy: "#1C2A44",
  "french-blue": "#4F6D8A",
  burgundy: "#6B1F2A",
  terracotta: "#C46A4A",
  black: "#111111",
};

const initialState = {
  tableShape: "round",
  tableSize: '60"',
  tableclothTexture: "linen",
  tableclothColor: "ivory",
  customTableclothColor: "",
  placeSettingsCount: null,
  chargerType: null,
  napkinType: null,
  flatwareType: null,
  centerpieceType: null,
  napkinStyle: null,
  napkinColor: "#FFFFFF",
};

const stepSequence = [
  "Table shape",
  "Table size",
  "Tablecloth texture",
  "Tablecloth color",
  "Number of place settings",
  "Charger plate",
  "Napkin color",
  "Napkin style",
  "Centerpiece",
  "Review + Export",
];

const TOTAL_STEPS = stepSequence.length;

const state = { ...initialState };
let currentStepIndex = 0;

const el = (id) => document.getElementById(id);

const refs = {
  year: el("year"),
  table: el("table"),
  tableclothLayer: el("tableclothLayer"),
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
  previewStepText: el("previewStepText") || el("previewStatusLine"),
  previewNextText: el("previewNextText") || el("previewNextHint"),
  previewSummary: el("previewSummary"),
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

function getTableclothAssetPath(texture, color) {
  return `./assets/tablecloths/${texture}/${color}.jpg`;
}

function attachImageFallbacks(root = document) {
  root.querySelectorAll("img[data-fallback-src]").forEach((image) => {
    image.onerror = () => {
      const fallbackSrc = image.getAttribute("data-fallback-src");
      if (fallbackSrc && image.getAttribute("src") !== fallbackSrc) {
        image.src = fallbackSrc;
      }
      image.onerror = null;
    };
  });
}

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
  const color = napkinColorSlugMap[state.napkinType] || "white";
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

function createPlateLayer(src, alt = "") {
  const plateWrap = document.createElement("div");
  plateWrap.className = "plate-wrap setting__plate";

  const contactShadow = document.createElement("div");
  contactShadow.className = "plate-contact-shadow";

  const plate = createLayer("plate", src, alt);

  plateWrap.append(contactShadow, plate);

  requestAnimationFrame(() => {
    plateWrap.classList.add("is-visible");
  });

  return plateWrap;
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

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getSeatRotationJitter(tableType, seatIndex) {
  const seededValue = hashString(`${tableType}:${seatIndex}`);
  return ((seededValue % 401) / 100) - 2;
}

function renderPlaceSettings(count) {
  refs.settings.innerHTML = "";
  if (count == null) {
    return;
  }

  const rect = refs.table.getBoundingClientRect();
  const chargerAsset = state.chargerType ? chargerAssetMap[state.chargerType] : null;
  const napkinAsset = getNapkinAsset();
  const positions = getSettingPositions(state.tableShape, count, rect.width, rect.height);
  const tableType = `${state.tableShape}-${state.tableSize}`;

  positions.forEach((position, index) => {
    const setting = document.createElement("div");
    setting.className = "setting";

    const facing = (position.angle * 180) / Math.PI + 90;
    const jitter = getSeatRotationJitter(tableType, index);
    setting.style.left = `${position.x}px`;
    setting.style.top = `${position.y}px`;
    setting.style.setProperty("--rot", `${facing + jitter}deg`);

    if (state.chargerType && chargerAsset) {
      setting.appendChild(createLayer("setting__charger", chargerAsset, `${state.chargerType} charger`));
    }

    const plateWrap = document.createElement("div");
    plateWrap.className = "setting__plate-wrap";
    plateWrap.appendChild(createLayer("setting__plate", `${ASSET_BASE}/dinner-plate.svg`, "Dinner plate"));
    setting.appendChild(plateWrap);

    if (state.napkinType) {
      setting.appendChild(createLayer("setting__napkin", napkinAsset, `${state.napkinType} napkin`));
    }

    if (state.flatwareType) {
      setting.appendChild(createLayer("setting__fork", `${ASSET_BASE}/cutlery-fork.svg`, "Fork"));
      setting.appendChild(createLayer("setting__knife", `${ASSET_BASE}/cutlery-knife.svg`, "Knife"));
      setting.appendChild(createLayer("setting__spoon", `${ASSET_BASE}/cutlery-spoon.svg`, "Spoon"));
      setting.appendChild(createLayer("setting__glass", `${ASSET_BASE}/glass.svg`, "Glass"));
    }

    refs.settings.appendChild(setting);
  });
}

function renderCenterpiece() {
  if (!state.centerpieceType) {
    refs.centerpiece.innerHTML = "";
    return;
  }

  refs.centerpiece.innerHTML = "";
  const centerImage = createLayer(
    "centerpiece__image",
    centerpieceAssetMap[state.centerpieceType],
    `${state.centerpieceType} centerpiece`
  );
  refs.centerpiece.appendChild(centerImage);

  if (state.centerpieceType === "Candles") {
    ["-44px", "44px"].forEach((offset) => {
      const candle = createLayer("centerpiece__candle", `${ASSET_BASE}/candle-single.svg`, "Accent candle");
      candle.style.left = `calc(50% + ${offset})`;
      refs.centerpiece.appendChild(candle);
    });
  }
}

function renderSummary() {
  refs.summary.table.textContent = formatTableSelection(state.tableShape, state.tableSize);
  refs.summary.settings.textContent = state.placeSettingsCount == null ? "—" : String(state.placeSettingsCount);
  refs.summary.cloth.textContent = `${state.tableclothTexture[0].toUpperCase()}${state.tableclothTexture.slice(1)} — ${tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory"}`;
  refs.summary.charger.textContent = state.chargerType || "—";
  refs.summary.napkin.textContent = state.napkinType || "—";
  refs.summary.napkinStyle.textContent = state.napkinStyle || "—";
  refs.summary.centerpiece.textContent = state.centerpieceType || "—";
}

function updatePreviewStatus() {
  const currentStepNumber = currentStepIndex + 1;
  const totalSteps = stepSequence.length;
  const nextLabel = stepSequence[currentStepIndex + 1] || "Review";

  refs.previewStepText.textContent = `Designing your table — Step ${currentStepNumber} of ${totalSteps}`;
  refs.previewNextText.textContent = `Next: ${nextLabel}`;
  refs.previewSummary.hidden = currentStepNumber !== totalSteps;
}

function renderPreview() {
  refs.table.classList.add("is-refreshing");
  requestAnimationFrame(() => refs.table.classList.remove("is-refreshing"));

  refs.tableclothLayer.classList.add("table__cloth--changing");
  refs.tableclothLayer.src = getTableclothAssetPath(state.tableclothTexture, state.tableclothColor);
  refs.tableclothLayer.alt = `${state.tableclothTexture} ${state.tableclothColor} tablecloth`;
  requestAnimationFrame(() => refs.tableclothLayer.classList.remove("table__cloth--changing"));

  refs.tableclothLayer.onerror = () => {
    refs.tableclothLayer.src = TABLECLOTH_FALLBACK_ASSET;
    refs.tableclothLayer.onerror = null;
  };

  applyTableShape(state.tableShape, state.tableSize);

  const currentStepNumber = currentStepIndex + 1;
  refs.centerpiece.innerHTML = "";
  refs.settings.innerHTML = "";

  renderCenterpiece();
  requestAnimationFrame(() => renderPlaceSettings(state.placeSettingsCount));

  renderSummary();
  updatePreviewStatus();
}

function renderVisualOptionCards({ name, options, selectedValue, onSelect }) {
  refs.stepContent.innerHTML = `
    <div class="option-cards">
      ${options.map((option) => `
        <label class="option-card ${selectedValue === option.value ? "option-card--selected" : ""}">
          <input type="radio" name="${name}" value="${option.value}" ${selectedValue === option.value ? "checked" : ""} />
          <img class="option-card__image" src="${option.thumbnail || PLACEHOLDER_ASSET}" data-fallback-src="${PLACEHOLDER_ASSET}" alt="${option.label}" loading="lazy" />
          <span class="option-card__title">${option.label}</span>
        </label>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(`input[name="${name}"]`).forEach((radio) => {
    radio.addEventListener("change", (event) => onSelect(event.target.value));
  });

  attachImageFallbacks(refs.stepContent);
}

function getStepMeta() {
  const currentStepNumber = currentStepIndex + 1;

  switch (currentStepNumber) {
    case 1: return { title: "Table shape", hint: "Choose the base table shape.", value: formatTableShape(state.tableShape) };
    case 2: return { title: "Table size", hint: "Choose a size for the selected shape.", value: state.tableSize };
    case 3: return { title: "Tablecloth texture", hint: "Choose a fabric.", value: state.tableclothTexture[0].toUpperCase() + state.tableclothTexture.slice(1) };
    case 4: return { title: "Tablecloth color", hint: "Choose a color.", value: tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory" };
    case 5: return { title: "Number of place settings", hint: "How many guests are you planning for?", value: state.placeSettingsCount == null ? "Not selected" : String(state.placeSettingsCount) };
    case 6: return { title: "Charger plate", hint: "Select a metallic or neutral charger.", value: state.chargerType || "Not selected" };
    case 7: return { title: "Napkin color", hint: "Choose the napkin color.", value: state.napkinType || "Not selected" };
    case 8: return { title: "Napkin style", hint: "Define the napkin presentation style.", value: state.napkinStyle || "Not selected" };
    case 9: return { title: "Centerpiece", hint: "Select the tabletop focal element.", value: state.centerpieceType || "Not selected" };
    case 10: return { title: "Review + Export", hint: "Review all selections and export materials.", value: "Ready" };
    default: return { title: "", hint: "", value: "" };
  }
}

function setActiveButtons(selector, attrName, value) {
  document.querySelectorAll(selector).forEach((button) => {
    const isActive = button.getAttribute(attrName) === value;
    button.style.outline = isActive ? "2px solid rgba(215,198,163,0.7)" : "none";
  });
}

function normalizeHex(value) {
  const cleaned = value.trim().replace(/^#/, "");
  return /^[0-9a-fA-F]{6}$/.test(cleaned) ? `#${cleaned.toUpperCase()}` : "";
}

function hexToRgb(hex) {
  const normalizedHex = normalizeHex(hex);
  if (!normalizedHex) {
    return null;
  }

  const colorNumber = Number.parseInt(normalizedHex.slice(1), 16);
  return {
    r: (colorNumber >> 16) & 255,
    g: (colorNumber >> 8) & 255,
    b: colorNumber & 255,
  };
}

function getColorDistance(first, second) {
  return Math.sqrt(
    ((second.r - first.r) ** 2)
    + ((second.g - first.g) ** 2)
    + ((second.b - first.b) ** 2)
  );
}

function findClosestClothMatches(inputHex, limit = 3) {
  const inputRgb = hexToRgb(inputHex);
  if (!inputRgb) {
    return [];
  }

  return tableclothColorOptions
    .map((option) => {
      const paletteHex = clothPalette[option.value];
      const paletteRgb = hexToRgb(paletteHex);
      return {
        ...option,
        hex: paletteHex,
        distance: paletteRgb ? getColorDistance(inputRgb, paletteRgb) : Number.POSITIVE_INFINITY,
      };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

function extractDominantHexFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d", { willReadFrequently: true });

        if (!context) {
          reject(new Error("Unable to read image file."));
          return;
        }

        const maxDimension = 80;
        const scale = Math.min(maxDimension / image.width, maxDimension / image.height, 1);
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));

        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, 0, 0, width, height);

        const { data } = context.getImageData(0, 0, width, height);
        let totalRed = 0;
        let totalGreen = 0;
        let totalBlue = 0;
        let countedPixels = 0;

        for (let index = 0; index < data.length; index += 4) {
          const alpha = data[index + 3];
          if (alpha === 0) {
            continue;
          }

          totalRed += data[index];
          totalGreen += data[index + 1];
          totalBlue += data[index + 2];
          countedPixels += 1;
        }

        if (!countedPixels) {
          reject(new Error("Unable to detect colors from this image."));
          return;
        }

        const toHex = (value) => Math.round(value).toString(16).padStart(2, "0").toUpperCase();
        const dominantHex = `#${toHex(totalRed / countedPixels)}${toHex(totalGreen / countedPixels)}${toHex(totalBlue / countedPixels)}`;
        resolve(dominantHex);
      };
      image.onerror = () => reject(new Error("Unable to read this image."));
      image.src = reader.result;
    };
    reader.onerror = () => reject(new Error("Unable to open this image."));
    reader.readAsDataURL(file);
  });
}

function renderClothMatches(container, matches) {
  if (!container) {
    return;
  }

  if (!matches.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <p class="match-results__title">We found the closest real cloth colors</p>
    <div class="match-results__grid">
      ${matches.map((match) => `
        <article class="match-card">
          <img class="match-card__image" src="${getTableclothAssetPath(state.tableclothTexture, match.value)}" data-fallback-src="${PLACEHOLDER_ASSET}" alt="${match.label} tablecloth" loading="lazy" />
          <div class="match-card__body">
            <p class="match-card__name">${match.label}</p>
            <button class="btn btn--ghost match-card__select" type="button" data-cloth-match="${match.value}">Select</button>
          </div>
        </article>
      `).join("")}
    </div>
  `;

  attachImageFallbacks(container);
  container.querySelectorAll("[data-cloth-match]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tableclothColor = button.getAttribute("data-cloth-match");
      updateUI();
    });
  });
}

function renderStepContent() {
  const currentStepNumber = currentStepIndex + 1;
  refs.stepContent.innerHTML = "";

  if (currentStepNumber === 1) {
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

  if (currentStepNumber === 2) {
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

  if (currentStepNumber === 3) {
    renderVisualOptionCards({
      name: "tableclothTexture",
      options: tableclothTextureOptions,
      selectedValue: state.tableclothTexture,
      onSelect: (value) => {
        state.tableclothTexture = value;
        updateUI();
      },
    });
  }

  if (currentStepNumber === 4) {
    const defaultHex = clothPalette[state.tableclothColor] || "#FFFFFF";

    refs.stepContent.innerHTML = `
      <div class="cloth-color-grid">
        ${tableclothColorOptions.map((option) => `
          <button class="cloth-color-card ${state.tableclothColor === option.value ? "cloth-color-card--selected" : ""}" type="button" data-cloth-color="${option.value}">
            <img class="cloth-color-card__image" src="${getTableclothAssetPath(state.tableclothTexture, option.value)}" data-fallback-src="${PLACEHOLDER_ASSET}" alt="${option.label} tablecloth" loading="lazy" />
            <span class="cloth-color-card__label">${option.label}</span>
          </button>
        `).join("")}
      </div>
      <div class="similar-color-finder">
        <hr class="similar-color-finder__divider" />
        <h3 class="similar-color-finder__title">Can’t find your exact color?</h3>
        <div class="similar-color-finder__actions">
          <button class="btn btn--ghost" type="button" data-match-mode="hex">Pick a Color</button>
          <button class="btn btn--ghost" type="button" data-match-mode="upload">Upload Image</button>
        </div>

        <div class="similar-color-finder__panel" id="similarColorPanel" hidden>
          <div class="similar-color-finder__content" id="hexTool" hidden>
            <div class="similar-color-finder__inputs">
              <input id="hexColorInput" class="custom-color-note__input" type="text" value="${defaultHex}" placeholder="#RRGGBB" maxlength="7" />
              <input id="hexColorPicker" class="similar-color-finder__picker" type="color" value="${defaultHex}" />
            </div>
            <button class="btn" type="button" id="findHexMatches">Find Closest Matches</button>
          </div>

          <div class="similar-color-finder__content" id="uploadTool" hidden>
            <label class="custom-color-note__label" for="imageColorUpload">Upload an image</label>
            <input id="imageColorUpload" class="custom-color-note__input" type="file" accept="image/*" />
          </div>

          <p class="custom-color-note__text" id="matchStatusText"></p>
          <div id="matchResults"></div>

          <div class="custom-color-note similar-color-finder__teaser">
            <p class="similar-color-finder__coming-soon">✨ Coming Soon</p>
            <p class="custom-color-note__text">Upload your invitation or stationery<br />We’ll extract your event palette and suggest real linens and decor.</p>
            <button class="btn btn--ghost" type="button" disabled>Upload Invitation (Coming Soon)</button>
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll("[data-cloth-color]").forEach((button) => {
      button.addEventListener("click", () => {
        state.tableclothColor = button.getAttribute("data-cloth-color");
        updateUI();
      });
    });

    const matchModeButtons = refs.stepContent.querySelectorAll("[data-match-mode]");
    const similarColorPanel = el("similarColorPanel");
    const hexTool = el("hexTool");
    const uploadTool = el("uploadTool");
    const hexColorInput = el("hexColorInput");
    const hexColorPicker = el("hexColorPicker");
    const findHexMatchesButton = el("findHexMatches");
    const imageColorUpload = el("imageColorUpload");
    const matchResults = el("matchResults");
    const matchStatusText = el("matchStatusText");

    const setMatchMode = (mode) => {
      similarColorPanel.hidden = false;
      hexTool.hidden = mode !== "hex";
      uploadTool.hidden = mode !== "upload";
      matchStatusText.textContent = "";
      renderClothMatches(matchResults, []);
    };

    matchModeButtons.forEach((button) => {
      button.addEventListener("click", () => setMatchMode(button.getAttribute("data-match-mode")));
    });

    hexColorPicker.addEventListener("input", (event) => {
      hexColorInput.value = event.target.value.toUpperCase();
    });

    findHexMatchesButton.addEventListener("click", () => {
      const normalizedHex = normalizeHex(hexColorInput.value);
      if (!normalizedHex) {
        matchStatusText.textContent = "Please enter a valid hex color (example: #A36F5A).";
        renderClothMatches(matchResults, []);
        return;
      }

      hexColorInput.value = normalizedHex;
      hexColorPicker.value = normalizedHex;
      const matches = findClosestClothMatches(normalizedHex, 3);
      renderClothMatches(matchResults, matches);
      matchStatusText.textContent = "";
    });

    imageColorUpload.addEventListener("change", async (event) => {
      const [file] = event.target.files || [];
      if (!file) {
        return;
      }

      matchStatusText.textContent = "Analyzing image color…";
      renderClothMatches(matchResults, []);

      try {
        const extractedHex = await extractDominantHexFromFile(file);
        const matches = findClosestClothMatches(extractedHex, 3);
        matchStatusText.textContent = `Detected dominant color: ${extractedHex}`;
        renderClothMatches(matchResults, matches);
      } catch (error) {
        matchStatusText.textContent = error.message;
        renderClothMatches(matchResults, []);
      }
    });

    attachImageFallbacks(refs.stepContent);
  }

  if (currentStepNumber === 5) {
    refs.stepContent.innerHTML = `
      <div class="row">
        <label class="field" for="placeSettings">Select place settings</label>
        <select id="placeSettings" class="input select">
          <option value="">Choose a number</option>
          ${Array.from({ length: 11 }, (_, index) => {
            const count = index + 2;
            return `<option value="${count}" ${state.placeSettingsCount === count ? "selected" : ""}>${count}</option>`;
          }).join("")}
        </select>
      </div>
    `;
    el("placeSettings").addEventListener("change", (event) => {
      state.placeSettingsCount = event.target.value === "" ? null : Number(event.target.value);
      updateUI();
    });
  }

  if (currentStepNumber === 6) {
    refs.stepContent.innerHTML = `
      <div class="options">
        ${["Gold", "Silver", "Pearl", "Black"].map((option) => `
          <label class="opt">
            <input type="radio" name="charger" value="${option}" ${state.chargerType === option ? "checked" : ""} />
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    `;
    document.querySelectorAll('input[name="charger"]').forEach((radio) => {
      radio.addEventListener("change", (event) => {
        state.chargerType = event.target.value;
        updateUI();
      });
    });
  }

  if (currentStepNumber === 7) {
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
        state.napkinType = button.getAttribute("data-napkin");
        state.napkinColor = button.getAttribute("data-color");
        updateUI();
      });
    });
    setActiveButtons("[data-napkin]", "data-napkin", state.napkinType);
  }

  if (currentStepNumber === 8) {
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

  if (currentStepNumber === 9) {
    refs.stepContent.innerHTML = `
      <div class="options">
        ${["Low Florals", "Tall Florals", "Candles", "Minimal Greenery"].map((style) => `
          <label class="opt">
            <input type="radio" name="centerpiece" value="${style}" ${state.centerpieceType === style ? "checked" : ""} />
            <span>${style}</span>
          </label>
        `).join("")}
      </div>
    `;
    document.querySelectorAll('input[name="centerpiece"]').forEach((radio) => {
      radio.addEventListener("change", (event) => {
        state.centerpieceType = event.target.value;
        updateUI();
      });
    });
  }

  if (currentStepNumber === 10) {
    refs.stepContent.innerHTML = `
      <div class="review-card">
        <dl class="summary__grid kv">
          <div><dt>Table</dt><dd>${formatTableSelection(state.tableShape, state.tableSize)}</dd></div>
          <div><dt>Place Settings</dt><dd>${state.placeSettingsCount == null ? "—" : state.placeSettingsCount}</dd></div>
          <div><dt>Tablecloth</dt><dd>${state.tableclothTexture} - ${tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory"}</dd></div>
          <div><dt>Charger</dt><dd>${state.chargerType || "—"}</dd></div>
          <div><dt>Napkin</dt><dd>${state.napkinType || "—"}</dd></div>
          <div><dt>Napkin Style</dt><dd>${state.napkinStyle || "—"}</dd></div>
          <div><dt>Centerpiece</dt><dd>${state.centerpieceType || "—"}</dd></div>
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
    `Place settings: ${state.placeSettingsCount == null ? "—" : state.placeSettingsCount}`,
    `Tablecloth: ${state.tableclothTexture} - ${tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory"}`,
    `Charger: ${state.chargerType || "—"}`,
    `Napkin: ${state.napkinType || "—"}`,
    `Napkin style: ${state.napkinStyle || "—"}`,
    `Centerpiece: ${state.centerpieceType || "—"}`,
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
  const currentStepNumber = currentStepIndex + 1;

  refs.wizardProgress.textContent = `Step ${currentStepNumber} of ${TOTAL_STEPS}`;
  refs.progressFill.style.width = `${(currentStepNumber / TOTAL_STEPS) * 100}%`;

  const meta = getStepMeta();
  refs.stepTitle.textContent = meta.title;
  refs.stepHint.textContent = meta.hint;
  refs.stepValue.textContent = meta.value;

  refs.btnBack.disabled = currentStepNumber === 1;
  refs.btnNext.disabled = currentStepNumber === TOTAL_STEPS;
  refs.btnNext.textContent = currentStepNumber === TOTAL_STEPS ? "Complete" : "Next";

  renderStepContent();
  renderPreview();
}

function goToStep(index) {
  const boundedIndex = Math.max(0, Math.min(index, TOTAL_STEPS - 1));

  if (currentStepIndex !== boundedIndex) {
    currentStepIndex = boundedIndex;
    refs.exportNote.textContent = "";
  }

  updateUI();
}

function nextStep() {
  goToStep(currentStepIndex + 1);
}

function prevStep() {
  goToStep(currentStepIndex - 1);
}

function resetWizard() {
  Object.assign(state, initialState);
  currentStepIndex = 0;
  refs.exportNote.textContent = "";
  goToStep(0);
}

function init() {
  refs.year.textContent = String(new Date().getFullYear());

  refs.btnBack.addEventListener("click", prevStep);
  refs.btnNext.addEventListener("click", nextStep);
  refs.btnReset.addEventListener("click", resetWizard);

  refs.tableclothLayer.addEventListener("error", () => {
    refs.tableclothLayer.src = TABLECLOTH_FALLBACK_ASSET;
  });

  goToStep(currentStepIndex);
}

document.addEventListener("DOMContentLoaded", init);
