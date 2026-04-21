function renderHowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'List extra boxes fast',
      desc: 'Snap a photo, choose size and condition, and post a bundle in under a minute.'
    },
    {
      num: 2,
      title: 'Match with nearby neighbors',
      desc: 'See available boxes close to you so pickup is easy and convenient instead of a whole errand.'
    },
    {
      num: 3,
      title: 'Pick up and reuse',
      desc: 'Claim a listing, coordinate pickup, and put perfectly usable boxes back to work.'
    }
  ];

  const stepsHTML = steps.map(step => `
    <div class="step">
      <div class="step-num">${step.num}</div>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </div>
  `).join('');

  return `
    <section class="how" id="how-it-works">
      <p class="eyebrow">How it works</p>
      <h2>Built to make reuse feel easier than throwing boxes away.</h2>
      <div class="steps">
        ${stepsHTML}
      </div>
      <div class="how-banner">
        <strong>For movers, retailers, offices, and neighbors</strong>
        <span>One simple habit can keep a surprising amount of cardboard in circulation.</span>
      </div>
    </section>
  `;
}
