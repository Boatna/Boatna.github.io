// Initialize global AC data
const acPowerMap = {
  'FWCE13I-AF1M': { power: 826, btu: 12283, condensingUnit: 'CWCE13I-CU1' },
  'FWCE19I-AF1M': { power: 1140, btu: 18083, condensingUnit: 'CWCE19I-CU1' },
  'FWCE25I-AF1M': { power: 1250, btu: 24054, condensingUnit: 'CWCE25I-CU1' },

  'FUNE13I-AF2': { power: 1041, btu: 13818, condensingUnit: 'CHBE13I-AF1R'},
  'FUNE18I-AF2': { power: 1424, btu: 18254, condensingUnit: 'CHBE18I-AF1R'},
  'FUNE24I-AF2': { power: 2003, btu: 24566, condensingUnit: 'CHBE24I-AF1R'},
  'FUNE30I-AF2': { power: 2457, btu: 30025, condensingUnit: 'CHBE30I-AF1R'},
  'FUNE30I-AF2': { power: 2822, btu: 30366, condensingUnit: 'CHBE30I-CF1R'},
  'FUNE36I-AF2': { power: 3101, btu: 36508, condensingUnit: 'CHBE36I-AF1R'},
  'FUNE36I-AF2': { power: 3487, btu: 36337, condensingUnit: 'CHBE36I-CF1R'},
  'FUNE40I-AF2': { power: 4454, btu: 40602, condensingUnit: 'CHBE40I-CF1R'},
  'FUNE40I-AF2': { power: 4021, btu: 40261, condensingUnit: 'CHBE40I-CF1R'},
  'FUNE44I-AF2': { power: 3550, btu: 44014, condensingUnit: 'CHBE44I-CF1R'},
  'FUNE48I-AF2': { power: 4058, btu: 48109, condensingUnit: 'CHBE48I-CF1R'},
  'FUNE56I-AF2': { power: 5710, btu: 56127, condensingUnit: 'CHBE56I-CF1R'},
  'FUNE60I-AF2': { power: 6540, btu: 60051, condensingUnit: 'CHBE60I-CF1R'},

  'FUNE13I-AF2': { power: 1047, btu: 13818, condensingUnit: 'CHBE13I-AF1R'},
  'FUNE18I-AF2': { power: 1430, btu: 18254, condensingUnit: 'CHBE18I-AF1R'},
  'FUNE24I-AF2': { power: 1982, btu: 24566, condensingUnit: 'CHBE24I-AF1R'},
  'FUNE30I-AF2': { power: 2437, btu: 30025, condensingUnit: 'CHBE30I-AF1R'},
  'FUNE30I-AF2': { power: 2815, btu: 30366, condensingUnit: 'CHBE30I-CF1R'},
  'FUNE36I-AF2': { power: 3125, btu: 36508, condensingUnit: 'CHBE36I-AF1R'},
  'FUNE36I-AF2': { power: 3498, btu: 36337, condensingUnit: 'CHBE36I-CF1R'},
  'FUNE40I-AF2': { power: 4449, btu: 40602, condensingUnit: 'CHBE40I-CF1R'},
  'FUNE40I-AF2': { power: 4032, btu: 40261, condensingUnit: 'CHBE40I-CF1R'},
  'FUNE44I-AF2': { power: 3560, btu: 44014, condensingUnit: 'CHBE44I-CF1R'},
  'FUNE48I-AF2': { power: 4095, btu: 48109, condensingUnit: 'CHBE48I-CF1R'},
  'FUNE56I-AF2': { power: 5720, btu: 56127, condensingUnit: 'CHBE56I-CF1R'},
  'FUNE60I-AF2': { power: 6544, btu: 60051, condensingUnit: 'CHBE60I-CF1R'},
};

// Dynamic dropdown change function
function changeDropdown(set) {
  const acType = document.getElementById('acType');
  acType.innerHTML = ''; // Clear existing options

  // Define sets of options
  const sets = {
    set1: [
      { value: '', text: '-- กรุณาเลือก --' },
      { value: 'FWCE13I-AF1M', text: 'FWCE13I-AF1M' },
      { value: 'FWCE19I-AF1M', text: 'FWCE19I-AF1M' },
      { value: 'FWCE25I-AF1M', text: 'FWCE25I-AF1M' }
    ],
    set2: [
      { value: '', text: '-- กรุณาเลือก --' },
      { value: 'FUNE13I-AF2', text: 'FUNE13I-AF2' },
      { value: 'FUNE18I-AF2', text: 'FUNE18I-AF2' },
      { value: 'FUNE24I-AF2', text: 'FUNE24I-AF2' },
      { value: 'FUNE30I-AF2', text: 'FUNE30I-AF2' },
      { value: 'FUNE36I-AF2', text: 'FUNE36I-AF2' },
      { value: 'FUNE40I-AF2', text: 'FUNE40I-AF2' },
      { value: 'FUNE44I-AF2', text: 'FUNE44I-AF2' },
      { value: 'FUNE48I-AF2', text: 'FUNE48I-AF2' },
      { value: 'FUNE56I-AF2', text: 'FUNE56I-AF2' },
      { value: 'FUNE60I-AF2', text: 'FUNE60I-AF2' }
    ],
    set3: [
      { value: '', text: '-- กรุณาเลือก --' },
      { value: 'FUNE13I-AF2', text: 'FUNE13I-AF2' },
      { value: 'FUNE18I-AF2', text: 'FUNE18I-AF2' },
      { value: 'FUNE24I-AF2', text: 'FUNE24I-AF2' },
      { value: 'FUNE30I-AF2', text: 'FUNE30I-AF2' },
      { value: 'FUNE36I-AF2', text: 'FUNE36I-AF2' },
      { value: 'FUNE40I-AF2', text: 'FUNE40I-AF2' },
      { value: 'FUNE44I-AF2', text: 'FUNE44I-AF2' },
      { value: 'FUNE48I-AF2', text: 'FUNE48I-AF2' },
      { value: 'FUNE56I-AF2', text: 'FUNE56I-AF2' },
      { value: 'FUNE60I-AF2', text: 'FUNE60I-AF2' }
    ]
  };

  // Populate dropdown with selected set
  const selectedSet = sets[set];
  selectedSet.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    acType.appendChild(opt);
  });
}

// Handle AC set change
function handleSetChange() {
  const selectedSet = document.getElementById('acSet').value;
  changeDropdown(selectedSet);
  calculate(); // Recalculate when dropdown changes
}

// Main calculation function
function calculate() {
  const acType = document.getElementById('acType').value;
  const solarPanelW = parseInt(document.getElementById('solarPanelSlider').value) || 0;

  // Validate inputs
  if (!acType || solarPanelW <= 0) {
    updateResult('กรุณากรอกข้อมูลทั้งหมด', '-', '-', '-');
    document.getElementById('condensingUnit').textContent = ''; // Clear Condensing Unit
    return;
  }

  const acData = acPowerMap[acType];
  if (!acData) {
    updateResult('ไม่พบข้อมูลแอร์ที่เลือก', '-', '-', '-');
    document.getElementById('condensingUnit').textContent = ''; // Clear Condensing Unit
    return;
  }

  const { power: acPower, btu, condensingUnit } = acData;

  // Update Condensing Unit display
  if (condensingUnit) {
    document.getElementById('condensingUnit').textContent = `CONDENSING UNIT ชุดระบายความร้อน: ${condensingUnit}`;
  } else {
    document.getElementById('condensingUnit').textContent = ''; // Clear if not available
  }

  // Calculate the minimum number of panels
  const minPanels = Math.ceil(acPower / solarPanelW);
  const maxPanels = minPanels + 2;  // Adding some flexibility for the max panels

  // Calculate the total power for both min and max number of panels
  const minTotalSolarPower = minPanels * solarPanelW;
  const maxTotalSolarPower = maxPanels * solarPanelW;

  // Format the results
  const formattedMinPanels = minPanels.toLocaleString();
  const formattedMaxPanels = maxPanels.toLocaleString();
  const formattedMinTotalSolarPower = minTotalSolarPower.toLocaleString();
  const formattedMaxTotalSolarPower = maxTotalSolarPower.toLocaleString();
  const formattedAcPower = acPower.toLocaleString();
  const formattedBTU = btu.toLocaleString();

  // Update the result section with the calculated values
  updateResult(
    `${formattedMinPanels}-${formattedMaxPanels}`,
    formattedAcPower,
    formattedBTU,
    `${formattedMinTotalSolarPower}-${formattedMaxTotalSolarPower}`
  );
}

// Update result display
function updateResult(numPanels, acPower, btu, totalSolarPower) {
  document.getElementById("numPanels").textContent = numPanels || '-';
  document.getElementById('acPower').textContent = acPower || '-';
  document.getElementById('btu').textContent = btu || '-';
  document.getElementById('totalSolarPower').textContent = totalSolarPower || '-';
}

// Initialize the script on page load
window.onload = () => {
  changeDropdown('set1'); // Load initial dropdown content and perform calculation
  const solarPanelSlider = document.getElementById('solarPanelSlider');
  solarPanelSlider.addEventListener('input', () => {
    document.getElementById('solarPanelValue').textContent = `${solarPanelSlider.value} W`;
    calculate(); // Recalculate when slider changes
  });
};
