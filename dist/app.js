function start() {
    var numbers = "";
    for (let i = 1; i < 6; i++) {
        var element = "lit" + i; //creates id for every div with number
        numbers = numbers + '<div onclick="check(' + i + ')" class="numbers" id="' + element + '">' + i + '</div>'; //creates whole div with onclick, class, number and id
    }
    document.getElementById("rates").innerHTML = numbers; //changes innerHTML of div with id rates to created divs
}
window.onload = start; //starts function
function check(nr) {
    for (let i = 1; i < 6; i++) {
        var element = "lit" + i; //creates id for every div with number
        document.getElementById(element).style.background = "hsl(213, 19%, 18%)"; //changes div background
    }
    var element = "lit" + nr; //creates id
    document.getElementById(element).style.background = "hsl(217, 12%, 63%)"; //changes div background
    document.getElementById("selected").innerHTML = 'You selected ' + nr + ' out of 5'; //changes innerHTML of selected rate
    document.getElementById("button").setAttribute("onclick", "submit()"); //only if this function is activeted button can be clicked
}
function submit() {
    document.getElementById("rating").style.display = "none";
    document.getElementById("end").style.display = "flex";
}
