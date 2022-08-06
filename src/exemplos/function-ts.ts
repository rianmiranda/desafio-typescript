// function sumNumericValues(num1: number, num2: number): number {
//     return num1 + num2
// }

// console.log(sumNumericValues(1, 3))

function printNumericValues(num1: number, num2: number): void {
    console.log(num1 + num2);
}

printNumericValues(1, 1);

function sumAndProcessNumericValues(num1: number, num2: number, callback: (num: number) => number): number {
    let result = num1 + num2;
    return callback(result)
}

function squared(num: number) {
    return num * num
}

function squareRoot(num: number) {
    return num ** (1/2)
}

function dividesByItself(num: number) {
    return num / num
}

console.log(sumAndProcessNumericValues(2, 2, dividesByItself))

