function metricConverter(input) {
    let number = Number(input.shift());
    let enterUnit = input.shift();
    let exitUnit = input.shift();

    if (enterUnit === "mm") {
        number /= 1000;

    } else if (enterUnit === "cm") {
        number /= 100;
    }

    if (exitUnit === "mm") {
        number *= 1000;
    } else if (exitUnit === "cm") {
        number *= 100;
    }
    console.log(number.toFixed(3));

}
metricConverter([150, "m", "cm"])