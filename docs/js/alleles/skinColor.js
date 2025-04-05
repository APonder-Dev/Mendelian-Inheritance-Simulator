// Main function to test offspring skin color based on parent selections
function testOffspringSkinColor() {
  const parent1SkinColor = document.getElementById("parent1-skin").value.toLowerCase();
  const parent2SkinColor = document.getElementById("parent2-skin").value.toLowerCase();
  const numberOfChildren = parseInt(document.getElementById("child-count").value) || 4;

  if (!parent1SkinColor || !parent2SkinColor) {
    alert("Please select skin colors for both parents.");
    return;
  }

  const possibleColors = getPossibleSkinColors(parent1SkinColor, parent2SkinColor);
  const offspringColors = generateOffspringColors(possibleColors, numberOfChildren);
  const averageColor = calculateAverageColor(offspringColors);
  const colorRange = calculateColorRange(offspringColors);

  displaySkinResults(offspringColors);
  updateAnalysisResults(averageColor, colorRange);
}

function updateAnalysisResults(averageColor, colorRange) {
  document.getElementById("average-result").textContent = `Average Color Index: ${averageColor}`;
  document.getElementById("range-result").textContent = `Color Range: ${colorRange.min} to ${colorRange.max} (Range: ${colorRange.range})`;
}

function getPossibleSkinColors(parent1, parent2) {
  const skinColorMap = {
    "light": ["light", "medium-light"],
    "medium-light": ["light", "medium-light", "medium"],
    "medium": ["medium-light", "medium", "medium-dark"],
    "medium-dark": ["medium", "medium-dark", "dark"],
    "dark": ["medium-dark", "dark"]
  };

  const offspringColors = new Set();
  (skinColorMap[parent1] || []).forEach(color => offspringColors.add(color));
  (skinColorMap[parent2] || []).forEach(color => offspringColors.add(color));

  return Array.from(offspringColors);
}

function generateOffspringColors(possibleColors, numberOfChildren) {
  const offspringColors = [];
  for (let i = 0; i < numberOfChildren; i++) {
    const randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    offspringColors.push(randomColor);
  }
  return offspringColors;
}

function calculateAverageColor(colors) {
  const colorValues = {
    "light": 1,
    "medium-light": 2,
    "medium": 3,
    "medium-dark": 4,
    "dark": 5
  };
  const total = colors.reduce((sum, color) => sum + (colorValues[color] || 0), 0);
  return (total / colors.length).toFixed(2);
}

function calculateColorRange(colors) {
  const colorValues = {
    "light": 1,
    "medium-light": 2,
    "medium": 3,
    "medium-dark": 4,
    "dark": 5
  };
  const values = colors.map(color => colorValues[color] || 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { min: min, max: max, range: max - min };
}

// Updated display logic to show color swatch
function displaySkinResults(offspringColors) {
  const skinResultSection = document.getElementById("results-skin");
  skinResultSection.innerHTML = '';
  offspringColors.forEach((color, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      Child ${index + 1}: ${color.charAt(0).toUpperCase() + color.slice(1)}
      <span style="display:inline-block; width:20px; height:20px; background-color: var(--${color}); border-radius:50%; margin-left:10px; vertical-align:middle;"></span>
    `;
    skinResultSection.appendChild(listItem);
  });
}

document.getElementById("calculate-skin").addEventListener("click", testOffspringSkinColor);