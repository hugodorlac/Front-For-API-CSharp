Vue.component('menu-haut', {
    template: `
    <div class="menu-haut bg row">
            <div class="col-md-12 img ">
                <center>
                    <img class="logo" height="60" width="220" src="../assets/img/logo.png">
                    <a href="#addEmployeeModal" data-toggle="modal">
                    <img class="float-right p-2" height="60" width="60" src="../assets/img/user.svg">
                    </a>
                </center>
            </div>  
        </div>
    `,

  })

var body = new Vue({
el: '#body',
})