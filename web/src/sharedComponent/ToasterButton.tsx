import '../style/global.css'

/**
 * Interface pour ButtonComponent
 */
interface ButtonProps {
    onClick: () => void;
  }

/**
 * @author Wandrille BALLEREAU
 * @param param0 Une fonction
 * @returns Le code HTML permettant l'affichage d'un boutton qui active/désactive une notification
 */
const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
    return (
      <button className='toaster' onClick={onClick}>RGPD</button>
    );
}

export default ButtonComponent;
