// Parse les paramètres d'URL
function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    annee: params.get('annee'),
    journee: params.get('journee')
  };
}

function loadClassement() {
  const { annee, journee } = getParams();
  const titre = document.getElementById("titre");
  titre.textContent = `Classement Elo - Saison ${annee}, Journée ${journee}`;

  const csvPath = `data/${annee}/journee${journee}.csv`;

  fetch(csvPath)
    .then(response => {
      if (!response.ok) throw new Error("Fichier introuvable");
      return response.text();
    })
    .then(text => {
      const rows = text.trim().split('\n');
      const tbody = document.querySelector("#classement tbody");
      tbody.innerHTML = "";
      rows.forEach(row => {
        const [club, score] = row.split(',');
        const tr = document.createElement('tr');
        const tdClub = document.createElement('td');
        const tdScore = document.createElement('td');
        tdClub.textContent = club;
        tdScore.textContent = parseFloat(score).toFixed(2);
        tr.appendChild(tdClub);
        tr.appendChild(tdScore);
        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      document.getElementById("titre").textContent = "Erreur : " + err.message;
    });
}

window.onload = loadClassement;
