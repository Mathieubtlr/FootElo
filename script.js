<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classement Elo - Journée 0</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #2C3E50;
        }
        table {
            width: 60%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ccc;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        a {
            text-decoration: none;
            color: #2980B9;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <h1>Classement Elo - Journée 0</h1>
    <table id="classement-table">
        <thead>
            <tr>
                <th>Club</th>
                <th>Classement Elo</th>
            </tr>
        </thead>
        <tbody>
            <!-- Les données du CSV seront insérées ici -->
        </tbody>
    </table>

    <a href="index.html">Retour à la page d'accueil</a>

    <script>
        // Fonction pour charger le fichier CSV
        function loadCSV(file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    const rows = data.split('\n'); // Séparer les lignes du fichier CSV
                    const tableBody = document.querySelector("#classement-table tbody");

                    rows.forEach(row => {
                        const cols = row.split(','); // Séparer chaque colonne par la virgule
                        if (cols.length === 2) { // Vérifier que chaque ligne a bien 2 colonnes
                            const tr = document.createElement('tr');
                            const tdClub = document.createElement('td');
                            const tdElo = document.createElement('td');
                            
                            tdClub.textContent = cols[0].trim();  // Nom du club
                            tdElo.textContent = parseFloat(cols[1]).toFixed(2);  // Classement Elo avec 2 décimales
                            
                            tr.appendChild(tdClub);
                            tr.appendChild(tdElo);
                            tableBody.appendChild(tr);
                        }
                    });
                })
                .catch(error => console.error("Erreur de chargement du CSV : ", error));
        }

        // Charger le fichier CSV de la journée 0
        loadCSV('journee0.csv'); // Le fichier CSV doit être dans le même répertoire
    </script>

</body>
</html>
