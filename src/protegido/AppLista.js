import React, { useEffect, useState } from 'react'
import AppForm from './AppForm'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';

const AppLista = (props) => {
  const [docBD, setDocBD] = useState([]);
  const frRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) =>{
      const xDoc = [];
      xDatosBD.forEach((doc)=>{
        xDoc.push({id:doc.id, ...doc.data()});
      });
      setDocBD(xDoc);
    });
  }
  frRead();

  // useEffect(()=>{ frRead();},[props.idActual]);

  const [idActual, setIdActual] = useState("");
  const fnDelete = async (xId) => {
      if(window.confirm("Confirme para eliminar")){
          await deleteDoc(doc(db, "persona", xId));
      }
    alert("Se elimino con éxito...");
  }
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
      <h1>AppLista</h1>
      <AppForm {...{idActual, setIdActual}}/>
      <h3>Lista de Clientes</h3>
      {
        docBD.map((data, index) => 
        <p key={data.id}>
          No. {index + 1}. {data.nombre} 
          ..............
          <span onClick={() => fnDelete(data.id)}>❌</span>
          ..............
          <span onClick={() => setIdActual(data.id)}>📝</span>
        </p>
        )
      }
    </div>
  )
}

export default AppLista