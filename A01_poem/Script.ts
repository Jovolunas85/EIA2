namespace Aufgabe1 {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstroert"];
    let objekte: string[] = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte, praedikate, objekte);
    let zk: string;
    getVerse(subjekte[Math.floor(Math.random() * 7)], praedikate[Math.floor(Math.random() * 7)], objekte[Math.floor(Math.random() * 7)]);
    for (let i: number = subjekte.length; i >= 1; i--) {
        //console.log(i);
        //console.log(zk);
    }
    function getVerse(_sub: string, _pra: string, _obj: string) {
        let verse: string = "";
        let zufall: number = Math.floor(Math.random() * subjekte.length);
        console.log(zufall);
        verse = "" + subjekte[zufall];
        console.log(verse + " ");
        subjekte.splice(zufall, 1);
        //zk = _sub+ " " + _pra + " " +_obj;
        //return zk;
    }
}