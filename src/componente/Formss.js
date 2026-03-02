import { useState } from "react"; 

function Formss() {
   
    function cadastrarUsuario(e) {
        e.preventDefault(); 
        alert('Usuario:' + name + 'senha'+ password ); 
    }

    const [name,setName] = useState(); 
    const [password,setPassword] = useState();  

   
    return(
     <div>
        <h1>Meu Cadastro</h1> 
        <form onSubmit={cadastrarUsuario}> 
            <div>
              <label htmlFor="name">Nome: </label> 

                <input type="text" id="name" name="name" placeholder="Digite seu nome" 
                onChange={(e)=> setName(e.target.value)}/>  /* Modifica o valor no state */  
            </div>
            <div> 
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="Digite sua senha"
                onChange={(e)=> setPassword(e.target.value)}/>    
            </div>
            <div>
                <input type="submit" value= "Cadastrar"/>   
            </div>
        </form>
     </div>
    )
} 

export default Formss ;  