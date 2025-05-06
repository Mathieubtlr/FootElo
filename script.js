function loadCSV(file) {
    fetch(file)  // Charge le fichier CSV
        .then(response => response.text())  // Convertit la réponse en texte
        .then(data => {
            const rows = data.split('\n');  // Divise le texte en lignes
            const tableBody = document.querySelector("#classement-table tbody");  // Sélectionne la partie tbody du tableau

            rows.forEach(row => {
                const cols = row.split(',');  // Divise chaque ligne en colonnes
                if (cols.length === 2) {  // Vérifie que la ligne a bien 2 colonnes
                    const tr = document.createElement('tr');  // Crée une nouvelle ligne
                    const tdClub = document.createElement('td');  // Crée une cellule pour le club
                    const tdElo = document.createElement('td');  // Crée une cellule pour le classement Elo

                    tdClub.textContent = cols[0].trim();  // Insère le nom du club dans la cellule
                    tdElo.textContent = parseFloat(cols[1]).toFixed(2);  // Insère le classement Elo dans la cellule avec 2 décimales

                    tr.appendChild(tdClub);  // Ajoute la cellule du club à la ligne
                    tr.appendChild(tdElo);  // Ajoute la cellule du classement Elo à la ligne
                    tableBody.appendChild(tr);  // Ajoute la ligne au corps du tableau
                }
            });
        })
        .catch(error => console.error("Erreur de chargement du CSV : ", error));  // Gestion des erreurs
}
