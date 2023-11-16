import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../conexion/firebase";
import { toast } from 'react-toastify';

const AppForm = (props) => {

  ////////////////// MANEJAR INGRESO DE DATOS ///////////
  const handleStatusChange = (e) => {
    const { name, value } = e.target;       // Lectura a <input>
    setObjeto({ ...objeto, [name]: value }); // Pasando name y value
    //console.log({name, value});
    //console.log(objeto);
  }

  ////////////////// GUARDAR-ACTUALIZAR /////////////////
  const camposRegistro = { nombre: "", edad: "", genero: "" };
  const [objeto, setObjeto] = useState(camposRegistro);
  const handleSubmit = async (e) => {                 // Manejador de submit
    e.preventDefault();                               // Evitar accion por defecto
    try {
      if (props.idActual == "") {
        if (validarForm()) {                            // Validación de form
          addDoc(collection(db, 'persona'), objeto);  // Guardar en BD
          toast.success("Correctamente Agregado ", {
            autoclose: 2000
          })
        } else {
          toast.warning("Error al agregar a la persona ", {
            autoclose: 2000
          })
        }
        setObjeto(camposRegistro);                    // Borrar objeto
      } else {
        await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
        props.setIdActual("");                        // Borrar id
        toast.success("Correctamente Editado ", {
          autoclose: 2000
        })
      }
    } catch (error) {
      console.log("Error en Crear o actualizar", error);
    }
  }

  const validarForm = () => {
    if (objeto.nombre === "" || /^\s+$/.test(objeto.nombre)) {
      toast.info("El campo esta vacio, agrege un nombre ", {
        autoclose: 2000
      })
      return false;
    }
    return true;
  };

  ////////////// Obtener registro por id //////////////
  useEffect(() => {
    if (props.idActual === "") {
      setObjeto({ ...camposRegistro });
    } else {
      obtenerDatosPorId(props.idActual);
    }
  }, [props.idActual]);


  const obtenerDatosPorId = async (xId) => {
    const objPorId = doc(db, "persona", xId);   // Objeto por id
    const docPorId = await getDoc(objPorId);    // Documento por id
    if (docPorId.exists()) {
      setObjeto(docPorId.data());               // Pasar 
    } else {
      console.log("No hay doc");
    }
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit} >
        <h2 className='seccion__title' >Registrar y Actualizar</h2>
        <div className='form__input'>
          <label className='form__input__name'>Nombre:</label>
          <input className='form__input__text' onChange={handleStatusChange} value={objeto.nombre}
            name='nombre' type='text' placeholder='Nombres...' /> <br />
        </div>
        <div className='form__input'>
          <label className='form__input__name'>Edad:</label>
          <input className='form__input__text' onChange={handleStatusChange} value={objeto.edad}
            name='edad' type='text' placeholder='Edad...' /> <br />
        </div>

        <select className='form__input__text' onChange={handleStatusChange} value={objeto.genero} name='genero'>
          <option value="">Seleccione género...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select> <br />

        <button className='form__button'>
          {props.idActual == "" ? "Guardar" : "Actualizar"}
        </button>
      </form>
    </>
  )
}

export default AppForm;

/*

import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../conexion/firebase";

const AppForm = (props) => {
 
  ////////////////// MANEJAR INGRESO DE DATOS ///////////
  const handleStatusChange = (e) => {
    const {name, value} = e.target;       // Lectura a <input>
    setObjeto({...objeto, [name]:value}); // Pasando name y value
    //console.log({name, value});
    //console.log(objeto);
  }

  ////////////////// GUARDAR-ACTUALIZAR /////////////////
  const camposRegistro = { nombre:"", edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);

  const validarForm = () => {
    if(objeto.nombre === "" || /^\s+$/.test(objeto.nombre)){
      alert("Escriba nombre...");
      return false;
    }
    return true;
  };

  ////////////// Obtener registro por id //////////////
  

  //style={{ background:"orange", padding:"10px" }}
  return (
    <div style={{ background:"orange", padding:"10px" }}>
      <form >
        <button>Cerrar aplicación</button>

        <h2>Registrar (AppForm.js)</h2>

        <input 
          name='nombre' type='text' placeholder='Nombres...' /> <br/>
        
        <input
          name='edad' type='text' placeholder='Edad...' /> <br/>
        
        <select >
          <option value="">Seleccione género...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select> <br/>
        
        <button>
          {props.idActual=="" ? "Guardar": "Actualizar" }
        </button>
      </form>
    </div>
  )
}

export default AppForm;
*/