"use strict";
var L03_FormElements;
(function (L03_FormElements) {
    window.addEventListener("load", init); //init wird aufgerufen
    function init(_event) {
        console.log("Init"); //konsole gibt "Init" aus
        let fieldsets = document.querySelectorAll("fieldset"); //die Fieldsets werden deklariert als HTML Elemente
        // Install listeners on fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange); //Das change-Event wird mitgegeben und die funktion handleChange wird aufgerufen
            fieldset.addEventListener("input", handleChange); //Das infput-Event wird mitgegeben und die funktion handleChange wird aufgerufen
        }
    }
    function handleChange(_event) {
        let target = _event.target; //???
        console.log();
        if (_event.type == "change") //Wenn change passiert wird es als Change ausgegeben
            console.warn("Change: " + target.name + " = " + target.value, _event); //Das Event wird ausgegeben mit dem Namen des Fieldsets, dem Eingegebenen Wert und dem Event an sich
        else
            console.log("Input: " + target.name + " = " + target.value, _event); //Das Event wird ausgegeben mit dem Namen des Fieldsets, dem Eingegebenen Wert und dem Event an sich
        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked); //Wenn eine checkbox ein target ist, wird angezeigt um welche chekbox es sich handelt (1,2 oder 3)
        // Slider response
        if (target.name == "Slider") {
            let progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        // Meter response
        if (target.name == "Stepper") {
            let meter = document.querySelector("meter");
            meter.value = parseFloat(target.value);
        }
        // Color response
        if (target.name == "Color") {
            let ouput = document.querySelector("output");
            ouput.value = target.value;
        }
    }
})(L03_FormElements || (L03_FormElements = {}));
//# sourceMappingURL=FormElements.js.map