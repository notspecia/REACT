import { toast } from "react-toastify";
import useHomeController from "./useHomeController";
import './Home.css'
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import ModalBootstrap from "../../components/ModalBootstrap/ModalBootstrap";


function Home() {

    const { showModal, handleVisibilityModal } = useHomeController();

    return (
        <>
            <h1 className="mb-3">React Boilerplate</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fuga autem, facilis et eum quam dolores deleniti necessitatibus labore numquam provident, perspiciatis sint, dignissimos eligendi corrupti repellendus repudiandae hic est.
                Ipsum blanditiis vel dolorum repudiandae accusantium reprehenderit laborum, eligendi facere facilis error voluptas eveniet ut dolores rerum nihil molestias quia a eaque, pariatur eius consequuntur. Deleniti quisquam praesentium officiis minima.
                Se itaque temporibus, quaerat cumque eveniet adipisci cum praesentium! Eum, quia, expedita officiis esse a, autem harum quae dolore illum dolorem blanditiis. Repudiandae, blanditiis.
                Odio at sunt, aut fugiat dignissimos illum nesciunt nam non fugit harum laboriosam possimus culpa cum eaque voluptatum porro ducimus optio. Itaque tempore perspiciatis hic, iure suscipit quibusdam neque consectetur.
                Qui sequi distinctio nemo non molestiae nesciunt dicta enim unde nisi numquam alias autem iure minus libero quos optio, ipsa accusantium animi veniam quam sit. Enim cumque totam dignissimos quos!
                Inventore at quo magnam, porro illum nisi, impedit tenetur quibusdam facilis perferendis unde omnis pariatur, in iure quam dolorem quis aperiam nam itaque provident. Facere dolor iusto soluta earum eum.
                Sas provident earum quaerat ad consequatur adipisci reiciendis? Ipsa, odio, molestiae eum sed voluptatem labore vel numquam consectetur suscipit sequi est, architecto deleniti!assumenda illum nisi unde voluptatum aliquid aspernatur ipsum perferendis et amet dolore placeat suscipit ex enim molestiae accusamus dolores nostrum quae delectus, vero eaque? Labore at soluta recusandae aliquid!</p>

            <button className="btn btn-success" onClick={() => {
                toast.success("grande successo!");
            }}>prova TOAST</button >

            {/* componente card da ciclare contenente evento per aprire aìeventuali modali (ESEMPIO FREATELLI COMPONENTI) */}
            <div className="row">
                <Card handleVisibilityModal={handleVisibilityModal} />
            </div>


            {/* componente demo MODAL da ciclare ed utilizzare (collegato a un compnente fretello il bottone che la apre) */}
            {/* CASO MAI CILCASSI + ROBE DELLE CARD, CREARE UN "selectedElement stato" gurdate TEST-FINALE-PALESTRA */}
            <Modal show={showModal} handleVisibilityModal={handleVisibilityModal} />

            {/* componente demo MODAL 2, usando full bootstrap anche per la logica di apparizione/chiusura modale */}
            <ModalBootstrap />
        </>
    )
}



export default Home;