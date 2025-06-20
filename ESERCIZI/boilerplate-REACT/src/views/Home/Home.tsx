import { toast } from "react-toastify";

import useHomeController from "./useHomeController";
import './Home.css'


function Home() {

    const { } = useHomeController();

    return (
        <>
            <h1>ciao</h1>
            <button className="btn btn-success" onClick={() => {
                toast.success("grande")
            }}>prova</button >
        </>
    );
}



export default Home;