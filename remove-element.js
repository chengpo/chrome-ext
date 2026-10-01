function removeElementInternal(selectors) {
  'use strict';

  const elements = document.querySelectorAll(selectors.join(','));

  elements.forEach((el) => {
    if (el.innerHTML.trim() !== '') {
      el.innerHTML = '';
      el.style.setProperty('opacity', '0', 'important');
      el.style.setProperty('height', '0', 'important');
      console.log("Hide element: " + el.tagName + " with id: " + el.id + " and class: " + el.className);
    }
  });
}

function removeElement(selectors) {
  'use strict';

  // Observe and remove as soon as it appears
  const observer = new MutationObserver(() => {
    removeElementInternal(selectors);
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Initial removal after 1 second    
  setTimeout(() => removeElementInternal(selectors), 1000);
}
