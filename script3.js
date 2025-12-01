document.addEventListener('DOMContentLoaded', () => {
    fetch('https://clenoan.pythonanywhere.com/classement')
      .then(res => res.json())
      .then(data => {
        const tbody = document.querySelector('#classement-table tbody');
        tbody.innerHTML = '';

        // 🔹 TRIER PAR POURCENTAGE DE RÉUSSITE (du plus haut au plus bas)
        data.sort((a, b) => b.percent - a.percent);

        // 🔹 Générer le tableau
        data.forEach((joueur, i) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${joueur.pseudo || 'Inconnu'}</td>
            <td>${joueur.percent}%</td>
            <td>${joueur.time} ms</td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(err => {
        console.error('Erreur lors du chargement des données :', err);
        document.querySelector('#classement-table tbody').innerHTML =
          '<tr><td colspan="4">Erreur de chargement des données</td></tr>';
      });
  });