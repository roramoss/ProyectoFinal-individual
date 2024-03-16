
import {  Link, Outlet, useLocation } from "react-router-dom"
 import Container from 'react-bootstrap/Container';
 import Navbar from 'react-bootstrap/Navbar';
 import BotonCarrito from '../Cart/Boton/BotonCarrito'

 const Navbarrr = ()  => {

    return(
        <>
        <Navbar className="navnav">
        <Container >
          <Navbar.Brand  >

            <Link  to={"/"}>
            <img
              src="src/assets/assets.loginregister/img/WhatsApp_Image_2023-10-24_at_1.54.37_PM-removebg-preview.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              
              
            />

            </Link>
           
           
          </Navbar.Brand>
        </Container>
        <Link to={"/login"} className="btn-iniciar"   > Inicia Sesion</Link>
        <Link to={"/Registro"} className="btn-iniciar">Regístrate</Link>
        
      </Navbar>
        
        
        
        
        </>
    )
 }

export default Navbarrr
