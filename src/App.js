import Home from './components/Home'
import Cities from './components/Cities'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'


function App() {
  return (

    <BrowserRouter>
    <Navbar /> 
    <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />} />
{/*       <Route path="/users" element={<User />} />
 */}
    </Routes>
    </BrowserRouter>
     
  );
}

export default App; 
