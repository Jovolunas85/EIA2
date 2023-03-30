namespace A2 {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("#div0")!.addEventListener("click", logInfo);
        document.getElementById("#div0")!.addEventListener("keyup", logInfo);
        document.getElementById("#div1")!.addEventListener("click", logInfo);
        document.getElementById("#div1")!.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event: MouseEvent) {
        let span: HTMLElement | null = document.getElementById("span");
        let xvalue: number = _event.clientX;
        let yvalue: number = _event.clientY;
        if (span != null) {
            span.innerText = "Mouseposition: X: " + xvalue + ", Y: " + yvalue + " " + _event.target;
            span.setAttribute('style', 'right: xvalue+ 10px');
            //span.style.top = 
        }

    }
    function logInfo(_event: Event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }

}