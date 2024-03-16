import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {login} from "../helpers/index";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import Navbarrr from "../Navbars/Navbar";


const Login = () => {
    const [datosEnviados, cambiarDatosEnviados] = useState(false);
    const navigate = useNavigate()
    return (
        <>
        <Navbarrr/>
            <Formik
                initialValues={{
                    correo: '',
                    password: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    // if (!valores.correo) {
                    //     errores.usuario = 'Por favor ingrese el correo electronico.'
                    // } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(valores.correo)) {
                    //     errores.correo = 'No es un correo electronico valido.'
                    // }

                    //  if (!valores.password) {
                    //      errores.password = 'Por favor ingrese la contraseña.'
                    //  } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(valores.contraseña)) {
                    //      errores.password = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                    //  }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    let usuarioRegistrado = valores;
                    resetForm();
                    login(usuarioRegistrado);
                    console.log('Formulario enviado');
                    console.log(usuarioRegistrado);
                    navigate('/Homeprincipal');
                    cambiarDatosEnviados(true);
                    setTimeout(() => cambiarDatosEnviados(false), 5000)
                }}
            >
                {({ errors }) => (



                    <section className="secformu">

                    <Container className='contenedorformu'>
                       
                        <div className="formulariologin">


                            <Form >
                                
                                <h2 className="inicia">Inicia sesion</h2>

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
                                    <a className="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</a>
                                </Col>


                                <button type="submit" className="button">Iniciar Sesión</button>


                                <Col className="forgot-pass">
                                    <p>No tienes una cuenta? <Link to={"/Registro"} className="signUp-link">Regístrate</Link></p>
                                </Col>


                            </Form>
                        </div>
                    </Container>
                    </section>
                )}
            </Formik >
        </>
    )
}

export default Login