"use strict";
var A03;
(function (A03) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
    }
    document.querySelector("#finish").addEventListener('click', function () {
        console.log("Ich bin fertig!");
    });
    document.querySelector("#edit").addEventListener('click', function () {
        console.log("Ich bearbeite es!");
    });
    document.querySelector("#trashbin").addEventListener('click', function () {
        console.log("Ich schmeisse es weg!");
    });
})(A03 || (A03 = {}));
//# sourceMappingURL=script.js.map