const currentPage = document.body.dataset.page;

document.querySelectorAll(".nav-links a").forEach((link) => {
  const page = link.getAttribute("data-page");
  if (page && page === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});
