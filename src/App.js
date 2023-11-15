import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLista from './protegido/sistemacrud/AppLista';
import Dashboard from './public/Dashboard';
import Home from './public/Home';
import BarraRutasPublic from './ruteo/BarraRutasPublic';
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import { useAuth } from "./ruteo/AuthContext"

function App() {
  const { user } = useAuth();

  return (
    <div style={{ background: "violet", padding: "10px" }}>
      <h1>App</h1>
      <Router>
        {user ? <BarraRutasProtected /> : <BarraRutasPublic />}
      </Router>
    </div>
  );
}

export default App;
