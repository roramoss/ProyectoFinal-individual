import { Route, Routes } from "react-router-dom"
import Navbar from "../componentes/Navbars/Navbar";
import Vista from "../componentes/Vista1/vista1";
import Login from "../componentes/Login/Login";
import Register from "../componentes/Register.jsx/register";
import Paginaprincipal from "../componentes/paginaprincipal/paginaprincipal";




const Router = ( ) =>{
    return(
        <>
        <Routes>

         <Route path="/" element={<Navbar/>} >   

         <Route  index element ={<Vista/>} /> 
            <Route path="Login" element ={<Login/>}/>
            <Route path="Register" element={<Register/>} />
            <Route path="Paginaprincipal" element ={<Paginaprincipal/>}/>
         
         
         </Route>

        </Routes>
        
        </>
    )
}
export default Router;
