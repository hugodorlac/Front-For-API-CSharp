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
        idConnaissance: id,
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
    document.getElementById('libelle').value = data.libelle;
    document.getElementById('description_courte').value = data.descriptionCourte;
    document.getElementById('description_longue').value = data.descriptionLongue;
  })
  .catch(error => console.error(error));



