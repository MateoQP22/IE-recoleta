import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect } from 'react-router-dom';
import logo from './../assets/foto.jpg';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../login/RegisterForm';

const BarraRutasPublic = () => {
  const { user } = useAuth();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }

  return (
    <div>
      <nav>
        <div className='menu'>
        <picture >
            <img className='logo' src={logo} width={"80px"} />
          </picture>
          <ul className='menu__listas'>
            <li className='menusecondary__lista'><Link to="/">Dashboard</Link></li>
            <li className='menusecondary__lista'><Link to="/home">Home</Link> </li>
          </ul>
          <ul className='menu__listas'>
            <li className='menu__lista'><Link to="/nuevoregistro">Registrar</Link></li>
            {user ? (         ////////  Para cerrar sesión   ///////////
              <li className='menu__lista'><Link onClick={handleSignOut} > Cerrar sesión </Link> </li>
            ) : (
              <li className='menu__lista'> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
            )}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path='/iniciarsesion' element={<LoginForm />} />
        <Route path="/nuevoregistro" element={<RegisterForm />} />
      </Routes>
    </div>
  )
}

export default BarraRutasPublic;
