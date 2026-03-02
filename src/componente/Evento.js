import Button from "./Button";

function Evento() {

   function meuEvento() {
    alert("Fui ativado") 
   }

   function segundoEvento(){
    alert("Ativando o segundo evento"); 
   }

    return(
      <div>
        <p>Click para disparar um Evento</p>  
        <Button event={meuEvento} text="Primeiro Evento" />  
        <Button event={segundoEvento} text="Segundo Evento"/>    

      </div>
    )
} 

export default Evento 