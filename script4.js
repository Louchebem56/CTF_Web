document.getElementById("submit").addEventListener("click", function () {

    const ps = document.getElementById("pseudo").value;
    const r = document.getElementById("reponse").value;
    let n;

    const info = { ps, r };

    async function postJSON(info) {
        try {
            const response = await fetch("https://clenoan.pythonanywhere.com/reponse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),

            });

            const resultat = await response.json();
            console.log("Réussite :", resultat);
        } catch (erreur) {
            console.error("Erreur :", erreur);
        }
    }

    const student = { "pseudo": ps, "numreponse": n, "reponse": r, };
    postJSON(student);
})