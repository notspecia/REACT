// ! questo componente di prova lo andremo ad "IMPORTARE" all'interno del componente <app> in `App.tsx`

import "./NavBar.css"; // importiamo lo style di questo componente
import Link from "../Link/Link"; // importazione del componente <Link> dal file `Link.tsx`

function NavBar() {

    const styleObject = {
        color: "red",
        backgroundColor: "blue",
        fontFamily: "Arial"
    }

    // VARIABILE DINAMICA da utilizzare nelle {} all'interno dei tag HTML per creare codice JS
    const today: Date = new Date();
    const logo: string = "/vite.svg";

    // ritorniamo il jsx da poi integrare dentro <App> che è il component principale, usiamo anche delle varibile per comporre il tutto
    return (
        <>
            <h4 style={styleObject}>ciao oggi è il {today.toDateString()} e sono le {today.getHours()} </h4>
            <img src={logo} alt="logo vite" />
            <ul>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
                <li><Link></Link></li>
            </ul>
            <h3 className="titleStyle">ciao uso la classe per lo style</h3>
        </>
    )
}


export default NavBar; // dobbiamo esportare questo componente per essere importato da altre parti!!