/**
 * EduCode Portfolio - Utilities Module
 * Handles copyright year, copy-to-clipboard toast, and back-to-top interaction.
 */

export function initUtils() {
  // 1. Dynamic Current Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Back to Top Button
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3. Copy Email to Clipboard with Toast Notification
  const copyBtn = document.getElementById("copyEmailBtn");
  const toast = document.getElementById("copyToast");

  if (copyBtn && toast) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.getAttribute("data-email") || "educode597@gmail.com";
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for non-HTTPS / local execution
          const textArea = document.createElement("textarea");
          textArea.value = email;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }

        // Show Toast
        toast.classList.add("show");
        setTimeout(() => {
          toast.classList.remove("show");
        }, 2800);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    });
  }
}
