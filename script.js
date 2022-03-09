

var storedItem = localStorage.getItem("storedItem");



function revealMessage() {
    document.getElementById("hiddenMessage").style.display= 'block';
}

function countDown(){
    var currentVal = document.getElementById("countdownButton").innerHTML;
    var newVal = currentVal -1;
    document.getElementById("countdownButton").innerHTML = newVal;
}

function save(){

    var item = document.getElementById("input").value;
    localStorage.setItem("storedItem", item);
    document.getElementById("savedMessage").innerHTML = item + " SAVED";
}

function getItem() {

    localStorage.getItem("storedItem");
    if(storedItem != null)
        document.getElementById("openedMessage").innerHTML = storedItem + " OPENED";
}