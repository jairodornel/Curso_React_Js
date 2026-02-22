import './App.css';
import HelloWord from './componente/HelloWord';
import SayMyName from './componente/SayMyName'; 
import Pessoa from './componente/Pessoa'; 
import List from './componente/List'; 

function App() {
 

  const nome = "Maria"; 

  return (
    <div className='App'>
    <HelloWord/>  
    <SayMyName nome= "Jairo"/> 
    <SayMyName nome= {nome}/> 
    <Pessoa nome= "Tales" idade= "38" profissao= "Programador" foto= "https://via.placeholder.com/150"/> 
    <List/> 
    </div>  
  ); 
}

export default App;
