const navbarWrapper = document.getElementById('navbar-wrapper');

let navbar = `
    <div class="container-fluid">

        <nav class="row navbar navbar-expand-lg justify-content-between navbar-config">

            <div class="col-lg-3 col-md-4 col-8">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand" href="../index.html">
                    <img class="logo" src="../assets/icons/logo_vers_blanco_400x100.svg" alt="">
                </a>
            </div><!--logo-->    

            <div class="col-lg-6 none">

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto d-flex justify-content-around" style="width: 100%;">
                            
                        <li class="nav-item active">
                            <a class="nav-link" id="inicio" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-white" href="./about_us.html">Nosotros</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Pennyboards</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="./longboard.html">Longboards</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Skates</a>
                            </div>
                        </li>
                    
                
                        <li class="nav-item">
                            <a class="nav-link text-white" href="./contact.html">Contacto</a>
                        </li>
            
                    </ul>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-4  d-flex justify-content-around align-items-center">
                        
                <button class="btn-icon">
                    <a href="./add-new-procuct.html">
                        <img class="img-icon" src="../assets/icons/iconomas_menu_100x100-10.svg" alt="">
                    </a>
                </button><!--add new product-->

                <button class="btn-icon">
                    <a href="./signup.html">
                        <img class="img-icon" src="../assets/icons/humanoskater_barmenu_100x100.svg" alt="">
                    </a>
                </button><!--login-->

                <button class="btn-icon">
                    <a href="#">
                        <img class="img-icon" src="../assets/icons/carrito_barmenu_100x100.svg" alt="">
                    </a>
                </button><!--cart-->

            </div>

        </nav><!--navbar-->
    </div>
`;

navbarWrapper.innerHTML = navbar;