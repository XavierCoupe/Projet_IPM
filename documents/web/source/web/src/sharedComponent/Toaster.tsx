import { Toast } from 'react-bootstrap';

interface ToastProps {
  show: boolean;
  onClose: () => void;
}

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