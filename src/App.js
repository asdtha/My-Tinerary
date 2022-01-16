import Home from './components/Home'
import CityCard from './components/CityCard'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'


function App() {
  return (
    <>
     <Navbar />
    <Home />
   
    </>
   /*  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />}  </>
      <Route path="/cities" element={<CityCard />}  </>
    
    </Routes>
    </BrowserRouter>
     */
  );
}

export default App;
