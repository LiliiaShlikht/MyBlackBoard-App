let arrColors = ["black", "green", "blue", "yellow", "grey", "white", "red", "pink"];
let i = 0;
let a = 1;
let lineCounter = 0;
let lineCounterAttr = 0;

function deskColorChange () {
    if (i < (arrColors.length-1)) {
        i++; }
    else {
        i = 0;
    }
    document.getElementsByClassName("theBoard")[0].style.backgroundColor = arrColors[i];
}

function textColorChange () {
    let stringAmount = document.getElementsByClassName("listArea")[0].children.length;
    if (i < (arrColors.length-1)) {
        i++;
    }
    else {
        i = 0;
    }
    for (let a = 0; a < stringAmount; a++) {
        document.getElementsByClassName("textColor")[a].style.color = arrColors[i];
    }
}

function addList () {
    let list = document.getElementsByClassName("listArea")[0];
    let h1 = document.createElement("p");
    h1.innerHTML = '<input type="text" class="textColor listName" onkeydown="focusNext(event)" placeholder="TO DO">';
    let pLine = document.createElement("p");
    pLine.innerHTML = '<input type="checkbox"><input type="text" class="textColor" onkeydown="focusNext(event)" placeholder="__________________________________________________________________________"><img class="DeleteButton" src="Images/DeleteButton.jpg">';
    pLine.classList.add("inLine");

    list.insertAdjacentElement("beforeEnd", h1);
    list.insertAdjacentElement("beforeEnd", pLine);

    if(i !== 0) {
        pLine.getElementsByClassName("textColor")[0].style.color = arrColors[i];
        h1.getElementsByClassName("textColor")[0].style.color = arrColors[i];
    }

    deleteLine (pLine);
    lineCounter++;
    lineCounterAttr++;
    let lineCounterAttr2 = lineCounterAttr + 1;

    h1.setAttribute("lineCounterAttr", lineCounterAttr);
    pLine.setAttribute("lineCounterAttr", lineCounterAttr2);

    lineCounterAttr++;
}

function addLine () {
    let list = document.getElementsByClassName("listArea")[0];
    let pLine = document.createElement("p");
    pLine.innerHTML = '<input type="checkbox"><input type="text" class="textColor" onkeydown="focusNext(event)" placeholder="_________________________________________________________________________"><img class="DeleteButton" src="Images/DeleteButton.jpg">';
    pLine.classList.add("inLine");
    if(i !== 0) {
        pLine.getElementsByClassName("textColor")[0].style.color = arrColors[i];
    }

    list.insertAdjacentElement("beforeEnd", pLine);

    deleteLine (pLine);
    lineCounter++;
    lineCounterAttr++;

    pLine.setAttribute("lineCounterAttr", lineCounterAttr);
}

function deleteLine (line) {
    let deleteButton = document.getElementsByClassName("DeleteButton");
    deleteButton[lineCounter].onclick = function () {
        line.remove();
        if (deleteButton.length === 0) {
            lineCounter = 0;
        } 
    }
}

function newBoard () {
    let listArea = document.getElementsByClassName("listArea")[0];
    while (listArea.firstChild) {
        listArea.removeChild(listArea.firstChild);
    }
    i = 0;
    lineCounter = 0;
}

function focusNext (event) {
    let stringAmount = document.getElementsByClassName("listArea")[0].children.length;
    let i = event.currentTarget.parentNode.getAttribute("lineCounterAttr");

    let next = document.getElementsByClassName("textColor")[i];
    if (i < stringAmount) {
        if (event.code === 'Enter') {
          next.focus();
          i++;
        }
    } else {
        i = 0;
        if (event.code === 'Enter') {
            document.getElementsByClassName("textColor")[i].focus();
            i++;
        }
        
    }
}