function nextDay(year, month, day){
    let todayDate = new Date(year, month - 1, day);
    let date = new Date(year, month - 1, todayDate.getDate() + 1)
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`); 
}
nextDay(1951, 12, 24)
