import '../style/plantDetection.css'
import TakePicture from './TakePicture';
import scan from '../assets/scan.png'
import { useNavigate } from 'react-router-dom';

function PlantNetDetection(){

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("submit");
    }

    const handleCapture = () => {
        navigate("/newCard");
    }

    return (
        <div className='mainContainer'>
            <h1>Scanez une espèce</h1>
            <img className='scanImg' src={scan} alt="scan icon" />
            <form className="formContainer" onSubmit={handleSubmit}>
                <input className='inputFile' type="file" name="image" onChange={handleSubmit} />
                <button className="inputSub" type="submit" onClick={handleCapture}>Choisir cette image</button>
            </form>
            {false && <TakePicture/>}
        </div>
        
    );
}

export default PlantNetDetection 