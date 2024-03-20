import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigator from './sharedComponent/Navigator';
import MyCollection from './externalPage/MyCollection';
import AllCard from './externalPage/AllCard';
import Footer from './sharedComponent/Footer';
import Capture from './externalPage/Capture';
import Profile from './externalPage/Profile';
import Connection from './externalPage/Connection';
import InitConnexion from './sharedComponent/InitConnexion';
import NewCard from './externalPage/NewCard';
import SingUp from './externalPage/SingUp';

import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  InitConnexion();

  return (
    <>
      <Router>
        <Navigator/>
        <Routes>
          <Route path="/" Component={MyCollection} />
          <Route path="/allCard" Component={AllCard} />
          <Route path="/capture" Component={Capture} />
          <Route path="/profile" Component={Profile} />
          <Route path="/connexion" Component={Connection} />
          <Route path="/singup" Component={SingUp} />
          <Route path="/newCard" Component={NewCard} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
