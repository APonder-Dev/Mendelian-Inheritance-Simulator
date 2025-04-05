document.getElementById("calculate").addEventListener("click", testOffspringEyeColor);

function testOffspringEyeColor() {
  const parent1Allele1 = document.getElementById("parent1Allele1").value.toLowerCase();
  const parent1Allele2 = document.getElementById("parent1Allele2").value.toLowerCase();
  const parent2Allele1 = document.getElementById("parent2Allele1").value.toLowerCase();
  const parent2Allele2 = document.getElementById("parent2Allele2").value.toLowerCase();
  const childCount = parseInt(document.getElementById("child-count")?.value) || 4;

  const alleles = [parent1Allele1, parent1Allele2, parent2Allele1, parent2Allele2];
  const results = {};

  for (const allele1 of alleles) {
    for (const allele2 of alleles) {
      const color = getEyeColor(allele1, allele2);
      if (color) results[color] = (results[color] || 0) + 1;
    }
  }

  displayResults(results, childCount);
}

function getEyeColor(allele1, allele2) {
  if (allele1 === 'b' || allele2 === 'b') return 'Brown Eyes';
  if (allele1 === 'g' || allele2 === 'g') return 'Green Eyes';
  if (allele1 === 'h' || allele2 === 'h') return 'Hazel Eyes';
  if (allele1 === 'l' || allele2 === 'l') return 'Blue Eyes';
  if (allele1 === 'm' || allele2 === 'm') return 'Medium Brown Eyes';
  if (allele1 === 'd' || allele2 === 'd') return 'Dark Brown Eyes';
  if (allele1 === 't' || allele2 === 't') return 'Turquoise Eyes';
  if (allele1 === 'v' || allele2 === 'v') return 'Violet Eyes';
  if (allele1 === 'a' || allele2 === 'a') return 'Amber Eyes';
  return null;
}

function displayResults(results, count) {
  const resultSection = document.getElementById("results");
  resultSection.innerHTML = '';

  const colorIndexMap = {
    'Brown Eyes': 5,
    'Medium Brown Eyes': 4,
    'Hazel Eyes': 3,
    'Green Eyes': 2,
    'Blue Eyes': 1,
    'Turquoise Eyes': 3,
    'Violet Eyes': 4,
    'Amber Eyes': 3,
    'Dark Brown Eyes': 5
  };

  const offspring = [];
  let totalColorIndex = 0;
  let minColorIndex = Infinity;
  let maxColorIndex = -Infinity;

  const colorKeys = Object.keys(results);
  for (let i = 0; i < count; i++) {
    const color = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    offspring.push(color);

    const value = colorIndexMap[color] || 0;
    totalColorIndex += value;
    minColorIndex = Math.min(minColorIndex, value);
    maxColorIndex = Math.max(maxColorIndex, value);
  }

  offspring.forEach((color, index) => {
    const spanKey = color.replace(/\s/g, '');
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `
      Child ${index + 1}: ${color}
      <span style="display:inline-block; width:20px; height:20px; background-color: var(--${spanKey}); border-radius:50%; margin-left:10px; vertical-align:middle;"></span>
    `;
    resultSection.appendChild(paragraph);
  });

  const avgParagraph = document.createElement("p");
  avgParagraph.textContent = `Average Color Index: ${(totalColorIndex / count).toFixed(2)}`;
  resultSection.appendChild(avgParagraph);

  const rangeParagraph = document.createElement("p");
  const colorRange = maxColorIndex - minColorIndex;
  rangeParagraph.textContent = `Color Range: ${minColorIndex} to ${maxColorIndex} (Range: ${colorRange})`;
  resultSection.appendChild(rangeParagraph);
}
