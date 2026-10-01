(function () {
  'use strict';

  // Configurable scroll distance in pixels per keypress
  const LINE_HEIGHT = 20;
  const SCROLL_STEP = 15 * LINE_HEIGHT;

  // Check if user is currently typing in an input element
  function isEditableElement(element) {
    if (!element) return false;
    const tagName = element.tagName.toUpperCase();
    const isInput = tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT';
    const isContentEditable = element.isContentEditable || element.getAttribute('contenteditable') === 'true';
    return isInput || isContentEditable;
  }

  window.addEventListener('keydown', (event) => {
    // Ignore keypresses if user is typing in a text field, or pressing modifier keys (Ctrl, Alt, Meta)
    if (isEditableElement(document.activeElement)) return;
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    const key = event.key.toLowerCase();

    switch (key) {
      case 'j':
        window.scrollBy({ top: SCROLL_STEP, behavior: 'smooth' });
        event.preventDefault();
        break;
      case 'k':
        window.scrollBy({ top: -SCROLL_STEP, behavior: 'smooth' });
        event.preventDefault();
        break;
      case 'h':
        window.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
        event.preventDefault();
        break;
      case 'l':
        window.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
        event.preventDefault();
        break;
    }
  }, true);
})();