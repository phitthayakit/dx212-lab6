// User Story: ในฐานะผู้ใช้ ฉันอยากเห็นรายการเมนูที่ราคาไม่เกินงบ

// ฟังก์ชันคัดกรองเมนูตามงบประมาณ
const filterMenuByBudget = (menuList, maxBudget) => {
  if (!Array.isArray(menuList) || typeof maxBudget !== 'number' || maxBudget < 0) {
    return [];
  }
  
  return menuList.filter(item => item.price <= maxBudget);
};

// ตัวอย่างข้อมูลจำลอง
const mockMenu = [
  { name: "ข้าวผัด", price: 50 },
  { name: "ก๋วยเตี๋ยว", price: 40 },
  { name: "ชาไทย", price: 35 },
  { name: "สเต๊ก", price: 150 }
];

// Console.log ทดสอบ 3 กรณี
console.log("กรณี 1 (งบ 45 บาท):", filterMenuByBudget(mockMenu, 45)); 
// คาดหวัง: ก๋วยเตี๋ยว, ชาไทย

console.log("กรณี 2 (งบ 30 บาท - ขอบล่างไม่มีเมนูถึง):", filterMenuByBudget(mockMenu, 30)); 
// คาดหวัง: []

console.log("กรณี 3 (งบติดลบ - Edge Case):", filterMenuByBudget(mockMenu, -10)); 
// คาดหวัง: []