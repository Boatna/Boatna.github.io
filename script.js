// Function to calculate solar panel requirements
function calculate() {
  try {
    const acType = document.getElementById('acType').value;
    const solarPanelW = parseInt(document.getElementById('solarPanelW').value) || 0;

    if (!acType || !solarPanelW) {
      throw new Error('กรุณากรอกข้อมูลทั้งหมด');
    }

    const acPowerMap = {
      'CWCE13I-AF1M': { power: 826, btu: 12283 },
      'CWCE19I-AF1M': { power: 1140, btu: 18083 },
      'CWCE25I-AF1M': { power: 1250, btu: 24054 }
    };

    const acPower = acPowerMap[acType]?.power || 0;
    const btu = acPowerMap[acType]?.btu || 0;

    // Calculate the number of solar panels required
    const numPanels = Math.ceil(acPower / solarPanelW);

    // Update the field "Number of solar panels required"
    document.getElementById('numPanels').value = numPanels;

    // Display preliminary results
    document.getElementById('acPower').textContent = acPower;
    document.getElementById('btu').textContent = btu;

    // Recalculate based on panel values
    recalculateBasedOnPanels();
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}

// Function to recalculate based on the number of panels
function recalculateBasedOnPanels() {
  try {
    const solarPanelW = parseInt(document.getElementById('solarPanelW').value) || 0;
    const numPanels = parseInt(document.getElementById('numPanels').value) || 0;
    const acType = document.getElementById('acType').value;

    if (!acType || solarPanelW <= 0 || numPanels < 0) {
      throw new Error('กรุณากรอกข้อมูลให้ถูกต้อง');
    }

    // Retrieve air conditioner power values from the map
    const acPowerMap = {
      'CWCE13I-AF1M': { power: 826, btu: 12283 },
      'CWCE19I-AF1M': { power: 1140, btu: 18083 },
      'CWCE25I-AF1M': { power: 1250, btu: 24054 }
    };

    const acPower = acPowerMap[acType]?.power || 0;

    // Calculate new data
    const totalSolarPower = solarPanelW * numPanels;
    const percentage = (totalSolarPower / acPower) * 100;
    const panelsTo100 = Math.ceil((acPower - totalSolarPower) / solarPanelW);

    // Update results in the DOM
    document.getElementById('totalSolarPower').textContent = totalSolarPower;
    document.getElementById('percentage').textContent = `${percentage.toFixed(2)}%`;
    document.getElementById('panelsTo100').textContent = panelsTo100 > 0 ? panelsTo100 : 0;
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}

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



// Snowflake animation
var flakes = 150; // Number of snowflakes
var snowContainer = document.querySelector('.snow'); // Find snow container

for (var i = 0; i < flakes; i++) {
  var flake = document.createElement('div'); // Create a div for each snowflake
  flake.classList.add('flake'); // Add 'flake' class
  var size = Math.random() * 10 + 5; // Random size for snowflake
  flake.style.width = size + 'px';
  flake.style.height = size + 'px';
  flake.style.left = Math.random() * 100 + '%'; // Random x position
  flake.style.animationDelay = Math.random() * 10 + 's'; // Random animation start time
  snowContainer.appendChild(flake); // Add snowflake to container
}
