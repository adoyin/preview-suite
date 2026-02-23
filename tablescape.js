const PLACEHOLDER_ASSET = "./assets/placeholders/ref-card.svg";
const TABLECLOTH_FALLBACK_ASSET = "./assets/tablescape/tablecloth-texture.svg";

const tableShapeOptions = [
  { value: "round", label: "Round", thumbnail: "./assets/descriptors/table-shapes/round.png" },
  { value: "rectangle", label: "Rectangle", thumbnail: "./assets/descriptors/table-shapes/rectangle.png" },
  { value: "square", label: "Square", thumbnail: "./assets/descriptors/table-shapes/square.png" },
];

const tableSizeOptions = {
  round: [
    {
      value: 60,
      label: '60" Round',
      descriptor: "Intimate",
      helperText: "Often styled for gatherings of 6–8 guests",
      thumbnail: "./assets/descriptors/table-shapes/round.png",
    },
    {
      value: 72,
      label: '72" Round',
      descriptor: "Classic",
      helperText: "A versatile choice for gatherings of 8–10 guests",
      thumbnail: "./assets/descriptors/table-shapes/round.png",
    },
    {
      value: 90,
      label: '90" Round',
      descriptor: "Grand",
      helperText: "Ideal for larger group seating and grand layouts",
      thumbnail: "./assets/descriptors/table-shapes/round.png",
    },
  ],
  rectangle: [
    {
      value: "6ft",
      label: "6 ft Rectangle",
      descriptor: "Compact",
      helperText: "Often used for smaller table groupings or supporting tables",
      thumbnail: "./assets/descriptors/table-shapes/rectangle.png",
    },
    {
      value: "8ft",
      label: "8 ft Rectangle",
      descriptor: "Classic",
      helperText: "The most common banquet table length for events",
      thumbnail: "./assets/descriptors/table-shapes/rectangle.png",
    },
    {
      value: "9ft",
      label: "9 ft Rectangle",
      descriptor: "Extended",
      helperText: "Ideal for long layouts, head tables, and statement seating",
      thumbnail: "./assets/descriptors/table-shapes/rectangle.png",
    },
  ],
  square: [
    {
      value: 36,
      label: '36" Square',
      descriptor: "Cozy",
      helperText: "Often styled for intimate layouts and smaller group seating",
      thumbnail: "./assets/descriptors/table-shapes/square.png",
    },
    {
      value: 48,
      label: '48" Square',
      descriptor: "Social",
      helperText: "A flexible choice for most small celebrations and gatherings",
      thumbnail: "./assets/descriptors/table-shapes/square.png",
    },
    {
      value: 60,
      label: '60" Square',
      descriptor: "Statement",
      helperText: "Ideal for fuller table styling and larger square layouts",
      thumbnail: "./assets/descriptors/table-shapes/square.png",
    },
  ],
};

const tableclothTextureOptions = [
  {
    value: "polyester",
    label: "Polyester",
    thumbnail: "assets/textures/polyester-pearl.png",
    helperText: "Crisp, structured event styling",
  },
  {
    value: "satin",
    label: "Satin",
    thumbnail: "assets/textures/satin-champagne.png",
    helperText: "Soft sheen with a formal finish",
  },
  {
    value: "velvet",
    label: "Velvet",
    thumbnail: "assets/textures/velvet-cream.png",
    helperText: "Rich texture with a dramatic feel",
  },
  {
    value: "linen",
    label: "Linen",
    thumbnail: "assets/textures/linen-ivory.png",
    helperText: "Natural weave, relaxed elegance",
  },
  {
    value: "crinkle-taffeta",
    label: "Crinkle Taffeta",
    thumbnail: "assets/textures/crinkle-taffeta-champagne.png",
    helperText: "Textured shimmer with structure",
  },
  {
    value: "sequin",
    label: "Sequin",
    thumbnail: "assets/textures/sequin-soft-champagne.png",
    helperText: "High-glam sparkle and reflection",
  },
];

const tableclothColorGroups = {
  Neutrals: [
    { value: "ivory", label: "Ivory", hex: "#F3EBDD" },
    { value: "white", label: "White", hex: "#FFFFFF" },
    { value: "champagne", label: "Champagne", hex: "#E8D8C6" },
    { value: "terracotta", label: "Terracotta", hex: "#B05A3C" },
  ],
  Pinks: [
    { value: "blush", label: "Blush", hex: "#E9C6C9" },
    { value: "dustyRose", label: "Dusty Rose", hex: "#CFA5AA", assetValue: "dusty-rose" },
    { value: "burgundy", label: "Burgundy", hex: "#5A1E2D" },
  ],
  Greens: [
    { value: "sage", label: "Sage", hex: "#AEB8A6" },
    { value: "emerald", label: "Emerald", hex: "#1F6B4E" },
  ],
  Blues: [
    { value: "frenchBlue", label: "French Blue", hex: "#4C78A8", assetValue: "french-blue" },
    { value: "navy", label: "Navy", hex: "#0F2340" },
  ],
  Darks: [
    { value: "black", label: "Black", hex: "#111111" },
  ],
};

const tableclothColorGroupNames = Object.keys(tableclothColorGroups);
const tableclothColorOptions = tableclothColorGroupNames.flatMap((group) => tableclothColorGroups[group]);

const clothPalette = {
  ivory: "#F3EBDD",
  white: "#FFFFFF",
  champagne: "#E8D8C6",
  blush: "#E9C6C9",
  dustyRose: "#CFA5AA",
  sage: "#AEB8A6",
  emerald: "#1F6B4E",
  navy: "#0F2340",
  frenchBlue: "#4C78A8",
  burgundy: "#5A1E2D",
  terracotta: "#B05A3C",
  black: "#111111",
};

const initialState = {
  tableShape: "round",
  tableSize: 60,
  tableclothTexture: "polyester",
  tableclothColor: "ivory",
  tableclothColorGroup: "Neutrals",
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

const stepSections = [
  { label: "Table", steps: [0, 1] },
  { label: "Tablecloth", steps: [2, 3] },
  { label: "Place Settings", steps: [4, 5, 6, 7] },
  { label: "Centerpiece", steps: [8] },
  { label: "Review", steps: [9] },
];

const TOTAL_STEPS = stepSequence.length;

const state = { ...initialState };
let currentStepIndex = 0;
let maxStepReached = 0;
let isJumpModalOpen = false;

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
  stepCard: el("wizardStepCard"),
  wizardProgress: el("wizardProgress"),
  progressFill: el("progressFill"),
  btnJumpTo: el("btnJumpTo"),
  jumpModal: el("jumpModal"),
  jumpBackdrop: el("jumpBackdrop"),
  jumpClose: el("jumpClose"),
  jumpStepList: el("jumpStepList"),
  btnBack: el("btnBack"),
  btnNext: el("btnNext"),
  btnReset: el("btnReset"),
  exportNote: el("exportNote"),
  previewStepText: el("previewStepText") || el("previewStatusLine"),
  previewNextText: el("previewNextText") || el("previewNextHint"),
  previewStage: el("previewStage"),
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

const sizeScaleMap = {
  round: { 60: 1, 72: 1.1, 90: 1.2 },
  rectangle: { "6ft": 1, "8ft": 1.1, "9ft": 1.2 },
  square: { 36: 1, 48: 1.1, 60: 1.2 },
};

let currentPreviewScale = 1;

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
  const selectedColor = tableclothColorOptions.find((option) => option.value === color);
  const colorSlug = selectedColor?.assetValue || color;
  return `./assets/tablecloths/${texture}/${colorSlug}.jpg`;
}

function attachImageFallbacks(root = document) {
  root.querySelectorAll("img[data-fallback-src], img[data-fallback-text]").forEach((image) => {
    image.onerror = () => {
      const fallbackSrc = image.getAttribute("data-fallback-src");
      const fallbackLabel = image.parentElement?.querySelector("[data-fallback-text]");

      if (fallbackSrc && image.getAttribute("src") !== fallbackSrc) {
        image.src = fallbackSrc;
        return;
      }

      image.hidden = true;
      if (fallbackLabel) fallbackLabel.hidden = false;
      image.onerror = null;
    };

    image.onload = () => {
      const fallbackLabel = image.parentElement?.querySelector("[data-fallback-text]");
      image.hidden = false;
      if (fallbackLabel) fallbackLabel.hidden = true;
    };
  });
}

function formatTableShape(shape) {
  const selected = tableShapeOptions.find((option) => option.value === shape);
  return selected ? selected.label : shape;
}

function formatTableSelection(shape, size) {
  const formattedSize = typeof size === "number" ? `${size}\"` : size;
  return `${formatTableShape(shape)} — ${formattedSize}`;
}

function applyTableShape(shape, size, options = {}) {
  refs.table.classList.remove("table--round", "table--rectangle", "table--oval", "table--square");

  if (shape === "round") {
    refs.table.style.width = "320px";
    refs.table.style.height = "320px";
    refs.table.style.borderRadius = "999px";
    refs.table.classList.add("table--round");
  } else if (shape === "rectangle") {
    refs.table.style.width = "370px";
    refs.table.style.height = "240px";
    refs.table.style.borderRadius = "26px";
    refs.table.classList.add("table--rectangle");
  } else if (shape === "square") {
    if (Number(size) === 60) {
      refs.table.style.width = "350px";
      refs.table.style.height = "350px";
    } else if (Number(size) === 48) {
      refs.table.style.width = "320px";
      refs.table.style.height = "320px";
    } else {
      refs.table.style.width = "290px";
      refs.table.style.height = "290px";
    }
    refs.table.style.borderRadius = "26px";
    refs.table.classList.add("table--square");
  }

  applyPreviewScale(shape, size, options);
}

function getPreviewScale(shape, size) {
  return sizeScaleMap[shape]?.[size] || sizeScaleMap[shape]?.[Number(size)] || 1;
}

function applyPreviewScale(shape, size, { animate = false } = {}) {
  if (!refs.previewStage) {
    return;
  }

  const nextScale = getPreviewScale(shape, size);
  const previousScale = currentPreviewScale;
  currentPreviewScale = nextScale;

  refs.previewStage.style.setProperty("--preview-stage-scale", String(nextScale));
  refs.previewStage.style.transform = `translateZ(0) scale(${nextScale})`;

  if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const scaleDelta = nextScale - previousScale;
  const overshoot = Math.min(0.018, Math.max(0.006, Math.abs(scaleDelta) * 0.35));
  const peakScale = nextScale + (scaleDelta >= 0 ? overshoot : -overshoot);

  refs.previewStage.classList.remove("is-size-transition");
  refs.previewStage.style.setProperty("--preview-stage-from", String(previousScale));
  refs.previewStage.style.setProperty("--preview-stage-peak", String(peakScale));
  refs.previewStage.style.setProperty("--preview-stage-to", String(nextScale));

  void refs.previewStage.offsetWidth;
  refs.previewStage.classList.add("is-size-transition");
}

function handleTableSizeSelection(shape, value) {
  const nextSize = shape === "round" || shape === "square" ? Number(value) : value;
  if (state.tableSize === nextSize) {
    return;
  }

  state.tableSize = nextSize;

  refs.stepContent.querySelectorAll(".option-card--size").forEach((card) => {
    const input = card.querySelector('input[name="tableSize"]');
    card.classList.toggle("option-card--selected", input?.value === String(nextSize));
  });

  const meta = getStepMeta();
  refs.stepValue.textContent = meta.value;

  applyTableShape(state.tableShape, state.tableSize, { animate: true });
  renderSummary();
  updatePreviewStatus();
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

function renderJumpStepList() {
  refs.jumpStepList.innerHTML = stepSections.map((section) => {
    const rows = section.steps.map((stepIndex) => {
      const isCurrent = stepIndex === currentStepIndex;
      const isCompleted = stepIndex < currentStepIndex;
      const isUnlocked = stepIndex <= maxStepReached;
      const label = stepSequence[stepIndex];

      return `
        <button
          class="jump-step ${isCurrent ? "jump-step--current" : ""} ${isCompleted ? "jump-step--completed" : ""}"
          type="button"
          data-jump-step="${stepIndex}"
          ${isUnlocked ? "" : "disabled"}
          aria-current="${isCurrent ? "step" : "false"}"
        >
          <span class="jump-step__label">${label}</span>
          <span class="jump-step__meta">${isCompleted ? "✓ Completed" : (isCurrent ? "Current" : (isUnlocked ? "Available" : "Locked"))}</span>
        </button>
      `;
    }).join("");

    return `
      <div class="jump-group">
        <h4 class="jump-group__title">${section.label}</h4>
        <div class="jump-group__steps">${rows}</div>
      </div>
    `;
  }).join("");

  refs.jumpStepList.querySelectorAll("[data-jump-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const stepIndex = Number(button.getAttribute("data-jump-step"));
      if (Number.isInteger(stepIndex) && stepIndex <= maxStepReached) {
        closeJumpModal();
        goToStep(stepIndex, { smoothScroll: true });
      }
    });
  });
}

function setJumpModalOpen(isOpen) {
  isJumpModalOpen = isOpen;
  refs.jumpModal.hidden = !isOpen;
  refs.jumpModal.classList.toggle("is-hidden", !isOpen);
  refs.jumpModal.setAttribute("aria-hidden", String(!isOpen));
}

function openJumpModal() {
  renderJumpStepList();
  setJumpModalOpen(true);
}

function closeJumpModal() {
  setJumpModalOpen(false);
}

function renderPreview() {
  refs.table.classList.add("is-refreshing");
  requestAnimationFrame(() => refs.table.classList.remove("is-refreshing"));

  refs.tableclothLayer.classList.add("table__cloth--changing");
  refs.tableclothLayer.dataset.texture = state.tableclothTexture;
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
  const shouldShowSettings = currentStepNumber >= 5;
  requestAnimationFrame(() => renderPlaceSettings(shouldShowSettings ? state.placeSettingsCount : null));

  renderSummary();
  updatePreviewStatus();
}

function renderVisualOptionCards({ name, options, selectedValue, onSelect }) {
  refs.stepContent.innerHTML = `
    <div class="option-cards">
      ${options.map((option) => `
        <label class="option-card ${selectedValue === option.value ? "option-card--selected" : ""}">
          <input type="radio" name="${name}" value="${option.value}" ${selectedValue === option.value ? "checked" : ""} />
          <div class="option-card__media">
            <img class="option-card__image" src="${option.thumbnail || PLACEHOLDER_ASSET}" data-fallback-src="${PLACEHOLDER_ASSET}" data-fallback-text="true" alt="${option.label}" loading="lazy" />
            <span class="option-card__fallback" data-fallback-text hidden>Image coming soon</span>
          </div>
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

function renderRoundSizeCards() {
  renderTableSizeCards("round", Number(state.tableSize));
}

function renderRectangleSizeCards() {
  renderTableSizeCards("rectangle", state.tableSize);
}

function renderSquareSizeCards() {
  renderTableSizeCards("square", Number(state.tableSize));
}

function renderTableSizeCards(shape, selectedValue) {
  const shapeOptions = tableSizeOptions[shape] || [];

  refs.stepContent.innerHTML = `
    <div id="wizard-size-carousel" class="size-carousel" data-tooltip-root>
      <button class="size-carousel__arrow size-carousel__arrow--left" type="button" data-size-scroll="left" aria-label="Scroll table size options left">&#8249;</button>
      <div class="size-carousel__viewport">
        <div class="option-cards option-cards--table-size">
          ${shapeOptions.map((option, index) => {
            const tooltipId = `tableSizeTip${index}`;
            return `
              <label class="option-card option-card--size ${selectedValue === option.value ? "option-card--selected" : ""}">
                <input type="radio" name="tableSize" value="${option.value}" ${selectedValue === option.value ? "checked" : ""} />
                <div class="option-card__media option-card__media--size">
                  <img class="option-card__image" src="${option.thumbnail}" data-fallback-src="${PLACEHOLDER_ASSET}" data-fallback-text="true" alt="${option.label}" loading="lazy" />
                  <span class="option-card__fallback" data-fallback-text hidden>Image coming soon</span>
                  <button
                    class="option-card__info"
                    type="button"
                    aria-label="More details about ${option.label}"
                    aria-expanded="false"
                    aria-describedby="${tooltipId}"
                    data-tooltip-toggle="${tooltipId}"
                  >ⓘ</button>
                  <span class="option-card__tooltip" role="tooltip" id="${tooltipId}">${option.helperText}</span>
                </div>
                <span class="option-card__meta">${option.descriptor}</span>
                <span class="option-card__title">${option.label}</span>
              </label>
            `;
          }).join("")}
        </div>
      </div>
      <button class="size-carousel__arrow size-carousel__arrow--right" type="button" data-size-scroll="right" aria-label="Scroll table size options right">&#8250;</button>
    </div>
  `;

  refs.stepContent.querySelectorAll('input[name="tableSize"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      closeAllTooltips();
      handleTableSizeSelection(shape, event.target.value);
    });
  });

  refs.stepContent.querySelectorAll("[data-tooltip-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const tooltipId = button.getAttribute("data-tooltip-toggle");
      const tooltip = tooltipId ? refs.stepContent.querySelector(`#${tooltipId}`) : null;
      if (!tooltip) return;

      const shouldOpen = !tooltip.classList.contains("is-visible");
      closeAllTooltips();
      if (shouldOpen) {
        tooltip.classList.add("is-visible");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  setupSizeCarousel();

  attachImageFallbacks(refs.stepContent);
}

function renderTableTextureCards() {
  refs.stepContent.innerHTML = `
    <div id="wizard-texture-carousel" class="texture-carousel" data-tooltip-root>
      <button class="texture-carousel__arrow texture-carousel__arrow--left" type="button" data-texture-scroll="left" aria-label="Scroll tablecloth textures left">&#8249;</button>
      <div class="texture-carousel__viewport">
        <div class="option-cards option-cards--table-texture">
          ${tableclothTextureOptions.map((option, index) => {
            const tooltipId = `tableTextureTip${index}`;
            return `
              <label class="option-card option-card--texture ${state.tableclothTexture === option.value ? "option-card--selected" : ""}">
                <input type="radio" name="tableclothTexture" value="${option.value}" ${state.tableclothTexture === option.value ? "checked" : ""} />
                <div class="option-card__media option-card__media--texture">
                  <img class="option-card__image option-card__image--texture" src="${option.thumbnail}" alt="${option.label} texture swatch" loading="lazy" />
                  <button
                    class="option-card__info option-card__info--texture"
                    type="button"
                    aria-label="More details about ${option.label}"
                    aria-expanded="false"
                    aria-describedby="${tooltipId}"
                    data-tooltip-toggle="${tooltipId}"
                  >ⓘ</button>
                  <span class="option-card__tooltip option-card__tooltip--texture" role="tooltip" id="${tooltipId}">${option.helperText}</span>
                </div>
                <span class="option-card__title option-card__title--texture">${option.label}</span>
              </label>
            `;
          }).join("")}
        </div>
      </div>
      <button class="texture-carousel__arrow texture-carousel__arrow--right" type="button" data-texture-scroll="right" aria-label="Scroll tablecloth textures right">&#8250;</button>
    </div>
  `;

  refs.stepContent.querySelectorAll('input[name="tableclothTexture"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      closeAllTooltips();
      state.tableclothTexture = event.target.value;
      updateUI();
    });
  });

  refs.stepContent.querySelectorAll("#wizard-texture-carousel [data-tooltip-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const tooltipId = button.getAttribute("data-tooltip-toggle");
      const tooltip = tooltipId ? refs.stepContent.querySelector(`#${tooltipId}`) : null;
      if (!tooltip) return;

      const shouldOpen = !tooltip.classList.contains("is-visible");
      closeAllTooltips();
      if (shouldOpen) {
        tooltip.classList.add("is-visible");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  refs.stepContent.querySelectorAll(".option-card__image--texture").forEach((image) => {
    console.log("Texture card src", image.src);
    image.addEventListener("load", () => console.log("LOADED", image.src));
    image.addEventListener("error", () => {
      console.warn("FAILED", image.src);
      image.style.display = "none";
      image.closest(".option-card__media--texture")?.classList.add("texture-fallback");
    });
  });

  setupTextureCarousel();
  attachImageFallbacks(refs.stepContent);
}

function renderTableColorCards() {
  const selectedGroup = tableclothColorGroups[state.tableclothColorGroup]
    ? state.tableclothColorGroup
    : "Neutrals";
  const activeColorOptions = tableclothColorGroups[selectedGroup] || [];

  refs.stepContent.innerHTML = `
    <div class="wizard-color-toolbar">
      <label class="wizard-color-group" for="tableclothColorGroup">
        <span class="wizard-color-group__label">Group:</span>
        <select id="tableclothColorGroup" class="wizard-color-group__select" aria-label="Filter tablecloth colors by group">
          ${tableclothColorGroupNames.map((group) => `<option value="${group}" ${group === selectedGroup ? "selected" : ""}>${group}</option>`).join("")}
        </select>
      </label>
    </div>
    <div id="wizard-color-carousel" class="wizard-color-carousel">
      <div class="wizard-color-carousel__viewport">
        <div class="option-cards option-cards--table-color">
          ${activeColorOptions.map((option) => `
            <label class="option-card option-card--color ${state.tableclothColor === option.value ? "option-card--selected" : ""}">
              <input type="radio" name="tableclothColor" value="${option.value}" ${state.tableclothColor === option.value ? "checked" : ""} />
              <div class="option-card__media option-card__media--color">
                <div class="option-card__swatch" style="background-color: ${option.hex};" aria-hidden="true"></div>
              </div>
              <span class="option-card__title option-card__title--color">${option.label}</span>
            </label>
          `).join("")}
          
        </div>
      </div>
    </div>
  `;

  const groupSelect = refs.stepContent.querySelector("#tableclothColorGroup");
  groupSelect?.addEventListener("change", (event) => {
    state.tableclothColorGroup = event.target.value;
    renderTableColorCards();
  });

  refs.stepContent.querySelectorAll('input[name="tableclothColor"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      state.tableclothColor = event.target.value;
      updateUI();
    });
  });
}

function getCarouselScrollAmount(carousel, viewportSelector, trackSelector) {
  const viewport = carousel.querySelector(viewportSelector);
  const track = carousel.querySelector(trackSelector);
  if (!viewport || !track) {
    return 0;
  }

  const cards = [...track.querySelectorAll(".option-card")];
  if (!cards.length) {
    return 0;
  }

  const viewportRect = viewport.getBoundingClientRect();
  const firstVisibleCard = cards.find((card) => {
    const cardRect = card.getBoundingClientRect();
    return cardRect.right > viewportRect.left + 1;
  }) || cards[0];

  const cardWidth = firstVisibleCard.getBoundingClientRect().width;
  const computedStyle = getComputedStyle(track);
  const gap = parseFloat(computedStyle.columnGap || computedStyle.gap || "0");

  return cardWidth + gap;
}

function getSizeCarouselScrollAmount(carousel) {
  return getCarouselScrollAmount(carousel, ".size-carousel__viewport", ".option-cards--table-size");
}

function setupSizeCarousel() {
  const carousel = refs.stepContent.querySelector("#wizard-size-carousel");
  if (!carousel || carousel.dataset.carouselReady === "true") {
    return;
  }

  const viewport = carousel.querySelector(".size-carousel__viewport");
  const leftArrow = carousel.querySelector('[data-size-scroll="left"]');
  const rightArrow = carousel.querySelector('[data-size-scroll="right"]');
  if (!viewport || !leftArrow || !rightArrow) {
    return;
  }

  const scrollByOneCard = (direction) => {
    const amount = getSizeCarouselScrollAmount(carousel);
    if (!amount) {
      return;
    }
    viewport.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  leftArrow.addEventListener("click", () => scrollByOneCard(-1));
  rightArrow.addEventListener("click", () => scrollByOneCard(1));
  carousel.dataset.carouselReady = "true";
}

function getTextureCarouselScrollAmount(carousel) {
  return getCarouselScrollAmount(carousel, ".texture-carousel__viewport", ".option-cards--table-texture");
}

function setupTextureCarousel() {
  const carousel = refs.stepContent.querySelector("#wizard-texture-carousel");
  if (!carousel || carousel.dataset.carouselReady === "true") {
    return;
  }

  const viewport = carousel.querySelector(".texture-carousel__viewport");
  const leftArrow = carousel.querySelector('[data-texture-scroll="left"]');
  const rightArrow = carousel.querySelector('[data-texture-scroll="right"]');
  if (!viewport || !leftArrow || !rightArrow) {
    return;
  }

  const scrollByOneCard = (direction) => {
    const amount = getTextureCarouselScrollAmount(carousel);
    if (!amount) {
      return;
    }
    viewport.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  leftArrow.addEventListener("click", () => scrollByOneCard(-1));
  rightArrow.addEventListener("click", () => scrollByOneCard(1));
  carousel.dataset.carouselReady = "true";
}

function closeAllTooltips() {
  refs.stepContent.querySelectorAll(".option-card__tooltip.is-visible").forEach((tooltip) => {
    tooltip.classList.remove("is-visible");
  });
  refs.stepContent.querySelectorAll("[data-tooltip-toggle]").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function getStepMeta() {
  const currentStepNumber = currentStepIndex + 1;

  switch (currentStepNumber) {
    case 1: return { title: "Table shape", hint: "Choose the base table shape.", value: formatTableShape(state.tableShape) };
    case 2: return { title: "Table size", hint: "Choose a size for the selected shape.", value: typeof state.tableSize === "number" ? `${state.tableSize}"` : state.tableSize };
    case 3: return { title: "Choose Tablecloth Texture", hint: "Choose a fabric.", value: tableclothTextureOptions.find((option) => option.value === state.tableclothTexture)?.label || state.tableclothTexture };
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
    tableShapeOptions.forEach((option) => {
      console.log(`[Tablescape] Step 1 table shape image src for ${option.label}: ${option.thumbnail}`);
    });

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

    if (state.tableShape === "round") {
      renderRoundSizeCards();
    } else if (state.tableShape === "rectangle") {
      renderRectangleSizeCards();
    } else if (state.tableShape === "square") {
      renderSquareSizeCards();
    } else {
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
  }

  if (currentStepNumber === 3) {
    renderTableTextureCards();
  }

  if (currentStepNumber === 4) {
    renderTableColorCards();
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

  if (isJumpModalOpen) {
    renderJumpStepList();
  }

  renderStepContent();
  renderPreview();
}

function goToStep(index, options = {}) {
  const { allowFuture = false, smoothScroll = false } = options;

  if (isJumpModalOpen) {
    closeJumpModal();
  }
  const boundedIndex = Math.max(0, Math.min(index, TOTAL_STEPS - 1));
  const nextIndex = allowFuture ? boundedIndex : Math.min(boundedIndex, maxStepReached);

  if (nextIndex > maxStepReached) {
    maxStepReached = nextIndex;
  }

  if (currentStepIndex !== nextIndex) {
    currentStepIndex = nextIndex;
    refs.exportNote.textContent = "";
  }

  if (smoothScroll && refs.stepCard) {
    refs.stepCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  updateUI();
}

function nextStep() {
  goToStep(currentStepIndex + 1, { allowFuture: true });
}

function prevStep() {
  goToStep(currentStepIndex - 1);
}

function resetWizard() {
  Object.assign(state, initialState);
  currentStepIndex = 0;
  maxStepReached = 0;
  refs.exportNote.textContent = "";
  goToStep(0, { allowFuture: true });
}

function init() {
  refs.year.textContent = String(new Date().getFullYear());

  refs.btnBack.addEventListener("click", prevStep);
  refs.btnNext.addEventListener("click", nextStep);
  refs.btnReset.addEventListener("click", resetWizard);
  refs.btnJumpTo.addEventListener("click", openJumpModal);
  refs.jumpClose.addEventListener("click", closeJumpModal);
  refs.jumpBackdrop.addEventListener("click", closeJumpModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (isJumpModalOpen) {
        closeJumpModal();
      }
      closeAllTooltips();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (!target.closest("[data-tooltip-root]")) {
      closeAllTooltips();
    }
  });

  refs.tableclothLayer.addEventListener("error", () => {
    refs.tableclothLayer.src = TABLECLOTH_FALLBACK_ASSET;
  });

  setJumpModalOpen(false);
  goToStep(currentStepIndex, { allowFuture: true });
}

document.addEventListener("DOMContentLoaded", init);
