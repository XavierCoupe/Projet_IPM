import laga from '../assets/laga.webp'

/**
 * @author Wandrille BALLEREAU
 * @description Gestion du design des avatars
 * @returns code HTML générant un avatar
 */
function GetAvatar() {
    return (
      <div style={{width: "2rem"}}>
        <img src={laga} alt="avatar de medos" style={{width: "6rem", borderRadius: "50px", height: "6rem", objectFit: "cover"}}/>
      </div>
    );
}

export default GetAvatar