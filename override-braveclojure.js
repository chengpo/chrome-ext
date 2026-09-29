console.log("override-braveclojure.js loaded");

function attachToggleWhenSidebarExists() {
  const sidebar = document.querySelector(".sidebar");

  if (sidebar) {
    initSidebarToggle(sidebar);
    return;
  }

  // Observe DOM additions until .sidebar is created
  const observer = new MutationObserver((mutations, obs) => {
    const foundSidebar = document.querySelector(".secondary");
    if (foundSidebar) {
      initSidebarToggle(foundSidebar);
      obs.disconnect(); // Stop observing once found
    }
  });

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
  });
}

function initSidebarToggle(sidebar) {
  if (document.querySelector(".sidebar-toggle-fab")) return;

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "sidebar-toggle-fab";
  toggleBtn.innerHTML = "✕";

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    document.querySelector(".main").classList.toggle("expanded"); 
    toggleBtn.innerHTML = sidebar.classList.contains("hidden") ? "☰" : "✕";
  });

  document.body.appendChild(toggleBtn);
}

// Start observing/checking
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", attachToggleWhenSidebarExists);
} else {
  attachToggleWhenSidebarExists();
}