// ฟังก์ชันคำนวณ
function calculate() {
  try {
    const acType = document.getElementById('acType').value;
    const solarPanelW = parseInt(document.getElementById('solarPanelSlider').value) || 0;

    // ตรวจสอบการกรอกข้อมูล
    if (!acType || solarPanelW <= 0) {
      document.getElementById('numPanels').value = 'กรุณากรอกข้อมูลทั้งหมด';
      return;
    }

    // แผนที่พลังงานเครื่องปรับอากาศ
    const acPowerMap = {
      'CWCE13I-AF1M': { power: 826, btu: 12283 },
      'CWCE19I-AF1M': { power: 1140, btu: 18083 },
      'CWCE25I-AF1M': { power: 1250, btu: 24054 }
    };

    const acPower = acPowerMap[acType]?.power || 0;
    const btu = acPowerMap[acType]?.btu || 0;

    if (acPower === 0) {
      document.getElementById('numPanels').value = 'ไม่พบข้อมูลแอร์ที่เลือก';
      return;
    }

    // คำนวณจำนวนแผงโซลาร์เซลล์ที่ต้องการ
    const numPanels = Math.ceil(acPower / solarPanelW);

    // อัปเดตผลลัพธ์
    document.getElementById('numPanels').value = numPanels;
    document.getElementById('acPower').textContent = acPower;
    document.getElementById('btu').textContent = btu;

    // คำนวณตามแผงโซลาร์เซลล์ที่เลือก
    recalculateBasedOnPanels();
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}

// ฟังก์ชันคำนวณตามจำนวนแผง
function recalculateBasedOnPanels() {
  try {
    const solarPanelW = parseInt(document.getElementById('solarPanelSlider').value) || 0;
    const numPanels = parseInt(document.getElementById('numPanels').value) || 0;
    const acType = document.getElementById('acType').value;

    if (!acType || solarPanelW <= 0 || numPanels <= 0) {
      document.getElementById('totalSolarPower').textContent = 'กรุณากรอกข้อมูลให้ถูกต้อง';
      return;
    }

    // แผนที่พลังงานเครื่องปรับอากาศ
    const acPowerMap = {
      'CWCE13I-AF1M': { power: 826 },
      'CWCE19I-AF1M': { power: 1140 },
      'CWCE25I-AF1M': { power: 1250 }
    };

    const acPower = acPowerMap[acType]?.power || 0;

    if (acPower === 0) {
      document.getElementById('totalSolarPower').textContent = 'ไม่พบข้อมูลแอร์ที่เลือก';
      return;
    }

    // คำนวณพลังงานทั้งหมดจากแผงโซลาร์เซลล์
    const totalSolarPower = solarPanelW * numPanels;
    const percentage = (totalSolarPower / acPower) * 100;
    const panelsTo100 = Math.ceil((acPower - totalSolarPower) / solarPanelW);

    // อัปเดตค่าผลลัพธ์
    document.getElementById('totalSolarPower').textContent = totalSolarPower;
    document.getElementById('percentage').textContent = `${percentage.toFixed(2)}%`;
    document.getElementById('panelsTo100').textContent = panelsTo100 > 0 ? panelsTo100 : 0;
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}

// ฟังก์ชันดาวน์โหลดผลลัพธ์เป็นภาพ
function downloadResultAsImage() {
  const resultSection = document.getElementById("result");

  if (!resultSection) {
    alert("ไม่พบองค์ประกอบที่ต้องการดาวน์โหลด!");
    return;
  }

  html2canvas(resultSection).then(function (canvas) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "calculation_result.png";
    link.click();
  }).catch(function (error) {
    console.error("เกิดข้อผิดพลาดในการดาวน์โหลดรูปภาพ:", error);
    alert("ไม่สามารถสร้างและดาวน์โหลดภาพได้!");
  });
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
