import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import useNavbarController from "./useNavbarController";
import "./Navbar.css";


/**
 * componente Navbar
 * 
 * componente di navigazione responsiva che offre il menu principale della pagina, renderizzato direttamente all'interno di App.tsx per permetter la navigazione delle routes. 
 * Se l'utente è autenticato (basato sul JWT), mostra il bottone di logout. 
 * Il menu è diviso in due parti: una per dispositivi desktop (visibile sempre) e una per dispositivi mobili (visibile solo quando il menu hamburger è aperto).
 */
function NavBar() {

    // destructuring dell'oggetto restituito da "useNavbarController" contenente stati e logica con funzioni per gestire la navbar
    const { isLoggedIn, handleLogout } = useNavbarController();

    //* stato per tenere traccia dello stato del menu mobile se è aperto o chiusa
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            {/* navbar responsive creata con libreria material ui */}
            <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-sky-500/10 to-indigo-500/20 rounded-b-2xl shadow-lg">

                {/* ***MENU DI NAVIGAZIONE PRINCIPALE*** */}
                <div className="flex justify-between items-center px-6 py-3">
                    {/* logo identificativo della pagina (SIA DESKTOP CHE MOBILE) */}
                    <div className="w-20 h-20">
                        <img src="/gym-icon.png" alt="logo gym" />
                    </div>
                    {/* menu di navigazione per dispositivi desktop */}
                    <ul className="hidden md:flex items-center space-x-14 text-white font-fira text-lg">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/equipments-booked">Equipments Booked</Link></li>
                        {!isLoggedIn && (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )}
                        {/* bottone logout (mostrato solo se il token JWT è presente) in base allo stato di isLoggedIn */}
                        {isLoggedIn && (
                            <IconButton onClick={handleLogout} color="inherit">
                                <LogoutIcon sx={{ fontSize: 30 }}></LogoutIcon>
                            </IconButton>
                        )}
                    </ul>
                    {/* creazione del bottone per il menu mobile quando la min-width è inferiore a 768px, nascondo le voci di navigazione desktop */}
                    <div className="md:hidden text-white">
                        <IconButton onClick={() => setIsOpen(!isOpen)} color="inherit">
                            <MenuIcon sx={{ fontSize: 35 }} />
                        </IconButton>
                    </div>
                </div>

                {/* ***MENU DI NAVIGAZIONE MOBILE***
                menu hamburger renderizzato solo se isOpen è true (quando viene cliccato il bottone del menu) */}
                {isOpen && (
                    <ul className="md:hidden justify-center bg-gradient-to-r from-sky-500/10 to-indigo-500/20 text-white font-fira text-lg px-4 py-4 space-y-6">
                        <li><Link to="/" className="block">Home</Link></li>
                        <li><Link to="/equipments-booked" className="block">Equipments Booked</Link></li>
                        {!isLoggedIn && (
                            <>
                                <li><Link to="/login" className="block">Login</Link></li>
                                <li><Link to="/register" className="block">Register</Link></li>
                            </>
                        )}
                        {isLoggedIn && (
                            <IconButton onClick={handleLogout} color="inherit">
                                <LogoutIcon sx={{ fontSize: 30 }}></LogoutIcon>
                            </IconButton>
                        )}
                    </ul>
                )}

            </nav>
        </>
    );
}

export default NavBar;
