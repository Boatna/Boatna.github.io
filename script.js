// script.js

function calculate() {
  const acType = document.getElementById('acType').value;
  const numUnits = parseInt(document.getElementById('numUnits').value) || 0;
  const solarPanelW = parseInt(document.getElementById('solarPanelW').value) || 0;

  // Define air conditioner power consumption based on type
  const acPowerMap = {
    'CWCE13I-AF1M': { power: 826, btu: 12283 },
    'CWCE19I-AF1M': { power: 1140, btu: 18083 },
    'CWCE25I-AF1M': { power: 1250, btu: 24054 }
  };

  // Calculate AC power consumption and total BTU
  const acPower = acPowerMap[acType]?.power || 0;
  const totalAcPower = acPower * numUnits;
  const btu = acPowerMap[acType]?.btu * numUnits || 0;

  // Calculate the number of solar panels needed
  const numPanels = solarPanelW > 0 ? Math.ceil(totalAcPower / solarPanelW) : 0;
  const totalSolarPower = solarPanelW * numPanels;

  // Calculate panels needed for 100% efficiency up to 650W per panel
  const panelsTo100 = totalAcPower > 0 ? Math.ceil(totalAcPower / 650) : 0;

  // Display the results
  document.getElementById('acPower').textContent = totalAcPower || '0';
  document.getElementById('btu').textContent = btu || '0';
  document.getElementById('numPanels').textContent = numPanels || '0';
  document.getElementById('totalSolarPower').textContent = totalSolarPower || '0';
  document.getElementById('panelsTo100').textContent = panelsTo100 || '0';
}

function downloadResultAsImage() {
  const resultSection = document.querySelector('.result-section');
  html2canvas(resultSection).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'calculation-result.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
