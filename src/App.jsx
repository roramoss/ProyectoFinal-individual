import Primeravista from "./componentes/Vista1/vista1"



function App() {

 return (
   <>
<Routes>
 

 <Route > 
 
 
 {/* //La primera vista seria la pagina q uno ve si no esta logiado ni registrado */}
  <Route index element={<Primeravista/>} />
 
 <Route path='/login' element={<Login/>}/>
 <Route path='/registro' element={<Registro/>}/>
 <Route path='/Sobrenosotros' element={<SobreNosotros/>}/>
 <Route path='/ListaCompras' element={<ListaCompras/>}/>
 <Route path='/ComprasPage' element={<ComprasPage/>}/>
 <Route path='/Carrito' element={<CarritoPage/>}/>
 <Route path='/Admin' element={<Admin/>}/> 
 
 {/* // y la home principal seria la pagina que la gente puede ver cuando ya se registro o logio */}
  <Route path='Homeprincipal' element={
   <>
   
    <NavbarLog/>
   
    <Presentacion/>
 <Videos/>
 <Franquicia/>
 <Menu/>
 <Servicios/>
     <Footer/>
     
 </>
 
 }    /> 
 
  </Route>
 
    </Routes>
    </CarritoProvider>
    </ProductosProvider> 
     </> 
   

   </> 
 )
}

export default App