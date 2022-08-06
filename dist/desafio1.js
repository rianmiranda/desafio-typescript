"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";
// SOLUÇÃO 1 - Adicionando tipagem estática
let employee1 = {
    code: 10,
    name: "John"
};
// SOLUCAO 2 - Com inferencia de tipos
let employee2 = {
    code: 10,
    name: "John" // inferido pelo typescript como "string"
};
