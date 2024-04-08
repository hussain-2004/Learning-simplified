
// js for test 1
var answers = ["C", "D", "A", "A", "B", "D", "C", "B", "A", "D"],
tot = answers.length;
function getCheckedValue(radioName) {
var radios = document.getElementsByName(radioName);
for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value;
}
function getScore() {
var score = 0;
for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i]) score += 1;
return score;
}
function returnScore() {
document.getElementById("myresults").innerHTML =
    "Your score is " + getScore() + "/" + tot;
if (getScore() > 2) {
    console.log("Bravo");
}
}

//js for test2

var answers = ["C", "D", "C", "A", "C", "A", "A", "C", "B", "B"],
tot = answers.length;
function getCheckedValue(radioName) {
var radios = document.getElementsByName(radioName);
for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value;
}
function getScore() {
var score = 0;
for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i]) score += 1;
return score;
}
function returnScore() {
document.getElementById("myresults").innerHTML =
    "Your score is " + getScore() + "/" + tot;
if (getScore() > 2) {
    console.log("Bravo");
}
}