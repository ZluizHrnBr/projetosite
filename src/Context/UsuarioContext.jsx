import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioContextProvider = ({children}) => {
  
    const [usuario, setUsuario] = useState (() => {
        const usuarioSalvo = localStorage.getItem("usuario")
        return usuarioSalvo ? JSON.parse(usuarioSalvo) : {
            Id_Usuario: '',
            Nome_Usuario: '',
            Email: '',
            Senha: ''
        }
    })

    useEffect(() => {
        localStorage.setItem("usuario", JSON.stringify(usuario));
    }, [usuario])

  const HandleChange = (e) => {
    
    setUsuario(user => ({
        ...user,
        [e.target.name]: e.target.value
    }))
  }


    return(
        <UsuarioContext.Provider value={{usuario, HandleChange, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    );
}