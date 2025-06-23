import { Link, NavLink } from "react-router-dom";
import './Navbar.css';



function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm position-fixed w-100 z-3 ">
            <div className="container-fluid">
                <NavLink className="navbar-brand me-5 d-flex align-items-center" to="/">
                    <img src="/logo-demo.png" alt="logo myapp" />
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
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/price">
                                Price
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portofolio">
                                Portofolio
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;