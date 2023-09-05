function isPandigital(num) {
    let numStr = String(num); // Chuyển đổi số nguyên thành chuỗi
    let digits = new Set(numStr.split('')); // Tạo một Set chứa các chữ số từ chuoi
    // Kiểm tra xem Set chứa tất cả các chữ số từ 0 đến 9
    for (let i = 0; i <= 9; i++) {
        if (!digits.has(String(i))) {
            return false;
        }
    }
    return true;
}
console.log(isPandigital(98140723568910))