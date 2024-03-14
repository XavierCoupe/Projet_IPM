import '../style/plantDetection.css'
import TakePicture from './TakePicture';
import scan from '../assets/scan.png'

function PlantNetDetection(){

    const handleSubmit = () =>{
        console.log("submit");
    }

    return (
        <div className='mainContainer'>
            <h1>Scanez une espèce</h1>
            <img className='scanImg' src={scan} alt="scan icon" />
            <form className="formContainer" onSubmit={handleSubmit}>
                <input className='inputFile' type="file" name="image" onChange={handleSubmit} />
                <button className="inputSub" type="submit">Choisir cette image</button>
            </form>
            {false && <TakePicture/>}
        </div>
        
    );
}

export default PlantNetDetection 