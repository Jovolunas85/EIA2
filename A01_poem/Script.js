"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstroert"];
    let objects = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    //let zk: string;
    for (let i = subjects.length; i >= 1; i--) {
        //console.log(i);
        //console.log(zk);
        getVerse(subjects, verbs, objects);
    }
    function getVerse(_sub, _ver, _obj) {
        let verse = "";
        let zufall = Math.floor(Math.random() * _sub.length);
        let zufall2 = Math.floor(Math.random() * _ver.length);
        let zufall3 = Math.floor(Math.random() * _obj.length);
        //console.log(zufall);
        verse = _sub.splice(zufall, 1)[0] + " " + _ver.splice(zufall2, 1)[0] + " " + _obj.splice(zufall3, 1)[0];
        console.log(verse);
        //zk = _sub+ " " + _pra + " " +_obj;
        //return zk;
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Script.js.map