import { toast } from "react-toastify";

import useHomeController from "./useHomeController";
import './Home.css'



function Home() {

    const { } = useHomeController();

    return (
        <>
            <h1 className="mb-3">React Boilerplate</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fuga autem, facilis et eum quam dolores deleniti necessitatibus labore numquam provident, perspiciatis sint, dignissimos eligendi corrupti repellendus repudiandae hic est.
                Ipsum blanditiis vel dolorum repudiandae accusantium reprehenderit laborum, eligendi facere facilis error voluptas eveniet ut dolores rerum nihil molestias quia a eaque, pariatur eius consequuntur. Deleniti quisquam praesentium officiis minima.
                Sequi, at recusandae? Quos vero nemo inventore assumenda, cupiditate repellat aliquam nisi dicta molestiae consequatur voluptatem, reprehenderit quisquam illo fuga, animi modi expedita. Odit ab, voluptatibus corporis incidunt necessitatibus reiciendis.
                Nullalaborum id nihil, a molestias, perferendis laboriosam? Quam molestiae ipsa tempora a facilis, error facere dolore amet pariatur corrupti quibusdam iure, sed aliquid?
                Suscipit reprehenderit magni voempore iusto dignissimos quam voluptatum similique eligendi quisquam, error cumque, facilis quidem animi architecto exercitationem vel optio? Eaque iste commodi unde, molestias expedita hic. Eligendi.
                Dicta assumenda illum nisi unde voluptatum aliquid aspernatur ipsum perferendis et amet dolore placeat suscipit ex enim molestiae accusamus dolores nostrum quae delectus, vero eaque? Labore at soluta recusandae aliquid!</p>
            <button className="btn btn-success" onClick={() => {
                toast.success("grande")
            }}>prova</button > </>
    );
}



export default Home;