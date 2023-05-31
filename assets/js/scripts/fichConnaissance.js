const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const urlAPIDelete = "http://localhost:5258/DeleteConnaissance/" + id 

function deleteConnaissances() {
    fetch(urlAPIDelete, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de suppression');
        }
        console.log('Suppression réussie');
        window.location.href = "./connaissances.html";
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
      window.location.href = "connaissances.html";

} 

fetch('http://localhost:5258/ReadAllCategories')
.then(response => response.json())
.then(data => {
  
  const categorieSelect = document.getElementById('categorieSelect');
  data.forEach(categorie => {
    var option = document.createElement("option");
    option.text = categorie.libelle;
    option.id = categorie.idCategorie;
    categorieSelect.add(option);
  });
})
.catch(error => console.error(error));

function updateConnaissances() {

  const selectElement = document.getElementById('categorieSelect');
  const selectValue = selectElement.value 
  var selectedId = 0


  for (let i = 0; i < selectElement.options.length; i++) {
    const option = selectElement.options[i];
    if (option.value === selectValue) {
      selectedId = option.id;
      console.log('ID de l\'option sélectionnée : ' + selectedId);
      break;
    }
  }

    const dataToUpdate = {
        idConnaissance: id,
        idCategorie: selectedId,
        libelle: document.getElementById("libelle").value,
        descriptionLongue: document.getElementById("description_longue").value,
        descriptionCourte: document.getElementById("description_courte").value
      };
      
      fetch('http://localhost:5258/UpdateConnaissance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToUpdate)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de mise à jour');
        window.location.href = "connaissances.html";
        }
        window.location.href = "connaissances.html";
      })
      .catch(error => {
        console.error('Erreur:', error);
      });

      window.location.href = "connaissances.html";

      
}

const urlAPIGet = "http://localhost:5258/ReadConnaissance/" + id 

fetch(urlAPIGet)
  .then(response => response.json())
  .then(data => {
    if(data.libelleCategorie != 'undefined') {
    document.getElementById('categorieSelect').value = data.libelleCategorie;
    document.getElementById('libelle').value = data.libelle;
    document.getElementById('description_courte').value = data.descriptionCourte;
    document.getElementById('description_longue').value = data.descriptionLongue;
    }})
  .catch(error => console.error(error));




