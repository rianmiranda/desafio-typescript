"use strict";
let valorAny;
valorAny = 3;
valorAny = "Ola";
valorAny = true;
let valorString1 = "teste";
valorString1 = valorAny;
let valorString2 = "testão";
valorString2 = valorAny;
function somaStrings(string1, string2) {
    return string1 + string2;
}
console.log(somaStrings(valorString1, valorString2));
console.log(somaStrings("Oi, ", "como vai vc?"));
