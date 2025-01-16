import { Link } from "react-router-dom";

import "./NavBar.css";


/* componente NavBar che permette di collegare i link delle pagine del routing
i path dentro <Link> devono corrispondere a quelli dentro i <Route> dentro App.tsx */
function NavBar() {


    return (
        <>
            <nav className="flex flex-wrap flex-row justify-between items-center fixed top-0 left-0 w-screen z-20 bg-gradient-to-r from-sky-500/10 to-indigo-500/20 rounded-b-2xl">
                <div className="w-20 ml-8 py-1">
                    <img src="./src/assets/gym-icon.png" alt="logo gym" />
                </div>
                <ul className="flex flex-wrap justify-around w-5/12 text-lg text-white">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/equipments-booked">Equiments Booked</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </>
    );

}

export default NavBar;