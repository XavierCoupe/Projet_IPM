import HerbadexForm from "../sharedComponent/HerbadexForm";
import GetAvatar from "../sharedComponent/GetAvatar";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Auth from "../sharedComponent/Auth";

function Profile(){

    const navigate = useNavigate();

    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
                    <GetAvatar/>
                </div>
                <HerbadexForm/>
            </div>
        </div>
    );
}

export default Profile