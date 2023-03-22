"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstroert"];
    let objekte = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    let zk;
    getVerse(subjekte[Math.floor(Math.random() * 7)], praedikate[Math.floor(Math.random() * 7)], objekte[Math.floor(Math.random() * 7)]);
    for (let i = subjekte.length; i >= 1; i--) {
        //console.log(i);
        //console.log(zk);
    }
    function getVerse(_sub, _pra, _obj) {
        let verse = "";
        let zufall = Math.floor(Math.random() * subjekte.length);
        console.log(zufall);
        verse = "" + subjekte[zufall];
        console.log(verse + " ");
        subjekte.splice(zufall, 1);
        //zk = _sub+ " " + _pra + " " +_obj;
        //return zk;
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Script.js.map