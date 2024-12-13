// ฟังก์ชันคำนวณ
function calculate() {
  try {
    const acType = document.getElementById('acType').value;
    const solarPanelW = parseInt(document.getElementById('solarPanelSlider').value) || 0;

    // ตรวจสอบการกรอกข้อมูล
    if (!acType || solarPanelW <= 0) {
      updateResult('กรุณากรอกข้อมูลทั้งหมด', 0, 0);
      return;
    }

    // แผนที่พลังงานเครื่องปรับอากาศ
    const acPowerMap = {
      'CWCE13I-AF1M': { power: 826, btu: 12283 },
      'CWCE19I-AF1M': { power: 1140, btu: 18083 },
      'CWCE25I-AF1M': { power: 1250, btu: 24054 }
    };

    const acData = acPowerMap[acType];
    if (!acData) {
      updateResult('ไม่พบข้อมูลแอร์ที่เลือก', 0, 0);
      return;
    }

    const { power: acPower, btu } = acData;

    // คำนวณจำนวนแผงโซลาร์เซลล์ที่ต้องการ
    const numPanels = Math.ceil(acPower / solarPanelW);

    // อัปเดตผลลัพธ์
    updateResult(numPanels, acPower, btu);
    recalculateBasedOnPanels();
  } catch (error) {
    console.error(error.message);
    alert('เกิดข้อผิดพลาด: ' + error.message);
  }
}

// ฟังก์ชันอัปเดตผลลัพธ์
function updateResult(numPanels, acPower, btu) {
  const resultMessage = typeof numPanels === 'string' ? numPanels : '';
  document.getElementById('numPanels').value = resultMessage || numPanels;
  document.getElementById('acPower').textContent = acPower || '-';
  document.getElementById('btu').textContent = btu || '-';
}

// ฟังก์ชันคำนวณตามจำนวนแผง
function recalculateBasedOnPanels() {
  try {
    const solarPanelW = parseInt(document.getElementById('solarPanelSlider').value) || 0;
    const numPanels = parseInt(document.getElementById('numPanels').value) || 0;
    const acType = document.getElementById('acType').value;

    if (!acType || solarPanelW <= 0 || numPanels <= 0) {
      updateSolarCalculation('กรุณากรอกข้อมูลให้ถูกต้อง', 0, 0);
      return;
    }

    const acPowerMap = {
      'CWCE13I-AF1M': { power: 826 },
      'CWCE19I-AF1M': { power: 1140 },
      'CWCE25I-AF1M': { power: 1250 }
    };

    const acPower = acPowerMap[acType]?.power || 0;
    if (acPower === 0) {
      updateSolarCalculation('ไม่พบข้อมูลแอร์ที่เลือก', 0, 0);
      return;
    }

    // คำนวณพลังงานทั้งหมดจากแผงโซลาร์เซลล์
    const totalSolarPower = solarPanelW * numPanels;

    // อัปเดตค่าผลลัพธ์
    updateSolarCalculation(totalSolarPower);
  } catch (error) {
    console.error(error.message);
    alert('เกิดข้อผิดพลาด: ' + error.message);
  }
}

// ฟังก์ชันอัปเดตผลลัพธ์คำนวณแผง
function updateSolarCalculation(totalSolarPower) {
  document.getElementById('totalSolarPower').textContent = totalSolarPower || '-';
}

// ฟังก์ชันปรับค่าขนาดแผงโซลาร์เซลล์ตามแถบเลื่อน
document.getElementById('solarPanelSlider').addEventListener('input', function () {
  const solarPanelValue = document.getElementById('solarPanelValue');
  const solarPanelSlider = document.getElementById('solarPanelSlider');
  solarPanelValue.textContent = solarPanelSlider.value + ' W';
  calculate();
});

// เรียกฟังก์ชันคำนวณทันทีเมื่อโหลดหน้าเว็บหรือเลือกแอร์
window.onload = calculate;
document.getElementById('acType').addEventListener('change', calculate);