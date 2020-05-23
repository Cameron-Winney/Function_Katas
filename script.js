function add(a, b) {
    let sum = a + b;
    return (sum);
}

function multiply(a, b) {
    let sum = 0;
    for (let x = 0; x <= b - 1; x++) {
        sum += add(a, 0);
    }
    return (sum);
}

function power(a, b) {
    if (b === 0) {
        return 1;
    } else if (b !== 0) {
        let sum = a;
        for (let x = 0; x < b - 1; x++) {
            sum = multiply(sum, a);

        }
        return (sum);
    }
}

function factorial(a) {
    let sum = a;
    while (a > 1) {
        a--;
        sum = multiply(sum, a);

    }
    return (sum);
}