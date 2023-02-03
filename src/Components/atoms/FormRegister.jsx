import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from "../../assets/Imagens/car.avif";
import '../../assets/styles/FormRegister.css'

function FormRegister() {
    const navigate = useNavigate()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario'

    const handlerClick = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)

        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }

        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data))
        })
    }

    return ( 
        <form ref={form}>
            <div className='formContainerRegister'>
                <img className="logo" src={Logo} alt="Logo de la empresa" />
                
                    <label className='label' htmlFor="name">Name</label>
                    <input className='inputsRegister' type="text" id="name" name="nombre" required/>
                    <label className='label' htmlFor="usuario">Username</label>
                    <input className='inputsRegister' type="text" id='usuario' name="usuario" required/>
                
                    <label className='label' htmlFor="correo">E-mail</label>
                    <input className='inputsRegister' type="text" id="correo" name="correo" required/>
                
                    <label className='label' htmlFor="password">Password</label>
                    <input className='inputsRegister' type="password" id='password' name='contrasenia' required/>
                

                <button className='botonRegister' type="button" onClick={handlerClick}>Registrarse</button>
            </div>
        </form>
     );
}

export default FormRegister;