import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigator from './sharedComponent/Navigator';
import MyCollection from './externalPage/MyCollection';
import AllCard from './externalPage/AllCard';
import Footer from './sharedComponent/Footer';
import Capture from './externalPage/Capture';

import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Router>
        <Navigator/>
        <Routes>
          <Route path="/maCollection" Component={MyCollection} />
          <Route path="/allCard" Component={AllCard} />
          <Route path="/capture" Component={Capture} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
