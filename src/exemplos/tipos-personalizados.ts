type input = number | string

function sumValues(input1: input, input2: input) {
    if (typeof input1 == "string" || typeof input2 == "string") {
        return input1.toString() + input2.toString()
    } else {
        return input1 + input2
    }
}

console.log(sumValues(1, 1))
console.log(sumValues("Ola, ", "tudo bem?"))
console.log(sumValues("1", 5))