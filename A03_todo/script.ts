/*Aufgabe: <L03 Aufgabenliste_Formular>
Name: <Medin Flaig>
Matrikel: <272505>
Datum: <06.04.2023>
In Zusammenarbeit mit Lena Fleig */
namespace A03 {
    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {

    }


    document.querySelector("#finish")!.addEventListener('click', function () {

        console.log("Ich bin fertig!");

    })

    document.querySelector("#edit")!.addEventListener('click', function () {

        console.log("Ich bearbeite es!");

    })
    document.querySelector("#trashbin")!.addEventListener('click', function () {

        console.log("Ich schmeisse es weg!");

    })
}