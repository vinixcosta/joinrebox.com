// Main app that renders all components
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNav()}
    ${renderHero()}
    ${renderWaitlist()}
    ${renderHowItWorks()}
    ${renderImpact()}
    ${renderMission()}
    ${renderFooter()}
  `;
});
