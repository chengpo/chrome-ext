(function () {
    'use strict';

    const selectors = ['g1-dynamic-upsell-button'];

    // Observe and remove as soon as it appears
    const observer = new MutationObserver(() => {
        document.querySelectorAll(selectors.join(',')).forEach((el) => {
            if (el.style.display !== 'none') {
                el.style.setProperty('display', 'none', 'important');
                console.log("Hide element: " + el.tagName + " with id: " + el.id + " and class: " + el.className);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();