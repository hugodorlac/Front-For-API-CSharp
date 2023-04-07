fetch('http://localhost:5258/ReadAllCategories')
.then(response => response.json())
.then(data => {
  const loader = document.getElementsByClassName("loader")[0];
  loader.parentNode.removeChild(loader);
  
  const categorieTableBody = document.getElementById('table');
  data.forEach(categorie => {
    const row = categorieTableBody.insertRow();
    row.innerHTML = `
    <td onclick="move(${categorie.idCategorie})">${categorie.idCategorie}</td>
    <td onclick="move(${categorie.idCategorie})">${categorie.libelle}</td>
    `;
  });
})
.catch(error => console.error(error));

function move (x) {
  window.location.href = "ficheCategorie.html?id=" + x;
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