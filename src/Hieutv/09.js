function getDayFriday(year) {
    let count = 0;
    for (let month=0; month<12; month++) {
        const day = new Date(year,month,13);
        if(day.getDay() == 5){
            count++;
        }
    } return count;
}

console.log(getDayFriday(2023));