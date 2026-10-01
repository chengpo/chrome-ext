(function () {
  const selectors = ['#google-anno-sa', '.google-auto-placed', '#mys-wrapper', ".adsbygoogle", "#google-center-div", "#ad_iframe"];
  removeElement(selectors);

  document.querySelectorAll('div:has(> h3)').forEach((div) => {
    h3 = div.querySelector(':scope > h3');
    if (h3 && h3.textContent.trim() === '广告') {
      div.innerHTML = '';
    }
  });

  function loadGifsInternal() {
    document.querySelectorAll('.gif-overlay').forEach((el) => {
      if (el.dataset.extClicked === 'true') {
        return;
      }
      el.click();
      el.dataset.extClicked = 'true';
      console.log("Click gif overlay: " + el.tagName + " with id: " + el.id + " and class: " + el.className);
    });
  }

  function loadGifs() {
    // Observe and remove as soon as it appears
    const observer = new MutationObserver(() => {
      loadGifsInternal();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  loadGifs();
})();