function auth() {
    const dataLogin = {
      Email: document.getElementById("emailInput").value,
      MotDePasse: document.getElementById("mdpInput").value,
    };
  
    fetch('http://localhost:5258/Login', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataLogin)
    })
      .then(response => {
        if (!response.ok) {
          window.location.href = "index.html?error=1";
          throw new Error('Erreur de connexion');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        sessionStorage.setItem("IdUtilisateur", data.idUtilisateur); 
        sessionStorage.setItem("Token", generateToken());
        insertToken()
        window.location.href = "vue/home.html";
      })
      .catch(error => {
        document.getElementById("mdpError").style.display = "";
        console.error('Erreur:', error);
        window.location.href = "index.html?error=1";
      });
  }
  

  function insertToken() {
    const dataLogin = {
      IdUtilisateur: sessionStorage.getItem("IdUtilisateur"),
      Token: sessionStorage.getItem("Token")
    };
  
    fetch('http://localhost:5258/UpdateToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataLogin)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de création');
        }
        console.log('Création réussie');
        window.location.href = "vue/home.html";
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }

  function generateToken() {
    const tokenLength = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
  
      // Ajouter un tiret après chaque groupe de 4 caractères, sauf pour le dernier groupe
      if ((i + 1) % 4 === 0 && i !== tokenLength - 1) {
        token += '-';
      }
    }
  
    return token;
  }
  

