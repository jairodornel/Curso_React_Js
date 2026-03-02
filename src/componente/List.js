import Item from "./Item"; 

function List() {
    return(
   <>
    <h1>Minha lista </h1>
    <ul>
        <Item marca = "Fusca" ano_lancamento={2000}/>
        <Item marca = "Gol" ano_lancamento={2003}/>  
        <Item/>

    </ul>
   </> // Fragments 
    )
} 

export default List ; 