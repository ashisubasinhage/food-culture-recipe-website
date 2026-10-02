document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("cultureCountryGrid");
  if (!grid || !Array.isArray(cultureData)) return;
  grid.innerHTML = cultureData.map((c, i) => `
    <a class="culture-country-card" href="culture-${c.slug}.html">
      <div class="culture-image-wrap">
        <img src="images/${c.image}" alt="${c.country} food culture" onerror="this.style.display='none'; this.parentElement.classList.add('missing-culture-image');">
        <div class="culture-image-placeholder">Add image: <strong>${c.image}</strong></div>
        <span class="culture-card-number">${String(i+1).padStart(2,'0')}</span>
      </div>
      <div class="culture-card-body">
        <p class="culture-country-label">Food Culture • ${c.country}</p>
        <h3>${c.country}</h3>
        <p>${c.tagline}</p>
        <span class="explore-culture">Explore ${c.country} →</span>
      </div>
    </a>`).join('');
});
