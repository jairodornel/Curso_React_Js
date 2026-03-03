import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './componente/NavBar';
import Footer from './componente/layout/Footer';


function App() {
   

  return (
    <Router>
    <NavBar/> 
    <Routes>
    <Route exact path='/' element={<Home/>}/>


    <Route path='/empresa' element={<Empresa/>}/>


    <Route path='/contato' element={<Contato/>}/> 



    </Routes>

    <Footer/>
    </Router>
  ); 
}

export default App;
