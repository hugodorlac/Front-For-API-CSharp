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
  var body = new Vue({
    el: '#app',
    })