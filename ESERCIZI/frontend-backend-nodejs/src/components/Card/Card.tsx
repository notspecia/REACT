

function Card({ openModal }) {
    return (
        <>
            <div className="card shadow-sm p-3 mb-5 bg-body rounded mt-5 col-6">
                <div className="card-body">
                    <h5 className="card-title">Card Titolo</h5>
                    <p className="card-text">Questa è una card con un bottone che apre una modale.</p>
                    <button className="btn btn-primary" onClick={openModal}>
                        Apri Modale
                    </button>
                </div>
            </div >
        </>


        // <!-- component della card singola per ogni corso, immagini e i dati inerenti ad esso-- >
        //         <div class="card px-3 py-2 d-flex justify-content-center align-items-center" style="width: 25rem;">

        //             <div class="card-body">
        //                 <!-- title descrizione e immagine del corso -->
        //                 <div class="text-center">
        //                     <h4 class="card-title">{{ corso().nome }}</h4>
        //                     <p class="card-text">{{ corso().descrizione }}</p>
        //                     <img src="{{corso().immagine}}" class="card-img-top" alt="immagine corso">
        //                 </div>

        //                 <!-- lista delle informazioni del corso della card-->
        //                 <ul class="list-group list-group-flush">
        //                     <li class="list-group-item"><strong>Istruttore</strong>: {{ corso().istruttore }}</li>
        //                     <li class="list-group-item"><strong>Durata</strong>: {{ corso().durata }} ora</li>
        //                     <li class="list-group-item"><strong>Prenotazioni max</strong>: {{ corso().prenotazioniMax }}</li>
        //                     <li class="list-group-item"><strong>Prenotazioni attuali</strong>: {{ corso().prenotazioniAttuali }}
        //                     </li>
        //                 </ul>

        //                 <div class="d-flex justify-content-around align-items-center">
        //                     <!-- bottone che permette di PRENOTARE il corso presente in questa card, se le prenotazioni attuali sono =
        //             alle prenotazioni massime, il bottone di prenotazione sarà disabilitato -->
        //                     @if (corso().prenotazioniAttuali === corso().prenotazioniMax) {
        //                         <button class="btn btn-secondary mt-3" disabled>Corso pieno!</button>
        //                     } @else {
        //                         <button class="btn btn-primary mt-3 mt-3" (click)="handleBooking(corso())" data-bs-toggle="modal"
        //                 data-bs-target="#prenotazioneModal">Prenota corso!</button>
        //             }

        //                 <!-- bottone che permette di DECREMENTARE il corso presente in questa card, se le prenotazioni attuali sono =
        //             0, il bottone di decremento sarà disabilitato -->
        //                 @if (corso().prenotazioniAttuali === 0) {
        //                     <button class="btn btn-secondary mt-3" disabled>Nessuna prenotazione!</button>
        //                 } @else {
        //                     <button class="btn btn-secondary mt-3 ms-2" (click)="handleDecrement()">Togli -</button>
        //             }
        //         </div>
        //     </div >

        // </div >
    )
}


export default Card;