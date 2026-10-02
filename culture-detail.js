document.addEventListener("DOMContentLoaded",()=>{
 const p=new URLSearchParams(location.search);
 const i=Number.isFinite(window.cultureCountryIndex) ? window.cultureCountryIndex : Number(p.get("country"));
 const x=cultureData[i] || cultureData[0];
 const main=document.getElementById("cultureDetail");
 if(!main)return;
 main.innerHTML=`<section class="culture-detail-hero"><a class="back-link" href="culture.html">← Back to Food Culture</a><div class="culture-detail-grid"><div class="culture-detail-image"><img src="images/${x.image}" alt="${x.country} food culture" onerror="this.style.display='none'; this.parentElement.classList.add('missing-culture-detail-image');"><div class="culture-detail-image-placeholder">Add image: <strong>${x.image}</strong></div><span>Food Culture • ${x.country}</span></div><div><p class="eyebrow">A Taste of ${x.country}</p><h1>${x.country} Food Culture</h1><p class="culture-lead">${x.tagline}</p></div></div></section><section class="culture-detail-body"><article class="culture-story"><p class="eyebrow">Cultural Story</p><h2>Food, People & Tradition</h2><p>${x.overview}</p></article><div class="culture-info-grid"><article class="culture-info-card"><span class="info-icon">🍴</span><h3>Popular Foods</h3><div class="culture-foods">${x.foods.map(f=>`<span>${f}</span>`).join('')}</div></article><article class="culture-info-card"><span class="info-icon">🌿</span><h3>Food Traditions</h3><ul>${x.traditions.map(t=>`<li>${t}</li>`).join('')}</ul></article></div></section>`;
});
