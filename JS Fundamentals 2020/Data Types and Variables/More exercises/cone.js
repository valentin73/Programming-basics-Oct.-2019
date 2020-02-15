function cone(radius,height){
    let lenghth = Math.sqrt(radius ** 2 + height ** 2);
    let volume = 1/3 * Math.PI * radius **2 * height;
    let totalSurfaceArea = Math.PI * radius * lenghth + (Math.PI * radius **2)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3,5)