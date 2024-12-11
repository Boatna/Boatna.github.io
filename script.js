// ข้อมูลของเครื่องปรับอากาศแต่ละชนิด
const acSpecs = {
  "CWCE13I-AF1M": { btu: 12283, power: 826 },
  "CWCE19I-AF1M": { btu: 18083, power: 1140 },
  "CWCE25I-AF1M": { btu: 24054, power: 1250 },
};

// ฟังก์ชันที่ใช้ในการอัปเดตค่า BTU และกำลังไฟฟ้าตามชนิดแอร์ที่เลือก
function updateACSpecs() {
  const acType = document.getElementById("acType").value;

  // ดึงข้อมูล BTU และกำลังไฟฟ้าตามชนิดแอร์
  const selectedAC = acSpecs[acType];

  // อัปเดตฟิลด์ BTU และกำลังไฟฟ้า
  document.getElementById("btu").value = selectedAC.btu;
  document.getElementById("power").value = selectedAC.power;
}

// ฟังก์ชันคำนวณ
function calculate() {
  // ดึงค่าจากฟอร์ม
  const btu = parseFloat(document.getElementById("btu").value);
  const numUnits = parseFloat(document.getElementById("numUnits").value);
  const acType = document.getElementById("acType").value;
  const starRatingChecked = document.getElementById("starRating").checked; // เช็คว่าได้ติ๊กดาวเบอร์ 5 หรือไม่
  const power = parseFloat(document.getElementById("power").value);

  // ตรวจสอบค่าที่ผู้ใช้กรอก
  if (isNaN(numUnits) || numUnits <= 0) {
    alert("กรุณากรอกจำนวนเครื่องปรับอากาศที่ถูกต้อง");
    return;
  }

  // คำนวณพลังงานรวมที่แอร์ทั้งหมดใช้
  const totalPower = power * numUnits;

  // คำนวณจำนวนแผงโซลาร์เซลล์ที่ใช้
  let panelsNeeded = totalPower / 300; // สมมติว่าแผงโซลาร์เซลล์หนึ่งแผงสามารถผลิตไฟฟ้าได้ 300 วัตต์
  panelsNeeded = Math.ceil(panelsNeeded); // ปัดขึ้นเพื่อให้ได้จำนวนแผงที่ต้องใช้

  // คำนวณจำนวนแผงที่ต้องใช้ถึง 100% การประหยัดไฟฟ้า
  const panelsTo100 = Math.ceil(100 * panelsNeeded / (65)); // การประหยัดไฟฟ้า 65%

  // แสดงผล
  document.getElementById("numPanels").textContent = panelsNeeded;
  document.getElementById("panelsTo100").textContent = panelsTo100;

  // แสดงผลลัพธ์
  document.getElementById("result").style.display = "block";
  
  // เก็บข้อมูลผลลัพธ์ในตัวแปรเพื่อใช้ในการดาวน์โหลด
  window.downloadData = { panelsNeeded, panelsTo100 };
}

// ฟังก์ชันสำหรับดาวน์โหลดผลลัพธ์เป็นรูป
function downloadResultAsImage() {
  if (!window.downloadData) {
    alert("กรุณาคำนวณผลลัพธ์ก่อน");
    return;
  }

  const { panelsNeeded, panelsTo100 } = window.downloadData;

  // สร้าง canvas และ context
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // ตั้งขนาด canvas ให้เหมาะสม
  canvas.width = 600;
  canvas.height = 400;

  // ตั้งพื้นหลังเป็นสีขาว
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ตั้งสีข้อความเป็นสีดำ
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";

  // วาดข้อความผลการคำนวณลงใน canvas
  ctx.fillText("ผลการคำนวณ:", 20, 30);
  ctx.fillText(`จำนวนแผงโซลาร์เซลล์ที่ใช้: ${panelsNeeded}`, 20, 70);
  ctx.fillText(`จำนวนแผงโซลาร์เซลล์ที่ใช้ถึง 100%: ${panelsTo100}`, 20, 110);

  // สร้างลิงค์ดาวน์โหลด
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png"); // แปลง canvas เป็นไฟล์ PNG
  link.download = "ผลการคำนวณ.png";  // ชื่อไฟล์ที่ผู้ใช้จะดาวน์โหลด
  link.click();
}

// เริ่มต้นการอัปเดตเมื่อโหลดหน้าเว็บ
window.onload = updateACSpecs;

// ฟังก์ชันสำหรับสลับโหมดกลางวัน-กลางคืน
function toggleDarkMode() {
  // เปลี่ยนคลาส 'dark-mode' กับ body และองค์ประกอบที่เกี่ยวข้อง
  document.body.classList.toggle('dark-mode');
  const elements = document.querySelectorAll('header h1, .form-section, .result-section, input[type="number"], select, button, .download-button button');
  elements.forEach(element => {
    element.classList.toggle('dark-mode');
  });

  // เปลี่ยนข้อความปุ่มตามโหมด
  const modeButton = document.querySelector('.mode-switch');
  if (document.body.classList.contains('dark-mode')) {
    modeButton.textContent = 'โหมดกลางวัน';
  } else {
    modeButton.textContent = 'โหมดกลางคืน';
  }
}
