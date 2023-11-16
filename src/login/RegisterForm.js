import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext';
import { useNavigate } from 'react-router-dom';

// Para verificar que no registre con el mismo correo
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../conexion/firebase';

function RegisterForm() {

  const { register } = useAuth();             // Registra usuario

  const [email, setEmail] = useState('');       // Variables para correo
  const [password, setPassword] = useState(''); // Variable para password

  const navigate = useNavigate();               // Navegación

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate('/iniciarsesion'); // Redirigir a ruta /iniciarsesion
      console.log("Se registro usuario...xxx");
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  }

  return (
    <div className='container'>
      <div className='seccion'>
        <h2 className='seccion__title'>Registrate</h2>
        <form className='form' onSubmit={handleRegister}>
          <div className='form__input'>
            <label className='form__input__name'>Email:</label>
            <input className='form__input__text' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='form__input'>
            <label className='form__input__name'>Contraseña:</label>
            <input className='form__input__text' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className='form__button' type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

/*

*/