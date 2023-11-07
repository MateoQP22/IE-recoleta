import React, { Fragment, useState } from 'react'

const CO6matriz = () => {
    const [lista, setLista] = useState([1, 2, 3, 4, 5]);

    return (
        <Fragment>
            <h1 style={{ background: "turquoise" }}>Lectura sin index y sin html</h1>
            {
                lista.map((item, index) => 
                    <p key={index}>  El index es: {index} y el item es:  {item} </p>
                )
            }

        </Fragment>
    )
}

export default CO6matriz