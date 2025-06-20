import { Link, NavLink } from "react-router-dom";
import './Navbar.css';



function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MyApp</NavLink>
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
                            <span className="nav-link disabled" aria-disabled="true">
                                Disabled
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;