let p3 = false;
let timeInput = document.getElementById("time");
let p1 = false;
let p2 = false;

const titreInput = document.getElementById("Titre");

titreInput.addEventListener("input", () => {
    let titre = titreInput.value.trim();
    localStorage.setItem("titre3", titre);
});



document.getElementById("Thèmes").addEventListener("input", function () {
    let Theme = document.getElementById("Thèmes").value;
    localStorage.setItem("theme", Theme);

});

document.getElementById("time").addEventListener("input", function () {

    let valeur = document.getElementById("time").value;
    const restrict = /([0-9]{2}):([0-9]{2}):([0-9]{2})/;
    let number = valeur.match(restrict);
    let longeur = valeur.length;
    if (p1 == false) {


        if (longeur == 2) {
            document.getElementById("time").value = valeur + ":";
            p1 = true;
        }
    }
    if (p2 == false) {
        if (longeur == 5) {
            document.getElementById("time").value = valeur + ":";
            p2 = true;
        }
    }

    if (!number) {
        timeInput.style.color = "red";
        p3 = false;
        return;


    }
    else {
        timeInput.style.color = "green";
        let tab = valeur.split(":");
        let hour = tab[0];
        let minute = tab[1];
        let seconde = tab[2];





        if (minute > 59) {
            minute = 59;
            timeInput.value.replace(tab[0], "59");
        }

        if (seconde > 59) {
            seconde = 59;
        }
        p3 = true;
        console.log(minute);
        console.log(seconde);
        localStorage.setItem("hour", hour);
        localStorage.setItem("minute", minute);
        localStorage.setItem("seconde", seconde);
        localStorage.setItem("Yes", p3);
    }
});

document.getElementById("Confirmer").addEventListener("click", function () {
    if (p3 == true) {
        window.location.href = "Capturetheflag2.html";
    }
});


