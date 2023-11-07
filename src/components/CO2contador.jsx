import React, { Fragment, useState } from 'react'

const CO2contador = () => {
    const [numero , setnumero] = useState(0);

    const aumentar = () => {
        console.log("Se hizo clic")
        setnumero(numero+1);
    }

  return (
    <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <button onClick={aumentar}>Aumentar</button>
    </Fragment>
  )
}

export default CO2contador