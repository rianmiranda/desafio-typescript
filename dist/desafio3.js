"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let inputSoma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = inputSoma.value;
let saldo;
saldo = 0;
function somarAoSaldo(soma) {
    saldo += soma;
    campoSaldo.innerHTML = saldo.toString();
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(parseFloat(inputSoma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
