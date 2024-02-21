import '../style/global.css'

interface ButtonProps {
    onClick: () => void;
  }
  
const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
    return (
      <button className='toaster' onClick={onClick}>RGPD</button>
    );
}

export default ButtonComponent;
