

fetch('http://localhost:5258/ReadAllProjet')
.then(response => response.json())
.then(data => {
  const loader = document.getElementsByClassName("loader")[0];
  loader.parentNode.removeChild(loader);
  
  const projetTableBody = document.getElementById('table');
  data.forEach(projet => {
    const row = projetTableBody.insertRow();
    row.innerHTML = `
    <td onclick="move(${projet.idProjet})">${projet.nom}</td>
    <td onclick="move(${projet.idProjet})">${projet.description}</td>
    <td onclick="move(${projet.idProjet})">${formatDate(projet.dateCreation)}</td>
    `;
  });
})
.catch(error => console.error(error));

function move (x) {
  window.location.href = "ficheProjet.html?id=" + x;
}

function createCategorie() {
  const dataToCreate = {
      libelle: document.getElementById("libelle").value,
    };
    
    fetch('http://localhost:5258/CreateCategorie', {
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

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }