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
      value: 84,
      label: '84" Round',
      descriptor: "Grand",
      helperText: "Ideal for larger group seating with refined spacing",
      thumbnail: "./assets/descriptors/table-shapes/round.png",
    },
  ],
  rectangle: [
    {
      value: "6ft",
      label: "6ft Banquet",
      descriptor: "Compact",
      helperText: "Great for smaller layouts and supporting tables",
      thumbnail: "./assets/descriptors/table-shapes/rectangle.png",
    },
    {
      value: "8ft",
      label: "8ft Banquet",
      descriptor: "Classic",
      helperText: "The most common banquet table length for events",
      thumbnail: "./assets/descriptors/table-shapes/rectangle.png",
    },
    {
      value: "king",
      label: "King Table",
      descriptor: "Statement",
      helperText: "Ideal for head tables and dramatic linear styling",
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

const napkinTextureOptions = [
  {
    id: "polyester",
    value: "polyester",
    name: "Polyester",
    label: "Polyester",
    thumbnail: "assets/textures/polyester-pearl.png",
    helperText: "Crisp, structured event styling",
  },
  {
    id: "satin",
    value: "satin",
    name: "Satin",
    label: "Satin",
    thumbnail: "assets/textures/satin-champagne.png",
    helperText: "Soft sheen with a formal finish",
  },
  {
    id: "velvet",
    value: "velvet",
    name: "Velvet",
    label: "Velvet",
    thumbnail: "assets/textures/velvet-cream.png",
    helperText: "Rich texture with a dramatic feel",
  },
  {
    id: "linen",
    value: "linen",
    name: "Linen",
    label: "Linen",
    thumbnail: "assets/textures/linen-ivory.png",
    helperText: "Natural weave, relaxed elegance",
  },
];

const chargerOptions = [
  { value: "gold", label: "Gold Charger", image: "./assets/chargers/charger-gold.png" },
  { value: "silver", label: "Silver Charger", image: "./assets/chargers/charger-silver.png" },
  { value: "matte-black", label: "Matte Black Charger", image: "./assets/chargers/charger-matte-black.png" },
  { value: "clear-goldrim", label: "Clear Gold Rim Charger", image: "./assets/chargers/charger-clear-goldrim.png" },
  { value: "goldbeaded", label: "Gold Beaded Charger", image: "./assets/chargers/charger-goldbeaded.png" },
];
// Note: some source PNGs may include a baked-in checkerboard pattern and should be re-exported with true transparency.

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

const napkinColorGroups = {
  Neutrals: [
    { id: "ivory", value: "Ivory", name: "Ivory", label: "Ivory", group: "Neutrals", hex: "#F3EBDD" },
    { id: "white", value: "White", name: "White", label: "White", group: "Neutrals", hex: "#FFFFFF" },
    { id: "champagne", value: "Champagne", name: "Champagne", label: "Champagne", group: "Neutrals", hex: "#E8D8C6" },
    { id: "sand", value: "Sand", name: "Sand", label: "Sand", group: "Neutrals", hex: "#E7D8C3" },
    { id: "taupe", value: "Taupe", name: "Taupe", label: "Taupe", group: "Neutrals", hex: "#B7A79A" },
    { id: "beige", value: "Beige", name: "Beige", label: "Beige", group: "Neutrals", hex: "#D8C4A8" },
  ],
  Pinks: [
    { id: "blush", value: "Blush", name: "Blush", label: "Blush", group: "Pinks", hex: "#E9C6C9" },
    { id: "dusty-rose", value: "Dusty Rose", name: "Dusty Rose", label: "Dusty Rose", group: "Pinks", hex: "#D9B2B2" },
    { id: "mauve", value: "Mauve", name: "Mauve", label: "Mauve", group: "Pinks", hex: "#A67B86" },
    { id: "rosewood", value: "Rosewood", name: "Rosewood", label: "Rosewood", group: "Pinks", hex: "#7F4A55" },
  ],
  Greens: [
    { id: "sage", value: "Sage", name: "Sage", label: "Sage", group: "Greens", hex: "#B5C3AE" },
    { id: "olive", value: "Olive", name: "Olive", label: "Olive", group: "Greens", hex: "#6F7A45" },
    { id: "emerald", value: "Emerald", name: "Emerald", label: "Emerald", group: "Greens", hex: "#1F6B4E" },
    { id: "eucalyptus", value: "Eucalyptus", name: "Eucalyptus", label: "Eucalyptus", group: "Greens", hex: "#8FAE9A" },
  ],
  Blues: [
    { id: "dusty-blue", value: "Dusty Blue", name: "Dusty Blue", label: "Dusty Blue", group: "Blues", hex: "#6F88A6" },
    { id: "slate-blue", value: "Slate Blue", name: "Slate Blue", label: "Slate Blue", group: "Blues", hex: "#566A83" },
    { id: "french-blue", value: "French Blue", name: "French Blue", label: "French Blue", group: "Blues", hex: "#4C78A8" },
    { id: "navy", value: "Navy", name: "Navy", label: "Navy", group: "Blues", hex: "#3A4D68" },
  ],
  Darks: [
    { id: "black", value: "Black", name: "Black", label: "Black", group: "Darks", hex: "#111111" },
    { id: "charcoal", value: "Charcoal", name: "Charcoal", label: "Charcoal", group: "Darks", hex: "#454545" },
    { id: "chocolate", value: "Chocolate", name: "Chocolate", label: "Chocolate", group: "Darks", hex: "#4D3125" },
    { id: "burgundy", value: "Burgundy", name: "Burgundy", label: "Burgundy", group: "Darks", hex: "#5A1E2D" },
  ],
};

const napkinColorGroupNames = Object.keys(napkinColorGroups);
const napkinColorOptions = napkinColorGroupNames.flatMap((group) => napkinColorGroups[group]);

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
  includeCharger: true,
  selectedCharger: null,
  lastSelectedCharger: null,
  includeNapkin: true,
  napkinType: "Ivory",
  napkinTexture: "polyester",
  lastSelectedNapkin: null,
  napkinColorGroup: "Neutrals",
  flatwareType: null,
  hasCenterpiece: null,
  centerpieceDecision: null,
  centerpieceStyle: null,
  napkinStyle: null,
  napkinColor: "#F3EBDD",
  tableStyling: {
    menuCard: { enabled: false, style: null, placement: null },
    placeCard: { enabled: false, style: null, placement: null },
    tableNumber: { enabled: false, style: null },
    candles: { enabled: false, style: null },
  },
};

const stepSequence = [
  "Table shape",
  "Table size",
  "Tablecloth texture",
  "Tablecloth color",
  "Number of place settings",
  "Charger plate",
  "Napkin color",
  "Napkin texture",
  "Centerpiece",
  "Centerpiece style",
  "Table styling",
  "Final review",
  "Export materials",
];

const STEP_INDEX = {
  NAPKIN_COLOR: 6,
  NAPKIN_TEXTURE: 7,
  CENTERPIECE_DECISION: 8,
  CENTERPIECE_STYLE: 9,
  TABLE_STYLING: 10,
  FINAL_REVIEW: 11,
  MATERIALS: 12,
};

const stepSections = [
  { label: "Table", steps: [0, 1] },
  { label: "Tablecloth", steps: [2, 3] },
  { label: "Place Settings", steps: [4, 5, 6, 7] },
  { label: "Centerpiece", steps: [8, 9] },
  { label: "Table Styling", steps: [10] },
  { label: "Review", steps: [11] },
  { label: "Export", steps: [12] },
];

const TOTAL_STEPS = stepSequence.length;
const builderSections = [
  {
    id: "table-setup",
    title: "Table Setup",
    hint: "Foundation and linen direction.",
    rows: [1, 2, 3, 4],
  },
  {
    id: "place-settings",
    title: "Place Settings",
    hint: "Layer each seat with charger and napkin details.",
    rows: [5, 6, 7, 8],
  },
  {
    id: "centerpiece",
    title: "Centerpiece",
    hint: "Define the focal arrangement.",
    rows: [9, 10],
  },
  {
    id: "review",
    title: "Review",
    hint: "Confirm your final selections.",
    rows: [12],
  },
];

const sectionStepMap = [0, STEP_INDEX.NAPKIN_COLOR, STEP_INDEX.CENTERPIECE_DECISION, STEP_INDEX.FINAL_REVIEW];

function shouldSkipNapkinTextureStep() {
  return !state.includeNapkin;
}

function shouldSkipCenterpieceStyleStep() {
  return state.hasCenterpiece === false;
}

function getSkippedStepCount() {
  let skippedSteps = 0;
  if (shouldSkipNapkinTextureStep()) skippedSteps += 1;
  if (shouldSkipCenterpieceStyleStep()) skippedSteps += 1;
  return skippedSteps;
}

function getNextStepIndex(fromIndex = currentStepIndex) {
  let nextIndex = fromIndex + 1;

  if (nextIndex === STEP_INDEX.NAPKIN_TEXTURE && shouldSkipNapkinTextureStep()) {
    nextIndex += 1;
  }

  if (nextIndex === STEP_INDEX.CENTERPIECE_STYLE && shouldSkipCenterpieceStyleStep()) {
    nextIndex += 1;
  }

  return nextIndex;
}

function getPreviousStepIndex(fromIndex = currentStepIndex) {
  let previousIndex = fromIndex - 1;

  if (previousIndex === STEP_INDEX.NAPKIN_TEXTURE && shouldSkipNapkinTextureStep()) {
    previousIndex -= 1;
  }

  if (previousIndex === STEP_INDEX.CENTERPIECE_STYLE && shouldSkipCenterpieceStyleStep()) {
    previousIndex -= 1;
  }

  return previousIndex;
}

function getDisplayedStepNumber(stepIndex = currentStepIndex) {
  let displayedNumber = stepIndex + 1;

  if (shouldSkipNapkinTextureStep() && stepIndex > STEP_INDEX.NAPKIN_COLOR) {
    displayedNumber -= 1;
  }

  if (shouldSkipCenterpieceStyleStep() && stepIndex > STEP_INDEX.CENTERPIECE_DECISION) {
    displayedNumber -= 1;
  }

  return displayedNumber;
}

function getDisplayedTotalSteps() {
  return TOTAL_STEPS - getSkippedStepCount();
}

const state = { ...initialState };
let currentStepIndex = 0;
let maxStepReached = 0;
let isJumpModalOpen = false;
let activeSectionIndex = 0;

const placeSettingsOptions = Array.from({ length: 11 }, (_, index) => index + 2);

const el = (id) => document.getElementById(id);

const refs = {
  year: el("year"),
  table: el("table"),
  tableclothLayer: el("tableclothLayer"),
  settings: el("settingsEl"),
  styling: el("stylingEl"),
  centerpiece: el("centerpieceEl"),
  stepTitle: el("stepTitle"),
  stepHint: el("stepHint"),
  stepValue: el("stepValue"),
  stepContent: el("stepContent"),
  stepCard: el("wizardStepCard"),
  wizardProgress: el("wizardProgress"),
  progressFill: el("progressFill"),
  btnJumpTo: el("btnJumpTo"),
  stickySectionLabel: el("stickySectionLabel"),
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
    napkinTexture: el("sumNapkinTexture"),
    centerpiece: el("sumCenterpiece"),
    tableStyling: el("sumTableStyling"),
  },
};

const sizeScaleMap = {
  round: { 60: 1.02, 72: 1.08, 84: 1.14 },
  rectangle: { "6ft": 1.0, "8ft": 1.07, king: 1.13 },
  square: { 36: 1.0, 48: 1.07 },
};

let currentPreviewScale = 1;

const ASSET_BASE = "./assets/tablescape";

const chargerAssetMap = {
  gold: `${ASSET_BASE}/charger-gold.svg`,
  silver: `${ASSET_BASE}/charger-silver.svg`,
  "matte-black": `${ASSET_BASE}/charger-black.svg`,
  "clear-goldrim": `${ASSET_BASE}/charger-gold.svg`,
  goldbeaded: `${ASSET_BASE}/charger-gold.svg`,
};

function getChargerOption(value) {
  return chargerOptions.find((option) => option.value === value) || null;
}

function getSelectedChargerLabel() {
  return getChargerOption(state.selectedCharger)?.label || null;
}

function getChargerStepValue() {
  if (!state.includeCharger) {
    return "No charger";
  }

  return getSelectedChargerLabel() || "Not selected";
}

function getNapkinStepValue() {
  if (!state.includeNapkin) {
    return "No napkin";
  }

  return napkinColorOptions.find((option) => option.value === state.napkinType)?.label || "Ivory";
}

function getNapkinTextureStepValue() {
  if (!state.includeNapkin) {
    return "No napkin";
  }

  return napkinTextureOptions.find((option) => option.value === state.napkinTexture)?.label || "Polyester";
}

function getCenterpieceStepValue() {
  if (state.hasCenterpiece === false) {
    return "No centerpiece";
  }

  if (state.hasCenterpiece == null) {
    return "Not selected";
  }

  if (state.centerpieceStyle) {
    return getCenterpieceStyleLabel(state.centerpieceStyle);
  }

  return "Add centerpiece";
}

const napkinColorSlugMap = {
  Ivory: "white",
  White: "white",
  Champagne: "sand",
  Sand: "sand",
  Taupe: "sand",
  Beige: "sand",
  Blush: "dusty-rose",
  "Dusty Rose": "dusty-rose",
  Mauve: "dusty-rose",
  Rosewood: "charcoal",
  Sage: "sage",
  Olive: "sage",
  Emerald: "sage",
  Eucalyptus: "sage",
  "Dusty Blue": "navy",
  "Slate Blue": "navy",
  "French Blue": "navy",
  Navy: "navy",
  Black: "charcoal",
  Charcoal: "charcoal",
  Chocolate: "charcoal",
  Burgundy: "dusty-rose",
};

const napkinStyleSlugMap = {
  "Classic Fold": "classic-fold",
  "Pocket Fold": "pocket-fold",
  "Napkin Ring": "napkin-ring",
  "Bow Tie": "bow-tie",
};

const centerpieceAssetMap = {
  floralLow: `${ASSET_BASE}/centerpiece-low-florals.svg`,
  floralTall: `${ASSET_BASE}/centerpiece-tall-florals.svg`,
  candleTrio: `${ASSET_BASE}/centerpiece-candles.svg`,
  lantern: `${ASSET_BASE}/centerpiece-candles.svg`,
  greeneryRunner: `${ASSET_BASE}/centerpiece-minimal-greenery.svg`,
};

const centerpieceDecisionOptions = [
  {
    value: "none",
    label: "No centerpiece",
    description: "Keep the table clean and minimal",
  },
  {
    value: "yes",
    label: "Add centerpiece",
    description: "Choose a centerpiece style",
  },
];

const centerpieceStyleOptions = [
  { value: "floralLow", label: "Floral (Low)", thumbnail: `${ASSET_BASE}/centerpiece-low-florals.svg` },
  { value: "floralTall", label: "Floral (Tall)", thumbnail: `${ASSET_BASE}/centerpiece-tall-florals.svg` },
  { value: "candleTrio", label: "Candle Trio", thumbnail: `${ASSET_BASE}/centerpiece-candles.svg` },
  { value: "lantern", label: "Lantern", thumbnail: `${ASSET_BASE}/centerpiece-candles.svg` },
  { value: "greeneryRunner", label: "Greenery Runner", thumbnail: `${ASSET_BASE}/centerpiece-minimal-greenery.svg` },
];


const menuCardStyleOptions = [
  { value: "handmade-paper", label: "Handmade Paper" },
  { value: "acrylic", label: "Acrylic" },
  { value: "minimal-print", label: "Minimal Print" },
  { value: "gold-foil", label: "Gold Foil" },
];

const menuCardPlacementOptions = [
  { value: "on-napkin", label: "On napkin" },
  { value: "above-charger", label: "Above charger" },
  { value: "beside-charger", label: "Beside charger" },
];

const placeCardStyleOptions = [
  { value: "tent-card", label: "Tent Card" },
  { value: "acrylic-block", label: "Acrylic Block" },
  { value: "wax-seal-card", label: "Wax Seal Card" },
];

const placeCardPlacementOptions = [
  { value: "on-charger", label: "On charger" },
  { value: "above-charger", label: "Above charger" },
  { value: "beside-napkin", label: "Beside napkin" },
];

const tableNumberStyleOptions = [
  { value: "acrylic-stand", label: "Acrylic Stand" },
  { value: "metal-stand", label: "Metal Stand" },
  { value: "floral-base", label: "Floral Base" },
];

const candleStyleOptions = [
  { value: "votive", label: "Votive" },
  { value: "taper", label: "Taper" },
  { value: "mixed", label: "Mixed" },
];

function getCenterpieceStyleLabel(styleValue) {
  return centerpieceStyleOptions.find((option) => option.value === styleValue)?.label || "";
}

function getDefaultCenterpieceStyleForDecision() {
  return "floralLow";
}



function getOptionLabel(options, value) {
  return options.find((option) => option.value === value)?.label || null;
}

function getTableStylingSummaryParts() {
  const items = [];
  const { menuCard, placeCard, tableNumber, candles } = state.tableStyling;

  if (menuCard.enabled && menuCard.style) {
    const style = getOptionLabel(menuCardStyleOptions, menuCard.style) || "Menu Card";
    const placement = getOptionLabel(menuCardPlacementOptions, menuCard.placement);
    items.push(`Menu Cards: ${style}${placement ? `, ${placement}` : ""}`);
  }

  if (placeCard.enabled && placeCard.style) {
    const style = getOptionLabel(placeCardStyleOptions, placeCard.style) || "Place Card";
    const placement = getOptionLabel(placeCardPlacementOptions, placeCard.placement);
    items.push(`Place Cards: ${style}${placement ? `, ${placement}` : ""}`);
  }

  if (tableNumber.enabled && tableNumber.style) {
    items.push(`Table Numbers: ${getOptionLabel(tableNumberStyleOptions, tableNumber.style) || "Styled"}`);
  }

  if (candles.enabled && candles.style) {
    items.push(`Candles: ${getOptionLabel(candleStyleOptions, candles.style) || "Styled"}`);
  }

  return items;
}

function getTableStylingStepValue() {
  const parts = getTableStylingSummaryParts();
  return parts.length ? parts.join(" · ") : "None";
}

function getReadableSummary() {
  return {
    table: `${formatTableSelection(state.tableShape, state.tableSize)}, ${state.placeSettingsCount || "—"} place settings`,
    linens: `${tableclothTextureOptions.find((option) => option.value === state.tableclothTexture)?.label || state.tableclothTexture}, ${tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory"}`,
    charger: getChargerStepValue(),
    napkin: `${getNapkinStepValue()}, ${getNapkinTextureStepValue()}`,
    centerpiece: getCenterpieceStepValue(),
    tableStyling: getTableStylingSummaryParts(),
  };
}

function toTitleCase(value) {
  return value
    .split(/[-\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function generateMaterialsList() {
  const count = Number(state.placeSettingsCount) || 0;
  const list = [];

  list.push({ category: "Table", label: `${formatTableSelection(state.tableShape, state.tableSize)} Table`, quantity: 1 });
  list.push({ category: "Linens", label: `${tableclothTextureOptions.find((option) => option.value === state.tableclothTexture)?.label || toTitleCase(state.tableclothTexture)} ${tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory"} Tablecloth`, quantity: 1 });

  if (state.includeCharger && state.selectedCharger && count) {
    list.push({ category: "Charger", label: getSelectedChargerLabel() || "Charger", quantity: count });
  }

  if (state.includeNapkin && state.napkinType && count) {
    list.push({ category: "Napkin", label: `${state.napkinType} ${getNapkinTextureStepValue()} Napkin`, quantity: count });
  }

  if (state.hasCenterpiece && state.centerpieceStyle) {
    list.push({ category: "Centerpiece", label: getCenterpieceStyleLabel(state.centerpieceStyle), quantity: 1 });
  }

  if (state.tableStyling.menuCard.enabled && count) {
    list.push({ category: "Menu Card", label: `${getOptionLabel(menuCardStyleOptions, state.tableStyling.menuCard.style) || "Menu Card"}`, quantity: count });
  }

  if (state.tableStyling.placeCard.enabled && count) {
    list.push({ category: "Place Card", label: `${getOptionLabel(placeCardStyleOptions, state.tableStyling.placeCard.style) || "Place Card"}`, quantity: count });
  }

  if (state.tableStyling.tableNumber.enabled) {
    list.push({ category: "Table Number", label: getOptionLabel(tableNumberStyleOptions, state.tableStyling.tableNumber.style) || "Table Number", quantity: 1 });
  }

  if (state.tableStyling.candles.enabled) {
    list.push({ category: "Candles", label: getOptionLabel(candleStyleOptions, state.tableStyling.candles.style) || "Candles", quantity: Math.max(3, Math.ceil(count / 2) || 3) });
  }

  return list;
}

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
    refs.table.style.width = "580px";
    refs.table.style.height = "580px";
    refs.table.style.borderRadius = "999px";
    refs.table.classList.add("table--round");
  } else if (shape === "rectangle") {
    refs.table.style.width = "680px";
    refs.table.style.height = "440px";
    refs.table.style.borderRadius = "26px";
    refs.table.classList.add("table--rectangle");
  } else if (shape === "square") {
    if (Number(size) === 60) {
      refs.table.style.width = "620px";
      refs.table.style.height = "620px";
    } else if (Number(size) === 48) {
      refs.table.style.width = "560px";
      refs.table.style.height = "560px";
    } else {
      refs.table.style.width = "510px";
      refs.table.style.height = "510px";
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
  if (!state.includeNapkin || !state.napkinType) {
    return null;
  }

  // Integration point: map curated wizard colors to closest available napkin assets until dedicated per-color renders are added.
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
  const chargerAsset = state.selectedCharger ? chargerAssetMap[state.selectedCharger] : null;
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

    if (state.selectedCharger && chargerAsset) {
      setting.appendChild(createLayer("setting__charger", chargerAsset, `${state.selectedCharger} charger`));
    }

    const plateWrap = document.createElement("div");
    plateWrap.className = "setting__plate-wrap";
    plateWrap.appendChild(createLayer("setting__plate", `${ASSET_BASE}/dinner-plate.svg`, "Dinner plate"));
    setting.appendChild(plateWrap);

    if (state.includeNapkin && state.napkinType && napkinAsset) {
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
  if (!state.hasCenterpiece || !state.centerpieceStyle) {
    refs.centerpiece.innerHTML = "";
    return;
  }

  refs.centerpiece.innerHTML = "";
  const centerImage = createLayer(
    "centerpiece__image",
    centerpieceAssetMap[state.centerpieceStyle],
    `${getCenterpieceStyleLabel(state.centerpieceStyle)} centerpiece`
  );
  refs.centerpiece.appendChild(centerImage);
}

function renderStylingOverlays() {
  refs.styling.innerHTML = "";
  const overlays = [];

  if (state.tableStyling.menuCard.enabled) overlays.push("Menu");
  if (state.tableStyling.placeCard.enabled) overlays.push("Place");
  if (state.tableStyling.tableNumber.enabled) overlays.push("No.");
  if (state.tableStyling.candles.enabled) overlays.push("Candle");

  overlays.forEach((label, index) => {
    const chip = document.createElement("span");
    chip.className = "styling-overlays__item";
    chip.textContent = label;
    chip.style.left = `${18 + (index * 18)}%`;
    chip.style.top = `${16 + ((index % 2) * 58)}%`;
    refs.styling.appendChild(chip);
  });
}

function renderSummary() {
  refs.summary.table.textContent = formatTableSelection(state.tableShape, state.tableSize);
  refs.summary.settings.textContent = state.placeSettingsCount == null ? "—" : String(state.placeSettingsCount);
  refs.summary.cloth.textContent = `${state.tableclothTexture[0].toUpperCase()}${state.tableclothTexture.slice(1)} — ${tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory"}`;
  refs.summary.charger.textContent = getSelectedChargerLabel() || "—";
  refs.summary.napkin.textContent = state.includeNapkin ? (state.napkinType || "—") : "No napkin";
  refs.summary.napkinTexture.textContent = getNapkinTextureStepValue();
  refs.summary.centerpiece.textContent = getCenterpieceStepValue();
  refs.summary.tableStyling.textContent = getTableStylingStepValue();
}

function updatePreviewStatus() {
  const currentStepNumber = getDisplayedStepNumber();
  const totalSteps = getDisplayedTotalSteps();
  const nextLabel = stepSequence[getNextStepIndex()] || "Review";

  refs.previewStepText.textContent = `Designing your table — Step ${currentStepNumber} of ${totalSteps}`;
  refs.previewNextText.textContent = `Next: ${nextLabel}`;
  refs.previewSummary.hidden = currentStepNumber !== totalSteps;
}

function renderJumpStepList() {
  refs.jumpStepList.innerHTML = stepSections.map((section) => {
    const rows = section.steps.map((stepIndex) => {
      if (stepIndex === STEP_INDEX.NAPKIN_TEXTURE && shouldSkipNapkinTextureStep()) {
        return "";
      }

      if (stepIndex === STEP_INDEX.CENTERPIECE_STYLE && shouldSkipCenterpieceStyleStep()) {
        return "";
      }

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
  refs.table.dataset.napkinTexture = state.napkinTexture;

  const currentStepNumber = currentStepIndex + 1;
  refs.centerpiece.innerHTML = "";
  refs.settings.innerHTML = "";
  refs.styling.innerHTML = "";

  renderCenterpiece();
  renderStylingOverlays();
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
  renderTextureCards({
    options: tableclothTextureOptions,
    selectedValue: state.tableclothTexture,
    inputName: "tableclothTexture",
    tooltipPrefix: "tableTextureTip",
    leftArrowLabel: "Scroll tablecloth textures left",
    rightArrowLabel: "Scroll tablecloth textures right",
    onChange: (value) => {
      state.tableclothTexture = value;
      updateUI();
    },
  });
}

function renderNapkinTextureCards() {
  renderTextureCards({
    options: napkinTextureOptions,
    selectedValue: state.napkinTexture,
    inputName: "napkinTexture",
    tooltipPrefix: "napkinTextureTip",
    leftArrowLabel: "Scroll napkin textures left",
    rightArrowLabel: "Scroll napkin textures right",
    onChange: (value) => {
      state.napkinTexture = value;
      updateUI();
    },
  });
}

function renderTextureCards({
  options,
  selectedValue,
  inputName,
  tooltipPrefix,
  leftArrowLabel,
  rightArrowLabel,
  onChange,
}) {
  refs.stepContent.innerHTML = `
    <div id="wizard-texture-carousel" class="texture-carousel" data-tooltip-root>
      <button class="texture-carousel__arrow texture-carousel__arrow--left" type="button" data-texture-scroll="left" aria-label="${leftArrowLabel}">&#8249;</button>
      <div class="texture-carousel__viewport">
        <div class="option-cards option-cards--table-texture">
          ${options.map((option, index) => {
            const tooltipId = `${tooltipPrefix}${index}`;
            return `
              <label class="option-card option-card--texture ${selectedValue === option.value ? "option-card--selected" : ""}">
                <input type="radio" name="${inputName}" value="${option.value}" ${selectedValue === option.value ? "checked" : ""} />
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
      <button class="texture-carousel__arrow texture-carousel__arrow--right" type="button" data-texture-scroll="right" aria-label="${rightArrowLabel}">&#8250;</button>
    </div>
  `;

  refs.stepContent.querySelectorAll(`input[name="${inputName}"]`).forEach((radio) => {
    radio.addEventListener("change", (event) => {
      closeAllTooltips();
      onChange(event.target.value);
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

function getOptionGroup(groups, selectedValue, valueField = "value") {
  const matched = Object.entries(groups).find(([, options]) => options.some((option) => option[valueField] === selectedValue));
  return matched ? matched[0] : null;
}

function renderGroupedColorCards({
  groups,
  groupNames,
  selectedGroup,
  selectedValue,
  groupSelectId,
  colorInputName,
  extraToolbarControls = "",
  carouselDisabled = false,
  onGroupChange,
  onColorChange,
}) {
  const activeColorOptions = groups[selectedGroup] || [];

  refs.stepContent.innerHTML = `
    <div class="wizard-color-toolbar">
      ${extraToolbarControls}
      <label class="wizard-color-group" for="${groupSelectId}">
        <span class="wizard-color-group__label">Group:</span>
        <select id="${groupSelectId}" class="wizard-color-group__select" aria-label="Filter ${colorInputName === "tableclothColor" ? "tablecloth" : "napkin"} colors by group">
          ${groupNames.map((group) => `<option value="${group}" ${group === selectedGroup ? "selected" : ""}>${group}</option>`).join("")}
        </select>
      </label>
    </div>
    <div id="wizard-color-carousel" class="wizard-color-carousel ${carouselDisabled ? "wizard-color-carousel--disabled" : ""}" ${carouselDisabled ? "aria-disabled=\"true\"" : ""}>
      <div class="wizard-color-carousel__viewport">
        <div class="option-cards option-cards--table-color">
          ${activeColorOptions.map((option) => `
            <label class="option-card option-card--color ${selectedValue === option.value ? "option-card--selected" : ""}">
              <input type="radio" name="${colorInputName}" value="${option.value}" ${selectedValue === option.value ? "checked" : ""} />
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

  refs.stepContent.querySelector(`#${groupSelectId}`)?.addEventListener("change", (event) => {
    onGroupChange(event.target.value);
  });

  refs.stepContent.querySelectorAll(`input[name="${colorInputName}"]`).forEach((radio) => {
    radio.addEventListener("change", (event) => {
      onColorChange(event.target.value);
    });
  });
}

function renderTableColorCards() {
  const matchedGroup = getOptionGroup(tableclothColorGroups, state.tableclothColor);
  const selectedGroup = tableclothColorGroups[state.tableclothColorGroup]
    ? state.tableclothColorGroup
    : (matchedGroup || "Neutrals");

  renderGroupedColorCards({
    groups: tableclothColorGroups,
    groupNames: tableclothColorGroupNames,
    selectedGroup,
    selectedValue: state.tableclothColor,
    groupSelectId: "tableclothColorGroup",
    colorInputName: "tableclothColor",
    onGroupChange: (group) => {
      state.tableclothColorGroup = group;
      renderTableColorCards();
    },
    onColorChange: (value) => {
      state.tableclothColor = value;
      state.tableclothColorGroup = getOptionGroup(tableclothColorGroups, value) || "Neutrals";
      updateUI();
    },
  });
}

function renderNapkinColorCards() {
  const selectedNapkin = napkinColorOptions.find((option) => option.value === state.napkinType) || napkinColorOptions[0];
  const selectedGroup = napkinColorGroups[state.napkinColorGroup]
    ? state.napkinColorGroup
    : (selectedNapkin?.group || "Neutrals");

  state.napkinType = selectedNapkin?.value || "Ivory";
  state.napkinColor = selectedNapkin?.hex || "#F3EBDD";
  state.napkinColorGroup = selectedGroup;

  renderGroupedColorCards({
    groups: napkinColorGroups,
    groupNames: napkinColorGroupNames,
    selectedGroup: state.napkinColorGroup,
    selectedValue: state.napkinType,
    groupSelectId: "napkinColorGroup",
    colorInputName: "napkinColor",
    extraToolbarControls: `
      <label class="charger-toggle charger-toggle--no-charger" for="noNapkinToggle">
        <input id="noNapkinToggle" class="charger-toggle__input" type="checkbox" ${state.includeNapkin ? "" : "checked"} />
        <span class="charger-toggle__label">No napkin</span>
      </label>
    `,
    carouselDisabled: !state.includeNapkin,
    onGroupChange: (group) => {
      state.napkinColorGroup = group;
      renderNapkinColorCards();
    },
    onColorChange: (value) => {
      const selectedOption = napkinColorOptions.find((option) => option.value === value);
      if (!selectedOption) return;
      state.includeNapkin = true;
      state.napkinType = selectedOption.value;
      state.napkinColor = selectedOption.hex;
      state.lastSelectedNapkin = selectedOption.value;
      state.napkinColorGroup = selectedOption.group;
      updateUI();
    },
  });

  refs.stepContent.querySelector("#noNapkinToggle")?.addEventListener("change", (event) => {
    const noNapkin = event.target.checked;
    const includeNapkin = !noNapkin;

    if (!includeNapkin && state.napkinType) {
      state.lastSelectedNapkin = state.napkinType;
    }

    if (includeNapkin) {
      state.includeNapkin = true;
      const fallbackNapkin = napkinColorOptions.find((option) => option.value === state.lastSelectedNapkin)
        || napkinColorOptions.find((option) => option.value === "Ivory")
        || napkinColorOptions[0];

      if (fallbackNapkin) {
        state.napkinType = fallbackNapkin.value;
        state.napkinColor = fallbackNapkin.hex;
        state.napkinColorGroup = fallbackNapkin.group;
      }
    } else {
      state.includeNapkin = false;
    }

    updateUI();
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
    case 2: return { title: "Table size", hint: "Choose a size for the selected shape.", value: state.tableSize ? (typeof state.tableSize === "number" ? `${state.tableSize}"` : state.tableSize) : "Not selected" };
    case 3: return { title: "Choose Tablecloth Texture", hint: "Choose a fabric.", value: tableclothTextureOptions.find((option) => option.value === state.tableclothTexture)?.label || state.tableclothTexture };
    case 4: return { title: "Tablecloth color", hint: "Choose a color.", value: tableclothColorOptions.find((option) => option.value === state.tableclothColor)?.label || "Ivory" };
    case 5: return { title: "Number of place settings", hint: "How many guests are you planning for?", value: state.placeSettingsCount == null ? "Not selected" : formatGuestLabel(state.placeSettingsCount) };
    case 6: return { title: "Charger plate", hint: "Select your charger style.", value: getChargerStepValue() };
    case 7: return { title: "Napkin color", hint: "Choose a color.", value: getNapkinStepValue() };
    case 8: return { title: "Choose Napkin Texture", hint: "Choose a fabric.", value: getNapkinTextureStepValue() };
    case 9: return { title: "Centerpiece", hint: "Would you like to add a centerpiece?", value: getCenterpieceStepValue() };
    case 10: return { title: "Centerpiece", hint: "Choose a centerpiece style", value: state.hasCenterpiece ? (getCenterpieceStyleLabel(state.centerpieceStyle) || "Not selected") : "Skipped" };
    case 11: return { title: "Table styling", hint: "Add optional finishing touches.", value: getTableStylingStepValue() };
    case 12: return { title: "Final Preview / Review", hint: "Review your completed tablescape.", value: "Ready" };
    case 13: return { title: "Export materials list", hint: "Convert your design into a sourcing checklist.", value: `${generateMaterialsList().length} items` };
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

function formatGuestLabel(count) {
  return `${count} ${count === 1 ? "Guest" : "Guests"}`;
}

function renderPlaceSettingsStep() {
  const selectedCount = state.placeSettingsCount;

  refs.stepContent.innerHTML = `
    <section class="place-settings-panel" aria-labelledby="placeSettingsHeading">
      <p id="placeSettingsHeading" class="place-settings-panel__subtitle">How many guests will be seated at this table?</p>
      <div class="pill-row pill--scroll" role="group" aria-label="Select guests">
        ${placeSettingsOptions.map((count) => {
          const isSelected = selectedCount === count;
          return `
            <button
              type="button"
              class="pill place-settings-pill ${isSelected ? "pill--selected" : ""}"
              data-place-settings-value="${count}"
              aria-pressed="${isSelected ? "true" : "false"}"
            >${count}</button>
          `;
        }).join("")}
      </div>
      <p class="place-settings-panel__helper" aria-live="polite">
        ${selectedCount == null ? "Selected: Not selected" : `Selected: ${selectedCount} ${selectedCount === 1 ? "guest" : "guests"}`}
      </p>
    </section>
  `;

  refs.stepContent.querySelectorAll("[data-place-settings-value]").forEach((button) => {
    button.addEventListener("click", () => {
      const count = Number(button.getAttribute("data-place-settings-value"));
      state.placeSettingsCount = Number.isNaN(count) ? null : count;
      updateUI();
    });
  });
}

function isSectionComplete(sectionIndex) {
  switch (sectionIndex) {
    case 0:
      return Boolean(state.tableShape && state.tableSize && state.tableclothTexture && state.tableclothColor);
    case 1:
      return state.placeSettingsCount != null && (!state.includeCharger || state.selectedCharger) && (!state.includeNapkin || state.napkinType);
    case 2:
      return state.hasCenterpiece === false || (state.hasCenterpiece === true && state.centerpieceStyle);
    case 3:
      return true;
    default:
      return false;
  }
}

function getHighestRevealedSectionIndex() {
  let index = 0;
  while (index < builderSections.length - 1 && isSectionComplete(index)) {
    index += 1;
  }
  return index;
}

function withScopedStepContent(container, renderFn) {
  const previousStepContent = refs.stepContent;
  refs.stepContent = container;
  renderFn();
  refs.stepContent = previousStepContent;
}

function renderStepInto(stepNumber, container) {
  withScopedStepContent(container, () => {
    if (stepNumber === 1) {
      renderVisualOptionCards({
        name: "tableShape",
        options: tableShapeOptions,
        selectedValue: state.tableShape,
        onSelect: (value) => {
          if (state.tableShape !== value) {
            state.tableShape = value;
            const shapeSizes = tableSizeOptions[value] || [];
            if (!shapeSizes.some((option) => option.value === state.tableSize)) {
              state.tableSize = "";
            }
          }
          updateUI();
        },
      });
      return;
    }

    if (stepNumber === 2) {
      if (!state.tableShape) {
        refs.stepContent.innerHTML = '<p class="subtle">Choose a table shape first to unlock matching size options.</p>';
        return;
      }

      const shapeSizes = tableSizeOptions[state.tableShape] || [];
      if (!shapeSizes.some((option) => option.value === state.tableSize)) {
        state.tableSize = "";
      }
      if (state.tableShape === "round") renderRoundSizeCards();
      else if (state.tableShape === "rectangle") renderRectangleSizeCards();
      else if (state.tableShape === "square") renderSquareSizeCards();
      return;
    }

    if (stepNumber === 3) return renderTableTextureCards();
    if (stepNumber === 4) return renderTableColorCards();
    if (stepNumber === 5) return renderPlaceSettingsStep();

    if (stepNumber === 6) {
      refs.stepContent.innerHTML = `
        <div class="charger-step__controls">
          <label class="charger-toggle charger-toggle--no-charger" for="noChargerToggleGrouped">
            <input id="noChargerToggleGrouped" class="charger-toggle__input" type="checkbox" ${state.includeCharger ? "" : "checked"} />
            <span class="charger-toggle__label">No charger</span>
          </label>
        </div>
        <div id="wizard-texture-carousel" class="texture-carousel ${state.includeCharger ? "" : "texture-carousel--disabled"}" ${state.includeCharger ? "" : "aria-disabled=\"true\""}>
          <button class="texture-carousel__arrow texture-carousel__arrow--left" type="button" data-texture-scroll="left" aria-label="Scroll charger options left">&#8249;</button>
          <div class="texture-carousel__viewport">
            <div class="option-cards option-cards--table-texture">
              ${chargerOptions.map((option) => `
                <label class="option-card option-card--texture option-card--charger ${state.selectedCharger === option.value ? "option-card--selected" : ""}">
                  <input type="radio" name="selectedCharger" value="${option.value}" ${state.selectedCharger === option.value ? "checked" : ""} />
                  <div class="option-card__media option-card__media--texture option-card__media--charger">
                    <img class="option-card__image option-card__image--texture option-card__image--charger" src="${option.image}" data-fallback-src="${PLACEHOLDER_ASSET}" data-fallback-text="true" alt="${option.label}" loading="lazy" />
                    <span class="option-card__fallback" data-fallback-text hidden>Image coming soon</span>
                  </div>
                  <span class="option-card__title option-card__title--texture">${option.label}</span>
                </label>
              `).join("")}
            </div>
          </div>
          <button class="texture-carousel__arrow texture-carousel__arrow--right" type="button" data-texture-scroll="right" aria-label="Scroll charger options right">&#8250;</button>
        </div>
      `;

      refs.stepContent.querySelector("#noChargerToggleGrouped")?.addEventListener("change", (event) => {
        const includeCharger = !event.target.checked;
        if (!includeCharger && state.selectedCharger != null) state.lastSelectedCharger = state.selectedCharger;
        if (includeCharger) {
          state.includeCharger = true;
          if (state.selectedCharger == null && state.lastSelectedCharger && getChargerOption(state.lastSelectedCharger)) {
            state.selectedCharger = state.lastSelectedCharger;
          }
        } else {
          state.includeCharger = false;
          state.selectedCharger = null;
        }
        updateUI();
      });

      refs.stepContent.querySelectorAll('input[name="selectedCharger"]').forEach((radio) => {
        radio.addEventListener("change", (event) => {
          state.includeCharger = true;
          state.selectedCharger = event.target.value;
          state.lastSelectedCharger = event.target.value;
          updateUI();
        });
      });

      setupTextureCarousel();
      attachImageFallbacks(refs.stepContent);
      return;
    }

    if (stepNumber === 7) return renderNapkinColorCards();
    if (stepNumber === 8) return renderNapkinTextureCards();

    if (stepNumber === 9) {
      refs.stepContent.innerHTML = `
        <div class="centerpiece-decision-cards" role="radiogroup" aria-label="Centerpiece decision">
          ${centerpieceDecisionOptions.map((option) => {
            const isSelected = (option.value === "none" && state.hasCenterpiece === false)
              || (option.value === "yes" && state.hasCenterpiece === true);
            return `
              <button
                class="centerpiece-decision-card ${isSelected ? "centerpiece-decision-card--selected" : ""}"
                type="button"
                role="radio"
                aria-checked="${isSelected ? "true" : "false"}"
                data-centerpiece-decision="${option.value}"
              >
                <span class="centerpiece-decision-card__title">${option.label}</span>
                <span class="centerpiece-decision-card__description">${option.description}</span>
              </button>
            `;
          }).join("")}
        </div>
      `;
      refs.stepContent.querySelectorAll("[data-centerpiece-decision]").forEach((button) => {
        button.addEventListener("click", () => {
          const decision = button.getAttribute("data-centerpiece-decision");
          state.centerpieceDecision = decision;
          if (decision === "none") {
            state.hasCenterpiece = false;
            state.centerpieceStyle = null;
          } else {
            state.hasCenterpiece = true;
            state.centerpieceStyle = state.centerpieceStyle || getDefaultCenterpieceStyleForDecision();
          }
          updateUI();
        });
      });
      return;
    }

    if (stepNumber === 10) {
      if (state.hasCenterpiece === false) {
        refs.stepContent.innerHTML = '<p class="subtle">Centerpiece style options appear when a centerpiece is selected.</p>';
        return;
      }

      refs.stepContent.innerHTML = `
        <p class="centerpiece-style-helper">Not sure? Start with Floral (Low).</p>
        <div class="option-cards">
          ${centerpieceStyleOptions.map((option) => `
            <button class="option-card ${state.centerpieceStyle === option.value ? "option-card--selected" : ""}" type="button" data-centerpiece-style="${option.value}">
              <div class="option-card__media">
                <img class="option-card__image" src="${option.thumbnail}" alt="${option.label} centerpiece" loading="lazy" />
              </div>
              <span class="option-card__title">${option.label}</span>
            </button>
          `).join("")}
        </div>
      `;

      refs.stepContent.querySelectorAll("[data-centerpiece-style]").forEach((button) => {
        button.addEventListener("click", () => {
          state.hasCenterpiece = true;
          state.centerpieceDecision = "yes";
          state.centerpieceStyle = button.getAttribute("data-centerpiece-style");
          updateUI();
        });
      });
      return;
    }

    if (stepNumber === 12) {
      const summary = getReadableSummary();
      refs.stepContent.innerHTML = `
        <div class="review-card review-card--final">
          <div class="review-card__headline">Your design is complete</div>
          <dl class="summary__grid kv">
            <div><dt>Table</dt><dd>${summary.table}</dd></div>
            <div><dt>Linens</dt><dd>${summary.linens}</dd></div>
            <div><dt>Charger</dt><dd>${summary.charger}</dd></div>
            <div><dt>Napkin</dt><dd>${summary.napkin}</dd></div>
            <div><dt>Centerpiece</dt><dd>${summary.centerpiece}</dd></div>
          </dl>
        </div>
      `;
    }
  });
}

function renderStepContent() {
  const maxRevealedIndex = getHighestRevealedSectionIndex();
  if (activeSectionIndex > maxRevealedIndex) activeSectionIndex = maxRevealedIndex;

  refs.stepContent.innerHTML = `
    <div class="sectioned-builder">
      ${builderSections.map((section, index) => {
        const unlocked = index <= maxRevealedIndex;
        const open = index === activeSectionIndex;
        return `
          <section class="section-container ${open ? "section-container--open" : ""} ${unlocked ? "" : "section-container--locked"}" data-section-index="${index}">
            <button class="section-container__header" type="button" data-open-section="${index}" ${unlocked ? "" : "disabled"}>
              <span>
                <span class="section-container__eyebrow">Section ${index + 1}</span>
                <span class="section-container__title">${section.title}</span>
                <span class="section-container__hint">${section.hint}</span>
              </span>
              <span class="section-container__status">${isSectionComplete(index) ? "Completed" : (open ? "In progress" : "Open")}</span>
            </button>
            <div class="section-container__body" ${open ? "" : "hidden"}></div>
          </section>
        `;
      }).join("")}
    </div>
  `;

  refs.stepContent.querySelectorAll("[data-open-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextSection = Number(button.getAttribute("data-open-section"));
      if (Number.isNaN(nextSection)) return;
      activeSectionIndex = nextSection;
      currentStepIndex = sectionStepMap[nextSection] || 0;
      updateUI();
    });
  });

  const openSection = builderSections[activeSectionIndex];
  const body = refs.stepContent.querySelector(`.section-container[data-section-index="${activeSectionIndex}"] .section-container__body`);
  if (!openSection || !body) return;

  openSection.rows.forEach((stepNumber) => {
    if (stepNumber === 10 && state.hasCenterpiece === false) return;
    const question = document.createElement("article");
    question.className = "question-row";
    const meta = (() => {
      const previousIndex = currentStepIndex;
      currentStepIndex = stepNumber - 1;
      const data = getStepMeta();
      currentStepIndex = previousIndex;
      return data;
    })();

    question.innerHTML = `
      <div class="question-row__head">
        <h3>${meta.title}</h3>
        <p>${meta.hint || ""}</p>
      </div>
      <div class="question-row__content"></div>
    `;

    body.appendChild(question);
    renderStepInto(stepNumber, question.querySelector(".question-row__content"));
  });

  if (isSectionComplete(activeSectionIndex) && activeSectionIndex < builderSections.length - 1) {
    activeSectionIndex += 1;
    currentStepIndex = sectionStepMap[activeSectionIndex] || 0;
  }
}

function exportMaterials() {
  const materials = generateMaterialsList();
  const lines = [
    "The Preview Suite — Materials List",
    "--------------------------------",
    ...materials.map((item) => `${item.category}: ${item.label} (x${item.quantity})`),
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
  const sectionNumber = activeSectionIndex + 1;
  const totalSections = builderSections.length;

  refs.wizardProgress.textContent = `Section ${sectionNumber} of ${totalSections}`;
  refs.progressFill.style.width = `${(sectionNumber / totalSections) * 100}%`;

  const activeSection = builderSections[activeSectionIndex] || builderSections[0];
  refs.stepTitle.textContent = activeSection.title;
  refs.stepHint.textContent = activeSection.hint;
  refs.stepValue.textContent = isSectionComplete(activeSectionIndex) ? "Completed" : "In progress";
  if (refs.stickySectionLabel) refs.stickySectionLabel.textContent = activeSection.title;

  renderStepContent();
  renderPreview();
}

function goToStep(index, options = {}) {
  const { allowFuture = false, smoothScroll = false } = options;

  if (isJumpModalOpen) {
    closeJumpModal();
  }
  let normalizedIndex = index;
  if (normalizedIndex === STEP_INDEX.NAPKIN_TEXTURE && shouldSkipNapkinTextureStep()) {
    normalizedIndex = index > currentStepIndex ? STEP_INDEX.NAPKIN_TEXTURE + 1 : STEP_INDEX.NAPKIN_COLOR;
  }

  if (normalizedIndex === STEP_INDEX.CENTERPIECE_STYLE && shouldSkipCenterpieceStyleStep()) {
    normalizedIndex = index > currentStepIndex ? STEP_INDEX.TABLE_STYLING : STEP_INDEX.CENTERPIECE_DECISION;
  }

  const boundedIndex = Math.max(0, Math.min(normalizedIndex, TOTAL_STEPS - 1));
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
  activeSectionIndex = Math.min(builderSections.length - 1, activeSectionIndex + 1);
  currentStepIndex = sectionStepMap[activeSectionIndex] || 0;
  updateUI();
}

function prevStep() {
  activeSectionIndex = Math.max(0, activeSectionIndex - 1);
  currentStepIndex = sectionStepMap[activeSectionIndex] || 0;
  updateUI();
}

function resetCurrentStep() {
  if (currentStepIndex + 1 === 7) {
    const configuredDefaultNapkin = napkinColorOptions.find((option) => option.value === initialState.napkinType)
      || napkinColorOptions.find((option) => option.value === "Ivory")
      || napkinColorOptions[0];

    state.includeNapkin = initialState.includeNapkin;
    state.napkinType = configuredDefaultNapkin?.value || initialState.napkinType;
    state.napkinColor = configuredDefaultNapkin?.hex || initialState.napkinColor;
    state.napkinColorGroup = configuredDefaultNapkin?.group || initialState.napkinColorGroup;
    state.lastSelectedNapkin = initialState.lastSelectedNapkin;
    updateUI();
    return;
  }

  if (currentStepIndex + 1 === 8) {
    state.napkinTexture = initialState.napkinTexture;
    updateUI();
    return;
  }

  if (currentStepIndex + 1 === 9) {
    state.hasCenterpiece = initialState.hasCenterpiece;
    state.centerpieceDecision = initialState.centerpieceDecision;
    state.centerpieceStyle = initialState.centerpieceStyle;
    updateUI();
    return;
  }

  if (currentStepIndex + 1 === 10) {
    if (state.hasCenterpiece) {
      state.centerpieceStyle = getDefaultCenterpieceStyleForDecision();
    }
    updateUI();
    return;
  }

  resetWizard();
}

function resetWizard() {
  Object.assign(state, initialState);
  currentStepIndex = 0;
  activeSectionIndex = 0;
  maxStepReached = 0;
  refs.exportNote.textContent = "";
  updateUI();
}

function init() {
  refs.year.textContent = String(new Date().getFullYear());

  refs.btnBack?.addEventListener("click", prevStep);
  refs.btnNext?.addEventListener("click", nextStep);
  refs.btnReset?.addEventListener("click", resetCurrentStep);
  refs.btnJumpTo?.addEventListener("click", openJumpModal);
  refs.jumpClose?.addEventListener("click", closeJumpModal);
  refs.jumpBackdrop?.addEventListener("click", closeJumpModal);
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
  updateUI();
}

document.addEventListener("DOMContentLoaded", init);
