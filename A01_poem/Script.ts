namespace Aufgabe1 {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstroert"];
    let objects: string[] = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    //let zk: string;
    getVerse(subjects[Math.floor(Math.random() * 7)], verbs[Math.floor(Math.random() * 7)], objects[Math.floor(Math.random() * 7)]);
    for (let i: number = subjects.length; i >= 1; i--) {
        //console.log(i);
        //console.log(zk);
    }
    function getVerse(_sub: string, _pra: string, _obj: string) {
        let verse: string = "";
        let zufall: number = Math.floor(Math.random() * subjects.length);
        let zufall2: number = Math.floor(Math.random() * verbs.length);
        let zufall3: number = Math.floor(Math.random() * objects.length);
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

}