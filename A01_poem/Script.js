"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert"];
    let objekte = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjekte, praedikate, objekte);
    let zk;
    getVerse("hallo", "moin", "servus");
    for (let i = subjekte.length; i >= 1; i--) {
        console.log(i);
        console.log(zk);
    }
    function getVerse(_sub, _pra, _obj) {
        zk = "Alohomora";
        return zk;
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Script.js.map