function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer>
      <p><span>Rebox</span> © ${year}</p>
      <p>Give boxes a second life before they become waste.</p>
    </footer>
  `;
}
