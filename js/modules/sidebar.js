/**
 * EduCode Portfolio - Sidebar & Navigation Module
 * Controls the floating sidebar drawer, accordion collapse/expansion,
 * keyboard accessibility, and scroll-spy context tracking.
 */

export function initSidebar() {
  const sidebar = document.getElementById("floatingSidebar");
  const toggleBtn = document.getElementById("sidebarToggleBtn");
  const closeBtn = document.getElementById("sidebarCloseBtn");
  const backdrop = document.getElementById("sidebarBackdrop");
  const accordionGroups = document.querySelectorAll(".nav-accordion-group");
  const subLinks = document.querySelectorAll(".accordion-sub-link");
  const sections = document.querySelectorAll("section[id], article[id='contact']");

  // Helper to open drawer
  function openSidebar() {
    if (sidebar && backdrop && toggleBtn) {
      sidebar.classList.add("is-open");
      backdrop.classList.add("is-active");
      toggleBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("sidebar-drawer-locked");
    }
  }

  // Helper to close drawer
  function closeSidebar() {
    if (sidebar && backdrop && toggleBtn) {
      sidebar.classList.remove("is-open");
      backdrop.classList.remove("is-active");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("sidebar-drawer-locked");
    }
  }

  // Toggle button click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (sidebar && sidebar.classList.contains("is-open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  // Backdrop overlay click
  if (backdrop) {
    backdrop.addEventListener("click", closeSidebar);
  }

  // Escape key to dismiss drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar && sidebar.classList.contains("is-open")) {
      closeSidebar();
    }
  });

  // Accordion Header Expansion / Collapse
  accordionGroups.forEach((group) => {
    const header = group.querySelector(".accordion-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isOpen = group.classList.contains("is-open");
      if (isOpen) {
        group.classList.remove("is-open");
        header.setAttribute("aria-expanded", "false");
      } else {
        group.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Close drawer on link click when in mobile/tablet mode (< 1200px)
  subLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1200) {
        closeSidebar();
      }
    });
  });

  // Enhanced Scroll-Spy for Sidebar Sub-Links & Accordions
  window.addEventListener(
    "scroll",
    () => {
      const scrollPosition = window.scrollY + 160;
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      // If scrolled to near the bottom of document, activate contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        current = "contact";
      }

      if (current) {
        // Highlight matching link
        subLinks.forEach((link) => {
          const target = link.getAttribute("data-target");
          if (target === current) {
            link.classList.add("active");
          } else if (target) {
            link.classList.remove("active");
          }
        });

        // Ensure the corresponding accordion is open so user sees current context
        const targetGroup = document.querySelector(`.nav-accordion-group[data-group="${current}"]`);
        if (targetGroup && !targetGroup.classList.contains("is-open")) {
          targetGroup.classList.add("is-open");
          const header = targetGroup.querySelector(".accordion-header");
          if (header) header.setAttribute("aria-expanded", "true");
        }
      }
    },
    { passive: true }
  );
}
