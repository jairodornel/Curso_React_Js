import './App.css';
import OutraListaJs from './componente/OutraListaJs';


function App() {
   
  const meusItens = ["React", "Vue" , "Angular"]

  return (
    <div className='App'>
   <h1>Renderização de Listas </h1> 
   <OutraListaJs itens={meusItens} />  
      <OutraListaJs itens={[]} />   

       
    </div>    
  ); 
}

export default App;
