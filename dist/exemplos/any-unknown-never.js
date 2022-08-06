"use strict";
let anyIsBack;
anyIsBack = 3;
anyIsBack = "teste";
anyIsBack = 5;
let stringTest = "check";
stringTest = anyIsBack;
let unknownValue;
unknownValue = 3;
unknownValue = "hey";
unknownValue = true;
unknownValue = "It'll work!";
let stringTest2 = "It sure will!";
// stringTest = unknownValue //Esta linha daria erro, pq nao podemos atribuir um valor do tipo unknown a uma variavel inicializada com um tipo diferente de unknown.
// Para atribuirmos um valor do tipo unknown a uma variável inicializada com tipo diferente de unknown,
// pricisamos realizar um teste lógico para verificar se o valor unknown é do tipo daquela variável.
if (typeof unknownValue === "string") {
    stringTest = unknownValue;
}
// Tipo "never": O objetivo dele é deixar explicito que um código PODE nunca ser lido até o final
// Exemplos de aplicação: Funções que lançam erros (throw) e Loops Infinitos.
// OBS: O tipo never é raramente utilizado
function throwError(thrownError, myCode) {
    throw { error: thrownError, code: myCode };
}
throwError("An error just happened!", 500);
// Para conhecer outros tipos acesse: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
