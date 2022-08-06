"use strict";
let buttonTest = document.getElementById("button");
console.log("2");
buttonTest === null || buttonTest === void 0 ? void 0 : buttonTest.addEventListener("click", () => {
    console.log("funciona");
});
