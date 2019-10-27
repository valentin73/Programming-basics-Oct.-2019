function tradeCommisions(input) {
    let city = input.shift();
    let sales = Number(input.shift());

    let commision = 0;
    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            commision = 0.05;
        } else if (sales > 500 && sales <= 1000) {
            commision = 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            commision = 0.08;
        } else if (sales > 10000) {
            commision = 0.12;
        }
        sales = sales * commision

        console.log(sales.toFixed(2));
    }
    if (city === "Varna") {
        if (sales >= 0 && sales <= 500) {
            commision = 0.045;
        } else if (sales > 500 && sales <= 1000) {
            commision = 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            commision = 0.10;
        } else if (sales > 10000) {
            commision = 0.13;
        }
        sales = sales * commision

        console.log(sales.toFixed(2));
    }
    if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            commision = 0.055;
        } else if (sales > 500 && sales <= 1000) {
            commision = 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            commision = 0.12;
        } else if (sales > 10000) {
            commision = 0.145;
        }
        sales = sales * commision

        console.log(sales.toFixed(2));
    } else if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
        console.log("error");
        if (sales < 0) {
            console.log("error");
    
        }
        



}
tradeCommisions(["Plovdiv", -50])
