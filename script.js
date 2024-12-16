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
  // Define sets of options
  const sets = {
    set1: [
      { value: '', text: '-- กรุณาเลือก --' },
      { value: 'FWCE13I-AF1M', text: 'FWCE13I-AF1M' },
      { value: 'FWCE19I-AF1M', text: 'FWCE19I-AF1M' },
      { value: 'FWCE25I-AF1M', text: 'FWCE25I-AF1M' },
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
      { value: 'FUNE60I-AF2', text: 'FUNE60I-AF2' },
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
      { value: 'FUNE60I-AF2', text: 'FUNE60I-AF2' },
    ]
  };

// ฟังก์ชันเปลี่ยนตัวเลือกใน dropdown ของ acType
function changeDropdown(set) {
  const acType = document.getElementById('acType');
  acType.innerHTML = ''; // ลบตัวเลือกเก่า

  const selectedSet = sets[set];
  selectedSet.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    acType.appendChild(opt);
  });

  calculate(); // เรียกใช้ฟังก์ชันคำนวณใหม่เมื่อมีการเปลี่ยนตัวเลือก
}

// ฟังก์ชันที่ทำงานเมื่อเลือกชุดแอร์
function handleSetChange() {
  const selectedSet = document.getElementById('acSystemType').value;
  changeDropdown(selectedSet);
}

// Function to handle AC model selection
function calculate() {
  const selectedModel = document.getElementById("acType").value;

  // Get the selected AC unit data from the map
  const acData = acPowerMap[selectedModel];
  
  // Get the selected solar panel power from the slider
  const solarPanelPower = parseInt(document.getElementById('solarPanelSlider').value); // ค่าจากสไลเดอร์

  let numPanels = 0;
  let acPower = 0;
  let btu = 0;
  let totalSolarPower = 0;
  let savingPercentage = 0;

  if (acData) {
    // คำนวณพลังงานที่แอร์ใช้
    acPower = acData.power;
    btu = acData.btu;

    // คำนวณจำนวนแผงที่ต้องใช้
    numPanels = Math.ceil(acPower / solarPanelPower); // คำนวณจำนวนแผงที่ต้องใช้จากค่าพลังงานที่แผงผลิตได้

    // คำนวณการประหยัดพลังงาน
    totalSolarPower = numPanels * solarPanelPower;
    savingPercentage = ((totalSolarPower - acPower) / totalSolarPower) * 100;
  } else {
    // ถ้าไม่ได้เลือกแอร์ ให้แสดงค่าเป็น 0
    acPower = 0;
    btu = 0;
    totalSolarPower = 0;
    savingPercentage = 0;
  }

  // แสดงผลลัพธ์
  updateResult(numPanels, acPower, btu, totalSolarPower, savingPercentage);
}

// Event listener for AC model selection change
document.getElementById("acType").addEventListener("change", calculate);

// Event listener for solar panel slider change
document.getElementById('solarPanelSlider').addEventListener('input', () => {
  document.getElementById('solarPanelValue').textContent = `${document.getElementById('solarPanelSlider').value} W`;
  calculate(); // คำนวณใหม่เมื่อมีการเปลี่ยนค่า slider
});

// Update result display
function updateResult(numPanels, acPower, btu, totalSolarPower, savingPercentage) {
  document.getElementById("numPanels").textContent = numPanels || '0';
  document.getElementById('acPower').textContent = acPower || '0';
  document.getElementById('btu').textContent = btu || '0';
  document.getElementById('totalSolarPower').textContent = totalSolarPower || '0';
  document.getElementById('savingPercentage').textContent = savingPercentage ? `ประหยัดไฟ: ${savingPercentage.toFixed(2)}%` : 'ประหยัดไฟ: 0%';
}

// เริ่มต้นเมื่อโหลดหน้า
window.onload = () => {
  changeDropdown('set1'); // โหลดข้อมูลชุดแอร์เริ่มต้น
  calculate(); // คำนวณค่าเริ่มต้นเมื่อโหลดหน้า
};
