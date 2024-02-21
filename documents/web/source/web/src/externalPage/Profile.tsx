import HerbadexForm from "../sharedComponent/HerbadexForm";
import GetAvatar from "../sharedComponent/GetAvatar";

function Profile(){
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