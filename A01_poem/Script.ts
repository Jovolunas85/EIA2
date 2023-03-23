namespace Aufgabe1 {
    debugger;
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstroert"];
    let objects: string[] = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    //let zk: string;
    for (let i: number = subjects.length; i >= 1; i--) {
        //console.log(i);
        //console.log(zk);
        getVerse(subjects, verbs, objects);
    }
    function getVerse(_sub: string[], _ver: string[], _obj: string[]) {
        let verse: string = "";
        let zufall: number = Math.floor(Math.random() * _sub.length);
        let zufall2: number = Math.floor(Math.random() * _ver.length);
        let zufall3: number = Math.floor(Math.random() * _obj.length);
        //console.log(zufall);
        verse = _sub.splice(zufall, 1)[0] + " " + _ver.splice(zufall2, 1)[0] + " " + _obj.splice(zufall3, 1)[0];
        console.log(verse);
        //zk = _sub+ " " + _pra + " " +_obj;
        //return zk;
        
    }

}