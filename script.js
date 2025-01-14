// กำหนดข้อมูล AC ทั้งหมด
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
  
  'FIDE13I-AF2': { power: 1045, btu: 13818, condensingUnit: 'CHBE13I-AF1R'},
  'FIDE18I-AF2': { power: 1425, btu: 18254, condensingUnit: 'CHBE18I-AF1R'},
  'FIDE24I-AF2': { power: 1978, btu: 24566, condensingUnit: 'CHBE24I-AF1R'},
  'FIDE30I-AF2': { power: 2447, btu: 30025, condensingUnit: 'CHBE30I-AF1R'},
  'FIDE30I-AF2': { power: 2805, btu: 30366, condensingUnit: 'CHBE30I-CF1R'},
  'FIDE36I-AF2': { power: 3111, btu: 36508, condensingUnit: 'CHBE36I-AF1R'},
  'FIDE36I-AF2': { power: 3493, btu: 36337, condensingUnit: 'CHBE36I-CF1R'},
  'FIDE40I-AF2': { power: 4438, btu: 40602, condensingUnit: 'CHBE40I-AF1R'},
  'FIDE40I-AF2': { power: 4030, btu: 40261, condensingUnit: 'CHBE40I-CF1R'},
  'FIDE44I-AF2': { power: 3555, btu: 44014, condensingUnit: 'CHBE44I-CF1R'},
  'FIDE48I-AF2': { power: 4090, btu: 48109, condensingUnit: 'CHBE48I-CF1R'},
  'FIDE56I-AF2': { power: 5715, btu: 56127, condensingUnit: 'CHBE56I-CF1R'},
  'FIDE60I-AF2': { power: 6545, btu: 60051, condensingUnit: 'CHBE60I-CF1R'},
};

// สลับระหว่างโหมดกลางวันและกลางคืน
function toggleDayNight() {
  document.body.classList.toggle('night-mode');
}


// ฟังก์ชันสำหรับการเปลี่ยนแปลงตัวเลือกใน Dropdown
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
    ],
    set4: [
      { value: '', text: '-- กรุณาเลือก --' },
      { value: 'FIDE13I-AF2', text: 'FIDE13I-AF2' },
      { value: 'FIDE18I-AF2', text: 'FIDE18I-AF2' },
      { value: 'FIDE24I-AF2', text: 'FIDE24I-AF2' },
      { value: 'FIDE30I-AF2', text: 'FIDE30I-AF2' },
      { value: 'FIDE30I-AF2', text: 'FIDE30I-AF2' },
      { value: 'FIDE36I-AF2', text: 'FIDE36I-AF2' },
      { value: 'FIDE40I-AF2', text: 'FIDE40I-AF2' },
      { value: 'FIDE40I-AF2', text: 'FIDE40I-AF2' },
      { value: 'FIDE44I-AF2', text: 'FIDE44I-AF2' },
      { value: 'FIDE48I-AF2', text: 'FIDE48I-AF2' },
      { value: 'FIDE56I-AF2', text: 'FIDE56I-AF2' },
      { value: 'FIDE60I-AF2', text: 'FIDE60I-AF2' },
    ],
  };

// ฟังก์ชันสำหรับเปลี่ยนตัวเลือกใน dropdown ตามเซ็ตที่เลือก
function changeDropdown(set) {
  const acType = document.getElementById('acType');
  acType.innerHTML = '';// ลบตัวเลือกเก่าออก

  const selectedSet = sets[set];
  selectedSet.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.text;
    acType.appendChild(opt);
  });

  calculate(); // คำนวณใหม่เมื่อเลือก dropdown เปลี่ยน
}

// ตัวจับเหตุการณ์สำหรับการเปลี่ยนแปลงประเภทของระบบ AC
function handleSetChange() {
  const selectedSet = document.getElementById('acSystemType').value;
  changeDropdown(selectedSet);
}

// ฟังก์ชันคำนวณพลังงานและจำนวนแผงโซลาร์เซลล์ที่จำเป็น
function calculate() {
  const selectedModel = document.getElementById("acType").value;

  // ดึงข้อมูลจากแผนที่ของ AC
  const acData = acPowerMap[selectedModel];
  
   // ดึงค่าพลังงานแผงโซลาร์เซลล์จากสไลเดอร์
  const solarPanelPower = parseInt(document.getElementById('solarPanelSlider').value);

  let minPanels = 0;
  let maxPanels = 0;
  let acPower = 0;
  let btu = 0;
  let totalSolarPower = 0;
  let savingPercentage = 0;
  let condensingUnit = ''; // ตัวแปรสำหรับเก็บข้อมูล condensing unit

  // คำนวณพลังงานและจำนวนแผงโซลาร์เซลล์ที่ต้องการ
  if (acData) {
    acPower = acData.power;
    btu = acData.btu;

    minPanels = Math.ceil(acPower / solarPanelPower);
    maxPanels = Math.ceil((acPower + solarPanelPower - 1) / solarPanelPower);

    totalSolarPower = maxPanels * solarPanelPower;
    savingPercentage = ((totalSolarPower - acPower) / totalSolarPower) * 100;

    condensingUnit = acData.condensingUnit; // ดึงข้อมูล condensing unit ของรุ่นที่เลือก
  } else {
    // ถ้าไม่ได้เลือก AC จะแสดงค่า 0
    acPower = 0;
    btu = 0;
    totalSolarPower = 0;
    savingPercentage = 0;
    condensingUnit = ''; // รีเซ็ตหากไม่มีข้อมูล
  }

  //แสดงผลลัพธ์ที่คำนวณ
  updateResult(minPanels, maxPanels, acPower, btu, totalSolarPower, savingPercentage);

  // แสดงหน่วยคอนเดนซิ่งใน div ที่เกี่ยวข้อง
  document.getElementById('condensingUnit').textContent = condensingUnit ? `Condensing Unit: ${condensingUnit}` : '';
}

// การตั้งค่า Event Listener สำหรับการเลือกโมเดลเครื่องปรับอากาศ (AC)
document.getElementById("acType").addEventListener("change", calculate);

// การตั้งค่า Event Listener สำหรับการเปลี่ยนแปลงของสไลด์เดอร์แผงโซลาร์เซลล์
document.getElementById('solarPanelSlider').addEventListener('input', () => {
  document.getElementById('solarPanelValue').textContent = `${document.getElementById('solarPanelSlider').value} W`;
  calculate();
});

// อัพเดตผลลัพธ์ที่หน้าจอ
function updateResult(minPanels, maxPanels, acPower, btu, totalSolarPower, savingPercentage) {
  document.getElementById("numPanels").textContent = `${minPanels}-${maxPanels} (แผ่น)`;
  document.getElementById('acPower').textContent = acPower || '0';
  document.getElementById('btu').textContent = btu || '0';
  document.getElementById('totalSolarPower').textContent = totalSolarPower || '0';
  document.getElementById('savingPercentage').textContent = savingPercentage.toFixed(2) + '%';
}
// คำนวณค่าเริ่มต้น
window.onload = () => {
  changeDropdown('set1');
  calculate();
};
