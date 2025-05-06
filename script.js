function loadCSV(csvFile) {
    fetch(csvFile)
      .then(response => response.text())
      .then(text => {
        const lines = text.trim().split('\n');
        const tbody = document.querySelector('#classement tbody');
        lines.forEach(line => {
          const [club, score] = line.split(',');
          const row = document.createElement('tr');
          row.innerHTML = `<td>${club}</td><td>${parseFloat(score).toFixed(2)}</td>`;
          tbody.appendChild(row);
        });
      });
  }
  