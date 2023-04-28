/*Aufgabe: <L05 Client>
Name: <Medin Flaig>
Matrikel: <272505>
Datum: <06.04.2023>
In Zusammenarbeit mit Lena Fleig */
namespace A03 {
    interface ToDos {
        done: boolean;
        task: string;
        comment: string;
        person: string;
        date: string;
        inprogress: boolean;
    }
    let todolist: ToDos[];
    window.addEventListener("load", handleload);
    let taskinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#TASK");
    let commentinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#COM");
    let personinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#NAME");
    let deadlineinput: HTMLInputElement = <HTMLInputElement>document.querySelector("#DEADLINE");
    let wrapper: HTMLElement = <HTMLElement>document.querySelector(".boss");
    let secondcheckbox: HTMLInputElement = <HTMLInputElement>document.querySelector("#checkA");
    let data: ToDos[];
    function handleload(_event: Event): void {
        taskinput.value = "";
        commentinput.value = "";
        personinput.value = "";
        deadlineinput.value = "";
        secondcheckbox.checked = false;
        requestData("https://jovolunas85.github.io/EIA2/A05_Client/data.json");
        console.log(data);
        document.querySelector("#finish")!.addEventListener('click', arrayPush);
        
    }
    async function requestData(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let seperateDate: string = await response.text();
        todolist= JSON.parse(seperateDate);
        console.log(todolist);
        callInterface();
    }
    async function sendData(): Promise<void> {
        let url: string = "https://jovolunas85.github.io/EIA2/A05_Client/data.json";
        let query: URLSearchParams = new URLSearchParams(<any>+taskinput.value+commentinput.value+personinput.value+deadlineinput.value);
        await fetch(url + "?" + query.toString());
        alert("sent Data!");
    }
    async function editData(_parentIDedit:string): Promise<void> {
        let url: string = "https://jovolunas85.github.io/EIA2/A05_Client/data.json";
        let query: URLSearchParams = new URLSearchParams(<any>+taskinput.value+commentinput.value+personinput.value+deadlineinput.value+_parentIDedit);
        await fetch(url + "?" + query.toString());
        alert("edit Data!");
    }
    async function deleteData(_parentID : string): Promise<void> {
        let url: string = "https://jovolunas85.github.io/EIA2/A05_Client/data.json";
        let query: URLSearchParams = new URLSearchParams(<any>+ _parentID);
        await fetch(url + "?" + query.toString());
        alert("delete Data!");
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
        console.log(parent.id)
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
            }
        }
        editData(parent.id);
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
    function deleteTodo(_event: MouseEvent) {
        let target: HTMLElement = <HTMLElement>_event.target;
        let parent: HTMLElement = <HTMLElement>target.parentElement;
        console.log(parent.id);
        wrapper.removeChild(parent);
        deleteData(parent.id);
    }

}