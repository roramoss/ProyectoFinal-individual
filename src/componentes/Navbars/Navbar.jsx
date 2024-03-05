import React from 'react'
import { Outlet, Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <header>
      <h1>Logo</h1>
      <nav>
        <Link to="/Login"> Iniciar sesion</Link>
        <Link to="/Register">Registrarse</Link>
      </nav>
      <div className='user'>
        <span className='username'>Rocio</span>
        <button className='btn-logout'> crrar sesion</button>
      </div>
    </header>
      


      <Outlet/>
    </>
  )
}



export default Navbar

