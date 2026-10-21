(function () {
  'use strict';

  function formatCode() {
    const playerContainer = document.querySelector('div#player-container');

      if (playerContainer != null) {
          playerContainer.querySelectorAll('iframe').forEach((iframe) => {
              iframe.contentDocument.querySelectorAll('pre.programlisting').forEach((codeBlock) => {
                   console.log("Original code: " + codeBlock.innerText); 
                   try { 
                    const formatted = js_beautify(codeBlock.innerText);                
                    console.log("Formatted code: " + formatted);
                    codeBlock.innerText = formatted;
                   } catch(error) {
                    console.error(error.message);
                   }
              });
          });
      }
  }

  // Observe and remove as soon as it appears
  const observer = new MutationObserver(() => {
    formatCode();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
