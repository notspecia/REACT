// componente creato appositamente per usarlo all'interno di <NavBar> come elemento link <a>

import "./Link.css"

function Link() {

    // oggetto variabile contente delle proprietà di style da usare nell'INLINE del TSX
    const linkStyle = {
        color: "red",
        backgroundColor: "yellow",
        borderRadius: "20px",
    }

    return (
        <>
            <a href="#" style={linkStyle}>ciao sono un link creato in Link component</a>
        </>
    )
}

export default Link;