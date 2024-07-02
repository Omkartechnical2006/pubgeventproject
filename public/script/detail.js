// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
};

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
};

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
};

//copy text function
function copytxt(e) {
    let copyText = e.previousSibling.previousSibling;
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText);
    e.innerHTML = "Copied!";
    setTimeout(() => {
        e.innerHTML = "copy";
    }, 1000);
};

let userDate = document.getElementsByClassName("warn");
let users = document.getElementsByClassName("order-om");
function fltbtn(e) {
    let year = new Date().getFullYear();
    let tDate = new Date().getDate();
    let targetbtn = e.classList[2];
    if (targetbtn === "all") {
        for (let user of users) {
            user.style.display = "flex";
        }
    } else if (targetbtn === "today") {
        for (let user of userDate) {
            let date = new Date(user.firstChild.nextSibling.innerText);
            if (date.getDate() === tDate) {

            } else {
                user.parentElement.parentElement.style.display = "none";
            }
        }
    }
    else if (targetbtn === "pr7days") {
        let pr7days = [];
        for (let i = 0; i <= 6; i++) {
            pr7days[i] = tDate - i;
        }
        function usrDate() {
            for (let user of users) {
                let date = new Date(user.firstElementChild.nextSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText);
                let firstDay = pr7days[0];
                let lastDay = pr7days[pr7days.length - 1];
                if (date.getDate() <= firstDay && date.getDate() >= lastDay) {
                    user.style.display = "flex";
                } else {
                    user.style.display = "none";
                }
            }
        }
        usrDate();
    } else if (targetbtn === "none") {
        for (let user of userDate) {
            let date = new Date(user.firstChild.nextSibling.innerText);
            user.parentElement.parentElement.style.display = "none";
        }
    } else {
    }
}
