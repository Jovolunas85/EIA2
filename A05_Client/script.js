"use strict";
/*Aufgabe: <L03 Aufgabenliste_Formular>
Name: <Medin Flaig>
Matrikel: <272505>
Datum: <06.04.2023>
In Zusammenarbeit mit Lena Fleig */
var A03;
(function (A03) {
    let todolist;
    window.addEventListener("load", handleload);
    let taskinput = document.querySelector("#TASK");
    let commentinput = document.querySelector("#COM");
    let personinput = document.querySelector("#NAME");
    let deadlineinput = document.querySelector("#DEADLINE");
    let wrapper = document.querySelector(".boss");
    let secondcheckbox = document.querySelector("#checkA");
    let data;
    function handleload(_event) {
        taskinput.value = "";
        commentinput.value = "";
        personinput.value = "";
        deadlineinput.value = "";
        secondcheckbox.checked = false;
        requestData("https://jovolunas85.github.io/EIA2/A05_Client/data.json");
        console.log(data);
        document.querySelector("#finish").addEventListener('click', arrayPush);
    }
    async function requestData(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let seperateDate = await response.text();
        todolist = JSON.parse(seperateDate);
        console.log(todolist);
        callInterface();
    }
    async function sendData() {
        let url = "https://jovolunas85.github.io/EIA2/A05_Client/data.json";
        let query = new URLSearchParams(+taskinput.value + commentinput.value + personinput.value + deadlineinput.value);
        await fetch(url + "?" + query.toString());
        alert("sent Data!");
    }
    async function editData() {
        let url = "https://jovolunas85.github.io/EIA2/A05_Client/data.json";
        let query = new URLSearchParams(+taskinput.value + commentinput.value + personinput.value + deadlineinput.value);
        await fetch(url + "?" + query.toString());
        alert("edit Data!");
    }
    async function deleteData() {
        let url = "https://jovolunas85.github.io/EIA2/A05_Client/data.json";
        let query = new URLSearchParams(+taskinput.value + commentinput.value + personinput.value + deadlineinput.value);
        await fetch(url + "?" + query.toString());
        alert("delete Data!");
    }
    function callInterface() {
        for (let i = 0; i < todolist.length; i++) {
            console.log(todolist[i]);
            let newDiv = document.createElement("div");
            newDiv.id = "" + i;
            let newDone = document.createElement("i");
            let newTask = document.createElement("input");
            newTask.readOnly = true;
            let newComment = document.createElement("input");
            newComment.readOnly = true;
            let newPerson = document.createElement("input");
            newPerson.readOnly = true;
            let newDate = document.createElement('input');
            newDate.type = "datetime-local";
            newDate.readOnly = true;
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
            newDone.addEventListener('click', iconChange);
            newCheck.addEventListener('click', iconChange2);
            newButton.addEventListener('click', enableEditing);
            newTrash.addEventListener('click', deleteTodo);
        }
    }
    function iconChange(_event) {
        let target = _event.target;
        let parent = target.parentElement;
        let id = Number(parent.id);
        todolist[id].done = !todolist[id].done;
        if (todolist[id].done == true) {
            target.className = "far fa-check-circle";
        }
        else {
            target.className = "far fa-circle";
        }
    }
    function iconChange2(_event) {
        let target = _event.target;
        let parent = target.parentElement;
        let id = Number(parent.id);
        todolist[id].inprogress = !todolist[id].inprogress;
        if (todolist[id].inprogress == true) {
            target.className = "far fa-check-circle";
        }
        else {
            target.className = "far fa-circle";
        }
    }
    function enableEditing(_event) {
        console.log("Ich bearbeite es!");
        let target = _event.target;
        let parent = target.parentElement;
        let inputElements = parent.querySelectorAll("input");
        let id = Number(parent.id);
        for (let i = 0; i < inputElements.length; i++) {
            if (inputElements[i].readOnly == true) {
                inputElements[i].readOnly = false;
                console.log(inputElements[i]);
            }
            else {
                inputElements[i].readOnly = true;
                if (i == 0) {
                    todolist[id].task = inputElements[i].value;
                }
                if (i == 1) {
                    todolist[id].comment = inputElements[i].value;
                }
                if (i == 2) {
                    todolist[id].person = inputElements[i].value;
                }
                if (i == 3) {
                    todolist[id].date = inputElements[i].value;
                }
            }
        }
        editData();
    }
    function arrayPush() {
        todolist.push({ done: false, task: taskinput.value, comment: commentinput.value, person: personinput.value, date: deadlineinput.value, inprogress: secondcheckbox.checked });
        console.log(todolist);
        wrapper.innerHTML = "";
        callInterface();
        taskinput.value = "";
        commentinput.value = "";
        personinput.value = "";
        deadlineinput.value = "";
        secondcheckbox.checked = false;
        sendData();
    }
    function deleteTodo(_event) {
        let target = _event.target;
        let parent = target.parentElement;
        wrapper.removeChild(parent);
        deleteData();
    }
})(A03 || (A03 = {}));
//# sourceMappingURL=script.js.map