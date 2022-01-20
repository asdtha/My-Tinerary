import Home from './components/Home'
import Cities from './components/Cities'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Users from './components/Users'


function App() {
  return (

    <BrowserRouter>
    <Navbar /> 
    <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/user" element={<Users />} />

    </Routes>
    <Footer />
    </BrowserRouter>
     
  );
}

export default App; 
