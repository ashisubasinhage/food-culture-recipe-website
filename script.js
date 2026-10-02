document.addEventListener("DOMContentLoaded", () => {
  function setupSearch(inputId, cardSelector) {
    const input = document.getElementById(inputId);
    const cards = document.querySelectorAll(cardSelector);
    if (!input) return;

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();

      cards.forEach(card => {
        const searchableText = card.textContent.toLowerCase();
        card.style.display = searchableText.includes(query) ? "" : "none";
      });
    });
  }

  setupSearch("recipeSearch", ".recipe-card");
  setupSearch("methodSearch", ".method-card");
});
