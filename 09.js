function howUnlucky(year) {
    let unluckyCount = 0;
     // Lặp qua các tháng từ tháng 1 đến tháng 12
     for (let month = 0; month < 12; month++) {
        // Tạo một đối tượng ngày mới với ngày đầu tiên của tháng
        let date = new Date(year, month, 1);
         // Kiểm tra xem ngày đầu tiên có phải là thứ Sáu hay không
         if (date.getDay() === 5) { 
         unluckyCount++;
     }
    }
    return unluckyCount;
}
console.log(howUnlucky(202))