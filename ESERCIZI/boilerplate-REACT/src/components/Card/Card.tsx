

function Card({ handleVisibilityModal }) {
    return (
        <>
            {/* versione 1 */}
            <div className="card shadow-sm p-3 mb-5 bg-body rounded mt-5 col-12">
                <div className="card-body">
                    <h5 className="card-title">Card Titolo</h5>
                    <p className="card-text">Questa è una card con un bottone che apre una modale.</p>
                    <button className="btn btn-primary" onClick={() => handleVisibilityModal(true)}>
                        Apri Modale
                    </button>
                </div>
            </div >

            {/* versione 2 (progetto vue vesta bonus) */}
            <div className="card-wrapper mb-5 col-12">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">prova</h3>
                        <div className="card-text pt-2">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis perferendis cum dolores voluptatem tenetur recusandae obcaecati cumque maxime rem rerum, incidunt saepe natus dolor consequatur iusto. Odit eius consectetur asperiores.
                                Qui neque voluptatem magnam vel molestiae quia dolor minus molestias dolorum fugit! Sequi soluta ab, ut eveniet quidem neque unde libero. Deserunt dolores officia iste reiciendis, culpa voluptates autem ipsam!</p>
                            <button className="btn btn-primary" onClick={() => handleVisibilityModal(true)}>
                                Apri Modale
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* versione 3 con immagine in cima e titolo e testo normale */}
            <div className="card mb-5 pt-3 w-50 col-12">
                <img src="https://t3.ftcdn.net/jpg/02/22/96/00/360_F_222960005_bVo8WMI5rRTYi4wABTszEnM5YXcAzHZQ.jpg" className="card-img-top" alt="Immagine di esempio" />
                <div className="card-body">
                    <h5 className="card-title">Titolo Card</h5>
                    <p className="card-text">
                        Questa è una card con immagine in cima, un titolo e un testo di esempio per completare il layout.
                    </p>
                    <button className="btn btn-primary" onClick={() => handleVisibilityModal(true)}>
                        Apri Modale
                    </button>
                </div>
            </div>

        </>

    )
}


export default Card;