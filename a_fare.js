// ฟังก์ชันคำนวณค่ารถ NGV มหาวิทยาลัย
const calcFare = (distanceKm) => {
  if (typeof distanceKm !== 'number' || distanceKm <= 0) return 0;

  if (distanceKm <= 2) return 10;

  // 2 กม. แรก 10 บาท, ที่เหลือคิดเพิ่ม กม.ละ 2 บาท (เศษปัดขึ้น)
  const extraDistance = Math.ceil(distanceKm - 2);
  return 10 + (extraDistance * 2);
};

// ทดสอบ 3 กรณี
console.log(calcFare(1.5)); // คาดหวัง: 10
console.log(calcFare(2));   // คาดหวัง: 10
console.log(calcFare(7.2)); // คาดหวัง: 22