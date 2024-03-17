import GetCard from "../sharedComponent/GetCard";
import testImg from "../assets/clematis.jpeg"

import '../style/newCard.css'
import { useNavigate } from "react-router-dom";

function NewCard(){

    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }

    return(
        <div className="mainContainer">
            <div className="itemContainer">
                <h2>Félicitations, vous avez capturé une Clematis !</h2>
            </div>
            <div className="itemContainer">
                <GetCard key={0} name={"testImg"} image={testImg} id={"newClematis"}/>
            </div>
            <div className="itemContainer">
                <button className="homeButton" onClick={backHome}>Voir ma collection</button>
            </div>
        </div>
    )
}

export default NewCard