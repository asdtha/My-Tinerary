import Home from './components/Home'
import Cities from './components/Cities'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'


function App() {
  return (

    <BrowserRouter>
   
    <Routes>
   {/*  <Navbar /> */} 
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />} />
    </Routes>
    </BrowserRouter>
     
  );
}

export default App; 
