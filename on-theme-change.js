function onThemeChange(callback) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Helper to evaluate and pass the theme string
    const handleChange = (event) => {
        const theme = event.matches ? 'dark' : 'light';
        callback(theme);
    };

    // 1. Trigger callback immediately with the initial state
    handleChange(mediaQuery);

    // 2. Attach listener for live changes
    mediaQuery.addEventListener('change', handleChange);

    // 3. Return a clean-up function to remove the listener
    return () => {
        mediaQuery.removeEventListener('change', handleChange);
    };
}