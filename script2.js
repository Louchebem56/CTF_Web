let hours = localStorage.getItem("hour");
let minutes = localStorage.getItem("minute");
let secondes = localStorage.getItem("seconde");
let totalseconde = parseInt(hours * 3600) + parseInt(minutes * 60) + parseInt(secondes);

console.log(hours);
console.log(minutes);
console.log(secondes);



let showTimer = document.getElementById("Timer");
let p6 = false;
let p5 = true;

let themechoice = localStorage.getItem("theme");
const titre = localStorage.getItem("titre3");

console.log(titre);

let titre2 = document.getElementById("Titre1");

titre2.innerHTML = titre;



if (themechoice)
    switch (themechoice) {
        case "réseau":
            document.body.style.backgroundColor = "green";
            break;

        case "cybersécurité":
            document.body.style.backgroundColor = "red";
            break;
        case "développement":
            document.body.style.backgroundColor = "blue";
            break;

        default:
            break;

    }







document.getElementById("StartTimer").addEventListener("click", function () {
    p6 = false;
    p5 = true;


    let timer = setInterval(function () {
        if (p6 == false) {
            if (totalseconde <= 0) {
                clearInterval(timer);
                showTimer.innerHTML = "00:00:00";
                window.location.href = "Capturetheflag3.html";
                return;
            }
            p5 = false;
            totalseconde--;
        }
        let hrs = Math.floor(totalseconde / 3600);
        let mins = Math.floor((totalseconde % 3600) / 60);
        let secs = totalseconde % 60;

        showTimer.innerHTML = (+hrs + ":" + mins + ":" + secs);
        if (p5 == false) {

            document.getElementById("StartTimer").style.display = "none";

        }
        if (p6 == true)
            clearInterval(timer);
    }, 1000);
});

document.getElementById("PauseTimer").addEventListener("click", function () {
    p6 = true;
    p5 = true;
    document.getElementById("StartTimer").style.display = "block";



});

document.getElementById("StopTimer").addEventListener("click", function () {
    totalseconde = 0;
    window.location.href = "Capturetheflag3.html";
    clearInterval(timer);

});

const d = totalseconde;

async function postJSON(d) {
    try {
        const response = await fetch("https://clenoan.pythonanywhere.com/start", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(d),

        });

        const resultat = await response.json();
        console.log("Réussite :", resultat);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

const time = { "time": d };
postJSON(time);


