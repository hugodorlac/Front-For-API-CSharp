Vue.component('menu-gauche', {
    template: `
    <div class="menu-gauche bg">
    <div class="icons ml-3 ">
      <a href="./home.html"><img class="mb-4 icon" width="40" src="./assets/img/home.svg"></a>
      <a href="./connaissances.html"><img class="mb-4 icon" width="40" src="./assets/img/book.svg"></a>
      <a href="./categories.html"><img class="mb-4 icon" width="40" src="./assets/img/project.svg"></a>
      <img class="mb-4 icon" width="40" src="./assets/img/ressources.svg">
      <a href="./login.html"><img class="mb-4 icon" width="40" src="./assets/img/out.svg"></a>
    </div>
  </div>`,
  })

  Vue.component('menu-haut', {
    template: `
    <div class="menu-haut bg row">
            <div class="col-md-12 img ">
                <center>
                    <img class="logo" height="60" width="150" src="./assets/img/logo.png">
                    
                </center>
            </div>  
        </div>
    `,
  })

  Vue.component('container-tableau', {
    props: {
      titre: String,
      libelle: String
    },
    template: `
    <main>
    <h5 class="mt-4 ml-5"><a class="menu-actif" href="./connaissances.html">{{ titre }}</a></h5>
    <div class="containerInfo pb-1 bg col-md-12">
        <h3 class="mt-5">{{ titre }}</h3>
        <hr>

        <div class="container-fluid col-md-12">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                        </div>
                        <div class="col-sm-6">
                            <a href="#addEmployeeModal" class="btn btn-light" data-toggle="modal"><span>+ </span> <span>&nbsp; Ajouter une {{libelle}}</span></a>
                        </div>
                    </div>
                </div>
                <table id="table" class="table table-striped table-hover">
                    <thead>
                        <tr v-if="libelle == 'connaissance'">
                            <th>ID</th>
                            <th>Catégorie Associée</th>
                            <th>Libellé</th>
                            <th>Description courte</th>
                        </tr>
                        <tr v-else-if="libelle == 'catégorie'">
                            <th>ID</th>
                            <th>Libellé</th>
                        </tr>
                    </thead>
                    <tbody>		
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Edit Modal HTML -->
        <div id="addEmployeeModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">						
                            <h4 class="modal-title">Ajouter une {{libelle}}</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div v-if="libelle === 'connaissance'" class="modal-body">					
                            <div class="form-group">
                                <label for="select">Catégorie associée</label><br>
                                <select id="categorie" class="form-select" aria-label="select">
                                    <option selected>Pas de catégorie associée</option>
                                  </select>
                            </div>
                            <div class="form-group">
                                <label>Libellé</label>
                                <input id="libelle" type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Description courte</label>
                                <input id="descriptionCourte" type="text" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Description longue</label>
                                <textarea id="descriptionLongue" rows="7" class="form-control" required></textarea>
                            </div>					
                        </div>
                        <div class="modal-body" v-else-if="libelle === 'catégorie'">					
                                <div class="form-group">
                                    <label>Libellé</label>
                                    <input id="libelle" type="text" class="form-control" required>
                                </div>				
                            </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-dismiss="modal" value="Annuler">
                            <input onclick="createConnaissance()" type="submit" class="btn btn-color" value="Ajouter">
                        </div>
                    </form>
                </div>
            </div>
    </div>
</div>
</main>
    `
  })
  
  var app = new Vue({
    el: '#app',
  })

  