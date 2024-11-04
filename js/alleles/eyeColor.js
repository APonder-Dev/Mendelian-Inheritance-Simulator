function testOffspringEyeColor() {
  const parent1Allele1 = document.getElementById("parent1Allele1").value.toLowerCase();
  const parent1Allele2 = document.getElementById("parent1Allele2").value.toLowerCase();
  const parent2Allele1 = document.getElementById("parent2Allele1").value.toLowerCase();
  const parent2Allele2 = document.getElementById("parent2Allele2").value.toLowerCase();
  
  const alleles = [parent1Allele1, parent1Allele2, parent2Allele1, parent2Allele2];
  const results = {};

  // Possible combinations based on simplified inheritance
  for (const allele1 of alleles) {
      for (const allele2 of alleles) {
          const color = getEyeColor(allele1, allele2);
          if (color) {
              results[color] = (results[color] || 0) + 1;
          }
      }
  }

  displayResults(results);
}

function getEyeColor(allele1, allele2) {
  // Determine eye color based on allele combinations
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

function displayResults(results) {
  const resultSection = document.getElementById("results");
  resultSection.innerHTML = ''; // Clear previous results

  const offspring = []; // Array to hold offspring eye colors
  const offspringCount = 4; // We want to generate exactly 4 offspring
  let totalColorIndex = 0; // To calculate the average
  let minColorIndex = Infinity; // For the minimum color index
  let maxColorIndex = -Infinity; // For the maximum color index

  // Map eye colors to color indices for averaging
  const colorIndexMap = {
      'Brown Eyes': 5,
      'Medium Brown Eyes': 4,
      'Hazel Eyes': 3,
      'Green Eyes': 2,
      'Blue Eyes': 1,
      'Turquoise Eyes': 3,
      'Violet Eyes': 4,
      'Amber Eyes': 3,
  };

  // Generate exactly 4 offspring colors from results
  for (let i = 0; i < offspringCount; i++) {
      const colorKeys = Object.keys(results);
      const randomColor = colorKeys[Math.floor(Math.random() * colorKeys.length)];
      offspring.push(randomColor);
      totalColorIndex += colorIndexMap[randomColor];
      minColorIndex = Math.min(minColorIndex, colorIndexMap[randomColor]);
      maxColorIndex = Math.max(maxColorIndex, colorIndexMap[randomColor]);
  }

  // Calculate average color index
  const averageColorIndex = totalColorIndex / offspringCount;

  // Display offspring results
  offspring.forEach((color, index) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = `Child ${index + 1}: ${color}`;
      resultSection.appendChild(paragraph);
  });

  // Display average color index and range
  const avgParagraph = document.createElement("p");
  avgParagraph.textContent = `Average Color Index: ${averageColorIndex.toFixed(2)}`;
  resultSection.appendChild(avgParagraph);

  const rangeParagraph = document.createElement("p");
  const colorRange = maxColorIndex - minColorIndex;
  rangeParagraph.textContent = `Color Range: ${minColorIndex} to ${maxColorIndex} (Range: ${colorRange})`;
  resultSection.appendChild(rangeParagraph);
}

// Attach event listener to the button to trigger eye color testing
document.getElementById("calculate").addEventListener("click", testOffspringEyeColor);
