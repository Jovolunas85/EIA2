"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstroert"];
    let objects = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    let zk;
    getVerse(subjects[Math.floor(Math.random() * 7)], verbs[Math.floor(Math.random() * 7)], objects[Math.floor(Math.random() * 7)]);
    for (let i = subjects.length; i >= 1; i--) {
        //console.log(i);
        //console.log(zk);
    }
    function getVerse(_sub, _pra, _obj) {
        let verse = "";
        let zufall = Math.floor(Math.random() * subjects.length);
        let zufall2 = Math.floor(Math.random() * verbs.length);
        let zufall3 = Math.floor(Math.random() * objects.length);
        //console.log(zufall);
        verse = subjects[zufall];
        subjects.splice(zufall, 1);
        verse = verse + " " + verbs[zufall2];
        verbs.splice(zufall, 1);
        verse = verse + " " + objects[zufall3];
        objects.splice(zufall3, 1);
        console.log(verse);
        //zk = _sub+ " " + _pra + " " +_obj;
        //return zk;
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Script.js.map