import logo from './logo.svg';
import './App.css';
import CO1componente from './components/CO1componente';
import CO2contador from './components/CO2contador';
import Variables from './components/CO4variables';
import CO6matriz from './components/CO6matriz';

function App() {
  return (
    <div>
      <CO1componente/>
      <CO2contador/>
      <Variables xVariable="Hola mundo"/>
      <CO6matriz/>
    </div>
  );
}

export default App;
