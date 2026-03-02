import { useState } from "react"; 

function Condicional() {


    const [email, setEmail] = useState(); 
    const [useEmail, setUserEmail] = useState(); 

    
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email) 
    }

    function limparEmail(e) {
        setUserEmail('') 
    }
    
    
    return( 
      <div>
        <h2> Cadastre seu E-mail : </h2> 
        <form>
            <input type="email" placeholder="Digite seu E-mail..." onChange={(e)=> setEmail(e.target.value)}></input>
            <button type="submit" onClick={enviarEmail}>Enviar Email</button>
            {useEmail &&(
                <div>
                    <p>O e-mail do usuario é : {useEmail} </p>
                    <button onClick={limparEmail}>Limpar E-mail</button> 
                </div>
            )} 

        </form>
      </div>
    )
}  

export default Condicional; 
