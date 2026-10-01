// Remove google ads
(function () {
  'use strict';

  const selectors = [
    '#google-anno-sa', 
    '.google-auto-placed', 
    '#mys-wrapper', 
    '.adsbygoogle', 
    '#google-center-div', 
    '#ad_iframe', 
    '.ad-title'];

  removeElement(selectors);

  document.querySelectorAll('div:has(> h3)').forEach((div) => {
    const h3 = div.querySelector(':scope > h3');
    if (h3 && h3.textContent.trim() === '广告') {
      div.innerHTML = '';
    }
  });
})();

// Auto load gifs
(function () {
  'use strict';

  function loadGifsInternal() {
    const selectors = ['.gif-overlay', '.gif-mask', '.show_more'];

    document.querySelectorAll(selectors.join(',')).forEach((el) => {
      if (el.dataset.extClicked === 'true') {
        return;
      }
      
      el.dataset.extClicked = 'true';
      el.click();

      console.log("Click gif overlay: " + el.tagName + " with id: " + el.id + " and class: " + el.className);
    });
  }

  // Observe and remove as soon as it appears
  const observer = new MutationObserver(() => {
    loadGifsInternal();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();

// Sync dark / light mode
(function () {
  'use strict';

  function themeChangedListener(theme) {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const selectors = [ 'span.header-model-btn:has(> i.bi-brightness-high)','span.header-model-btn:has(> i.bi-moon-fill)'];

    const themeBtn = document.querySelector(selectors.join(','));     
    console.log("current theme : ", theme, darkMode, themeBtn);

    if (theme === 'dark' && darkMode) {
      return;
    }
    
    if (theme === 'light' && !darkMode) {
      return;
    }
    
    // Toggle current theme   
    if (themeBtn) {
      themeBtn.click();
    }
  }

  onThemeChange(themeChangedListener);
})();

(function() {
  'use strict';

  localStorage.setItem('jandan:settings','{gifAutoLoad: true, treeholeDefaultAnonymous: false, cdnLine: "0"}');
})();

(function() {
  'use strict';

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
      case 'n':
        const navNext = document.querySelector('.nav-next>a');
        if (navNext) {
          navNext.click();
        }
        break;
      case 'p':
        const navPrev = document.querySelector('.nav-prev>a');
        if (navPrev) {
          navPrev.click();
        }
        break;
    }
  });
})();