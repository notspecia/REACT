import { toast } from "react-toastify";
import useHomeController from "./useHomeController";
import './Home.css'
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";


function Home() {

    const { showModal, openModal, closeModal } = useHomeController();

    return (
        <>
            <h1 className="mb-3">React Boilerplate</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fuga autem, facilis et eum quam dolores deleniti necessitatibus labore numquam provident, perspiciatis sint, dignissimos eligendi corrupti repellendus repudiandae hic est.
                Ipsum blanditiis vel dolorum repudiandae accusantium reprehenderit laborum, eligendi facere facilis error voluptas eveniet ut dolores rerum nihil molestias quia a eaque, pariatur eius consequuntur. Deleniti quisquam praesentium officiis minima.
                Sequi,us vero deserunt nobis et dolor odit explicabo placeat culpa provident ad quis ex atque voluptatem architecto! Facere.
                Sint inventore nisi blanditiis commodi nam vero est, nihil expedita culpa iusto aliquam ex quisquam. Commodi quis fugit quibusdam vitae molestiae expedita laudantium, repudiandae, reiciendis blanditiis repellendus doloremque adipisci pariatur!
                Aspernatur aut harum iusto tempore dolores nihil reiciendis sint assumenda odit aliquid quae repellendus aperiam culpa praesentium iste, modi illum laboriosam, nam inventore expedita commodi repudiandae eum nobis voluptatum. Est?
                atis ullam maiores illum repellendus illo harum tenetur vero ipsam possimus nam aliquid. Similique nam cum consequatur cupiditate sit.
                Facere quo, incidunt commodi, totam voluptas ad itaque temporibus, quaerat cumque eveniet adipisci cum praesentium! Eum, quia, expedita officiis esse a, autem harum quae dolore illum dolorem blanditiis. Repudiandae, blanditiis.
                Odio at sunt, aut fugiat dignissimos illum nesciunt nam non fugit harum laboriosam possimus culpa cum eaque voluptatum porro ducimus optio. Itaque tempore perspiciatis hic, iure suscipit quibusdam neque consectetur.
                Qui sequi distinctio nemo non molestiae nesciunt dicta enim unde nisi numquam alias autem iure minus libero quos optio, ipsa accusantium animi veniam quam sit. Enim cumque totam dignissimos quos!
                Inventore at quo magnam, porro illum nisi, impedit tenetur quibusdam facilis perferendis unde omnis pariatur, in iure quam dolorem quis aperiam nam itaque provident. Facere dolor iusto soluta earum eum.
                Sas provident earum quaerat ad consequatur adipisci reiciendis? Ipsa, odio, molestiae eum sed voluptatem labore vel numquam consectetur suscipit sequi est, architecto deleniti!assumenda illum nisi unde voluptatum aliquid aspernatur ipsum perferendis et amet dolore placeat suscipit ex enim molestiae accusamus dolores nostrum quae delectus, vero eaque? Labore at soluta recusandae aliquid!</p>

            <button className="btn btn-success" onClick={() => {
                toast.success("grande")
            }}>prova TOAST</button >

            {/* componente card da ciclare contenente evento per aprire aìeventuali modali (ESEMPIO FREATELLI COMPONENTI) */}
            <div className="row">
                <Card openModal={openModal} />
                <Card openModal={openModal} />
            </div>


            {/* componente demo MODAL da ciclare ed utilizzare (collegato a un compnente fretello il bottone che la apre) */}
            {/* CASO MAI CILCASSI + ROBE DELLE CARD, CREARE UN "selectedElement stato" gurdate TEST-FINALE-PALESTRA */}
            <Modal show={showModal} closeModal={closeModal} />
        </>
    )
}



export default Home;