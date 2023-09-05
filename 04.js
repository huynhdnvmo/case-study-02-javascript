function reverseWords(str) {
     // Tách chuỗi thành mảng các từ và loại bỏ các khoảng trắng thừa
     const words = str.trim().split(/\s+/);
      // Đảo ngược mảng các từ và kết hợp lại thành chuỗi mới
      const reversedStr = words.reverse().join(" ");
       return reversedStr;
}
console.log(reverseWords(" the sky is blue"))
