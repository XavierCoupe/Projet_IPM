import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Auth from './Auth';

/**
 * @author Wandrille BALLEREAU
 * @description Fonction permettant la gestion de la navbar, son affichage et son utilisation
 * @returns Une navbar contenant 4 pages différentes
 */
function Navigator(){
    const [selected, setSelected] = useState<number>(1)
    const location = useLocation();

    //gestionnaire des pages courrantes
    useEffect(() => {
      switch (location.pathname) {
        case "/":
          setSelected(1);
          break;
        case "/allCard":
          setSelected(2);
          break;
        case "/capture":
          setSelected(3);
          break;
        case "/profile":
          setSelected(4);
          break;
        default:
          setSelected(1);
      }
    }, [location.pathname]);
  
    //handle de sélection d'une page
    const handleSelect = (eventKey: string | null) => {
      if(eventKey){
        setSelected(parseInt(eventKey))
      }
    };

    if(Auth()){
      return(
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <Nav variant="pills" activeKey={selected} onSelect={handleSelect}>
              <Nav.Item>
                <Link to="/" className="nav-link" style={{ color: selected === 1 ? '#FFF' : '#00BF63' }} >
                  Ma collection
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/allCard" className="nav-link" style={{ color: selected === 2 ? '#FFF' : '#00BF63' }}>
                    Toute les cartes
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/capture" className="nav-link" style={{ color: selected === 3 ? '#FFF' : '#00BF63' }}>
                  Capturer une nouvelle carte
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/profile" className="nav-link" style={{ color: selected === 4 ? '#FFF' : '#00BF63' }} >
                  Profile
                </Link>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            {/*<GetAvatar/>*/}
          </div>
        </div>
      )
    }else{
      return(<div></div>)
    }
  
    
}

export default Navigator