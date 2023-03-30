"use strict";
var A2;
(function (A2) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("#div0").addEventListener("click", logInfo);
        document.getElementById("#div0").addEventListener("keyup", logInfo);
        document.getElementById("#div1").addEventListener("click", logInfo);
        document.getElementById("#div1").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.getElementById("span");
        let xvalue = _event.clientX;
        let yvalue = _event.clientY;
        if (span != null) {
            span.innerText = "Mouseposition: " + xvalue + "," + yvalue;
            span.setAttribute('style', 'right: xvalue+ 10px');
        }
    }
    function logInfo(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
})(A2 || (A2 = {}));
//# sourceMappingURL=script.js.map