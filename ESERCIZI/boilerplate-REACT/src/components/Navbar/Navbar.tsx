import { Link, NavLink } from "react-router-dom";
import './Navbar.css';



function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm mb-5">
            <div className="container-fluid">
                <NavLink className="navbar-brand me-5" to="/">
                    <img src="https://cdn.worldvectorlogo.com/logos/lorem-lorem-1.svg" alt="logo myapp" />
                    <span className="fs-3 fw-bold">MyApp</span>
                </NavLink>
                {/* menu per dispositivi mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/price">
                                Price
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portofolio">
                                Portofolio
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;