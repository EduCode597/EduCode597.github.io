/**
 * EduCode Portfolio - Main Application Entry
 * Orchestrates modules for sidebar, projects grid, and page utilities.
 */

import { initSidebar } from "./modules/sidebar.js";
import { initProjects } from "./modules/projects.js";
import { initUtils } from "./modules/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initProjects();
  initUtils();
});
