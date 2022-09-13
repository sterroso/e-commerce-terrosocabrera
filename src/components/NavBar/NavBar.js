function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Explorar</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Departamentos
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">PC's Portátiles</a></li>
                                <li><a class="dropdown-item" href="#">PC's de Escritorio</a></li>
                                <li><a class="dropdown-item" href="#">PC's Gaming</a></li>
                                <li><a class="dropdown-item" href="#">Tabletas y Teléfonos Móviles</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Accesorios y Refacciones</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Software y Licencias</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Mobiliario</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#">Ofertas</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Registrarme</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Entrar</a></li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;