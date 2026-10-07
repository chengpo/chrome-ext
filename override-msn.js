(function() {
  'use strict';

  function removeMeStrip() {
    const shadowRoot = document.querySelector("entry-point").shadowRoot;
    const strip = shadowRoot.querySelector("div.me-stripe-placeholder.compact");
    if (strip && strip.innerHTML.trim() !== '') {
        strip.innerHTML = '';
        strip.style.cssText = "display: none !important; opacity: 0 !important; height: 0 !important;";
    }
  }

  // Observe and remove as soon as it appears
  const observer = new MutationObserver(() => {
    removeMeStrip();
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();