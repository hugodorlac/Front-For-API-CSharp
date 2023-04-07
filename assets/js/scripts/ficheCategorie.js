const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const urlAPIDelete = "http://localhost:5258/DeleteCategorie/" + id 

function deleteCategorie() {
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
        window.location.href = "./categories.html";
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
      window.location.href = "categories.html";

} 

const selectElement = document.getElementById('categorie');
    fetch('http://localhost:5258/ReadAllCategories')
    .then(response => {
    if (!response.ok) {
        throw new Error('Erreur de lecture');
    }
    return response.json();
    })
    .then(data => {
    data.forEach(categorie => {
        const optionElement = document.createElement('option');
        optionElement.value = categorie.id;
        optionElement.textContent = categorie.libelle;
        selectElement.appendChild(optionElement);
    });
    })
    .catch(error => {
    console.error('Erreur:', error);
    });

function updateConnaissances() {
    const dataToUpdate = {
        idCategorie: id,
        libelle: document.getElementById("libelle").value,
      };
      
      fetch('http://localhost:5258/UpdateCategorie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToUpdate)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de mise à jour');
        window.location.href = "categories.html";
        }
        window.location.href = "categories.html";
      })
      .catch(error => {
        console.error('Erreur:', error);
      });

      window.location.href = "connaissances.html";

      
}

const urlAPIGet = "http://localhost:5258/ReadCategorie/" + id 

fetch(urlAPIGet)
  .then(response => response.json())
  .then(data => {
    document.getElementById('libelle').value = data.libelle;
  })
  .catch(error => console.error(error));