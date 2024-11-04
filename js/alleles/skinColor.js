// Main function to test offspring skin color based on parent selections
function testOffspringSkinColor() {
  const parent1SkinColor = document.getElementById("parent1-skin").value.toLowerCase();
  const parent2SkinColor = document.getElementById("parent2-skin").value.toLowerCase();

  // Validate selections
  if (!parent1SkinColor || !parent2SkinColor) {
      alert("Please select skin colors for both parents.");
      return;
  }

  // Determine possible offspring skin colors based on parent skin colors
  const possibleColors = getPossibleSkinColors(parent1SkinColor, parent2SkinColor);

  // Generate offspring skin colors and calculate average and range
  const numberOfChildren = 4; // You can change this value to simulate more children
  const offspringColors = generateOffspringColors(possibleColors, numberOfChildren);
  const averageColor = calculateAverageColor(offspringColors);
  const colorRange = calculateColorRange(offspringColors);

  // Display the results
  displaySkinResults(offspringColors);
  updateAnalysisResults(averageColor, colorRange);
}

// Function to update the analysis results in the HTML
function updateAnalysisResults(averageColor, colorRange) {
  const averageParagraph = document.getElementById("average-result");
  averageParagraph.textContent = `Average Color Index: ${averageColor}`;

  const rangeParagraph = document.getElementById("range-result");
  rangeParagraph.textContent = `Color Range: ${colorRange.min} to ${colorRange.max} (Range: ${colorRange.range})`;
}

// Function to get possible skin colors based on parents' colors
function getPossibleSkinColors(parent1, parent2) {
  const skinColorMap = {
      "light": ["light", "medium-light"],
      "medium-light": ["light", "medium-light", "medium"],
      "medium": ["medium-light", "medium", "medium-dark"],
      "medium-dark": ["medium", "medium-dark", "dark"],
      "dark": ["medium-dark", "dark"]
  };

  const offspringColors = new Set(); // Using a Set to avoid duplicates

  // Get possible offspring colors from the skin color map
  const parent1Colors = skinColorMap[parent1] || [];
  const parent2Colors = skinColorMap[parent2] || [];

  // Combine parent skin colors to find possible offspring
  parent1Colors.forEach(color => offspringColors.add(color));
  parent2Colors.forEach(color => offspringColors.add(color));

  return Array.from(offspringColors); // Return as an array
}

// Function to generate offspring colors based on possible colors
function generateOffspringColors(possibleColors, numberOfChildren) {
  const offspringColors = [];
  for (let i = 0; i < numberOfChildren; i++) {
      const randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];
      offspringColors.push(randomColor);
  }
  return offspringColors;
}

// Function to calculate average skin color (for simplicity, use index for averaging)
function calculateAverageColor(colors) {
  const colorValues = {
      "light": 1,
      "medium-light": 2,
      "medium": 3,
      "medium-dark": 4,
      "dark": 5
  };

  const total = colors.reduce((sum, color) => sum + (colorValues[color] || 0), 0);
  return (total / colors.length).toFixed(2); // Round to two decimal places
}

// Function to calculate the range of skin colors based on their values
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
  return { min: min, max: max, range: (max - min) };
}

// Function to display the results in the HTML
function displaySkinResults(offspringColors) {
  const skinResultSection = document.getElementById("results-skin");
  skinResultSection.innerHTML = ''; // Clear previous results

  // Display each offspring color
  offspringColors.forEach((color, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Child ${index + 1}: ${color.charAt(0).toUpperCase() + color.slice(1)}`;
      skinResultSection.appendChild(listItem);
  });
}

// Attach event listener to the button to trigger skin color testing
document.getElementById("calculate-skin").addEventListener("click", testOffspringSkinColor);
