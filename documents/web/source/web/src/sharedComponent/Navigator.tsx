import { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigator(){
    const [selected, setSelected] = useState<number>(1)
    const location = useLocation();

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
  
    const handleSelect = (eventKey: string | null) => {
      if(eventKey){
        setSelected(parseInt(eventKey))
      }
    };
  
    return(
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <Nav variant="pills" activeKey={selected} onSelect={handleSelect}>
              <Nav.Item>
                <Link to="/" className="nav-link" style={{ color: selected === 1 ? '#FFF' : '#2997ff' }} >
                  Ma collection
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/allCard" className="nav-link" style={{ color: selected === 2 ? '#FFF' : '#2997ff' }}>
                    Toute les cartes
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/capture" className="nav-link" style={{ color: selected === 3 ? '#FFF' : '#2997ff' }}>
                  Capturer une nouvelle carte
                </Link>
              </Nav.Item>
              <NavDropdown title="Options" id="nav-dropdown">
                <Link to="/profile" className="nav-link" style={{ color: selected === 4 ? '#FFF' : '#2997ff' }} >
                    Profile
                </Link>
                <NavDropdown.Item eventKey="4.2">Paramètres</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Déconnexion</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
          <div>
            {/*<GetAvatar/>*/}
          </div>
        </div>
    )
}

export default Navigator