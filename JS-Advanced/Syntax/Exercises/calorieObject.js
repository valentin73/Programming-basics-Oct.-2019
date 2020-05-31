function calorieObject(input = []){
    let obj = {};
    let currentProduct;
    input.forEach((x, i) =>{
       if(i % 2 === 0){
           currentProduct = x
           obj[x] = undefined;
       }else{
           obj[currentProduct] = Number(x);
       }
    })
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])