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
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.getElementById("span");
        let xvalue = _event.clientX;
        let yvalue = _event.clientY;
        let offsetx = _event.clientX + 10;
        let offsety = _event.clientY + 10;
        if (span != null) {
            span.innerText = "Mouseposition: X: " + xvalue + ", Y: " + yvalue + " " + _event.target;
            //span.setAttribute('style', 'right: xvalue+ 10px');
            span.style.left = offsetx + "px";
            span.style.top = offsety + "px";
        }
    }
    function logInfo(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
    let button_element = document.createElement("button");
    button_element.innerHTML = "Button";
    button_element.className = "btnclass";
    document.querySelector("#div0").appendChild(button_element);
    button_element.addEventListener('click', clickButton);
    function clickButton() {
        console.log("Servus.");
        let customevent = new CustomEvent("Event4", { bubbles: true, detail: { name: "Julian" } });
        document.addEventListener("Event4", (e) => console.log(e.bubbles, e.detail.name));
        document.dispatchEvent(customevent);
    }
})(A2 || (A2 = {}));
//# sourceMappingURL=script.js.map