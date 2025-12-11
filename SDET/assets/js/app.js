document.addEventListener("DOMContentLoaded", () => {
  // Toggle day cards
  document.querySelectorAll(".day-card__header").forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      body.classList.toggle("day-card__body--open");
    });
  });

  // Simple progress demo: count completed checkboxes
  const updateMetrics = () => {
    const completed = document.querySelectorAll("input.day-complete:checked").length;
    const total = document.querySelectorAll("input.day-complete").length;
    const metricDays = document.getElementById("metric-days-completed");
    if (metricDays) metricDays.textContent = `${completed}/${total}`;
  };

  document.querySelectorAll("input.day-complete").forEach(cb => {
    cb.addEventListener("change", updateMetrics);
  });

  updateMetrics();
});
