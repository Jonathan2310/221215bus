import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../assets/Imagens/car.avif";
import '../../assets/styles/FormLogin.css'

function FormLogin() {
  const navigate = useNavigate();

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/iniciar';
    
    const handlerClick = (e)=>{
        e.preventDefault();
        const loginForm = new FormData(form.current)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: loginForm.get('usuario'),
                contrasenia: loginForm.get('contrasenia')
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            if(data.status === false){
                alert(JSON.stringify(data.message));
            }
            else{
                navigate("/altaBus");
            } 
        });
    }

  return (
   
      <form ref={form}>
        <div className="formContainer">
          <img className="logo" src={Logo} alt="Logo de la empresa" />
          <label className="label" htmlFor="user">Username</label>
          <input className="inputsLogin" type="text" id='user' 
            name="usuario" required
            />
          <label className="label" htmlFor="password">Password</label>
          <input className="inputsLogin" type="password" id='password' 
            name="contrasenia" required
            />
          <button className="boton" onClick={handlerClick}>Iniciar sesión</button>
          <Link className="link" to="/register">No tienes cuenta, Registrate</Link>
        </div>
      </form>
      
  );
}

export default FormLogin;
