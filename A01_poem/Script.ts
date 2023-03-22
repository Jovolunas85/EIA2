namespace Aufgabe1 {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert"];
    let objekte: string[] = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjekte, praedikate, objekte);
    let zk: string;
    getVerse("hallo","moin","servus");
    for (let i: number = subjekte.length; i >= 1; i--) {
        console.log(i);
        console.log(zk);
    }
    function getVerse(_sub: string, _pra: string, _obj: string) {
        zk = "Alohomora";
        return zk;
    }
}