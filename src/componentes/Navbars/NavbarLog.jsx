import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link,} from "react-router-dom"

function NavbarLog() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src="src/assets/assets.loginregister/img/WhatsApp_Image_2023-10-24_at_1.54.37_PM-removebg-preview.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              
              
            />
          </Navbar.Brand>
          <Nav className="me-auto">
          <Link to={"/Homeprincipal"} className="btn-iniciar"   > Inicio</Link>
          <Link to={"/Sobrenosotros"} className="btn-iniciar"   > Sobre Nosotros</Link>
           <Link className='btn-iniciar'> carrito</Link>

          </Nav>
        </Container>
        <Link to={"/"} className="btn-iniciar"   > Cerrar sesion</Link>
      </Navbar>
      </>
  )}
   export default NavbarLog
