/*Aufgabe: <L03 Aufgabenliste_Formular>
Name: <Medin Flaig>
Matrikel: <272505>
Datum: <06.04.2023>
In Zusammenarbeit mit Lena Fleig */
namespace A03 {
    //debugger;
    interface ToDos {
        done: boolean;
        task: string;
        comment: string;
        person: string;
        date: string;
        inprogress: boolean;
    }
    let todolist: ToDos[] = [{
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
    let taskinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#TASK");
    let commentinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#COM");
    let personinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#NAME");
    let deadlineinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#DEADLINE");
    let wrapper: HTMLElement = <HTMLElement>document.querySelector(".boss");
    let secondcheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector("#checkA");

    function handleload(_event: Event): void {
        taskinput.value = "";
        commentinput.value = "";
        personinput.value = "";
        deadlineinput.value = "";
        secondcheckbox.checked = false;
        callInterface();
        document.querySelector("#finish")!.addEventListener('click', arrayPush);
        //document.querySelector("#edit")!.addEventListener('click', enableEditing);
        //document.querySelector("#trashbin")!.addEventListener('click', deleteTodo);
    }
    function callInterface() {
        for (let i: number = 0; i < todolist.length; i++) {
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
            newTrash.id = "ag"

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
            /*function () {
                todolist[i].done = !todolist[i].done;
                if (todolist[i].done == true) {
                    newDone.className = "far fa-check-circle";
                }
                else {
                    newDone.className = "far fa-circle";
                }
            });*/

            newCheck.addEventListener('click', iconChange2);
            newButton.addEventListener('click', enableEditing);
            newTrash.addEventListener('click', deleteTodo);
        }
    }
    function iconChange(_event: MouseEvent) {
        let target: HTMLElement = <HTMLElement>_event.target;
        let parent: HTMLElement = <HTMLElement>target.parentElement;
        let id: number = Number(parent.id);
        todolist[id].done = !todolist[id].done;
        if (todolist[id].done == true) {
            target.className = "far fa-check-circle";
        }
        else {
            target.className = "far fa-circle";
        }

    }
    function iconChange2(_event: MouseEvent) {
        let target: HTMLElement = <HTMLElement>_event.target;
        let parent: HTMLElement = <HTMLElement>target.parentElement;
        let id: number = Number(parent.id);
        todolist[id].inprogress = !todolist[id].inprogress;
        if (todolist[id].inprogress == true) {
            target.className = "far fa-check-circle";
        }
        else {
            target.className = "far fa-circle";
        }

    }
    function enableEditing(_event: MouseEvent) {
        console.log("Ich bearbeite es!");
        let target: HTMLElement = <HTMLElement>_event.target;
        let parent: HTMLElement = <HTMLElement>target.parentElement;
        let inputElements: NodeListOf<HTMLInputElement> = parent.querySelectorAll("input");
        let id: number = Number(parent.id);
        for (let i: number = 0; i < inputElements.length; i++) {
            if (inputElements[i].readOnly == true) {
                inputElements[i].readOnly = false;
                console.log(inputElements[i]);
            }
            else {
                inputElements[i].readOnly = true;
                if(i==0){
                    todolist[id].task = inputElements[i].value;
                }
                if(i==1){
                    todolist[id].comment = inputElements[i].value;
                }
                if(i==2){
                    todolist[id].person = inputElements[i].value;
                }
                if(i==3){
                    todolist[id].date = inputElements[i].value;
                }
                //inputElements[i].value
            }
        }
    }


    function arrayPush() {
        //createTodo();
        todolist.push({ done: false, task: taskinput.value, comment: commentinput.value, person: personinput.value, date: deadlineinput.value, inprogress: secondcheckbox.checked });
        console.log(todolist);
        wrapper.innerHTML = "";
        callInterface();
        taskinput.value = "";
        commentinput.value = "";
        personinput.value = "";
        deadlineinput.value = "";
        secondcheckbox.checked = false;
        //todolist.push({done: false, task: cTask.value, comment: cComment.value, person: cPerson.value, date: cDate.value, inprogress: secondcheckbox.checked});
    }
    function deleteTodo(_event: MouseEvent) {
        let target: HTMLElement = <HTMLElement>_event.target;
        let parent: HTMLElement = <HTMLElement>target.parentElement;
        //console.log("Ich schmeisse es weg!");
        wrapper.removeChild(parent);
        //todolist.splice(j, 1);
    }
    /*function deleteTodo() {
        console.log("Ich schmeisse es weg!");
        for (let k: number = 0; k < todolist.length; k++) {
            todolist.splice(k, 1);
        }

    }*/

    /*function createTodo() {
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


        if (taskinput.value != "" || commentinput.value != "" || personinput.value != "" || deadlineinput.value != "") {

            for (let j: number = 0; j < todolist.length; j++) {
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
                cTrash.id = "ag"
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

                //arrayPush();
                cDone.addEventListener('click', function () {
                    todolist[j].done = !todolist[j].done;
                    if (todolist[j].done == true) {
                        cDone.className = "far fa-check-circle";
                    }
                    else {
                        cDone.className = "far fa-circle";
                    }
                });
                


            }
        }
        else {
            alert("Please enter something in all fields!");
        }
    }*/

}