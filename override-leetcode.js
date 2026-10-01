// Hide google ads
(function() {
    'use strict';
    
    const selectors = ['#mys-wrapper', '.adsbygoogle'];
    removeElement(selectors);
})();


// Disbale editor's auto closing feature
(function () {
    'use strict';

    const settings = {
        autoClosingBrackets: 'never',
        autoClosingQuotes: 'never',
        autoClosingDelete: 'never',
        autoClosingOvertype: 'never',
        autoSurround: 'never'
    };

    const timer = setInterval(() => {
        const monacoObj = window.monaco || (window.parent && window.parent.monaco);
        console.log("polling monaco", window.monaco);
        
        if (monacoObj) {
            // Stop the loop immediately
            clearInterval(timer);

            // Apply to any existing editor instances
            monacoObj.editor.getEditors().forEach(editor => editor.updateOptions(settings));

            // Hook into Monaco's native event for future editor instances
            monacoObj.editor.onDidCreateEditor(editor => {
                editor.updateOptions(settings);
            });

            console.log("disable auto closing brackets");
        }
    }, 500); // Checks every 500ms, usually resolves in under 1 second

    setTimeout(() => clearInterval(timer), 2000);
})();