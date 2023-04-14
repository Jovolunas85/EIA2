"use strict";
/*Aufgabe: <L03 Aufgabenliste_Formular>
Name: <Medin Flaig>
Matrikel: <272505>
Datum: <06.04.2023>
In Zusammenarbeit mit Lena Fleig */
var A03;
(function (A03) {
    debugger;
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
    let taskinput = document.querySelector("#TASK");
    let commentinput = document.querySelector("#COM");
    let personinput = document.querySelector("#NAME");
    let deadlineinput = document.querySelector("#DEADLINE");
    let wrapper = document.querySelector(".boss");
    let secondcheckbox = document.querySelector("#checkA");
    function handleload(_event) {
        callInterface();
        document.querySelector("#finish").addEventListener('click', createTodo);
        //document.querySelector("#edit")!.addEventListener('click', enableEditing);
        //document.querySelector("#trashbin")!.addEventListener('click', deleteTodo);
    }
    function callInterface() {
        for (let i = 0; i < todolist.length; i++) {
            console.log(todolist[i]);
            let newDiv = document.createElement("div");
            let newDone = document.createElement("i");
            let newTask = document.createElement("input");
            newTask.readOnly = true;
            let newComment = document.createElement("input");
            newComment.readOnly = true;
            let newPerson = document.createElement("input");
            newPerson.readOnly = true;
            let newDate = document.createElement('input');
            newDate.type = "datetime-local";
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
            newDone.addEventListener('click', function () {
                todolist[i].done = !todolist[i].done;
                if (todolist[i].done == true) {
                    newDone.className = "far fa-check-circle";
                }
                else {
                    newDone.className = "far fa-circle";
                }
            });
            newCheck.addEventListener('click', function () {
                todolist[i].inprogress = !todolist[i].inprogress;
                if (todolist[i].inprogress == true) {
                    newCheck.className = "far fa-check-circle";
                }
                else {
                    newCheck.className = "far fa-circle";
                }
            });
            //newButton.addEventListener('click', enableEditing);
        }
    }
    function createTodo() {
        console.log("Ich bin fertig!");
        let cDiv = document.createElement("div");
        let cDone = document.createElement("i");
        let cTask = document.createElement("input");
        cTask.readOnly = true;
        let cComment = document.createElement("input");
        cComment.readOnly = true;
        let cPerson = document.createElement("input");
        cPerson.readOnly = true;
        let cDate = document.createElement('input');
        cDate.type = "datetime-local";
        let cLabel = document.createElement("label");
        let cCheck = document.createElement("i");
        let cButton = document.createElement("button");
        let cTrash = document.createElement("i");
        if (taskinput.value != "") {
            if (commentinput.value != "") {
                if (personinput.value != "") {
                    if (deadlineinput.value != "") {
                        for (let j = 0; j < todolist.length; j++) {
                            if (todolist[j].done == true) {
                                cDone.className = "far fa-check-circle";
                            }
                            else {
                                cDone.className = "far fa-circle";
                            }
                            cTask.value = taskinput.value;
                            cComment.value = commentinput.value;
                            cPerson.value = personinput.value;
                            cDate.value = deadlineinput.value;
                            cLabel.innerHTML = "in Bearbeitung";
                            cButton.innerHTML = "Bearbeiten";
                            cTrash.className = "fa fa-trash-alt";
                            cTrash.id = "ag";
                            if (secondcheckbox.checked == true) { //Später ändern in todolist(irgendwas) == true
                                cCheck.className = "far fa-check-circle";
                            }
                            else {
                                cCheck.className = "far fa-circle";
                            }
                            cDiv.className = "yourClass";
                            wrapper.appendChild(cDiv);
                            cDiv.appendChild(cDone);
                            cDiv.appendChild(cTask);
                            cDiv.appendChild(cComment);
                            cDiv.appendChild(cPerson);
                            cDiv.append(cDate);
                            cCheck.appendChild(cLabel);
                            cDiv.appendChild(cCheck);
                            cDiv.appendChild(cButton);
                            cDiv.appendChild(cTrash);
                            //arrayPush();//todolist.push({done: false, task: cTask.value, comment: cComment.value, person: cPerson.value, date: cDate.value, inprogress: secondcheckbox.checked});
                            cDone.addEventListener('click', function () {
                                todolist[j].done = !todolist[j].done;
                                if (todolist[j].done == true) {
                                    cDone.className = "far fa-check-circle";
                                }
                                else {
                                    cDone.className = "far fa-circle";
                                }
                            });
                            cTrash.addEventListener('click', deleteTodo);
                            function deleteTodo() {
                                console.log("Ich schmeisse es weg!");
                                wrapper.removeChild(cDiv);
                            }
                        }
                    }
                    else {
                        alert("Please enter something in all fields!");
                    }
                }
                else {
                    alert("Please enter something in all fields!");
                }
            }
            else {
                alert("Please enter something in all fields!");
            }
        }
        else {
            alert("Please enter something in all fields!");
        }
    }
    function enableEditing() {
        console.log("Ich bearbeite es!");
    }
    function finishEditing(_event) {
        if (_event.key === 'Enter') {
        }
        console.log("Ich bin fertig!");
    }
    function arrayPush() {
    }
})(A03 || (A03 = {}));
//# sourceMappingURL=script.js.map