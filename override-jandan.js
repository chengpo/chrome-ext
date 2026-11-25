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

  document.querySelectorAll('div.row:has(> h3)').forEach((div) => {
    const h3 = div.querySelector('h3');
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
    // console.log("current theme :", theme, darkMode);

    if (theme.includes('dark') && darkMode) {
      return;
    }
    
    if (theme.includes('light') && !darkMode) {
      return;
    }
    
    // Toggle current theme   
    /*
    const selectors = ['span.header-model-btn:has(> i.bi-moon-fill)', 'span.header-model-btn:has(> i.bi-sun-fill)'];
    const themeBtn = document.querySelector(selectors.join(','));     
    if (themeBtn) {
        console.log("theme button clicked");
        themeBtn.click();
    }*/

    document.documentElement.classList.toggle(`dark-model`, theme === 'dark')
    localStorage.setItem('darkMode', String(theme === 'dark'));
    
    const themeIcon = document.querySelector('i.bi-moon-fill, i.bi-sun-fill');
    if (themeIcon) {
        themeIcon.className = (theme === 'dark') ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
  }

  onThemeChange(themeChangedListener);
})();

(function() {
  'use strict';

  localStorage.setItem('jandan:settings','{gifAutoLoad: true, treeholeDefaultAnonymous: false}');
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

(function() {
  'use strict';

    function hideRows() {
        let titles = ['周边', '订阅会员', '广告', '广告位', '煎蛋传送门', '电子书阅读器', '站务公告'];
        document.querySelectorAll('div.row:has(> h3)').forEach((div) => {
            const h3 = div.querySelector('h3');
            if (h3 && titles.includes(h3.textContent.trim())) {
                div.innerHTML = '';
            } 
        });
    }

    hideRows();

    // Observe and remove as soon as it appears
    const observer = new MutationObserver(() => {
        hideRows();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
