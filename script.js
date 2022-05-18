

var storedItem = localStorage.getItem("storedItem");



function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown(){
    var currentVal = document.getElementById("countdownButton").innerHTML;
    var newVal = currentVal -1;
    if(newVal == 0){
        document.getElementById("hiddenMessage2").innerHTML = "<p> theres more, keep going loser CLICK CLICK </p>";
        document.getElementById("hiddenMessage2").style.display= 'block';
        document.getElementById("hiddenMessage2").style.color ="#802380";
    }
    document.getElementById("countdownButton").innerHTML = newVal;
}

function save(){

    var item = document.getElementById("input").value;
    localStorage.setItem("storedItem", item);
    if(item != "")
        document.getElementById("savedMessage").innerHTML = item + " SAVED";
}

function getItem() {

    localStorage.getItem("storedItem");
    if(storedItem != "")
        document.getElementById("openedMessage").innerHTML = storedItem + " OPENED";
}