let button = document.getElementById("extractC");

let box11 = document.getElementById("1box1");
let box12 = document.getElementById("1box2");
let box13 = document.getElementById("1box3");
let box14 = document.getElementById("1box4");

let box21 = document.getElementById("2box1");
let box22 = document.getElementById("2box2");
let box23 = document.getElementById("2box3");
let box24 = document.getElementById("2box4");

let box31 = document.getElementById("3box1");
let box32 = document.getElementById("3box2");
let box33 = document.getElementById("3box3");
let box34 = document.getElementById("3box5");

let box41 = document.getElementById("4box1");
let box42 = document.getElementById("4box2");
let box43 = document.getElementById("4box3");
let box44 = document.getElementById("4box4");

let box51 = document.getElementById("5box1");
let box52 = document.getElementById("5box2");
let box53 = document.getElementById("5box3");
let box54 = document.getElementById("5box4");

function perDat() {
    return fetch("../data/data.json")
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.length);
            let RandP = data[randomIndex];
            return RandP;
        });
}

function updateBoxes() {
    perDat().then(RandP => {
        box51.innerText = box41.innerText;
        box41.innerText = box31.innerText;
        box31.innerText = box21.innerText;
        box21.innerText = box11.innerText;

        box52.innerText = box42.innerText;
        box42.innerText = box32.innerText;
        box32.innerText = box22.innerText;
        box22.innerText = box12.innerText;

        box53.innerText = box43.innerText;
        box43.innerText = box33.innerText;
        box33.innerText = box23.innerText;
        box23.innerText = box13.innerText;

        box54.innerText = box44.innerText;
        box44.innerText = box34.innerText;
        box34.innerText = box24.innerText;
        box24.innerText = box14.innerText;

        box11.innerText = RandP["first-name"];
        box12.innerText = RandP["last-name"];
        box13.innerText = RandP["scEmail"];
        box14.innerText = RandP["pEmail"];
    });
}
button.addEventListener("click", updateBoxes);
