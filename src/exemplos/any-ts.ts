let valorAny: any;

valorAny = 3
valorAny = "Ola"
valorAny = true

let valorString1: string = "teste"
valorString1 = valorAny

let valorString2: string = "testão"
valorString2 = valorAny

function somaStrings(string1: string, string2: string): string {
    return string1 + string2
}

console.log(somaStrings(valorString1, valorString2))
console.log(somaStrings("Oi, ", "como vai vc?"))