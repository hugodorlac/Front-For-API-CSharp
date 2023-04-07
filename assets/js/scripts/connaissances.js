fetch('http://localhost:5258/ReadAllConnaissance')
  .then(response => response.json())
  .then(data => {
    const loader = document.getElementsByClassName("loader")[0];
    loader.parentNode.removeChild(loader);
    const connaissanceTableBody = document.getElementById('table');
    data.forEach(connaissance => {
      const row = connaissanceTableBody.insertRow();
      row.innerHTML = `
        <td onclick="move(${connaissance.idConnaissance})">${connaissance.idConnaissance}</td>
        <td onclick="move(${connaissance.idConnaissance})">Catégorie Associée</td>
        <td onclick="move(${connaissance.idConnaissance})">${connaissance.libelle}</td>
        <td onclick="move(${connaissance.idConnaissance})">${connaissance.descriptionCourte}</td>
      `;
    });
  })
  .catch(error => console.error(error));

  function move (x) {
	window.location.href = "ficheConnaissance.html?id=" + x;
  }


  function createConnaissance() {
    const dataToCreate = {
        libelle: document.getElementById("libelle").value,
        descriptionLongue: document.getElementById("descriptionLongue").value,
        descriptionCourte: document.getElementById("descriptionCourte").value,
      };
      
      fetch('http://localhost:5258/CreateConnaissance', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToCreate)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de création');
        }
        console.log('Création réussie');
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
      
  }