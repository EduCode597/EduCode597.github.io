/**
 * EduCode Portfolio - Projects Module
 * Handles dynamic project card rendering, category filtering, and skill-chip highlighting.
 */

import { projectsData } from "../data/projects-data.js";

/**
 * Generates HTML string for a single project card.
 */
function createProjectCardMarkup(project) {
  const tagsHtml = project.techTags
    .map((tag) => `<span class="project-tech-tag">${tag}</span>`)
    .join("");

  const linksHtml = project.links
    .map(
      (link) => `
      <a
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="project-btn ${link.isPrimary ? "project-btn-primary" : "project-btn-secondary"}"
      >
        <i class="bi ${link.icon}"></i>
        <span>${link.label}</span>
      </a>`
    )
    .join("");

  if (project.thumb) {
    return `
      <article
        class="bento-card project-card ${project.layout}"
        data-category="${project.category}"
        data-skills="${project.skills}"
      >
        <div class="spotlight-thumb">
          <img
            src="${project.thumb}"
            alt="${project.thumbAlt || project.title}"
            loading="lazy"
          />
        </div>
        <div class="project-top-meta">
          <span class="project-category-tag">${project.categoryLabel}</span>
          <span class="project-status">${project.status}</span>
        </div>
        <h3 class="project-heading">
          <span>${project.title}</span>
        </h3>
        <p class="problem-text mb-2">${project.problemSolved}</p>
        <div class="project-tags-wrap">
          ${tagsHtml}
        </div>
        <div class="project-actions">
          ${linksHtml}
        </div>
      </article>`;
  }

  return `
    <article
      class="bento-card project-card ${project.layout}"
      data-category="${project.category}"
      data-skills="${project.skills}"
    >
      <div class="project-top-meta">
        <span class="project-category-tag">${project.categoryLabel}</span>
        <span class="project-status">${project.status}</span>
      </div>
      <h3 class="project-heading">
        <span>${project.title}</span>
      </h3>
      <div class="project-problem-box">
        <span class="problem-label">Problem Solved</span>
        <p class="problem-text">${project.problemSolved}</p>
      </div>
      <div class="project-tags-wrap">
        ${tagsHtml}
      </div>
      <div class="project-actions">
        ${linksHtml}
      </div>
    </article>`;
}

/**
 * Renders all projects into the grid and syncs category count badges.
 */
export function initProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  // 1. Render all cards
  grid.innerHTML = projectsData.map(createProjectCardMarkup).join("");

  // 2. Update category counter badges
  const countAll = document.getElementById("count-all");
  const countFrontend = document.getElementById("count-frontend");
  const countFullstack = document.getElementById("count-fullstack");
  const countAcademic = document.getElementById("count-academic");

  if (countAll) countAll.textContent = projectsData.length;
  if (countFrontend)
    countFrontend.textContent = projectsData.filter((p) => p.category === "frontend").length;
  if (countFullstack)
    countFullstack.textContent = projectsData.filter((p) => p.category === "fullstack").length;
  if (countAcademic)
    countAcademic.textContent = projectsData.filter((p) => p.category === "academic").length;

  // 3. Category Filter Tabs
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const skillChips = document.querySelectorAll(".skill-chip");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.getAttribute("data-filter");

      // Reset any active skill chips
      skillChips.forEach((c) => c.classList.remove("active-filter"));

      projectCards.forEach((card) => {
        card.classList.remove("skill-matched", "skill-dimmed");
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. Skill Chip Click-to-Highlight Logic
  skillChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const isAlreadyActive = chip.classList.contains("active-filter");
      const skillKey = chip.getAttribute("data-skill");

      // Deactivate all skill chips first
      skillChips.forEach((c) => c.classList.remove("active-filter"));

      if (isAlreadyActive) {
        // Reset project highlights
        projectCards.forEach((card) => {
          card.classList.remove("skill-matched", "skill-dimmed");
        });
        return;
      }

      chip.classList.add("active-filter");

      // Ensure 'All' filter is active so user sees all matching cards across categories
      const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
      if (allFilterBtn && !allFilterBtn.classList.contains("active")) {
        filterBtns.forEach((b) => b.classList.remove("active"));
        allFilterBtn.classList.add("active");
        projectCards.forEach((card) => (card.style.display = "flex"));
      }

      let firstMatchedCard = null;
      projectCards.forEach((card) => {
        const cardSkills = (card.getAttribute("data-skills") || "").toLowerCase();
        if (cardSkills.includes(skillKey)) {
          card.classList.add("skill-matched");
          card.classList.remove("skill-dimmed");
          card.style.display = "flex";
          if (!firstMatchedCard) firstMatchedCard = card;
        } else {
          card.classList.remove("skill-matched");
          card.classList.add("skill-dimmed");
        }
      });

      // Smooth scroll towards the first matched project if not currently in view
      if (firstMatchedCard) {
        const rect = firstMatchedCard.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          firstMatchedCard.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    });
  });
}
