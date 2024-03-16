

import Navbarrr from "../Navbars/Navbar"
import "../Vista1/vista1.css"
import {  Link, Outlet, useLocation } from "react-router-dom"

function  Primeravista ( ) {



  return (


<main>
  
 <Navbarrr /> 


<section>


<div className="container-xxl">
<img src="src/assets/assets.loginregister/img/WhatsApp_Image_2023-10-24_at_1.54.37_PM-removebg-preview.png" className="img-fluid" alt="..."/>
 
 <p>
 ¡Disfruta de un Brunch único  con ingredientes frescos, orgánicos y de alta calidad!
 </p>

</div>


</section>

<div className="container-lg">

    <h1>
    Restaurante de desayunos, brunch y almuerzo
    </h1>
    <p>
    Nuestro Restaurante ofrece desayunos, brunch y almuerzos. Donde puedes disfrutar de nuestra cocina durante todo el día. Servimos los mejores huevos benedict que puedas probar en Tucuman, Bagels originales con productos frescos y hechos al instante, Smoothies de 100% frutas, verduras y especias, los mejores waffles caseros dulces y salados, variedad de ensaladas, bowl de açai y nuestros originales poké bolws. Podrás disfrutar de una oferta de brunch de fusión absolutamente único y delicioso que no encontrará en ningún otro lugar.

Pregunta por nuestros platos fuera de la carta. Tenemos opciones para todos los públicos: Vegetarianos, Veganos, Celiacos y muchas otras intolerancias. Las opciones veganas y sin gluten siempre están presentes.
    </p>
    <h2> <Link to='/registro'>Registrate</Link> ahora y conoce nuestra variedad de productos</h2>
  </div>



</main>







  )
}

export default Primeravista