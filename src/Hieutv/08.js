const num1 = 98140723568910;
const num2 = 90864523148909;
const num3 = 112233445566778899;

const isPandigital = num => {
    let legend = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for(let i = 0; i < num.length; i++){
        if(!legend.includes(num[i])){
        continue;
        };
        legend.splice(legend.indexOf(numStr[i]), 1);
    };
    return !legend.length;
};

console.log(isPandigital(num1));
console.log(isPandigital(num2)); 
console.log(isPandigital(num3)); 