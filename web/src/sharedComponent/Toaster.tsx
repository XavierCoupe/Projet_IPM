import { Toast } from 'react-bootstrap';

/**
 * Interface de Toaster
 */
interface ToastProps {
  show: boolean;
  onClose: () => void;
}

/**
 * @author Wandrille BALLEREAU
 * @param param0 Booléen indiquant si la notification doit être montrée
 * @returns Le code HTML permettant d'afficher ou non la notification
 */
const Toaster: React.FC<ToastProps> = ({ show, onClose }) => {
  return (
    <Toast show={show} onClose={onClose}>
      <Toast.Header>
        <strong className="me-auto">RGPD are respected</strong>
      </Toast.Header>
      <Toast.Body>So don't worry bro.</Toast.Body>
    </Toast>
  );
}


export default Toaster;