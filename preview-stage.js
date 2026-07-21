(() => {
/** Shared timing for photographic preview-layer crossfades. */
const PREVIEW_TRANSITIONS = Object.freeze({
  duration: 250,
  easing: "ease-in-out",
});

class PreviewAssetLoader {
  constructor() {
    this.cache = new Map();
  }

  preload(source) {
    if (!source) return Promise.resolve(null);
    if (this.cache.has(source)) return this.cache.get(source);

    const request = new Promise((resolve, reject) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Unable to preload preview asset: ${source}`));
      image.src = source;
    });

    this.cache.set(source, request);
    request.catch(() => this.cache.delete(source));
    return request;
  }

  preloadAll(sources = []) {
    return Promise.all(sources.filter(Boolean).map((source) => this.preload(source)));
  }
}

class PreviewLayer {
  constructor(element, assetLoader) {
    this.element = element;
    this.assetLoader = assetLoader;
    this.currentImage = null;
  }

  async setSource(source, alt = "") {
    if (!source || this.currentImage?.dataset.source === source) return;
    await this.assetLoader.preload(source);

    const nextImage = document.createElement("img");
    nextImage.className = "preview-layer__image preview-layer__image--entering";
    nextImage.src = source;
    nextImage.alt = alt;
    nextImage.dataset.source = source;
    this.element.append(nextImage);
    requestAnimationFrame(() => nextImage.classList.remove("preview-layer__image--entering"));

    const previousImage = this.currentImage;
    this.currentImage = nextImage;
    if (previousImage) {
      previousImage.classList.add("preview-layer__image--leaving");
      window.setTimeout(() => previousImage.remove(), PREVIEW_TRANSITIONS.duration);
    }
  }

  clear() {
    this.currentImage = null;
    this.element.querySelectorAll(".preview-layer__image").forEach((image) => image.remove());
  }
}

class PreviewStage {
  constructor(element, assetLoader = new PreviewAssetLoader()) {
    this.element = element;
    this.assetLoader = assetLoader;
    this.layers = new Map(
      Array.from(element.querySelectorAll("[data-preview-layer]"), (layer) => [
        layer.dataset.previewLayer,
        new PreviewLayer(layer, assetLoader),
      ]),
    );
  }

  getLayer(name) {
    return this.layers.get(name);
  }

  setCompositionVisible(name, isVisible) {
    const composition = this.element.querySelector(`[data-preview-composition="${name}"]`);
    if (!composition) return;

    composition.classList.toggle("is-visible", isVisible);
    composition.setAttribute("aria-hidden", String(!isVisible));
  }
}

window.PreviewStage = PreviewStage;
window.PreviewLayer = PreviewLayer;
window.PreviewAssetLoader = PreviewAssetLoader;
window.PREVIEW_TRANSITIONS = PREVIEW_TRANSITIONS;

document.querySelectorAll("[data-preview-stage]").forEach((stage) => {
  stage.previewStage = new PreviewStage(stage);
  stage.dataset.previewStageReady = "true";
});
})();
