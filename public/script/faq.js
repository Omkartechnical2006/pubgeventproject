let displayStatus = "none";
const ansshow = (e) => {
    let questions = document.getElementsByClassName("answer");
    for (let question of questions) {
        question.style.display = "none";
    }
    if (displayStatus === "none") {
        e.nextElementSibling.style.display = "block";
        displayStatus = "block";
        e.childNodes[1].innerHTML = "-";

    } else {
        e.nextElementSibling.style.display = "none";
        displayStatus = "none";
        e.childNodes[1].innerHTML = "+";
    }
}