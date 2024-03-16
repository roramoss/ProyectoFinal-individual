import axios from 'axios';

export const methPost= async(obj)=>{
    try {
        axios.post(URL_productos + "/createProducts/",obj)
    } catch (error) {
        console.log(error);
    }
}

export const methPostUsers= async(obj)=>{
    obj.admin=false;
    try {
        await axios.post(`https://spring-roll.onrender.com/api/usuarios/createUser`,obj)
    } catch (error) {
        console.log(error);
    }
}
export const methoGetOne=(id)=>{
    try {
        let productos =axios.get(`${URL_productos}/getOneProduct/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}
export const methoGetOneUser=(id)=>{
    try {
        let usuario =axios.get(`https://spring-roll.onrender.com/api/usuarios/getOneUser/${id}`)
        return usuario;
    } catch (error) {
        console.log(error);
    }
}

export const  methGet=async()=>{
    try {
        let productos =axios.get(URL_productos + "/getProducts")
        return productos;
    } catch (error) {
        console.log(error);
    }
}


export const  methGetUsers=async()=>{
    try {
        let users = await axios.get(URL_usuarios + "/getUsers")
        return users;
    } catch (error) {
        console.log(error);
    }
}

export const login = async (obj) => {
    try {
        await axios.post("https://spring-roll.onrender.com/api/auth/login",obj)
    
    } catch (error) {
        console.log(error);
    }
}


export const methoDeleteOne=(id)=>{
    try {
        let productos =axios.delete(`${URL_productos}/deleteProduct/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const methoDeleteOneUser=(id)=>{
    try {
        let productos =axios.delete(`${URL_usuarios}/deleteUser/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const methUpdate= async(obj,id)=>{
    console.log(obj,id);
    try {
        let editProduct = axios.put(`${URL_productos}/updateProduct/${id}`,obj)
        return editProduct
    } catch (error) {
        console.log(error);
    }
}
export const methUpdateUser= async(obj,id)=>{
    console.log(obj,id);
    try {
        let editUsuario = axios.put(`${URL_usuarios}//updateUser/${id}`,obj)
        return editUsuario
    } catch (error) {
        console.log(error);
    }
}