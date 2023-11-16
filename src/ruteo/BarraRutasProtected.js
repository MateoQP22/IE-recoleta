import { Routes, Route, Outlet, Switch, Redirect } from 'react-router-dom';
import logo from './../assets/foto.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

///////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from '../protegido/SistemaCRUD';
import ListaDeAlumnos from '../protegido/sistemacrud/ListaDeAlumnos';

///////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from '../protegido/SistemaFILE';
import Fotos from '../protegido/sistemafile/Fotos';

//////////////////////// PAG. PUBLICOS /////////////////
import RegisterForm from '../login/RegisterForm';
import LoginForm from '../login/LoginForm';
import AppLista from '../protegido/sistemacrud/AppLista';

const BarraRutasProtected = () => {
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
    <div >
      <nav>
        <div className='menu'>
          <picture >
            <img className='logo' src={logo} width={"80px"} />
          </picture>
          <ul className='menu__listas'>
            <li className='menusecondary__lista'><Link to="/sistema-crud/applista">App Lista</Link> </li>
            <li className='menusecondary__lista'><Link to="/sistema-crud/alumnos">Alumnos</Link> </li>
            <li className='menusecondary__lista'><Link to="/sistema-file/fotos">Fotos</Link> </li>
          </ul>
          <ul className='menu__listas'>
            {user ? (         ////////  Usuario autenticado  ///////////
              <li className='menu__lista__user'>Usuario autenticado: <span> {user.email}</span> </li>
            ) : (
              null
            )}
            {user ? (         ////////  Para cerrar sesión   ///////////
              <li className='menu__lista'><Link onClick={handleSignOut} > Cerrar sesión </Link> </li>
            ) : (
              <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
            )}
          </ul>
        </div>
      </nav>

      <Routes>

        <Route path="/iniciarsesion" element={<LoginForm />} />
        <Route path="/nuevoregistro" element={<RegisterForm />} />


        <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
          <Route index element={<SistemaCRUD />} />
          <Route path="applista" element={<AppLista />} />
          <Route path="alumnos" element={<ListaDeAlumnos />} />
        </Route>


        <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
          <Route index element={<SistemaFILE />} />
          <Route path="fotos" element={<Fotos />} />
        </Route>

      </Routes>
    </div>
  )
}

export default BarraRutasProtected;

function MarcoParaSistemaCRUD() {
  return (
    <div className='container'>
      <div className='seccion'>
        <h2 className='seccion__title'>Marco sistema CRUD</h2>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    </div>
  );
}

function MarcoParaSistemaFILE() {
  return (
    <div style={{ background: "slateblue", padding: "10px" }}>
      <h1>Marco Sistema FILES</h1>
      < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
    </div>
  );
}


