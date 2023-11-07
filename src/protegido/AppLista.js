import React from 'react'
import AppForm from './AppForm'

const AppLista = (props) => {
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
      <h1>AppLista</h1>
      <AppForm/>
      <h3>Lista de Clientes</h3>
      <p>No. 1. Juan Manuel Ticona Vega ..... x ..... A</p>
      <p>No. 2. Rosa Maria Luque Conde ..... x ..... A</p>
      <p>No. 3. Joe Ricardo Lopez Moral ..... x ..... A</p>
    </div>
  )
}

export default AppLista