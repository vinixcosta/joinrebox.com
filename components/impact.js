function renderImpact() {
  const stats = [
    { num: '1.2M', label: 'tons of cardboard generated globally each year' },
    { num: '0', label: 'dollars needed to share a usable box' },
    { num: '2kg', label: 'estimated CO2 savings from reusing one medium box bundle' }
  ];

  const statsHTML = stats.map(stat => `
    <div class="stat">
      <div class="stat-num">${stat.num}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  return `
    <section class="impact" id="impact">
      <p class="eyebrow eyebrow-light">Why it matters</p>
      <h2>Every reused box saves time, money, and material that would otherwise be wasted.</h2>
      <div class="stats">
        ${statsHTML}
      </div>
      <blockquote class="impact-quote">
        “The best packaging footprint is the one we never have to remake.”
      </blockquote>
    </section>
  `;
}
