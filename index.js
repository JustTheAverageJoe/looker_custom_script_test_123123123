function drawViz(data, element) {
  element.innerHTML = ''; // Clear the container

  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
  grid.style.gap = '16px';
  grid.style.padding = '16px';

  data.rows.forEach(row => {
    const [imageURL] = row.dimensions;
    const [impressions, clicks, ctr] = row.metrics;

    const card = document.createElement('div');
    card.style.border = '1px solid #ddd';
    card.style.borderRadius = '12px';
    card.style.padding = '12px';
    card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
    card.style.background = '#fff';

    const img = document.createElement('img');
    img.src = imageURL;
    img.alt = 'Ad Image';
    img.style.width = '100%';
    img.style.borderRadius = '8px';

    const metrics = document.createElement('div');
    metrics.innerHTML = `
      <p><strong>Impressions:</strong> ${impressions}</p>
      <p><strong>Clicks:</strong> ${clicks}</p>
      <p><strong>CTR:</strong> ${ctr.toFixed(2)}%</p>
    `;
    metrics.style.fontSize = '0.9em';
    metrics.style.marginTop = '8px';

    card.appendChild(img);
    card.appendChild(metrics);
    grid.appendChild(card);
  });

  element.appendChild(grid);
}
