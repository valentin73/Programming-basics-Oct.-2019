function sortArrayByTwoCriteria(words = []) {
    let resultArray = [];

    resultArray = words.sort(function (a, b){
        if( a.length - b.length === 0){
            return (a).localeCompare(b)
        }else{
            return  a.length - b.length
        }
    })

    for(let string of resultArray){
        console.log(string);
    }
}
sortArrayByTwoCriteria(["alpha", "beta", "gamma"])