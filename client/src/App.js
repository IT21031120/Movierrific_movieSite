import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';

import './Styles/NavBar.css'
import Movies from './Pages/Movies';
import Footer from './Components/Footer';
import Locations from './Pages/Locations';
import PlaceOne from './Components/PlaceOne';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/MovieCollections' element={<Movies />} />
        <Route exact path='/Locations' element={<Locations />} />
        <Route exact path='/Adverticments' element={<Locations />} />
        <Route exact path='/LibertyMovieTraffic' element={<PlaceOne />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
