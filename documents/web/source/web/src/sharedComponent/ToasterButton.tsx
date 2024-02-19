interface ButtonProps {
    onClick: () => void;
  }
  
const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
    return (
      <button style={{border: 'none', backgroundColor: 'transparent', color: '#FFF'}} onClick={onClick}>RGPD</button>
    );
}

export default ButtonComponent;
