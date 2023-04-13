"use strict";
/*Aufgabe: <L03 Aufgabenliste_Formular>
Name: <Medin Flaig>
Matrikel: <272505>
Datum: <06.04.2023>
In Zusammenarbeit mit Lena Fleig */
var A03;
(function (A03) {
    let todolist = [{
            done: false,
            task: "Müll rausbringen",
            comment: "10er wenn du es nicht machst",
            person: "Kevin",
            date: "2023-04-29T14:00",
            inprogress: true,
        },
        {
            done: false,
            task: "spülen",
            comment: "Nimmt nicht den Schwamm",
            person: "Janina",
            date: "2023-04-21T12:23",
            inprogress: true,
        }];
    window.addEventListener("load", handleload);
    function handleload(_event) {
        callInterface();
        document.querySelector("#finish").addEventListener('click', createTodo);
        document.querySelector("#edit").addEventListener('click', enableEditing);
        document.querySelector("#trashbin").addEventListener('click', deleteTodo);
    }
    function callInterface() {
        for (let i = 0; i < todolist.length; i++) {
            console.log(todolist[i]);
            let newDiv = document.createElement("div");
            let wrapper = document.querySelector(".boss");
            let newDone = document.createElement("i");
            let newTask = document.createElement("input");
            let newComment = document.createElement("input");
            let newPerson = document.createElement("input");
            let newDate = document.createElement("datetime-local");
            let newLabel = document.createElement("label");
            let newCheck = document.createElement("i");
            let newButton = document.createElement("button");
            let newTrash = document.createElement("i");
            if (todolist[i].done == true) {
                newDone.className = "far fa-check-circle";
            }
            else {
                newDone.className = "far fa-circle";
            }
            newTask.value = todolist[i].task;
            newComment.value = todolist[i].comment;
            newPerson.value = todolist[i].person;
            newDate.value = todolist[i].date;
            newLabel.innerHTML = "in Bearbeitung";
            newButton.innerHTML = "Bearbeiten";
            newTrash.className = "fa fa-trash-alt";
            newTrash.id = "ag";
            if (todolist[i].inprogress == true) {
                newCheck.className = "far fa-check-circle";
            }
            else {
                newCheck.className = "far fa-circle";
            }
            newDiv.className = "myClass";
            wrapper.appendChild(newDiv);
            newDiv.appendChild(newDone);
            newDiv.appendChild(newTask);
            newDiv.appendChild(newComment);
            newDiv.appendChild(newPerson);
            newDiv.append(newDate);
            newCheck.appendChild(newLabel);
            newDiv.appendChild(newCheck);
            newDiv.appendChild(newButton);
            newDiv.appendChild(newTrash);
        }
    }
    function createTodo() {
        console.log("Ich bin fertig!");
    }
    function enableEditing() {
        console.log("Ich bearbeite es!");
    }
    function finishEditing(_event) {
        if (_event.key === 'Enter') {
        }
        console.log("Ich bin fertig!");
    }
    function deleteTodo() {
        console.log("Ich schmeisse es weg!");
    }
})(A03 || (A03 = {}));
//# sourceMappingURL=script.js.map