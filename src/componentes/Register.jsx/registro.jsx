import { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { methPostUsers } from "../helpers/index";
import { Link } from "react-router-dom";
import Navbarrr from "../Navbars/Navbar";
import "../Register.jsx/registro.css"
const Registro = () => {
    const [datosEnviados, cambiarDatosEnviados] = useState(false);


    return (
        <>
        <Navbarrr/>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    correo: '',
                    password: ''
                }}
                // validate={(valores) => {
                //     let errores = {};
                //     if(!valores.nombre){
                //         errores.nombre = 'Por favor ingrese un nombre'
                //     }
                //     if(!valores.apellido){
                //         errores.apellido = 'Por favor ingrese un apellido'
                //     }

                //     if (!valores.correo) {
                //         errores.correo = 'Por favor ingrese el correo electronico.'
                //     } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(valores.correo)) {
                //         errores.correo = 'No es un correo electronico valido.'
                //     }

                //     if (!valores.contraseña) {
                //         errores.contraseña = 'Por favor ingrese la contraseña.'
                //     } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(valores.contraseña)) {
                //         errores.contraseña = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                //     }

                //     return errores;
                // }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    methPostUsers(valores);
                    cambiarDatosEnviados(true);
                    setTimeout(() => cambiarDatosEnviados(false), 5000)
                }}
                
                
                >
                {({ errors }) => (
                <section className="secformu">


                    <Container className='contenedorformu'>
                       
                        <div className="formulariologin">


                            <Form className='loginForm text-center'>
                                <h2 className="inicia"> Registrate</h2>
                                <div className="input-contenedor">
                                    <Field
                                        id="nombre"
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre"
                                    />
                                    <label htmlFor="nombre"></label>
                                    <ErrorMessage name="nombre" component={() => (
                                    <div className="error">{errors.nombre}</div>
                                    )} />  
                                </div>

                                <div className="input-contenedor">
                                    <Field
                                        id="apellido"
                                        type="text"
                                        name="apellido"
                                        placeholder="Apellido"
                                    />
                                    <label htmlFor="apellido"></label>
                                    <ErrorMessage name="apellido" component={() => (
                                    <div className="error">{errors.apellido}</div>
                                    )} />  
                                </div>


                                <div className="input-contenedor">
                                    <Field
                                        id="correo"
                                        type="text"
                                        name="correo"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="correo"></label>
                                    <ErrorMessage name="correo" component={() => (
                                    <div className="error">{errors.correo}</div>
                                    )} />  
                                </div>


                                <div className="input-contenedor">
                                    <Field
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                    />
                                    <label htmlFor="password"></label>
                                    <ErrorMessage name="password" component={() => (
                                    <div className="error text-center">{errors.password}</div>
                                    )} />
                                </div>

                                <Col className="forgot-pass">
                                    <p className="boton text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</p>
                                </Col>
                                <button type="submit" className="button">Registrarme</button>
                                {datosEnviados && <p className="usuarioRegistrado text-white">Te registraste con éxito!</p>}
                                <Col className="forgot-pass">
                                    <p >Ya tienes una cuenta? <Link to={"/Login"} className="forgot-pass">Inicia Sesión</Link></p>
                                </Col>                                      
                            </Form>
                        </div>
                    </Container>
                </section>
                )}
            </Formik>
        </>
    )
}

export default Registro

