const navbarWrapper = document.getElementById('navbar-wrapper');

// asignamos valores de la url

let navbar = `
    <div class="container-fluid">

    <nav class="row navbar navbar-expand-lg justify-content-between navbar-config">

            <div class="col-lg-3 col-md-6 col-8 p-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <a class="navbar-brand" href="../index.html">
                    <img class="logo" src="../assets/icons/logo_vers_blanco_400x100.svg" alt="">
                </a>

                <a  href="./blog.html">
                    <img class="olympics-icon" src="../assets/icons/olympics.svg" alt="">
                </a> 
            </div><!--logo-->

                <div class="col-lg-6 col-md-3 col-sm-3 col-5 menu-hamburger">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto d-flex justify-content-around" style="width: 100%;">
                        
                        <li class="nav-item active">
                        <a class="nav-link active" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link"  href="./about_us.html">Nosotros</a>
                        </li>

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="./penny.html">Pennyboards</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="./longboard.html">Longboards</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="./skates.html">Skates</a>
                        </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="./contact.html">Contacto</a>
                        </li>
        
                    </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-3 col-4 p-0 d-flex justify-content-around align-items-center">
                    
                    <button class="btn-icon">
                    <a href="../pages/add-new-procuct.html">
                        <img class="img-icon hide-admin" src="../assets/icons/iconomas_menu_100x100-10.svg" alt="">
                    </a>
                    </button><!--add new product-->

                    <button class="btn-icon dropdown">
                    <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        <img class="img-icon" src="../assets/icons/humanoskater_barmenu_100x100.svg" alt="">
                    </a>
                    
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="./signup.html">Registrarse</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="./login.html">Iniciar sesión </a>
                    </div>

                    </button><!--login-->

                    <button class="btn-icon">
                    <a href="./cart.html">
                        <img class="img-icon" src="../assets/icons/carrito_barmenu_100x100.svg" alt="">
                    </a>
                    </button><!--cart-->

                </div>

    </nav><!--navbar-->
    </div>
`;

navbarWrapper.innerHTML = navbar;

let userLogged = window.sessionStorage.getItem("userLogged");
let token = JSON.parse(window.sessionStorage.getItem("token")).accessToken;
if (token != null && userLogged != null) {
    fetch("http://localhost:8081/api/admin/",
        {
            method: 'POST',
            body: userLogged,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Impuls8 ' + token
            }
        })
        .then(res => res.json())
        .then(isAdmin => {
            if (isAdmin) {
                document.getElementsByClassName("hide-admin")[0].classList.remove("hide-admin");
            }
        })
        .catch(error => console.error('Error:', error));
}