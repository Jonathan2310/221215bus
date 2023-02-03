import { useRef } from 'react';
import Logo from "../../assets/Imagens/car.avif";
import '../../assets/styles/FormAltaBus.css'

function FormAltaBus() {
    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/autobus/register';

    const handlerClick = (e)=>{
        e.preventDefault();
        const busForm = new FormData(form.current)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clave: busForm.get('clave'),
                placa: busForm.get('placa'),
                numasientos: busForm.get('numasientos'),
                fecha: busForm.get('fecha'),
                tipo: busForm.get('tipo'),
                nombre: busForm.get('nombre'),
                licencia: busForm.get('licencia')
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data.message));
        });
    }


    return ( 
        <form ref={form}>
            <div className='formContainerAlta'>
                <img className="logo" src={Logo} alt="Logo de la empresa" />
                    <div className='dosCoulomn'>
                        <div className='one'>
                            <label>Clave autobus</label>
                            <input className='textos' type="text" name="clave" required/>
                        </div>
                        <div className='two'>
                            <label>Placa autobus</label>
                            <input className='textos'type="text" name="placa" required/>
                        </div>
                    </div>
                    <div className='dosCoulomn'>
                        <div className='one'>
                            <label>Numero de asientos</label>
                            <input className='textos' type="number" name="numasientos" required/>
                        </div>
                        <div className='two'>
                            <label>Flecha del chofer</label>
                            <input className='textos'type="date" name="fecha" required/>
                        </div>
                    </div>
                    <label className='label' htmlFor="name">Tipo</label>
                    <select id="bus" name="tipo" required >
                        <option value="turismo">Turismo</option>
                        <option value="lujo">Lujo</option>
                    </select>
                    <label className='label' htmlFor="usuario">Nombre del chofer</label>
                    <input className='inputsAlta' type="text" name="nombre" required/>
                    <label className='label' htmlFor="correo">Numero de licencia</label>
                    <input className='inputsAlta' type="text" name="licencia" required/>

                <button className='botonAlta' type="button" onClick={handlerClick}>Alta de autobuses</button>
            </div>
        </form>
     );
}

export default FormAltaBus;